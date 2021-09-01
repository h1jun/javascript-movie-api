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

/***/ "./src/js/detail/movieDetailView.js":
/*!******************************************!*\
  !*** ./src/js/detail/movieDetailView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_movieDetailApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/movieDetailApi.js */ \"./src/js/home/movieDetailApi.js\");\n\r\n\r\nasync function detailTest() {\r\n    const detail = await (0,_home_movieDetailApi_js__WEBPACK_IMPORTED_MODULE_0__.getDetail)()\r\n    console.log(detail);\r\n    \r\n    let template = `\r\n        <div class=\"my-0 mx-auto  w-90vw xl:w-1200\">test</div>\r\n    `;\r\n\r\n    return template\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detailTest);\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/detail/movieDetailView.js?");

/***/ }),

/***/ "./src/js/home/homeView.js":
/*!*********************************!*\
  !*** ./src/js/home/homeView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeRender\": () => (/* binding */ homeRender)\n/* harmony export */ });\n/* harmony import */ var _movieDetailApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieDetailApi.js */ \"./src/js/home/movieDetailApi.js\");\n/* harmony import */ var _recoMovie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recoMovie.js */ \"./src/js/home/recoMovie.js\");\n\r\n\r\n\r\nasync function homeRender() {\r\n    const detail = await (0,_movieDetailApi_js__WEBPACK_IMPORTED_MODULE_0__.getDetail)();\r\n    const picFullPath = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`; \r\n\r\n    const todayMovieTemplate = `\r\n        <section>\r\n            <div class=\"w-screen h-70vh absolute z-99- bg-cover bg-no-repeat bg-black backdrop-opacity-30\" style=\"background-image: url(${picFullPath})\">\r\n                <div class=\"bg-black opacity-30 w-screen h-70vh\"></div>\r\n            </div>\r\n            \r\n            <div class=\"my-0 mx-auto  w-90vw xl:w-1200\">\r\n                <div class=\"flex-auto flex flex-col justify-center items-center text-white h-70vh\">\r\n                    <div class=\"mb-32 text-7xl font-bold\">${detail.title}</div>\r\n                    <div class=\"text-4xl mb-24\">\"${detail.tagline}\"</div>\r\n                    <button href=\"/detail\" class=\"border-4 border-white py-2 px-8 bg-black bg-opacity-30 movie-detail\" id=${detail.id} route=\"/detail\">더보기</button>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    `;\r\n\r\n    const recoMovie = await (0,_recoMovie_js__WEBPACK_IMPORTED_MODULE_1__.recoMoiveRender)();\r\n    return todayMovieTemplate  + recoMovie\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/home/homeView.js?");

/***/ }),

/***/ "./src/js/home/movieDetailApi.js":
/*!***************************************!*\
  !*** ./src/js/home/movieDetailApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getDetail\": () => (/* binding */ getDetail)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ \"./src/js/store.js\");\n\r\n\r\nconst API_KEY = _store_js__WEBPACK_IMPORTED_MODULE_0__.default.API_KEY;\r\n\r\nasync function getData() {\r\n    try {\r\n        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KO&page=1`);\r\n        const dataCount = response.data.results.length; // 가져온 data 배열 길이\r\n        const rndNum = Math.floor(Math.random() * dataCount); // 랜덤 숫자\r\n        const movieId = response.data.results[rndNum].id;\r\n        return movieId;\r\n        \r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n};\r\n\r\nasync function getDetail() {\r\n    const movieId = await getData();\r\n    try {\r\n        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko`);\r\n        return response.data;\r\n\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/home/movieDetailApi.js?");

/***/ }),

/***/ "./src/js/home/movieListApi.js":
/*!*************************************!*\
  !*** ./src/js/home/movieListApi.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovieList\": () => (/* binding */ getMovieList)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ \"./src/js/store.js\");\n\r\n\r\nconst API_KEY = _store_js__WEBPACK_IMPORTED_MODULE_0__.default.API_KEY;\r\n\r\nasync function getMovieList() {\r\n    try {\r\n        const response = await axios.get(`https://api.themoviedb.org/3/movie/${_store_js__WEBPACK_IMPORTED_MODULE_0__.default.genres.Action}/recommendations?api_key=${API_KEY}&language=ko&page=1`);\r\n\r\n        const movieArr = [];\r\n        const check = [];\r\n\r\n        while (movieArr.length !== 5) {\r\n            const dataCnt = response.data.results.length;\r\n            const rndNum = Math.floor(Math.random() * dataCnt); \r\n            if (check.indexOf(rndNum) === -1 ) {\r\n                check.push(rndNum);\r\n                movieArr.push(response.data.results[rndNum]);\r\n            }\r\n        }\r\n        return movieArr;\r\n    } catch (error) {\r\n        \r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/home/movieListApi.js?");

