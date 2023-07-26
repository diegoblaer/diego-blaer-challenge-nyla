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

/***/ "./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FieldRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldRenderer */ \"./components/FieldRenderer.tsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.ts\");\n/* harmony import */ var _hooks_useLocalFormState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLocalFormState */ \"./hooks/useLocalFormState.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Form = (param)=>{\n    let { schema, data } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const { setLocalFormState } = (0,_hooks_useLocalFormState__WEBPACK_IMPORTED_MODULE_4__.useLocalFormState)(data);\n    const handleInputChange = (event)=>{\n        const { name, value, type } = event.target;\n        const fieldValue = type === \"checkbox\" ? event.target.checked : value;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: fieldValue\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            setLocalFormState(formData);\n            await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.persistFormState)(formData);\n        } catch (e) {\n            console.error(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"space-y-8\",\n        onSubmit: handleSubmit,\n        children: [\n            Object.keys(schema.properties).map((fieldName)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FieldRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    fieldName: fieldName,\n                    schema: schema,\n                    handleInputChange: handleInputChange,\n                    formData: formData\n                }, fieldName, false, {\n                    fileName: \"/Users/diegoblaer/Documents/Playground/diego-blaer-challenge-nyla/components/Form.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/diegoblaer/Documents/Playground/diego-blaer-challenge-nyla/components/Form.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/diegoblaer/Documents/Playground/diego-blaer-challenge-nyla/components/Form.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diegoblaer/Documents/Playground/diego-blaer-challenge-nyla/components/Form.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"j9qNCnFxpkX3+427WxKueb4Bq0A=\", false, function() {\n    return [\n        _hooks_useLocalFormState__WEBPACK_IMPORTED_MODULE_4__.useLocalFormState\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0U7QUFDcEI7QUFFRTtBQUNpQjtBQVMvRCxNQUFNSyxPQUE0QjtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFOztJQUNqRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVlNO0lBQ3BELE1BQU0sRUFBRUcsaUJBQWlCLEVBQUUsR0FBR04sMkVBQWlCQSxDQUFDRztJQUVoRCxNQUFNSSxvQkFBb0IsQ0FDeEJDO1FBRUEsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQUdILE1BQU1JLE1BQU07UUFDMUMsTUFBTUMsYUFDSkYsU0FBUyxhQUFhLE1BQU9DLE1BQU0sQ0FBc0JFLE9BQU8sR0FBR0o7UUFFckVMLFlBQVksQ0FBQ1UsV0FBYztnQkFDekIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDTixLQUFLLEVBQUVJO1lBQ1Y7SUFDRjtJQUVBLE1BQU1HLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGWixrQkFBa0JGO1lBQ2xCLE1BQU1MLDBEQUFnQkEsQ0FBQ0s7UUFDekIsRUFBRSxPQUFPYSxHQUFHO1lBQ1ZFLFFBQVFDLEtBQUssQ0FBQ0g7UUFDaEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFLQyxXQUFVO1FBQVlDLFVBQVVQOztZQUNuQ1EsT0FBT0MsSUFBSSxDQUFDdkIsT0FBT3dCLFVBQVUsRUFBRUMsR0FBRyxDQUFDLENBQUNDLDBCQUNuQyw4REFBQzlCLHNEQUFhQTtvQkFFWjhCLFdBQVdBO29CQUNYMUIsUUFBUUE7b0JBQ1JLLG1CQUFtQkE7b0JBQ25CSCxVQUFVQTttQkFKTHdCOzs7OzswQkFPVCw4REFBQ0M7MEJBQ0MsNEVBQUNDO29CQUNDbkIsTUFBSztvQkFDTFcsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWhETXJCOztRQUUwQkQsdUVBQWlCQTs7O0tBRjNDQztBQWtETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0udHN4P2VlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGRSZW5kZXJlciBmcm9tIFwiLi9GaWVsZFJlbmRlcmVyXCI7XG5pbXBvcnQgdHlwZSB7IFNjaGVtYVR5cGUgfSBmcm9tIFwiLi4vc2NoZW1hL3BhZ2VcIjtcbmltcG9ydCB7IHBlcnNpc3RGb3JtU3RhdGUgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlTG9jYWxGb3JtU3RhdGUgfSBmcm9tIFwiLi4vaG9va3MvdXNlTG9jYWxGb3JtU3RhdGVcIjtcblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIHNjaGVtYTogU2NoZW1hVHlwZTtcbiAgZGF0YTogRm9ybVN0YXRlO1xufVxuXG5leHBvcnQgdHlwZSBGb3JtU3RhdGUgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHsgc2NoZW1hLCBkYXRhIH0pID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtU3RhdGU+KGRhdGEpO1xuICBjb25zdCB7IHNldExvY2FsRm9ybVN0YXRlIH0gPSB1c2VMb2NhbEZvcm1TdGF0ZShkYXRhKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChcbiAgICBldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIHR5cGUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBmaWVsZFZhbHVlID1cbiAgICAgIHR5cGUgPT09IFwiY2hlY2tib3hcIiA/IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA6IHZhbHVlO1xuXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IGZpZWxkVmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9jYWxGb3JtU3RhdGUoZm9ybURhdGEpO1xuICAgICAgYXdhaXQgcGVyc2lzdEZvcm1TdGF0ZShmb3JtRGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LThcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIHtPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykubWFwKChmaWVsZE5hbWUpID0+IChcbiAgICAgICAgPEZpZWxkUmVuZGVyZXJcbiAgICAgICAgICBrZXk9e2ZpZWxkTmFtZX1cbiAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cbiAgICAgICAgICBzY2hlbWE9e3NjaGVtYX1cbiAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpZWxkUmVuZGVyZXIiLCJwZXJzaXN0Rm9ybVN0YXRlIiwidXNlTG9jYWxGb3JtU3RhdGUiLCJGb3JtIiwic2NoZW1hIiwiZGF0YSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJzZXRMb2NhbEZvcm1TdGF0ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwiZmllbGRWYWx1ZSIsImNoZWNrZWQiLCJwcmV2RGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJlcnJvciIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIk9iamVjdCIsImtleXMiLCJwcm9wZXJ0aWVzIiwibWFwIiwiZmllbGROYW1lIiwiZGl2IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form.tsx\n"));

/***/ })

});