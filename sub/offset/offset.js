(function () {var a={};Object.defineProperty(a,"__esModule",{value:!0});var b=function(e){var t=e instanceof Element?e.getBoundingClientRect():e,o=t.top,$=t.left;return{top:o+pageYOffset||document.documentElement.scrollTop,left:$+pageXOffset||document.documentElement.scrollLeft}};a.offset=b;var c=b;a.default=c;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();