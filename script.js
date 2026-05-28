let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide () {
    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

function prevSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");

}