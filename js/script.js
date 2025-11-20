document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // 1) MENU TOGGLE – MOBILE
    // ============================
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            mobileNav.classList.toggle("open");
        });
    }

    document.querySelectorAll("#mobile-nav a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
        });
    });


    // ============================
    // 3) WEDDING MIN DATE
    // ============================
    const weddingDateInput = document.getElementById("wedding-date");
    if (weddingDateInput) {
        weddingDateInput.min = new Date().toISOString().split("T")[0];
    }


    // ============================
    // 4) NAVBAR SCROLL EFFECT
    // ============================
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });


    // ============================
    // 5) PRELOADER
    // ============================
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("preloader-hidden");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    }, 1500);


    // ============================
    // 6) WHATSAPP FORM SUBMIT
    // ============================
    const form = document.getElementById("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let weddingDate = document.getElementById("wedding-date").value;

            let whatsappMessage =
                `פנייה דרך orianbenharush.com\n` +
                `שלום, אני *${name}*!\n` +
                `*טלפון:* ${phone}\n` +
                `*אימייל:* ${email}\n` +
                `*תאריך חתונה:* ${weddingDate}\n` +
                `*הודעה:* ${message}`;

            let url =
                `https://wa.me/972528782204?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(url, "_blank");
        });
    }


    // ============================
    // 7) BACKGROUND SLIDERS
    // ============================
    function slider(images, layers, interval = 2000) {
        let index = 0;

        // preload
        images.forEach(src => { const img = new Image(); img.src = src; });

        layers[0].style.backgroundImage = `url('${images[0]}')`;
        layers[0].classList.add("active");

        setInterval(() => {
            const current = layers[index % 2];
            const next = layers[(index + 1) % 2];

            index = (index + 1) % images.length;

            next.style.backgroundImage = `url('${images[index]}')`;
            next.classList.add("active");
            current.classList.remove("active");

        }, interval);
    }

    // Bridal slider
    const bridalLayers = document.querySelectorAll(".bridal-bg-layer");
    if (bridalLayers.length > 0) {
        slider([
            "/images/bridal/orea/img7.webp",
            "/images/bridal/orea/img9.webp",
            "/images/bridal/orea/img10.webp",
            "/images/bridal/orea/img16.webp"
        ], bridalLayers);
    }

    // Evening slider
    const eveningLayers = document.querySelectorAll(".evening-bg-layer");
    if (eveningLayers.length > 0) {
        slider([
            "/images/evening/index-evening/img1.webp",
            "/images/evening/index-evening/img2.webp",
            "/images/evening/index-evening/img3.webp",
            "/images/evening/index-evening/img4.webp"
        ], eveningLayers);
    }

});

// ============================
// WHATSAPP FORM SUBMIT (INDEX)
// ============================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    if (!form) return; // אם אין טופס – לא עושה כלום

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // קריאת שדות
        const name = document.getElementById("name")?.value || "";
        const phone = document.getElementById("phone")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const message = document.getElementById("message")?.value || "";
        const weddingDate = document.getElementById("wedding-date")?.value || "";

        // הודעה לוואטסאפ
        const whatsappMessage =
            `פנייה דרך orianbenharush.com\n` +
            `שלום, אני *${name}*!\n` +
            `*טלפון:* ${phone}\n` +
            `*אימייל:* ${email}\n` +
            `*תאריך חתונה:* ${weddingDate}\n` +
            `*הודעה:* ${message}`;

        const whatsappNumber = "972528782204";

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");
    });
});
