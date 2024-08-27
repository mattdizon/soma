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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"./src/pages/globals.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_trpc__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/matthewdizon/Desktop/temp/soma/src/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_trpc__WEBPACK_IMPORTED_MODULE_1__.trpc.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNxQztBQUNkO0FBRXZCLE1BQU1DLFFBQWlCLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDOUMscUJBQU8sOERBQUNEO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVILDZDQUFJQSxDQUFDSSxRQUFRLENBQUNILE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb21hLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBUeXBlIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdHJwYyB9IGZyb20gJy4uL3V0aWxzL3RycGMnO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xuXG5jb25zdCBNeUFwcDogQXBwVHlwZSA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cnBjLndpdGhUUlBDKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJ0cnBjIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoVFJQQyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trpc: () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trpc/next/ssrPrepass */ \"@trpc/next/ssrPrepass\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__, _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__, _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction getBaseUrl() {\n    if (false) {}\n    if (process.env.VERCEL_URL) {\n        return `https://${process.env.VERCEL_URL}`;\n    }\n    return `http://localhost:${process.env.PORT ?? 3000}`;\n}\nconst trpc = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: getBaseUrl() + \"/api/trpc\"\n                })\n            ]\n        };\n    },\n    ssr: true,\n    ssrPrepass: _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__.ssrPrepass\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0Q7QUFDTztBQUduRCxTQUFTRztJQUNQLElBQUksS0FBa0IsRUFBYSxFQUVsQztJQUVELElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFDNUM7SUFFQSxPQUFPLENBQUMsaUJBQWlCLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN2RDtBQUVPLE1BQU1DLE9BQU9QLDBEQUFjQSxDQUFZO0lBQzVDUTtRQUNFLE9BQU87WUFDTEMsT0FBTztnQkFDTFYsMkRBQWFBLENBQUM7b0JBQ1pXLEtBQUtSLGVBQWU7Z0JBQ3RCO2FBQ0Q7UUFDSDtJQUNGO0lBQ0FTLEtBQUs7SUFDTFYsVUFBVUEsK0RBQUFBO0FBQ1osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbWEvLi9zcmMvdXRpbHMvdHJwYy50cz8xMWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBCYXRjaExpbmsgfSBmcm9tICdAdHJwYy9jbGllbnQnO1xuaW1wb3J0IHsgY3JlYXRlVFJQQ05leHQgfSBmcm9tICdAdHJwYy9uZXh0JztcbmltcG9ydCB7IHNzclByZXBhc3MgfSBmcm9tICdAdHJwYy9uZXh0L3NzclByZXBhc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBSb3V0ZXIgfSBmcm9tICcuLi9wYWdlcy9hcGkvdHJwYy9bdHJwY10nO1xuXG5mdW5jdGlvbiBnZXRCYXNlVXJsKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YDtcbiAgfVxuXG4gIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlQgPz8gMzAwMH1gO1xufVxuXG5leHBvcnQgY29uc3QgdHJwYyA9IGNyZWF0ZVRSUENOZXh0PEFwcFJvdXRlcj4oe1xuICBjb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIGh0dHBCYXRjaExpbmsoe1xuICAgICAgICAgIHVybDogZ2V0QmFzZVVybCgpICsgJy9hcGkvdHJwYycsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBzc3I6IHRydWUsXG4gIHNzclByZXBhc3MsXG59KTtcbiJdLCJuYW1lcyI6WyJodHRwQmF0Y2hMaW5rIiwiY3JlYXRlVFJQQ05leHQiLCJzc3JQcmVwYXNzIiwiZ2V0QmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiUE9SVCIsInRycGMiLCJjb25maWciLCJsaW5rcyIsInVybCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "./src/pages/globals.css":
/*!*******************************!*\
  !*** ./src/pages/globals.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/next");;

/***/ }),

/***/ "@trpc/next/ssrPrepass":
/*!****************************************!*\
  !*** external "@trpc/next/ssrPrepass" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/next/ssrPrepass");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();