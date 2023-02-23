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
exports.id = "pages/addNums";
exports.ids = ["pages/addNums"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZV9zaGFyZV9hcHAvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzI1NGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwiY2VudGVyXCI6IFwiSG9tZV9jZW50ZXJfXzRCRmdDXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIixcblx0XCJ0aGlydGVlblwiOiBcIkhvbWVfdGhpcnRlZW5fX2NNSV9rXCIsXG5cdFwicm90YXRlXCI6IFwiSG9tZV9yb3RhdGVfX19fWHNJXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fWnkwMlhcIixcblx0XCJ2ZXJjZWxMb2dvXCI6IFwiSG9tZV92ZXJjZWxMb2dvX19kdFNrOVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/addNums.js":
/*!**************************!*\
  !*** ./pages/addNums.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sum)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.utils */ \"./pages/math.utils.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Sum() {\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const newSum = (0,_math_utils__WEBPACK_IMPORTED_MODULE_2__.sum)(num1, num2);\n        setSum(newSum);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().denscription),\n                        children: [\n                            \"Number 1:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num1,\n                                onChange: (e)=>setNum1(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                        children: [\n                            \"Number 2:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num2,\n                                onChange: (e)=>setNum2(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Calculate Sum\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().thirteen),\n                children: sum\n            }, void 0, false, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                lineNumber: 35,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGROdW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUtNQTtBQUwyQjtBQUNZO0FBRUE7QUFLOUIsU0FBU0ssTUFBTTtJQUM1QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0MsS0FBS1EsT0FBTyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQixNQUFNVSxlQUFlLENBQUNDLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsU0FBU1gsZ0RBQVFBLENBQUNHLE1BQU1FO1FBQzlCRSxPQUFPSTtJQUNUO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdaLHFFQUFXOzswQkFDekIsOERBQUNjO2dCQUFLQyxVQUFVUjs7a0NBQ2QsOERBQUNTO3dCQUFNSixXQUFXWiw2RUFBbUI7OzRCQUFFOzBDQUVyQyw4REFBQ2tCO2dDQUFNQyxNQUFLO2dDQUFTQyxPQUFPbEI7Z0NBQU1tQixVQUFVLENBQUNiLElBQU1MLFFBQVFtQixTQUFTZCxFQUFFZSxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFcEYsOERBQUNJOzs7OztrQ0FDRCw4REFBQ1I7d0JBQU1KLFdBQVdaLDRFQUFrQjs7NEJBQUU7MENBRXBDLDhEQUFDa0I7Z0NBQU1DLE1BQUs7Z0NBQVNDLE9BQU9oQjtnQ0FBTWlCLFVBQVUsQ0FBQ2IsSUFBTUgsUUFBUWlCLFNBQVNkLEVBQUVlLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUVwRiw4REFBQ0k7Ozs7O2tDQUNELDhEQUFDRTt3QkFBT1AsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ1E7Z0JBQUVmLFdBQVdaLHlFQUFlOzBCQUFHRjs7Ozs7Ozs7Ozs7O0FBR3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZV9zaGFyZV9hcHAvLi9wYWdlcy9hZGROdW1zLmpzPzQ0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3N1bSBhcyBhZGRpdGlvbn0gZnJvbSAnLi9tYXRoLnV0aWxzJztcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW0oKSB7XG4gIGNvbnN0IFtudW0xLCBzZXROdW0xXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3N1bSwgc2V0U3VtXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1N1bSA9IGFkZGl0aW9uKG51bTEsIG51bTIpXG4gICAgc2V0U3VtKG5ld1N1bSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5kZW5zY3JpcHRpb259PlxuICAgICAgICAgIE51bWJlciAxOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e251bTF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtMShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBOdW1iZXIgMjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW0yfSBvbkNoYW5nZT17KGUpID0+IHNldE51bTIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNhbGN1bGF0ZSBTdW08L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHs8cCBjbGFzc05hbWU9e3N0eWxlcy50aGlydGVlbn0+e3N1bX08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlU3RhdGUiLCJzdW0iLCJhZGRpdGlvbiIsInN0eWxlcyIsIlN1bSIsIm51bTEiLCJzZXROdW0xIiwibnVtMiIsInNldE51bTIiLCJzZXRTdW0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdTdW0iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJkZW5zY3JpcHRpb24iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJiciIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwicCIsInRoaXJ0ZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/addNums.js\n");

/***/ }),

/***/ "./pages/math.utils.js":
/*!*****************************!*\
  !*** ./pages/math.utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\nfunction sum(num1, num2) {\n    return num1 + num2;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYXRoLnV0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxJQUFJQyxJQUFJLEVBQUVDLElBQUksRUFBRTtJQUM5QixPQUFPRCxPQUFPQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R5bGVfc2hhcmVfYXBwLy4vcGFnZXMvbWF0aC51dGlscy5qcz83OGUyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzdW0obnVtMSwgbnVtMikge1xuICByZXR1cm4gbnVtMSArIG51bTI7XG59XG4iXSwibmFtZXMiOlsic3VtIiwibnVtMSIsIm51bTIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/math.utils.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/addNums.js"));
module.exports = __webpack_exports__;

})();