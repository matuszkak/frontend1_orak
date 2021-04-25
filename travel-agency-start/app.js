const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 3000,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000,
  },

});

var scroll = new SmoothScroll('a[href*="#"]');

flatpickr('.datepicker', {
  minDate: "today"
});

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 500) {
    document.querySelector('header').classList.add('darken');
  } else {
    document.querySelector('header').classList.remove('darken');
  }
});