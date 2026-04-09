var firebaseConfig = { 
    apiKey: "AIzaSyB9XbvwAckW59yxfj3y1MXD9izwC1uww48",
    authDomain: "bahraindelivery-2be5f.firebaseapp.com",
    databaseURL: "https://bahraindelivery-2be5f-default-rtdb.firebaseio.com/",
    projectId: "bahraindelivery-2be5f",
    storageBucket: "bahraindelivery-2be5f.firebasestorage.app",
    messagingSenderId: "1067476878954",
    appId: "1:1067476878954:web:096eaea397030df494ac13"
};

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
var db = firebase.database();
var auth = firebase.auth();

window.alert = function(message) {
    let iconType = 'info';
    let titleText = 'تنبيه';

    if (message.includes('خطأ') || message.includes('غير صحيح') || message.includes('ناقص') || message.includes('يرجى') || message.includes('عذراً') || message.includes('خارج')) {
        iconType = 'error';
        titleText = 'عذراً!';
    } else if (message.includes('بنجاح') || message.includes('تم') || message.includes('شكراً')) {
        iconType = 'success';
        titleText = 'عملية ناجحة';
    } else if (message.includes('مرحباً')) {
        iconType = 'success';
        titleText = 'أهلاً بك';
    }

    Swal.fire({
        title: titleText,
        text: message,
        icon: iconType,
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#DA291C',
        width: '85%',
        backdrop: `rgba(0,0,0,0.5)`, 
        allowOutsideClick: false 
    });
};

var mapP, markerP, mapD, markerD, isSendingOrder = false;
var masterMethod = ""; 
var BH_BOUNDS = { latMin: 25.70, latMax: 26.40, lngMin: 50.30, lngMax: 50.90 };
var confirmationResult = null;
var currentPendingOrderId = null; 

var currentFlow = ""; 
var tempFullPhone = ""; 
var tempUserName = ""; 
var multiOrdersList = []; 
var currentCheckoutList = []; 
var addedByProceed = false;

var otpTimer = null;

var currentWalletBalance = 0;
var isWalletApplied = false;
var appliedWalletDiscount = 0;
var currentOriginalTotal = 0;
var currentFinalTotal = 0;

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible'
});

window.selectItemType = function(val, el) {
    const allBoxes = document.querySelectorAll('.item-type-grid .type-box, .type-others');
    allBoxes.forEach(box => box.classList.remove('selected'));
    el.classList.add('selected');
    
    document.getElementById('p-item-type').value = val;
    
    const warningDiv = document.getElementById('fragile-warning');
    if (val === 'قابل للكسر') {
        warningDiv.style.display = 'block';
        Swal.fire({
            title: 'تنبيه هام ⚠️',
            text: 'نحن لا نتحمل أي مسؤولية عن تلف أو ضرر الأشياء القابلة للكسر أثناء التوصيل.',
            icon: 'warning',
            confirmButtonText: 'موافق، أتحمل المسؤولية',
            confirmButtonColor: '#DA291C'
        });
    } else {
        warningDiv.style.display = 'none';
    }
};

window.toggleWalletUsage = function() {
    isWalletApplied = !isWalletApplied;
    var btn = document.getElementById('btn-toggle-wallet');
    if (isWalletApplied) {
        btn.innerText = "إلغاء الاستخدام";
        btn.style.background = "#DA291C";
    } else {
        btn.innerText = "استخدام الرصيد";
        btn.style.background = "#27ae60";
    }
    renderCartAndPaymentUI();
};

function watchUserWallet() {
    var uPhone = localStorage.getItem('uPhone');
    if (!uPhone) return;
    db.ref('users/' + uPhone + '/wallet').on('value', snap => {
        currentWalletBalance = parseFloat(snap.val() || 0);
        const walletEl = document.getElementById('user-wallet-balance');
        const checkoutWalletEl = document.getElementById('checkout-wallet-balance');
        if(walletEl) walletEl.innerText = currentWalletBalance.toFixed(3) + " د.ب";
        if(checkoutWalletEl) checkoutWalletEl.innerText = currentWalletBalance.toFixed(3) + " د.ب";
        
        if (document.getElementById('page-payment').classList.contains('active-page')) {
            renderCartAndPaymentUI();
        }
    });
}

async function startOtpProcess() {
    var nm = document.getElementById('reg-name').value.trim();
    var ph = document.getElementById('reg-phone').value.trim().replace(/\s+/g, '');
    var ps = document.getElementById('reg-pass').value.trim();
    var pc = document.getElementById('reg-pass-confirm').value.trim();
    var country = document.getElementById('reg-country').value;

    if(!nm || !ph || !ps || !pc) return alert("يرجى ملء جميع الحقول");
    if(ps !== pc) return alert("كلمة المرور غير متطابقة");
    if(ph.length < 7) return alert("رقم الهاتف غير صحيح");

    var fullPhone = country + ph; 
    var btn = document.getElementById('otp-btn');
    btn.disabled = true;
    btn.innerText = "جاري التحقق...";

    db.ref('users/' + fullPhone).once('value', snapshot => {
        if (snapshot.exists()) {
            if (snapshot.val().status === 'suspended') {
                btn.disabled = false;
                btn.innerText = "إرسال رمز التحقق";
                return alert("الحساب موقف الرجاء التواصل مع الدعم شكرا لتفهمكم");
            }
            alert("هذا الرقم مسجل و فعال");
            btn.disabled = false;
            btn.innerText = "إرسال رمز التحقق";
        } else {
            currentFlow = "register";
            tempFullPhone = fullPhone;
            sendOtpCode(fullPhone, btn);
        }
    }).catch(error => {
        alert("خطأ في قاعدة البيانات. تأكد من إعدادات (Rules) في فايربيس: " + error.message);
        btn.disabled = false;
        btn.innerText = "إرسال رمز التحقق";
    });
}

function startForgotProcess() {
    var ph = document.getElementById('forgot-phone').value.trim().replace(/\s+/g, '');
    var country = document.getElementById('forgot-country').value;

    if(!ph) return alert("الرجاء إدخال رقم الهاتف");

    var fullPhone = country + ph; 
    var btn = document.getElementById('forgot-btn');
    btn.disabled = true;
    btn.innerText = "جاري التحقق...";

    db.ref('users/' + fullPhone).once('value', snapshot => {
        if (!snapshot.exists()) {
            alert("هذا الرقم غير مسجل لدينا، تأكد من الرقم والمفتاح");
            btn.disabled = false;
            btn.innerText = "إرسال رمز التحقق";
        } else {
            if (snapshot.val().status === 'suspended') {
                btn.disabled = false;
                btn.innerText = "إرسال رمز التحقق";
                return alert("الحساب موقف الرجاء التواصل مع الدعم شكرا لتفهمكم");
            }
            currentFlow = "forgot";
            tempFullPhone = fullPhone;
            sendOtpCode(fullPhone, btn);
        }
    }).catch(error => {
        alert("خطأ في قاعدة البيانات. تأكد من إعدادات (Rules) في فايربيس: " + error.message);
        btn.disabled = false;
        btn.innerText = "إرسال رمز التحقق";
    });
}

function startOtpTimer() {
    var resendBtn = document.getElementById('resend-otp-btn');
    resendBtn.disabled = true;
    resendBtn.style.color = "#888";
    var timeLeft = 60;
    resendBtn.innerText = `أرسل مجدداً (${timeLeft})`;

    clearInterval(otpTimer);
    otpTimer = setInterval(() => {
        timeLeft--;
        resendBtn.innerText = `أرسل مجدداً (${timeLeft})`;
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
            resendBtn.innerText = "أرسل مجدداً";
            resendBtn.disabled = false;
            resendBtn.style.color = "var(--benefit-blue)";
        }
    }, 1000);
}

function resendOtpCode() {
    var btn = document.getElementById('resend-otp-btn');
    btn.innerText = "جاري الإرسال...";
    btn.disabled = true;
    auth.signInWithPhoneNumber(tempFullPhone, window.recaptchaVerifier)
        .then((result) => {
            confirmationResult = result;
            alert("تم إرسال الرمز مجدداً بنجاح");
            startOtpTimer();
        }).catch((error) => {
            alert("حدث خطأ في إعادة الإرسال: " + error.message);
            btn.innerText = "أرسل مجدداً";
            btn.disabled = false;
        });
}

function sendOtpCode(fullPhone, btn) {
    btn.innerText = "جاري الإرسال...";
    auth.signInWithPhoneNumber(fullPhone, window.recaptchaVerifier)
        .then((result) => {
            confirmationResult = result;
            document.getElementById('otp-overlay').style.display = 'flex';
            btn.disabled = false;
            btn.innerText = "إرسال رمز التحقق";
            startOtpTimer(); 
        }).catch((error) => {
            if(error.code === 'auth/unauthorized-domain') {
                alert("تنبيه: يجب إضافة رابط موقعك (GitHub) إلى النطاقات المعتمدة (Authorized domains) في إعدادات Firebase Auth ليتمكن من إرسال الرسائل.");
            } else {
                alert("حدث خطأ في إرسال الرمز: " + error.message);
            }
            btn.disabled = false;
            btn.innerText = "إرسال رمز التحقق";
        });
}

function verifyOtpCode() {
    var code = document.getElementById('otp-code').value;
    if(!code) return alert("أدخل الرمز");

    var vBtn = document.getElementById('verify-otp-btn');
    vBtn.style.background = '#95a5a6';
    vBtn.innerText = 'جاري التأكيد...';
    vBtn.disabled = true;

    confirmationResult.confirm(code).then(() => {
        closeOtpOverlay();
        if (currentFlow === "register") {
            finishRegistration();
        } else if (currentFlow === "forgot") {
            goTo('page-reset-password');
        } else if (currentFlow === "login_otp") {
            db.ref('users/' + tempFullPhone).update({ requiresOTP: null }); 
            localStorage.setItem('uPhone', tempFullPhone);
            watchUserWallet();
            goTo('page-home');
            document.getElementById('welcome-msg').innerText = "مرحباً " + tempUserName;
            alert("تم تأكيد هويتك وتسجيل دخولك بنجاح.");
        }
    }).catch(() => {
        alert("الرمز غير صحيح");
        vBtn.style.background = 'var(--red)';
        vBtn.innerText = 'تأكيد الرمز';
        vBtn.disabled = false;
        document.getElementById('otp-code').value = ""; 
    });
}

