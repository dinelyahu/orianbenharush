// משתנים גלובליים
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    let isMagnified = false;

    // פתיחת ה-Modal
    window.openModal = function (image) {
        modal.style.display = "flex";
        modalImage.src = image.src;
        isMagnified = false;
        modalImage.style.transform = "scale(1)";
    };

    // סגירת ה-Modal
    window.closeModal = function () {
        modal.style.display = "none";
        modalImage.style.transform = "scale(1)";
        isMagnified = false;
    };

    // הגדלה והקטנה של תמונות
    modalImage.addEventListener("click", () => {
        isMagnified = !isMagnified;
        modalImage.style.transform = isMagnified ? "scale(2)" : "scale(1)";
    });

    // סגירה של ה-Modal בלחיצה מחוץ לתמונה
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // תפריט צד במסכים קטנים
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const languageButtonEn = document.getElementById("language-toggle-en");
    const languageButtonHe = document.getElementById("language-toggle-he");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileNav.classList.toggle("open");

            // שינוי צבע הכפתורים בהתאם למצב התפריט
            const isOpen = mobileNav.classList.contains("open");
            if (isOpen) {
            languageButtonEn.classList.add("active");
            languageButtonHe.classList.add("active");
            } else {
            languageButtonEn.classList.remove("active");
            languageButtonHe.classList.remove("active");
            }
        });

        // סגירה בלחיצה מחוץ לתפריט - אבל לא בלחיצה על כפתור שינוי השפה
        document.addEventListener("click", function (event) {
            const languageButtonEn = document.getElementById("language-toggle-en");
            const languageButtonHe = document.getElementById("language-toggle-he");
        
            if (!mobileNav.contains(event.target) && 
                event.target !== menuToggle && 
                event.target !== languageButtonEn && 
                event.target !== languageButtonHe) {
                mobileNav.classList.remove("open");
                languageButtonEn.classList.remove("active");
                languageButtonHe.classList.remove("active");
            }
        });
        
    }




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
    const homeSection = document.getElementById("home");

    // מערך של תמונות רקע
    const images = [
        "images/bridal/background1.jpg",
        "images/bridal/background2.jpg",
        "images/bridal/background3.jpg",
        "images/bridal/background4.jpg"
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
        "images/bridal/img1.jpg",
        "images/bridal/img2.jpg",
        "images/bridal/img3.jpg",
        "images/bridal/img4.jpg",
        "images/bridal/img5.jpg"
    ];
    const eveningImages = [
        "images/evening/image1.jpeg",
        "images/evening/image2.jpeg",
        "images/evening/image3.jpeg",
        "images/evening/image4.jpeg",
        "images/evening/image5.jpeg"
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
    const accessibilityButton = document.getElementById("accessibility-button");
    const accessibilityMenu = document.getElementById("accessibility-menu");

    // פתיחה וסגירה של תפריט הנגישות
    accessibilityButton.addEventListener("click", function (event) {
        event.stopPropagation();
        accessibilityMenu.style.display = (accessibilityMenu.style.display === "none" || accessibilityMenu.style.display === "") ? "flex" : "none";
    });

    // סגירה אוטומטית בלחיצה מחוץ לתפריט
    document.addEventListener("click", function (event) {
        if (!accessibilityMenu.contains(event.target) && event.target !== accessibilityButton) {
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
    // אובייקט שמכיל את התרגומים לכל האלמנטים באתר
    const translations = {
        he: {
            home: "דף הבית",
            bridal: "שמלות כלה",
            evening: "שמלות ערב",
            about: "אודות",
            contact: "צרו קשר",
            bridalCollection: "קולקציית שמלות כלה",
            eveningCollection: "קולקציית שמלות ערב",
            viewMoreBridal: "לקולקציית שמלות הכלה",
            viewMoreEvening: "לקולקציית שמלות הערב",
            aboutTitle: "אודות",
            aboutText: "המסע שלי בעולם האופנה התחיל מתוך תשוקה עזה לעיצוב, יופי ויצירתיות. מאז שהייתי ילדה, חלמתי ליצור שמלות שיגרמו לכל אישה להרגיש כמו מלכה. אחרי שנים של לימודים וניסיון, הפכתי את החלום למציאות – עיצוב שמלות כלה וערב בעבודת יד, תוך הקפדה על כל פרט ופרט. כל שמלה נתפרת באהבה, תוך התאמה אישית לחלומות של הלקוחה.",
            processTitle: "התהליך שלי",
            processText: "כשאת מגיעה לסטודיו, אני מקשיבה לחלום שלך ומתחילה בתהליך יצירה משותף. משלב הסקיצה ועד השמלה המושלמת, כל פרט נתפר בקפידה, כדי לוודא שהשמלה שלך תהיה לא פחות ממושלמת.",
            uniquenessTitle: "הייחודיות שלי",
            uniquenessText: "העיצובים שלי משלבים קלאסיקה עם חדשנות, תוך שימוש בחומרי הגלם האיכותיים ביותר. אני מאמינה שכל אישה צריכה להרגיש מיוחדת ביום הגדול שלה, ולכן אני מציעה התאמה אישית מלאה לכל שמלה.",
            consultButton: "רוצה לתאם פגישת ייעוץ ולהרשם מהקולקציה? צרי קשר",
            contactTitle: "צרו קשר",
            namePlaceholder: "שם מלא",
            emailPlaceholder: "אימייל",
            messagePlaceholder: "הודעה",
            weddingDateLabel: "תאריך החתונה",
            nameLabel: "שם מלא:",
            emailLabel: "אימייל:",
            messageLabel: "הודעה:",
            sendButton: "שלח",
            accessibility: "תפריט נגישות",
            increaseFont: "הגדלת פונט ➕",
            decreaseFont: "הקטנת פונט ➖",
            highContrast: "ניגודיות גבוהה",
            highlightLinks: "הדגשת קישורים",
            disableAnimations: "חסימת אנימציות",
            monochromeMode: "מצב מונוכרום",
            boldText: "הדגשת טקסט (Bold)",
            resetSettings: "איפוס הגדרות"
        },
        en: {
            home: "Home",
            bridal: "Bridal Dresses",
            evening: "Evening Dresses",
            about: "About",
            contact: "Contact",
            bridalCollection: "Bridal Collection",
            eveningCollection: "Evening Collection",
            viewMoreBridal: "View Bridal Collection",
            viewMoreEvening: "View Evening Collection",
            aboutTitle: "About",
            aboutText: "My journey in the fashion world began with a deep passion for design, beauty, and creativity. Since I was a child, I dreamed of creating dresses that would make every woman feel like a queen. After years of study and experience, I turned my dream into reality—designing bridal and evening gowns by hand, with meticulous attention to every detail. Each dress is crafted with love, tailored to the unique dreams of each client.",
            processTitle: "My Process",
            processText: "When you arrive at the studio, I listen to your dream and begin a shared creative process. From the sketch stage to the perfect dress, every detail is carefully crafted to ensure that your dress is nothing less than perfect.",
            uniquenessTitle: "My Uniqueness",
            uniquenessText: "My designs combine classic elegance with innovation, using only the highest quality materials. I believe that every woman should feel special on her big day, which is why I offer full customization for each dress.",
            consultButton: "Want to schedule a consultation and register for the collection? Contact us",
            contactTitle: "Contact Us",
            namePlaceholder: "Full Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            weddingDateLabel: "Wedding Date",
            sendButton: "Send",
            accessibility: "Accessibility Menu",
            increaseFont: "Increase Font ➕",
            decreaseFont: "Decrease Font ➖",
            highContrast: "High Contrast",
            highlightLinks: "Highlight Links",
            disableAnimations: "Disable Animations",
            monochromeMode: "Monochrome Mode",
            boldText: "Bold Text",
            resetSettings: "Reset Settings"
        }
    };

    // פונקציה לעדכון התוכן באתר בהתאם לשפה שנבחרה
    function updateLanguage(lang) {
        document.querySelector(".nav-link[href='#home']").textContent = translations[lang].home;
        document.querySelector(".nav-link[href='bridal.html']").textContent = translations[lang].bridal;
        document.querySelector(".nav-link[href='evening.html']").textContent = translations[lang].evening;
        document.querySelector(".nav-link[href='#contact']").textContent = translations[lang].contact;

        document.querySelector("#scroll-gallery h2").textContent = translations[lang].bridalCollection;
        document.querySelector("#evening-gallery h2").textContent = translations[lang].eveningCollection;
        document.querySelector("#scroll-gallery .view-more-button").textContent = translations[lang].viewMoreBridal;
        document.querySelector("#evening-gallery .view-more-button").textContent = translations[lang].viewMoreEvening;

        document.querySelector(".about-section .about-text p:nth-of-type(1)").textContent = translations[lang].aboutText;
        document.querySelector(".about-section .about-text p:nth-of-type(2)").textContent = translations[lang].processText;
        document.querySelector(".about-section h3:nth-of-type(2)").textContent = translations[lang].processTitle;
        document.querySelector(".about-section h3:nth-of-type(3)").textContent = translations[lang].uniquenessTitle;
        document.querySelector(".about-section .about-text p:nth-of-type(3)").textContent = translations[lang].uniquenessText;
        
        document.querySelector(".contact-button").textContent = translations[lang].consultButton;
        document.querySelector("#contact h2").textContent = translations[lang].contactTitle;

        document.getElementById("name").placeholder = translations[lang].namePlaceholder;
        document.getElementById("email").placeholder = translations[lang].emailPlaceholder;
        document.getElementById("message").placeholder = translations[lang].messagePlaceholder;
        document.querySelector("label[for='wedding-date']").textContent = translations[lang].weddingDateLabel;
        
        document.querySelector("#form button[type='submit']").textContent = translations[lang].sendButton;

        document.querySelector("#about .about-text p").textContent = translations[lang].aboutText;



        // תפריט נגישות
        document.querySelector("#accessibility-menu button:nth-child(1)").textContent = translations[lang].increaseFont;
        document.querySelector("#accessibility-menu button:nth-child(2)").textContent = translations[lang].decreaseFont;
        document.querySelector("#accessibility-menu button:nth-child(3)").textContent = translations[lang].highContrast;
        document.querySelector("#accessibility-menu button:nth-child(4)").textContent = translations[lang].highlightLinks;
        document.querySelector("#accessibility-menu button:nth-child(5)").textContent = translations[lang].disableAnimations;
        document.querySelector("#accessibility-menu button:nth-child(6)").textContent = translations[lang].monochromeMode;
        document.querySelector("#accessibility-menu button:nth-child(7)").textContent = translations[lang].boldText;
        document.querySelector("#accessibility-menu button:nth-child(8)").textContent = translations[lang].resetSettings;


            // עדכון קישורי התפריט הצדדי (Mobile Nav)
    const mobileNavLinks = document.querySelectorAll("#mobile-nav ul li a");
    if (mobileNavLinks.length >= 5) {
        mobileNavLinks[0].textContent = translations[lang].home;
        mobileNavLinks[1].textContent = translations[lang].bridal;
        mobileNavLinks[2].textContent = translations[lang].evening;
        mobileNavLinks[3].textContent = translations[lang].about;
        mobileNavLinks[4].textContent = translations[lang].contact;
    }

        // שמירה ב-localStorage כדי שהשפה תישמר גם לאחר רענון
        localStorage.setItem("language", lang);
    }

    // כפתורי החלפת השפה
    document.getElementById("language-toggle-en").addEventListener("click", function () {
        updateLanguage("he");
    });

    document.getElementById("language-toggle-he").addEventListener("click", function () {
        updateLanguage("en");
    });

    // בדיקה אם יש שפה שמורה ב-localStorage
    const savedLang = localStorage.getItem("language") || "he"; // ברירת מחדל לעברית
    updateLanguage(savedLang);
});
