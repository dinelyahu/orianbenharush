document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-grid img");

    function checkVisibility() {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                img.classList.add("active"); // מתבהר כשהתמונה נראית
            } else {
                img.classList.remove("active"); // חוזר להיות כהה כשהתמונה יוצאת מהתצוגה
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // מפעיל את הפונקציה בהתחלה כדי לבדוק תמונות שכבר נראות
});