function finishRegistration() {
    var nm = document.getElementById('reg-name').value.trim();
    var ps = document.getElementById('reg-pass').value.trim();

    db.ref('users/' + tempFullPhone).set({
        name: nm, 
        password: ps, 
        verified: true,
        createdAt: Date.now(),
        status: 'active',
        wallet: 0
    }).then(() => {
        alert("تم إنشاء الحساب بنجاح! سجل دخولك الآن.");
        document.getElementById('reg-name').value = "";
        document.getElementById('reg-phone').value = "";
        document.getElementById('reg-pass').value = "";
        document.getElementById('reg-pass-confirm').value = "";
        goTo('page-login');
    });
}

function updatePassword() {
    var p1 = document.getElementById('new-pass').value.trim();
    var p2 = document.getElementById('new-pass-confirm').value.trim();

    if(!p1 || !p2) return alert("يرجى إدخال كلمة المرور");
    if(p1 !== p2) return alert("كلمة المرور غير متطابقة");

    db.ref('users/' + tempFullPhone).update({
        password: p1,
        failedAttempts: 0,
        lockUntil: null,
        requiresOTP: null
    }).then(() => {
        alert("تم تحديث كلمة المرور ورفع أي قيود عن الحساب بنجاح. يمكنك تسجيل الدخول الآن.");
        document.getElementById('new-pass').value = "";
        document.getElementById('new-pass-confirm').value = "";
        goTo('page-login');
    }).catch(err => {
        alert("حدث خطأ أثناء التحديث");
    });
}

function secureLogin() {
    var country = document.getElementById('login-country').value;
    var ph = document.getElementById('login-phone').value.trim().replace(/\s+/g, '');
    var ps = document.getElementById('login-pass').value.trim();
    
    if(!ph || !ps) return alert("أدخل بيانات الدخول كاملة");
    
    var fullPhone = country + ph; 
    
    var btn = document.querySelector('#page-login .btn-red');
    btn.disabled = true;
    btn.innerText = "جاري التحقق...";

    db.ref('users/' + fullPhone).once('value', s => {
        btn.disabled = false;
        btn.innerText = "تسجيل الدخول";

        if(s.exists()) {
            var userData = s.val();
            var now = Date.now();
            var updates = {};
            var needsUpdate = false;

            if (userData.status === 'suspended') {
                return alert("الحساب موقف الرجاء التواصل مع الدعم شكرا لتفهمكم");
            }

            if (userData.lockUntil && userData.lockUntil > now) {
                return alert("تم قفل الحساب لتجاوز الحد المسموح من المحاولات الخاطئة (10 محاولات). يرجى المحاولة بعد 12 ساعة أو قم باستعادة كلمة المرور لفتح الحساب فوراً.");
            } else if (userData.lockUntil && userData.lockUntil <= now) {
                updates.failedAttempts = 0;
                updates.lockUntil = null;
                updates.requiresOTP = true;
                userData.requiresOTP = true; 
                needsUpdate = true;
            }

            if(String(userData.password) === ps) { 
                if (userData.failedAttempts > 0) {
                    updates.failedAttempts = 0;
                    needsUpdate = true;
                }

                if (needsUpdate) db.ref('users/' + fullPhone).update(updates);

                if (userData.requiresOTP) {
                    alert("لحماية حسابك بعد قفله مسبقاً، يرجى تأكيد رقم الهاتف (OTP) للمتابعة.");
                    currentFlow = "login_otp";
                    tempFullPhone = fullPhone;
                    tempUserName = userData.name || "";
                    sendOtpCode(fullPhone, btn);
                } else {
                    localStorage.setItem('uPhone', fullPhone); 
                    watchUserWallet();
                    goTo('page-home'); 
                    document.getElementById('welcome-msg').innerText = "مرحباً " + (userData.name || "");
                }
            } else {
                var fails = (userData.failedAttempts || 0) + 1;
                
                if (fails >= 10) {
                    updates.failedAttempts = fails;
                    updates.lockUntil = now + (12 * 60 * 60 * 1000); 
                    db.ref('users/' + fullPhone).update(updates);
                    alert("لقد أدخلت كلمة المرور بشكل خاطئ 10 مرات! تم قفل الحساب لمدة 12 ساعة لحمايتك. يمكنك الانتظار أو النقر على 'نسيت كلمة المرور' لفتحه الآن.");
                } else {
                    updates.failedAttempts = fails;
                    db.ref('users/' + fullPhone).update(updates);
                    var remaining = 10 - fails;
                    alert(`كلمة المرور غير صحيحة. تبقت لك ${remaining} محاولات قبل قفل الحساب مؤقتاً.`);
                }
            }
        }
        else {
            alert("هذا الرقم غير مسجل لدينا، يرجى التحقق أو إنشاء حساب جديد.");
        }
    });
}

function closeOtpOverlay() { 
    document.getElementById('otp-overlay').style.display = 'none'; 
    document.getElementById('otp-code').value = ""; 
    clearInterval(otpTimer);
    
    var vBtn = document.getElementById('verify-otp-btn');
    if(vBtn) {
        vBtn.style.background = 'var(--red)';
        vBtn.innerText = 'تأكيد الرمز';
        vBtn.disabled = false;
    }
}

function startNewOrder() {
    currentPendingOrderId = null;
    multiOrdersList = []; 
    currentCheckoutList = [];
    addedByProceed = false;
    
    isWalletApplied = false; 
    appliedWalletDiscount = 0;
    var btnWallet = document.getElementById('btn-toggle-wallet');
    if(btnWallet) {
        btnWallet.innerText = "استخدام الرصيد";
        btnWallet.style.background = "#27ae60";
    }

    document.getElementById('added-orders-badge').style.display = 'none';
    
    var paymentBackBtn = document.querySelector('#page-payment .back-btn');
    if(paymentBackBtn) paymentBackBtn.setAttribute('onclick', "goTo('page-order-summary')");

    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.id !== 'login-phone' && input.id !== 'login-pass') {
            input.value = "";
        }
    });
    
    if(document.getElementById('p-item-type')) {
        document.getElementById('p-item-type').value = 'غير محدد';
        document.querySelectorAll('.type-box').forEach(b => b.classList.remove('selected'));
        document.getElementById('fragile-warning').style.display = 'none';
    }
    
    if (markerP && mapP) { markerP.setMap(null); markerP = null; }
    if (markerD && mapD) { markerD.setMap(null); markerD = null; }
    goTo('page-map-pickup');
}

