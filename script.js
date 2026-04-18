// --- إعدادات الترجمة واللغة ---
const translations = {
    ar: {
        "توصيل البحرين": "توصيل البحرين",
        "أدخل بياناتك للمتابعة": "أدخل بياناتك للمتابعة",
        "رقم الهاتف": "رقم الهاتف",
        "كلمة السر": "كلمة السر",
        "تسجيل الدخول": "تسجيل الدخول",
        "نسيت كلمة المرور؟": "نسيت كلمة المرور؟",
        "ليس لديك حساب؟ ": "ليس لديك حساب؟ ",
        "إنشاء حساب جديد": "إنشاء حساب جديد",
        "تسجيل جديد": "تسجيل جديد",
        "الاسم الكامل": "الاسم الكامل",
        "كلمة المرور": "كلمة المرور",
        "تأكيد كلمة المرور": "تأكيد كلمة المرور",
        "إرسال رمز التحقق": "إرسال رمز التحقق",
        "استعادة كلمة المرور": "استعادة كلمة المرور",
        "أدخل رقم هاتفك المسجل لنرسل لك رمز التحقق": "أدخل رقم هاتفك المسجل لنرسل لك رمز التحقق",
        "كلمة مرور جديدة": "كلمة مرور جديدة",
        "أدخل كلمة المرور الجديدة لحسابك": "أدخل كلمة المرور الجديدة لحسابك",
        "حفظ وتسجيل الدخول": "حفظ وتسجيل الدخول",
        "أدخل رمز التحقق": "أدخل رمز التحقق",
        "الرجاء إدخال الرمز المكون من 6 أرقام": "الرجاء إدخال الرمز المكون من 6 أرقام",
        "تأكيد الرمز": "تأكيد الرمز",
        "أرسل مجدداً (60)": "أرسل مجدداً (60)",
        "إلغاء الرجوع": "إلغاء الرجوع",
        "مرحباً بك": "مرحباً بك",
        "محفظتي الإلكترونية 💰": "محفظتي الإلكترونية 💰",
        "طلب توصيل جديد": "طلب توصيل جديد",
        "طلباتي السابقة": "طلباتي السابقة",
        "تسجيل الخروج": "تسجيل الخروج",
        "ادخل مكان الاستلام": "ادخل مكان الاستلام",
        "تحديد موقعي الحالي (GPS)": "تحديد موقعي الحالي (GPS)",
        "تأكيد الموقع ✅": "تأكيد الموقع ✅",
        "تفاصيل الاستلام": "تفاصيل الاستلام",
        "نوع المنتج المستلم:": "نوع المنتج المستلم:",
        "وثائق": "وثائق",
        "الكترونيات": "الكترونيات",
        "اكسسوارات": "اكسسوارات",
        "منتجات غذائية": "منتجات غذائية",
        "قهوة": "قهوة",
        "مشروب بارد": "مشروب بارد",
        "مجمدات": "مجمدات",
        "طعام ساخن": "طعام ساخن",
        "ملابس": "ملابس",
        "كيك": "كيك",
        "عطور": "عطور",
        "قابل للكسر": "قابل للكسر",
        "اخرى": "أخرى",
        "رقم هاتف المستلم منه": "رقم هاتف المستلم منه",
        "منطقة الاستلام...": "منطقة الاستلام...",
        "مجمع": "مجمع",
        "طريق": "طريق",
        "رقم المنزل او اسم مكان": "رقم المنزل او اسم مكان",
        "الشقة / الطابق (اختياري)": "الشقة / الطابق (اختياري)",
        "رابط الموقع (اختياري)": "رابط الموقع (اختياري)",
        "التالي: موقع التسليم": "التالي: موقع التسليم",
        "ادخل التسليم": "ادخل موقع التسليم",
        "تفاصيل التسليم": "تفاصيل التسليم",
        "طلبات مضافة في السلة": "🛒 طلبات مضافة في السلة حتى الآن:",
        "قيمة بضاعتك (مبلغ التحصيل)": "قيمة بضاعتك (مبلغ سنقوم بتحصيله وإرجاعه لك) د.ب",
        "رقم هاتف الزبون": "رقم هاتف الزبون",
        "منطقة التسليم...": "منطقة التسليم...",
        "رقم المنزل او اسم المكان": "رقم المنزل او اسم المكان",
        "مراجعة الطلبات": "مراجعة الطلبات",
        "البيانات المؤكدة": "البيانات المؤكدة",
        "تم تحديد المواقع على الخريطة أعلاه": "تم تحديد المواقع على الخريطة أعلاه 👆",
        "إضافة طلب آخر ➕": "إضافة طلب آخر ➕",
        "انتقال للدفع ✅": "انتقال للدفع ✅",
        "انتقال الى الدفع": "انتقال الى الدفع",
        "رصيد المحفظة:": "رصيد المحفظة:",
        "استخدام الرصيد": "استخدام الرصيد",
        "مجموع أجور التوصيل الأصلي:": "مجموع أجور التوصيل الأصلي:",
        "خصم المحفظة:": "خصم المحفظة:",
        "المطلوب دفعه:": "المطلوب دفعه:",
        "تحديد جميع الطلبات (دفع موحد)": "تحديد جميع الطلبات (دفع موحد)",
        "اختر طريقة الدفع للمبلغ المتبقي:": "اختر طريقة الدفع للمبلغ المتبقي:",
        "كاش": "كاش",
        "بنفت": "بنفت",
        "تفصيل الفاتورة المجمعة (رسوم التوصيل)": "تفصيل الفاتورة المجمعة (رسوم التوصيل)",
        "إجمالي المدفوع (بنفت):": "إجمالي المدفوع (بنفت):",
        "إجمالي المطلوب استلامه (كاش):": "إجمالي المطلوب استلامه (كاش):",
        "حول للآيبان وأرفق الصورة": "حول للآيبان وأرفق الصورة (إيصال واحد يكفي للكل):",
        "إرسال الطلبات الآن 🚀": "إرسال الطلبات الآن 🚀",
        "تم الإرسال بنجاح!": "تم الإرسال بنجاح!",
        "العودة للرئيسية": "العودة للرئيسية",
        "موقع خارج حدود البحرين": "موقع خارج حدود البحرين",
        "الرجاء التواصل مع الدعم للموافقة وتحديد السعر.": "الرجاء التواصل مع الدعم للموافقة وتحديد السعر.",
        "إرسال الطلب لانتظار تسعير الإدارة": "إرسال الطلب لانتظار تسعير الإدارة",
        "تفاصيل الطلب": "تفاصيل الطلب",
        "تقييم الخدمة": "تقييم الخدمة",
        "كيف كانت تجربتك": "كيف كانت تجربتك مع المندوب",
        "احصل على مكافأة": "احصل على <b>0.015 د.ب</b> في محفظتك عند التقييم!",
        "التعامل العام للمندوب:": "التعامل العام للمندوب:",
        "سرعة التوصيل:": "سرعة التوصيل:",
        "إرسال التقييم واستلام المكافأة": "إرسال التقييم واستلام المكافأة",
        "ليس الآن": "ليس الآن",
        "تقديم شكوى": "تقديم شكوى",
        "لديك مشكلة مع": "لديك مشكلة مع المندوب",
        "يرجى كتابة التفاصيل": "يرجى كتابة التفاصيل أدناه:",
        "اكتب تفاصيل المشكلة": "اكتب تفاصيل المشكلة أو الشكوى هنا...",
        "إرسال الشكوى للإدارة": "إرسال الشكوى للإدارة",
        "إلغاء": "إلغاء",
        "الشكاوى المقدمة": "الشكاوى المقدمة",
        "إغلاق النافذة": "إغلاق النافذة",
        "للمساعدة التواصل": "للمساعدة التواصل مع هذا الرقم",
        "alert_error": "عذراً!",
        "alert_success": "عملية ناجحة",
        "alert_info": "تنبيه",
        "ok": "حسناً",
        "cancel": "إلغاء",
        "yes_delete": "نعم، قم بالحذف",
        "no_back": "لا، تراجع",
        "fill_fields": "يرجى ملء جميع الحقول",
        "pass_mismatch": "كلمة المرور غير متطابقة",
        "invalid_phone": "رقم الهاتف غير صحيح",
        "checking": "جاري التحقق...",
        "sending": "جاري الإرسال...",
        "send_code": "إرسال رمز التحقق",
        "phone_registered": "هذا الرقم مسجل و فعال",
        "acc_suspended": "الحساب موقف الرجاء التواصل مع الدعم شكرا لتفهمكم",
        "db_error": "خطأ في قاعدة البيانات",
        "enter_phone": "الرجاء إدخال رقم الهاتف",
        "phone_not_found": "هذا الرقم غير مسجل لدينا، تأكد من الرقم والمفتاح",
        "resend": "أرسل مجدداً",
        "otp_resent": "تم إرسال الرمز مجدداً بنجاح",
        "enter_code": "أدخل الرمز",
        "verifying": "جاري التأكيد...",
        "otp_wrong": "الرمز غير صحيح",
        "acc_created": "تم إنشاء الحساب بنجاح! سجل دخولك الآن.",
        "pass_updated": "تم تحديث كلمة المرور ورفع أي قيود عن الحساب بنجاح. يمكنك تسجيل الدخول الآن.",
        "enter_full_data": "أدخل بيانات الدخول كاملة",
        "acc_locked": "تم قفل الحساب لتجاوز الحد المسموح. يرجى المحاولة لاحقاً.",
        "pass_wrong": "كلمة المرور غير صحيحة",
        "gps_error": "المتصفح لا يدعم GPS",
        "out_bahrain": "موقعك خارج حدود البحرين",
        "select_pickup": "حدد موقع الاستلام على الخريطة أولاً",
        "select_delivery": "حدد موقع التسليم على الخريطة أولاً",
        "fill_delivery_data": "يرجى إكمال جميع بيانات التسليم الإجبارية",
        "select_product_type": "يرجى اختيار نوع المنتج المستلم",
        "cant_mix_out_bahrain": "لا يمكن دمج طلب خارج البحرين مع طلبات داخلية.",
        "cart_empty": "السلة فارغة الآن، يرجى إضافة موقع تسليم جديد.",
        "insufficient_wallet": "رصيد غير كافٍ. لا يكفي لتغطية هذا الطلب مع الطلبات الأخرى.",
        "attach_proof": "يرجى إرفاق صورة التحويل البنكي (بنفت)",
        "approving": "جاري الاعتماد...",
        "req_sent": "تم إرسال الطلب للإدارة بنجاح.",
        "loading_orders": "جاري تحميل طلباتك...",
        "no_orders": "لا توجد طلبات",
        "waiting_driver": "بانتظار قبول المندوب",
        "waiting_pricing": "بانتظار تسعير الإدارة ⏳",
        "priced": "تم تحديد السعر - بانتظار الدفع 💳",
        "accepted": "قيد التنفيذ 🚚",
        "picked_up": "تم الاستلام من المحل 🛍️",
        "completed": "مكتمل ✅",
        "canceled": "ملغي ❌",
        "cancel_confirm_msg": "هل أنت متأكد من إلغاء الطلب؟",
        "yes_cancel": "نعم، قم بالإلغاء",
        "order_canceled_success": "تم إلغاء الطلب بنجاح"
    },
    en: {
        "توصيل البحرين": "Bahrain Delivery",
        "أدخل بياناتك للمتابعة": "Enter your details to continue",
        "رقم الهاتف": "Phone Number",
        "كلمة السر": "Password",
        "تسجيل الدخول": "Login",
        "نسيت كلمة المرور؟": "Forgot Password?",
        "ليس لديك حساب؟ ": "Don't have an account? ",
        "إنشاء حساب جديد": "Create new account",
        "تسجيل جديد": "New Registration",
        "الاسم الكامل": "Full Name",
        "كلمة المرور": "Password",
        "تأكيد كلمة المرور": "Confirm Password",
        "إرسال رمز التحقق": "Send OTP Code",
        "استعادة كلمة المرور": "Reset Password",
        "أدخل رقم هاتفك المسجل لنرسل لك رمز التحقق": "Enter your registered phone to receive OTP",
        "كلمة مرور جديدة": "New Password",
        "أدخل كلمة المرور الجديدة لحسابك": "Enter a new password for your account",
        "حفظ وتسجيل الدخول": "Save and Login",
        "أدخل رمز التحقق": "Enter OTP Code",
        "الرجاء إدخال الرمز المكون من 6 أرقام": "Please enter the 6-digit code",
        "تأكيد الرمز": "Confirm Code",
        "أرسل مجدداً (60)": "Resend (60)",
        "إلغاء الرجوع": "Cancel & Back",
        "مرحباً بك": "Welcome",
        "محفظتي الإلكترونية 💰": "My Digital Wallet 💰",
        "طلب توصيل جديد": "New Delivery Request",
        "طلباتي السابقة": "My Previous Orders",
        "تسجيل الخروج": "Logout",
        "ادخل مكان الاستلام": "Enter Pickup Location",
        "تحديد موقعي الحالي (GPS)": "Use My Current Location (GPS)",
        "تأكيد الموقع ✅": "Confirm Location ✅",
        "تفاصيل الاستلام": "Pickup Details",
        "نوع المنتج المستلم:": "Received Product Type:",
        "وثائق": "Documents",
        "الكترونيات": "Electronics",
        "اكسسوارات": "Accessories",
        "منتجات غذائية": "Groceries",
        "قهوة": "Coffee",
        "مشروب بارد": "Cold Drinks",
        "مجمدات": "Frozen Food",
        "طعام ساخن": "Hot Food",
        "ملابس": "Clothes",
        "كيك": "Cakes",
        "عطور": "Perfumes",
        "قابل للكسر": "Fragile",
        "اخرى": "Others",
        "رقم هاتف المستلم منه": "Sender's Phone Number",
        "منطقة الاستلام...": "Pickup Area...",
        "مجمع": "Block",
        "طريق": "Road",
        "رقم المنزل او اسم مكان": "House No. or Place Name",
        "الشقة / الطابق (اختياري)": "Apartment / Floor (Optional)",
        "رابط الموقع (اختياري)": "Location Link (Optional)",
        "التالي: موقع التسليم": "Next: Delivery Location",
        "ادخل التسليم": "Enter Delivery Location",
        "تفاصيل التسليم": "Delivery Details",
        "طلبات مضافة في السلة": "🛒 Orders added to cart so far:",
        "قيمة بضاعتك (مبلغ التحصيل)": "Item value (Amount to collect & return to you)",
        "رقم هاتف الزبون": "Customer's Phone Number",
        "منطقة التسليم...": "Delivery Area...",
        "رقم المنزل او اسم المكان": "House No. or Place Name",
        "مراجعة الطلبات": "Review Orders",
        "البيانات المؤكدة": "Confirmed Details",
        "تم تحديد المواقع على الخريطة أعلاه": "Locations marked on the map above 👆",
        "إضافة طلب آخر ➕": "Add Another Order ➕",
        "انتقال للدفع ✅": "Proceed to Pay ✅",
        "انتقال الى الدفع": "Proceed to Payment",
        "رصيد المحفظة:": "Wallet Balance:",
        "استخدام الرصيد": "Use Wallet",
        "مجموع أجور التوصيل الأصلي:": "Total Original Delivery Fees:",
        "خصم المحفظة:": "Wallet Discount:",
        "المطلوب دفعه:": "Total to Pay:",
        "تحديد جميع الطلبات (دفع موحد)": "Select all orders (Unified Payment)",
        "اختر طريقة الدفع للمبلغ المتبقي:": "Choose payment method for the remainder:",
        "كاش": "Cash",
        "بنفت": "Benefit",
        "تفصيل الفاتورة المجمعة (رسوم التوصيل)": "Unified Bill Breakdown (Delivery Fees)",
        "إجمالي المدفوع (بنفت):": "Total Paid (Benefit):",
        "إجمالي المطلوب استلامه (كاش):": "Total to Collect (Cash):",
        "حول للآيبان وأرفق الصورة": "Transfer to IBAN and attach image (One receipt is enough):",
        "إرسال الطلبات الآن 🚀": "Submit Orders Now 🚀",
        "تم الإرسال بنجاح!": "Sent Successfully!",
        "العودة للرئيسية": "Back to Home",
        "موقع خارج حدود البحرين": "Location out of Bahrain bounds",
        "الرجاء التواصل مع الدعم للموافقة وتحديد السعر.": "Please contact support for approval and pricing.",
        "إرسال الطلب لانتظار تسعير الإدارة": "Send request pending admin pricing",
        "تفاصيل الطلب": "Order Details",
        "تقييم الخدمة": "Rate Service",
        "كيف كانت تجربتك": "How was your experience with driver",
        "احصل على مكافأة": "Get <b>0.015 BHD</b> in your wallet upon rating!",
        "التعامل العام للمندوب:": "Driver's General Attitude:",
        "سرعة التوصيل:": "Delivery Speed:",
        "إرسال التقييم واستلام المكافأة": "Submit Rating & Get Reward",
        "ليس الآن": "Not Now",
        "تقديم شكوى": "Submit a Complaint",
        "لديك مشكلة مع": "Have an issue with driver",
        "يرجى كتابة التفاصيل": "Please write the details below:",
        "اكتب تفاصيل المشكلة": "Write issue details here...",
        "إرسال الشكوى للإدارة": "Send Complaint to Admin",
        "إلغاء": "Cancel",
        "الشكاوى المقدمة": "Submitted Complaints",
        "إغلاق النافذة": "Close Window",
        "للمساعدة التواصل": "For help, contact this number",
        "alert_error": "Error!",
        "alert_success": "Success",
        "alert_info": "Alert",
        "ok": "OK",
        "cancel": "Cancel",
        "yes_delete": "Yes, Delete",
        "no_back": "No, Go Back",
        "fill_fields": "Please fill all fields",
        "pass_mismatch": "Passwords do not match",
        "invalid_phone": "Invalid phone number",
        "checking": "Checking...",
        "sending": "Sending...",
        "send_code": "Send OTP Code",
        "phone_registered": "This number is already registered and active",
        "acc_suspended": "Account suspended. Please contact support.",
        "db_error": "Database error",
        "enter_phone": "Please enter phone number",
        "phone_not_found": "This number is not registered",
        "resend": "Resend",
        "otp_resent": "OTP resent successfully",
        "enter_code": "Enter code",
        "verifying": "Verifying...",
        "otp_wrong": "Invalid Code",
        "acc_created": "Account created successfully! Login now.",
        "pass_updated": "Password updated successfully. You can login now.",
        "enter_full_data": "Enter full login details",
        "acc_locked": "Account locked due to many attempts. Try again later.",
        "pass_wrong": "Incorrect password",
        "gps_error": "Browser does not support GPS",
        "out_bahrain": "Location is outside Bahrain",
        "select_pickup": "Select pickup location on map first",
        "select_delivery": "Select delivery location on map first",
        "fill_delivery_data": "Please complete all mandatory delivery details",
        "select_product_type": "Please select received product type",
        "cant_mix_out_bahrain": "Cannot mix outside Bahrain orders with inside ones.",
        "cart_empty": "Cart is empty, please add a new delivery location.",
        "insufficient_wallet": "Insufficient balance to cover this order.",
        "attach_proof": "Please attach Benefit transfer proof image",
        "approving": "Approving...",
        "req_sent": "Request sent successfully.",
        "loading_orders": "Loading your orders...",
        "no_orders": "No orders found",
        "waiting_driver": "Waiting for Driver acceptance",
        "waiting_pricing": "Pending Admin Pricing ⏳",
        "priced": "Priced - Waiting for Payment 💳",
        "accepted": "In Progress 🚚",
        "picked_up": "Picked up from store 🛍️",
        "completed": "Completed ✅",
        "canceled": "Canceled ❌",
        "cancel_confirm_msg": "Are you sure you want to cancel the order?",
        "yes_cancel": "Yes, Cancel",
        "order_canceled_success": "Order canceled successfully"
    }
};

