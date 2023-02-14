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
exports.id = "pages/functions";
exports.ids = ["pages/functions"];
exports.modules = {

/***/ "./pages/functions.js":
/*!****************************!*\
  !*** ./pages/functions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sum)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Sum() {\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const newSum = num1 + num2;\n        setSum(newSum);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Number 1:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num1,\n                                onChange: (e)=>setNum1(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Number 2:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num2,\n                                onChange: (e)=>setNum2(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Calculate Sum\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: sum\n            }, void 0, false, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                lineNumber: 29,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mdW5jdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDLE1BQU07SUFDNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLEtBQUtDLE9BQU8sR0FBR1AsK0NBQVFBLENBQUM7SUFFL0IsTUFBTVEsZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFNBQVNULE9BQU9FO1FBQ3RCRyxPQUFPSTtJQUNUO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUtDLFVBQVVOOztrQ0FDZCw4REFBQ087OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBU0MsT0FBT2hCO2dDQUFNaUIsVUFBVSxDQUFDVixJQUFNTixRQUFRaUIsU0FBU1gsRUFBRVksTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRXBGLDhEQUFDSTs7Ozs7a0NBQ0QsOERBQUNQOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVNDLE9BQU9kO2dDQUFNZSxVQUFVLENBQUNWLElBQU1KLFFBQVFlLFNBQVNYLEVBQUVZLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUVwRiw4REFBQ0k7Ozs7O2tDQUNELDhEQUFDQzt3QkFBT04sTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ087MEJBQUdsQjs7Ozs7Ozs7Ozs7O0FBR1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0eWxlX3NoYXJlX2FwcC8uL3BhZ2VzL2Z1bmN0aW9ucy5qcz8yODRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW0oKSB7XG4gIGNvbnN0IFtudW0xLCBzZXROdW0xXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3N1bSwgc2V0U3VtXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1N1bSA9IG51bTEgKyBudW0yO1xuICAgIHNldFN1bShuZXdTdW0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTnVtYmVyIDE6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bnVtMX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROdW0xKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTnVtYmVyIDI6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bnVtMn0gb25DaGFuZ2U9eyhlKSA9PiBzZXROdW0yKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DYWxjdWxhdGUgU3VtPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7PHA+e3N1bX08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU3VtIiwibnVtMSIsInNldE51bTEiLCJudW0yIiwic2V0TnVtMiIsInN1bSIsInNldFN1bSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1N1bSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiYnIiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/functions.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/functions.js"));
module.exports = __webpack_exports__;

})();