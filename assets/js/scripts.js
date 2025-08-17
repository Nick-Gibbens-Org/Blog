function toggleTheme() {
    var currentTheme = document.body.getAttribute("data-theme");
    console.log(currentTheme);

    if (currentTheme === "dark")
        document.body.setAttribute("data-theme", "light");
    else
        document.body.setAttribute("data-theme", "dark");
}
