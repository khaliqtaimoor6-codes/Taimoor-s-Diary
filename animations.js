// Interactive Animations for Taimoor's Diary
// Simple scroll reveal animations and interactive effects

document.addEventListener('DOMContentLoaded', function() {
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('p, .story-item, .feedback-section');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // If element is in viewport
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial styling
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // Interactive cursor glow effect on story items
    const storyItems = document.querySelectorAll('.story-item');
    
    storyItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Add subtle glow effect
            item.style.boxShadow = `
                0 0 15px rgba(212, 175, 55, 0.15),
                inset 0 0 10px rgba(212, 175, 55, 0.05),
                ${-x / 10}px ${-y / 10}px 20px rgba(212, 175, 55, 0.1)
            `;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '';
        });
    });
    
    // Add pulsing effect to links on hover
    const links = document.querySelectorAll('.story-title, .back-link');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.animation = 'pulseGlow 0.6s ease-in-out';
        });
    });
    
    // Random subtle color tint on container borders on page load
    const container = document.querySelector('.container');
    if (container) {
        setTimeout(() => {
            container.style.borderColor = 'rgba(212, 175, 55, 0.2)';
        }, 500);
    }
});

// Smooth page transitions
window.addEventListener('beforeunload', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0.8';
    }
});
