/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-dsv/index.js":
/*!**************************************!*\
  !*** ./node_modules/d3-dsv/index.js ***!
  \**************************************/
/*! exports provided: dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatRows, tsvParse, tsvParseRows, tsvFormat, tsvFormatRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/dsv */ \"./node_modules/d3-dsv/src/dsv.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dsvFormat\", function() { return _src_dsv__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/csv */ \"./node_modules/d3-dsv/src/csv.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"csvParse\", function() { return _src_csv__WEBPACK_IMPORTED_MODULE_1__[\"csvParse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"csvParseRows\", function() { return _src_csv__WEBPACK_IMPORTED_MODULE_1__[\"csvParseRows\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"csvFormat\", function() { return _src_csv__WEBPACK_IMPORTED_MODULE_1__[\"csvFormat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"csvFormatRows\", function() { return _src_csv__WEBPACK_IMPORTED_MODULE_1__[\"csvFormatRows\"]; });\n\n/* harmony import */ var _src_tsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/tsv */ \"./node_modules/d3-dsv/src/tsv.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tsvParse\", function() { return _src_tsv__WEBPACK_IMPORTED_MODULE_2__[\"tsvParse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tsvParseRows\", function() { return _src_tsv__WEBPACK_IMPORTED_MODULE_2__[\"tsvParseRows\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tsvFormat\", function() { return _src_tsv__WEBPACK_IMPORTED_MODULE_2__[\"tsvFormat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tsvFormatRows\", function() { return _src_tsv__WEBPACK_IMPORTED_MODULE_2__[\"tsvFormatRows\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-dsv/index.js?");

/***/ }),

/***/ "./node_modules/d3-dsv/src/csv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/csv.js ***!
  \****************************************/
/*! exports provided: csvParse, csvParseRows, csvFormat, csvFormatRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"csvParse\", function() { return csvParse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"csvParseRows\", function() { return csvParseRows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"csvFormat\", function() { return csvFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"csvFormatRows\", function() { return csvFormatRows; });\n/* harmony import */ var _dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv */ \"./node_modules/d3-dsv/src/dsv.js\");\n\n\nvar csv = Object(_dsv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\",\");\n\nvar csvParse = csv.parse;\nvar csvParseRows = csv.parseRows;\nvar csvFormat = csv.format;\nvar csvFormatRows = csv.formatRows;\n\n\n//# sourceURL=webpack:///./node_modules/d3-dsv/src/csv.js?");

/***/ }),

/***/ "./node_modules/d3-dsv/src/dsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/dsv.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar EOL = {},\n    EOF = {},\n    QUOTE = 34,\n    NEWLINE = 10,\n    RETURN = 13;\n\nfunction objectConverter(columns) {\n  return new Function(\"d\", \"return {\" + columns.map(function(name, i) {\n    return JSON.stringify(name) + \": d[\" + i + \"]\";\n  }).join(\",\") + \"}\");\n}\n\nfunction customConverter(columns, f) {\n  var object = objectConverter(columns);\n  return function(row, i) {\n    return f(object(row), i, columns);\n  };\n}\n\n// Compute unique columns in order of discovery.\nfunction inferColumns(rows) {\n  var columnSet = Object.create(null),\n      columns = [];\n\n  rows.forEach(function(row) {\n    for (var column in row) {\n      if (!(column in columnSet)) {\n        columns.push(columnSet[column] = column);\n      }\n    }\n  });\n\n  return columns;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(delimiter) {\n  var reFormat = new RegExp(\"[\\\"\" + delimiter + \"\\n\\r]\"),\n      DELIMITER = delimiter.charCodeAt(0);\n\n  function parse(text, f) {\n    var convert, columns, rows = parseRows(text, function(row, i) {\n      if (convert) return convert(row, i - 1);\n      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);\n    });\n    rows.columns = columns || [];\n    return rows;\n  }\n\n  function parseRows(text, f) {\n    var rows = [], // output rows\n        N = text.length,\n        I = 0, // current character index\n        n = 0, // current line number\n        t, // current token\n        eof = N <= 0, // current token followed by EOF?\n        eol = false; // current token followed by EOL?\n\n    // Strip the trailing newline.\n    if (text.charCodeAt(N - 1) === NEWLINE) --N;\n    if (text.charCodeAt(N - 1) === RETURN) --N;\n\n    function token() {\n      if (eof) return EOF;\n      if (eol) return eol = false, EOL;\n\n      // Unescape quotes.\n      var i, j = I, c;\n      if (text.charCodeAt(j) === QUOTE) {\n        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);\n        if ((i = I) >= N) eof = true;\n        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;\n        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }\n        return text.slice(j + 1, i - 1).replace(/\"\"/g, \"\\\"\");\n      }\n\n      // Find next delimiter or newline.\n      while (I < N) {\n        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;\n        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }\n        else if (c !== DELIMITER) continue;\n        return text.slice(j, i);\n      }\n\n      // Return last token before EOF.\n      return eof = true, text.slice(j, N);\n    }\n\n    while ((t = token()) !== EOF) {\n      var row = [];\n      while (t !== EOL && t !== EOF) row.push(t), t = token();\n      if (f && (row = f(row, n++)) == null) continue;\n      rows.push(row);\n    }\n\n    return rows;\n  }\n\n  function format(rows, columns) {\n    if (columns == null) columns = inferColumns(rows);\n    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {\n      return columns.map(function(column) {\n        return formatValue(row[column]);\n      }).join(delimiter);\n    })).join(\"\\n\");\n  }\n\n  function formatRows(rows) {\n    return rows.map(formatRow).join(\"\\n\");\n  }\n\n  function formatRow(row) {\n    return row.map(formatValue).join(delimiter);\n  }\n\n  function formatValue(text) {\n    return text == null ? \"\"\n        : reFormat.test(text += \"\") ? \"\\\"\" + text.replace(/\"/g, \"\\\"\\\"\") + \"\\\"\"\n        : text;\n  }\n\n  return {\n    parse: parse,\n    parseRows: parseRows,\n    format: format,\n    formatRows: formatRows\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-dsv/src/dsv.js?");

