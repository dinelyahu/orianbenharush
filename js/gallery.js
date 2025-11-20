document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");


    // פונקציה לפתיחת/סגירת התפריט
    function toggleMenu(event) {
        event.stopPropagation();
        mobileNav.classList.toggle("open");
    }

    // האזנה ללחיצה על כפתור התפריט
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", toggleMenu);
    }




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