function goTo(id) {
    var currentPage = document.querySelector('.active-page');

    if (currentPage && currentPage.id === 'page-map-delivery' && id === 'page-info-pickup') {
        if (currentCheckoutList.length > 0) {
            id = 'page-order-summary';
        }
    }

    if (currentPage && currentPage.id === 'page-register' && id !== 'page-register') {
        document.getElementById('reg-name').value = "";
        document.getElementById('reg-phone').value = "";
        document.getElementById('reg-pass').value = "";
        document.getElementById('reg-pass-confirm').value = "";
    }
    if (currentPage && currentPage.id === 'page-forgot' && id !== 'page-forgot') {
        document.getElementById('forgot-phone').value = "";
    }

    if (id === 'page-home') {
        watchUserWallet();
    }

    if (id === 'page-info-delivery' && (document.getElementById('page-payment').classList.contains('active-page') || document.getElementById('page-order-summary').classList.contains('active-page'))) {
        if (addedByProceed && multiOrdersList.length > 0) {
            var lastItem = multiOrdersList.pop(); 
            currentCheckoutList = [...multiOrdersList];
            
            document.getElementById('d-phone').value = lastItem.dPhone || "";
            document.getElementById('d-area').value = lastItem.dArea || "";
            document.getElementById('d-block').value = lastItem.dBlock || "";
            document.getElementById('d-road').value = lastItem.dRoad || "";
            document.getElementById('d-house').value = lastItem.dHouse || "";
            document.getElementById('d-type').value = lastItem.dType || "";
            document.getElementById('d-link').value = lastItem.dLink || "";
            document.getElementById('d-collection').value = (lastItem.dCollection && lastItem.dCollection !== "0") ? lastItem.dCollection : "";
            
            if (lastItem.lat && lastItem.lng) {
                var loc = new google.maps.LatLng(lastItem.lat, lastItem.lng);
                if (markerD) markerD.setMap(null);
                if (mapD) {
                    markerD = new google.maps.Marker({ map: mapD, position: loc });
                    mapD.setCenter(loc);
                }
            }
            addedByProceed = false;
        }
        
        var badge = document.getElementById('added-orders-badge');
        if(badge) {
            if(multiOrdersList.length > 0) {
                badge.style.display = 'block';
                document.getElementById('orders-counter').innerText = multiOrdersList.length;
            } else {
                badge.style.display = 'none';
            }
        }
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(id).classList.add('active-page');
    
    if(id === 'page-map-pickup') {
        initMap('map-pickup', 'p');
        if(mapP) setTimeout(() => google.maps.event.trigger(mapP, 'resize'), 400);
    }
    if(id === 'page-map-delivery') {
        initMap('map-delivery', 'd');
        if(mapD) setTimeout(() => google.maps.event.trigger(mapD, 'resize'), 400);
    }
}

function initMap(divId, type) {
    setTimeout(() => {
        var bahrainCenter = { lat: 26.2285, lng: 50.5860 };
        var mapOptions = { zoom: 12, center: bahrainCenter, mapTypeControl: false, streetViewControl: false, fullscreenControl: false, gestureHandling: 'greedy' };

        if (type === 'p' && !mapP) {
            mapP = new google.maps.Map(document.getElementById(divId), mapOptions);
            var input = document.createElement('input');
            input.type = 'text'; input.placeholder = 'ابحث عن مطعم، محل، مستشفى...'; input.className = 'google-search-box';
            mapP.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
            var autocomplete = new google.maps.places.Autocomplete(input, { componentRestrictions: { country: "bh" } });
            autocomplete.bindTo('bounds', mapP);

            autocomplete.addListener('place_changed', () => {
                var place = autocomplete.getPlace();
                if (!place.geometry || !place.geometry.location) return;
                if (markerP) markerP.setMap(null);
                markerP = new google.maps.Marker({ map: mapP, position: place.geometry.location });
                mapP.setCenter(place.geometry.location); mapP.setZoom(16);
            });

            mapP.addListener('click', e => {
                if (markerP) markerP.setMap(null);
                markerP = new google.maps.Marker({ map: mapP, position: e.latLng });
            });
        } else if (type === 'd' && !mapD) {
            mapD = new google.maps.Map(document.getElementById(divId), mapOptions);
            var input = document.createElement('input');
            input.type = 'text'; input.placeholder = 'ابحث عن مطعم، محل، مستشفى...'; input.className = 'google-search-box';
            mapD.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
            var autocomplete = new google.maps.places.Autocomplete(input, { componentRestrictions: { country: "bh" } });
            autocomplete.bindTo('bounds', mapD);

            autocomplete.addListener('place_changed', () => {
                var place = autocomplete.getPlace();
                if (!place.geometry || !place.geometry.location) return;
                if (markerD) markerD.setMap(null);
                markerD = new google.maps.Marker({ map: mapD, position: place.geometry.location });
                mapD.setCenter(place.geometry.location); mapD.setZoom(16);
            });

            mapD.addListener('click', e => {
                if (markerD) markerD.setMap(null);
                markerD = new google.maps.Marker({ map: mapD, position: e.latLng });
            });
        }
    }, 300);
}

function getCurrentLocation(type) {
    if (!navigator.geolocation) return alert("المتصفح لا يدعم GPS");
    navigator.geolocation.getCurrentPosition(pos => {
        var lat = pos.coords.latitude; var lng = pos.coords.longitude;
        if (lat >= BH_BOUNDS.latMin && lat <= BH_BOUNDS.latMax && lng >= BH_BOUNDS.lngMin && lng <= BH_BOUNDS.lngMax) {
            var loc = { lat: lat, lng: lng };
            if (type === 'p') {
                if(markerP) markerP.setMap(null);
                markerP = new google.maps.Marker({ map: mapP, position: loc }); 
                mapP.setCenter(loc); mapP.setZoom(17);
            } else {
                if(markerD) markerD.setMap(null);
                markerD = new google.maps.Marker({ map: mapD, position: loc }); 
                mapD.setCenter(loc); mapD.setZoom(17);
            }
        } else { alert("موقعك خارج حدود البحرين"); }
    }, () => alert("فشل تحديد الموقع - تأكد من تشغيل الموقع في هاتفك"), {enableHighAccuracy: true});
}

function confirmStep(step) {
    if (step === 'pickup' && !markerP) return alert("حدد موقع الاستلام على الخريطة أولاً");
    if (step === 'delivery' && !markerD) return alert("حدد موقع التسليم على الخريطة أولاً");
    goTo(step === 'pickup' ? 'page-info-pickup' : 'page-info-delivery');
}

function isOutsideBahrain(lat, lng) {
    return (lat < BH_BOUNDS.latMin || lat > BH_BOUNDS.latMax || lng < BH_BOUNDS.lngMin || lng > BH_BOUNDS.lngMax);
}

function processCurrentDeliveryData() {
    if(!markerP || !markerD) return { error: "يرجى تحديد المواقع أولاً" };
    
    var dPhone = document.getElementById('d-phone').value.trim();
    var dArea = document.getElementById('d-area').value.trim();
    var dBlock = document.getElementById('d-block').value.trim();
    var dRoad = document.getElementById('d-road').value.trim();
    var dHouse = document.getElementById('d-house').value.trim();
    var dCollection = document.getElementById('d-collection').value.trim();

    if(!dPhone || !dArea || !dBlock || !dRoad || !dHouse) {
        return { error: "يرجى إكمال جميع بيانات التسليم الإجبارية" };
    }

    var latP = markerP.getPosition().lat();
    var lngP = markerP.getPosition().lng();
    var latD = markerD.getPosition().lat();
    var lngD = markerD.getPosition().lng();

    if (isOutsideBahrain(latP, lngP) || isOutsideBahrain(latD, lngD)) {
        return { error: "OUT_OF_BOUNDS" };
    }

    var rawDist = google.maps.geometry.spherical.computeDistanceBetween(markerP.getPosition(), markerD.getPosition()) / 1000;
    var distForPricing = Math.ceil(rawDist);
    var calcPrice = 0;

    if (distForPricing <= 6) calcPrice = 1.000;
    else if (distForPricing <= 10) calcPrice = 1.800;
    else if (distForPricing <= 15) calcPrice = 2.200;
    else if (distForPricing <= 20) calcPrice = 2.500;
    else {
        var extraKm = distForPricing - 20;
        calcPrice = 2.500 + (extraKm * 0.050);
    }

    return {
        dPhone: dPhone, dArea: dArea, dBlock: dBlock, dRoad: dRoad, dHouse: dHouse,
        dType: document.getElementById('d-type').value.trim(),
        dLink: document.getElementById('d-link').value.trim(),
        dCollection: dCollection || "0",
        lat: latD, lng: lngD,
        price: calcPrice.toFixed(3),
        method: '' 
    };
}

function proceedToPayment() {
    var dPhone = document.getElementById('d-phone').value.trim();
    var dArea = document.getElementById('d-area').value.trim();
    
    var pItemType = document.getElementById('p-item-type') ? document.getElementById('p-item-type').value : 'غير محدد';
    if(pItemType === 'غير محدد') {
        alert("يرجى اختيار 'نوع المنتج المستلم' من الخيارات المتاحة في الأعلى.");
        goTo('page-info-pickup');
        return;
    }
    
    if (!dPhone && !dArea && multiOrdersList.length > 0) {
        currentCheckoutList = [...multiOrdersList];
        renderOrderSummary();
        goTo('page-order-summary');
        return;
    }

    var data = processCurrentDeliveryData();
    if (data.error === "OUT_OF_BOUNDS" && multiOrdersList.length === 0) {
        document.getElementById('out-of-bounds-overlay').style.display = 'flex';
        return;
    }
    if (data.error === "OUT_OF_BOUNDS" && multiOrdersList.length > 0) {
        return alert("لا يمكن دمج طلب خارج البحرين مع طلبات داخلية.");
    }
    if (data.error) return alert(data.error);

    multiOrdersList.push(data);
    addedByProceed = true; 
    
    currentCheckoutList = [...multiOrdersList]; 

    renderOrderSummary();
    goTo('page-order-summary');
}

function addAnotherFromSummary() {
    addedByProceed = false; 
    multiOrdersList = [...currentCheckoutList]; 
    
    document.getElementById('d-phone').value = "";
    document.getElementById('d-area').value = "";
    document.getElementById('d-block').value = "";
    document.getElementById('d-road').value = "";
    document.getElementById('d-house').value = "";
    document.getElementById('d-type').value = "";
    document.getElementById('d-link').value = "";
    document.getElementById('d-collection').value = "";
    if (markerD) { markerD.setMap(null); markerD = null; }
    
    document.getElementById('added-orders-badge').style.display = 'block';
    document.getElementById('orders-counter').innerText = multiOrdersList.length;

    goTo('page-map-delivery');
}

function renderOrderSummary() {
    var summaryArea = document.getElementById('summary-content-area');
    var pPhone = document.getElementById('p-phone').value || "غير محدد";
    var pArea = document.getElementById('p-area').value || "غير محدد";
    var pBlock = document.getElementById('p-block').value || "-";
    var pRoad = document.getElementById('p-road').value || "-";
    var pHouse = document.getElementById('p-house').value || "-";
    var pItemType = document.getElementById('p-item-type') ? document.getElementById('p-item-type').value : "غير محدد";

    var html = `
    <div class="card" style="border-right: 5px solid var(--red); margin-bottom: 15px; background: #fff;">
        <h4 style="margin-top: 0; color: #333;">تفاصيل موقع الاستلام:</h4>
        <p style="margin: 5px 0;"><b>نوع المنتج:</b> ${pItemType}</p>
        <p style="margin: 5px 0;"><b>المنطقة:</b> ${pArea} (مجمع: ${pBlock}, طريق: ${pRoad}, مبنى: ${pHouse})</p>
        <p style="margin: 5px 0;"><b>هاتف الاستلام:</b> <span dir="ltr">${pPhone}</span></p>
    </div>
    
    <div style="text-align: center; margin: 20px 0 10px;">
        <h3 style="color: #005EB8; margin: 0;"><i class="fas fa-truck"></i> وجهات التسليم (${currentCheckoutList.length})</h3>
    </div>
    `;

    currentCheckoutList.forEach((del, index) => {
        html += `
        <div class="card" style="border-right: 5px solid #005EB8; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="margin-top: 0; color: #005EB8;">وجهة رقم ${index + 1}</h4>
                <b style="color: var(--red);">${del.price} د.ب</b>
            </div>
            <p style="margin: 5px 0;"><b>المنطقة:</b> ${del.dArea} (مجمع: ${del.dBlock}, طريق: ${del.dRoad}, مبنى: ${del.dHouse})</p>
            <p style="margin: 5px 0;"><b>هاتف الزبون:</b> <span dir="ltr">${del.dPhone}</span></p>
            <p style="margin: 5px 0;"><b>مبلغ بضاعتك للتحصيل:</b> ${del.dCollection} د.ب</p>

            <button onclick="deleteDeliveryFromSummary(${index})" style="width: 100%; margin-top: 15px; background: #ffebeb; color: var(--red); border: 1px solid var(--red); padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px;">
                <i class="fas fa-trash-alt"></i> حذف هذا التسليم
            </button>
        </div>
        `;
    });

    summaryArea.innerHTML = html;
}

function deleteDeliveryFromSummary(index) {
    Swal.fire({
        title: 'تأكيد الحذف',
        text: "هل أنت متأكد أنك تريد حذف هذا التسليم؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: 'نعم، قم بالحذف',
        cancelButtonText: 'لا، تراجع'
    }).then((result) => {
        if (result.isConfirmed) {
            currentCheckoutList.splice(index, 1);
            multiOrdersList = [...currentCheckoutList]; 
            addedByProceed = false; 

            if (currentCheckoutList.length === 0) {
                Swal.fire('تم الحذف', 'تم حذف جميع وجهات التسليم. سيتم إرجاعك لتحديد موقع تسليم جديد.', 'info');
                
                var badge = document.getElementById('added-orders-badge');
                if(badge) badge.style.display = 'none';
                
                goTo('page-map-delivery');
            } else {
                var badge = document.getElementById('added-orders-badge');
                if(badge) {
                    document.getElementById('orders-counter').innerText = currentCheckoutList.length;
                }
                renderOrderSummary(); 
            }
        }
    });
}

function confirmSummaryAndPay() {
    renderCartAndPaymentUI();
    goTo('page-payment');
}

function removeDeliveryFromCart(index) {
    Swal.fire({
        title: 'حذف الطلب',
        text: "هل أنت متأكد من حذف هذا الطلب من السلة؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: 'نعم، احذف الطلب',
        cancelButtonText: 'إلغاء'
    }).then((result) => {
        if (result.isConfirmed) {
            currentCheckoutList.splice(index, 1);
            multiOrdersList = [...currentCheckoutList]; 
            addedByProceed = false; 
            
            var badge = document.getElementById('added-orders-badge');
            if(badge) {
                if(currentCheckoutList.length > 0) {
                    badge.style.display = 'block';
                    document.getElementById('orders-counter').innerText = currentCheckoutList.length;
                } else {
                    badge.style.display = 'none';
                }
            }

            if(currentCheckoutList.length === 0) {
                alert("السلة فارغة الآن، يرجى إضافة موقع تسليم جديد.");
                goTo('page-map-delivery'); 
            } else {
                renderCartAndPaymentUI(); 
            }
        }
    });
}

function renderCartAndPaymentUI() {
    var listHtml = '';
    currentOriginalTotal = 0;
    
    currentCheckoutList.forEach((order, index) => {
        currentOriginalTotal += parseFloat(order.price);
        
        let cashStyle = order.method === 'Cash' ? 'background:#27ae60; color:#fff;' : 'background:#f4f4f4; color:#333;';
        let benStyle = order.method === 'Benefit' ? 'background:#005EB8; color:#fff;' : 'background:#f4f4f4; color:#333;';
        let wallStyle = order.method === 'Wallet' ? 'background:#8e44ad; color:#fff;' : 'background:#f4f4f4; color:#333;';
        
        listHtml += `
        <div class="card" style="margin-bottom:10px; padding:15px; position:relative;">
            <button onclick="removeDeliveryFromCart(${index})" style="position:absolute; top:15px; left:15px; background:none; border:none; color:#DA291C; font-size:18px; cursor:pointer; padding:5px;" title="حذف الطلب">
                <i class="fas fa-trash-alt"></i>
            </button>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                <div style="padding-left: 30px;">
                    <b style="font-size:16px;">طلب ${index + 1}</b><br>
                    <small style="color:#666;">تأكيد هاتف التسليم: <span dir="ltr" style="font-weight:bold; color:#333;">${order.dPhone}</span></small>
                </div>
                <div style="text-align:left;">
                    <b style="color:var(--red); font-size:18px;">${order.price} د.ب</b>
                </div>
            </div>
            
            <div class="individual-pay-section" id="indiv-pay-${index}">
                <p style="font-size:13px; margin:0 0 8px 0; color:#555;">اختر طريقة الدفع لهذا الطلب:</p>
                <div class="pay-methods" style="margin:0; display:flex; gap:5px;">
                    <div id="btn-cash-${index}" class="pay-btn" onclick="selectIndivPay(${index}, 'Cash')" style="flex:1; text-align:center; padding:10px; font-size:14px; border-radius:8px; cursor:pointer; transition:0.3s; border:1px solid #ddd; ${cashStyle}"><i class="fas fa-money-bill-wave"></i> كاش</div>
                    <div id="btn-benefit-${index}" class="pay-btn" onclick="selectIndivPay(${index}, 'Benefit')" style="flex:1; text-align:center; padding:10px; font-size:14px; border-radius:8px; cursor:pointer; transition:0.3s; border:1px solid #ddd; ${benStyle}"><i class="fas fa-university"></i> بنفت</div>
                    <div id="btn-wallet-${index}" class="pay-btn" onclick="selectIndivPay(${index}, 'Wallet')" style="flex:1; text-align:center; padding:10px; font-size:14px; border-radius:8px; cursor:pointer; transition:0.3s; border:1px solid #ddd; ${wallStyle}"><i class="fas fa-wallet"></i> محفظة</div>
                </div>
            </div>
        </div>`;
    });
    
    document.getElementById('cart-orders-list').innerHTML = listHtml;
    
    appliedWalletDiscount = 0;
    currentFinalTotal = currentOriginalTotal;

    if (isWalletApplied && currentWalletBalance > 0) {
        appliedWalletDiscount = Math.min(currentWalletBalance, currentOriginalTotal);
        currentFinalTotal = currentOriginalTotal - appliedWalletDiscount;
    }

    document.getElementById('cart-original-price').innerText = currentOriginalTotal.toFixed(3);
    document.getElementById('cart-final-price').innerText = currentFinalTotal.toFixed(3);
    
    if (appliedWalletDiscount > 0) {
        document.getElementById('wallet-discount-text').style.display = 'block';
        document.getElementById('cart-wallet-discount').innerText = appliedWalletDiscount.toFixed(3);
    } else {
        document.getElementById('wallet-discount-text').style.display = 'none';
    }

    var walletBox = document.getElementById('wallet-usage-box');
    walletBox.style.display = currentWalletBalance > 0 ? 'block' : 'none';

    if (currentFinalTotal === 0 && isWalletApplied) {
        document.getElementById('select-all-wrapper').style.display = 'none';
        document.getElementById('master-pay-methods').style.display = 'none';
        document.getElementById('bill-split-summary').style.display = 'none';
        document.querySelectorAll('.individual-pay-section').forEach(el => el.style.display = 'none');
        
        masterMethod = 'Wallet';
        currentCheckoutList.forEach(o => o.method = 'Wallet');
        document.getElementById('dist-info').innerText = "تم تغطية أجور التوصيل بالكامل من المحفظة";
    } else {
        if (currentCheckoutList.length > 1) {
            document.getElementById('dist-info').innerText = "تم دمج " + currentCheckoutList.length + " طلبات في سلة واحدة";
            document.getElementById('select-all-wrapper').style.display = 'block';
        } else {
            document.getElementById('dist-info').innerText = "تم حساب السعر بنجاح";
            document.getElementById('select-all-wrapper').style.display = 'none'; 
        }
        
        currentCheckoutList.forEach((o, i) => {
            if(o.method === 'Wallet') {
                o.method = '';
                document.getElementById(`btn-cash-${i}`).style.background = '#f4f4f4'; document.getElementById(`btn-cash-${i}`).style.color = '#333';
                document.getElementById(`btn-benefit-${i}`).style.background = '#f4f4f4'; document.getElementById(`btn-benefit-${i}`).style.color = '#333';
                let wBtn = document.getElementById(`btn-wallet-${i}`);
                if(wBtn) { wBtn.style.background = '#f4f4f4'; wBtn.style.color = '#333'; }
            }
        });
        if(masterMethod === 'Wallet') masterMethod = '';
        toggleSelectAll();
    }

    checkPaymentReadiness();
}

function selectIndivPay(index, method) {
    let selectAllBox = document.getElementById('select-all-checkbox');
    if(selectAllBox && selectAllBox.checked) return;

    if (method === 'Wallet') {
        var orderPrice = parseFloat(currentCheckoutList[index].price);
        var usedWalletSoFar = 0;
        currentCheckoutList.forEach((o, i) => {
            if (i !== index && o.method === 'Wallet') usedWalletSoFar += parseFloat(o.price);
        });

        if (currentWalletBalance < (usedWalletSoFar + orderPrice)) {
            return Swal.fire('رصيد غير كافٍ', 'عذراً، رصيد المحفظة لا يكفي لتغطية هذا الطلب مع الطلبات الأخرى المحددة مسبقاً.', 'error');
        }
    }

    currentCheckoutList[index].method = method;

    document.getElementById(`btn-cash-${index}`).style.background = (method === 'Cash' ? '#27ae60' : '#f4f4f4');
    document.getElementById(`btn-cash-${index}`).style.color = (method === 'Cash' ? '#fff' : '#333');

    document.getElementById(`btn-benefit-${index}`).style.background = (method === 'Benefit' ? '#005EB8' : '#f4f4f4');
    document.getElementById(`btn-benefit-${index}`).style.color = (method === 'Benefit' ? '#fff' : '#333');

    let wBtn = document.getElementById(`btn-wallet-${index}`);
    if(wBtn) {
        wBtn.style.background = (method === 'Wallet' ? '#8e44ad' : '#f4f4f4');
        wBtn.style.color = (method === 'Wallet' ? '#fff' : '#333');
    }

    checkPaymentReadiness();
}

function toggleSelectAll() {
    var isChecked = document.getElementById('select-all-checkbox').checked;
    var indivSections = document.querySelectorAll('.individual-pay-section');
    
    indivSections.forEach(sec => sec.style.display = isChecked ? 'none' : 'block');
    document.getElementById('master-pay-methods').style.display = isChecked ? 'block' : 'none';
    
    if(isChecked) {
        masterMethod = "";
        document.getElementById('btn-master-cash').className = 'pay-btn';
        document.getElementById('btn-master-benefit').className = 'pay-btn';
        currentCheckoutList.forEach((o, i) => {
            o.method = '';
            document.getElementById(`btn-cash-${i}`).style.background = '#f4f4f4'; document.getElementById(`btn-cash-${i}`).style.color = '#333';
            document.getElementById(`btn-benefit-${i}`).style.background = '#f4f4f4'; document.getElementById(`btn-benefit-${i}`).style.color = '#333';
            let wBtn = document.getElementById(`btn-wallet-${i}`);
            if(wBtn) { wBtn.style.background = '#f4f4f4'; wBtn.style.color = '#333'; }
        });
    } else {
        masterMethod = "";
    }
    checkPaymentReadiness();
}

function selectMasterPay(method) {
    masterMethod = method;
    document.getElementById('btn-master-cash').className = 'pay-btn' + (method === 'Cash' ? ' selected-cash' : '');
    document.getElementById('btn-master-benefit').className = 'pay-btn' + (method === 'Benefit' ? ' selected-benefit' : '');
    
    if (currentCheckoutList && currentCheckoutList.length > 0) {
        currentCheckoutList.forEach(o => o.method = method);
    }
    checkPaymentReadiness();
}

function checkPaymentReadiness() {
    if (currentPendingOrderId !== null) {
        var btn = document.getElementById('final-send-btn');
        if (masterMethod !== '') {
            btn.disabled = false;
            btn.style.opacity = "1";
            document.getElementById('ben-box').style.display = (masterMethod === 'Benefit') ? 'block' : 'none';
        } else {
            btn.disabled = true;
            btn.style.opacity = "0.5";
            document.getElementById('ben-box').style.display = 'none';
        }
        return; 
    }

    var btn = document.getElementById('final-send-btn');

    if (currentFinalTotal === 0 && isWalletApplied && currentOriginalTotal > 0) {
        btn.disabled = false;
        btn.style.opacity = "1";
        document.getElementById('ben-box').style.display = 'none';
        return;
    }

    var allSet = currentCheckoutList.every(o => o.method !== '');
    var anyBenefit = currentCheckoutList.some(o => o.method === 'Benefit');
    
    var totalBen = 0, totalCash = 0, totalWalletUsed = 0;
    
    currentCheckoutList.forEach(o => {
        let price = parseFloat(o.price);
        if(o.method === 'Benefit') totalBen += price;
        if(o.method === 'Cash') totalCash += price;
        if(o.method === 'Wallet') totalWalletUsed += price;
    });

    var isSelectAll = document.getElementById('select-all-checkbox') && document.getElementById('select-all-checkbox').checked;
    
    if (!isSelectAll) {
        appliedWalletDiscount = totalWalletUsed;
        currentFinalTotal = currentOriginalTotal - appliedWalletDiscount;

        document.getElementById('cart-final-price').innerText = currentFinalTotal.toFixed(3);
        if (appliedWalletDiscount > 0) {
            document.getElementById('wallet-discount-text').style.display = 'block';
            document.getElementById('cart-wallet-discount').innerText = appliedWalletDiscount.toFixed(3);
        } else {
            document.getElementById('wallet-discount-text').style.display = 'none';
        }
    }

    var summaryEl = document.getElementById('bill-split-summary');
    if(summaryEl) {
        if (allSet && currentCheckoutList.length > 0) {
            summaryEl.style.display = 'block';
            document.getElementById('summary-ben').innerText = totalBen.toFixed(3) + " د.ب";
            document.getElementById('summary-cash').innerText = totalCash.toFixed(3) + " د.ب";
        } else {
            summaryEl.style.display = 'none';
        }
    }
    
    document.getElementById('ben-box').style.display = anyBenefit ? 'block' : 'none';
    
    if (allSet && currentCheckoutList.length > 0) {
        btn.disabled = false;
        btn.style.opacity = "1";
    } else {
        btn.disabled = true;
        btn.style.opacity = "0.5";
    }
}

async function preSendCheck() {
    var imgData = "";
    var anyBenefit = currentCheckoutList.some(o => o.method === 'Benefit');
    
    if(anyBenefit || masterMethod === 'Benefit') {
        var file = document.getElementById('pay-img').files[0];
        if(!file) return alert("يرجى إرفاق صورة التحويل البنكي (بنفت)");
        imgData = await new Promise(r => { var rd = new FileReader(); rd.readAsDataURL(file); rd.onload = () => r(rd.result); });
    }
    sendNow(imgData);
}

function sendNow(img) {
    if (isSendingOrder) return;
    
    if (currentPendingOrderId) {
        isSendingOrder = true;
        var btn = document.getElementById('final-send-btn');
        btn.disabled = true; btn.innerText = "جاري الاعتماد...";

        db.ref('orders/' + currentPendingOrderId).update({
            status: 'waiting', 
            method: masterMethod,
            proofImage: img || ""
        }).then(() => {
            isSendingOrder = false;
            currentPendingOrderId = null; 
            goTo('page-success');
        }).catch(() => { isSendingOrder = false; btn.disabled = false; btn.innerText = "اعتماد الطلب الآن 🚀"; });
        return;
    }

    isSendingOrder = true;
    var btn = document.getElementById('final-send-btn');
    btn.disabled = true; btn.innerText = "جاري الإرسال...";

    var pPhone = document.getElementById('p-phone').value.trim();
    var pArea = document.getElementById('p-area').value.trim();
    var pBlock = document.getElementById('p-block').value.trim();
    var pRoad = document.getElementById('p-road').value.trim();
    var pHouse = document.getElementById('p-house').value.trim();
    var pType = document.getElementById('p-type').value;
    var pLink = document.getElementById('p-link').value;
    var pItemType = document.getElementById('p-item-type') ? document.getElementById('p-item-type').value : 'غير محدد';
    var pickupLocationStr = `http://googleusercontent.com/maps.google.com/?q=${markerP.getPosition().lat()},${markerP.getPosition().lng()}`;

    var orderId = "ORD" + Date.now();
    var userPhoneId = localStorage.getItem('uPhone');

    var data = {
        id: orderId,
        user: userPhoneId, 
        status: 'waiting',
        isBundle: true, 
        deliveries: currentCheckoutList, 
        proofImage: img || "",
        price: currentOriginalTotal.toFixed(3),
        walletDiscount: appliedWalletDiscount.toFixed(3),
        finalPriceCustomer: currentFinalTotal.toFixed(3),
        pPhone: pPhone, pArea: pArea, pRoad: pRoad, pBlock: pBlock, pHouse: pHouse, pType: pType, pLink: pLink,
        pItemType: pItemType, 
        pickup: pickupLocationStr,
        timestamp: Date.now()
    };

    if (appliedWalletDiscount > 0) {
        let newBalance = currentWalletBalance - appliedWalletDiscount;
        db.ref('users/' + userPhoneId + '/wallet').set(newBalance);
    }

    db.ref('orders/' + orderId).set(data).then(() => {
        isSendingOrder = false;
        addedByProceed = false;
        multiOrdersList = []; 
        currentCheckoutList = [];
        isWalletApplied = false;
        goTo('page-success');
    }).catch(() => { 
        isSendingOrder = false; 
        btn.disabled = false; 
        btn.innerText = "إرسال الطلبات الآن 🚀"; 
    });
}

function submitForPricing() {
    if (isSendingOrder) return;
    document.getElementById('out-of-bounds-overlay').style.display = 'none';
    isSendingOrder = true;
    
    var pPhone = document.getElementById('p-phone').value.trim();
    var pArea = document.getElementById('p-area').value.trim();
    var pBlock = document.getElementById('p-block').value.trim();
    var pRoad = document.getElementById('p-road').value.trim();
    var pHouse = document.getElementById('p-house').value.trim();
    var pItemType = document.getElementById('p-item-type') ? document.getElementById('p-item-type').value : 'غير محدد';
    
    var dPhone = document.getElementById('d-phone').value.trim();
    var dArea = document.getElementById('d-area').value.trim();
    var dBlock = document.getElementById('d-block').value.trim();
    var dRoad = document.getElementById('d-road').value.trim();
    var dHouse = document.getElementById('d-house').value.trim();
    var dCollection = document.getElementById('d-collection').value.trim();

    var orderId = "ORD" + Date.now();
    var data = {
        id: orderId,
        user: localStorage.getItem('uPhone'), 
        status: 'pending_pricing', 
        method: '',
        proofImage: '',
        price: "0", 
        collectionAmount: dCollection || "0",
        pPhone: pPhone, pArea: pArea, pRoad: pRoad, pBlock: pBlock, pHouse: pHouse,
        pType: document.getElementById('p-type').value,
        pLink: document.getElementById('p-link').value,
        pItemType: pItemType, 
        pickup: `http://googleusercontent.com/maps.google.com/?q=${markerP.getPosition().lat()},${markerP.getPosition().lng()}`,
        dPhone: dPhone, dArea: dArea, dRoad: dRoad, dBlock: dBlock, dHouse: dHouse,
        dType: document.getElementById('d-type').value,
        dLink: document.getElementById('d-link').value,
        dropoff: `http://googleusercontent.com/maps.google.com/?q=${markerD.getPosition().lat()},${markerD.getPosition().lng()}`,
        timestamp: Date.now()
    };

    db.ref('orders/' + orderId).set(data).then(() => {
        isSendingOrder = false;
        alert("تم إرسال الطلب للإدارة بنجاح. يرجى الانتظار ومتابعة الطلب من 'طلباتي السابقة'.");
        goTo('page-home');
    }).catch(() => { isSendingOrder = false; alert("خطأ في إرسال الطلب"); });
}

function logout() {
    localStorage.clear();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    var loginPage = document.getElementById('page-login');
    if (loginPage) { loginPage.classList.add('active-page'); }
    if (document.getElementById('login-phone')) document.getElementById('login-phone').value = "";
    if (document.getElementById('login-pass')) document.getElementById('login-pass').value = "";
}

function loadOrders() {
    var userPhone = localStorage.getItem('uPhone');
    var list = document.getElementById('list-container');
    
    list.style.overflowY = "auto"; 
    list.style.maxHeight = "85vh"; 
    list.style.padding = "10px";

    list.innerHTML = "<p style='text-align:center; padding:20px;'>جاري تحميل طلباتك...</p>";

    db.ref('orders').orderByChild('user').equalTo(userPhone).on('value', snap => {
        list.innerHTML = "";
        if (!snap.exists()) { 
            list.innerHTML = "<p style='text-align:center;'>لا توجد طلبات</p>"; 
            return; 
        }

        var orders = []; 
        snap.forEach(c => { var o = c.val(); o.key = c.key; orders.push(o); });

        orders.reverse().forEach(o => {
            var statusText = "";
            var statusColor = "var(--red)"; 

            if (o.status === 'waiting') statusText = "بانتظار قبول المندوب";
            else if (o.status === 'pending_pricing') { statusText = "بانتظار تسعير الإدارة ⏳"; statusColor = "#f39c12"; }
            else if (o.status === 'priced') { statusText = "تم تحديد السعر - بانتظار الدفع 💳"; statusColor = "#005EB8"; }
            else if (o.status === 'accepted') statusText = "قيد التنفيذ 🚚";
            else if (o.status === 'picked_up') statusText = "تم الاستلام من المحل 🛍️";
            else if (o.status === 'completed' || o.status === 'finished') { statusText = "مكتمل ✅"; statusColor = "#27ae60"; }
            else if (o.status === 'canceled' || o.status === 'cancelled') { statusText = "ملغي ❌"; statusColor = "#888"; }

            var cardStyle = (o.status === 'canceled' || o.status === 'cancelled') ? "opacity: 0.7; border-right: 5px solid #888;" : `border-right: 5px solid ${statusColor};`;
            
            var bundleLabel = o.isBundle && o.deliveries && o.deliveries.length > 1 ? `<span style="background:#f39c12; color:white; padding:2px 8px; border-radius:10px; font-size:12px; margin-right:5px;">مجمع (${o.deliveries.length})</span>` : '';

            list.innerHTML += `
                <div class="order-card" onclick='openDetails(${JSON.stringify(o)})' style="background:white; border-radius:15px; margin-bottom:15px; width:100%; border:1px solid #ddd; overflow:hidden; cursor:pointer; flex-shrink: 0; ${cardStyle}">
                    <div style="padding:20px; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <b style="font-size:18px;">طلب #${o.key.slice(-5)} ${bundleLabel}</b><br>
                            <small style="color:#888;">إضغط لعرض التفاصيل الكاملة</small>
                        </div>
                        <div style="text-align:left;">
                            <span style="color:${statusColor}; font-weight:bold; font-size:16px;">${statusText}</span>
                        </div>
                    </div>
                </div>`;
        });
    });
}

function openDetails(o) {
    var statusText = "";
    var statusColor = "var(--red)";

    if (o.status === 'waiting') statusText = "بانتظار قبول المندوب";
    else if (o.status === 'pending_pricing') { statusText = "تواصل مع الدعم للموافقة: 12312311-973+ ⏳"; statusColor = "#f39c12"; }
    else if (o.status === 'priced') { statusText = "تم التسعير - يرجى الدفع لاعتماد الطلب 💳"; statusColor = "#005EB8"; }
    else if (o.status === 'accepted') statusText = "الطلب قيد التنفيذ حالياً 🚚";
    else if (o.status === 'picked_up') statusText = "المندوب استلم الطلب وهو في الطريق إليك 📍";
    else if (o.status === 'completed' || o.status === 'finished') { statusText = "تم تسليم الطلب بنجاح ✅"; statusColor = "#27ae60"; }
    else if (o.status === 'canceled' || o.status === 'cancelled') { statusText = "تم إلغاء هذا الطلب ❌"; statusColor = "#888"; }

    var orderTimeText = "غير متوفر";
    if (o.timestamp) {
        var date = new Date(o.timestamp);
        var bhDate = new Date(date.getTime() + (3 * 3600000)); 
        var timeStr = bhDate.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });

        if (timeStr.includes('AM')) {
            timeStr = timeStr.replace('AM', 'PM');
        } else if (timeStr.includes('PM')) {
            timeStr = timeStr.replace('PM', 'AM');
        } else if (timeStr.includes('am')) {
            timeStr = timeStr.replace('am', 'PM');
        } else if (timeStr.includes('pm')) {
            timeStr = timeStr.replace('pm', 'AM');
        }
        orderTimeText = timeStr;
    }

    var cancelBtn = (o.status === 'waiting' || o.status === 'accepted' || o.status === 'pending_pricing' || o.status === 'priced') ? 
        `<button class="btn-red" onclick="cancelOrderNow('${o.key}')" style="width:100%; padding:20px; margin-top:15px; background:#DA291C; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer;">إلغاء الطلب 🗑️</button>` : "";
    
    var payBtn = (o.status === 'priced') ? 
        `<button class="btn-red" onclick="resumePayment('${o.key}', '${o.price}')" style="width:100%; padding:20px; margin-top:15px; background:#005EB8; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer; box-shadow: 0 5px 15px rgba(0,94,184,0.3);">إكمال الدفع لاعتماد الطلب 💳</button>` : "";
    
    var dName = o.driverName || "سائق توصيل";
    var dPhone = o.driverPhone || o.driver || ""; 

    var driverHtml = "";
    if (dPhone && (o.status !== 'canceled' && o.status !== 'cancelled')) {
        driverHtml = `
        <div class="info-card-huge" style="border-right: 5px solid #005EB8; background:#e3f2fd; padding:15px; border-radius:12px; margin-bottom:15px;">
            <b style="color:#005EB8; font-size:18px;">بيانات المندوب المسؤول:</b>
            <p style="font-size:20px; margin:10px 0; font-weight:bold;">${dName}</p>
            <p style="font-size:18px; color:#333; margin-bottom:15px;">📞 هاتف المندوب: <b>${dPhone}</b></p>
            <a href="tel:${dPhone}" style="display:block; text-align:center; padding:15px; background:#27ae60; color:white; border-radius:10px; text-decoration:none; font-weight:bold; font-size:18px;">اتصال مباشر بالمندوب 📞</a>
        </div>`;
    }

    var ratingBtnHtml = "";
    var complaintBtnHtml = "";
    
    if ((o.status === 'completed' || o.status === 'finished') && dPhone) {
        var finishedTime = o.finishedAt || o.timestamp;
        var timePassed = Date.now() - finishedTime;
        var twentyFourHours = 24 * 60 * 60 * 1000;
        var threeDays = 3 * 24 * 60 * 60 * 1000; 

        if (!o.isRated) {
            if (timePassed <= twentyFourHours) {
                ratingBtnHtml = `<button onclick="showRatingModal('${o.key}', '${dName}', '${dPhone}')" style="width:100%; padding:20px; margin-top:15px; background:#f1c40f; color:#333; border:none; border-radius:12px; font-weight:bold; cursor:pointer; font-size:16px; box-shadow: 0 5px 15px rgba(241, 196, 15, 0.3);"><i class="fas fa-star"></i> قيم المندوب واحصل على 0.015 د.ب!</button>`;
            } else {
                ratingBtnHtml = `<div style="text-align:center; padding:15px; margin-top:15px; background:#f8f9fa; border:1px solid #ddd; border-radius:12px; color:#888; font-size:14px;"><i class="fas fa-clock"></i> انتهت فترة التقييم المتاحة (24 ساعة)</div>`;
            }
        } else {
            ratingBtnHtml = `<div style="text-align:center; padding:15px; margin-top:15px; background:#fdf8e3; border:1px solid #faebcc; border-radius:12px; color:#8a6d3b; font-weight:bold; font-size:16px;"><i class="fas fa-check-circle" style="color:#27ae60;"></i> شكراً لتقييمك المندوب!</div>`;
        }

        if (timePassed <= threeDays) {
            let btnText = o.hasComplaint ? "تقديم شكوى أخرى" : "تقديم شكوى على المندوب";
            complaintBtnHtml += `<button onclick="showComplaintModal('${o.key}', '${dName}', '${dPhone}')" style="width:100%; padding:15px; margin-top:10px; background:#fff; color:#DA291C; border:2px solid #DA291C; border-radius:12px; font-weight:bold; cursor:pointer; font-size:14px;"><i class="fas fa-exclamation-triangle"></i> ${btnText}</button>`;
        }
        
        if (o.hasComplaint) {
            complaintBtnHtml += `<button onclick="showCancelComplaintModal('${o.key}')" style="width:100%; padding:15px; margin-top:10px; background:#f8f9fa; color:#333; border:1px solid #ccc; border-radius:12px; font-weight:bold; cursor:pointer; font-size:14px;"><i class="fas fa-list"></i> عرض وإلغاء الشكاوى السابقة</button>`;
        }
    }

    var benefitImageHtml = "";
    if ((o.method === 'Benefit' || (o.isBundle && o.proofImage)) && o.proofImage) {
        benefitImageHtml = `
        <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid #005EB8; background:#f0f7ff; text-align:center;">
            <b style="color:#005EB8; font-size:16px; display:block; margin-bottom:10px;">🖼️ صورة إثبات الدفع (بنفت):</b>
            <img src="${o.proofImage}" style="width:100%; border-radius:10px; border:1px solid #ddd; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" onclick="window.open(this.src)">
            <small style="display:block; margin-top:5px; color:#666;">إضغط على الصورة لتكبيرها</small>
        </div>`;
    }

    var originalDeliveryPrice = parseFloat(o.price || 0); 
    var walletDiscount = parseFloat(o.walletDiscount || 0);
    var finalDeliveryPrice = parseFloat(o.finalPriceCustomer !== undefined ? o.finalPriceCustomer : originalDeliveryPrice);

    var productPrice = 0;
    var totalToCollect = 0; 
    var deliveryDetailsHtml = "";

    if (o.isBundle && o.deliveries) {
        o.deliveries.forEach((del, idx) => {
            let itemCol = parseFloat(del.dCollection || 0);
            let itemDelPrice = parseFloat(del.price || 0);
            
            let itemRatio = originalDeliveryPrice > 0 ? (itemDelPrice / originalDeliveryPrice) : 0;
            let itemFinalDelPrice = finalDeliveryPrice * itemRatio;
            
            let isItemPaidOnline = (del.method === 'Benefit' || del.method === 'Wallet' || o.method === 'Benefit' || o.method === 'Wallet');
            
            let itemTotalToCollect = isItemPaidOnline ? itemCol : (itemCol + itemFinalDelPrice);
            
            productPrice += itemCol;
            totalToCollect += itemTotalToCollect;

            let payStatusText = isItemPaidOnline ? 'توصيل مدفوع 💳' : 'توصيل كاش 💵';
            if (walletDiscount > 0 && itemFinalDelPrice < itemDelPrice && !isItemPaidOnline) {
                payStatusText = 'جزء مدفوع بالمحفظة والباقي كاش 💵';
            }

            deliveryDetailsHtml += `
            <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid #555; background:#f9f9f9;">
                <b style="color:#333; font-size:16px;">🏁 تفاصيل موقع التسليم ${idx + 1} (${payStatusText}):</b>
                <p style="margin:8px 0;"><b>المنطقة:</b> ${del.dArea}</p>
                <p style="margin:5px 0;"><b>مجمع:</b> ${del.dBlock || '-'} | <b>طريق:</b> ${del.dRoad || '-'} | <b>منزل:</b> ${del.dHouse || '-'}</p>
                ${del.dType ? `<p style="margin:5px 0;"><b>شقة/طابق:</b> ${del.dType}</p>` : ''}
                <p style="margin:5px 0;">📞 هاتف التسليم: <span dir="ltr">${del.dPhone}</span></p>
                <p style="margin:8px 0; font-weight:bold; color:var(--red); font-size:15px;">💰 مطلوب تحصيله من هذا المستلم: ${itemTotalToCollect.toFixed(3)} د.ب</p>
                ${del.dLink ? `<a href="${del.dLink}" target="_blank" style="color:#27ae60; display:block; margin-top:5px; font-weight:bold;">🔗 فتح رابط الموقع (GPS)</a>` : ''}
            </div>`;
        });
    } else {
        productPrice = parseFloat(o.collectionAmount || 0);
        let isItemPaidOnline = (o.method === 'Benefit' || o.method === 'Wallet');
        totalToCollect = isItemPaidOnline ? productPrice : (productPrice + finalDeliveryPrice);

        let payStatusText = isItemPaidOnline ? 'توصيل مدفوع 💳' : 'توصيل كاش 💵';
        if (walletDiscount > 0 && finalDeliveryPrice < originalDeliveryPrice && !isItemPaidOnline) {
            payStatusText = 'جزء مدفوع بالمحفظة والباقي كاش 💵';
        }

        deliveryDetailsHtml = `
        <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid #555; background:#f9f9f9;">
            <b style="color:#333; font-size:18px;">🏁 تفاصيل موقع التسليم (${payStatusText}):</b>
            <p style="margin:8px 0;"><b>المنطقة:</b> ${o.dArea}</p>
            <p style="margin:5px 0;"><b>مجمع:</b> ${o.dBlock || '-'} | <b>طريق:</b> ${o.dRoad || '-'} | <b>منزل:</b> ${o.dHouse || '-'}</p>
            ${o.dType ? `<p style="margin:5px 0;"><b>شقة/طابق:</b> ${o.dType}</p>` : ''}
            <p style="margin:5px 0;">📞 هاتف التسليم: <span dir="ltr">${o.dPhone}</span></p>
            ${o.dLink ? `<a href="${o.dLink}" target="_blank" style="color:#27ae60; display:block; margin-top:5px; font-weight:bold;">🔗 فتح رابط الموقع (GPS)</a>` : ''}
        </div>`;
    }

    var paymentMethodText = "";
    if (o.method === 'Wallet') paymentMethodText = "محفظة 💰";
    else if (o.method === 'Benefit') paymentMethodText = "بنفت 💳";
    else if (o.method === 'Cash') paymentMethodText = "كاش 💵";
    else paymentMethodText = "لم يتم الدفع بعد";

    if (walletDiscount > 0 && o.method !== 'Wallet') {
        paymentMethodText = `محفظة 💰 + ${paymentMethodText}`;
    }

    var detailsArea = document.getElementById('details-render-area');
    if(detailsArea) {
        detailsArea.style.maxHeight = "75vh"; 
        detailsArea.style.overflowY = "auto";
        detailsArea.style.paddingRight = "5px";

        detailsArea.innerHTML = `
            <div class="info-card-huge" style="padding:15px; background:#f9f9f9; border-radius:12px; margin-bottom:15px; border-right:5px solid #333;">
                <b>رقم الطلب المرجعي:</b>
                <p style="word-break:break-all; margin:5px 0; font-family:monospace;">${o.key}</p>
                <p style="margin:5px 0; font-size:14px; color:#555;"><b>تاريخ ووقت الطلب:</b> <span style="font-weight:bold; color:var(--red);">${orderTimeText}</span></p>
                ${!o.isBundle ? `<small><b>طريقة الدفع:</b> ${paymentMethodText}</small>` : ''}
            </div>

            ${benefitImageHtml}
            <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid var(--red); background:#fff9f9;">
                <b style="color:var(--red); font-size:18px;">📍 تفاصيل موقع الاستلام:</b>
                <p style="margin:8px 0; color:var(--benefit-blue); font-weight:bold;">📦 نوع المنتج: ${o.pItemType || 'غير محدد'}</p>
                <p style="margin:8px 0;"><b>المنطقة:</b> ${o.pArea}</p>
                <p style="margin:5px 0;"><b>مجمع:</b> ${o.pBlock || '-'} | <b>طريق:</b> ${o.pRoad || '-'} | <b>منزل:</b> ${o.pHouse || '-'}</p>
                ${o.pType ? `<p style="margin:5px 0;"><b>شقة/طابق:</b> ${o.pType}</p>` : ''}
                <p style="margin:5px 0;">📞 هاتف المحل: <span dir="ltr">${o.pPhone}</span></p>
                ${o.pLink ? `<a href="${o.pLink}" target="_blank" style="color:#005EB8; display:block; margin-top:5px; font-weight:bold;">🔗 فتح رابط الموقع (GPS)</a>` : ''}
            </div>

            ${deliveryDetailsHtml}

            <div style="background:#f4fbf4; border-radius:20px; border:2px dashed #27ae60; padding:20px; margin-bottom:20px; text-align:center;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#555;">
                    <span>إجمالي قيمة بضاعتك (مستحقاتك):</span>
                    <b style="color:#27ae60; font-size:18px;">${productPrice.toFixed(3)} د.ب</b>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#555;">
                    <span>إجمالي رسوم التوصيل الأصلي:</span>
                    <b>${originalDeliveryPrice.toFixed(3)} د.ب</b>
                </div>
                ${walletDiscount > 0 ? `
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#27ae60; font-weight:bold;">
                    <span>خصم المحفظة (مدفوع مقدماً):</span>
                    <b>- ${walletDiscount.toFixed(3)} د.ب</b>
                </div>
                ` : ''}
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#555;">
                    <span>رسوم التوصيل المتبقية:</span>
                    <b>${finalDeliveryPrice.toFixed(3)} د.ب</b>
                </div>
                <hr style="border:0; border-top:1px solid #ccc; margin:10px 0;">
                <span style="font-size:14px; color:#888;">إجمالي ما سيقوم المندوب بتحصيله من المستلم كاش</span><br>
                <b style="font-size:28px; color:#DA291C;">${totalToCollect.toFixed(3)} د.ب</b>
                ${productPrice > 0 ? `<p style="font-size:12px; color:#27ae60; margin-top:10px; font-weight:bold;"><i class="fas fa-info-circle"></i> سيتم تحويل قيمة البضاعة لحسابك بعد التسليم.</p>` : ''}
            </div>

            <div class="info-card-huge" style="padding:15px; background:#eee; border-radius:12px; margin-bottom:15px; text-align:center;">
                <b>حالة الطلب:</b>
                <p style="font-size:22px; font-weight:bold; color:${statusColor}; margin:5px 0;">${statusText}</p>
            </div>

            ${driverHtml}
            ${payBtn}
            ${cancelBtn}
            ${ratingBtnHtml}
            ${complaintBtnHtml}
            <div style="height:20px;"></div> `;
    }
    
    document.getElementById('full-details-overlay').style.display = 'block';
}

