!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u,i=r("6JpON"),c=document.querySelector(".form"),a=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),f=document.querySelector('[name="amount"]');function d(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}c.addEventListener("submit",(function(n){n.preventDefault();var t=Number(a.value),o=Number(f.value);u=Number(l.value);for(var r=1;r<=o;r+=1)d(r,t).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)})),t+=u}))}();
//# sourceMappingURL=03-promises.2c4b7c7a.js.map
