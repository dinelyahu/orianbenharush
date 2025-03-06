document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-grid img");

    function checkVisibility() {
        let closestImage = null;
        let minDistance = Infinity;

        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < minDistance) {
                minDistance = distance;
                closestImage = img;
            }
        });

        // מסיר את האפקט מכל התמונות ומוסיף רק לזו שבמרכז המסך
        images.forEach(img => img.classList.remove("active"));
        if (closestImage) {
            closestImage.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // בדיקה ראשונית כשהדף נטען
});