/***/ }),

/***/ "./node_modules/d3-dsv/src/tsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/tsv.js ***!
  \****************************************/
/*! exports provided: tsvParse, tsvParseRows, tsvFormat, tsvFormatRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tsvParse\", function() { return tsvParse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tsvParseRows\", function() { return tsvParseRows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tsvFormat\", function() { return tsvFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tsvFormatRows\", function() { return tsvFormatRows; });\n/* harmony import */ var _dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv */ \"./node_modules/d3-dsv/src/dsv.js\");\n\n\nvar tsv = Object(_dsv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"\\t\");\n\nvar tsvParse = tsv.parse;\nvar tsvParseRows = tsv.parseRows;\nvar tsvFormat = tsv.format;\nvar tsvFormatRows = tsv.formatRows;\n\n\n//# sourceURL=webpack:///./node_modules/d3-dsv/src/tsv.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-fetch/index.js ***!
  \****************************************/
/*! exports provided: blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/blob */ \"./node_modules/d3-fetch/src/blob.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"blob\", function() { return _src_blob__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/buffer */ \"./node_modules/d3-fetch/src/buffer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"buffer\", function() { return _src_buffer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_dsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/dsv */ \"./node_modules/d3-fetch/src/dsv.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dsv\", function() { return _src_dsv__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"csv\", function() { return _src_dsv__WEBPACK_IMPORTED_MODULE_2__[\"csv\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tsv\", function() { return _src_dsv__WEBPACK_IMPORTED_MODULE_2__[\"tsv\"]; });\n\n/* harmony import */ var _src_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/image */ \"./node_modules/d3-fetch/src/image.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"image\", function() { return _src_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _src_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/json */ \"./node_modules/d3-fetch/src/json.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"json\", function() { return _src_json__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _src_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/text */ \"./node_modules/d3-fetch/src/text.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return _src_text__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _src_xml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/xml */ \"./node_modules/d3-fetch/src/xml.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"xml\", function() { return _src_xml__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return _src_xml__WEBPACK_IMPORTED_MODULE_6__[\"html\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"svg\", function() { return _src_xml__WEBPACK_IMPORTED_MODULE_6__[\"svg\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/index.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/blob.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/blob.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction responseBlob(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.blob();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(input, init) {\n  return fetch(input, init).then(responseBlob);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/blob.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/buffer.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-fetch/src/buffer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction responseArrayBuffer(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.arrayBuffer();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(input, init) {\n  return fetch(input, init).then(responseArrayBuffer);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/buffer.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/dsv.js":
/*!******************************************!*\
  !*** ./node_modules/d3-fetch/src/dsv.js ***!
  \******************************************/
