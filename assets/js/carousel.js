/* slider con slick */
$(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
    
});

/* slider infinito */

/* const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  effect: "slide",
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullet",
    clickable: true,
  },
}); */

const getConfiguration = (reverse) => {
  return {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 8000,
    autoplay: {
      delay: 0,
      reverseDirection: reverse,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
};

const swiper1 = new Swiper(".swiper-carousel1", getConfiguration(true));
const swiper2 = new Swiper(".swiper-carousel2", getConfiguration(false));
