const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
   
    // when window width is >= 480px
    360: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
    
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
     
    }
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.prev',
    prevEl: '.carousel-button.next',
  },
});