'use strict'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 30,

    // Стрелки
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Навигация
    navigation: {
        nextEl: '.slide-right',
        prevEl: '.slide-left',
    },
});


