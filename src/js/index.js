
//MENU MOBILE
var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var navItem = document.querySelectorAll('.nav__item');


navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {

  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');

    navItem.forEach(function (item, i) {

      item.addEventListener("click", function (event) {
        navMain.classList.add('nav--closed');
      })
    })
    navMain.style.backgroundColor = "rgba(16,94,155, 1)";
  } else {
    navMain.classList.add('nav--closed');
    if (window.pageYOffset < 40)
      navMain.style.backgroundColor = "rgba(16,94,155, 0)";
  };
});


window.addEventListener("scroll", changeOpacityMenu);

function changeOpacityMenu() {

  if (window.innerWidth > 768) {
    if (window.pageYOffset > 80) {
      navMain.style.backgroundColor = "rgba(16,94,155, 1)";
    } else {
      navMain.style.backgroundColor = "rgba(16,94,155, 0)";
    };
  } else {
    if (window.pageYOffset > 40) {
      navMain.style.backgroundColor = "rgba(16,94,155, 1)";
    } else {
      if (navMain.classList.contains('nav--closed')) {
        navMain.style.backgroundColor = "rgba(16,94,155, 0)";
      }
    };
  };
};



const hero = new Swiper(".header__slider", {
  loop: true,
  effect: 'fade',
  speed: 1000,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 5000
  },
  on: {
    slideChange() {
      // $heroCount.html(this.realIndex + 1);
    }
  }
});

const news = new Swiper(".news__slider", {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpointsInverse: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    540: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    840: {
      slidesPerView: 3.5,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});