let currentLang = localStorage.getItem('appLang') || 'ar';

function t(key) {
    return translations[currentLang] && translations[currentLang][key] ? translations[currentLang][key] : key;
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    if (document.getElementById('page-payment').classList.contains('active-page')) {
        renderCartAndPaymentUI();
    }
    
    if (document.getElementById('page-order-summary').classList.contains('active-page')) {
        renderOrderSummary();
    }
}

function toggleAppLanguage() {
    let newLang = currentLang === 'ar' ? 'en' : 'ar';
    switchLanguage(newLang);
}

function injectOrderIdInSuccessPage(orderId) {
    let page = document.getElementById('page-success');
    if (page) {
        let existing = document.getElementById('success-order-id-text');
        if (!existing) {
            existing = document.createElement('div');
            existing.id = 'success-order-id-text';
            existing.style.padding = '15px';
            existing.style.margin = '15px auto';
            existing.style.background = '#e3f2fd';
            existing.style.color = '#005EB8';
            existing.style.borderRadius = '10px';
            existing.style.fontWeight = 'bold';
            existing.style.fontSize = '18px';
            existing.style.textAlign = 'center';
            existing.style.width = '90%';
            existing.style.border = '2px dashed #005EB8';
            
            let btn = page.querySelector('button');
            if (btn && btn.parentNode) {
                btn.parentNode.insertBefore(existing, btn);
            } else {
                page.appendChild(existing);
            }
        }
        existing.innerHTML = (currentLang === 'ar' ? 'رقم الطلب المرجعي:<br>' : 'Order Reference:<br>') + `<span style="color:#DA291C; font-size:22px; display:inline-block; margin-top:5px; font-family:monospace;">${orderId}</span>`;
    }
}

