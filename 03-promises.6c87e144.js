!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON");e(i).Notify.init({width:"300px",position:"right-bottom",cssAnimationStyle:"from-right",distance:"20px",opacity:1});var u=document.querySelector("[name=delay]"),c=document.querySelector("[name=step]"),l=document.querySelector("[name=amount]");function a(n,t){var o=Math.random()>.3;new Promise((function(e,n){setTimeout((function(){o?e(console.log("DONE")):n(console.log("ERROR"))}),t)})).then((function(o){return e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),(function(o){return e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}document.querySelector("[type=submit]").addEventListener("click",(function(e){e.preventDefault();for(var n=u.value,t=1;t<=l.value;t++)a(t,n),n=Number(n)+Number(c.value)}))}();
//# sourceMappingURL=03-promises.6c87e144.js.map