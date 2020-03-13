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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/showData.js":
/*!******************************!*\
  !*** ./src/data/showData.js ***!
  \******************************/
/*! exports provided: showsBaseMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showsBaseMap\", function() { return showsBaseMap; });\nconst show1 = {\n  id: \"showId1\",\n  date: \"thursday, february 27\",\n  band: \"gunk\",\n  venue: \"high water mark\",\n  venuelink: \"http://highwatermarklounge.com/\"\n}\n\nconst show2 = {\n  id: \"showId2\",\n  date: \"monday, march 2\",\n  band: \"best coast\",\n  venue: \"wonder ballroom\",\n  venuelink: \"https://wonderballroom.com/\"\n}\n\nconst show3 = {\n  id: \"showId3\",\n  date: \"monday, march 9\",\n  band: \"the strokes\",\n  venue: \"wamu theater\",\n  venuelink: \"http://www.washingtonmusictheater.com/\"\n}\n\nconst show4 = {\n  id: \"showId4\",\n  date: \"friday, march 13\",\n  band: \"jason lytle\",\n  venue: \"mississippi studios\",\n  venuelink: \"https://www.mississippistudios.com/\"\n\n}\n\nconst show5 = {\n  id: \"showId5\",\n  date: \"thursday, march 26\",\n  band: \"treefort music fest\",\n  venue: \"boise\",\n  venuelink: \"https://www.treefortmusicfest.com/\"\n}\n\nconst show6 = {\n  id: \"showId6\",\n  date: \"sunday, april 19\",\n  band: \"king gizzard and the lizard wizard\",\n  venue: \"crystal ballroom\",\n  venuelink: \"https://www.crystalballroompdx.com/\"\n}\n\nconst show7 = {\n  id: \"showId7\",\n  date: \"saturday, april 25\",\n  band: \"joyce manor\",\n  venue: \"polaris hall\",\n  venuelink: \"https://www.polarishall.com/\"\n}\n\nconst show8 = {\n  id: \"showId8\",\n  date: \"thursday, april 30\",\n  band: \"deafheaven\",\n  venue: \"wonder ballroom\",\n  venuelink: \"https://wonderballroom.com/\"\n}\n\nconst show9 = {\n  id: \"showId9\",\n  date: \"saturday, may 2\",\n  band: \"sturgill simpson & tyler childers\",\n  venue: \"gorge ampitheater\",\n  venuelink: \"http://www.georgeamphitheatre.com/\"\n}\n\nconst show10 = {\n  id: \"showId10\",\n  date: \"saturday, may 9\",\n  band: \"power trash\",\n  venue: \"bit house saloon\",\n  venuelink: \"https://bithousesaloon.com/\"\n}\n\nconst show11 = {\n  id: \"showId11\",\n  date: \"thursday, may 14\",\n  band: \"wavves\",\n  venue: \"wonder ballroom\",\n  venuelink: \"https://wonderballroom.com/\"\n}\n\nconst show12 = {\n  id: \"showId12\",\n  date: \"friday, may 29\",\n  band: \"fuzz\",\n  venue: \"aladdin theater\",\n  venuelink: \"https://www.aladdin-theater.com/\"\n}\n\nconst show13 = {\n  id: \"showId13\",\n  date: \"friday, june 12\",\n  band: \"swans\",\n  venue: \"revolution hall\",\n  venuelink: \"https://www.revolutionhall.com/\"\n}\n\nconst show14 = {\n  id: \"showId14\",\n  date: \"friday, august 7\",\n  band: \"tame impala\",\n  venue: \"gorge ampitheater\",\n  venuelink: \"http://www.georgeamphitheatre.com/\"\n}\n\n\n\nconst showsBaseMap = {\n  [show1.id] : show1,\n  [show2.id] : show2,\n  [show3.id] : show3,\n  [show4.id] : show4,\n  [show5.id] : show5,\n  [show6.id] : show6,\n  [show7.id] : show7,\n  [show8.id] : show8,\n  [show9.id] : show9,\n  [show10.id] : show10,\n  [show11.id] : show11,\n  [show12.id] : show12,\n  [show13.id] : show13,\n  [show14.id] : show14,\n}\n\n\n//# sourceURL=webpack:///./src/data/showData.js?");

/***/ }),

