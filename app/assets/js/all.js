var swiperClass = new Swiper(".mySwiper-class", {
  spaceBetween: 16,
  centeredSlides: true,
  // slidesPerView: 10,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 9
    }
  },
});
var swiperFeedback = new Swiper('.mySwiper-feedback', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiperProject = new Swiper(".mySwiper-project", {
  spaceBetween: 16,
  speed: 1500,
  breakpoints: {
    768: {
      slidesPerView: 3,
      autoplay: true,
      centeredSlides: true,
      loop: true
    },
    992: {
      autoplay: false,
      slidesPerView: 6
    }
  },
});
AOS.init();