// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const navbar = document.getElementById('navbar');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    navbar.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    navbar.classList.remove('light-mode');
    themeToggle.textContent = '☀️';
} else {
    navbar.classList.add('light-mode');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scrollProgress').style.width = scrollPercent + '%';

    // Show/Hide scroll top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTop > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }

    // Animate counters
    if (scrollTop > 800) {
        if (document.getElementById('projectCount').textContent === '250') return;
        document.getElementById('projectCount').textContent = '250';
        document.getElementById('clientCount').textContent = '180';
        document.getElementById('teamCount').textContent = '45';
    }
});

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobileMenu').classList.remove('active');
    }
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Newsletter Form Submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
}

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