/***/ "./src/description/description.js":
/*!****************************************!*\
  !*** ./src/description/description.js ***!
  \****************************************/
/*! exports provided: generateDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDescription\", function() { return generateDescription; });\n///////////////////////////////////////////////////////////////\nconst generateDescription = (htmlElement) => {\n  const homepageDescription = document.createElement(\"p\")\n  homepageDescription.id = \"hompage-description\"\n\n  homepageDescription.innerHTML = \"Welcome to the show  \\\n  tracker website! You can (someday when it actually  \\\n  gets all the way implemented) use this site to keep track  \\\n  of all the shows you have coming up so you never miss  \\\n  a single one.\"\n\n  htmlElement.appendChild(homepageDescription)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/description/description.js?");

/***/ }),

/***/ "./src/form/form.js":
/*!**************************!*\
  !*** ./src/form/form.js ***!
  \**************************/
/*! exports provided: generateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateForm\", function() { return generateForm; });\n///////////////////////////////////////////////////////////////\nconst generateForm = (htmlElement) => {\n  const showForm = document.createElement(\"form\")\n  showForm.id = \"show-form\"\n  showForm.innerHTML = \"\"\n\n  htmlElement.appendChild(showForm)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/form/form.js?");

/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/*! exports provided: generateHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHeader\", function() { return generateHeader; });\n///////////////////////////////////////////////////////////////\nconst generateHeader = (htmlElement) => {\n  const mainHeader = document.createElement(\"h1\")\n  mainHeader.id = \"main-header\"\n  mainHeader.innerHTML = \"Personal Show Manager 1.0\"\n  htmlElement.appendChild(mainHeader)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/header/header.js?");

/***/ }),

/***/ "./src/header/navigation.js":
/*!**********************************!*\
  !*** ./src/header/navigation.js ***!
  \**********************************/
/*! exports provided: navigateToSubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToSubPage\", function() { return navigateToSubPage; });\n///////////////////////////////////////////////////////////////\nconst navigateToSubPage = (subpageId) => {\n  const pages = document.getElementsByClassName(\"subpage\")\n\n  // hides all subpages\n  for (let i = 0; i < pages.length; i++) {\n    pages[i].style.display = \"none\"\n  }\n\n  // then sets one subpage visible\n  const visiblePage = document.getElementById(subpageId)\n  visiblePage.style.display = \"block\"\n\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/header/navigation.js?");

/***/ }),

/***/ "./src/header/subheader-items.js":
/*!***************************************!*\
  !*** ./src/header/subheader-items.js ***!
  \***************************************/
