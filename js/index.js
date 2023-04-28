
var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    
     
    600: {
      slidesPerView: 1   
      
    },
   
    800: {
      slidesPerView: 2      
    },

    900: {
      slidesPerView: 3
    }
  },
  
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  focusableElements: 'button',
  watchSlidesProgress: true
});

