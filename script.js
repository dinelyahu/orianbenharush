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
                send: "שלחי",
                bridalHeader: "שמלות כלה",
                eveningHeader: "שמלות ערב",
                contactHeader: "צרו קשר",
                nameLabel: "שם:",
                emailLabel: "אימייל:",
                messageLabel: "הודעה:",
                sendButton: "שלחי"
            },
            en: {
                home: "Home",
                bridal: "Bridal Collection",
                evening: "Evening Collection",
                about: "About",
                contact: "Contact",
                send: "Send",
                bridalHeader: "Bridal",
                eveningHeader: "Evening",
                contactHeader: "Contact",
                nameLabel: "Name:",
                emailLabel: "Email:",
                messageLabel: "Message:",
                sendButton: "Send"
            }
        };



        document.querySelector("a[href='#home']").textContent = translations[lang].home;
        document.querySelector("a[href='#scroll-gallery']").textContent = translations[lang].bridal;
        document.querySelector("a[href='#evening-gallery']").textContent = translations[lang].evening;
        document.querySelector("a[href='#about']").textContent = translations[lang].about;
        document.querySelector("a[href='#contact']").textContent = translations[lang].contact;

        const mobileNavLinks = document.querySelectorAll("#mobile-nav ul li a");
        if (mobileNavLinks.length >= 5) {
            mobileNavLinks[0].textContent = translations[lang].home;
            mobileNavLinks[1].textContent = translations[lang].bridal;
            mobileNavLinks[2].textContent = translations[lang].evening;
            mobileNavLinks[3].textContent = translations[lang].about;
            mobileNavLinks[4].textContent = translations[lang].contact;
        }

        document.querySelector("#scroll-gallery h2").textContent = translations[lang].bridalHeader;
        document.querySelector("#evening-gallery h2").textContent = translations[lang].eveningHeader;
        document.querySelector("#contact h2").textContent = translations[lang].contactHeader;

        document.querySelector("label[for='name']").textContent = translations[lang].nameLabel;
        document.querySelector("label[for='email']").textContent = translations[lang].emailLabel;
        document.querySelector("label[for='message']").textContent = translations[lang].messageLabel;
        document.getElementById("submit-btn").textContent = translations[lang].sendButton;
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