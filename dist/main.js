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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  color: #f1f1f1;\\n  background: linear-gradient(45deg, rgb(105 45 48), rgb(59 74 58));\\n  width: 25%;\\n  height: 100vh;\\n}\\n\\n.container {\\n  width: 800px;\\n  height: 602px;\\n  background: linear-gradient(45deg, #101db6, #e2127abf);\\n  display: grid;\\n  grid-template: 100px 300px 100px 100px / repeat(8, 100px);\\n  margin: 15% 0 20% 90%;\\n  position: relative;\\n  border: 1px solid #f1f1f1;\\n}\\n\\nh1 {\\n  position: relative;\\n  top: 25px;\\n  left: 150%;\\n  color: #859181;\\n  width: 125%;\\n}\\n\\nform {\\n  grid-area: 1 / 1 / 2 / -1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-bottom: 1px solid #f1f1f1;\\n}\\n\\nform input {\\n  padding: 10px;\\n  width: 50%;\\n  border: 1px solid #a71e73;\\n  border-radius: 5px;\\n  margin-right: 2px;\\n}\\n\\nform input::placeholder {\\n  color: #a71e73;\\n}\\n\\nbutton {\\n  padding: 5px;\\n  border: 3px solid  #4d1d99;\\n  border-radius: 5px;\\n  background-color: #a71e73;\\n  color: #4d1d99;\\n  font-size: 1.2em;\\n}\\n\\n.logo-info {\\n  grid-area: 2 / 1 / 3 / -1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.logo,\\n.info {\\n  width: 50%;\\n}\\n\\n.logo img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.info .weather {\\n  font-size: 40px;\\n}\\n\\n.info .weather::first-letter {\\n  text-transform: capitalize;\\n}\\n\\n.info .temperature {\\n  font-size: 60px;\\n}\\n\\n.info .localization {\\n  font-size: 40px;\\n  word-wrap: break-word;\\n}\\n\\n.hour-forecast {\\n  grid-area: 3 / 1 / 4 / -1;\\n}\\n\\n.day-forecast {\\n  grid-area: 4 / 1 / 5 / -1;\\n}\\n\\n.hour-forecast,\\n.day-forecast {\\n  display: grid;\\n  grid-template: 100px / repeat(7, 1fr);\\n}\\n\\n.hour,\\n.day {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  border-top: 1px solid #f1f1f1;\\n  font-size: 21px;\\n}\\n\\n.hour:not(:last-child),\\n.day:not(:last-child) {\\n  border-right: 1px solid #f1f1f1;\\n}\\n\\n.hour p,\\n.day p {\\n  margin: 5px;\\n}\\n\\n.switch {\\n  position: absolute;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n  left: 50%;\\n  top: 62%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #391ca3;\\n  border-radius: 34px;\\n  -webkit-transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);\\n  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);\\n}\\n\\n.slider::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  border-radius: 50%;\\n  -webkit-transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);\\n  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);\\n}\\n\\ninput:checked + .slider {\\n  background-color: #b31e6c;\\n}\\n\\ninput:focus + .slider {\\n  box-shadow: 0 0 1px #b31e6c;\\n}\\n\\ninput:checked + .slider::before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px);\\n}\\n\\n.celsius {\\n  position: relative;\\n  left: -100%;\\n  top: 20%;\\n  font-size: medium;\\n  font-weight: 900;\\n}\\n\\n.fahrenheit {\\n  position: relative;\\n  left: 105%;\\n  top: -30%;\\n  font-size: medium;\\n  font-weight: 900;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/apicall.js":
/*!***********************************!*\
  !*** ./src/components/apicall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callApi\": () => (/* binding */ callApi)\n/* harmony export */ });\n/* harmony import */ var _dayManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dayManagement */ \"./src/components/dayManagement.js\");\n\n\nconst APIKEY = '5020f52919e5e158831dceb8b9d46e77';\n\nlet apiData;\nconst weather = document.querySelector('.weather');\nconst temperature = document.querySelector('.temperature');\nconst localization = document.querySelector('.localization');\nconst hours = document.querySelectorAll('.hour-forecast-name');\nconst values = document.querySelectorAll('.hour-forecast-value');\nconst days = document.querySelectorAll('.day-forecast-name');\nconst daysValues = document.querySelectorAll('.day-forecast-value');\nconst logoImg = document.querySelector('.logo');\nconst img = document.createElement('img');\n\n/* eslint-disable import/prefer-default-export */\nconst callApi = (lat, lon, currentTime, units, sym) => {\n  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&\nlon=${lon}&exclude=minutely&units=${units}&appid=${APIKEY}`)\n    .then((response) => response.json())\n    .then((informations) => {\n      apiData = informations;\n      weather.innerText = apiData.current.weather[0].description;\n      temperature.innerText = `${Math.trunc(apiData.current.temp)}??${sym}`;\n      /* eslint-disable prefer-destructuring */\n      const cityName = (apiData.timezone).split('/');\n      localization.innerText = cityName[1];\n      /* eslint-enable prefer-destructuring */\n      for (let i = 0; i < hours.length; i += 1) {\n        const incrHour = currentTime + i * 3;\n\n        if (incrHour > 24) {\n          hours[i].innerText = `${incrHour - 24}:00`;\n        } else if (incrHour === 24) {\n          hours[i].innerText = '00:00';\n        } else {\n          hours[i].innerText = `${incrHour}:00`;\n        }\n      }\n\n      for (let j = 0; j < values.length; j += 1) {\n        values[j].innerText = `${Math.trunc(apiData.hourly[j * 3].temp)}??${sym}`;\n      }\n\n      for (let k = 0; k < _dayManagement__WEBPACK_IMPORTED_MODULE_0__.orderedDay.length; k += 1) {\n        days[k].innerText = _dayManagement__WEBPACK_IMPORTED_MODULE_0__.orderedDay[k].slice(0, 3);\n      }\n\n      for (let m = 0; m < 7; m += 1) {\n        daysValues[m].innerText = `${Math.trunc(apiData.daily[m + 1].temp.day)}??${sym}`;\n      }\n\n      img.setAttribute('alt', 'logo of weather');\n      img.setAttribute('src', `svgs/${apiData.current.weather[0].icon}.svg`);\n\n      logoImg.appendChild(img);\n    });\n};\n/* eslint-enable import/prefer-default-export */\n\n//# sourceURL=webpack://weather/./src/components/apicall.js?");

