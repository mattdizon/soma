"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/LaunchPad.tsx":
/*!********************************************!*\
  !*** ./src/pages/components/LaunchPad.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LaunchPad: function() { return /* binding */ LaunchPad; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LaunchPad = (param)=>{\n    let { launchpad } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-md rounded-lg p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-semibold mb-2\",\n                children: launchpad.full_name\n            }, void 0, false, {\n                fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Location:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 47\n                    }, undefined),\n                    \" \",\n                    launchpad.location.name,\n                    \", \",\n                    launchpad.location.region\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Status:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 47\n                    }, undefined),\n                    \" \",\n                    launchpad.status\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Launch Attempts:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 47\n                    }, undefined),\n                    \" \",\n                    launchpad.launch_attempts\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Launch Successes:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 47\n                    }, undefined),\n                    \" \",\n                    launchpad.launch_successes\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Details:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 42\n                    }, undefined),\n                    \" \",\n                    launchpad.details\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, launchpad.id, true, {\n        fileName: \"/Users/matthewdizon/Desktop/soma/src/pages/components/LaunchPad.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_c = LaunchPad;\nvar _c;\n$RefreshReg$(_c, \"LaunchPad\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9MYXVuY2hQYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFnQk8sTUFBTUEsWUFBWTtRQUFDLEVBQUNDLFNBQVMsRUFBNkI7SUFDN0QscUJBQ0ksOERBQUNDO1FBQXVCQyxXQUFVOzswQkFDOUIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE4QkYsVUFBVUksU0FBUzs7Ozs7OzBCQUMvRCw4REFBQ0M7Z0JBQUVILFdBQVU7O2tDQUFxQiw4REFBQ0k7a0NBQU87Ozs7OztvQkFBa0I7b0JBQUVOLFVBQVVPLFFBQVEsQ0FBQ0MsSUFBSTtvQkFBQztvQkFBR1IsVUFBVU8sUUFBUSxDQUFDRSxNQUFNOzs7Ozs7OzBCQUNsSCw4REFBQ0o7Z0JBQUVILFdBQVU7O2tDQUFxQiw4REFBQ0k7a0NBQU87Ozs7OztvQkFBZ0I7b0JBQUVOLFVBQVVVLE1BQU07Ozs7Ozs7MEJBQzVFLDhEQUFDTDtnQkFBRUgsV0FBVTs7a0NBQXFCLDhEQUFDSTtrQ0FBTzs7Ozs7O29CQUF5QjtvQkFBRU4sVUFBVVcsZUFBZTs7Ozs7OzswQkFDOUYsOERBQUNOO2dCQUFFSCxXQUFVOztrQ0FBcUIsOERBQUNJO2tDQUFPOzs7Ozs7b0JBQTBCO29CQUFFTixVQUFVWSxnQkFBZ0I7Ozs7Ozs7MEJBQ2hHLDhEQUFDUDtnQkFBRUgsV0FBVTs7a0NBQWdCLDhEQUFDSTtrQ0FBTzs7Ozs7O29CQUFpQjtvQkFBRU4sVUFBVWEsT0FBTzs7Ozs7Ozs7T0FObkViLFVBQVVjLEVBQUU7Ozs7O0FBUzlCLEVBQUM7S0FYWWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvTGF1bmNoUGFkLnRzeD85ZmMzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgTG9jYXRpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG59XG5leHBvcnQgdHlwZSBMYXVuY2hQYWRUeXBlID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZnVsbF9uYW1lOiBzdHJpbmc7XG4gICAgbG9jYXRpb246IExvY2F0aW9uO1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIGxhdW5jaF9hdHRlbXB0czogbnVtYmVyO1xuICAgIGxhdW5jaF9zdWNjZXNzZXM6IG51bWJlcjtcbiAgICBkZXRhaWxzOiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgTGF1bmNoUGFkID0gKHtsYXVuY2hwYWR9OiB7bGF1bmNocGFkOiBMYXVuY2hQYWRUeXBlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtsYXVuY2hwYWQuaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+e2xhdW5jaHBhZC5mdWxsX25hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPjxzdHJvbmc+TG9jYXRpb246PC9zdHJvbmc+IHtsYXVuY2hwYWQubG9jYXRpb24ubmFtZX0sIHtsYXVuY2hwYWQubG9jYXRpb24ucmVnaW9ufTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPjxzdHJvbmc+U3RhdHVzOjwvc3Ryb25nPiB7bGF1bmNocGFkLnN0YXR1c308L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTRcIj48c3Ryb25nPkxhdW5jaCBBdHRlbXB0czo8L3N0cm9uZz4ge2xhdW5jaHBhZC5sYXVuY2hfYXR0ZW1wdHN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+PHN0cm9uZz5MYXVuY2ggU3VjY2Vzc2VzOjwvc3Ryb25nPiB7bGF1bmNocGFkLmxhdW5jaF9zdWNjZXNzZXN9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPjxzdHJvbmc+RGV0YWlsczo8L3N0cm9uZz4ge2xhdW5jaHBhZC5kZXRhaWxzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMYXVuY2hQYWQiLCJsYXVuY2hwYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZ1bGxfbmFtZSIsInAiLCJzdHJvbmciLCJsb2NhdGlvbiIsIm5hbWUiLCJyZWdpb24iLCJzdGF0dXMiLCJsYXVuY2hfYXR0ZW1wdHMiLCJsYXVuY2hfc3VjY2Vzc2VzIiwiZGV0YWlscyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/LaunchPad.tsx\n"));

/***/ })

});