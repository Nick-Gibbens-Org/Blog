function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme");

    var newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    sessionStorage.setItem("theme", newTheme);
}

function toggleSidebar() {
    var sidebar = document.getElementById('verdant-sidebar');
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('mobile-active');
    burgerMenu.classList.toggle('active');
    
    if (sidebar.classList.contains('mobile-active')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Initialize burger menu functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('sidebar-overlay');
    
    // Toggle sidebar when burger menu is clicked
    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleSidebar);
    }
    
    // Close sidebar when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', function() {
            var sidebar = document.getElementById('verdant-sidebar');
            if (sidebar.classList.contains('mobile-active')) {
                toggleSidebar();
            }
        });
    }
    
    // Close sidebar when clicking on sidebar links (for mobile navigation)
    var sidebarLinks = document.querySelectorAll('#verdant-sidebar .nav-link');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Only close on mobile (when burger menu is visible)
            if (window.innerWidth <= 992) {
                var sidebar = document.getElementById('verdant-sidebar');
                if (sidebar.classList.contains('mobile-active')) {
                    toggleSidebar();
                }
            }
        });
    });
});
