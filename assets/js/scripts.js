function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    console.log(currentTheme);

    var newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    sessionStorage.setItem("theme", newTheme);
}
