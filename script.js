let currentSlide = 0;
const slides = document.querySelectorAll('.portfolio-item');
const totalSlides = slides.length;

function showSlide(index) {
    const newSlideIndex = index < 0 ? totalSlides - 1 : index % totalSlides;
    const newTransformValue = `translateX(-${newSlideIndex * 100}%)`;
    document.getElementById('carousel').style.transform = newTransformValue;
    currentSlide = newSlideIndex;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}