(function () {
    const COOKIE_NAME = "theme-preference";
    const STORAGE_KEY = "__md_storage__";

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=.devsense.com; SameSite=Lax";
    }

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

    function setStorageTheme(theme) {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
            data["color-scheme"] = theme;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch { }
    }

    function getStorageTheme() {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
            return data["color-scheme"];
        } catch {
            return null;
        }
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-md-color-scheme", "slate");
            setStorageTheme("slate");
        } else if (theme === "light") {
            document.documentElement.setAttribute("data-md-color-scheme", "default");
            setStorageTheme("default");
        } else {
            document.documentElement.removeAttribute("data-md-color-scheme");
        }
    }

    // Early run
    const cookieTheme = getCookie(COOKIE_NAME);
    if (cookieTheme === "dark" || cookieTheme === "light") {
        applyTheme(cookieTheme);
    }

    // After DOM ready
    document.addEventListener("DOMContentLoaded", function () {
        const storedTheme = getStorageTheme();

        // Sync theme change via MutationObserver
        const observer = new MutationObserver(function () {
            const attr = document.documentElement.getAttribute("data-md-color-scheme");
            if (attr === "slate") {
                setCookie(COOKIE_NAME, "dark", 365);
                setStorageTheme("slate");
            } else if (attr === "default") {
                setCookie(COOKIE_NAME, "light", 365);
                setStorageTheme("default");
            } else {
                setCookie(COOKIE_NAME, "system", 365);
            }
        });

        observer.observe(document.documentElement, { attributes: true });
    });
})();
