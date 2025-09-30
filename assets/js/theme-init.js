(function() {
    // Check sessionStorage for saved theme
    var savedTheme = sessionStorage.getItem("theme");

    if (!savedTheme) {
      // No theme saved yet, fall back to system preference
      savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    // Apply theme immediately
    document.documentElement.setAttribute("data-theme", savedTheme);
})();