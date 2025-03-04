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
    const languageToggle = document.getElementById("language-toggle");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileNav.classList.toggle("open");
        });

        // סגירה בלחיצה מחוץ לתפריט - אבל לא בלחיצה על כפתור שינוי השפה
        document.addEventListener("click", function (event) {
            if (!mobileNav.contains(event.target) && event.target !== menuToggle && event.target !== languageToggle) {
                mobileNav.classList.remove("open");
            }
        });
    }

// שינוי שפה ולוקליזציה + שינוי צבע זמני
// שינוי שפה ולוקליזציה + שינוי צבע זמני
if (languageToggle) {
    languageToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // מונע מהכפתור לגרום לסגירת התפריט
        const htmlTag = document.documentElement;
        const currentLang = htmlTag.lang;
        const newLang = currentLang === "he" ? "en" : "he";

        // שינוי השפה
        htmlTag.lang = newLang;
        htmlTag.dir = newLang === "he" ? "rtl" : "ltr";
        updateTextContent(newLang);

        // שמירת הצבעים המקוריים
        const originalBgColor = languageToggle.style.backgroundColor;
        const originalTextColor = languageToggle.style.color;

        // שינוי צבע הכפתור לזמן קצר
        languageToggle.style.backgroundColor = "white";
        languageToggle.style.color = "black";

        // החזרת הצבעים המקוריים אחרי 300 מילי-שניות
        setTimeout(() => {
            languageToggle.style.backgroundColor = originalBgColor || "transparent";
            languageToggle.style.color = originalTextColor || "white";
        }, 200);
    });
}

function updateTextContent(lang) {
    const translations = {
        he: {
            home: "דף הבית",
            bridal: "קולקציית שמלות כלה",
            evening: "קולקציית שמלות ערב",
            about: "אודות",
            contact: "צרו קשר",
            sendButton: "שלחי",
            bridalHeader: "שמלות כלה",
            eveningHeader: "שמלות ערב",
            contactHeader: "צרו קשר",
            nameLabel: "שם:",
            emailLabel: "אימייל:",
            messageLabel: "הודעה:",
            aboutTitle: "אודות",
            aboutText: "המסע שלי בעולם האופנה התחיל מתוך תשוקה עזה לעיצוב, יופי ויצירתיות. מאז שהייתי ילדה, חלמתי ליצור שמלות שיגרמו לכל אישה להרגיש כמו מלכה. אחרי שנים של לימודים וניסיון, הפכתי את החלום למציאות – עיצוב שמלות כלה וערב בעבודת יד, תוך הקפדה על כל פרט ופרט. כל שמלה נתפרת באהבה, תוך התאמה אישית לחלומות של הלקוחה.",
            processTitle: "התהליך שלי",
            processText: "כשאת מגיעה לסטודיו, אני מקשיבה לחלום שלך ומתחילה בתהליך יצירה משותף. משלב הסקיצה ועד השמלה המושלמת, כל פרט נתפר בקפידה, כדי לוודא שהשמלה שלך תהיה לא פחות ממושלמת.",
            uniquenessTitle: "הייחודיות שלי",
            uniquenessText: "העיצובים שלי משלבים קלאסיקה עם חדשנות, תוך שימוש בחומרי הגלם האיכותיים ביותר. אני מאמינה שכל אישה צריכה להרגיש מיוחדת ביום הגדול שלה, ולכן אני מציעה התאמה אישית מלאה לכל שמלה.",
            contactButton: "רוצה שמלה בהתאמה אישית? צרו קשר"
        },
        en: {
            home: "Home",
            bridal: "Bridal Collection",
            evening: "Evening Collection",
            about: "About",
            contact: "Contact",
            sendButton: "Send",
            bridalHeader: "Bridal Collection",
            eveningHeader: "Evening Collection",
            contactHeader: "Contact Us",
            nameLabel: "Name:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            aboutTitle: "About",
            aboutText: "My journey in the fashion world began with a deep passion for design, beauty, and creativity. Since I was a child, I dreamed of creating dresses that would make every woman feel like a queen. After years of study and experience, I turned my dream into reality – designing bridal and evening gowns by hand, with attention to every detail. Each dress is sewn with love, tailored to the client's dreams.",
            processTitle: "My Process",
            processText: "When you come to the studio, I listen to your dream and begin a joint creative process. From the sketch stage to the perfect dress, every detail is carefully crafted to ensure your dress is nothing short of perfect.",
            uniquenessTitle: "My Uniqueness",
            uniquenessText: "My designs combine classic elements with innovation, using the highest quality materials. I believe that every woman should feel special on her big day, which is why I offer full customization for every dress.",
            contactButton: "Want a custom dress? Contact us"
        }
    };

    // עדכון כל האלמנטים בדף
    document.querySelector("a[href='#home']").textContent = translations[lang].home;
    document.querySelector("a[href='#scroll-gallery']").textContent = translations[lang].bridal;
    document.querySelector("a[href='#evening-gallery']").textContent = translations[lang].evening;
    document.querySelector("a[href='#about']").textContent = translations[lang].about;
    document.querySelector("a[href='#contact']").textContent = translations[lang].contact;
        // עדכון כל הקישורים בתפריט הצד (mobile-nav)
        const mobileNavLinks = document.querySelectorAll("#mobile-nav ul li a");
        if (mobileNavLinks.length >= 5) {
            mobileNavLinks[0].textContent = translations[lang].home;
            mobileNavLinks[1].textContent = translations[lang].bridal;
            mobileNavLinks[2].textContent = translations[lang].evening;
            mobileNavLinks[3].textContent = translations[lang].about;
            mobileNavLinks[4].textContent = translations[lang].contact;
        }
    // עדכון כותרות
    document.querySelector("#scroll-gallery h2").textContent = translations[lang].bridalHeader;
    document.querySelector("#evening-gallery h2").textContent = translations[lang].eveningHeader;
    document.querySelector("#contact h2").textContent = translations[lang].contactHeader;

    // עדכון טופס יצירת קשר
    document.querySelector("label[for='name']").textContent = translations[lang].nameLabel;
    document.querySelector("label[for='email']").textContent = translations[lang].emailLabel;
    document.querySelector("label[for='message']").textContent = translations[lang].messageLabel;
    document.getElementById("submit-btn").textContent = translations[lang].sendButton;

    // עדכון קטע האודות
    document.querySelector(".about-section h2").textContent = translations[lang].aboutTitle;
    document.querySelector(".about-text p").textContent = translations[lang].aboutText;
    document.querySelector(".about-text h3:nth-of-type(1)").textContent = translations[lang].processTitle;
    document.querySelector(".about-text p:nth-of-type(2)").textContent = translations[lang].processText;
    document.querySelector(".about-text h3:nth-of-type(2)").textContent = translations[lang].uniquenessTitle;
    document.querySelector(".about-text p:nth-of-type(3)").textContent = translations[lang].uniquenessText;
    document.querySelector(".contact-button").textContent = translations[lang].contactButton;
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
        "images/background1.jpg",
        "images/background2.jpg",
        "images/background3.jpg",
        "images/background4.jpg"
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
        if (window.innerWidth <= 768) { // מחליף רק במסכים קטנים
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
    const video = document.getElementById("aboutVideo");
    const toggleButton = document.getElementById("toggleVideo");

    toggleButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            toggleButton.textContent = "⏸️"; // סימן עצירה
        } else {
            video.pause();
            toggleButton.textContent = "▶️"; // סימן ניגון
        }
    });
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