/*! exports provided: default, csv, tsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dsv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"csv\", function() { return csv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tsv\", function() { return tsv; });\n/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dsv */ \"./node_modules/d3-dsv/index.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./node_modules/d3-fetch/src/text.js\");\n\n\n\nfunction dsvParse(parse) {\n  return function(input, init, row) {\n    if (arguments.length === 2 && typeof init === \"function\") row = init, init = undefined;\n    return Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input, init).then(function(response) {\n      return parse(response, row);\n    });\n  };\n}\n\nfunction dsv(delimiter, input, init, row) {\n  if (arguments.length === 3 && typeof init === \"function\") row = init, init = undefined;\n  var format = Object(d3_dsv__WEBPACK_IMPORTED_MODULE_0__[\"dsvFormat\"])(delimiter);\n  return Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input, init).then(function(response) {\n    return format.parse(response, row);\n  });\n}\n\nvar csv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_0__[\"csvParse\"]);\nvar tsv = dsvParse(d3_dsv__WEBPACK_IMPORTED_MODULE_0__[\"tsvParse\"]);\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/dsv.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/image.js":
/*!********************************************!*\
  !*** ./node_modules/d3-fetch/src/image.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(input, init) {\n  return new Promise(function(resolve, reject) {\n    var image = new Image;\n    for (var key in init) image[key] = init[key];\n    image.onerror = reject;\n    image.onload = function() { resolve(image); };\n    image.src = input;\n  });\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/image.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/json.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/json.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction responseJson(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.json();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(input, init) {\n  return fetch(input, init).then(responseJson);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/json.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/text.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-fetch/src/text.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction responseText(response) {\n  if (!response.ok) throw new Error(response.status + \" \" + response.statusText);\n  return response.text();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(input, init) {\n  return fetch(input, init).then(responseText);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/text.js?");

/***/ }),

/***/ "./node_modules/d3-fetch/src/xml.js":
/*!******************************************!*\
  !*** ./node_modules/d3-fetch/src/xml.js ***!
  \******************************************/
/*! exports provided: default, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"svg\", function() { return svg; });\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./node_modules/d3-fetch/src/text.js\");\n\n\nfunction parser(type) {\n  return function(input, init)  {\n    return Object(_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, init).then(function(text) {\n      return (new DOMParser).parseFromString(text, type);\n    });\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parser(\"application/xml\"));\n\nvar html = parser(\"text/html\");\n\nvar svg = parser(\"image/svg+xml\");\n\n\n//# sourceURL=webpack:///./node_modules/d3-fetch/src/xml.js?");

/***/ }),

/***/ "./src/file-parser.js":
/*!****************************!*\
  !*** ./src/file-parser.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getDataFromFile = getDataFromFile;\n\nvar _d3Fetch = __webpack_require__(/*! d3-fetch */ \"./node_modules/d3-fetch/index.js\");\n\n////////////////////////////////////////////////////\n/**\r\n * getDataFromFile \r\n * find the matching function to read data from file\r\n * @param  string   filepath   Path to file on hard drive\r\n * @return promise       \r\n */\nfunction getDataFromFile(filename) {\n    var ext = getFileExtension(filename);\n    var resp = new Object();\n    switch (ext) {\n        case \"csv\":\n            {\n                resp = (0, _d3Fetch.csv)(filename);\n                break;\n            }\n        case \"tsv\":\n            {\n                resp = (0, _d3Fetch.tsv)(filename);\n                break;\n            }\n        case \"json\":\n            {\n                resp = (0, _d3Fetch.json)(filename);\n                break;\n            }\n        default:\n            {\n                resp = new Promise(function (resolve, reject) {\n                    reject({ msg: \"incompatible file type\" });\n                });\n            }\n\n    }\n    return resp;\n}\n////////////////////////////////////////////////////\n\n////////////////////////////////////////////////////\n/**\r\n * getFileExtension \r\n * extract the file extension from given filename\r\n * @param  string   filepath   Path to file on hard drive\r\n * @return string              String with file extension\r\n */\nfunction getFileExtension(filename) {\n    var ext = filename.slice((filename.lastIndexOf(\".\") - 1 >>> 0) + 2);\n    return ext ? ext : \"\";\n}\n////////////////////////////////////////////////////\n\n//# sourceURL=webpack:///./src/file-parser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _fileParser = __webpack_require__(/*! ./file-parser */ \"./src/file-parser.js\");\n\ndocument.getElementById('cli').onclick = function (_ref) {\n    var targt = _ref.targt;\n\n\n    var url = document.getElementById('url').value;\n    (0, _fileParser.getDataFromFile)(url).then(function (data) {\n        console.log(data);\n    }, errHandle); // Hello, world!\n};\n\nvar errHandle = function errHandle(err) {\n    return console.log(err);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });