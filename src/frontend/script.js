// DOM Content Loaded event to trigger fade-in effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const exploreSection = document.querySelector('.explore-section');
    const aboutSection = document.querySelector('.about-section');
    const windowHeight = window.innerHeight;

    // Check if sections are in view and add the fade-in effect
    if (exploreSection.getBoundingClientRect().top < windowHeight - 100) {
        exploreSection.classList.add('visible');
    }
    if (aboutSection.getBoundingClientRect().top < windowHeight - 100) {
        aboutSection.classList.add('visible');
    }

    // Smooth scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button Click Animation and Action for Exoplanet Exploration
    const buttons = document.querySelectorAll('.explore-extra-buttons a');
    const loadingSpinner = document.getElementById('loading-spinner');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const planetName = this.innerText;

            loadingSpinner.style.display = 'block';

            // Define the image path based on the planet name
            let imagePath;
            switch (planetName) {
                case 'TOI-700d':
                    imagePath = "from_earth.jpg";
                    break;
                case 'Ross 128':
                    //imagePath
                    break;
                case 'TRAPPIST-1e':
                    //imagePath
                    break;
                default:
                    //imagePath
            }

            setTimeout(() => {
                loadingSpinner.style.display = 'none';
                alert(`Now exploring the exoplanet: ${planetName}`);

                // Call show_image function to display the selected image
                show_image(imagePath, 276, 110);
            }, 1500);  // 1.5 seconds loading delay

            // Add clicked class for button animation
            this.classList.add('clicked');

            // Remove the 'clicked' class after the animation
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 150);  // 0.15s delay for click effect
        });
    });

    // Function to show image on the page
    function show_image(imagePath, width, height) {
        // Create a new image element
        const img = document.createElement('img');
        img.src = imagePath;
        img.width = width;
        img.height = height;
        img.alt = `Image of ${imagePath.split('/').pop()}`; // Set alt text for the image

        // Append the image to a specific container, e.g., a div with id 'image-container'
        const imageContainer = document.getElementById('image-container');

        // Clear previous images
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img); // Append the new image
    }

    // Scroll event to handle when sections come into view (fade-in animation)
    window.addEventListener('scroll', () => {
        const exploreSection = document.querySelector('.explore-section');
        const aboutSection = document.querySelector('.about-section');

        if (exploreSection.getBoundingClientRect().top < window.innerHeight - 100) {
            exploreSection.classList.add('visible');
        }
        if (aboutSection.getBoundingClientRect().top < window.innerHeight - 100) {
            aboutSection.classList.add('visible');
        }
    });
});