/***/ }),

/***/ "./src/js/home/recoMovie.js":
/*!**********************************!*\
  !*** ./src/js/home/recoMovie.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recoMoiveRender\": () => (/* binding */ recoMoiveRender)\n/* harmony export */ });\n/* harmony import */ var _movieListApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieListApi.js */ \"./src/js/home/movieListApi.js\");\n\r\n\r\nasync function recoMoiveRender() {\r\n    const movieList = await (0,_movieListApi_js__WEBPACK_IMPORTED_MODULE_0__.getMovieList)();\r\n    \r\n    let genreTemplate = `\r\n        <section>\r\n            <div class=\"my-0 mx-auto  w-90vw xl:w-1200\">\r\n                <h2 class=\"text-3xl font-bold my-9\">추천 액션 영화!</h2>\r\n                <ul class=\"flex justify-between\">\r\n                    {{__movie_list_}}\r\n                </ul>\r\n            </div>\r\n        </section>\r\n    `;\r\n\r\n    const movieLi = [];\r\n    movieList.forEach(element => {\r\n        const year = element.release_date.substring(0, 4);\r\n        const vote_average = String(element.vote_average).substring(0, 3);\r\n        const posterPath = `https://image.tmdb.org/t/p/original/${element.poster_path}`; \r\n        movieLi.push( `\r\n            <li class=\"movie-detail cursor-pointer\" id=\"${element.id}\" route=\"/detail\">\r\n                <div class= \"w-44 h-60 bg-left bg-no-repeat bg-contain\" style=\"background-image: url(${posterPath})\"></div>\r\n                <strong>${element.title}</strong>\r\n                <span class=\"block\">${year}</span>\r\n                <span>⭐${vote_average}</span>\r\n            </li>\r\n        `);\r\n    });\r\n\r\n    genreTemplate = genreTemplate.replace(\"{{__movie_list_}}\", movieLi.join(''));\r\n    \r\n    return genreTemplate\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/home/recoMovie.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialRoutes\": () => (/* binding */ initialRoutes),\n/* harmony export */   \"setHistoryPath\": () => (/* binding */ setHistoryPath)\n/* harmony export */ });\n/* harmony import */ var _home_homeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/homeView.js */ \"./src/js/home/homeView.js\");\n/* harmony import */ var _detail_movieDetailView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/movieDetailView.js */ \"./src/js/detail/movieDetailView.js\");\n\r\n\r\n\r\nconst routes = {\r\n    '/': _home_homeView_js__WEBPACK_IMPORTED_MODULE_0__.homeRender,\r\n    '/detail': _detail_movieDetailView_js__WEBPACK_IMPORTED_MODULE_1__.default,\r\n};\r\n\r\nconst initialRoutes = async (el) => {\r\n    await renderHTML(el, routes['/']);\r\n    handleMovieClick();\r\n}\r\n\r\nconst setHistoryPath = (pathName, el, movieId) => {\r\n    history.pushState({}, pathName, window.location.origin + pathName + \"/\" + movieId);\r\n    renderHTML(el, routes[pathName]);\r\n}\r\n\r\n\r\nconst renderHTML = async (el, route) => {\r\n    el.innerHTML = await route();\r\n};\r\n\r\n\r\nwindow.addEventListener('popstate', async (event) => {\r\n    const mainTag = document.querySelector('main');\r\n\r\n    if (location.pathname.split('/')[1] === \"\") {\r\n        await renderHTML(mainTag, routes['/']);\r\n    } else if (location.pathname.split('/')[1] === \"detail\") {\r\n        await renderHTML(mainTag, routes['/' + location.pathname.split('/')[1]]);\r\n    }\r\n    \r\n    handleMovieClick();\r\n});\r\n\r\n\r\nfunction handleMovieClick() {\r\n    const handleDetail = document.querySelectorAll(\".movie-detail\");\r\n    const main = document.querySelector('main');\r\n    handleDetail.forEach(element => {\r\n        element.addEventListener(\"click\", async (event) => {\r\n            const pathName = event.currentTarget.getAttribute(\"route\")\r\n            const movieId = event.currentTarget.id;\r\n            await setHistoryPath(pathName, main, movieId);\r\n        })\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/router.js?");

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst storeInfo = {\r\n    API_KEY: \"8f625f1d4699a82a2e593c4d543f96db\",\r\n    genres: {\r\n        Action: 28,\r\n        Adventure: 12,\r\n        Comedy: 35,\r\n        Animation: 16,\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeInfo);\r\n\n\n//# sourceURL=webpack://javascript-movie-api/./src/js/store.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/router.js");
/******/ 	
/******/ })()
;