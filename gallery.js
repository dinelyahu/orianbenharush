document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-grid img");

    // בדיקה אם זה מסך קטן (רק במובייל)
    function isMobile() {
        return window.innerWidth <= 768;
    }

    function checkVisibility() {
        if (!isMobile()) return; // מפעיל רק במסכים קטנים

        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // בודק אם לפחות 50% מהתמונה נמצאת בתוך המסך
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const imageHeight = rect.bottom - rect.top;
            const visibleRatio = visibleHeight / imageHeight;

            if (visibleRatio > 0.5) {
                img.classList.add("active"); // מתבהר בגלילה
            } else {
                img.classList.remove("active"); // חוזר להיות כהה
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility(); // בדיקה כשהדף נטען
});
