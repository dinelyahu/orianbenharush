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