function resumePayment(key, price) {
    currentPendingOrderId = key;
    document.getElementById('cart-orders-list').innerHTML = ''; 
    document.getElementById('cart-total-price').innerText = parseFloat(price).toFixed(3);
    document.getElementById('dist-info').innerText = "تم التسعير والموافقة من الإدارة (الدفع بنفت فقط)";
    
    document.getElementById('select-all-wrapper').style.display = 'none';
    document.getElementById('master-pay-methods').style.display = 'block';
    document.getElementById('master-pay-title').innerText = "طريقة الدفع المعتمدة لهذا الطلب:";
    
    document.getElementById('btn-master-cash').style.display = 'none';
    document.getElementById('btn-master-benefit').style.display = '';
    
    selectMasterPay('Benefit');
    
    var sendBtn = document.getElementById('final-send-btn');
    sendBtn.innerText = "اعتماد الطلب الآن 🚀";

    var paymentBackBtn = document.querySelector('#page-payment .back-btn');
    if(paymentBackBtn) paymentBackBtn.setAttribute('onclick', "goTo('page-history')");

    closeDetails();
    goTo('page-payment');
}

function cancelOrderNow(key) {
    Swal.fire({
        title: 'إلغاء الطلب',
        text: "هل أنت متأكد من إلغاء الطلب؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: 'نعم، قم بالإلغاء',
        cancelButtonText: 'تراجع'
    }).then((result) => {
        if (result.isConfirmed) {
            db.ref('orders/' + key).update({ 
                status: 'cancelled',
                driver: null,         
                driverPhone: null,
                driverName: null,
                canceledBy: 'user' 
            })
            .then(() => { 
                alert("تم إلغاء الطلب بنجاح"); 
                closeDetails(); 
            })
            .catch(() => { alert("عذراً، حدث خطأ أثناء الإلغاء"); });
        }
    });
}

