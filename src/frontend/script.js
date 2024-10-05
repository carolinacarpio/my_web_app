// Smooth scrolling when clicking buttons
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Simple fade-in animation when clicking into the "explore" and "about" sections
window.addEventListener('scroll', () => {
    const exploreSection = document.querySelector('.explore-section');
    const aboutSection = document.querySelector('.about-section');
    const windowHeight = window.innerHeight;
    const explorePosition = exploreSection.getBoundingClientRect().top;
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    if (explorePosition < windowHeight - 100) {
        exploreSection.classList.add('visible');
    }
    if (aboutPosition < windowHeight - 100) {
        aboutSection.classList.add('visible');
    }
});

// Add click animation effect to explore buttons
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('clicked');
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('clicked');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('clicked');
    });
});
