import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English and Arabic Translations
const resources = {
  en: {
    translation: {
      monthly_sessions: "MONTHLY SESSIONS",
      address_placeholder: "Address",
      nr_placeholder: "Nr",
      postal_code_placeholder: "Postal Code",
      city_placeholder: "City",
      number_of_sessions: "{{count}} Sessions",

      // Session options
      six_months: "6 MONTHS",
      nine_months: "9 MONTHS",
      twelve_months: "12 MONTHS",
      eighteen_months: "18 MONTHS",
      twentyfour_months: "24 MONTHS",
      thirty_months: "30 MONTHS",
      registration_title: "Registration & Booking at GoStudent",
      platform_description: "The leading platform for online tutoring",
      login_phone_number: "LOGIN PHONE NUMBER",
      contact_phone_number: "CONTACT PHONE NUMBER",
      contact_email: "CONTACT EMAIL",
      contact_name: "CONTACT NAME",
      billing_address: "BILLING ADDRESS",
      monthly_sessions: "MONTHLY SESSIONS",
      select_payment_method: "SELECT PAYMENT METHOD",
      order_overview: "ORDER OVERVIEW",
      pay_in_advance_discount: "Pay in advance - EXTRA 5% DISCOUNT",
      accept: "I accept the",
      terms_conditions: " Terms & Conditions",
      right_of_withdrawal: "right of withdrawal",
      and_understand: "and understand",
      my: "my",
      as_well_as_the: "as well as the",
      circumstances_that_lead: "circumstances that lead to a repeal of the same",
      your_price: "YOUR PRICE",
      regular_price: "REGULAR PRICE",
      discount: "DISCOUNT",
      setup_fee: "Setup fee",
      total_pm: "TOTAL P.M",
      order_now: "Order Now",
      country: "country",
      secure:'100% secure payment. All data is encrypted.',
      rate:'95% SATISFACTION RATE!',
      Card_holder:"Card holder"
    },
  },
  ar: {
    translation: {
      Card_holder:'حامل البطاقة',
      rate:'معدل رضا بنسبة 95%!',
      secure:'100٪ دفع آمن. جميع البيانات مشفرة.',
      country:'البلد',
      registration_title: "التسجيل والحجز في GoStudent",
      platform_description: "المنصة الرائدة للتدريس عبر الإنترنت",
      login_phone_number: "رقم الهاتف للدخول",
      contact_phone_number: "رقم هاتف الاتصال",
      contact_email: "البريد الإلكتروني للتواصل",
      contact_name: "اسم المتصل",
      billing_address: "عنوان الفواتير",
      monthly_sessions: "الجلسات الشهرية",
      select_payment_method: "اختيار طريقة الدفع",
      order_overview: "نظرة عامة على الطلب",
      pay_in_advance_discount: "ادفع مسبقًا - خصم 5% إضافي",
      accept: "أوافق علي ",
      terms_conditions: "  الشروط والأحكام",
      right_of_withdrawal: "حق الانسحاب",
      and_understand: "وأفهم",
      my: "حق",
      as_well_as_the: "وكذلك",
      circumstances_that_lead: "الظروف التي تؤدي إلى إلغاء هذا الحق",
      your_price: "سعرك",
      regular_price: "السعر العادي",
      discount: "الخصم",
      setup_fee: "رسوم التثبيت",
      total_pm: "المجموع شهريًا",
      order_now: "اطلب الآن",
      monthly_sessions: "الجلسات الشهرية",
      address_placeholder: "العنوان",
      nr_placeholder: "الرقم",
      postal_code_placeholder: "الرمز البريدي",
      city_placeholder: "المدينة",
      number_of_sessions: "{{count}} جلسات",

      // Session options
      six_months: "6 أشهر",
      nine_months: "9 أشهر",
      twelve_months: "12 شهرًا",
      eighteen_months: "18 شهرًا",
      twentyfour_months: "24 شهرًا",
      thirty_months: "30 شهرًا",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

// Update the document direction (ltr/rtl) when the language changes
i18n.on('languageChanged', (lng) => {
  const htmlTag = document.documentElement;
  if (lng === 'ar') {
    htmlTag.setAttribute('dir', 'rtl');
  } else {
    htmlTag.setAttribute('dir', 'ltr');
  }
});

export default i18n;
