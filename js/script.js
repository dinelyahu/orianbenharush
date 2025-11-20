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
    // 2) ACCESSIBILITY MENU
    // ============================
    const accessibilityButton = document.getElementById("accessibility-button");
    const accessibilityMenu = document.getElementById("accessibility-menu");

    let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;
    let highContrast = localStorage.getItem("highContrast") === "true";
    let monochromeMode = localStorage.getItem("monochromeMode") === "true";
    let boldText = localStorage.getItem("boldText") === "true";
    let highlightLinks = localStorage.getItem("highlightLinks") === "true";

    function applyAccessibilitySettings() {

        document.body.style.fontSize = fontSize + "px";

        document.body.classList.toggle("high-contrast", highContrast);
        document.body.classList.toggle("monochrome-mode", monochromeMode);
        document.body.classList.toggle("bold-text", boldText);

        document.querySelectorAll("a").forEach(link => {
            link.style.textDecoration = highlightLinks ? "underline" : "none";
        });
    }

    applyAccessibilitySettings();

    accessibilityButton.addEventListener("click", (event) => {
        event.stopPropagation();
        accessibilityMenu.style.display =
            accessibilityMenu.style.display === "flex" ? "none" : "flex";
    });

    // Disable closing when clicking language buttons (lang.js owns them)
    document.addEventListener("click", (event) => {
        if (!accessibilityMenu.contains(event.target) &&
            event.target !== accessibilityButton) {
            accessibilityMenu.style.display = "none";
        }
    });


    // ACCESSIBLITY FUNCTIONS
    window.increaseFontSize = () => {
        fontSize += 2;
        localStorage.setItem("fontSize", fontSize);
        applyAccessibilitySettings();
    };

    window.decreaseFontSize = () => {
        if (fontSize > 10) {
            fontSize -= 2;
            localStorage.setItem("fontSize", fontSize);
            applyAccessibilitySettings();
        }
    };

    window.toggleHighContrast = () => {
        highContrast = !highContrast;
        localStorage.setItem("highContrast", highContrast);
        applyAccessibilitySettings();
    };

    window.toggleMonochrome = () => {
        monochromeMode = !monochromeMode;
        localStorage.setItem("monochromeMode", monochromeMode);
        applyAccessibilitySettings();
    };

    window.toggleBoldText = () => {
        boldText = !boldText;
        localStorage.setItem("boldText", boldText);
        applyAccessibilitySettings();
    };

    window.toggleLinksHighlight = () => {
        highlightLinks = !highlightLinks;
        localStorage.setItem("highlightLinks", highlightLinks);
        applyAccessibilitySettings();
    };

    window.disableAnimations = () => {
        document.body.classList.toggle("disable-animations");
    };

    window.resetAccessibility = () => {
        localStorage.clear();
        fontSize = 16;
        highContrast = false;
        monochromeMode = false;
        boldText = false;
        highlightLinks = false;

        applyAccessibilitySettings();
    };


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
