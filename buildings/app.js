
console.log('hello');

// amikor klikk a menu gombra
document.querySelector('.menu-button').addEventListener('click', function () {
  console.log('clicked!');
  document.querySelector('body').classList.add('js-menu-open');
  document.querySelector('.close-menu').classList.remove('js-hidden');
  document.querySelector('header .main-menu').classList.add('js-show');
});

// amikor klikk a menu gombra
document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('body').classList.remove('js-menu-open');
  document.querySelector('.close-menu').classList.add('js-hidden');
  document.querySelector('header .main-menu').classList.remove('js-show');
});

// amikor a user átmeretezi a bongeszo ablakot
window.addEventListener('resize', function () {
  // megvizsgáljuk h nyitva van-e a menu
  if (document.querySelector('body').classList.contains('js-menu-open')) {
    // nyivta a menu
    if (window.innerWidth >= 650) {
      // habongeszo szelessege 60 fole megy akkor js automatikusan megnyomja a close gombot
      document.querySelector('.close-menu').click();
    }
  }
});

