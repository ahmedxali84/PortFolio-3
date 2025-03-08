// Add interactivity or animations if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a fade-in effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); // Staggered animation
    });
});