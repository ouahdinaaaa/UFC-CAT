// script.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cases = document.querySelectorAll('.case');
    let index = 0;

    function updateCarousel() {
        const caseWidth = cases[0].offsetWidth;
        carousel.style.transform = `translateX(${-index * caseWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (index < cases.length - 1) {
            index++;
        } else {
            index = 0; // Revenir à la première case
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = cases.length - 1; // Aller à la dernière case
        }
        updateCarousel();
    });

    updateCarousel();
});
