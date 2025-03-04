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

            if (currentLang === "he") {
                htmlTag.lang = "en";
                htmlTag.dir = "ltr";
                updateTextContent("en");
            } else {
                htmlTag.lang = "he";
                htmlTag.dir = "rtl";
                updateTextContent("he");
            }
        });
    }

    // פונקציה לעדכון הטקסטים בהתאם לשפה שנבחרה
    function updateTextContent(lang) {
        const translations = {
            he: {
                home: "דף הבית",
                bridal: "קולקציית שמלות כלה",
                evening: "קולקציית שמלות ערב",
                about: "אודות",
                contact: "צרי קשר",
                send: "שלחי"
            },
            en: {
                home: "Home",
                bridal: "Bridal Collection",
                evening: "Evening Collection",
                about: "About",
                contact: "Contact",
                send: "Send"
            }
        };

        // עדכון תפריט הניווט הראשי
        document.querySelector("a[href='#home']").textContent = translations[lang].home;
        document.querySelector("a[href='#scroll-gallery']").textContent = translations[lang].bridal;
        document.querySelector("a[href='#evening-gallery']").textContent = translations[lang].evening;
        document.querySelector("a[href='#about']").textContent = translations[lang].about;
        document.querySelector("a[href='#contact']").textContent = translations[lang].contact;

        // עדכון כפתורי התפריט הצדדי (Mobile Nav)
        const mobileNavLinks = document.querySelectorAll("#mobile-nav ul li a");
        if (mobileNavLinks.length >= 5) {
            mobileNavLinks[0].textContent = translations[lang].home;
            mobileNavLinks[1].textContent = translations[lang].bridal;
            mobileNavLinks[2].textContent = translations[lang].evening;
            mobileNavLinks[3].textContent = translations[lang].about;
            mobileNavLinks[4].textContent = translations[lang].contact;
        }

        // עדכון כפתור השליחה בטופס יצירת קשר
        const submitBtn = document.getElementById("submit-btn");
        if (submitBtn) {
            submitBtn.textContent = translations[lang].send;
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;

    // בדיקה האם מדובר במסך קטן
    function isSmallScreen() {
        return window.innerWidth <= 768;
    }

    // מאזין לאירוע גלילה
    window.addEventListener("scroll", function () {
        if (!isSmallScreen()) return; // פועל רק במסכים קטנים

        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-100px"; // מסתיר את הניווט בגלילה למטה
        } else {
            navbar.style.top = "0"; // מציג את הניווט בגלילה למעלה
        }
        lastScrollTop = scrollTop;
    });
});