/*! exports provided: generateSubheader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateSubheader\", function() { return generateSubheader; });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/header/navigation.js\");\n///////////////////////////////////////////////////////////////\n\n\n///////////////////////////////////////////////////////////////\nconst home = {\n  childText: \"home\",\n  className: \"active home\",\n  pageToShow: \"home\"\n}\nconst subpage1 = {\n  childText: \"add show\",\n  className: \"\",\n  pageToShow: \"subpage-1\"\n}\nconst subpage2 = {\n  childText: \"upcoming\",\n  className: \"\",\n  pageToShow: \"subpage-2\"\n}\nconst subpage3 = {\n  childText: \"venue info\",\n  className: \"\",\n  pageToShow: \"subpage-3\"\n}\n\n///////////////////////////////////////////////////////////////\nconst METADATA_ITEMS = [ home, subpage1, subpage2, subpage3 ]\n\n///////////////////////////////////////////////////////////////\nconst generateSubheaderButtonElement = (metadata) => {\n  const { childText, className, pageToShow } = metadata\n  const subheaderItem = document.createElement(\"button\")\n\n  subheaderItem.innerHTML = childText\n  subheaderItem.setAttribute(\"class\", className)\n  subheaderItem.setAttribute(\"id\", `nav-button-${pageToShow}`)\n\n  return subheaderItem\n}\n\n///////////////////////////////////////////////////////////////\nconst fillSubheaderArray = (metadataItems) => {\n  const elements = metadataItems.map(item => generateSubheaderButtonElement(item))\n\n  return elements\n}\n\n///////////////////////////////////////////////////////////////\nconst generateSubheader = (htmlElement) => {\n  const subheader = document.createElement(\"div\")\n  subheader.id = \"subheader\"\n\n  const subheaderItems = fillSubheaderArray(METADATA_ITEMS)\n\n  for(let i = 0; i < subheaderItems.length; i++)\n  {\n    htmlElement.appendChild(subheaderItems[i])\n  }\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/header/subheader-items.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ \"./src/header/header.js\");\n/* harmony import */ var _header_subheader_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/subheader-items */ \"./src/header/subheader-items.js\");\n/* harmony import */ var _header_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/navigation */ \"./src/header/navigation.js\");\n/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description/description */ \"./src/description/description.js\");\n/* harmony import */ var _subtitle_subtitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subtitle/subtitle */ \"./src/subtitle/subtitle.js\");\n/* harmony import */ var _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideshow/slideshow */ \"./src/slideshow/slideshow.js\");\n/* harmony import */ var _scrollbox_scrollbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrollbox/scrollbox */ \"./src/scrollbox/scrollbox.js\");\n/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form */ \"./src/form/form.js\");\n///////////////////////////////////////////////////////////////\n\n\n\n\n\n\n\n\n\n///////////////////////////////////////////////////////////////\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const title = document.getElementById(\"title-container\")\n  Object(_header_header__WEBPACK_IMPORTED_MODULE_0__[\"generateHeader\"])(title)\n\n  const subheader = document.getElementById(\"navigation\")\n  Object(_header_subheader_items__WEBPACK_IMPORTED_MODULE_1__[\"generateSubheader\"])(subheader)\n\n  const subtitle = document.getElementById(\"subtitle\")\n  Object(_subtitle_subtitle__WEBPACK_IMPORTED_MODULE_4__[\"generateSubtitle\"])(subtitle)\n\n  const description = document.getElementById(\"description\")\n  Object(_description_description__WEBPACK_IMPORTED_MODULE_3__[\"generateDescription\"])(description)\n\n  const slideshow = document.getElementById(\"slideshow-container\")\n  Object(_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_5__[\"generateSlideshow\"])(slideshow)\n  Object(_slideshow_slideshow__WEBPACK_IMPORTED_MODULE_5__[\"displaySlides\"])()\n  const rightSlideNav = document.getElementsByClassName(\"next\")[0]\n  rightSlideNav.onclick =  _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_5__[\"navRight\"]\n  const leftSlideNav = document.getElementsByClassName(\"prev\")[0]\n  leftSlideNav.onclick =  _slideshow_slideshow__WEBPACK_IMPORTED_MODULE_5__[\"navLeft\"]\n\n  const scrollbox = document.getElementById(\"scrollbox\")\n  Object(_scrollbox_scrollbox__WEBPACK_IMPORTED_MODULE_6__[\"addUL\"])(scrollbox)\n  Object(_scrollbox_scrollbox__WEBPACK_IMPORTED_MODULE_6__[\"displayScrollbox\"])()\n\n  const form = document.getElementById(\"show-form\")\n  Object(_form_form__WEBPACK_IMPORTED_MODULE_7__[\"generateForm\"])(form)\n\n\n\n\n  // \"home\" is the default page to show\n  Object(_header_navigation__WEBPACK_IMPORTED_MODULE_2__[\"navigateToSubPage\"])(\"home\")\n\n  const subheaderItemHome = document.getElementById(\"nav-button-home\")\n  subheaderItemHome.addEventListener(\"click\", () => Object(_header_navigation__WEBPACK_IMPORTED_MODULE_2__[\"navigateToSubPage\"])(\"home\"))\n\n  const subheaderItem1 = document.getElementById(\"nav-button-subpage-1\")\n  subheaderItem1.addEventListener(\"click\", () => Object(_header_navigation__WEBPACK_IMPORTED_MODULE_2__[\"navigateToSubPage\"])(\"subpage-1\"))\n\n  const subheaderItem2 = document.getElementById(\"nav-button-subpage-2\")\n  subheaderItem2.addEventListener(\"click\", () => Object(_header_navigation__WEBPACK_IMPORTED_MODULE_2__[\"navigateToSubPage\"])(\"subpage-2\"))\n\n  const subheaderItem3 = document.getElementById(\"nav-button-subpage-3\")\n  subheaderItem3.addEventListener(\"click\", () => Object(_header_navigation__WEBPACK_IMPORTED_MODULE_2__[\"navigateToSubPage\"])(\"subpage-3\"))\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scrollbox/scrollbox.js":
/*!************************************!*\
  !*** ./src/scrollbox/scrollbox.js ***!
  \************************************/
