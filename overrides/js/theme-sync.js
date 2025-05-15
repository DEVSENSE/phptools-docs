(function () {
    const COOKIE_NAME = "theme-preference";
    const STORAGE_KEY = "__md_storage__";

    function setCookie(name, value, days) {
        const expires = days
            ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
            : "";
        document.cookie = `${name}=${value || ""}${expires}; path=/; domain=.devsense.com; SameSite=Lax`;
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        return document.cookie
            .split(";")
            .map(c => c.trim())
            .find(c => c.startsWith(nameEQ))
            ?.substring(nameEQ.length) || null;
    }

    function setStorageTheme(theme) {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
            if (theme) {
                data["color-scheme"] = theme;
            } else {
                delete data["color-scheme"];
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch { }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const body = document.body;

        // Observe changes to the theme attribute
        const observer = new MutationObserver(() => {
            const value = body.getAttribute("data-md-color-media");
            let theme = "system";

            if (value === "(prefers-color-scheme: dark)") theme = "dark";
            else if (value === "(prefers-color-scheme: light)") theme = "light";

            setCookie(COOKIE_NAME, theme, 365);
            setStorageTheme(theme === "dark" ? "slate" : theme === "light" ? "default" : undefined);
        });

        observer.observe(body, { attributes: true });

        // Apply stored theme preference
        const cookieTheme = getCookie(COOKIE_NAME);
        const selector =
            cookieTheme === "dark"
                ? `input[name="__palette"][data-md-color-scheme="slate"]`
                : cookieTheme === "light"
                    ? `input[name="__palette"][data-md-color-scheme="default"]`
                    : `input[name="__palette"][data-md-color-media="(prefers-color-scheme)"]`;

        const input = document.querySelector(selector);
        if (input) {
            input.checked = true;
            input.dispatchEvent(new Event("change", { bubbles: true }));
        }
    });
})();
