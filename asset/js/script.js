// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover effect on buttons and links
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = '#FF6B6B';
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = '#6C63FF';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact button functionality
document.getElementById('contactButton').addEventListener('click', function() {
    // Create a modal or form for contact
    const email = 'ronel@example.com';
    const subject = 'Portfolio Inquiry';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
});

// Typing animation
const typingWords = document.querySelector('.typing-words');
const roles = [
   'System Analyst',
   'Programmer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingWords.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 100;
    } else {
        typingWords.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 200;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before starting new word
    }

    setTimeout(typeEffect, typingDelay);
}

// Start typing animation only once when the page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// ScrollReveal Animations
const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: false  // Changed to false to prevent repeat animations
});

// Hero Section Animations
sr.reveal('.hero-subtitle', { 
    origin: 'left'
});
sr.reveal('.glitch', { 
    origin: 'left',
    delay: 500
});
sr.reveal('.role-text', { 
    origin: 'left',
    delay: 600
});
sr.reveal('.hero-description', { 
    origin: 'left',
    delay: 700
});
sr.reveal('.cta-buttons', { 
    origin: 'left',
    delay: 800
});
sr.reveal('.social-links', { 
    origin: 'left',
    delay: 900
});
sr.reveal('.hero-image', { 
    origin: 'right',
    delay: 600
});

// About Section Animations
sr.reveal('.section-subtitle', { 
    origin: 'top'
});
sr.reveal('.section-title', { 
    origin: 'top',
    delay: 500
});
sr.reveal('.about-description', { 
    origin: 'bottom',
    delay: 600
});
sr.reveal('.detail-item', { 
    origin: 'bottom',
    interval: 200 // Adds delay between each item
});
sr.reveal('.about-cta', { 
    origin: 'bottom',
    delay: 800
});
sr.reveal('.image-stack', { 
    origin: 'right',
    delay: 600
});

// Experience Section Animations
sr.reveal('.experience-card', {
    origin: 'bottom',
    interval: 200,
    distance: '40px'
});

// Add refresh animation to cards
const cards = document.querySelectorAll('.experience-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add loading animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    sr.reveal(item, {
        origin: 'left',
        delay: 200 * index,
        distance: '20px'
    });
});

// Smooth section transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add entrance animation to the target section
            targetSection.style.animation = 'sectionFadeIn 1s ease forwards';
        }
    });
});

// Add CSS animation for section entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes sectionFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for continuous animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Add specific animations based on section
            if (entry.target.classList.contains('experiences')) {
                const cards = entry.target.querySelectorAll('.experience-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
    
    // Add initial styles for animation
    if (section.classList.contains('experiences')) {
        const cards = section.querySelectorAll('.experience-card');
        cards.forEach(card => {
            card.style.transform = 'translateY(40px)';
            card.style.opacity = '0';
            card.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        });
    }
});

// Add this to your existing ScrollReveal animations
sr.reveal('.skill-category', {
    origin: 'bottom',
    interval: 200
});

// Add this new code for progress bar animations
function animateProgressBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const progress = item.querySelector('.progress');
        const percentage = item.dataset.progress;
        
        progress.style.width = percentage + '%';
    });
}

// Create an intersection observer for the skills section
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Add these to your existing ScrollReveal animations
sr.reveal('.contact-card', {
    origin: 'bottom',
    interval: 200
});

sr.reveal('.contact-form', {
    origin: 'right',
    delay: 400
});

// Add form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state to button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message (you can replace this with your preferred notification method)
            alert('Message sent successfully!');
        }, 2000);
    });
}

// Add these to your existing ScrollReveal animations
sr.reveal('.project-card', {
    origin: 'bottom',
    interval: 200,
    distance: '40px'
});

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add this to your existing JavaScript
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
    }
});

// Load portfolio data when the page loads
window.addEventListener('load', loadPortfolioData);

// Add this function before the event listener at the bottom
async function loadPortfolioData() {
    try {
        const response = await fetch('/portfolio-data.json');
        const data = await response.json();
        // Handle the portfolio data here
        console.log('Portfolio data loaded successfully');
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}