/*! exports provided: addUL, displayScrollbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUL\", function() { return addUL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayScrollbox\", function() { return displayScrollbox; });\n/* harmony import */ var _data_showData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/showData */ \"./src/data/showData.js\");\n///////////////////////////////////////////////////////////////\n\n\n///////////////////////////////////////////////////////////////\nconst upcomingShowsArray = Object.values(_data_showData__WEBPACK_IMPORTED_MODULE_0__[\"showsBaseMap\"])\n\n///////////////////////////////////////////////////////////////\nconst makeElement = (elementType, attributeType, attributeName) => {\n  const element = document.createElement(elementType)\n  element.setAttribute(attributeType, attributeName)\n\n  return element\n}\n\n///////////////////////////////////////////////////////////////\nconst extractShowInfo = (upcomingShowsArray) => {\n  let newArray = []\n\n  for (let i = 0; i < upcomingShowsArray.length; i++) {\n    let newString = `${upcomingShowsArray[i].date} - ${upcomingShowsArray[i].band} at ${upcomingShowsArray[i].venue}`\n    newArray[i] = newString\n  }\n\n  return newArray\n}\n\n///////////////////////////////////////////////////////////////\nconst makeUL = () => {\n  let array = extractShowInfo(upcomingShowsArray)\n  const upcomingShowsList = makeElement(\"ul\", \"class\", \"upcoming-shows-list\")\n\n  const scrollboxHeader = makeElement(\"h1\", \"id\", \"scrollbox-header\")\n  scrollboxHeader.innerHTML = \"Upcoming Shows\"\n  upcomingShowsList.appendChild(scrollboxHeader)\n\n  for (let i = 0; i < array.length; i++) {\n    const newListItem = makeElement(\"li\", \"class\", \"upcoming-show\")\n    newListItem.appendChild(document.createTextNode(array[i]))\n    upcomingShowsList.appendChild(newListItem)\n  }\n\n  return upcomingShowsList\n}\n\n///////////////////////////////////////////////////////////////\nconst addUL = (htmlElement) => {\n  htmlElement.appendChild(makeUL())\n}\n\n///////////////////////////////////////////////////////////////\nconst displayScrollbox = () => {\n\n  const upcomingShowsList = document.getElementsByClassName(\"upcoming-shows-list\")\n\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/scrollbox/scrollbox.js?");

/***/ }),

/***/ "./src/slideshow/slideshow.js":
/*!************************************!*\
  !*** ./src/slideshow/slideshow.js ***!
  \************************************/
