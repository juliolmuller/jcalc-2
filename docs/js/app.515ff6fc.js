(function(e){function l(l){for(var a,o,c=l[0],i=l[1],u=l[2],p=0,s=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(l);while(s.length)s.shift()();return n.push.apply(n,u||[]),t()}function t(){for(var e,l=0;l<n.length;l++){for(var t=n[l],a=!0,c=1;c<t.length;c++){var i=t[c];0!==r[i]&&(a=!1)}a&&(n.splice(l--,1),e=o(o.s=t[0]))}return e}var a={},r={app:0},n=[];function o(l){if(a[l])return a[l].exports;var t=a[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,l,t){o.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,l){if(1&l&&(e=o(e)),8&l)return e;if(4&l&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var a in e)o.d(t,a,function(l){return e[l]}.bind(null,a));return t},o.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(l,"a",l),l},o.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=l,c=c.slice();for(var u=0;u<c.length;u++)l(c[u]);var d=i;n.push([0,"chunk-vendors"]),t()})({0:function(e,l,t){e.exports=t("56d7")},"0e56":function(e,l,t){},2138:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7a23"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2a7d"),_Display__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("2adc");__webpack_exports__["a"]={components:{Button:_Button__WEBPACK_IMPORTED_MODULE_1__["a"],Display:_Display__WEBPACK_IMPORTED_MODULE_2__["a"]},emits:["error"],setup(_,{emit:emit}){const displayValue=Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])("0"),clearDisplay=Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])(!1),operation=Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])(null),operands=Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])([0,0]),current=Object(vue__WEBPACK_IMPORTED_MODULE_0__["h"])(0),clearMemory=()=>{displayValue.value="0",clearDisplay.value=!1,operation.value=null,operands.value=[0,0],current.value=0},setOperation=operator=>{const isEquals="="===operator;if(isEquals||0!==current.value){try{operands.value[0]=eval(`${operands.value[0]} ${operation.value} ${operands.value[1]}`)}catch(error){emit("error",error)}displayValue.value=operands.value[0],operation.value=isEquals?operation.value:operator,current.value=isEquals?0:1,clearDisplay.value=isEquals}else operation.value=operator,clearDisplay.value=!0,current.value=1},addDigit=e=>{if("."===e&&displayValue.value.includes("."))return;const l="0"===displayValue.value||clearDisplay.value,t=l?"":displayValue.value;displayValue.value=`${t}${e}`,operands.value[current.value]=displayValue.value,clearDisplay.value=!1};return{displayValue:displayValue,clearDisplay:clearDisplay,operation:operation,operands:operands,current:current,clearMemory:clearMemory,setOperation:setOperation,addDigit:addDigit}}}},"2a7d":function(e,l,t){"use strict";var a=t("7a23");function r(e,l,t,r,n,o){return Object(a["e"])(),Object(a["c"])("button",{class:["button",{double:t.double,triple:t.triple,operator:t.operator}],onClick:l[1]||(l[1]=l=>e.$emit("click",t.label))},Object(a["j"])(t.label),3)}var n={props:{label:[Number,String],operator:Boolean,double:Boolean,triple:Boolean},emits:["click"]};t("70d2");n.render=r;l["a"]=n},"2adc":function(e,l,t){"use strict";var a=t("7a23");const r={class:"display"};function n(e,l,t,n,o,c){return Object(a["e"])(),Object(a["c"])("div",r,Object(a["j"])(t.value),1)}var o={props:{value:[Number,String]}};t("aa74");o.render=n;l["a"]=o},"2f9c":function(e,l,t){},"56d7":function(e,l,t){"use strict";t.r(l);t("a79d");var a=t("7a23");const r=Object(a["d"])("h1",null,"jCalc",-1);function n(e,l,t,n,o,c){const i=Object(a["i"])("Calculator");return Object(a["e"])(),Object(a["c"])(a["a"],null,[r,Object(a["d"])(i)],64)}const o=Object(a["k"])("data-v-034d4d22");Object(a["g"])("data-v-034d4d22");const c={class:"calculator"};Object(a["f"])();const i=o((e,l,t,r,n,o)=>{const i=Object(a["i"])("Display"),u=Object(a["i"])("Button");return Object(a["e"])(),Object(a["c"])("div",c,[Object(a["d"])(i,{value:r.displayValue},null,8,["value"]),Object(a["d"])(u,{label:"AC",onClick:r.clearMemory,triple:""},null,8,["onClick"]),Object(a["d"])(u,{label:"/",onClick:r.setOperation,operator:""},null,8,["onClick"]),Object(a["d"])(u,{label:"7",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"8",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"9",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"*",onClick:r.setOperation,operator:""},null,8,["onClick"]),Object(a["d"])(u,{label:"4",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"5",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"6",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"-",onClick:r.setOperation,operator:""},null,8,["onClick"]),Object(a["d"])(u,{label:"1",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"2",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"3",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"+",onClick:r.setOperation,operator:""},null,8,["onClick"]),Object(a["d"])(u,{label:"0",onClick:r.addDigit,double:""},null,8,["onClick"]),Object(a["d"])(u,{label:".",onClick:r.addDigit},null,8,["onClick"]),Object(a["d"])(u,{label:"=",onClick:r.setOperation,operator:""},null,8,["onClick"])])});var u=t("2138");t("f40d");u["a"].render=i,u["a"].__scopeId="data-v-034d4d22";var d=u["a"],p={components:{Calculator:d}};t("a99c");p.render=n;var s=p;Object(a["b"])(s).mount("#app")},"70d2":function(e,l,t){"use strict";t("8881")},"87bd":function(e,l,t){},8881:function(e,l,t){},a99c:function(e,l,t){"use strict";t("87bd")},aa74:function(e,l,t){"use strict";t("0e56")},f40d:function(e,l,t){"use strict";t("2f9c")}});
//# sourceMappingURL=app.515ff6fc.js.map