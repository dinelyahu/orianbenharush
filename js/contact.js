document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const languageButtonEn = document.getElementById("language-toggle-en");
    const languageButtonHe = document.getElementById("language-toggle-he");

    // פונקציה לפתיחת/סגירת התפריט
    function toggleMenu(event) {
        event.stopPropagation();
        mobileNav.classList.toggle("open");
    }

    // האזנה ללחיצה על כפתור התפריט
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // סגירת התפריט בלחיצה מחוץ לתפריט (אבל לא על כפתורי השפה)
    document.addEventListener("click", function (event) {
        const isClickOnLanguageButton = (event.target === languageButtonEn || event.target === languageButtonHe);
        if (!mobileNav.contains(event.target) && event.target !== menuToggle && !isClickOnLanguageButton) {
            mobileNav.classList.remove("open");
        }
    });

    // כפתורי השפה **לא** יסגרו את התפריט
    languageButtonEn.addEventListener("click", function (event) {
        event.stopPropagation(); // מונע סגירה לא רצויה
    });

    languageButtonHe.addEventListener("click", function (event) {
        event.stopPropagation(); // מונע סגירה לא רצויה
    });

    // סגירת התפריט אם לוחצים על אחד מהקישורים בתפריט
    document.querySelectorAll("#mobile-nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("open");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileNav = document.getElementById("mobile-nav");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNavLinks = document.querySelectorAll("#mobile-nav ul li a");

    if (mobileNav && menuToggle) {
        // הוספת אירוע לכל קישור בתפריט
        mobileNavLinks.forEach(link => {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("open"); // סגירת התפריט
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const accessibilityButton = document.getElementById("accessibility-button");
    const accessibilityMenu = document.getElementById("accessibility-menu");

    // פתיחה וסגירה של תפריט הנגישות
    accessibilityButton.addEventListener("click", function (event) {
        event.stopPropagation();
        accessibilityMenu.style.display = (accessibilityMenu.style.display === "none" || accessibilityMenu.style.display === "") ? "flex" : "none";
    });

    // סגירה אוטומטית בלחיצה מחוץ לתפריט (אבל לא על כפתורי השפה)
    document.addEventListener("click", function (event) {
        const isClickOnLanguageButton = (event.target.id === "language-toggle-en" || event.target.id === "language-toggle-he");
        if (!accessibilityMenu.contains(event.target) && event.target !== accessibilityButton && !isClickOnLanguageButton) {
            accessibilityMenu.style.display = "none";
        }
    });

    let fontSize = 16; // גודל פונט ברירת מחדל

    function updateFontSize() {
        document.documentElement.style.setProperty("--font-size", fontSize + "px");
    }

    window.increaseFontSize = function () {
        fontSize += 2; // הגדלה של 2px
        updateFontSize();
    };

    window.decreaseFontSize = function () {
        if (fontSize > 10) { // מונע פונט קטן מדי
            fontSize -= 2;
            updateFontSize();
        }
    };

    window.toggleHighContrast = function () {
        document.body.classList.toggle("high-contrast");
    };

    window.toggleLinksHighlight = function () {
        document.querySelectorAll("a").forEach(link => {
            link.style.textDecoration = link.style.textDecoration === "underline" ? "none" : "underline";
        });
    };

    window.disableAnimations = function () {
        document.body.style.animation = "none";
        document.body.style.transition = "none";
    };

    window.resetAccessibility = function () {
        fontSize = 16; // איפוס גודל הטקסט
        updateFontSize();
        
        // איפוס ניגודיות גבוהה
        document.body.classList.remove("high-contrast");
    
        // איפוס הדגשת קישורים
        document.querySelectorAll("a").forEach(link => link.style.textDecoration = "none");
    
        // איפוס חסימת אנימציות
        document.body.style.animation = "";
        document.body.style.transition = "";
    
        // איפוס מצב מונוכרום
        document.body.classList.remove("monochrome-mode");
    
        // איפוס טקסט מודגש
        document.body.classList.remove("bold-text");
    
        // איפוס הדגשת טקסט בתפריט הצד
        const mobileNavLinks = document.querySelectorAll(".mobile-nav ul li a");
        mobileNavLinks.forEach(link => link.style.fontWeight = "normal");
    };
    
});
window.toggleMonochrome = function () {
    document.body.classList.toggle("monochrome-mode");
};
window.toggleBoldText = function () {
    document.body.classList.toggle("bold-text");

    // בוחרים את כל הכפתורים בתפריט הצד
    const mobileNavLinks = document.querySelectorAll(".mobile-nav ul li a");

    mobileNavLinks.forEach(link => {
        if (document.body.classList.contains("bold-text")) {
            link.style.fontWeight = "bold";
        } else {
            link.style.fontWeight = "normal";
        }
    });
};



document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // כשהמשתמש גולל, הניווט יעלה למעלה
        } else {
            navbar.classList.remove("scrolled"); // כשהמשתמש חוזר למעלה, הלוגו יחזור והניווט יחזור למקומו
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // וידוא שתאריך החתונה הוא בעתיד
    const weddingDateInput = document.getElementById("wedding-date");
    weddingDateInput.min = new Date().toISOString().split("T")[0];
});