// 🚀 تم إضافة كود الشاشة الافتتاحية هنا
window.onload = () => {
    switchLanguage(currentLang);
    
    // إخفاء الشاشة الافتتاحية بعد 2.5 ثانية بسلاسة
    setTimeout(() => {
        let splash = document.getElementById('splash-screen');
        if(splash) {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
            setTimeout(() => splash.remove(), 600);
        }
    }, 2500);
};
// --- نهاية إعدادات الترجمة ---

// 🚀 الكود السحري: إجبار نافذة SweetAlert على الظهور فوق أي شيء آخر في التطبيق (لمنع مشكلة التعليق)
if (!document.getElementById('swal-z-fix')) {
    let style = document.createElement('style');
    style.id = 'swal-z-fix';
    style.innerHTML = '.swal2-container { z-index: 999999 !important; }';
    document.head.appendChild(style);
}

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

window.alert = function(messageKey) {
    let message = t(messageKey); 
    
    let iconType = 'info';
    let titleText = t('alert_info');

    if (message.includes('خطأ') || message.includes('غير صحيح') || message.includes('ناقص') || message.includes('يرجى') || message.includes('عذراً') || message.includes('خارج') || messageKey.includes('error') || messageKey.includes('invalid') || messageKey.includes('fill') || messageKey.includes('locked')) {
        iconType = 'error';
        titleText = t('alert_error');
    } else if (message.includes('بنجاح') || message.includes('تم') || message.includes('شكراً') || messageKey.includes('success')) {
        iconType = 'success';
        titleText = t('alert_success');
    } else if (message.includes('مرحباً') || messageKey.includes('welcome')) {
        iconType = 'success';
        titleText = t('مرحباً بك');
    }

    Swal.fire({
        title: titleText,
        text: message,
        icon: iconType,
        confirmButtonText: t('ok'),
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
    if (val === t('قابل للكسر') || val === 'قابل للكسر' || val === 'Fragile') {
        warningDiv.style.display = 'block';
        Swal.fire({
            title: '⚠️ ' + t('alert_info'),
            text: currentLang === 'ar' ? 'نحن لا نتحمل أي مسؤولية عن تلف أو ضرر الأشياء القابلة للكسر أثناء التوصيل.' : 'We do not take responsibility for damage to fragile items.',
            icon: 'warning',
            confirmButtonText: t('ok'),
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
        btn.innerText = t("إلغاء");
        btn.style.background = "#DA291C";
    } else {
        btn.innerText = t("استخدام الرصيد");
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
        if(walletEl) walletEl.innerText = currentWalletBalance.toFixed(3) + " BHD";
        if(checkoutWalletEl) checkoutWalletEl.innerText = currentWalletBalance.toFixed(3) + " BHD";
        
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

    if(!nm || !ph || !ps || !pc) return alert("fill_fields");
    if(ps !== pc) return alert("pass_mismatch");
    if(ph.length < 7) return alert("invalid_phone");

    var fullPhone = country + ph; 
    var btn = document.getElementById('otp-btn');
    btn.disabled = true;
    btn.innerText = t("checking");

    db.ref('users/' + fullPhone).once('value', snapshot => {
        if (snapshot.exists()) {
            if (snapshot.val().status === 'suspended') {
                btn.disabled = false;
                btn.innerText = t("send_code");
                return alert("acc_suspended");
            }
            alert("phone_registered");
            btn.disabled = false;
            btn.innerText = t("send_code");
        } else {
            currentFlow = "register";
            tempFullPhone = fullPhone;
            sendOtpCode(fullPhone, btn);
        }
    }).catch(error => {
        alert("db_error");
        btn.disabled = false;
        btn.innerText = t("send_code");
    });
}

function startForgotProcess() {
    var ph = document.getElementById('forgot-phone').value.trim().replace(/\s+/g, '');
    var country = document.getElementById('forgot-country').value;

    if(!ph) return alert("enter_phone");

    var fullPhone = country + ph; 
    var btn = document.getElementById('forgot-btn');
    btn.disabled = true;
    btn.innerText = t("checking");

    db.ref('users/' + fullPhone).once('value', snapshot => {
        if (!snapshot.exists()) {
            alert("phone_not_found");
            btn.disabled = false;
            btn.innerText = t("send_code");
        } else {
            if (snapshot.val().status === 'suspended') {
                btn.disabled = false;
                btn.innerText = t("send_code");
                return alert("acc_suspended");
            }
            currentFlow = "forgot";
            tempFullPhone = fullPhone;
            sendOtpCode(fullPhone, btn);
        }
    }).catch(error => {
        alert("db_error");
        btn.disabled = false;
        btn.innerText = t("send_code");
    });
}

function startOtpTimer() {
    var resendBtn = document.getElementById('resend-otp-btn');
    resendBtn.disabled = true;
    resendBtn.style.color = "#888";
    var timeLeft = 60;
    resendBtn.innerText = t("resend") + ` (${timeLeft})`;

    clearInterval(otpTimer);
    otpTimer = setInterval(() => {
        timeLeft--;
        resendBtn.innerText = t("resend") + ` (${timeLeft})`;
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
            resendBtn.innerText = t("resend");
            resendBtn.disabled = false;
            resendBtn.style.color = "var(--benefit-blue)";
        }
    }, 1000);
}

function resendOtpCode() {
    var btn = document.getElementById('resend-otp-btn');
    btn.innerText = t("sending");
    btn.disabled = true;
    auth.signInWithPhoneNumber(tempFullPhone, window.recaptchaVerifier)
        .then((result) => {
            confirmationResult = result;
            alert("otp_resent");
            startOtpTimer();
        }).catch((error) => {
            alert("alert_error");
            btn.innerText = t("resend");
            btn.disabled = false;
        });
}

function sendOtpCode(fullPhone, btn) {
    btn.innerText = t("sending");
    auth.signInWithPhoneNumber(fullPhone, window.recaptchaVerifier)
        .then((result) => {
            confirmationResult = result;
            document.getElementById('otp-overlay').style.display = 'flex';
            btn.disabled = false;
            btn.innerText = t("send_code");
            startOtpTimer(); 
        }).catch((error) => {
            alert("alert_error");
            btn.disabled = false;
            btn.innerText = t("send_code");
        });
}

function verifyOtpCode() {
    var code = document.getElementById('otp-code').value;
    if(!code) return alert("enter_code");

    var vBtn = document.getElementById('verify-otp-btn');
    vBtn.style.background = '#95a5a6';
    vBtn.innerText = t("verifying");
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
            document.getElementById('welcome-msg').innerText = t("مرحباً بك") + " " + tempUserName;
            alert("alert_success");
        }
    }).catch(() => {
        alert("otp_wrong");
        vBtn.style.background = 'var(--red)';
        vBtn.innerText = t("تأكيد الرمز");
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
        alert("acc_created");
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

    if(!p1 || !p2) return alert("fill_fields");
    if(p1 !== p2) return alert("pass_mismatch");

    db.ref('users/' + tempFullPhone).update({
        password: p1,
        failedAttempts: 0,
        lockUntil: null,
        requiresOTP: null
    }).then(() => {
        alert("pass_updated");
        document.getElementById('new-pass').value = "";
        document.getElementById('new-pass-confirm').value = "";
        goTo('page-login');
    }).catch(err => {
        alert("alert_error");
    });
}

function secureLogin() {
    var country = document.getElementById('login-country').value;
    var ph = document.getElementById('login-phone').value.trim().replace(/\s+/g, '');
    var ps = document.getElementById('login-pass').value.trim();
    
    if(!ph || !ps) return alert("enter_full_data");
    
    var fullPhone = country + ph; 
    
    var btn = document.querySelector('#page-login .btn-red');
    btn.disabled = true;
    btn.innerText = t("checking");

    db.ref('users/' + fullPhone).once('value', s => {
        btn.disabled = false;
        btn.innerText = t("تسجيل الدخول");

        if(s.exists()) {
            var userData = s.val();
            var now = Date.now();
            var updates = {};
            var needsUpdate = false;

            if (userData.status === 'suspended') {
                return alert("acc_suspended");
            }

            if (userData.lockUntil && userData.lockUntil > now) {
                return alert("acc_locked");
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
                    currentFlow = "login_otp";
                    tempFullPhone = fullPhone;
                    tempUserName = userData.name || "";
                    sendOtpCode(fullPhone, btn);
                } else {
                    localStorage.setItem('uPhone', fullPhone); 
                    watchUserWallet();
                    goTo('page-home'); 
                    document.getElementById('welcome-msg').innerText = t("مرحباً بك") + " " + (userData.name || "");
                }
            } else {
                var fails = (userData.failedAttempts || 0) + 1;
                
                if (fails >= 10) {
                    updates.failedAttempts = fails;
                    updates.lockUntil = now + (12 * 60 * 60 * 1000); 
                    db.ref('users/' + fullPhone).update(updates);
                    alert("acc_locked");
                } else {
                    updates.failedAttempts = fails;
                    db.ref('users/' + fullPhone).update(updates);
                    alert("pass_wrong");
                }
            }
        }
        else {
            alert("phone_not_found");
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
        vBtn.innerText = t("تأكيد الرمز");
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
        btnWallet.innerText = t("استخدام الرصيد");
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
            input.type = 'text'; input.placeholder = currentLang === 'ar' ? 'ابحث عن مطعم، محل...' : 'Search place...'; input.className = 'google-search-box';
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
            input.type = 'text'; input.placeholder = currentLang === 'ar' ? 'ابحث عن منطقة، مبنى...' : 'Search area...'; input.className = 'google-search-box';
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
    if (!navigator.geolocation) return alert("gps_error");
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
        } else { alert("out_bahrain"); }
    }, () => alert("gps_error"), {enableHighAccuracy: true});
}

function confirmStep(step) {
    if (step === 'pickup' && !markerP) return alert("select_pickup");
    if (step === 'delivery' && !markerD) return alert("select_delivery");
    goTo(step === 'pickup' ? 'page-info-pickup' : 'page-info-delivery');
}

function isOutsideBahrain(lat, lng) {
    return (lat < BH_BOUNDS.latMin || lat > BH_BOUNDS.latMax || lng < BH_BOUNDS.lngMin || lng > BH_BOUNDS.lngMax);
}

function processCurrentDeliveryData() {
    if(!markerP || !markerD) return { error: t("fill_delivery_data") };
    
    var dPhone = document.getElementById('d-phone').value.trim();
    var dArea = document.getElementById('d-area').value.trim();
    var dBlock = document.getElementById('d-block').value.trim();
    var dRoad = document.getElementById('d-road').value.trim();
    var dHouse = document.getElementById('d-house').value.trim();
    var dCollection = document.getElementById('d-collection').value.trim();

    if(!dPhone || !dArea || !dBlock || !dRoad || !dHouse) {
        return { error: t("fill_delivery_data") };
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
        alert("select_product_type");
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
        return alert("cant_mix_out_bahrain");
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
    var pPhone = document.getElementById('p-phone').value || "-";
    var pArea = document.getElementById('p-area').value || "-";
    var pBlock = document.getElementById('p-block').value || "-";
    var pRoad = document.getElementById('p-road').value || "-";
    var pHouse = document.getElementById('p-house').value || "-";
    var pItemType = document.getElementById('p-item-type') ? document.getElementById('p-item-type').value : "-";

    var html = `
    <div class="card" style="border-right: 5px solid var(--red); margin-bottom: 15px; background: rgba(255, 255, 255, 0.9);">
        <h4 style="margin-top: 0; color: #333;">${t('تفاصيل الاستلام')}</h4>
        <p style="margin: 5px 0;"><b>${t('نوع المنتج المستلم:')}</b> ${pItemType}</p>
        <p style="margin: 5px 0;"><b>${t('منطقة الاستلام...')}</b> ${pArea} (${t('مجمع')}: ${pBlock}, ${t('طريق')}: ${pRoad}, No: ${pHouse})</p>
        <p style="margin: 5px 0;"><b>${t('رقم هاتف المستلم منه')}</b> <span dir="ltr">${pPhone}</span></p>
    </div>
    
    <div style="text-align: center; margin: 20px 0 10px;">
        <h3 style="color: #005EB8; margin: 0;"><i class="fas fa-truck"></i> ${currentLang === 'ar' ? 'وجهات التسليم' : 'Delivery Destinations'} (${currentCheckoutList.length})</h3>
    </div>
    `;

    currentCheckoutList.forEach((del, index) => {
        html += `
        <div class="card" style="border-right: 5px solid #005EB8; margin-bottom: 15px; background: rgba(255, 255, 255, 0.9);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="margin-top: 0; color: #005EB8;">${currentLang === 'ar' ? 'وجهة رقم' : 'Destination'} ${index + 1}</h4>
                <b style="color: var(--red);">${del.price} BHD</b>
            </div>
            <p style="margin: 5px 0;"><b>${t('منطقة التسليم...')}</b> ${del.dArea} (${t('مجمع')}: ${del.dBlock}, ${t('طريق')}: ${del.dRoad}, No: ${del.dHouse})</p>
            <p style="margin: 5px 0;"><b>${t('رقم هاتف الزبون')}</b> <span dir="ltr">${del.dPhone}</span></p>
            <p style="margin: 5px 0;"><b>${t('قيمة بضاعتك (مبلغ التحصيل)')}:</b> ${del.dCollection} BHD</p>

            <button onclick="deleteDeliveryFromSummary(${index})" style="width: 100%; margin-top: 15px; background: #ffebeb; color: var(--red); border: 1px solid var(--red); padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px;">
                <i class="fas fa-trash-alt"></i> ${currentLang === 'ar' ? 'حذف هذا التسليم' : 'Delete this delivery'}
            </button>
        </div>
        `;
    });

    summaryArea.innerHTML = html;
}

function deleteDeliveryFromSummary(index) {
    Swal.fire({
        title: t('alert_info'),
        text: currentLang === 'ar' ? "هل أنت متأكد أنك تريد حذف هذا التسليم؟" : "Are you sure you want to delete this delivery?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: t('yes_delete'),
        cancelButtonText: t('cancel')
    }).then((result) => {
        if (result.isConfirmed) {
            currentCheckoutList.splice(index, 1);
            multiOrdersList = [...currentCheckoutList]; 
            addedByProceed = false; 

            if (currentCheckoutList.length === 0) {
                Swal.fire(t('alert_success'), currentLang === 'ar' ? 'تم حذف جميع وجهات التسليم.' : 'All deliveries deleted.', 'info');
                
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
        title: t('alert_info'),
        text: currentLang === 'ar' ? "هل أنت متأكد من حذف هذا الطلب من السلة؟" : "Delete this order from cart?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: t('yes_delete'),
        cancelButtonText: t('cancel')
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
                alert("cart_empty");
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
        
        let cashStyle = order.method === 'Cash' ? 'background:#27ae60; color:#fff;' : 'background:rgba(255,255,255,0.8); color:#333;';
        let benStyle = order.method === 'Benefit' ? 'background:#005EB8; color:#fff;' : 'background:rgba(255,255,255,0.8); color:#333;';
        let wallStyle = order.method === 'Wallet' ? 'background:#8e44ad; color:#fff;' : 'background:rgba(255,255,255,0.8); color:#333;';
        
        listHtml += `
        <div class="card" style="margin-bottom:10px; padding:15px; position:relative; background: rgba(255, 255, 255, 0.9);">
            <button onclick="removeDeliveryFromCart(${index})" style="position:absolute; top:15px; left:15px; background:none; border:none; color:#DA291C; font-size:18px; cursor:pointer; padding:5px;" title="حذف الطلب">
                <i class="fas fa-trash-alt"></i>
            </button>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                <div style="padding-left: 30px;">
                    <b style="font-size:16px;">${currentLang === 'ar' ? 'طلب' : 'Order'} ${index + 1}</b><br>
                    <small style="color:#666;">${t('رقم هاتف الزبون')}: <span dir="ltr" style="font-weight:bold; color:#333;">${order.dPhone}</span></small>
                </div>
                <div style="text-align:left;">
                    <b style="color:var(--red); font-size:18px;">${order.price} BHD</b>
                </div>
            </div>
            
            <div class="individual-pay-section" id="indiv-pay-${index}">
                <div class="pay-methods" style="margin:0; display:flex; gap:5px;">
                    <div id="btn-cash-${index}" class="pay-btn" onclick="selectIndivPay(${index}, 'Cash')" style="flex:1; text-align:center; padding:10px; font-size:14px; border-radius:8px; cursor:pointer; transition:0.3s; border:1px solid #ddd; ${cashStyle}"><i class="fas fa-money-bill-wave"></i> ${t('كاش')}</div>
                    <div id="btn-benefit-${index}" class="pay-btn" onclick="selectIndivPay(${index}, 'Benefit')" style="flex:1; text-align:center; padding:10px; font-size:14px; border-radius:8px; cursor:pointer; transition:0.3s; border:1px solid #ddd; ${benStyle}"><i class="fas fa-university"></i> ${t('بنفت')}</div>
                    <div id="btn-wallet-${index}" class="pay-btn" onclick="selectIndivPay(${index}, 'Wallet')" style="flex:1; text-align:center; padding:10px; font-size:14px; border-radius:8px; cursor:pointer; transition:0.3s; border:1px solid #ddd; ${wallStyle}"><i class="fas fa-wallet"></i> ${currentLang==='ar'?'محفظة':'Wallet'}</div>
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
        document.getElementById('dist-info').innerText = currentLang === 'ar' ? "تم تغطية أجور التوصيل بالكامل من المحفظة" : "Delivery fully covered by wallet";
    } else {
        if (currentCheckoutList.length > 1) {
            document.getElementById('dist-info').innerText = currentLang === 'ar' ? "تم دمج " + currentCheckoutList.length + " طلبات في سلة واحدة" : "Combined " + currentCheckoutList.length + " orders in cart";
            document.getElementById('select-all-wrapper').style.display = 'block';
        } else {
            document.getElementById('dist-info').innerText = "";
            document.getElementById('select-all-wrapper').style.display = 'none'; 
        }
        
        currentCheckoutList.forEach((o, i) => {
            if(o.method === 'Wallet') {
                o.method = '';
                document.getElementById(`btn-cash-${i}`).style.background = 'rgba(255,255,255,0.8)'; document.getElementById(`btn-cash-${i}`).style.color = '#333';
                document.getElementById(`btn-benefit-${i}`).style.background = 'rgba(255,255,255,0.8)'; document.getElementById(`btn-benefit-${i}`).style.color = '#333';
                let wBtn = document.getElementById(`btn-wallet-${i}`);
                if(wBtn) { wBtn.style.background = 'rgba(255,255,255,0.8)'; wBtn.style.color = '#333'; }
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
            return Swal.fire(t('alert_error'), t('insufficient_wallet'), 'error');
        }
    }

    currentCheckoutList[index].method = method;

    document.getElementById(`btn-cash-${index}`).style.background = (method === 'Cash' ? '#27ae60' : 'rgba(255,255,255,0.8)');
    document.getElementById(`btn-cash-${index}`).style.color = (method === 'Cash' ? '#fff' : '#333');

    document.getElementById(`btn-benefit-${index}`).style.background = (method === 'Benefit' ? '#005EB8' : 'rgba(255,255,255,0.8)');
    document.getElementById(`btn-benefit-${index}`).style.color = (method === 'Benefit' ? '#fff' : '#333');

    let wBtn = document.getElementById(`btn-wallet-${index}`);
    if(wBtn) {
        wBtn.style.background = (method === 'Wallet' ? '#8e44ad' : 'rgba(255,255,255,0.8)');
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
            document.getElementById(`btn-cash-${i}`).style.background = 'rgba(255,255,255,0.8)'; document.getElementById(`btn-cash-${i}`).style.color = '#333';
            document.getElementById(`btn-benefit-${i}`).style.background = 'rgba(255,255,255,0.8)'; document.getElementById(`btn-benefit-${i}`).style.color = '#333';
            let wBtn = document.getElementById(`btn-wallet-${i}`);
            if(wBtn) { wBtn.style.background = 'rgba(255,255,255,0.8)'; wBtn.style.color = '#333'; }
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
            document.getElementById('summary-ben').innerText = totalBen.toFixed(3) + " BHD";
            document.getElementById('summary-cash').innerText = totalCash.toFixed(3) + " BHD";
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
        if(!file) return alert("attach_proof");
        imgData = await new Promise(r => { var rd = new FileReader(); rd.readAsDataURL(file); rd.onload = () => r(rd.result); });
    }
    sendNow(imgData);
}

function sendNow(img) {
    if (isSendingOrder) return;
    
    if (currentPendingOrderId) {
        isSendingOrder = true;
        var btn = document.getElementById('final-send-btn');
        btn.disabled = true; btn.innerText = t("approving");

        db.ref('orders/' + currentPendingOrderId).update({
            status: 'waiting', 
            method: masterMethod,
            proofImage: img || ""
        }).then(() => {
            isSendingOrder = false;
            injectOrderIdInSuccessPage(currentPendingOrderId);
            currentPendingOrderId = null; 
            goTo('page-success');
        }).catch(() => { isSendingOrder = false; btn.disabled = false; btn.innerText = t("إرسال الطلبات الآن 🚀"); });
        return;
    }

    isSendingOrder = true;
    var btn = document.getElementById('final-send-btn');
    btn.disabled = true; btn.innerText = t("sending");

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
        injectOrderIdInSuccessPage(orderId);
        goTo('page-success');
    }).catch(() => { 
        isSendingOrder = false; 
        btn.disabled = false; 
        btn.innerText = t("إرسال الطلبات الآن 🚀"); 
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
        Swal.fire({
            title: t('alert_success'),
            html: `${t('req_sent')}<br><br><b>${currentLang === 'ar' ? 'رقم الطلب المرجعي:' : 'Order Reference:'}</b><br><span style="color:#DA291C; font-size:20px; font-family:monospace;">${orderId}</span>`,
            icon: 'success',
            confirmButtonText: t('ok'),
            confirmButtonColor: '#DA291C',
            allowOutsideClick: false
        }).then(() => {
            goTo('page-home');
        });
    }).catch(() => { isSendingOrder = false; alert("db_error"); });
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

    list.innerHTML = `<p style='text-align:center; padding:20px;'>${t("loading_orders")}</p>`;

    db.ref('orders').orderByChild('user').equalTo(userPhone).on('value', snap => {
        list.innerHTML = "";
        if (!snap.exists()) { 
            list.innerHTML = `<p style='text-align:center;'>${t("no_orders")}</p>`; 
            return; 
        }

        var orders = []; 
        snap.forEach(c => { var o = c.val(); o.key = c.key; orders.push(o); });

        orders.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

        orders.forEach(o => { 
            var statusText = "";
            var statusColor = "var(--red)"; 

            if (o.status === 'waiting') statusText = t("waiting_driver");
            else if (o.status === 'pending_pricing') { statusText = t("waiting_pricing"); statusColor = "#f39c12"; }
            else if (o.status === 'priced') { statusText = t("priced"); statusColor = "#005EB8"; }
            else if (o.status === 'accepted') statusText = t("accepted");
            else if (o.status === 'picked_up') statusText = t("picked_up");
            else if (o.status === 'completed' || o.status === 'finished') { statusText = t("completed"); statusColor = "#27ae60"; }
            else if (o.status === 'canceled' || o.status === 'cancelled') { statusText = t("canceled"); statusColor = "#888"; }

            var cardStyle = (o.status === 'canceled' || o.status === 'cancelled') ? "opacity: 0.7; border-right: 5px solid #888;" : `border-right: 5px solid ${statusColor};`;
            
            var bundleLabel = o.isBundle && o.deliveries && o.deliveries.length > 1 ? `<span style="background:#f39c12; color:white; padding:2px 8px; border-radius:10px; font-size:12px; margin-right:5px;">${currentLang==='ar'?'مجمع':'Bundle'} (${o.deliveries.length})</span>` : '';

            list.innerHTML += `
                <div class="order-card" onclick='openDetails(${JSON.stringify(o)})' style="background: rgba(255, 255, 255, 0.9); border-radius:15px; margin-bottom:15px; width:100%; border:1px solid rgba(255,255,255,0.5); overflow:hidden; cursor:pointer; flex-shrink: 0; ${cardStyle} box-shadow: 0 4px 10px rgba(0,0,0,0.05); backdrop-filter: blur(10px);">
                    <div style="padding:20px; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <b style="font-size:18px;">${currentLang === 'ar' ? 'طلب' : 'Order'} #${o.key.slice(-5)} ${bundleLabel}</b><br>
                            <small style="color:#888; margin-top:5px; display:inline-block;">${currentLang === 'ar' ? 'إضغط لعرض التفاصيل الكاملة' : 'Click for full details'}</small>
                        </div>
                        <div style="text-align:left;">
                            <span style="color:${statusColor}; font-weight:bold; font-size:14px; background: ${statusColor}15; padding: 8px 15px; border-radius: 8px;">${statusText}</span>
                        </div>
                    </div>
                </div>`;
        });
    });
}

function openDetails(o) {
    var statusText = "";
    var statusColor = "var(--red)";

    if (o.status === 'waiting') statusText = t("waiting_driver");
    else if (o.status === 'pending_pricing') { statusText = t("waiting_pricing"); statusColor = "#f39c12"; }
    else if (o.status === 'priced') { statusText = t("priced"); statusColor = "#005EB8"; }
    else if (o.status === 'accepted') statusText = t("accepted");
    else if (o.status === 'picked_up') statusText = t("picked_up");
    else if (o.status === 'completed' || o.status === 'finished') { statusText = t("completed"); statusColor = "#27ae60"; }
    else if (o.status === 'canceled' || o.status === 'cancelled') { statusText = t("canceled"); statusColor = "#888"; }

    var orderTimeText = "-";
    if (o.timestamp) {
        var date = new Date(o.timestamp);
        var bhDate = new Date(date.getTime() + (3 * 3600000)); 
        var timeStr = bhDate.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });

        if (timeStr.includes('AM')) timeStr = timeStr.replace('AM', 'PM');
        else if (timeStr.includes('PM')) timeStr = timeStr.replace('PM', 'AM');
        else if (timeStr.includes('am')) timeStr = timeStr.replace('am', 'PM');
        else if (timeStr.includes('pm')) timeStr = timeStr.replace('pm', 'AM');
        
        orderTimeText = timeStr;
    }

    var cancelBtn = (o.status === 'waiting' || o.status === 'accepted' || o.status === 'pending_pricing' || o.status === 'priced') ? 
        `<button class="btn-red" onclick="cancelOrderNow('${o.key}')" style="width:100%; padding:20px; margin-top:15px; background:#DA291C; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer;">${currentLang === 'ar' ? 'إلغاء الطلب' : 'Cancel Order'} 🗑️</button>` : "";
    
    var payBtn = (o.status === 'priced') ? 
        `<button class="btn-red" onclick="resumePayment('${o.key}', '${o.price}')" style="width:100%; padding:20px; margin-top:15px; background:#005EB8; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer; box-shadow: 0 5px 15px rgba(0,94,184,0.3);">${currentLang==='ar' ? 'إكمال الدفع لاعتماد الطلب' : 'Complete Payment'} 💳</button>` : "";
    
    var dName = o.driverName || (currentLang === 'ar' ? "سائق توصيل" : "Driver");
    var dPhone = o.driverPhone || o.driver || ""; 

    var driverHtml = "";
    if (dPhone && (o.status !== 'canceled' && o.status !== 'cancelled')) {
        driverHtml = `
        <div class="info-card-huge" style="border-right: 5px solid #005EB8; background:#e3f2fd; padding:15px; border-radius:12px; margin-bottom:15px;">
            <b style="color:#005EB8; font-size:18px;">${currentLang === 'ar' ? 'بيانات المندوب المسؤول:' : 'Driver Details:'}</b>
            <p style="font-size:20px; margin:10px 0; font-weight:bold;">${dName}</p>
            <p style="font-size:18px; color:#333; margin-bottom:15px;">📞 ${currentLang==='ar'?'هاتف المندوب':'Phone'}: <b>${dPhone}</b></p>
            <a href="tel:${dPhone}" style="display:block; text-align:center; padding:15px; background:#27ae60; color:white; border-radius:10px; text-decoration:none; font-weight:bold; font-size:18px;">${currentLang==='ar'?'اتصال مباشر بالمندوب':'Call Driver Directly'} 📞</a>
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
                ratingBtnHtml = `<button onclick="showRatingModal('${o.key}', '${dName}', '${dPhone}')" style="width:100%; padding:20px; margin-top:15px; background:#f1c40f; color:#333; border:none; border-radius:12px; font-weight:bold; cursor:pointer; font-size:16px; box-shadow: 0 5px 15px rgba(241, 196, 15, 0.3);"><i class="fas fa-star"></i> ${currentLang==='ar'?'قيم المندوب واحصل على 0.015 د.ب!':'Rate Driver & Get 0.015 BHD!'}</button>`;
            } else {
                ratingBtnHtml = `<div style="text-align:center; padding:15px; margin-top:15px; background:#f8f9fa; border:1px solid #ddd; border-radius:12px; color:#888; font-size:14px;"><i class="fas fa-clock"></i> ${currentLang==='ar'?'انتهت فترة التقييم المتاحة (24 ساعة)':'Rating period expired'}</div>`;
            }
        } else {
            ratingBtnHtml = `<div style="text-align:center; padding:15px; margin-top:15px; background:#fdf8e3; border:1px solid #faebcc; border-radius:12px; color:#8a6d3b; font-weight:bold; font-size:16px;"><i class="fas fa-check-circle" style="color:#27ae60;"></i> ${currentLang==='ar'?'شكراً لتقييمك المندوب!':'Thanks for rating!'}</div>`;
        }

        if (timePassed <= threeDays) {
            let btnText = o.hasComplaint ? (currentLang==='ar'?"تقديم شكوى أخرى":"Submit another complaint") : (currentLang==='ar'?"تقديم شكوى على المندوب":"Submit complaint against driver");
            complaintBtnHtml += `<button onclick="showComplaintModal('${o.key}', '${dName}', '${dPhone}')" style="width:100%; padding:15px; margin-top:10px; background:#fff; color:#DA291C; border:2px solid #DA291C; border-radius:12px; font-weight:bold; cursor:pointer; font-size:14px;"><i class="fas fa-exclamation-triangle"></i> ${btnText}</button>`;
        }
        
        if (o.hasComplaint) {
            complaintBtnHtml += `<button onclick="showCancelComplaintModal('${o.key}')" style="width:100%; padding:15px; margin-top:10px; background:#f8f9fa; color:#333; border:1px solid #ccc; border-radius:12px; font-weight:bold; cursor:pointer; font-size:14px;"><i class="fas fa-list"></i> ${currentLang==='ar'?'عرض وإلغاء الشكاوى السابقة':'View/Cancel Previous Complaints'}</button>`;
        }
    }

    var benefitImageHtml = "";
    if ((o.method === 'Benefit' || (o.isBundle && o.proofImage)) && o.proofImage) {
        benefitImageHtml = `
        <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid #005EB8; background:#f0f7ff; text-align:center;">
            <b style="color:#005EB8; font-size:16px; display:block; margin-bottom:10px;">🖼️ ${currentLang==='ar'?'صورة إثبات الدفع (بنفت):':'Payment Proof (Benefit):'}</b>
            <img src="${o.proofImage}" style="width:100%; border-radius:10px; border:1px solid #ddd; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" onclick="window.open(this.src)">
            <small style="display:block; margin-top:5px; color:#666;">${currentLang==='ar'?'إضغط على الصورة لتكبيرها':'Click to enlarge'}</small>
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

            let payStatusText = isItemPaidOnline ? (currentLang==='ar'?'توصيل مدفوع 💳':'Paid Delivery 💳') : (currentLang==='ar'?'توصيل كاش 💵':'Cash Delivery 💵');
            if (walletDiscount > 0 && itemFinalDelPrice < itemDelPrice && !isItemPaidOnline) {
                payStatusText = currentLang==='ar' ? 'جزء مدفوع بالمحفظة والباقي كاش 💵' : 'Partially paid by wallet 💵';
            }

            deliveryDetailsHtml += `
            <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid #555; background:rgba(249, 249, 249, 0.9);">
                <b style="color:#333; font-size:16px;">🏁 ${currentLang==='ar'?'تفاصيل موقع التسليم':'Delivery Location'} ${idx + 1} (${payStatusText}):</b>
                <p style="margin:8px 0;"><b>${t('رقم الهاتف')}:</b> <span dir="ltr">${del.dPhone}</span></p>
                <p style="margin:8px 0;"><b>${t('العنوان:')}</b> منطقة ${del.dArea}، ${t('مجمع')} ${del.dBlock || '-'}، ${t('طريق')} ${del.dRoad || '-'}، منزل ${del.dHouse || '-'}</p>
                ${del.dType ? `<p style="margin:5px 0;"><b>Apt/Floor:</b> ${del.dType}</p>` : ''}
                <p style="margin:8px 0; font-weight:bold; color:var(--red); font-size:15px;">💰 ${currentLang==='ar'?'مطلوب تحصيله من هذا المستلم:':'To collect:'} ${itemTotalToCollect.toFixed(3)} BHD</p>
                ${del.dLink ? `<a href="${del.dLink}" target="_blank" style="color:#27ae60; display:block; margin-top:5px; font-weight:bold;">🔗 ${currentLang==='ar'?'فتح رابط الموقع (GPS)':'Open GPS Link'}</a>` : ''}
            </div>`;
        });
    } else {
        productPrice = parseFloat(o.collectionAmount || 0);
        let isItemPaidOnline = (o.method === 'Benefit' || o.method === 'Wallet');
        totalToCollect = isItemPaidOnline ? productPrice : (productPrice + finalDeliveryPrice);

        let payStatusText = isItemPaidOnline ? (currentLang==='ar'?'توصيل مدفوع 💳':'Paid Delivery 💳') : (currentLang==='ar'?'توصيل كاش 💵':'Cash Delivery 💵');
        if (walletDiscount > 0 && finalDeliveryPrice < originalDeliveryPrice && !isItemPaidOnline) {
            payStatusText = currentLang==='ar' ? 'جزء مدفوع بالمحفظة والباقي كاش 💵' : 'Partially paid by wallet 💵';
        }

        deliveryDetailsHtml = `
        <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid #555; background:rgba(249, 249, 249, 0.9);">
            <b style="color:#333; font-size:18px;">🏁 ${currentLang==='ar'?'تفاصيل موقع التسليم':'Delivery Location'} (${payStatusText}):</b>
            <p style="margin:8px 0;"><b>${t('رقم الهاتف')}:</b> <span dir="ltr">${o.dPhone}</span></p>
            <p style="margin:8px 0;"><b>${t('العنوان:')}</b> منطقة ${o.dArea}، ${t('مجمع')} ${o.dBlock || '-'}، ${t('طريق')} ${o.dRoad || '-'}، منزل ${o.dHouse || '-'}</p>
            ${o.dType ? `<p style="margin:5px 0;"><b>Apt/Floor:</b> ${o.dType}</p>` : ''}
            ${o.dLink ? `<a href="${o.dLink}" target="_blank" style="color:#27ae60; display:block; margin-top:5px; font-weight:bold;">🔗 ${currentLang==='ar'?'فتح رابط الموقع (GPS)':'Open GPS Link'}</a>` : ''}
        </div>`;
    }

    var paymentMethodText = "";
    if (o.method === 'Wallet') paymentMethodText = t("محفظة 💰");
    else if (o.method === 'Benefit') paymentMethodText = t("بنفت 💳");
    else if (o.method === 'Cash') paymentMethodText = t("كاش 💵");
    else paymentMethodText = currentLang === 'ar' ? "لم يتم الدفع بعد" : "Not Paid";

    if (walletDiscount > 0 && o.method !== 'Wallet') {
        paymentMethodText = `${t("محفظة 💰")} + ${paymentMethodText}`;
    }

    var detailsArea = document.getElementById('details-render-area');
    if(detailsArea) {
        detailsArea.style.maxHeight = "75vh"; 
        detailsArea.style.overflowY = "auto";
        detailsArea.style.paddingRight = "5px";

        detailsArea.innerHTML = `
            <div class="info-card-huge" style="padding:15px; background:rgba(249, 249, 249, 0.9); border-radius:12px; margin-bottom:15px; border-right:5px solid #333;">
                <b>${currentLang==='ar'?'رقم الطلب المرجعي:':'Order Reference:'}</b>
                <p style="word-break:break-all; margin:5px 0; font-family:monospace;">${o.key}</p>
                <p style="margin:5px 0; font-size:14px; color:#555;"><b>${currentLang==='ar'?'تاريخ ووقت الطلب:':'Date & Time:'}</b> <span style="font-weight:bold; color:var(--red);">${orderTimeText}</span></p>
                ${!o.isBundle ? `<small><b>${currentLang==='ar'?'طريقة الدفع:':'Payment Method:'}</b> ${paymentMethodText}</small>` : ''}
            </div>

            ${benefitImageHtml}
            <div class="info-card-huge" style="padding:15px; border-radius:12px; margin-bottom:15px; border-right:5px solid var(--red); background:rgba(255, 249, 249, 0.9);">
                <b style="color:var(--red); font-size:18px;">📍 ${t('تفاصيل الاستلام')}</b>
                <p style="margin:8px 0; color:var(--benefit-blue); font-weight:bold;">📦 ${t('نوع المنتج المستلم:')} ${o.pItemType || '-'}</p>
                <p style="margin:8px 0;"><b>${t('رقم الهاتف')}:</b> <span dir="ltr">${o.pPhone}</span></p>
                <p style="margin:8px 0;"><b>${t('العنوان:')}</b> منطقة ${o.pArea}، ${t('مجمع')} ${o.pBlock || '-'}، ${t('طريق')} ${o.pRoad || '-'}، منزل ${o.pHouse || '-'}</p>
                ${o.pType ? `<p style="margin:5px 0;"><b>Apt/Floor:</b> ${o.pType}</p>` : ''}
                ${o.pLink ? `<a href="${o.pLink}" target="_blank" style="color:#005EB8; display:block; margin-top:5px; font-weight:bold;">🔗 ${currentLang==='ar'?'فتح رابط الموقع (GPS)':'Open GPS Link'}</a>` : ''}
            </div>

            ${deliveryDetailsHtml}

            <div style="background:rgba(244, 251, 244, 0.9); border-radius:20px; border:2px dashed #27ae60; padding:20px; margin-bottom:20px; text-align:center;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#555;">
                    <span>${t('قيمة بضاعتك (مبلغ التحصيل)')}:</span>
                    <b style="color:#27ae60; font-size:18px;">${productPrice.toFixed(3)} BHD</b>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#555;">
                    <span>${t('مجموع أجور التوصيل الأصلي:')}</span>
                    <b>${originalDeliveryPrice.toFixed(3)} BHD</b>
                </div>
                ${walletDiscount > 0 ? `
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#27ae60; font-weight:bold;">
                    <span>${t('خصم المحفظة:')}</span>
                    <b>- ${walletDiscount.toFixed(3)} BHD</b>
                </div>
                ` : ''}
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:16px; color:#555;">
                    <span>${currentLang==='ar'?'رسوم التوصيل المتبقية:':'Remaining Delivery Fees:'}</span>
                    <b>${finalDeliveryPrice.toFixed(3)} BHD</b>
                </div>
                <hr style="border:0; border-top:1px solid #ccc; margin:10px 0;">
                <span style="font-size:14px; color:#888;">${currentLang==='ar'?'إجمالي ما سيقوم المندوب بتحصيله من المستلم كاش':'Total amount driver will collect in cash'}</span><br>
                <b style="font-size:28px; color:#DA291C;">${totalToCollect.toFixed(3)} BHD</b>
                ${productPrice > 0 ? `<p style="font-size:12px; color:#27ae60; margin-top:10px; font-weight:bold;"><i class="fas fa-info-circle"></i> ${currentLang==='ar'?'سيتم تحويل قيمة البضاعة لحسابك بعد التسليم.':'Items value will be transferred to your account.'}</p>` : ''}
            </div>

            <div class="info-card-huge" style="padding:15px; background:rgba(238, 238, 238, 0.9); border-radius:12px; margin-bottom:15px; text-align:center;">
                <b>${currentLang==='ar'?'حالة الطلب:':'Order Status:'}</b>
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
    document.getElementById('dist-info').innerText = currentLang === 'ar' ? "تم التسعير والموافقة من الإدارة (الدفع بنفت فقط)" : "Priced and approved by Admin (Benefit Only)";
    
    document.getElementById('select-all-wrapper').style.display = 'none';
    document.getElementById('master-pay-methods').style.display = 'block';
    document.getElementById('master-pay-title').innerText = t("اختر طريقة الدفع للمبلغ المتبقي:");
    
    document.getElementById('btn-master-cash').style.display = 'none';
    document.getElementById('btn-master-benefit').style.display = '';
    
    selectMasterPay('Benefit');
    
    var sendBtn = document.getElementById('final-send-btn');
    sendBtn.innerText = t("إرسال الطلبات الآن 🚀");

    var paymentBackBtn = document.querySelector('#page-payment .back-btn');
    if(paymentBackBtn) paymentBackBtn.setAttribute('onclick', "goTo('page-history')");

    closeDetails();
    goTo('page-payment');
}

function cancelOrderNow(key) {
    Swal.fire({
        title: t('alert_info'),
        text: t("cancel_confirm_msg"),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: t('yes_cancel'),
        cancelButtonText: t('cancel')
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
                closeDetails(); 
                alert("order_canceled_success"); 
            })
            .catch(() => { alert("alert_error"); });
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
    document.getElementById('rating-driver-name').innerText = driverName || 'Driver';
    
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

    if(generalVal === 0 || speedVal === 0) return alert("fill_fields");

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
                    reason: currentLang==='ar' ? `مكافأة تقييم المندوب لطلب #${orderId.slice(-5)}` : `Rating reward for order #${orderId.slice(-5)}`,
                    timestamp: Date.now()
                });

                alert("alert_success");
                closeRatingModal();
                closeDetails(); 
            });
        } else {
            alert("alert_success");
            closeRatingModal();
            closeDetails();
        }
    });
}

