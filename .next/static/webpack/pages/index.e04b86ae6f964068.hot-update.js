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

/***/ "./hooks/useLocalFormState.ts":
/*!************************************!*\
  !*** ./hooks/useLocalFormState.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLocalFormState: function() { return /* binding */ useLocalFormState; }\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.ts\");\n\nconst useLocalFormState = ()=>{\n    const getLocalFormState = ()=>{\n        if (false) {}\n        const formState = JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SITEDATA_KEY));\n        return formState !== null && formState !== void 0 ? formState : {};\n    };\n    const saveLocalFormState = (formState)=>{\n        localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SITEDATA_KEY, JSON.stringify(formState));\n    };\n    return {\n        getLocalFormState,\n        saveLocalFormState\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbEZvcm1TdGF0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUNnRTtBQUV6RCxNQUFNQyxvQkFBb0I7SUFDL0IsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUksS0FBcUQsRUFBRSxFQUFVO1FBQ3JFLE1BQU1HLFlBQVlDLEtBQUtDLEtBQUssQ0FDMUJILGFBQWFJLE9BQU8sQ0FBQ1Isd0VBQTBCQTtRQUVqRCxPQUFPSyxzQkFBQUEsdUJBQUFBLFlBQWEsQ0FBQztJQUN2QjtJQUVBLE1BQU1JLHFCQUFxQixDQUFDSjtRQUMxQkQsYUFBYU0sT0FBTyxDQUFDVix3RUFBMEJBLEVBQUVNLEtBQUtLLFNBQVMsQ0FBQ047SUFDbEU7SUFFQSxPQUFPO1FBQUVIO1FBQW1CTztJQUFtQjtBQUNqRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUxvY2FsRm9ybVN0YXRlLnRzPzNmNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybVN0YXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IHsgTE9DQUxfU1RPUkFHRV9TSVRFREFUQV9LRVkgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhbEZvcm1TdGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgZ2V0TG9jYWxGb3JtU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgJiYgIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHJldHVybiB7fTtcbiAgICBjb25zdCBmb3JtU3RhdGUgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9TSVRFREFUQV9LRVkpXG4gICAgKTtcbiAgICByZXR1cm4gZm9ybVN0YXRlID8/IHt9O1xuICB9O1xuXG4gIGNvbnN0IHNhdmVMb2NhbEZvcm1TdGF0ZSA9IChmb3JtU3RhdGU6IEZvcm1TdGF0ZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0lURURBVEFfS0VZLCBKU09OLnN0cmluZ2lmeShmb3JtU3RhdGUpKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRMb2NhbEZvcm1TdGF0ZSwgc2F2ZUxvY2FsRm9ybVN0YXRlIH07XG59O1xuIl0sIm5hbWVzIjpbIkxPQ0FMX1NUT1JBR0VfU0lURURBVEFfS0VZIiwidXNlTG9jYWxGb3JtU3RhdGUiLCJnZXRMb2NhbEZvcm1TdGF0ZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImZvcm1TdGF0ZSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJzYXZlTG9jYWxGb3JtU3RhdGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useLocalFormState.ts\n"));

/***/ })

});