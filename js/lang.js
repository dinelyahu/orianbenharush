// ================================
//   LANGUAGE SYSTEM – GLOBAL
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const langToggleEn = document.getElementById("language-toggle-en");
    const langToggleHe = document.getElementById("language-toggle-he");

    // ----- Translations Dictionary -----
    const translations = {
        "he": {
            // Navbar
            "nav-home": "דף הבית",
            "nav-bridal": "שמלות כלה",
            "nav-evening": "שמלות ערב",
            "nav-about": "אודות",
            "nav-contact": "צרו קשר",

            // Accessibility Menu
            "increase-font": "הגדלת פונט ✚",
            "decrease-font": "הקטנת פונט —",
            "high-contrast": "ניגודיות גבוהה",
            "highlight-links": "הדגשת קישורים",
            "disable-animations": "חסימת אנימציות",
            "monochrome": "מצב מונוכרום",
            "bold-text": "הדגשת טקסט (Bold)",
            "reset-accessibility": "איפוס הגדרות",
            "accessibility-link": "הצהרת נגישות 📄",

            // Buttons
            "back-button": "יציאה מהגלריה",

            // ABOUT page content
            "about-title": "אודות",
            "about-text": "המסע שלי בעולם האופנה התחיל מתוך תשוקה עזה לעיצוב, יופי ויצירתיות. מאז שהייתי ילדה, חלמתי ליצור שמלות שיגרמו לכל אישה להרגיש כמו מלכה. אחרי שנים של לימודים וניסיון, הפכתי את החלום למציאות – עיצוב שמלות כלה וערב בעבודת יד, תוך הקפדה על כל פרט ופרט. כל שמלה נתפרת באהבה, תוך התאמה אישית לחלומות של הלקוחה.",
            
            "process-title": "התהליך בסטודיו",
            "process-text": "כשאת מגיעה לסטודיו, אני מקשיבה לחלום שלך ומתחילה בתהליך יצירה משותף. משלב הסקיצה ועד השמלה המושלמת, כל פרט נתפר בקפידה, כדי לוודא שהשמלה שלך תהיה לא פחות ממושלמת.",
            
            "uniqueness-title": "ייחודיות",
            "uniqueness-text": "עיצובים שלי משלבים קלאסיקה עם חדשנות, תוך שימוש בחומרי הגלם האיכותיים ביותר. אני מאמינה שכל אישה צריכה להרגיש מיוחדת ביום הגדול שלה, ולכן אני מציעה התאמה אישית מלאה לכל שמלה.",
            
            "contact-title": "צרו קשר",
            "contact-button": "צרו קשר",
            "contact-name": "שם מלא",
            "contact-phone": "טלפון",
            "contact-email": "אימייל",
            "contact-message": "הודעה",
            "contact-event-date-label": "תאריך האירוע",
            "contact-event-date": "תאריך החתונה",
            "contact-submit": "שלח",
            "contact-address": "שדרות אח\"י אילת 5, חיפה",
            "contact-waze": "נווט עם waze",
            "contact-follow": "עקבי אחרינו",

            "home-bridal-title":"Bridal Collections",
            "home-bridal-button": "View Bridal Collections",
            "home-evening-title": "Evening Collection",
            "home-evening-button": "View Evening Collection"



        },

        "en": {
            // Navbar
            "nav-home": "Home",
            "nav-bridal": "Bridal Dresses",
            "nav-evening": "Evening Dresses",
            "nav-about": "About",
            "nav-contact": "Contact",

            // Accessibility Menu
            "increase-font": "Increase Font ➕",
            "decrease-font": "Decrease Font ➖",
            "high-contrast": "High Contrast",
            "highlight-links": "Highlight Links",
            "disable-animations": "Disable Animations",
            "monochrome": "Monochrome Mode",
            "bold-text": "Bold Text",
            "reset-accessibility": "Reset Settings",
            "accessibility-link": "Accessibility Statement 📄",

            // Buttons
            "back-button": "Exit Gallery",

            // ABOUT page content
            "about-title": "About",
            "about-text": "My journey in the world of fashion began with a deep passion for design, beauty, and creativity. Since childhood, I dreamed of creating dresses that would make every woman feel like a queen. After years of studies and experience, I turned that dream into reality – designing handcrafted bridal and evening gowns with uncompromising attention to detail. Every dress is made with love, tailored personally to each client's vision",

            "process-title": "The Studio Process",
            "process-text": "When you arrive at the studio, I listen to your dream and begin a shared creative process. From the sketch phase to the final gown, every detail is crafted meticulously to ensure your dress is nothing less than perfect",

            "uniqueness-title": "Uniqueness",
            "uniqueness-text": "My designs combine classic elegance with modern innovation, using only the highest-quality materials. I believe every woman deserves to feel special on her big day, and therefore I offer full customization for each gown",

            "contact-title": "Contact Us",
            "contact-button": "Contact",
            "contact-name": "Full Name",
            "contact-phone": "Phone",
            "contact-email": "Email",
            "contact-message": "Message",
            "contact-event-date-label": "Event Date",
            "contact-event-date": "Wedding Date",
            "contact-submit": "Send",
            "contact-address": "5 Achi Eilat Blvd, Haifa",
            "contact-waze": "Navigate with Waze",
            "contact-follow": "Follow Us",

            "home-bridal-title": "Bridal Collections",
            "home-bridal-button": "View Bridal Collections",

            "home-evening-title": "Evening Collection",
            "home-evening-button": "View Evening Collection"


            
        }
    };


    // ================================
    //   APPLY LANGUAGE TO THE PAGE  
    // ================================
    function setLanguage(lang) {
        document.documentElement.setAttribute("lang", lang);
        document.body.dir = lang === "he" ? "rtl" : "ltr";

        // Navbar (desktop)
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.dataset.key;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update placeholders (inputs & textarea)
        document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
            if (el.placeholder !== undefined) {
                el.placeholder = translations[lang][key];
        }
        if (el.tagName === "LABEL") {
            el.textContent = translations[lang][key];
        }
        }
        });




        // Accessibility menu
        updateText("#accessibility-menu button:nth-child(1)", translations[lang]["increase-font"]);
        updateText("#accessibility-menu button:nth-child(2)", translations[lang]["decrease-font"]);
        updateText("#accessibility-menu button:nth-child(3)", translations[lang]["high-contrast"]);
        updateText("#accessibility-menu button:nth-child(4)", translations[lang]["highlight-links"]);
        updateText("#accessibility-menu button:nth-child(5)", translations[lang]["disable-animations"]);
        updateText("#accessibility-menu button:nth-child(6)", translations[lang]["monochrome"]);
        updateText("#accessibility-menu button:nth-child(7)", translations[lang]["bold-text"]);
        updateText("#accessibility-menu button:nth-child(8)", translations[lang]["reset-accessibility"]);
        updateText("#accessibility-link", translations[lang]["accessibility-link"]);

        // Back button
        updateText(".back-button", translations[lang]["back-button"]);

        // Save user choice
        localStorage.setItem("selectedLanguage", lang);
    }


    // Small helper function (prevents errors!)
    function updateText(selector, text) {
        const el = document.querySelector(selector);
        if (el && text) el.textContent = text;
    }


    // ================================
    //   INITIAL LANGUAGE LOAD  
    // ================================
    const savedLang = localStorage.getItem("selectedLanguage") || "he";
    setLanguage(savedLang);

    // ================================
    //   EVENT LISTENERS  
    // ================================
    if (langToggleEn) langToggleEn.addEventListener("click", () => setLanguage("en"));
    if (langToggleHe) langToggleHe.addEventListener("click", () => setLanguage("he"));
});




/*  זה קשור לכל העמודים אבל זה לא תרגום */
document.addEventListener("click", function (event) {

    const mobileNav = document.getElementById("mobile-nav");
    const menuToggle = document.getElementById("menu-toggle");

    const languageButtonEn = document.getElementById("language-toggle-en");
    const languageButtonHe = document.getElementById("language-toggle-he");
    const accessibilityButton = document.getElementById("accessibility-button");

    // רק במסכים קטנים
    if (window.innerWidth > 992) return;

    // אם לוחצים על כפתור תפריט — אל תסגור
    if (event.target === menuToggle) return;

    // אם לוחצים על כפתורי שפה — אל תסגור
    if (event.target === languageButtonEn || event.target === languageButtonHe) return;

    // אם לוחצים על כפתור נגישות — אל תסגור
    if (event.target === accessibilityButton) return;

    // אם לוחצים בתוך התפריט — אל תסגור
    if (mobileNav.contains(event.target)) return;

    // אחרת — סגור את התפריט
    mobileNav.classList.remove("open");

});