function showComplaintModal(orderId, driverName, driverPhone) {
    document.getElementById('complaint-order-id').value = orderId;
    document.getElementById('complaint-driver-phone').value = driverPhone;
    document.getElementById('complaint-driver-name').innerText = driverName || 'Driver';
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

    if(!text) return alert("fill_fields");

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
            alert("alert_success");
            closeComplaintModal();
            closeDetails(); 
        });
    }).catch(err => alert("alert_error"));
}

function showCancelComplaintModal(orderId) {
    var listContainer = document.getElementById('complaints-list-container');
    listContainer.innerHTML = `<p style="text-align:center; margin-top:20px;">${t('checking')}</p>`;
    document.getElementById('cancel-complaint-modal').style.display = 'flex';

    let uPhone = localStorage.getItem('uPhone');

    db.ref('complaints').orderByChild('orderId').equalTo(orderId).once('value', snap => {
        listContainer.innerHTML = '';
        if (!snap.exists()) {
            listContainer.innerHTML = `<p style="text-align:center; color:#888; margin-top:20px;">${currentLang==='ar'?'لا توجد شكاوى مسجلة.':'No complaints found.'}</p>`;
            return;
        }

        let hasMyComplaints = false;
        snap.forEach(childSnap => {
            let c = childSnap.val();
            if (c.userPhone === uPhone) {
                hasMyComplaints = true;
                let dateObj = new Date(c.timestamp);
                let timeStr = dateObj.toLocaleDateString('en-GB') + ' - ' + dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
                
                let textAlign = currentLang === 'ar' ? 'text-align:right;' : 'text-align:left;';
                listContainer.innerHTML += `
                    <div style="background:#fff5f5; border:1px solid #ffcccc; padding:15px; border-radius:12px; margin-bottom:15px; ${textAlign}">
                        <small style="color:#888; display:block; margin-bottom:8px;"><i class="fas fa-clock"></i> ${timeStr}</small>
                        <p style="margin:0 0 15px 0; font-size:15px; color:#333; line-height:1.5;">${c.complaintText}</p>
                        <button onclick="deleteComplaint('${childSnap.key}', '${orderId}')" style="background:#DA291C; color:#fff; border:none; padding:8px 15px; border-radius:8px; cursor:pointer; font-size:13px; font-weight:bold; width:100%;"><i class="fas fa-trash"></i> ${currentLang==='ar'?'إلغاء الشكوى و التراجع':'Cancel Complaint'}</button>
                    </div>
                `;
            }
        });

        if (!hasMyComplaints) {
            listContainer.innerHTML = `<p style="text-align:center; color:#888; margin-top:20px;">${currentLang==='ar'?'لا توجد شكاوى مسجلة.':'No complaints found.'}</p>`;
        }
    });
}

function closeCancelComplaintModal() {
    document.getElementById('cancel-complaint-modal').style.display = 'none';
}

function deleteComplaint(complaintKey, orderId) {
    Swal.fire({
        title: t('alert_info'),
        text: currentLang === 'ar' ? "هل أنت متأكد من رغبتك في التراجع وإلغاء هذه الشكوى؟" : "Are you sure you want to cancel this complaint?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DA291C',
        cancelButtonColor: '#888',
        confirmButtonText: t('yes_delete'),
        cancelButtonText: t('cancel')
    }).then((result) => {
        if (result.isConfirmed) {
            db.ref('complaints/' + complaintKey).remove().then(() => {
                alert("alert_success");
                
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
            }).catch(err => alert("alert_error"));
        }
    });
}