(function () {var a={};function b(r){return e(r)||d(r)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function e(r){if(Array.isArray(r)){for(var t=0,a=new Array(r.length);t<r.length;t++)a[t]=r[t];return a}}function f(r,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t||"",n=Array.isArray(r)?r:r.split(a),e=[],o=function(r){var t=[];e.push.apply(e,b(function a(n,e){if(n.length<r)for(var o=0;o<e.length;++o)a(n.concat(e[o]),e.slice(0,o).concat(e.slice(o+1)));else t.push(n);return t}([],n)))},$=1;$<=n.length;++$)o($);return"string"==typeof t?e.map(function(r){return r.join(t)}):e}Object.defineProperty(a,"__esModule",{value:!0});var g=f;a.allCombinations=g;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();