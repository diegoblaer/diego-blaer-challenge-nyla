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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLocalFormState: function() { return /* binding */ useLocalFormState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.ts\");\n\n\nconst useLocalFormState = (formState)=>{\n    const [localFormState, setLocalFormState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formState);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (formState === null) {\n            setLocalFormState(getLocalFormState());\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        saveLocalFormState(localFormState);\n    }, [\n        localFormState\n    ]);\n    const getLocalFormState = ()=>{\n        const formState = JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_SITEDATA_KEY));\n        return formState !== null && formState !== void 0 ? formState : {};\n    };\n    const saveLocalFormState = (formState)=>{\n        localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_SITEDATA_KEY, JSON.stringify(formState));\n    };\n    return {\n        localFormState,\n        setLocalFormState\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbEZvcm1TdGF0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBRW9CO0FBRXpELE1BQU1HLG9CQUFvQixDQUFDQztJQUNoQyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDRztJQUVyREosZ0RBQVNBLENBQUM7UUFDUixJQUFJSSxjQUFjLE1BQU07WUFDdEJFLGtCQUFrQkM7UUFDcEI7SUFDRixHQUFHLEVBQUU7SUFFTFAsZ0RBQVNBLENBQUM7UUFDUlEsbUJBQW1CSDtJQUNyQixHQUFHO1FBQUNBO0tBQWU7SUFFbkIsTUFBTUUsb0JBQW9CO1FBQ3hCLE1BQU1ILFlBQVlLLEtBQUtDLEtBQUssQ0FDMUJDLGFBQWFDLE9BQU8sQ0FBQ1Ysd0VBQTBCQTtRQUVqRCxPQUFPRSxzQkFBQUEsdUJBQUFBLFlBQWEsQ0FBQztJQUN2QjtJQUVBLE1BQU1JLHFCQUFxQixDQUFDSjtRQUMxQk8sYUFBYUUsT0FBTyxDQUFDWCx3RUFBMEJBLEVBQUVPLEtBQUtLLFNBQVMsQ0FBQ1Y7SUFDbEU7SUFFQSxPQUFPO1FBQUVDO1FBQWdCQztJQUFrQjtBQUM3QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUxvY2FsRm9ybVN0YXRlLnRzPzNmNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybVN0YXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IHsgTE9DQUxfU1RPUkFHRV9TSVRFREFUQV9LRVkgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhbEZvcm1TdGF0ZSA9IChmb3JtU3RhdGU6IEZvcm1TdGF0ZSkgPT4ge1xuICBjb25zdCBbbG9jYWxGb3JtU3RhdGUsIHNldExvY2FsRm9ybVN0YXRlXSA9IHVzZVN0YXRlKGZvcm1TdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9ybVN0YXRlID09PSBudWxsKSB7XG4gICAgICBzZXRMb2NhbEZvcm1TdGF0ZShnZXRMb2NhbEZvcm1TdGF0ZSgpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVMb2NhbEZvcm1TdGF0ZShsb2NhbEZvcm1TdGF0ZSk7XG4gIH0sIFtsb2NhbEZvcm1TdGF0ZV0pO1xuXG4gIGNvbnN0IGdldExvY2FsRm9ybVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1TdGF0ZSA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NJVEVEQVRBX0tFWSlcbiAgICApO1xuICAgIHJldHVybiBmb3JtU3RhdGUgPz8ge307XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUxvY2FsRm9ybVN0YXRlID0gKGZvcm1TdGF0ZTogRm9ybVN0YXRlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9TSVRFREFUQV9LRVksIEpTT04uc3RyaW5naWZ5KGZvcm1TdGF0ZSkpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvY2FsRm9ybVN0YXRlLCBzZXRMb2NhbEZvcm1TdGF0ZSB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxPQ0FMX1NUT1JBR0VfU0lURURBVEFfS0VZIiwidXNlTG9jYWxGb3JtU3RhdGUiLCJmb3JtU3RhdGUiLCJsb2NhbEZvcm1TdGF0ZSIsInNldExvY2FsRm9ybVN0YXRlIiwiZ2V0TG9jYWxGb3JtU3RhdGUiLCJzYXZlTG9jYWxGb3JtU3RhdGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useLocalFormState.ts\n"));

/***/ })

});