
var swiperServices = new Swiper(".mySwiperservices", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


var swiperTeam = new Swiper(".mySwiperteam", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        560: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});


var swiperTestimonials = new Swiper(".mySwipertesti", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


document.querySelector('.subscribe-box').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ''; 
    } else {
        alert('Please enter a valid email address.');
    }
});


function initAutocomplete() {
    var input = document.getElementById('location-search');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(['place_id', 'geometry', 'name']);
    
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        
        console.log('Selected place:', place);
    });
}


window.onload = function() {
    initAutocomplete();
};


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].style.transform = "rotateY(90deg)"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } 
    slides[slideIndex - 1].style.display = "block"; 
    slides[slideIndex - 1].style.transform = "rotateY(0deg)"; 
    setTimeout(showSlides, 3000); 
}