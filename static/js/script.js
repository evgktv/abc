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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map