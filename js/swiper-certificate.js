const certifSwiper = new Swiper('.cerficate__slider', {
  slidesPerView: 3,
  direction: 'horizontal',
  spaceBetween: 30,
  allowTouchMove: true,

  // Navigation arrows
  navigation: {
    nextEl: '.certif-next',
    prevEl: '.certif-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    501: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 3
    }
  }
});