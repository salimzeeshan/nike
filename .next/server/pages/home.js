"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nvar data = JSON.stringify({\n    \"collection\": \"products\",\n    \"database\": \"nike\",\n    \"dataSource\": \"nike-products\",\n    \"projection\": {\n        \"_id\": 1\n    }\n});\nvar config = {\n    method: \"post\",\n    url: \"https://ap-south-1.aws.data.mongodb-api.com/app/data-bchwk/endpoint/data/v1/action/findOne\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"Access-Control-Request-Headers\": \"\",\n        \"api-key\": \"y9WWVaW4WSdKCd4c0bCmiRuOGdqOAEYxdPHoOAzQZv2LEutd8fe92glLiDsoyoN3\"\n    },\n    data: data\n};\naxios(config).then(function(response) {\n    console.log(JSON.stringify(response.data));\n}).catch(function(error) {\n    console.log(error);\n});\nfunction home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"home\"\n    }, void 0, false, {\n        fileName: \"/Users/zeeshansalim/Desktop/nike/src/pages/home.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDekIsTUFBTUMsUUFBUUMsbUJBQU9BLENBQUM7QUFFdEIsSUFBSUMsT0FBT0MsS0FBS0MsU0FBUyxDQUFDO0lBQ3RCLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7UUFDVixPQUFPO0lBQ1g7QUFDSjtBQUVBLElBQUlDLFNBQVM7SUFDVEMsUUFBUTtJQUNSQyxLQUFLO0lBQ0xDLFNBQVM7UUFDUCxnQkFBZ0I7UUFDaEIsa0NBQWtDO1FBQ2xDLFdBQVc7SUFDYjtJQUNBTixNQUFNQTtBQUNWO0FBRUFGLE1BQU1LLFFBQ0RJLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7SUFDdEJDLFFBQVFDLEdBQUcsQ0FBQ1QsS0FBS0MsU0FBUyxDQUFDTSxTQUFTUixJQUFJO0FBQzVDLEdBQ0NXLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7SUFDcEJILFFBQVFDLEdBQUcsQ0FBQ0U7QUFDaEI7QUFFSixTQUFTQyxPQUFPO0lBQ1oscUJBQ0ksOERBQUNDO2tCQUFJOzs7Ozs7QUFFYjtBQUVBLGlFQUFlRCxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmlrZS8uL3NyYy9wYWdlcy9ob21lLmpzPzBiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcImNvbGxlY3Rpb25cIjogXCJwcm9kdWN0c1wiLFxuICAgIFwiZGF0YWJhc2VcIjogXCJuaWtlXCIsXG4gICAgXCJkYXRhU291cmNlXCI6IFwibmlrZS1wcm9kdWN0c1wiLFxuICAgIFwicHJvamVjdGlvblwiOiB7XG4gICAgICAgIFwiX2lkXCI6IDFcbiAgICB9XG59KTtcbiAgICAgICAgICAgIFxudmFyIGNvbmZpZyA9IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICdodHRwczovL2FwLXNvdXRoLTEuYXdzLmRhdGEubW9uZ29kYi1hcGkuY29tL2FwcC9kYXRhLWJjaHdrL2VuZHBvaW50L2RhdGEvdjEvYWN0aW9uL2ZpbmRPbmUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJzogJycsXG4gICAgICAnYXBpLWtleSc6ICd5OVdXVmFXNFdTZEtDZDRjMGJDbWlSdU9HZHFPQUVZeGRQSG9PQXpRWnYyTEV1dGQ4ZmU5MmdsTGlEc295b04zJyxcbiAgICB9LFxuICAgIGRhdGE6IGRhdGFcbn07XG4gICAgICAgICAgICBcbmF4aW9zKGNvbmZpZylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5ob21lPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJyZXF1aXJlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJob21lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/home.js"));
module.exports = __webpack_exports__;

})();