document.addEventListener("DOMContentLoaded", function () {
    const langToggleEn = document.getElementById("language-toggle-he");
    const langToggleHe = document.getElementById("language-toggle-en");

    // מילון טקסטים בשתי השפות
    const translations = {
        "he": {
            "contact-title": "צרו קשר",
            "submit-btn": "שלח",
            "name-placeholder": "שם מלא",
            "phone-placeholder": "טלפון",
            "email-placeholder": "אימייל",
            "message-placeholder": "הודעה",
            "wedding-date-label": "תאריך החתונה",
            "nav-home": "דף הבית",
            "nav-bridal": "שמלות כלה",
            "nav-evening": "שמלות ערב",
            "nav-about": "אודות",
            "nav-contact": "צרו קשר",
            "accessibility-btn": "נגישות",
            "increase-font": "הגדלת פונט ➕",
            "decrease-font": "הקטנת פונט ➖",
            "high-contrast": "ניגודיות גבוהה",
            "highlight-links": "הדגשת קישורים",
            "disable-animations": "חסימת אנימציות",
            "monochrome": "מצב מונוכרום",
            "bold-text": "הדגשת טקסט (Bold)",
            "reset-accessibility": "איפוס הגדרות"
        },
        "en": {
            "contact-title": "Contact Us",
            "submit-btn": "Send",
            "name-placeholder": "Full Name",
            "phone-placeholder": "Phone",
            "email-placeholder": "Email",
            "message-placeholder": "Message",
            "wedding-date-label": "Wedding Date",
            "nav-home": "Home",
            "nav-bridal": "Bridal Dresses",
            "nav-evening": "Evening Dresses",
            "nav-about": "About",
            "nav-contact": "Contact",
            "accessibility-btn": "Accessibility",
            "increase-font": "Increase Font ➕",
            "decrease-font": "Decrease Font ➖",
            "high-contrast": "High Contrast",
            "highlight-links": "Highlight Links",
            "disable-animations": "Disable Animations",
            "monochrome": "Monochrome Mode",
            "bold-text": "Bold Text",
            "reset-accessibility": "Reset Settings"
        }
    };

    function setLanguage(lang) {
        // שינוי כיוון הדף
        document.documentElement.setAttribute("lang", lang);
        document.body.dir = lang === "he" ? "rtl" : "ltr";



        // עדכון כל הטקסטים באתר לפי השפה
        document.querySelector(".contact-title").textContent = translations[lang]["contact-title"];
        document.querySelector(".submit-btn").textContent = translations[lang]["submit-btn"];

        // עדכון placeholder בשדות הטופס
        document.getElementById("name").placeholder = translations[lang]["name-placeholder"];
        document.getElementById("phone").placeholder = translations[lang]["phone-placeholder"];
        document.getElementById("email").placeholder = translations[lang]["email-placeholder"];
        document.getElementById("message").placeholder = translations[lang]["message-placeholder"];
        document.querySelector(".date-label").textContent = translations[lang]["wedding-date-label"];

        // עדכון תפריט הניווט
        document.querySelector(".navbar-nav .nav-item a[href='/']").textContent = translations[lang]["nav-home"];
        document.querySelector("a[href='bridal.html']").textContent = translations[lang]["nav-bridal"];
        document.querySelector("a[href='evening.html']").textContent = translations[lang]["nav-evening"];
        document.querySelector("a[href='about.html']").textContent = translations[lang]["nav-about"];
        document.querySelector("a[href='contact.html']").textContent = translations[lang]["nav-contact"];

        // עדכון תפריט הצד (Mobile Nav)
        document.querySelector("#mobile-nav a[href='/']").textContent = translations[lang]["nav-home"];
        document.querySelector("#mobile-nav a[href='bridal.html']").textContent = translations[lang]["nav-bridal"];
        document.querySelector("#mobile-nav a[href='evening.html']").textContent = translations[lang]["nav-evening"];
        document.querySelector("#mobile-nav a[href='about.html']").textContent = translations[lang]["nav-about"];
        document.querySelector("#mobile-nav a[href='contact.html']").textContent = translations[lang]["nav-contact"];

        // עדכון תפריט הנגישות

        document.querySelector("#accessibility-menu button:nth-child(1)").textContent = translations[lang]["increase-font"];
        document.querySelector("#accessibility-menu button:nth-child(2)").textContent = translations[lang]["decrease-font"];
        document.querySelector("#accessibility-menu button:nth-child(3)").textContent = translations[lang]["high-contrast"];
        document.querySelector("#accessibility-menu button:nth-child(4)").textContent = translations[lang]["highlight-links"];
        document.querySelector("#accessibility-menu button:nth-child(5)").textContent = translations[lang]["disable-animations"];
        document.querySelector("#accessibility-menu button:nth-child(6)").textContent = translations[lang]["monochrome"];
        document.querySelector("#accessibility-menu button:nth-child(7)").textContent = translations[lang]["bold-text"];
        document.querySelector("#accessibility-menu button:nth-child(8)").textContent = translations[lang]["reset-accessibility"];

        // שמירת השפה ב-localStorage כדי שההגדרה תישמר לאחר טעינה מחדש
        localStorage.setItem("selectedLanguage", lang);
    }

    // טעינת השפה שנבחרה בעבר אם קיימת, אחרת ברירת מחדל היא עברית
    const savedLang = localStorage.getItem("selectedLanguage") || "he";
    setLanguage(savedLang);

    // האזנה ללחיצות על הכפתורים
    langToggleEn.addEventListener("click", () => setLanguage("he"));
    langToggleHe.addEventListener("click", () => setLanguage("en"));
});
