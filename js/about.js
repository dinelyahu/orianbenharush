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
    const langToggleEn = document.getElementById("language-toggle-he");
    const langToggleHe = document.getElementById("language-toggle-en");

    // מילון טקסטים בשתי השפות
    const translations = {
        "he": {

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
            "reset-accessibility": "איפוס הגדרות",
            "about-title": "אודות",
            "about-text": "המסע שלי בעולם האופנה התחיל מתוך תשוקה עזה לעיצוב, יופי ויצירתיות. מאז שהייתי ילדה, חלמתי ליצור שמלות שיגרמו לכל אישה להרגיש כמו מלכה. אחרי שנים של לימודים וניסיון, הפכתי את החלום למציאות – עיצוב שמלות כלה וערב בעבודת יד, תוך הקפדה על כל פרט ופרט. כל שמלה נתפרת באהבה, תוך התאמה אישית לחלומות של הלקוחה.",
            "process-title": "התהליך בסטודיו",
            "process-text": "כשאת מגיעה לסטודיו, אני מקשיבה לחלום שלך ומתחילה בתהליך יצירה משותף. משלב הסקיצה ועד השמלה המושלמת, כל פרט נתפר בקפידה, כדי לוודא שהשמלה שלך תהיה לא פחות ממושלמת.",
            "uniqueness-title": "ייחודיות",
            "uniqueness-text": "העיצובים שלי משלבים קלאסיקה עם חדשנות, תוך שימוש בחומרי הגלם האיכותיים ביותר. אני מאמינה שכל אישה צריכה להרגיש מיוחדת ביום הגדול שלה, ולכן אני מציעה התאמה אישית מלאה לכל שמלה.",
            "contact-button": "צרו קשר"
        },
        "en": {

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
            "reset-accessibility": "Reset Settings",
            "about-title": "About",
            "about-text": "My journey in the fashion world began with a deep passion for design, beauty, and creativity. Since childhood, I dreamed of creating dresses that would make every woman feel like a queen. After years of study and experience, I turned my dream into reality – designing bridal and evening gowns by hand, with meticulous attention to every detail. Each dress is sewn with love, tailored personally to fulfill the dreams of the client.",
            "process-title": "The Studio Process",
            "process-text": "When you arrive at the studio, I listen to your dream and begin a collaborative creation process. From the sketch stage to the perfect dress, every detail is meticulously crafted to ensure that your dress is nothing less than perfect.",
            "uniqueness-title": "Uniqueness",
            "uniqueness-text": "My designs combine classic elegance with innovation, using only the highest quality materials. I believe that every woman should feel special on her big day, which is why I offer full customization for each dress.",
            "contact-button": "Contact Us"
        }
    };

    function setLanguage(lang) {
        // שינוי כיוון הדף
        document.documentElement.setAttribute("lang", lang);
        document.body.dir = lang === "he" ? "rtl" : "ltr";


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


        // עדכון הטקסט של about
        document.getElementById("about-title").textContent = translations[lang]["about-title"];
        document.getElementById("about-text").textContent = translations[lang]["about-text"];
        document.getElementById("process-title").textContent = translations[lang]["process-title"];
        document.getElementById("process-text").textContent = translations[lang]["process-text"];
        document.getElementById("uniqueness-title").textContent = translations[lang]["uniqueness-title"];
        document.getElementById("uniqueness-text").textContent = translations[lang]["uniqueness-text"];
        document.getElementById("contact-button").textContent = translations[lang]["contact-button"];

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
