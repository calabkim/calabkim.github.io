// Toggle between dark mode and light mode
function toggleTheme() {
    var body = document.body;
    var toggleButton = document.querySelector('.toggle-switch');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the back-to-top button is clicked
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize AOS (Animate On Scroll)
AOS.init();
// Function to create and animate stars
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.opacity = Math.random();
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    document.querySelector('.stars').appendChild(star);

    star.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { transform: 'translateY(100vh)', opacity: 1 }
    ], {
        duration: parseInt(star.style.animationDuration) * 1000,
        easing: 'linear'
    });

    setTimeout(() => {
        star.remove();
    }, parseInt(star.style.animationDuration) * 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            createStar();
        }
    }, 50);
});
