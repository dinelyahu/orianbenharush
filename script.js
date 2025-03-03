// משתנים גלובליים
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
let isMagnified = false; // משתנה לבדיקת מצב ההגדלה

// פתיחת ה-Modal
function openModal(image) {
    modal.style.display = 'flex'; // הצגת ה-Modal
    modalImage.src = image.src; // הצגת התמונה

    isMagnified = false; // איפוס מצב ההגדלה
    modalImage.style.transform = 'scale(1)'; // איפוס קנה מידה
}

// סגירת ה-Modal
function closeModal() {
    modal.style.display = 'none'; // הסתרת ה-Modal
    modalImage.style.transform = 'scale(1)'; // איפוס גודל התמונה
    isMagnified = false; // איפוס מצב ההגדלה
}

// טיפול בלחיצה על התמונה - הגדלה והקטנה
modalImage.addEventListener('click', () => {
    isMagnified = !isMagnified;
    modalImage.style.transform = isMagnified ? 'scale(2)' : 'scale(1)';
});

// סגירה של ה-Modal בלחיצה מחוץ לתמונה
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// טיפול בניווט - רק אם הכפתור קיים
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuToggle && mobileNav) { // נוודא שהתפריט בכלל קיים
        menuToggle.addEventListener("click", function(event) {
            event.stopPropagation(); // מונע סגירה מיידית בעת הלחיצה
            mobileNav.classList.toggle("open");
        });

        // סגירה בלחיצה מחוץ לתפריט
        document.addEventListener("click", function(event) {
            if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileNav.classList.remove("open");
            }
        });
    }

    // טיפול בתפריט הנפתח של Bootstrap רק אם האלמנט קיים
    const dropdownElement = document.getElementById('galleryDropdown');
    if (dropdownElement) {
        new bootstrap.Dropdown(dropdownElement);
    }
});
