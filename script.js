// SEO Morocco Network - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    console.log('SEO Morocco Network initialized');
    
    // Update network links based on current platform
    updateNetworkLinks();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add click tracking for analytics
    addClickTracking();
    
    // Add loading animations
    addLoadingAnimations();
});

function updateNetworkLinks() {
    const currentHost = window.location.hostname;
    const currentUrl = window.location.href;
    
    // Define all platform URLs
    const platforms = {
        'netlify': 'https://seo-morocco.netlify.app',
        'firebase': 'https://seo-morocco.web.app',
        'github': 'https://bou3a0.github.io/seo-morocco/',
        'vercel': 'https://seo-morocco.vercel.app', // Will be updated when deployed
        'gitlab': 'https://yassir-bouabdalli-group.gitlab.io/seo-morocco/', // Will be updated
        'render': 'https://seo-morocco.onrender.com' // Will be updated when deployed
    };
    
    // Update placeholder links
    const vercelLink = document.getElementById('vercel-link');
    const gitlabLink = document.getElementById('gitlab-link');
    const renderLink = document.getElementById('render-link');
    
    if (vercelLink) vercelLink.href = platforms.vercel;
    if (gitlabLink) gitlabLink.href = platforms.gitlab;
    if (renderLink) renderLink.href = platforms.render;
    
    // Hide current platform link or mark as active
    const networkLinks = document.querySelectorAll('.network-links a');
    networkLinks.forEach(link => {
        if (link.href === currentUrl || link.href.includes(currentHost)) {
            link.style.opacity = '0.6';
            link.innerHTML += ' (Current)';
            link.style.pointerEvents = 'none';
        }
    });
}

function addSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addClickTracking() {
    // Track clicks on important elements for analytics
    const trackableElements = [
        '.btn-primary',
        '.btn-secondary',
        '.cta-button',
        '.network-links a',
        '.contact-item a'
    ];
    
    trackableElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('click', function() {
                const elementText = this.textContent.trim();
                const elementHref = this.href || 'no-href';
                
                // Log for analytics (can be replaced with actual analytics code)
                console.log('Click tracked:', {
                    element: elementText,
                    href: elementHref,
                    timestamp: new Date().toISOString(),
                    platform: window.location.hostname
                });
                
                // You can add Google Analytics, Facebook Pixel, or other tracking here
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'engagement',
                        'event_label': elementText,
                        'value': 1
                    });
                }
            });
        });
    });
}

function addLoadingAnimations() {
    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add contact form functionality (if needed)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your server
            console.log('Contact form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

// Initialize contact form if it exists
initContactForm();

// Add mobile menu functionality (if needed)
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
initMobileMenu();

// Add scroll-to-top functionality
function addScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #3498db, #2980b9);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'translateY(0)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'translateY(10px)';
        }
    });
    
    // Scroll to top functionality
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
addScrollToTop();