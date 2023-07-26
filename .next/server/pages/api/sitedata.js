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
exports.id = "pages/api/sitedata";
exports.ids = ["pages/api/sitedata"];
exports.modules = {

/***/ "@upstash/redis":
/*!*********************************!*\
  !*** external "@upstash/redis" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@upstash/redis");;

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchRedisFormState: () => (/* binding */ fetchRedisFormState),\n/* harmony export */   persistRedisFormState: () => (/* binding */ persistRedisFormState)\n/* harmony export */ });\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/redis */ \"@upstash/redis\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ \"(api)/./utils/constants.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_upstash_redis__WEBPACK_IMPORTED_MODULE_0__]);\n_upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// See documentation at\n// https://docs.upstash.com/redis/sdks/javascriptsdk/getstarted#basic-usage\nconst redis = new _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis({\n    url: process.env.REDIS_URL,\n    token: process.env.REDIS_TOKEN,\n    retry: {\n        retries: 5,\n        backoff: (retryCount)=>Math.exp(retryCount) * 50\n    }\n});\nconst fetchRedisFormState = async ()=>{\n    const formData = await redis.get(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.REDIS_SITE_DATA_KEY);\n    return formData ?? {};\n};\nconst persistRedisFormState = async (formState)=>{\n    return await redis.set(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.REDIS_SITE_DATA_KEY, JSON.stringify(formState));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redis);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFFa0I7QUFFekQsdUJBQXVCO0FBQ3ZCLDJFQUEyRTtBQUMzRSxNQUFNRSxRQUFRLElBQUlGLGlEQUFLQSxDQUFDO0lBQ3RCRyxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDMUJDLE9BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csV0FBVztJQUM5QkMsT0FBTztRQUNMQyxTQUFTO1FBQ1RDLFNBQVMsQ0FBQ0MsYUFBZUMsS0FBS0MsR0FBRyxDQUFDRixjQUFjO0lBQ2xEO0FBQ0Y7QUFFTyxNQUFNRyxzQkFBc0I7SUFDakMsTUFBTUMsV0FBVyxNQUFNZCxNQUFNZSxHQUFHLENBQUNoQixpRUFBbUJBO0lBQ3BELE9BQU9lLFlBQVksQ0FBQztBQUN0QixFQUFFO0FBRUssTUFBTUUsd0JBQXdCLE9BQU9DO0lBQzFDLE9BQU8sTUFBTWpCLE1BQU1rQixHQUFHLENBQUNuQixpRUFBbUJBLEVBQUVvQixLQUFLQyxTQUFTLENBQUNIO0FBQzdELEVBQUU7QUFFRixpRUFBZWpCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uLWNoYWxsZW5nZS1lZGl0b3IvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcyB9IGZyb20gXCJAdXBzdGFzaC9yZWRpc1wiO1xuaW1wb3J0IHsgRm9ybVN0YXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IHsgUkVESVNfU0lURV9EQVRBX0tFWSB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcblxuLy8gU2VlIGRvY3VtZW50YXRpb24gYXRcbi8vIGh0dHBzOi8vZG9jcy51cHN0YXNoLmNvbS9yZWRpcy9zZGtzL2phdmFzY3JpcHRzZGsvZ2V0c3RhcnRlZCNiYXNpYy11c2FnZVxuY29uc3QgcmVkaXMgPSBuZXcgUmVkaXMoe1xuICB1cmw6IHByb2Nlc3MuZW52LlJFRElTX1VSTCxcbiAgdG9rZW46IHByb2Nlc3MuZW52LlJFRElTX1RPS0VOLFxuICByZXRyeToge1xuICAgIHJldHJpZXM6IDUsXG4gICAgYmFja29mZjogKHJldHJ5Q291bnQpID0+IE1hdGguZXhwKHJldHJ5Q291bnQpICogNTAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUmVkaXNGb3JtU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVkaXMuZ2V0KFJFRElTX1NJVEVfREFUQV9LRVkpO1xuICByZXR1cm4gZm9ybURhdGEgPz8ge307XG59O1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdFJlZGlzRm9ybVN0YXRlID0gYXN5bmMgKGZvcm1TdGF0ZTogRm9ybVN0YXRlKSA9PiB7XG4gIHJldHVybiBhd2FpdCByZWRpcy5zZXQoUkVESVNfU0lURV9EQVRBX0tFWSwgSlNPTi5zdHJpbmdpZnkoZm9ybVN0YXRlKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcztcbiJdLCJuYW1lcyI6WyJSZWRpcyIsIlJFRElTX1NJVEVfREFUQV9LRVkiLCJyZWRpcyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJSRURJU19VUkwiLCJ0b2tlbiIsIlJFRElTX1RPS0VOIiwicmV0cnkiLCJyZXRyaWVzIiwiYmFja29mZiIsInJldHJ5Q291bnQiLCJNYXRoIiwiZXhwIiwiZmV0Y2hSZWRpc0Zvcm1TdGF0ZSIsImZvcm1EYXRhIiwiZ2V0IiwicGVyc2lzdFJlZGlzRm9ybVN0YXRlIiwiZm9ybVN0YXRlIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/sitedata.ts":
/*!*******************************!*\
  !*** ./pages/api/sitedata.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const formData = req.body;\n        try {\n            await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.persistRedisFormState)(formData);\n            return res.status(200).json(formData);\n        } catch (e) {\n            console.error(e);\n            return res.status(500).json({\n                message: \"Redis provider is unavailable\"\n            });\n        }\n    } else {\n        try {\n            const formData = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.fetchRedisFormState)();\n            return res.status(200).json(formData);\n        } catch (e) {\n            console.error(e);\n            return res.status(500).json({\n                message: \"Redis provider is unavailable\"\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2l0ZWRhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEU7QUFFM0QsZUFBZUUsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxXQUFXSCxJQUFJSSxJQUFJO1FBQ3pCLElBQUk7WUFDRixNQUFNTiw4REFBcUJBLENBQUNLO1lBQzVCLE9BQU9GLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQzlCLEVBQUUsT0FBT0ksR0FBRztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2QsT0FBT04sSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUksU0FBUztZQUFnQztRQUN6RTtJQUNGLE9BQU87UUFDTCxJQUFJO1lBQ0YsTUFBTVAsV0FBVyxNQUFNTiw0REFBbUJBO1lBQzFDLE9BQU9JLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQzlCLEVBQUUsT0FBT0ksR0FBRztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2QsT0FBT04sSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUksU0FBUztZQUFnQztRQUN6RTtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uLWNoYWxsZW5nZS1lZGl0b3IvLi9wYWdlcy9hcGkvc2l0ZWRhdGEudHM/MjA0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGZldGNoUmVkaXNGb3JtU3RhdGUsIHBlcnNpc3RSZWRpc0Zvcm1TdGF0ZSB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwZXJzaXN0UmVkaXNGb3JtU3RhdGUoZm9ybURhdGEpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZvcm1EYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJSZWRpcyBwcm92aWRlciBpcyB1bmF2YWlsYWJsZVwiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCBmZXRjaFJlZGlzRm9ybVN0YXRlKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZm9ybURhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIlJlZGlzIHByb3ZpZGVyIGlzIHVuYXZhaWxhYmxlXCIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmV0Y2hSZWRpc0Zvcm1TdGF0ZSIsInBlcnNpc3RSZWRpc0Zvcm1TdGF0ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmb3JtRGF0YSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sitedata.ts\n");

/***/ }),

