// Table of Contents functionality for Jekyll posts
document.addEventListener('DOMContentLoaded', function() {
    // Only run on post pages - check for required elements
    const tocContainer = document.getElementById('toc');
    const postNavigation = document.getElementById('post-navigation');
    const contentArea = document.querySelector('.verdant-content');
    
    // Exit early if we're not on a post page or missing required elements
    if (!contentArea || !tocContainer || !postNavigation) return;
    
    // Find all headers (h2-h6) in the content area, excluding h1 (post title)
    const allHeaders = document.querySelectorAll('.verdant-content h2, .verdant-content h3, .verdant-content h4, .verdant-content h5, .verdant-content h6');
    
    // Filter out headers with data-toc-skip attribute
    const headers = Array.from(allHeaders).filter(header => !header.hasAttribute('data-toc-skip'));
    
    if (headers.length === 0) {
        postNavigation.style.display = 'none';
        return;
    }
    
    // Create navigation list
    const navList = document.createElement('ul');
    navList.className = 'toc-list';
    
    headers.forEach((header, index) => {
        // Get or create ID for the header
        let headerId = header.id;
        
        // Create navigation item
        const listItem = document.createElement('li');
        listItem.className = `toc-item toc-${header.tagName.toLowerCase()}`;
        
        const link = document.createElement('a');
        link.href = `#${headerId}`;
        link.textContent = header.textContent;
        link.className = 'toc-link';
        
        // Add smooth scroll behavior
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById(headerId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active state
                document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
        
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    
    tocContainer.appendChild(navList);
    
    // Add scroll spy functionality
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY + 100; // Offset for fixed headers
        let activeHeader = null;
        
        headers.forEach(header => {
            if (header.offsetTop <= scrollPosition) {
                activeHeader = header;
            }
        });
        
        // Update active states and nested visibility
        document.querySelectorAll('.toc-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('show-nested');
        });
        
        if (activeHeader) {
            const activeLink = document.querySelector(`a[href="#${activeHeader.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                
                const activeHeaderLevel = parseInt(activeHeader.tagName.substring(1));
                let sectionToShow = activeHeader;
                
                // Find the parent h2 section if we're in a nested heading
                if (activeHeaderLevel > 2) {
                    const headerArray = Array.from(headers);
                    const activeIndex = headerArray.indexOf(activeHeader);
                    
                    for (let i = activeIndex - 1; i >= 0; i--) {
                        const prevHeader = headerArray[i];
                        const prevLevel = parseInt(prevHeader.tagName.substring(1));
                        if (prevLevel === 2) {
                            sectionToShow = prevHeader;
                            break;
                        }
                    }
                    
                    // Highlight the parent h2 as well
                    const parentLink = document.querySelector(`a[href="#${sectionToShow.id}"]`);
                    if (parentLink) {
                        parentLink.classList.add('parent-active');
                    }
                }
                
                // Show all nested items under the current h2 section
                if (sectionToShow.tagName === 'H2') {
                    const headerArray = Array.from(headers);
                    const sectionIndex = headerArray.indexOf(sectionToShow);
                    
                    // Find the next h2 to know where this section ends
                    let nextSectionIndex = headerArray.length;
                    for (let i = sectionIndex + 1; i < headerArray.length; i++) {
                        if (headerArray[i].tagName === 'H2') {
                            nextSectionIndex = i;
                            break;
                        }
                    }
                    
                    // Show all headers in this section (h3, h4, h5, h6)
                    for (let i = sectionIndex + 1; i < nextSectionIndex; i++) {
                        const nestedHeader = headerArray[i];
                        const nestedLink = document.querySelector(`a[href="#${nestedHeader.id}"]`);
                        if (nestedLink) {
                            const nestedItem = nestedLink.closest('.toc-item');
                            nestedItem.classList.add('show-nested');
                        }
                    }
                }
            }
        }
        
        // Remove parent-active class from all links first, then reapply
        document.querySelectorAll('.toc-link').forEach(link => link.classList.remove('parent-active'));
        
        // Reapply parent-active if needed
        if (activeHeader) {
            const activeHeaderLevel = parseInt(activeHeader.tagName.substring(1));
            if (activeHeaderLevel > 2) {
                const headerArray = Array.from(headers);
                const activeIndex = headerArray.indexOf(activeHeader);
                
                for (let i = activeIndex - 1; i >= 0; i--) {
                    const prevHeader = headerArray[i];
                    const prevLevel = parseInt(prevHeader.tagName.substring(1));
                    if (prevLevel === 2) {
                        const parentLink = document.querySelector(`a[href="#${prevHeader.id}"]`);
                        if (parentLink) {
                            parentLink.classList.add('parent-active');
                        }
                        break;
                    }
                }
            }
        }
    }
    
    // Add scroll listener with throttling
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNavItem();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
    
    // Initial active state
    updateActiveNavItem();
});