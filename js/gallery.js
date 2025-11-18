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
    const langToggleEn = document.getElementById("language-toggle-en");
    const langToggleHe = document.getElementById("language-toggle-he");

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
            "back-button": "יציאה מהגלריה",
            "accessibility-link": "הצהרת נגישות 📄"



            
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
            "back-button": "Exit Gallery",
            "accessibility-link": "Accessibility Statement 📄"



        }
    };

    function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.body.dir = lang === "he" ? "rtl" : "ltr";

    // עדכון תפריט הניווט (רק אם האלמנט קיים בעמוד)
    const home1 = document.querySelector(".navbar-nav .nav-item a[href='/']");
    if (home1) home1.textContent = translations[lang]["nav-home"];

    const bridal1 = document.querySelector("a[href='collections.html']");
    if (bridal1) bridal1.textContent = translations[lang]["nav-bridal"];

    const evening1 = document.querySelector("a[href='evening.html']");
    if (evening1) evening1.textContent = translations[lang]["nav-evening"];

    const about1 = document.querySelector("a[href='about.html']");
    if (about1) about1.textContent = translations[lang]["nav-about"];

    const contact1 = document.querySelector("a[href='contact.html']");
    if (contact1) contact1.textContent = translations[lang]["nav-contact"];

    // תפריט צד (Mobile Nav)
    const home2 = document.querySelector("#mobile-nav a[href='/']");
    if (home2) home2.textContent = translations[lang]["nav-home"];

    const bridal2 = document.querySelector("#mobile-nav a[href='collections.html']");
    if (bridal2) bridal2.textContent = translations[lang]["nav-bridal"];

    const evening2 = document.querySelector("#mobile-nav a[href='evening.html']");
    if (evening2) evening2.textContent = translations[lang]["nav-evening"];

    const about2 = document.querySelector("#mobile-nav a[href='about.html']");
    if (about2) about2.textContent = translations[lang]["nav-about"];

    const contact2 = document.querySelector("#mobile-nav a[href='contact.html']");
    if (contact2) contact2.textContent = translations[lang]["nav-contact"];

    // תפריט נגישות
    const btn1 = document.querySelector("#accessibility-menu button:nth-child(1)");
    if (btn1) btn1.textContent = translations[lang]["increase-font"];

    const btn2 = document.querySelector("#accessibility-menu button:nth-child(2)");
    if (btn2) btn2.textContent = translations[lang]["decrease-font"];

    const btn3 = document.querySelector("#accessibility-menu button:nth-child(3)");
    if (btn3) btn3.textContent = translations[lang]["high-contrast"];

    const btn4 = document.querySelector("#accessibility-menu button:nth-child(4)");
    if (btn4) btn4.textContent = translations[lang]["highlight-links"];

    const btn5 = document.querySelector("#accessibility-menu button:nth-child(5)");
    if (btn5) btn5.textContent = translations[lang]["disable-animations"];

    const btn6 = document.querySelector("#accessibility-menu button:nth-child(6)");
    if (btn6) btn6.textContent = translations[lang]["monochrome"];

    const btn7 = document.querySelector("#accessibility-menu button:nth-child(7)");
    if (btn7) btn7.textContent = translations[lang]["bold-text"];

    const btn8 = document.querySelector("#accessibility-menu button:nth-child(8)");
    if (btn8) btn8.textContent = translations[lang]["reset-accessibility"];
    
    const backBtn = document.querySelector(".back-button");
    if (backBtn) backBtn.textContent = translations[lang]["back-button"];
    
    const accLink = document.querySelector("#accessibility-link");
    if (accLink) accLink.textContent = translations[lang]["accessibility-link"];

    localStorage.setItem("selectedLanguage", lang);
}

    // טעינת השפה שנבחרה בעבר אם קיימת, אחרת ברירת מחדל היא עברית
    const savedLang = localStorage.getItem("selectedLanguage") || "he";
    setLanguage(savedLang);

    // האזנה ללחיצות על הכפתורים
    langToggleEn.addEventListener("click", () => setLanguage("en"));
    langToggleHe.addEventListener("click", () => setLanguage("he"));
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("preloader").classList.add("preloader-hidden");
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
        }, 1000); // נוודא שהוא מוסר מה-DOM אחרי האנימציה
    }, 600); // מסך הפתיחה ייעלם אחרי 2 שניות
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



document.addEventListener("DOMContentLoaded", function () {
  const pairs = document.querySelectorAll(".pair"); // העטיפה החיצונית שאינה גוללת

  pairs.forEach(pair => {
    const scroller = pair.querySelector(".dress-pair"); // זה הגולל האופקי
    const slides   = Array.from(scroller.querySelectorAll(".image-wrapper"));
    const dots     = Array.from(pair.querySelectorAll(".dots-container .dot"));
    if (!scroller || slides.length === 0 || dots.length === 0) return;

    let ticking = false;

    // מחשב איזו תמונה הכי במרכז ה־viewport של ה-scroller
    const updateActiveDot = () => {
      const view = scroller.getBoundingClientRect();
      const centerX = view.left + view.width / 2;

      let bestIndex = 0;
      let bestDist = Infinity;

      slides.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const dist = Math.abs(cx - centerX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      dots.forEach((d, i) => d.classList.toggle("active", i === bestIndex));
      ticking = false;
    };

    // מאזין לגלילה בצורה יעילה (RAF) – לא מזיז את התמונות
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveDot);
      }
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveDot);

    // אתחול ראשוני
    updateActiveDot();
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("collections-toggle");
    const menu = document.getElementById("collections-mini");

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", () => {
        menu.style.display = "none";
    });
});
