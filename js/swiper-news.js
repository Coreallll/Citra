const newsSwiper = new Swiper('.news__slider', {
  slidesPerView: 4,
  direction: 'horizontal',
  spaceBetween: 30,
  allowTouchMove: true,

  // Navigation arrows
  navigation: {
    nextEl: '.news-next',
    prevEl: '.news-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    501: {
      slidesPerView: 3
    },
    769: {
      slidesPerView: 4
    }
  }
});