// ملف إعدادات التطبيق
// هذا الملف يحتوي على الإعدادات الأساسية للتطبيق

const APP_CONFIG = {
    // اسم التطبيق
    appName: "تطبيق الفواتير - شركة الموج",
    
    // إصدار التطبيق
    version: "1.0.0",
    
    // اسم الشركة
    companyName: "شركة الموج",
    
    // اسم الشركة بالإنجليزية
    companyNameEn: "ALMOUJ TRADING & CONTRACTING",
    
    // وصف الشركة
    companyDescription: "للتجارة والمقاولات",
    
    // العملة الافتراضية
    defaultCurrency: "ريال",
    
    // تنسيق التاريخ الافتراضي
    dateFormat: "YYYY-MM-DD",
    
    // حفظ تلقائي (بالثواني)
    autoSaveInterval: 30,
    
    // تمكين/تعطيل التخزين المحلي
    enableLocalStorage: true,
    
    // تمكين/تعطيل الطباعة
    enablePrint: true,
    
    // تمكين/تعطيل تصدير PDF
    enablePDFExport: true,
    
    // تمكين/تعطيل البحث
    enableSearch: true,
    
    // الحد الأقصى لعدد الفواتير
    maxInvoices: 1000,
    
    // الحد الأقصى لعدد الخدمات في الفاتورة
    maxServicesPerInvoice: 20,
    
    // رسائل النجاح
    successMessages: {
        save: "تم حفظ الفاتورة بنجاح",
        delete: "تم حذف الفاتورة بنجاح",
        print: "جاري تحضير الفاتورة للطباعة",
        pdf: "تم حفظ الفاتورة كملف PDF"
    },
    
    // رسائل الخطأ
    errorMessages: {
        save: "فشل حفظ الفاتورة",
        delete: "فشل حذف الفاتورة",
        print: "فشل طباعة الفاتورة",
        pdf: "فشل تصدير الفاتورة",
        validation: "يرجى تعبئة الحقول المطلوبة",
        storage: "متصفحك لا يدعم التخزين المحلي"
    }
};

// دالة للحصول على الإعدادات
function getConfig() {
    return APP_CONFIG;
}

// دالة لتحديث إعدادات معينة
function updateConfig(key, value) {
    if (APP_CONFIG.hasOwnProperty(key)) {
        APP_CONFIG[key] = value;
        return true;
    }
    return false;
}

// تصدير الإعدادات للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_CONFIG, getConfig, updateConfig };
}