function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");function l(o,t){new Promise(((e,n)=>{setTimeout((()=>{Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)})).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}({formEl:document.querySelector("form")}).formEl.addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:t,amount:n}=e.currentTarget.elements;let r=Number(o.value);for(let e=1;e<=Number(n.value);e+=1)l(e,r),r+=Number(t.value)}));
//# sourceMappingURL=03-promises.c0b9b749.js.map