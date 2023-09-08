/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\n\n\n\nconsole.log(\"Is it working?\");\n\nfunction loadComponents(){\n    const content = document.getElementById('content');\n    const main = document.getElementById('main');\n\n    document.addEventListener('DOMContentLoaded', function() {\n        // Your code here, including the createNav function\n        content.appendChild(_initialize__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        content.appendChild((0,_initialize__WEBPACK_IMPORTED_MODULE_2__.createMain)());\n        content.appendChild((0,_initialize__WEBPACK_IMPORTED_MODULE_2__.createFooter)());\n        \n        /* content.appendChild(createMenu); */\n        \n    });\n    /* content.appendChild(createHeader); */\n    /* const main = createMain(); */\n    /* content.appendChild(createMain()); */\n}\n\nloadComponents();\n\n/* const main = document.getElementById('content');\n\nmain.appendChild(createHome); */\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter),\n/* harmony export */   createMain: () => (/* binding */ createMain),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n\n\n\nconst createHeader = (() => {\n    const header = document.createElement('header');\n    \n    header.id = 'header';\n\n    const logoImg = new Image(120,120);\n    logoImg.src = 'assets/imgs/logo.png';\n    logoImg.alt = 'logo_img';\n\n    const resName = document.createElement('h2');\n    resName.textContent='Lickrish Eater';\n\n    header.appendChild(logoImg);\n    header.appendChild(resName);\n\n    \n    header.appendChild(createNav());\n    /* header.appendChild(createFooter()); */\n    \n    return header;\n})();\n\n\nfunction createNav() {\n    \n    const nav = document.createElement('nav');\n    const main = document.getElementById('main');\n\n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'Home';\n    homeBtn.classList.add('nav-btn');\n    homeBtn.addEventListener('click' , function(e){\n        \n        console.log(\"hi\");\n        loadMainPage((0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n        \n        /* createMenu(); */\n        /* loadHome(); */\n    });\n\n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = 'Menu';\n    menuBtn.classList.add('nav-btn');\n    menuBtn.addEventListener('click' , function(e){\n        \n    });\n\n    const contactBtn = document.createElement('button');\n    contactBtn.textContent='Contact';\n    contactBtn.classList.add('nav-btn');\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    return nav;\n\n};\n\n   function createMain(){\n    \n    const main = document.createElement('main');\n    const content = document.getElementById('content');\n    main.classList.add('main');\n    main.setAttribute('id','main');\n\n    /* content.appendChild(main); */\n    /* main.appendChild(loadPage); */\n    return main;\n};\n\n    function createFooter(){\n    const footer = document.createElement('footer');\n    footer.setAttribute('id','footer');\n\n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} ExpixelStudio`;\n\n    const gitHub = document.createElement(\"a\");\n    gitHub.href = \"https://github.com/ExpixelStudio\";\n\n    footer.appendChild(copyright);\n    footer.appendChild(gitHub);\n\n    return footer;\n}\n\nfunction loadMainPage(loadPage) {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(loadPage);\n}\n\n/* createMain(); */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://restaurant-page/./src/initialize.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = (() => {\n    const home = document.createElement('div');\n    home.classList.add('homePage');\n\n    const heroImg = new Image();\n    heroImg.src = 'assets/imgs/hero.jpg';\n    /* home.appendChild(heroImg) */\n\n    home.appendChild(createParagraph('Welcome to Lickrish Eater Home page'));\n    return home;\n})();\n\nfunction createParagraph(text){\n    const para = document.createElement('p');\n    para.textContent = text;\n    return para;\n}\n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* const createMenu = (() => {\n    const menu = document.createElement('div');\n    menu.classList.add('menuPage');\n\n    const heroImg = new Image();\n    heroImg.src = 'assets/imgs/hero.jpg';\n    home.appendChild(heroImg)\n\n    menu.appendChild(createParagraph('Menu page'));\n    return menu;\n})();\n */\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menuPage');\n\n    const heroImg = new Image();\n    heroImg.src = 'assets/imgs/hero.jpg';\n    /* home.appendChild(heroImg) */\n\n    menu.appendChild(createParagraph('Menu page'));\n    return menu;\n};\n\nfunction createParagraph(text){\n    const para = document.createElement('p');\n    para.textContent = text;\n    return para;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;