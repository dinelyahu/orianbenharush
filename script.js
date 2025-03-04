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

    // שינוי שפה ולוקליזציה
    if (languageToggle) {
        languageToggle.addEventListener("click", function (event) {
            event.stopPropagation(); // מונע מהכפתור לגרום לסגירת התפריט
            const htmlTag = document.documentElement;
            const currentLang = htmlTag.lang;
            const newLang = currentLang === "he" ? "en" : "he";

            htmlTag.lang = newLang;
            htmlTag.dir = newLang === "he" ? "rtl" : "ltr";
            updateTextContent(newLang);
        });
    }

    function updateTextContent(lang) {
        const translations = {
            he: {
                home: "דף הבית",
                bridal: "קולקציית שמלות כלה",
                evening: "קולקציית שמלות ערב",
                about: "אודות",
                contact: "צרי קשר",
                send: "שלחי",
                title: "Orian Ben Harush",
                bridalHeader: "שמלות כלה",
                eveningHeader: "שמלות ערב",
                contactHeader: "צרי קשר",
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
                title: "Orian Ben Harush",
                bridalHeader: "Bridal",
                eveningHeader: "Evening",
                contactHeader: "Contact",
                nameLabel: "Name:",
                emailLabel: "Email:",
                messageLabel: "Message:",
                sendButton: "Send"
            }
        };

        document.title = translations[lang].title;
        document.querySelector(".navbar-brand-text").textContent = translations[lang].title;

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

// הוספת פונקציה להעלמת הניווט בעת גלילה במסכים קטנים
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    function isSmallScreen() {
        return window.innerWidth <= 768;
    }

    window.addEventListener("scroll", function () {
        if (!isSmallScreen()) return;
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        navbar.style.top = scrollTop > lastScrollTop ? "-100px" : "0";
        lastScrollTop = scrollTop;
    });
});