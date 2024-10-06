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

// Click animation effect to explore buttons
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

document.getElementById('btn-toi700d').addEventListener('click', () => {
    fetch('/run-script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planet: 'TOI-700d' })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Handle success response
        alert('Exploring TOI-700d!');
    })
    .catch(error => {
        console.error('Error:', error); // Handle error response
    });
});

document.getElementById('btn-ross128').addEventListener('click', () => {
    fetch('/run-script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planet: 'Ross 128' })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Exploring Ross 128!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('btn-trappist1e').addEventListener('click', () => {
    fetch('/run-script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planet: 'TRAPPIST-1e' })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Exploring TRAPPIST-1e!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});