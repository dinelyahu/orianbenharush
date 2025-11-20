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
    // וידוא שתאריך החתונה הוא בעתיד
    const weddingDateInput = document.getElementById("wedding-date");
    weddingDateInput.min = new Date().toISOString().split("T")[0];
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("preloader").classList.add("preloader-hidden");
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
        }, 1000); // נוודא שהוא מוסר מה-DOM אחרי האנימציה
    }, 600); // מסך הפתיחה ייעלם אחרי 2 שניות
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // מונע משליחה רגילה של הטופס

        // קבלת ערכים מהשדות
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let weddingDate = document.getElementById("wedding-date").value;

        // יצירת הודעת ה-WhatsApp עם קידוד תווים נכון
        let whatsappMessage =
            `פנייה דרך orianbenharush.com\n` +
            `שלום, אני *${name}*!\n` +
            `📞 *טלפון:* ${phone}\n` +
            `📧 *אימייל:* ${email}\n` +
            `📅 *תאריך חתונה:* ${weddingDate}\n` +
            `💬 *הודעה:* ${message}`;

        // המספר שאליו תישלח ההודעה (וודא שהקידומת נכונה)
        let whatsappNumber = "972528782204"; // עדכן למספר הרלוונטי

        // יצירת הקישור ל-WhatsApp עם קידוד תקין
        let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // פתיחת WhatsApp בחלון חדש עם ההודעה
        window.open(whatsappURL, "_blank");
    });
});
