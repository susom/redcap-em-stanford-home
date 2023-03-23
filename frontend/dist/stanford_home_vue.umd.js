(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["stanford_home_vue"] = factory(require("vue"));
	else
		root["stanford_home_vue"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
    var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=0c946eec

    function render(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_HomePage = (0, external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("HomePage");
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_HomePage);
    }
    ;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=0c946eec

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomePage.vue?vue&type=template&id=2c5354dc

    const _hoisted_1 = {
        class: "container-fluid"
    };
    const _hoisted_2 = /*#__PURE__*/(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createStaticVNode)("<h2>Stanford Home</h2><div class=\"row\"><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div></div><div class=\"row\"><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div></div><div class=\"row\"><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div></div>", 4);
    const _hoisted_6 = [_hoisted_2];

    function HomePagevue_type_template_id_2c5354dc_render(_ctx, _cache, $props, $setup, $data, $options) {
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, _hoisted_6);
    }
    ;// CONCATENATED MODULE: ./src/components/HomePage.vue?vue&type=template&id=2c5354dc

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomePage.vue?vue&type=script&lang=js
    /* harmony default export */
    var HomePagevue_type_script_lang_js = ({
        name: "HomePage"
    });
    ;// CONCATENATED MODULE: ./src/components/HomePage.vue?vue&type=script&lang=js

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
    var exportHelper = __webpack_require__(620);
    ;// CONCATENATED MODULE: ./src/components/HomePage.vue




;
    const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(HomePagevue_type_script_lang_js, [['render', HomePagevue_type_template_id_2c5354dc_render]])

/* harmony default export */ var HomePage = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    HomePage: HomePage
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=0c946eec&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=0c946eec&lang=css

;// CONCATENATED MODULE: ./src/App.vue




;


const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (App_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (App);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=stanford_home_vue.umd.js.map