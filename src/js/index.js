AOS.init({
  once: true,
  delay: 50,
  duration: 700
});


const hero = new Swiper(".header__slider", {
  loop: true,
  effect: 'fade',
  speed: 800,
  // slidesPerView: 'auto',
  // loopedSlides: 4,
  // pagination: {
  //   el: ".swiper-pagination"
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2000
  },
  // on: {
  //   updateProgress () 
  // }
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




let y = 0;
let oldY = 0;
const nav = document.querySelector(".nav");
window.addEventListener("scroll", setNavStyle);

function setNavStyle() {
  y = window.pageYOffset;

  if (nav.classList.contains("scrolled")) {
    if (y > 90 && y < oldY) {
      nav.classList.remove("hidden");
    } else if (y > 90) {
      nav.classList.add("hidden");
    } else {
      nav.classList.remove("scrolled");
    }
  } else {
    if (y > 90) {
      nav.classList.add("scrolled");
      nav.classList.add("hidden");
    }
  }

  oldY = y;
}

setNavStyle();


// Mobile Nav
const $menu = $(".menu");
const $nav = $(".nav");
const $body = $("body");

function menuOpen() {
  $nav.addClass("active");
  $menu.addClass("active");
  $body.addClass("overflow");
}

function menuClose() {
  $nav.removeClass("active");
  $menu.removeClass("active");
  $body.removeClass("overflow");
}

$(".nav__toggle").on("click", function() {
  if ($nav.hasClass("active")) {
    menuClose();
  } else {
    menuOpen();
  }
});

$(window).on('resize', function(){
  var win = $(this); 
  if (win.width() >= 768) {
    menuClose();
  }
});

//MENU-SHOW 
$(".menu__item-show").on("click", function() {

  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }

  var itemShow = $(this).parent()
    .children()
    .siblings(".menu__sub-items")
    .slideToggle("slow");

  if (itemShow.hasClass("active")) {
    itemShow.removeClass("active");
  } else {
    itemShow.addClass("active");
  }
});


