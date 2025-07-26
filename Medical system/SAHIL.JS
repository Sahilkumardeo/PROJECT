// JavaScript for Alert Button
function showAlert() {
    alert("Welcome to HealthCare! How can we assist you today?");
}

// JavaScript for Testimonial Carousel
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Loop back to start/end
    showSlide(currentSlide);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-card');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Initial display of first testimonial
});
function Showappointment(){
    alert("Your appointment is booked!")
}
function Showsubmit(){
    alert("Thank you for contact to us!");
}