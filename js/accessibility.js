document.addEventListener("DOMContentLoaded", () => {

    // מזהה אלמנטים מה-HTML
    const accessibilityButton = document.getElementById("accessibility-button");
    const accessibilityMenu = document.getElementById("accessibility-menu");

    // מצב נגישות מה־localStorage
    let fontSize = parseInt(localStorage.getItem("fontSize")) || 16;
    let highContrast = localStorage.getItem("highContrast") === "true";
    let monochromeMode = localStorage.getItem("monochromeMode") === "true";
    let boldText = localStorage.getItem("boldText") === "true";
    let highlightLinks = localStorage.getItem("highlightLinks") === "true";
    let disableAnim = localStorage.getItem("disableAnim") === "true";

    // החלת הגדרות נגישות
    function applyAccessibilitySettings() {
        // הגדלת פונט לכל הטקסטים באתר
        document.querySelectorAll("body, body *:not(script):not(style)").forEach(el => {
            el.style.fontSize = fontSize + "px";
        });

        document.body.classList.toggle("high-contrast", highContrast);
        document.body.classList.toggle("monochrome-mode", monochromeMode);
        document.body.classList.toggle("bold-text", boldText);
        document.body.classList.toggle("disable-animations", disableAnim);

        // קישורים
        document.querySelectorAll("a").forEach(link => {
            link.style.textDecoration = highlightLinks ? "underline" : "none";
        });
}

    applyAccessibilitySettings();


    // פתיחה/סגירת תפריט נגישות
    if (accessibilityButton) {
        accessibilityButton.addEventListener("click", (e) => {
            e.stopPropagation();
            accessibilityMenu.style.display =
                accessibilityMenu.style.display === "flex" ? "none" : "flex";
        });
    }

    document.addEventListener("click", (e) => {
        if (!accessibilityMenu.contains(e.target) &&
            e.target !== accessibilityButton) {
            accessibilityMenu.style.display = "none";
        }
    });


    // פונקציות גלובליות — מותאם ל-HTML שלך
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
        disableAnim = !disableAnim;
        localStorage.setItem("disableAnim", disableAnim);
        applyAccessibilitySettings();
    };

    window.resetAccessibility = () => {
        localStorage.removeItem("fontSize");
        localStorage.removeItem("highContrast");
        localStorage.removeItem("monochromeMode");
        localStorage.removeItem("boldText");
        localStorage.removeItem("highlightLinks");
        localStorage.removeItem("disableAnim");

        fontSize = 16;
        highContrast = false;
        monochromeMode = false;
        boldText = false;
        highlightLinks = false;
        disableAnim = false;

        applyAccessibilitySettings();
    };

});
