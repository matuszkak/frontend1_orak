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

const endValue = 567;
const counter = document.querySelector('.counter');
let alreadyPlayed = false;
let currentValue = 0;

const observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true && alreadyPlayed === false) {
    console.log('element has just become visible on the screen');
    alreadyPlayed = true;
    const timer = setInterval(function () {
      if (currentValue >= endValue) {
        clearInterval(timer);
      }
      counter.innerText = currentValue;
      currentValue = currentValue + 1;
    }, 2) // 2 milliszekundum
  }

});

observer.observe(counter);


