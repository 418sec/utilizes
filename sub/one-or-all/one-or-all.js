(function () {var g=this;var r={},xa=Array.isArray;r=xa;var Ba={},gb=Object.prototype;function ub(o){var t=o&&o.constructor;return o===("function"==typeof t&&t.prototype||gb)}Ba=ub;var Hb={};function Kb(r,o){return function($){return r(o($))}}Hb=Kb;var M={},S=Hb(Object.keys,Object);M=S;var V={},X=Object.prototype,ka=X.hasOwnProperty;function ma(r){if(!Ba(r))return M(r);var $=[];for(var e in Object(r))ka.call(r,e)&&"constructor"!=e&&$.push(e);return $}V=ma;var oa={},qa="object"==typeof g&&g&&g.Object===Object&&g;oa=qa;var c={},ta="object"==typeof self&&self&&self.Object===Object&&self,ua=oa||ta||Function("return this")();c=ua;var i={},za=c.Symbol;i=za;var Aa={},s=Object.prototype,Ca=s.hasOwnProperty,Ia=s.toString,e=i?i.toStringTag:void 0;function nb($){var r=Ca.call($,e),a=$[e];try{$[e]=void 0;var i=!0}catch(o){}var t=Ia.call($);return i&&(r?$[e]=a:delete $[e]),t}Aa=nb;var ob={},qb=Object.prototype,rb=qb.toString;function sb(t){return rb.call(t)}ob=sb;var h={},vb="[object Null]",zb="[object Undefined]",t=i?i.toStringTag:void 0;function Ib($){return null==$?void 0===$?zb:vb:t&&t in Object($)?Aa($):ob($)}h=Ib;var y={};function Lb($){var t=typeof $;return null!=$&&("object"==t||"function"==t)}y=Lb;var A={},N="[object AsyncFunction]",O="[object Function]",P="[object GeneratorFunction]",Q="[object Proxy]";function R($){if(!y($))return!1;var a=h($);return a==O||a==P||a==N||a==Q}A=R;var n={},T=c["__core-js_shared__"];n=T;var U={},I=function(){var $=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return $?"Symbol(src)_1."+$:""}();function W($){return!!I&&I in $}U=W;var b={},Y=Function.prototype,Z=Y.toString;function $(r){if(null!=r){try{return Z.call(r)}catch($){}try{return r+""}catch($){}}return""}b=$;var _={},aa=/[\\^$.*+?()[\]{}|]/g,ba=/^\[object .+?Constructor\]$/,ca=Function.prototype,da=Object.prototype,ea=ca.toString,fa=da.hasOwnProperty,ga=RegExp("^"+ea.call(fa).replace(aa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ha($){return!(!y($)||U($))&&(A($)?ga:ba).test(b($))}_=ha;var ia={};function ja($,e){return null==$?void 0:$[e]}ia=ja;var f={};function la($,e){var a=ia($,e);return _(a)?a:void 0}f=la;var m={},na=f(c,"DataView");m=na;var q={},pa=f(c,"Map");q=pa;var j={},ra=f(c,"Promise");j=ra;var k={},Mb=f(c,"Set");k=Mb;var l={},va=f(c,"WeakMap");l=va;var wa={},L="[object Map]",ya="[object Object]",u="[object Promise]",v="[object Set]",w="[object WeakMap]",x="[object DataView]",Da=b(m),Ea=b(q),Fa=b(j),Ga=b(k),Ha=b(l),d=h;(m&&d(new m(new ArrayBuffer(1)))!=x||q&&d(new q)!=L||j&&d(j.resolve())!=u||k&&d(new k)!=v||l&&d(new l)!=w)&&(d=function($){var a=h($),t=a==ya?$.constructor:void 0,r=t?b(t):"";if(r)switch(r){case Da:return x;case Ea:return L;case Fa:return u;case Ga:return v;case Ha:return w;}return a}),wa=d;var Ja={},Ka=9007199254740991;function La($){return"number"==typeof $&&$>-1&&$%1==0&&$<=Ka}Ja=La;var Ma={};function Na($){return null!=$&&Ja($.length)&&!A($)}Ma=Na;var Oa={};function Pa($){return null!=$&&"object"==typeof $}Oa=Pa;var Qa={},Ra="[object String]";function Sa($){return"string"==typeof $||!r($)&&Oa($)&&h($)==Ra}Qa=Sa;var Ta={};function Ua(r){return function($){return null==$?void 0:$[r]}}Ta=Ua;var Va={},Wa=Ta("length");Va=Wa;var Xa={},Ya="\\ud800-\\udfff",Za="\\u0300-\\u036f",$a="\\ufe20-\\ufe2f",_a="\\u20d0-\\u20ff",ab=Za+$a+_a,bb="\\ufe0e\\ufe0f",cb="\\u200d",db=RegExp("["+cb+Ya+ab+bb+"]");function eb($){return db.test($)}Xa=eb;var fb={},z="\\ud800-\\udfff",hb="\\u0300-\\u036f",ib="\\ufe20-\\ufe2f",jb="\\u20d0-\\u20ff",kb=hb+ib+jb,lb="\\ufe0e\\ufe0f",mb="["+z+"]",o="["+kb+"]",p="\\ud83c[\\udffb-\\udfff]",pb="(?:"+o+"|"+p+")",C="[^"+z+"]",D="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",tb="\\u200d",F=pb+"?",G="["+lb+"]?",wb="(?:"+tb+"(?:"+[C,D,E].join("|")+")"+G+F+")*",xb=G+F+wb,yb="(?:"+[C+o+"?",o,D,E,mb].join("|")+")",H=RegExp(p+"(?="+p+")|"+yb+xb,"g");function Ab($){for(var r=H.lastIndex=0;H.test($);)++r;return r}fb=Ab;var Bb={};function Cb($){return Xa($)?fb($):Va($)}Bb=Cb;var Db={},Eb="[object Map]",Fb="[object Set]";function Gb(a){if(null==a)return 0;if(Ma(a))return Qa(a)?Bb(a):a.length;var $=wa(a);return $==Eb||$==Fb?a.size:V(a).length}Db=Gb;var a={},J=a&&a.__importDefault||function($){return $&&$.__esModule?$:{default:$}};Object.defineProperty(a,"__esModule",{value:!0});var Jb=J(r),K=J(Db),B=function($){return!Jb.default($)||K.default($)>1?$:1===K.default($)?$[0]:void 0};a.oneOrAll=B;var sa=B;a.default=sa;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();