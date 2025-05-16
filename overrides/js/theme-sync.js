(function () {
    const COOKIE_NAME = "theme-preference";
    const COOKIE_DOMAIN = ".devsense.com";
    const COOKIE_EXPIRE_DAYS = 365;

    // Set a cookie with domain and expiration
    function setCookie(name, value, days) {
        const expires = days
            ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
            : "";
        document.cookie = `${name}=${value || ""}${expires}; path=/; domain=${COOKIE_DOMAIN}; SameSite=Lax`;
    }

    // Get a cookie value by name
    function getCookie(name) {
        const nameEQ = name + "=";
        return document.cookie
            .split(";")
            .map(c => c.trim())
            .find(c => c.startsWith(nameEQ))
            ?.substring(nameEQ.length) || null;
    }

    // Set localStorage item "/.__palette" according to the theme scheme ("default" or "slate")
    function setPaletteScheme(schemeName) {
        const palette = {
            index: 0,
            color: {
                media: "(prefers-color-scheme)",
                scheme: schemeName,
                primary: "black",
                accent: "custom"
            }
        };
        localStorage.setItem("/.__palette", JSON.stringify(palette));
    }

    // When the body's data-md-color-media attribute changes, sync the cookie and localStorage
    function syncThemeFromBodyAttribute() {
        const body = document.body;
        const value = body.getAttribute("data-md-color-media");

        let theme = "system";

        if (value === "(prefers-color-scheme: dark)") theme = "dark";
        else if (value === "(prefers-color-scheme: light)") theme = "light";

        setCookie(COOKIE_NAME, theme, COOKIE_EXPIRE_DAYS);

        // Update localStorage theme scheme based on the detected theme
        if (theme === "dark") setPaletteScheme("slate");
        else if (theme === "light") setPaletteScheme("default");
        else localStorage.removeItem("/.__palette"); // system = no saved palette
    }

    // Apply the saved theme from cookie by selecting corresponding radio input and triggering change event
    function applyThemeFromCookie() {
        const theme = getCookie(COOKIE_NAME);

        const scheme = theme === "dark" ? "slate"
            : theme === "light" ? "default"
                : null;

        let selector;

        if (scheme) {
            selector = `input[name="__palette"][data-md-color-scheme="${scheme}"]`;
        } else {
            // fallback to system preference radio button
            selector = `input[name="__palette"][data-md-color-media="(prefers-color-scheme)"]`;
        }

        const input = document.querySelector(selector);
        if (input) {
            input.checked = true;
            input.dispatchEvent(new Event("change", { bubbles: true }));
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        // Observe changes on the body attribute to keep cookie/localStorage in sync
        const observer = new MutationObserver(syncThemeFromBodyAttribute);
        observer.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-media"] });

        // Apply the stored theme on page load
        applyThemeFromCookie();
    });
})();
