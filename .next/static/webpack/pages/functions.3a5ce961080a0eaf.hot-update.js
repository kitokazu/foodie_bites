"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/functions",{

/***/ "./pages/functions.js":
/*!****************************!*\
  !*** ./pages/functions.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sum; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sum */ \"./pages/sum.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Sum() {\n    _s();\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const add = ()=>{\n        const newSum = sum(num1, num2);\n        setSum(newSum);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        add();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Number 1:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num1,\n                                onChange: (e)=>setNum1(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Number 2:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num2,\n                                onChange: (e)=>setNum2(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Calculate Sum\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: sum\n            }, void 0, false, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                lineNumber: 34,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Sum, \"VRx8mLFV+KlTkAKKmG5b5dXnamQ=\");\n_c = Sum;\nvar _c;\n$RefreshReg$(_c, \"Sum\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mdW5jdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDQztBQUVuQixTQUFTRyxNQUFNOztJQUM1QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0MsS0FBS08sT0FBTyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQixNQUFNRSxNQUFNLElBQU07UUFDaEIsTUFBTU8sU0FBU1IsSUFBSUcsTUFBTUU7UUFDekJFLE9BQU9DO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJWO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7OzBCQUNDLDhEQUFDQztnQkFBS0MsVUFBVUw7O2tDQUNkLDhEQUFDTTs7NEJBQU07MENBRUwsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFTQyxPQUFPZjtnQ0FBTWdCLFVBQVUsQ0FBQ1QsSUFBTU4sUUFBUWdCLFNBQVNWLEVBQUVXLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUVwRiw4REFBQ0k7Ozs7O2tDQUNELDhEQUFDUDs7NEJBQU07MENBRUwsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFTQyxPQUFPYjtnQ0FBTWMsVUFBVSxDQUFDVCxJQUFNSixRQUFRYyxTQUFTVixFQUFFVyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFcEYsOERBQUNJOzs7OztrQ0FDRCw4REFBQ0M7d0JBQU9OLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OzswQkFFdkIsOERBQUNPOzBCQUFHeEI7Ozs7Ozs7Ozs7OztBQUdYLENBQUM7R0FqQ3VCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mdW5jdGlvbnMuanM/Mjg0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN1bSBhcyBhZGR9IGZyb20gJy4vc3VtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VtKCkge1xuICBjb25zdCBbbnVtMSwgc2V0TnVtMV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW251bTIsIHNldE51bTJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdW0sIHNldFN1bV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3U3VtID0gc3VtKG51bTEsIG51bTIpO1xuICAgIHNldFN1bShuZXdTdW0pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOdW1iZXIgMTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW0xfSBvbkNoYW5nZT17KGUpID0+IHNldE51bTEocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOdW1iZXIgMjpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW0yfSBvbkNoYW5nZT17KGUpID0+IHNldE51bTIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNhbGN1bGF0ZSBTdW08L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHs8cD57c3VtfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdW0iLCJhZGQiLCJTdW0iLCJudW0xIiwic2V0TnVtMSIsIm51bTIiLCJzZXROdW0yIiwic2V0U3VtIiwibmV3U3VtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJiciIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/functions.js\n"));

/***/ })

});