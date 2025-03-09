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
    const homeSection = document.getElementById("home");

    // מערך של תמונות רקע
    const images = [
        "/images/bridal/background1.jpg",
        "/images/bridal/background2.jpg",
        "/images/bridal/background3.jpg",
        "/images/bridal/background4.jpg"
    ];

    let currentIndex = 0;

    function changeBackground() {
        homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length; // לעבור לתמונה הבאה, ואם מגיעים לסוף - להתחיל מחדש
    }

    // הפעלת שינוי רקע כל 5 שניות
    setInterval(changeBackground, 5000);

    // הצגת תמונה ראשונה מיד עם טעינת הדף
    changeBackground();
});
document.addEventListener("DOMContentLoaded", function () {
    // רשימות התמונות לכל גלריה
    const bridalImages = [
        "/images/bridal/img1.jpg",
        "/images/bridal/img2.jpg",
        "/images/bridal/img3.jpg",
        "/images/bridal/img4.jpg",
        "/images/bridal/img5.jpg"
    ];
    const eveningImages = [
        "/images/evening/image1.jpeg",
        "/images/evening/image2.jpeg",
        "/images/evening/image3.jpeg",
        "/images/evening/image4.jpeg",
        "/images/evening/image5.jpeg"
    ];

    let bridalIndex = 0;
    let eveningIndex = 0;

    function changeImage() {
        if (window.innerWidth <= 994) { // מחליף רק במסכים קטנים
            document.getElementById("bridal-single-image").src = bridalImages[bridalIndex];
            document.getElementById("evening-single-image").src = eveningImages[eveningIndex];

            bridalIndex = (bridalIndex + 1) % bridalImages.length;
            eveningIndex = (eveningIndex + 1) % eveningImages.length;
        }
    }

    // החלפת תמונה כל שנייה
    setInterval(changeImage, 2000);
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
    const languageButtonEn = document.getElementById("language-toggle-en");
    const languageButtonHe = document.getElementById("language-toggle-he");

    // אובייקט עם התרגומים
    const translations = {
        en: {
            home: "Home",
            bridal: "Bridal Dresses",
            evening: "Evening Dresses",
            about: "About",
            contact: "Contact",
            bridalCollection: "Bridal Collection",
            eveningCollection: "Evening Collection",
            contactTitle: "Contact Us",
            namePlaceholder: "Full Name",
            phonePlaceholder: "Phone",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            weddingDateLabel: "Wedding Date",
            submitButton: "Send",
            address: "Achi Eilat 5, Haifa",
            navigateWaze: "Navigate with Waze",
            viewBridal: "View Bridal Collection",
            viewEvening: "View Evening Collection",
            accessibilityMenu: "Accessibility Menu",
            increaseFont: "Increase Font Size ➕",
            decreaseFont: "Decrease Font Size ➖",
            highContrast: "High Contrast Mode",
            highlightLinks: "Highlight Links",
            disableAnimations: "Disable Animations",
            monochromeMode: "Monochrome Mode",
            boldText: "Bold Text",
            resetSettings: "Reset Settings"
        },
        he: {
            home: "דף הבית",
            bridal: "שמלות כלה",
            evening: "שמלות ערב",
            about: "אודות",
            contact: "צרו קשר",
            bridalCollection: "קולקציית כלות",
            eveningCollection: "קולקציית ערב",
            contactTitle: "צרו קשר",
            namePlaceholder: "שם מלא",
            phonePlaceholder: "טלפון",
            emailPlaceholder: "אימייל",
            messagePlaceholder: "הודעה",
            weddingDateLabel: "תאריך החתונה",
            submitButton: "שלח",
            address: "שדרות אח\"י אילת 5, חיפה",
            navigateWaze: "נווט עם Waze",
            viewBridal: "לקולקציית שמלות הכלה",
            viewEvening: "לקולקציית שמלות הערב",
            accessibilityMenu: "תפריט נגישות",
            increaseFont: "הגדלת פונט ➕",
            decreaseFont: "הקטנת פונט ➖",
            highContrast: "מצב ניגודיות גבוהה",
            highlightLinks: "הדגשת קישורים",
            disableAnimations: "חסימת אנימציות",
            monochromeMode: "מצב מונוכרום",
            boldText: "הדגשת טקסט",
            resetSettings: "איפוס הגדרות"
        }
    };

    // פונקציה להחלפת שפה
    function changeLanguage(lang) {
        document.documentElement.lang = lang; // שינוי השפה של הדף

        // תפריט ראשי
        document.querySelector(".nav-link[href='#home']").textContent = translations[lang].home;
        document.querySelector(".nav-link[href='bridal.html']").textContent = translations[lang].bridal;
        document.querySelector(".nav-link[href='evening.html']").textContent = translations[lang].evening;
        document.querySelector(".nav-link[href='about.html']").textContent = translations[lang].about;
        document.querySelector(".nav-link[href='#contact']").textContent = translations[lang].contact;

        // כותרות גלריה
        document.querySelector("#scroll-gallery h2").textContent = translations[lang].bridalCollection;
        document.querySelector("#evening-gallery h2").textContent = translations[lang].eveningCollection;

        // טופס יצירת קשר
        document.querySelector(".contact-title").textContent = translations[lang].contactTitle;
        document.getElementById("name").placeholder = translations[lang].namePlaceholder;
        document.getElementById("phone").placeholder = translations[lang].phonePlaceholder;
        document.getElementById("email").placeholder = translations[lang].emailPlaceholder;
        document.getElementById("message").placeholder = translations[lang].messagePlaceholder;
        document.querySelector(".date-label").textContent = translations[lang].weddingDateLabel;
        document.querySelector(".submit-btn").textContent = translations[lang].submitButton;
        document.querySelectorAll(".contact-item p")[1].textContent = translations[lang].address;
        document.querySelectorAll(".contact-item p")[3].textContent = translations[lang].navigateWaze;

        // כפתורים של קולקציות שמלות
        document.querySelector(".view-more-button[href='bridal.html']").textContent = translations[lang].viewBridal;
        document.querySelector(".view-more-button[href='evening.html']").textContent = translations[lang].viewEvening;

        // תפריט הצד (MobileNav)
        document.querySelector("#mobile-nav ul li a[href='#home']").textContent = translations[lang].home;
        document.querySelector("#mobile-nav ul li a[href='#scroll-gallery']").textContent = translations[lang].bridal;
        document.querySelector("#mobile-nav ul li a[href='#evening-gallery']").textContent = translations[lang].evening;
        document.querySelector("#mobile-nav ul li a[href='#about']").textContent = translations[lang].about;
        document.querySelector("#mobile-nav ul li a[href='#contact']").textContent = translations[lang].contact;

        // תפריט הנגישות
        document.querySelector("#accessibility-menu button:nth-child(1)").textContent = translations[lang].increaseFont;
        document.querySelector("#accessibility-menu button:nth-child(2)").textContent = translations[lang].decreaseFont;
        document.querySelector("#accessibility-menu button:nth-child(3)").textContent = translations[lang].highContrast;
        document.querySelector("#accessibility-menu button:nth-child(4)").textContent = translations[lang].highlightLinks;
        document.querySelector("#accessibility-menu button:nth-child(5)").textContent = translations[lang].disableAnimations;
        document.querySelector("#accessibility-menu button:nth-child(6)").textContent = translations[lang].monochromeMode;
        document.querySelector("#accessibility-menu button:nth-child(7)").textContent = translations[lang].boldText;
        document.querySelector("#accessibility-menu button:nth-child(8)").textContent = translations[lang].resetSettings;

        // שינוי מצב הכפתורים
        languageButtonHe.classList.toggle("active", lang === "en");
        languageButtonEn.classList.toggle("active", lang === "he");

        // שמירת השפה שנבחרה ב-Local Storage כדי שתישמר גם בטעינות הבאות
        localStorage.setItem("selectedLanguage", lang);
    }

    // אירועי לחיצה על כפתורי השפה
    languageButtonEn.addEventListener("click", (event) => {
        event.stopPropagation();
        changeLanguage("he");
    });

    languageButtonHe.addEventListener("click", (event) => {
        event.stopPropagation();
        changeLanguage("en");
    });

    // בדיקת השפה השמורה והגדרתה מחדש
    const savedLang = localStorage.getItem("selectedLanguage") || "he";
    changeLanguage(savedLang);
});
