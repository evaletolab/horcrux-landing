(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"16f4":function(e,t,n){"use strict";n("e893")},9224:function(e){e.exports=JSON.parse('{"name":"horcrux-landing","version":"0.0.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build --skip-plugins @vue/cli-plugin-eslint","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint","deploy":"node scripts/gh-pages-deploy.js"},"dependencies":{"axios":"^1.1.2","vue":"^3.2.29","vue-class-component":"^8.0.0-rc.1","vue-property-decorator":"^9.1.2","vue-router":"^4.0.12"},"devDependencies":{"@babel/core":"^7.17.7","@babel/preset-typescript":"^7.16.7","@types/chai":"^4.3.0","@types/mocha":"^5.2.7","@types/node":"^17.0.23","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","@vue/cli-plugin-eslint":"^4.5.15","@vue/cli-plugin-router":"^4.5.15","@vue/cli-plugin-typescript":"^4.5.15","@vue/cli-plugin-unit-mocha":"^4.5.15","@vue/cli-service":"^4.5.15","@vue/compiler-sfc":"^3.2.29","@vue/eslint-config-typescript":"^7.0.0","@vue/test-utils":"^2.0.0-rc.18","chai":"^4.3.4","eslint":"^6.8.0","eslint-plugin-vue":"^7.20.0","sass":"^1.49.0","sass-loader":"^8.0.2","typescript":"^4.1.6"}}')},"9ab4":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return a}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c}function c(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function c(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(c,a)}u((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(c)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},ce1f:function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return R}));var r=n("7a23");
/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?d(e):t}function h(e){var t=b();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function y(e){return O(e)||m(e)||g(e)||_()}function O(e){if(Array.isArray(e))return j(e)}function m(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function g(e,t){if(e){if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t,n){Object.defineProperty(e,t,{get:n,enumerable:!1,configurable:!0})}function P(e,t,n){Object.defineProperty(e,t,{get:function(){return n[t].value},set:function(e){n[t].value=e},enumerable:!0,configurable:!0})}function k(e){var t=Object.getPrototypeOf(e.prototype);if(t)return t.constructor}function S(e,t){return e.hasOwnProperty(t)?e[t]:void 0}var x=function(){function e(t,n){var r=this;o(this,e),w(this,"$props",(function(){return t})),w(this,"$attrs",(function(){return n.attrs})),w(this,"$slots",(function(){return n.slots})),w(this,"$emit",(function(){return n.emit})),Object.keys(t).forEach((function(e){Object.defineProperty(r,e,{enumerable:!1,configurable:!0,writable:!0,value:t[e]})}))}return c(e,null,[{key:"registerHooks",value:function(e){var t;(t=this.__h).push.apply(t,y(e))}},{key:"with",value:function(e){var t=new e,n={};Object.keys(t).forEach((function(e){var r=t[e];n[e]=null!==r&&void 0!==r?r:null}));var r=function(e){l(n,e);var t=h(n);function n(){return o(this,n),t.apply(this,arguments)}return n}(this);return r.__b={props:n},r}},{key:"__vccOpts",get:function(){if(this===E)return{};var e=this,t=S(e,"__c");if(t)return t;var n=s({},S(e,"__o"));e.__c=n;var o=k(e);o&&(n["extends"]=o.__vccOpts);var i=S(e,"__b");i&&(n.mixins=n.mixins||[],n.mixins.unshift(i)),n.methods=s({},n.methods),n.computed=s({},n.computed);var c=e.prototype;Object.getOwnPropertyNames(c).forEach((function(t){if("constructor"!==t)if(e.__h.indexOf(t)>-1)n[t]=c[t];else{var r=Object.getOwnPropertyDescriptor(c,t);"function"!==typeof r.value?(r.get||r.set)&&(n.computed[t]={get:r.get,set:r.set}):n.methods[t]=r.value}})),n.setup=function(t,n){var o,i=new e(t,n),c=Object.keys(i),a={},u=null;return c.forEach((function(e){void 0===i[e]||i[e]&&i[e].__s||(a[e]=Object(r["A"])(i[e]),P(i,e,a))})),c.forEach((function(e){if(i[e]&&i[e].__s){var t=i[e].__s();t instanceof Promise?(u||(u=Promise.resolve(a)),u=u.then((function(){return t.then((function(t){return a[e]=Object(r["x"])(t),a}))}))):a[e]=Object(r["x"])(t)}})),null!==(o=u)&&void 0!==o?o:a};var a=S(e,"__d");a&&a.forEach((function(e){return e(n)}));var u=["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"];return u.forEach((function(t){e[t]&&(n[t]=e[t])})),n}}]),e}();x.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var E=x;function I(e){return function(t){return t.__o=e,t}}function R(e){return function(t,n,r){var o="function"===typeof t?t:t.constructor;o.__d||(o.__d=[]),"number"!==typeof r&&(r=void 0),o.__d.push((function(t){return e(t,n,r)}))}}},e893:function(e,t,n){},f820:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"about container"},i=Object(r["i"])('<h1 data-v-86ed0a72>Horcrux is an educational project made with <span class="pink" data-v-86ed0a72>❤️</span> and based on the following works</h1><ul data-v-86ed0a72><li data-v-86ed0a72><a href="https://iancoleman.io/bip39" data-v-86ed0a72>the great Ian Coleman bip39 demonstration</a></li><li data-v-86ed0a72>Entropy</li><li data-v-86ed0a72><a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" data-v-86ed0a72>BIP39</a> Mnemonic</li><li data-v-86ed0a72><a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" data-v-86ed0a72>BIP39</a> Seed</li><li data-v-86ed0a72><a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" data-v-86ed0a72>BIP32</a> Root Key</li><li data-v-86ed0a72><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" data-v-86ed0a72>BIP44</a> derivation path</li><li data-v-86ed0a72><a href="https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki" data-v-86ed0a72>BIP84</a> Segwit derivation path</li><li data-v-86ed0a72>SSS (Shamir Shared Secret)</li><li data-v-86ed0a72><a href="https://github.com/evaletolab/horcrux-wallets/blob/oe-hardhat/hardhat/contracts/Horcrux.sol" data-v-86ed0a72>HorcruxVault Smart Contract</a></li><li data-v-86ed0a72>Shared as MIT <a href="https://github.com/evaletolab/horcrux-wallets" data-v-86ed0a72>github</a></li></ul>',2);function c(e,t,n,c,a,u){var s=Object(r["D"])("package-versions");return Object(r["u"])(),Object(r["g"])("div",o,[i,Object(r["k"])(s)])}var a=n("9ab4"),u=n("ce1f"),s={class:"package"};function l(e,t,n,o,i,c){return Object(r["u"])(),Object(r["g"])("div",s,[Object(r["h"])("h3",null,"Build v"+Object(r["F"])(e.VERSION),1),Object(r["h"])("ul",null,[(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(e.packages,(function(t,n){return Object(r["u"])(),Object(r["g"])("li",{key:t},[Object(r["j"])(Object(r["F"])(n)+" ",1),Object(r["h"])("b",null,"v"+Object(r["F"])(e.cleanVersion(t)),1)])})),128))])])}var f=n("9224"),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.VERSION=f.version,t}return Object(a["c"])(t,e),Object.defineProperty(t.prototype,"packages",{get:function(){return f.dependencies},enumerable:!1,configurable:!0}),t.prototype.cleanVersion=function(e){return e.replace(/[^~]/,"")},t=Object(a["b"])([Object(u["a"])({props:{filter:String}})],t),t}(u["b"]),b=p,d=n("6b0d"),v=n.n(d);const h=v()(b,[["render",l]]);var y=h,O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a["c"])(t,e),t.prototype.mounted=function(){},t=Object(a["b"])([Object(u["a"])({components:{PackageVersions:y}})],t),t}(u["b"]),m=O;n("16f4");const g=v()(m,[["render",c],["__scopeId","data-v-86ed0a72"]]);t["default"]=g}}]);
//# sourceMappingURL=about.e8de450a.js.map