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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": function() { return /* binding */ add; },\n/* harmony export */   \"default\": function() { return /* binding */ Sum; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst add = (n1, n2)=>{\n    const newSum = n1 + n2;\n    return newSum;\n};\nfunction Sum() {\n    _s();\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [sum, setSum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const add = ()=>{\n        const newSum = num1 + num2;\n        setSum(newSum);\n        return newSum;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        add();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Number 1:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num1,\n                                onChange: (e)=>setNum1(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Number 2:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: num2,\n                                onChange: (e)=>setNum2(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Calculate Sum\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: sum\n            }, void 0, false, {\n                fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n                lineNumber: 39,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaiit/Documents/SE 498/style_share_app/pages/functions.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Sum, \"VRx8mLFV+KlTkAKKmG5b5dXnamQ=\");\n_c = Sum;\nvar _c;\n$RefreshReg$(_c, \"Sum\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mdW5jdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFFMUIsTUFBTUMsTUFBTSxDQUFDQyxJQUFJQyxLQUFPO0lBQzdCLE1BQU1DLFNBQVNGLEtBQUtDO0lBQ3BCLE9BQU9DO0FBQ1QsRUFBQztBQUVjLFNBQVNDLE1BQU07O0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxLQUFLQyxPQUFPLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9CLE1BQU1DLE1BQU0sSUFBTTtRQUNoQixNQUFNRyxTQUFTRSxPQUFPRTtRQUN0QkcsT0FBT1A7UUFDUCxPQUFPQTtJQUNUO0lBRUEsTUFBTVEsZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjOzswQkFDQyw4REFBQ0M7Z0JBQUtDLFVBQVVMOztrQ0FDZCw4REFBQ007OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBU0MsT0FBT2Y7Z0NBQU1nQixVQUFVLENBQUNULElBQU1OLFFBQVFnQixTQUFTVixFQUFFVyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFcEYsOERBQUNJOzs7OztrQ0FDRCw4REFBQ1A7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBU0MsT0FBT2I7Z0NBQU1jLFVBQVUsQ0FBQ1QsSUFBTUosUUFBUWMsU0FBU1YsRUFBRVcsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRXBGLDhEQUFDSTs7Ozs7a0NBQ0QsOERBQUNDO3dCQUFPTixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXZCLDhEQUFDTzswQkFBR2pCOzs7Ozs7Ozs7Ozs7QUFHWCxDQUFDO0dBbEN1Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnVuY3Rpb25zLmpzPzI4NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSAobjEsIG4yKSA9PiB7XG4gIGNvbnN0IG5ld1N1bSA9IG4xICsgbjI7XG4gIHJldHVybiBuZXdTdW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bSgpIHtcbiAgY29uc3QgW251bTEsIHNldE51bTFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtudW0yLCBzZXROdW0yXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3VtLCBzZXRTdW1dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1N1bSA9IG51bTEgKyBudW0yO1xuICAgIHNldFN1bShuZXdTdW0pO1xuICAgIHJldHVybiBuZXdTdW07XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE51bWJlciAxOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e251bTF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtMShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE51bWJlciAyOlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e251bTJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtMihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2FsY3VsYXRlIFN1bTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgezxwPntzdW19PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFkZCIsIm4xIiwibjIiLCJuZXdTdW0iLCJTdW0iLCJudW0xIiwic2V0TnVtMSIsIm51bTIiLCJzZXROdW0yIiwic3VtIiwic2V0U3VtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJiciIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/functions.js\n"));

/***/ })

});