/***/ }),

/***/ "./src/components/dayManagement.js":
/*!*****************************************!*\
  !*** ./src/components/dayManagement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"orderedDay\": () => (/* binding */ orderedDay)\n/* harmony export */ });\nconst daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];\n\nconst now = new Date();\nconst options = { weekday: 'long' };\nlet today = now.toLocaleDateString('en-EN', options);\n\ntoday = today.charAt(0).toUpperCase() + today.slice(1);\n\nconst order1 = daysOfWeek.slice(daysOfWeek.indexOf(today));\nconst order2 = daysOfWeek.slice(0, daysOfWeek.indexOf(today));\n/* eslint-disable import/prefer-default-export */\nconst orderedDay = order1.concat(order2);\n/* eslint-enable import/prefer-default-export */\n\n\n//# sourceURL=webpack://weather/./src/components/dayManagement.js?");

/***/ }),

/***/ "./src/components/localization.js":
/*!****************************************!*\
  !*** ./src/components/localization.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"locateCity\": () => (/* binding */ locateCity)\n/* harmony export */ });\n/* harmony import */ var _apicall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apicall */ \"./src/components/apicall.js\");\n\n\nconst MAPKEY = 'e38f9a4538444e94bac42b28e4027be5';\nconst TIMEKEY = '99a67da6f017470da19b331a2c14b86c';\n\nconst input = document.getElementById('city');\nconst slider = document.querySelector(\"input[type='checkbox']\");\nlet apiData;\n/* eslint-disable import/prefer-default-export */\nconst locateCity = (city) => {\n  fetch(`http://api.positionstack.com/v1/forward?access_key=${MAPKEY}&query=${city}`)\n\n    .then((response) => response.json())\n    .then((informations) => {\n      apiData = informations;\n      const { latitude } = apiData.data[0];\n      const { longitude } = apiData.data[0];\n      fetch(`https://api.ipgeolocation.io/timezone?apiKey=${TIMEKEY}&lat=${latitude}&long=${longitude}`)\n        .then((data => data.json()))\n        .then((info) => {\n          const time = info.time_24;\n          const sym = time.split(':');\n          const chosenCityTime = (parseInt(sym, 10));\n          let unit = 'metric';\n          let degreeSym = 'C';\n          (0,_apicall__WEBPACK_IMPORTED_MODULE_0__.callApi)(latitude, longitude, chosenCityTime, unit, degreeSym);\n\n          slider.addEventListener('change', () => {\n            const time = info.time_24;\n            const sym = time.split(':');\n            const chosenCityTime = (parseInt(sym, 10));\n\n            if (unit === 'metric') {\n              unit = 'imperial';\n              degreeSym = 'F';\n            } else {\n              unit = 'metric';\n              degreeSym = 'C';\n            }\n\n            (0,_apicall__WEBPACK_IMPORTED_MODULE_0__.callApi)(latitude, longitude, chosenCityTime, unit, degreeSym);\n          });\n        });\n    })\n    .catch(() => {\n      input.setAttribute('placeholder', 'Please Add a Valid City Name');\n      setTimeout(() => {\n        input.setAttribute('placeholder', 'Try Another City');\n      }, 3000);\n    });\n};\n/* eslint-enable import/prefer-default-export */\n\n//# sourceURL=webpack://weather/./src/components/localization.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _components_apicall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/apicall */ \"./src/components/apicall.js\");\n/* harmony import */ var _components_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/localization */ \"./src/components/localization.js\");\n\n\n\n\n\nconst city = document.getElementById('city');\nconst form = document.querySelector('.city-entry');\nconst slider = document.querySelector(\"input[type='checkbox']\");\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const chosenCity = city.value.trim();\n  (0,_components_localization__WEBPACK_IMPORTED_MODULE_2__.locateCity)(chosenCity);\n  city.value = '';\n});\n\n\nif (navigator.geolocation) {\n  navigator.geolocation.getCurrentPosition(pos => {\n    const lat = pos.coords.latitude;\n    const lon = pos.coords.longitude;\n    const time = new Date().getHours();\n    let unit = 'metric';\n    let sym = 'C';\n    (0,_components_apicall__WEBPACK_IMPORTED_MODULE_1__.callApi)(lat, lon, time, unit, sym);\n\n\n    slider.addEventListener('change', () => {\n      const lat = pos.coords.latitude;\n      const lon = pos.coords.longitude;\n      const time = new Date().getHours();\n\n      if (unit === 'metric') {\n        unit = 'imperial';\n        sym = 'F';\n      } else {\n        unit = 'metric';\n        sym = 'C';\n      }\n      (0,_components_apicall__WEBPACK_IMPORTED_MODULE_1__.callApi)(lat, lon, time, unit, sym);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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