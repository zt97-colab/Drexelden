document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.team-swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 40, // Space between slides in px

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        initialSlide: 1, 

        slidesPerGroup: 1, 

        centerInsufficientSlides: true, 
    });


});