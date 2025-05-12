// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply the theme
function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-md-color-scheme", "slate");
    } else if (theme === "light") {
        document.documentElement.setAttribute("data-md-color-scheme", "default");
    } else {
        // Default to system preference
        document.documentElement.removeAttribute("data-md-color-scheme");
    }
}

// On page load
document.addEventListener("DOMContentLoaded", function () {
    var theme = getCookie("theme-preference");
    if (theme) {
        applyTheme(theme);
    }

    // Observe changes to the theme toggle
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === "data-md-color-scheme") {
                var newTheme = document.documentElement.getAttribute("data-md-color-scheme");
                if (newTheme === "slate") {
                    setCookie("theme-preference", "dark", 365);
                } else if (newTheme === "default") {
                    setCookie("theme-preference", "light", 365);
                } else {
                    setCookie("theme-preference", "system", 365);
                }
            }
        });
    });

    observer.observe(document.documentElement, { attributes: true });
});