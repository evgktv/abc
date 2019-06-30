/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

AOS.init({
  // once: true,
  delay: 40,
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




/***/ })

/******/ });
//# sourceMappingURL=script.js.map