const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
const totalSlides = slides.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function moveToNextSlide() {
    slides[currentSlide].style.transform = `translateX(-${100 * (currentSlide + 1)}%)`;
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.transform = `translateX(0)`;
}

function moveToPrevSlide() {
    slides[currentSlide].style.transform = `translateX(${100 * (currentSlide - 1)}%)`;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.transform = `translateX(0)`;
}
