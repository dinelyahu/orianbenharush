










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
    const translations = {
        "he": {
            "home": "דף הבית",
            "bridal": "שמלות כלה",
            "evening": "שמלות ערב",
            "about": "אודות",
            "contact": "צרו קשר",
            "bridal_collection": "קולקציית שמלות כלה 2025",
            "evening_collection": "קולקציית שמלות ערב 2025",
            "view_bridal": "לקולקציית שמלות הכלה",
            "view_evening": "לקולקציית שמלות הערב",
            "contact_us": "צרו קשר",
            "full_name": "שם מלא",
            "phone": "טלפון",
            "email": "אימייל",
            "message": "הודעה",
            "wedding_date": "תאריך החתונה",
            "send": "שלח",
            "address": "שדרות אח\"י אילת 5, חיפה",
            "navigate_waze": "נווט עם Waze",
            "increase_font": "הגדלת פונט ➕",
            "decrease_font": "הקטנת פונט ➖",
            "high_contrast": "ניגודיות גבוהה",
            "highlight_links": "הדגשת קישורים",
            "disable_animations": "חסימת אנימציות",
            "monochrome_mode": "מצב מונוכרום",
            "bold_text": "הדגשת טקסט (Bold)",
            "reset_accessibility": "איפוס הגדרות"
        },
        "en": {
            "home": "Home",
            "bridal": "Bridal Dresses",
            "evening": "Evening Dresses",
            "about": "About",
            "contact": "Contact Us",
            "bridal_collection": "Bridal Collection 2025",
            "evening_collection": "Evening Collection 2025",
            "view_bridal": "View Bridal Collection",
            "view_evening": "View Evening Collection",
            "contact_us": "Contact Us",
            "full_name": "Full Name",
            "phone": "Phone",
            "email": "Email",
            "message": "Message",
            "wedding_date": "Wedding Date",
            "send": "Send",
            "address": "Ah'i Eilat St 5, Haifa",
            "navigate_waze": "Navigate with Waze",
            "increase_font": "Increase Font ➕",
            "decrease_font": "Decrease Font ➖",
            "high_contrast": "High Contrast",
            "highlight_links": "Highlight Links",
            "disable_animations": "Disable Animations",
            "monochrome_mode": "Monochrome Mode",
            "bold_text": "Bold Text",
            "reset_accessibility": "Reset Settings"
        }
    };

    const elementsToTranslate = {
        "home": document.querySelector(".nav-link[href='#home']"),
        "bridal": document.querySelector(".nav-link[href='bridal.html']"),
        "evening": document.querySelector(".nav-link[href='evening.html']"),
        "about": document.querySelector(".nav-link[href='about.html']"),
        "contact": document.querySelector(".nav-link[href='contact.html']"),
        "bridal_collection": document.querySelector("#scroll-gallery h2"),
        "evening_collection": document.querySelector("#evening-gallery h2"),
        "view_bridal": document.querySelector("#scroll-gallery .view-more-button"),
        "view_evening": document.querySelector("#evening-gallery .view-more-button"),
        "contact_us": document.querySelector(".contact-title"),
        "full_name": document.querySelector("input[name='name']"),
        "phone": document.querySelector("input[name='telephone']"),
        "email": document.querySelector("input[name='email']"),
        "message": document.querySelector("textarea[name='message']"),
        "wedding_date": document.querySelector(".date-label"),
        "send": document.querySelector(".submit-btn"),
        "address": document.querySelector(".contact-item:nth-child(2) p"),
        "navigate_waze": document.querySelector(".contact-item:nth-child(4) p"),
        "increase_font": document.querySelector("#accessibility-menu button:nth-child(1)"),
        "decrease_font": document.querySelector("#accessibility-menu button:nth-child(2)"),
        "high_contrast": document.querySelector("#accessibility-menu button:nth-child(3)"),
        "highlight_links": document.querySelector("#accessibility-menu button:nth-child(4)"),
        "disable_animations": document.querySelector("#accessibility-menu button:nth-child(5)"),
        "monochrome_mode": document.querySelector("#accessibility-menu button:nth-child(6)"),
        "bold_text": document.querySelector("#accessibility-menu button:nth-child(7)"),
        "reset_accessibility": document.querySelector("#accessibility-menu button:nth-child(8)")
    };

    function changeLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang);

        Object.keys(elementsToTranslate).forEach(key => {
            if (elementsToTranslate[key]) {
                if (elementsToTranslate[key].tagName === "INPUT" || elementsToTranslate[key].tagName === "TEXTAREA") {
                    elementsToTranslate[key].setAttribute("placeholder", translations[lang][key]);
                } else {
                    elementsToTranslate[key].textContent = translations[lang][key];
                }
            }
        });

        // שינוי תפריט ה-Mobile Nav
        document.querySelector("#mobile-nav ul").innerHTML = `
            <li><a href="/">${translations[lang]["home"]}</a></li>
            <li><a href="bridal.html">${translations[lang]["bridal"]}</a></li>
            <li><a href="evening.html">${translations[lang]["evening"]}</a></li>
            <li><a href="about.html">${translations[lang]["about"]}</a></li>
            <li><a href="contact.html">${translations[lang]["contact"]}</a></li>
        `;


    }

    // האזנה לכפתורי השפה
    document.getElementById("language-toggle-en").addEventListener("click", function () {
        changeLanguage("en");
    });

    document.getElementById("language-toggle-he").addEventListener("click", function () {
        changeLanguage("he");
    });

    // בדיקה אם יש שפה שמורה בלוקאל סטורג'
    const savedLanguage = localStorage.getItem("selectedLanguage") || "he";
    changeLanguage(savedLanguage);
});


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


document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // מופיע אחרי גלילה של 300 פיקסלים
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
