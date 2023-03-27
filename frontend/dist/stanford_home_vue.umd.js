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
    /* harmony default export */
    var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
    var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=0c946eec

    function render(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_HomePage = (0, external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("HomePage");
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_HomePage);
    }
    ;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=0c946eec

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomePage.vue?vue&type=template&id=598a0353

    function HomePagevue_type_template_id_598a0353_render(_ctx, _cache, $props, $setup, $data, $options) {
        const _component_HeaderComponent = (0, external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("HeaderComponent");
        const _component_ActionItems = (0, external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ActionItems");
        const _component_HelpComponent = (0, external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("HelpComponent");
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_HeaderComponent), this.page === 'actions' ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_ActionItems, {
            key: 0
        })) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), this.page === 'help' ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_HelpComponent, {
            key: 1
        })) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)]);
    }
    ;// CONCATENATED MODULE: ./src/components/HomePage.vue?vue&type=template&id=598a0353

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActionItems.vue?vue&type=template&id=59681a9f

    const _hoisted_1 = /*#__PURE__*/(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createStaticVNode)("<div class=\"container-fluid\"><h2>Stanford Home</h2><div class=\"row\"><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div></div><div class=\"row\"><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div></div><div class=\"row\"><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div><div class=\"col-6\"><div class=\"card\" style=\"width:18rem;\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6><p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p><a href=\"#\" class=\"card-link\">Card link</a><a href=\"#\" class=\"card-link\">Another link</a></div></div></div></div></div>", 1);
    const _hoisted_2 = [_hoisted_1];

    function ActionItemsvue_type_template_id_59681a9f_render(_ctx, _cache, $props, $setup, $data, $options) {
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, _hoisted_2);
    }
    ;// CONCATENATED MODULE: ./src/components/ActionItems.vue?vue&type=template&id=59681a9f

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActionItems.vue?vue&type=script&lang=js
    /* harmony default export */
    var ActionItemsvue_type_script_lang_js = ({
        name: "ActionItems"
    });
    ;// CONCATENATED MODULE: ./src/components/ActionItems.vue?vue&type=script&lang=js

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
    var exportHelper = __webpack_require__(620);
    ;// CONCATENATED MODULE: ./src/components/ActionItems.vue


    ;
    const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(ActionItemsvue_type_script_lang_js, [['render', ActionItemsvue_type_template_id_59681a9f_render]])

    /* harmony default export */
    var ActionItems = (__exports__);
    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HeaderComponent.vue?vue&type=template&id=b15f2f0a

    const HeaderComponentvue_type_template_id_b15f2f0a_hoisted_1 = {
        class: "navbar navbar-expand-lg navbar-light bg-light"
    };
    const HeaderComponentvue_type_template_id_b15f2f0a_hoisted_2 = {
        class: "collapse navbar-collapse",
        id: "navbarText"
    };
    const _hoisted_3 = {
        class: "navbar-nav mr-auto"
    };
    const _hoisted_4 = {
        class: "nav-item active"
    };
    const _hoisted_5 = {
        class: "nav-item"
    };

    function HeaderComponentvue_type_template_id_b15f2f0a_render(_ctx, _cache, $props, $setup, $data, $options) {
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("nav", HeaderComponentvue_type_template_id_b15f2f0a_hoisted_1, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", HeaderComponentvue_type_template_id_b15f2f0a_hoisted_2, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("ul", _hoisted_3, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", _hoisted_4, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
            class: "nav-link",
            onClick: _cache[0] || (_cache[0] = $event => _ctx.$parent.loadComponent('actions'))
        }, "Home ")]), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("li", _hoisted_5, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
            class: "nav-link",
            onClick: _cache[1] || (_cache[1] = $event => _ctx.$parent.loadComponent('help'))
        }, "Help")])])])])]);
    }
    ;// CONCATENATED MODULE: ./src/components/HeaderComponent.vue?vue&type=template&id=b15f2f0a

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HeaderComponent.vue?vue&type=script&lang=js
    /* harmony default export */
    var HeaderComponentvue_type_script_lang_js = ({
        name: "HeaderComponent"
    });
    ;// CONCATENATED MODULE: ./src/components/HeaderComponent.vue?vue&type=script&lang=js

    ;// CONCATENATED MODULE: ./src/components/HeaderComponent.vue


    ;
    const HeaderComponent_exports_ = /*#__PURE__*/(0, exportHelper/* default */.Z)(HeaderComponentvue_type_script_lang_js, [['render', HeaderComponentvue_type_template_id_b15f2f0a_render]])

    /* harmony default export */
    var HeaderComponent = (HeaderComponent_exports_);
    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelpComponent.vue?vue&type=template&id=6661b384

    function HelpComponentvue_type_template_id_6661b384_render(_ctx, _cache, $props, $setup, $data, $options) {
        return (0, external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, " Help Component ");
    }
    ;// CONCATENATED MODULE: ./src/components/HelpComponent.vue?vue&type=template&id=6661b384

    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelpComponent.vue?vue&type=script&lang=js
    /* harmony default export */
    var HelpComponentvue_type_script_lang_js = ({
        name: "HelpComponent"
    });
    ;// CONCATENATED MODULE: ./src/components/HelpComponent.vue?vue&type=script&lang=js

    ;// CONCATENATED MODULE: ./src/components/HelpComponent.vue


    ;
    const HelpComponent_exports_ = /*#__PURE__*/(0, exportHelper/* default */.Z)(HelpComponentvue_type_script_lang_js, [['render', HelpComponentvue_type_template_id_6661b384_render]])

    /* harmony default export */
    var HelpComponent = (HelpComponent_exports_);
    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HomePage.vue?vue&type=script&lang=js


    /* harmony default export */
    var HomePagevue_type_script_lang_js = ({
        name: "HomePage",
        components: {
            HeaderComponent: HeaderComponent,
            HelpComponent: HelpComponent,
            ActionItems: ActionItems
        },
        data() {
            return {
                page: 'actions',
                fullURL: window.location.href
            };
        },
        methods: {
            loadComponent: function (name) {
                this.page = name;
                location.hash = name;
            },
            determineComponent: function () {
                const route = this.fullURL.toLowerCase();
                var parts = route.split("#");
                if (parts[1] !== undefined) {
                    this.page = parts[1];
                }
            }
        },
        beforeMount() {
            this.determineComponent();
        }
    });
    ;// CONCATENATED MODULE: ./src/components/HomePage.vue?vue&type=script&lang=js

    ;// CONCATENATED MODULE: ./src/components/HomePage.vue


    ;
    const HomePage_exports_ = /*#__PURE__*/(0, exportHelper/* default */.Z)(HomePagevue_type_script_lang_js, [['render', HomePagevue_type_template_id_598a0353_render]])

    /* harmony default export */
    var HomePage = (HomePage_exports_);
    ;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js

    /* harmony default export */
    var Appvue_type_script_lang_js = ({
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