function closeDetails() {
    document.getElementById('full-details-overlay').style.display = 'none';
}

function selectStar(val) {
    document.getElementById('selected-rating').value = val;
    let stars = document.getElementById('stars-container').getElementsByTagName('i');
    for(let i=0; i<stars.length; i++) {
        if(i < val) { stars[i].style.color = '#f1c40f'; } 
        else { stars[i].style.color = '#e0e0e0'; }
    }
}

function selectSpeedStar(val) {
    document.getElementById('selected-speed-rating').value = val;
    let stars = document.getElementById('speed-stars-container').getElementsByTagName('i');
    for(let i=0; i<stars.length; i++) {
        if(i < val) { stars[i].style.color = '#f1c40f'; } 
        else { stars[i].style.color = '#e0e0e0'; }
    }
}

function showRatingModal(orderId, driverName, driverPhone) {
    document.getElementById('rating-order-id').value = orderId;
    document.getElementById('rating-driver-phone').value = driverPhone;
    document.getElementById('rating-driver-name').innerText = driverName || 'المندوب';
    
    document.getElementById('selected-rating').value = '0';
    document.getElementById('selected-speed-rating').value = '0';
    selectStar(0);
    selectSpeedStar(0);
    
    document.getElementById('rating-modal').style.display = 'flex';
}