/*! exports provided: generateSlideshow, displaySlides, navRight, navLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateSlideshow\", function() { return generateSlideshow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaySlides\", function() { return displaySlides; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navRight\", function() { return navRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navLeft\", function() { return navLeft; });\n///////////////////////////////////////////////////////////////\nconst imageItem1 = {\n  number: \"1\",\n  // source: \"https://i.imgur.com/Z9bgW69.png\",\n  source: \"https://i.imgur.com/3lX42vd.png\",\n  caption: \"this is image number 1\"\n}\nconst imageItem2 = {\n  number: \"2\",\n  // source: \"https://i.imgur.com/3kmYsBS.png\",\n  source: \"https://i.imgur.com/Azt0ldO.png\",\n  caption: \"this is image number 2\"\n}\nconst imageItem3 = {\n  number: \"3\",\n  // source: \"https://i.imgur.com/2YsnVsw.png\",\n  source: \"https://i.imgur.com/bqqBPV5.png\",\n  caption: \"this is image number 3\"\n}\n\n///////////////////////////////////////////////////////////////\nconst METADATA_ITEMS = [ imageItem1, imageItem2, imageItem3 ]\n\n///////////////////////////////////////////////////////////////\nlet slideIndex = 0\n\n///////////////////////////////////////////////////////////////\nconst makeElement = (elementType, attributeType, attributeName) => {\n  const element = document.createElement(elementType)\n  element.setAttribute(attributeType, attributeName)\n\n  return element\n}\n\n///////////////////////////////////////////////////////////////\nconst generateSlideshowItemElement = (metadataItem) => {\n  const { number, source, caption } = metadataItem\n\n  const parentDiv = makeElement(\"div\", \"class\", \"my-slides\")\n  const childSlideNumberDiv = makeElement(\"div\", \"class\", \"numbertext\")\n  const childImage = makeElement(\"img\", \"src\", source)\n\n  childImage.setAttribute(\"class\", \"slideshow-image\")\n\n  if (number === \"1\") {\n    parentDiv.classList.add(\"active\")\n  } else {\n    parentDiv.classList.add(\"inactive\")\n  }\n\n  const childCaptionDiv = makeElement(\"div\", \"text\", caption)\n\n  parentDiv.appendChild(childSlideNumberDiv)\n  parentDiv.appendChild(childImage)\n  parentDiv.appendChild(childCaptionDiv)\n\n  return parentDiv\n}\n\n///////////////////////////////////////////////////////////////\nconst createSlideshowArray = (metadataItems) => {\n  return metadataItems.map(item => generateSlideshowItemElement(item))\n}\n\n///////////////////////////////////////////////////////////////\nconst generateSlideshow = (htmlElement) => {\n  const slideshowArray = createSlideshowArray(METADATA_ITEMS)\n\n  for(let i = 0; i < slideshowArray.length; i++)\n  {\n    htmlElement.appendChild(slideshowArray[i])\n  }\n  console.log(\"after html elem for loop\", htmlElement)\n}\n\n///////////////////////////////////////////////////////////////\nconst navRight = () => {\n  const images = document.getElementsByClassName(\"my-slides\")\n  let indexOfCurrentActiveSlide = 0\n\n  for (let i = 0; i < images.length; i++) {\n    if (images[i].classList.contains(\"active\")) {\n      indexOfCurrentActiveSlide = i\n    }\n  }\n  images[indexOfCurrentActiveSlide].classList.remove(\"active\")\n  images[indexOfCurrentActiveSlide].classList.add(\"inactive\")\n\n  let next = indexOfCurrentActiveSlide + 1\n  if (next > 2) {\n    next = 0;\n  }\n  images[next].classList.remove(\"inactive\")\n  images[next].classList.add(\"active\")\n}\n\n///////////////////////////////////////////////////////////////\nconst navLeft = () => {\n  const images = document.getElementsByClassName(\"my-slides\")\n  let indexOfCurrentActiveSlide = 0\n\n  for (let i = 0; i < images.length; i++) {\n    if (images[i].classList.contains(\"active\")) {\n      indexOfCurrentActiveSlide = i\n    }\n  }\n  images[indexOfCurrentActiveSlide].classList.remove(\"active\")\n  images[indexOfCurrentActiveSlide].classList.add(\"inactive\")\n\n  let next = indexOfCurrentActiveSlide - 1\n  if (next < 0) {\n  next = 2;\n  }\n  images[next].classList.remove(\"inactive\")\n  images[next].classList.add(\"active\")\n}\n\n///////////////////////////////////////////////////////////////\nconst displaySlides = () => {\n  setInterval(function() {navRight();}, 5000)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/slideshow/slideshow.js?");

/***/ }),

/***/ "./src/subtitle/subtitle.js":
/*!**********************************!*\
  !*** ./src/subtitle/subtitle.js ***!
  \**********************************/
/*! exports provided: generateSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateSubtitle\", function() { return generateSubtitle; });\n///////////////////////////////////////////////////////////////\nconst generateSubtitle = (htmlElement) => {\n  const pageSubtitle = document.createElement(\"h1\")\n  pageSubtitle.id = \"main-header\"\n  pageSubtitle.innerHTML = \"welcome to the show tracker site\"\n  htmlElement.appendChild(pageSubtitle)\n}\n\n///////////////////////////////////////////////////////////////\n\n\n\n//# sourceURL=webpack:///./src/subtitle/subtitle.js?");

/***/ })

/******/ });