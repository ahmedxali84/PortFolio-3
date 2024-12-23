// Smooth Scroll for Navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations (Fade-in effects)
const elementsToShow = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    elementsToShow.forEach(element => {
        if (scrollPosition > element.offsetTop - window.innerHeight + 100) {
            element.classList.add('fade-visible');
        }
    });
});

// Add fade-in class to the about section
document.querySelector('.about-title').classList.add('fade-in');
