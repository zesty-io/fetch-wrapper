(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./src/fetchApi.js":
/*!*************************!*\
  !*** ./src/fetchApi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ZestyioRestFetchWrapper; });\n/**\n * Zesty.io Rest API Fetch Wrapper\n * Used to simply remote authenticated requests to the Zesty Auth, Accounts, and Instances API\n *\n * More info at https://github.com/zesty-io/websites/fetch-api-wrapper/\n */\nclass ZestyioRestFetchWrapper {\n  constructor(instanceZUID, authToken, options = {}) {\n    this.instanceZUID = instanceZUID;\n    this.authToken = authToken;\n    this.accountsAPIEndpoints = {\n      instanceGET: \"/instances/INSTANCE_ZUID\",\n      instanceUsersGET: \"/instances/INSTANCE_ZUID/users/roles\",\n      userGET: \"/users/USER_ZUID\",\n      instances: \"/instances\"\n    };\n    this.sitesServiceEndpoints = {\n      schedulePublishPOST: \"/content/items/ITEM_ZUID/publish-schedule\",\n      scheduleUnpublishPATCH: \"/content/items/ITEM_ZUID/publish-schedule/PUBLISHING_ZUID\",\n      itemsDELETE: \"/content/sets/MODEL_ZUID/items/ITEM_ZUID\"\n    };\n    this.instanceAPIEndpoints = {\n      models: \"/content/models\",\n      fields: \"/content/models/MODEL_ZUID/fields\",\n      itemsPublishing: \"/content/models/MODEL_ZUID/items/ITEM_ZUID/publishings\",\n      itemsVersions: \"/content/models/MODEL_ZUID/items/ITEM_ZUID/versions\",\n      items: \"/content/models/MODEL_ZUID/items\",\n      views: \"/web/views\",\n      // ?action=publish&purge_cache=true\n      settings: \"/env/settings\",\n      stylesheets: \"/web/stylesheets\",\n      // ?action=publish&purge_cache=true\n      stylesheetsVersions: \"/web/stylesheets/STYLESHEET_ZUID/versions\",\n      scriptsVersions: \"/web/scripts/SCRIPT_ZUID/versions/VERSION_NUMBER\",\n      scripts: \"/web/scripts\",\n      // publish by adding: ?action=publish&purge_cache=true\",\n      headers: \"/web/headers\",\n      nav: \"/env/nav\",\n      headtags: \"/web/headtags\",\n      audits: \"/env/audits\"\n    };\n    this.mediaAPIEndpoints = {\n      binsGETAll: \"/media-manager-service/site/SITE_ID/bins\",\n      binsGET: \"/media-manager-service/bin/BIN_ID\",\n      binsPATCH: \"/media-manager-service/bin/BIN_ID\",\n      filesPOST: \"/media-storage-service/upload/STORAGE_DRIVER/STORAGE_NAME\",\n      filesGET: \"/media-manager-service/file/FILE_ID\",\n      filesGETAll: \"/media-manager-service/bin/BIN_ID/files\",\n      filesPATCH: \"/media-manager-service/file/FILE_ID\",\n      filesDELETE: \"/media-manager-service/file/FILE_ID\",\n      groupsGET: \"/media-manager-service/group/GROUP_ID\",\n      groupsGETAll: \"/media-manager-service/bin/BIN_ID/groups\",\n      groupsPOST: \"/media-manager-service/group\",\n      groupsPATCH: \"/media-manager-service/group/GROUP_ID\",\n      groupsDELETE: \"/media-manager-service/group/GROUP_ID\"\n    };\n    this.authAPIEndpoints = {\n      verify: \"/verify\"\n    };\n    this.authAPIURL = options.hasOwnProperty(\"authAPIURL\") ? options.instancesAPIURL : \"https://auth.api.zesty.io\";\n    this.instancesAPIURL = options.hasOwnProperty(\"instancesAPIURL\") ? options.instancesAPIURL : \"https://\" + this.instanceZUID + \".api.zesty.io/v1\";\n    this.accountsAPIURL = options.hasOwnProperty(\"accountsAPIURL\") ? options.accountsAPIURL : \"https://accounts.api.zesty.io/v1\";\n    this.mediaAPIURL = options.hasOwnProperty(\"mediaAPIURL\") ? options.mediaAPIURL : \"https://svc.zesty.io\";\n    this.sitesServiceURL = options.hasOwnProperty(\"sitesServiceURL\") ? options.sitesServiceURL : \"https://svc.zesty.io/sites-service/\" + this.instanceZUID;\n    this.logErrors = options.hasOwnProperty(\"logErrors\") ? options.logErrors : false;\n    this.logResponses = options.hasOwnProperty(\"logResponses\") ? options.logResponses : false;\n    this.sitesServiceURL = this.makeInstanceZUIDURL(this.sitesServiceURL, instanceZUID);\n  }\n\n  makeInstanceZUIDURL(url, zuid) {\n    return this.replaceInURL(url, {\n      INSTANCE_ZUID: zuid\n    });\n  }\n\n  getInstanceAPIURL() {\n    return \"https://\" + this.instanceZUID + \".api.zesty.io/v1\";\n  }\n\n  setInstanceZUID(zuid) {\n    return this.instanceZUID = zuid;\n  }\n\n  buildAPIURL(uri, api = \"instances\") {\n    switch (api) {\n      case \"accounts\":\n        return `${this.accountsAPIURL}${uri}`;\n\n      case \"instances\":\n        return `${this.instancesAPIURL}${uri}`;\n\n      case \"sites-service\":\n        return `${this.sitesServiceURL}${uri}`;\n\n      case \"media\":\n        return `${this.mediaAPIURL}${uri}`;\n\n      default:\n        return \"\";\n    }\n  }\n\n  replaceInURL(url, replacementObject) {\n    for (const key in replacementObject) {\n      url = url.replace(key, replacementObject[key]);\n    }\n\n    return url;\n  }\n\n  async makeRequest(url, method = \"GET\", body = \"\", options = {}) {\n    if (method != \"GET\") options.body = body;\n    options.method = method;\n    options.headers = {\n      \"Content-Type\": \"application/json\",\n      Authorization: `Bearer ${this.authToken}`\n    };\n    options.credentials = \"same-origin\";\n\n    try {\n      const res = await fetch(url, options);\n      const json = await res.json();\n      return json;\n    } catch (err) {\n      console.error(\"Error:\", err);\n      return err;\n    }\n  }\n\n  async verify() {\n    let url = this.authAPIURL + this.authAPIEndpoints.verify;\n    return await this.makeRequest(url);\n  }\n\n  async getUser(userZUID) {\n    let url = this.accountsAPIURL + this.replaceInURL(this.accountsAPIEndpoints.userGET, {\n      USER_ZUID: userZUID\n    });\n    return await this.makeRequest(url);\n  }\n\n  async getInstances() {\n    let url = this.accountsAPIURL + this.accountsAPIEndpoints.instances;\n    return await this.makeRequest(url);\n  }\n\n  async getModels() {\n    let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.models;\n    return await this.makeRequest(url);\n  }\n\n  async getViews() {\n    let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views;\n    return await this.makeRequest(url);\n  }\n\n  async getView(zuid) {\n    let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + \"/\" + zuid;\n    return await this.makeRequest(url);\n  }\n\n  async createView(fileName, code = \"\", type = \"ajax-json\") {\n    let payload = JSON.stringify({\n      code: code,\n      fileName: fileName,\n      type: type\n    });\n    let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views;\n    return await this.makeRequest(url, \"POST\", payload);\n  }\n\n  async updateView(viewZUID, code) {\n    let payload = JSON.stringify({\n      code: code\n    });\n    let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + \"/\" + viewZUID;\n    return await this.makeRequest(url, \"PUT\", payload);\n  }\n\n  async publishView(viewZUID, code) {\n    let payload = JSON.stringify({\n      code: code\n    });\n    let url = this.getInstanceAPIURL() + this.instanceAPIEndpoints.views + \"/\" + viewZUID + \"?action=publish\";\n    return await this.makeRequest(url, \"PUT\", payload);\n  }\n\n}\n\n//# sourceURL=webpack://$/./src/fetchApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ZestyioRestFetchWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchApi */ \"./src/fetchApi.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ZestyioRestFetchWrapper\", function() { return _fetchApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ })

/******/ });
});