function closeRatingModal() {
    document.getElementById('rating-modal').style.display = 'none';
}

function submitRating() {
    let generalVal = parseInt(document.getElementById('selected-rating').value);
    let speedVal = parseInt(document.getElementById('selected-speed-rating').value);
    let orderId = document.getElementById('rating-order-id').value;
    let dPhone = document.getElementById('rating-driver-phone').value;
    let uPhone = localStorage.getItem('uPhone');

    if(generalVal === 0 || speedVal === 0) return alert("الرجاء اختيار عدد النجوم للتقييم العام وسرعة التوصيل معاً.");

    db.ref('orders/' + orderId).update({ 
        isRated: true, 
        ratingValue: generalVal,
        speedRatingValue: speedVal
    });

    let driverRef = db.ref('drivers/' + dPhone);
    driverRef.once('value', snap => {
        if(snap.exists()) {
            let d = snap.val();
            let currentSum = d.ratingSum || 0;
            let currentCount = d.ratingCount || 0;
            let currentSpeedSum = d.speedRatingSum || 0;
            
            let newSum = currentSum + generalVal;
            let newCount = currentCount + 1;
            let newAvg = (newSum / newCount).toFixed(1); 
            
            let newSpeedSum = currentSpeedSum + speedVal;
            let newSpeedAvg = (newSpeedSum / newCount).toFixed(1);
            
            driverRef.update({
                ratingSum: newSum,
                ratingCount: newCount,
                ratingAvg: newAvg,
                speedRatingSum: newSpeedSum,
                speedRatingAvg: newSpeedAvg
            });
        }
    });

    let userRef = db.ref('users/' + uPhone);
    userRef.once('value', snap => {
        if(snap.exists()) {
            let u = snap.val();
            let currentWallet = parseFloat(u.wallet || 0);
            let newWallet = currentWallet + 0.015; 
            
            userRef.update({ wallet: newWallet }).then(() => {
                db.ref("wallet_logs").push({
                    phone: uPhone,
                    type: "user",
                    amount: 0.015,
                    isAdd: true,
                    reason: `مكافأة تقييم المندوب لطلب #${orderId.slice(-5)}`,
                    timestamp: Date.now()
                });

                alert("شكراً لك! تم إرسال تقييمك للمندوب بنجاح، وتمت إضافة 0.015 د.ب كمكافأة إلى محفظتك الإلكترونية! 🎉💰");
                closeRatingModal();
                closeDetails(); 
            });
        } else {
            alert("شكراً لك! تم الحفظ.");
            closeRatingModal();
            closeDetails();
        }
    });
}

function showComplaintModal(orderId, driverName, driverPhone) {
    document.getElementById('complaint-order-id').value = orderId;
    document.getElementById('complaint-driver-phone').value = driverPhone;
    document.getElementById('complaint-driver-name').innerText = driverName || 'المندوب';
    document.getElementById('complaint-text').value = '';
    document.getElementById('complaint-modal').style.display = 'flex';
}

function closeComplaintModal() {
    document.getElementById('complaint-modal').style.display = 'none';
}

function submitComplaint() {
    let text = document.getElementById('complaint-text').value.trim();
    let orderId = document.getElementById('complaint-order-id').value;
    let dPhone = document.getElementById('complaint-driver-phone').value;
    let dName = document.getElementById('complaint-driver-name').innerText;
    let uPhone = localStorage.getItem('uPhone');

    if(!text) return alert("الرجاء كتابة تفاصيل الشكوى أولاً لتتمكن الإدارة من مساعدتك.");

    let complaintData = {
        orderId: orderId,
        driverPhone: dPhone,
        driverName: dName,
        userPhone: uPhone,
        complaintText: text,
        timestamp: Date.now(),
        status: 'new'
    };

    db.ref('complaints').push(complaintData).then(() => {
        db.ref('orders/' + orderId).update({ hasComplaint: true }).then(() => {
            alert("تم رفع الشكوى بنجاح.");
            closeComplaintModal();
            closeDetails(); 
        });
    }).catch(err => alert("حدث خطأ أثناء الإرسال: " + err.message));
}

function showCancelComplaintModal(orderId) {
    var listContainer = document.getElementById('complaints-list-container');
    listContainer.innerHTML = '<p style="text-align:center; margin-top:20px;">جاري تحميل الشكاوى...</p>';
    document.getElementById('cancel-complaint-modal').style.display = 'flex';

    let uPhone = localStorage.getItem('uPhone');

    db.ref('complaints').orderByChild('orderId').equalTo(orderId).once('value', snap => {
        listContainer.innerHTML = '';
        if (!snap.exists()) {
            listContainer.innerHTML = '<p style="text-align:center; color:#888; margin-top:20px;">لا توجد شكاوى مسجلة.</p>';
            return;
        }

        let hasMyComplaints = false;
        snap.forEach(childSnap => {
            let c = childSnap.val();
            if (c.userPhone === uPhone) {
                hasMyComplaints = true;
                let dateObj = new Date(c.timestamp);
                let timeStr = dateObj.toLocaleDateString('en-GB') + ' - ' + dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
                
                listContainer.innerHTML += `
                    <div style="background:#fff5f5; border:1px solid #ffcccc; padding:15px; border-radius:12px; margin-bottom:15px; text-align:right;">
                        <small style="color:#888; display:block; margin-bottom:8px;"><i class="fas fa-clock"></i> ${timeStr}</small>
                        <p style="margin:0 0 15px 0; font-size:15px; color:#333; line-height:1.5;">${c.complaintText}</p>
                        <button onclick="deleteComplaint('${childSnap.key}', '${orderId}')" style="background:#DA291C; color:#fff; border:none; padding:8px 15px; border-radius:8px; cursor:pointer; font-size:13px; font-weight:bold; width:100%;"><i class="fas fa-trash"></i> إلغاء الشكوى و التراجع</button>
                    </div>
                `;
            }
        });

        if (!hasMyComplaints) {
            listContainer.innerHTML = '<p style="text-align:center; color:#888; margin-top:20px;">لا توجد شكاوى مسجلة.</p>';
        }
    });
}

function closeCancelComplaintModal() {
    document.getElementById('cancel-complaint-modal').style.display = 'none';
}

function deleteComplaint(complaintKey, orderId) {
    Swal.fire({
        title: 'إلغاء الشكوى',
        text: "هل أنت متأكد من رغبتك في التراجع وإلغاء هذه الشكوى؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: 'نعم، تراجع',
        cancelButtonText: 'إغلاق'
    }).then((result) => {
        if (result.isConfirmed) {
            db.ref('complaints/' + complaintKey).remove().then(() => {
                alert("تم إلغاء الشكوى بنجاح.");
                
                db.ref('complaints').orderByChild('orderId').equalTo(orderId).once('value', snap => {
                    let uPhone = localStorage.getItem('uPhone');
                    let hasLeft = false;
                    if(snap.exists()) {
                       snap.forEach(childSnap => {
                           if (childSnap.val().userPhone === uPhone) hasLeft = true;
                       });
                    }
                    
                    if (!hasLeft) {
                       db.ref('orders/' + orderId).update({ hasComplaint: null });
                       closeCancelComplaintModal();
                       closeDetails(); 
                    } else {
                       showCancelComplaintModal(orderId);
                    }
                });
            }).catch(err => alert("حدث خطأ أثناء الإلغاء. الرجاء المحاولة مجدداً."));
        }
    });
}