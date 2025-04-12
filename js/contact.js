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
    const languageButtonEn = document.getElementById("language-toggle-en");
    const languageButtonHe = document.getElementById("language-toggle-he");

    let fontSize = parseInt(localStorage.getItem("fontSize")) || 16; // שמירת גודל הפונט מהאחסון המקומי
    let highContrast = localStorage.getItem("highContrast") === "true";
    let monochromeMode = localStorage.getItem("monochromeMode") === "true";
    let boldText = localStorage.getItem("boldText") === "true";
    let highlightLinks = localStorage.getItem("highlightLinks") === "true";

    function applyAccessibilitySettings() {
        document.body.style.fontSize = fontSize + "px"; // שינוי גודל הפונט לכל הדף
        document.querySelectorAll("*").forEach(el => {
            el.style.fontSize = fontSize + "px"; // החלת גודל הפונט על כל האלמנטים
        });

        document.body.classList.toggle("high-contrast", highContrast);
        document.body.classList.toggle("monochrome-mode", monochromeMode);
        document.body.classList.toggle("bold-text", boldText);

        document.querySelectorAll("a").forEach(link => {
            link.style.textDecoration = highlightLinks ? "underline" : "none";
        });
    }

    applyAccessibilitySettings();

    // פתיחה וסגירה של תפריט הנגישות
    accessibilityButton.addEventListener("click", function (event) {
        event.stopPropagation();
        accessibilityMenu.style.display = (accessibilityMenu.style.display === "none" || accessibilityMenu.style.display === "") ? "flex" : "none";
    });

    // סגירה אוטומטית בלחיצה מחוץ לתפריט (אבל לא על כפתורי השפה)
    document.addEventListener("click", function (event) {
        const isClickOnLanguageButton = (event.target === languageButtonEn || event.target === languageButtonHe);
        if (!accessibilityMenu.contains(event.target) && event.target !== accessibilityButton && !isClickOnLanguageButton) {
            accessibilityMenu.style.display = "none";
        }
    });

    // פונקציות הנגישות
    window.increaseFontSize = function () {
        fontSize += 2;
        localStorage.setItem("fontSize", fontSize);
        applyAccessibilitySettings();
    };

    window.decreaseFontSize = function () {
        if (fontSize > 10) {
            fontSize -= 2;
            localStorage.setItem("fontSize", fontSize);
            applyAccessibilitySettings();
        }
    };

    window.toggleHighContrast = function () {
        highContrast = !highContrast;
        localStorage.setItem("highContrast", highContrast);
        applyAccessibilitySettings();
    };

    window.toggleMonochrome = function () {
        document.body.classList.toggle("monochrome-mode");
    };
    

    window.toggleBoldText = function () {
        boldText = !boldText;
        localStorage.setItem("boldText", boldText);
        applyAccessibilitySettings();
    };

    window.toggleLinksHighlight = function () {
        highlightLinks = !highlightLinks;
        localStorage.setItem("highlightLinks", highlightLinks);
        applyAccessibilitySettings();
    };

    window.disableAnimations = function () {
        document.body.classList.toggle("disable-animations");
    
        if (document.body.classList.contains("disable-animations")) {
            const style = document.createElement("style");
            style.id = "disable-animations-style";
            style.innerHTML = `
                * {
                    animation: none !important;
                    transition: none !important;
                    scroll-behavior: auto !important;
                }
            `;
            document.head.appendChild(style);
        } else {
            const style = document.getElementById("disable-animations-style");
            if (style) {
                style.remove();
            }
        }
    };

    window.resetAccessibility = function () {
        fontSize = 16;
        highContrast = false;
        monochromeMode = false;
        boldText = false;
        highlightLinks = false;
        
        localStorage.removeItem("fontSize");
        localStorage.removeItem("highContrast");
        localStorage.removeItem("monochromeMode");
        localStorage.removeItem("boldText");
        localStorage.removeItem("highlightLinks");

        applyAccessibilitySettings();
    };
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
            "wedding-date-label": "תאריך האירוע",
            "address": "שדרות אח\"י אילת 5, חיפה",
            "navigate_waze": "נווט עם Waze",
            "follow_us": "עקבי אחרינו",
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
            "wedding-date-label": "Event Date",
            "address": "Ah'i Eilat St 5, Haifa",
            "navigate_waze": "Navigate with Waze",
            "follow_us": "Follow Us",
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

        // פונקציה לעדכון טקסט אם האלמנט קיים
        function updateText(selector, key) {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = translations[lang][key];
            }
        }

        // פונקציה לעדכון placeholder בשדות קלט
        function updatePlaceholder(selector, key) {
            const element = document.querySelector(selector);
            if (element) {
                element.placeholder = translations[lang][key];
            }
        }

        // עדכון טקסטים
        updateText(".contact-title", "contact-title");
        updateText(".submit-btn", "submit-btn");
        updateText(".date-label", "wedding-date-label");
        updateText(".contact-item:nth-child(2) p", "address");
        updateText(".contact-item:nth-child(4) p", "navigate_waze");
        updateText(".contact-item:nth-child(5) p", "follow_us");

        // עדכון placeholders
        updatePlaceholder("#name", "name-placeholder");
        updatePlaceholder("#phone", "phone-placeholder");
        updatePlaceholder("#email", "email-placeholder");
        updatePlaceholder("#message", "message-placeholder");

        // עדכון תפריט הניווט
        updateText(".navbar-nav .nav-item a[href='/']", "nav-home");
        updateText("a[href='bridal.html']", "nav-bridal");
        updateText("a[href='evening.html']", "nav-evening");
        updateText("a[href='about.html']", "nav-about");
        updateText("a[href='contact.html']", "nav-contact");

        // עדכון תפריט הצד (Mobile Nav)
        updateText("#mobile-nav a[href='/']", "nav-home");
        updateText("#mobile-nav a[href='bridal.html']", "nav-bridal");
        updateText("#mobile-nav a[href='evening.html']", "nav-evening");
        updateText("#mobile-nav a[href='about.html']", "nav-about");
        updateText("#mobile-nav a[href='contact.html']", "nav-contact");

        // עדכון תפריט הנגישות
        const accessibilityButtons = [
            "increase-font", "decrease-font", "high-contrast",
            "highlight-links", "disable-animations", "monochrome",
            "bold-text", "reset-accessibility"
        ];

        accessibilityButtons.forEach((key, index) => {
            updateText(`#accessibility-menu button:nth-child(${index + 1})`, key);
        });

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

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("preloader").classList.add("preloader-hidden");
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
        }, 1000); // נוודא שהוא מוסר מה-DOM אחרי האנימציה
    }, 600); // מסך הפתיחה ייעלם אחרי 2 שניות
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // מונע משליחה רגילה של הטופס

        // קבלת ערכים מהשדות
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let weddingDate = document.getElementById("wedding-date").value;

        // יצירת הודעת ה-WhatsApp עם קידוד תווים נכון
        let whatsappMessage =
            `פנייה דרך orianbenharush.com\n` +
            `שלום, אני *${name}*!\n` +
            `📞 *טלפון:* ${phone}\n` +
            `📧 *אימייל:* ${email}\n` +
            `📅 *תאריך חתונה:* ${weddingDate}\n` +
            `💬 *הודעה:* ${message}`;

        // המספר שאליו תישלח ההודעה (וודא שהקידומת נכונה)
        let whatsappNumber = "972528782204"; // עדכן למספר הרלוונטי

        // יצירת הקישור ל-WhatsApp עם קידוד תקין
        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // פתיחת WhatsApp בחלון חדש עם ההודעה
        window.open(whatsappURL, "_blank");
    });
});
