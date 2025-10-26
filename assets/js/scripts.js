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
    
    sidebar.classList.toggle('sidebar-hidden');
    burgerMenu.classList.toggle('active');
    
    if (sidebar.classList.contains('sidebar-hidden')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Initialize burger menu functionality when DOM is loaded
// And Scroll-to-top functionality
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
            if (sidebar.classList.contains('sidebar-hidden')) {
                toggleSidebar();
            }
        });
    }
    
    // Close sidebar when clicking on sidebar links (for small screen navigation)
    var sidebarLinks = document.querySelectorAll('#verdant-sidebar .nav-link');
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Only close on small screens (when burger menu is visible)
            if (window.innerWidth <= 992) {
                var sidebar = document.getElementById('verdant-sidebar');
                if (sidebar.classList.contains('sidebar-hidden')) {
                    toggleSidebar();
                }
            }
        });
    });

    // Initialize scroll-to-top functionality
    var scrollTopButton = document.getElementById("scroll-to-top");
    
    if (scrollTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPosition > 200) {
                scrollTopButton.style.display = "block";
            } else {
                scrollTopButton.style.display = "none";
            }
        });
        
        // Handle click to scroll to top
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