/***/ "(api)/./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_SITEDATA_ENDPOINT: () => (/* binding */ API_SITEDATA_ENDPOINT),\n/* harmony export */   LOCAL_STORAGE_SITEDATA_KEY: () => (/* binding */ LOCAL_STORAGE_SITEDATA_KEY),\n/* harmony export */   REDIS_PREFIX: () => (/* binding */ REDIS_PREFIX),\n/* harmony export */   REDIS_SITE_DATA_KEY: () => (/* binding */ REDIS_SITE_DATA_KEY)\n/* harmony export */ });\nconst API_SITEDATA_ENDPOINT = \"sitedata\";\nconst LOCAL_STORAGE_SITEDATA_KEY = \"local_storage_sitedata\";\nconst REDIS_PREFIX = \"diego_blaer\";\nconst REDIS_SITE_DATA_KEY = `${REDIS_PREFIX}_site_data`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25zdGFudHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLHdCQUF3QixXQUFXO0FBQ3pDLE1BQU1DLDZCQUE2Qix5QkFBeUI7QUFDNUQsTUFBTUMsZUFBZSxjQUFjO0FBQ25DLE1BQU1DLHNCQUFzQixDQUFDLEVBQUVELGFBQWEsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uLWNoYWxsZW5nZS1lZGl0b3IvLi91dGlscy9jb25zdGFudHMudHM/YTM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1NJVEVEQVRBX0VORFBPSU5UID0gXCJzaXRlZGF0YVwiO1xuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfU0lURURBVEFfS0VZID0gXCJsb2NhbF9zdG9yYWdlX3NpdGVkYXRhXCI7XG5leHBvcnQgY29uc3QgUkVESVNfUFJFRklYID0gXCJkaWVnb19ibGFlclwiO1xuZXhwb3J0IGNvbnN0IFJFRElTX1NJVEVfREFUQV9LRVkgPSBgJHtSRURJU19QUkVGSVh9X3NpdGVfZGF0YWA7XG4iXSwibmFtZXMiOlsiQVBJX1NJVEVEQVRBX0VORFBPSU5UIiwiTE9DQUxfU1RPUkFHRV9TSVRFREFUQV9LRVkiLCJSRURJU19QUkVGSVgiLCJSRURJU19TSVRFX0RBVEFfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/constants.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sitedata.ts"));
module.exports = __webpack_exports__;

})();