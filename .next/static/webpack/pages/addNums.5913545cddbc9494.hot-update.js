"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addNums",{

/***/ "./pages/addNums.js":
/*!**************************!*\
  !*** ./pages/addNums.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sum; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.utils */ \"./pages/math.utils.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Sum() {\n    _s();\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const newSum = (0,_math_utils__WEBPACK_IMPORTED_MODULE_2__.sum)(num1, num2);\n        setSum(newSum);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                    children: [\n                        \"Number 1:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            value: num1,\n                            onChange: (e)=>setNum1(parseInt(e.target.value))\n                        }, void 0, false, {\n                            fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                    children: [\n                        \"Number 2:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            value: num2,\n                            onChange: (e)=>setNum2(parseInt(e.target.value))\n                        }, void 0, false, {\n                            fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2\",\n                    type: \"submit\",\n                    children: \"Calculate Sum\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-1\",\n                    children: sum\n                }, void 0, false, {\n                    fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n                    lineNumber: 34,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/addNums.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Sum, \"VRx8mLFV+KlTkAKKmG5b5dXnamQ=\");\n_c = Sum;\nvar _c;\n$RefreshReg$(_c, \"Sum\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGROdW1zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLTUE7QUFMMkI7QUFDWTtBQUVBO0FBSzlCLFNBQVNLLE1BQU07O0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDQyxLQUFLUSxPQUFPLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9CLE1BQU1VLGVBQWUsQ0FBQ0MsSUFBTTtRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxTQUFTWCxnREFBUUEsQ0FBQ0csTUFBTUU7UUFDOUJFLE9BQU9JO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1oscUVBQVc7a0JBQ3pCLDRFQUFDYztZQUFLQyxVQUFVUjs7OEJBQ2QsOERBQUNTO29CQUFNSixXQUFXWiw0RUFBa0I7O3dCQUFFO3NDQUVwQyw4REFBQ2tCOzRCQUFNQyxNQUFLOzRCQUFTQyxPQUFPbEI7NEJBQU1tQixVQUFVLENBQUNiLElBQU1MLFFBQVFtQixTQUFTZCxFQUFFZSxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFcEYsOERBQUNJOzs7Ozs4QkFDRCw4REFBQ1I7b0JBQU1KLFdBQVdaLDRFQUFrQjs7d0JBQUU7c0NBRXBDLDhEQUFDa0I7NEJBQU1DLE1BQUs7NEJBQVNDLE9BQU9oQjs0QkFBTWlCLFVBQVUsQ0FBQ2IsSUFBTUgsUUFBUWlCLFNBQVNkLEVBQUVlLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUVwRiw4REFBQ0k7Ozs7OzhCQUNELDhEQUFDQztvQkFBT2IsV0FBVTtvQkFBZ09PLE1BQUs7OEJBQVM7Ozs7Ozs4QkFDL1AsOERBQUNPO29CQUFFZCxXQUFVOzhCQUFRZDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUIsQ0FBQztHQTlCdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkZE51bXMuanM/NDQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7c3VtIGFzIGFkZGl0aW9ufSBmcm9tICcuL21hdGgudXRpbHMnO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bSgpIHtcbiAgY29uc3QgW251bTEsIHNldE51bTFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtudW0yLCBzZXROdW0yXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3VtLCBzZXRTdW1dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3U3VtID0gYWRkaXRpb24obnVtMSwgbnVtMilcbiAgICBzZXRTdW0obmV3U3VtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBOdW1iZXIgMTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtudW0xfSBvbkNoYW5nZT17KGUpID0+IHNldE51bTEocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgTnVtYmVyIDI6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bnVtMn0gb25DaGFuZ2U9eyhlKSA9PiBzZXROdW0yKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMSB0ZXh0LXNtIHRleHQtcHVycGxlLTYwMCBmb250LXNlbWlib2xkIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXB1cnBsZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1wdXJwbGUtNjAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9mZnNldC0yXCIgdHlwZT1cInN1Ym1pdFwiPkNhbGN1bGF0ZSBTdW08L2J1dHRvbj5cbiAgICAgICAgezxwIGNsYXNzTmFtZT0nbXQtMSc+e3N1bX08L3A+fVxuICAgICAgPC9mb3JtPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VTdGF0ZSIsInN1bSIsImFkZGl0aW9uIiwic3R5bGVzIiwiU3VtIiwibnVtMSIsInNldE51bTEiLCJudW0yIiwic2V0TnVtMiIsInNldFN1bSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1N1bSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiYnIiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/addNums.js\n"));

/***/ })

});