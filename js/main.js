// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

// Mobile Menu Toggle
if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Navbar scroll effect
/*let lastScroll = 0;
const navbarHeight = navbar.offsetHeight;

const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class based on scroll position
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
        // Scrolling down
        navbar.style.transform = `translateY(-${navbarHeight}px)`;
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
};*/

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Smooth scroll to target
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for sections
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

// Initial check
fadeInOnScroll();

// Event Listeners
window.addEventListener('scroll', () => {
    //handleScroll();
    fadeInOnScroll();
});

// Add animation class to hero content when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navbar
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    }
    
    // Hero content animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Simple form submission handling (you can replace this with your actual form handling)
/*const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}*/
