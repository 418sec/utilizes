(function () {var a={};function c(r){return f(r)||e(r)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function f(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}Object.defineProperty(a,"__esModule",{value:!0});var b=function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];return t.map(function(e){return r.apply(void 0,c(e))})};a.scenarios=b;var g=b;a.default=g;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();