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

// טיפול בלחיצה על התמונה
modalImage.addEventListener('click', () => {
    if (!isMagnified) {
        modalImage.style.transform = 'scale(2)'; // הגדלת התמונה
        isMagnified = true; // הגדר למצב מוגדל
    } else {
        modalImage.style.transform = 'scale(1)'; // הקטנת התמונה לגודל רגיל
        isMagnified = false; // הגדר למצב רגיל
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdownTrigger = new bootstrap.Dropdown(document.getElementById('galleryDropdown'));
});