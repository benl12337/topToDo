(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\nhtml {\n    background-color: rgba(36, 36, 36, 0.788);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n}\n\n.title {\n    width: 100%;\n    height: 50px;\n    background-color: rgb(26, 115, 199);\n    font-size: 3rem;\n    font-family: sans-serif;\n    padding: 20px;\n    color: white;\n\n}\n\n.body-content {\n    width: max(600px, 100vw);\n    height: max(500px, 90vh);\n    display: grid;\n    grid-template-columns: 1fr 5fr 2fr;\n}\n\n.body-content>div {\n    padding-top: 10px;\n}\n\n.checkbox {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    margin-right: 10px;\n    margin-left: 5px;\n    border: 1px solid white;\n}\n\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.checked {\n    background-color: grey;\n    border: none;\n}\n\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(63, 62, 62, 0.788);\n\n}\n\n#addProject {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#addProject button {\n    color: rgb(26, 115, 199);\n    width: 30px;\n    height: 30px;\n    font-size: 2rem;\n    font-weight: bolder;\n    background-color: rgba(0, 0, 0, 0);\n    border: 0;\n    outline: none;\n}\n\n#addProject button:hover {\n    transform: scale(1.1);\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.projectName {\n    color: white;\n    padding-left: 15px;\n    padding-right: 15px;\n    transition: background-color 600ms;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.activeProject {\n    animation: fadeIn .5s;\n    background-color: rgb(26, 115, 199);\n    color: white;\n}\n\n.projectName:hover {\n    cursor: pointer;\n}\n\n.details-container {\n    color: white;\n    padding: 20px;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.modalForm {\n    display: flex;\n    flex-direction: column;\n}\n\n.list-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.taskRow {\n    color: white;\n    width: 90%;\n    height: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n    border-bottom: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: none;\n}\n\n.taskRow:hover {\n    cursor: pointer;\n    background-color: rgb(121, 121, 121);\n}\n\n#taskInput {\n    font-size: 1rem;\n    width: 90%;\n    height: 20px;\n    border-radius: 5px;\n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: rgba(0, 0, 0, 0);\n    box-shadow: inset 0px 0px 0px 0px red;\n    border-bottom: 1px solid rgb(201, 201, 201);\n    color: white;   \n    inset: none;\n}\n\n.strike {\n    text-decoration: line-through;\n    color: grey;\n}\n\n.inputs {\n    color: white;\n    text-align: left;\n    padding-top: 10px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.taskFade {\n    animation: .5s fadeIn;\n}\n\n.firstDiv {\n    display: flex;\n    align-items: center;\n}\n\n.hidden {\n    display: none;\n}\n\ndialog {\n    border-radius: 15px;\n}\n\n.trashCan {\n    width: 15px;\n    height: auto;\n    filter: invert(100%);\n}\n\n.trashCan:hover {\n    width: 18px;\n}\n\ndialog input {\n    border-radius: 5px;\n    margin-bottom: 15px;\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),u=n(216),d=n.n(u),l=n(589),h=n.n(l),m=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function p(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const b={date:p({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:p({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:p({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const v={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const k={ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(S.matchPattern);if(!n)return null;const r=n[0],a=t.match(S.parsePattern);if(!a)return null;let o=S.valueCallback?S.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var S;const M={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=g[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:b,formatRelative:(t,e,n,r)=>w[t],localize:v,match:k,options:{weekStartsOn:0,firstWeekContainsDate:1}};let j={};function P(){return j}Math.pow(10,8);const T=6048e5,C=864e5;function D(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function E(t){const e=D(t);return e.setHours(0,0,0,0),e}function L(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function N(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function O(t){const e=D(t);return function(t,e){const n=E(t),r=E(e),a=+n-L(n),o=+r-L(r);return Math.trunc((a-o)/C)}(e,function(t){const e=D(t),n=N(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function W(t,e){const n=P(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=D(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function q(t){return W(t,{weekStartsOn:1})}function I(t){const e=D(t),n=e.getFullYear(),r=N(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=q(r),o=N(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=q(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function H(t){const e=D(t),n=+q(e)-+function(t){const e=I(t),n=N(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),q(n)}(e);return Math.trunc(n/T)+1}function Y(t,e){const n=D(t),r=n.getFullYear(),a=P(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=N(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=W(i,e),c=N(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=W(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function F(t,e){const n=D(t),r=+W(n,e)-+function(t,e){const n=P(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=Y(t,e),o=N(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),W(o,e)}(n,e);return Math.trunc(r/T)+1}function z(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const J={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return z("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):z(n+1,2)},d:(t,e)=>z(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>z(t.getHours()%12||12,e.length),H:(t,e)=>z(t.getHours(),e.length),m:(t,e)=>z(t.getMinutes(),e.length),s:(t,e)=>z(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return z(Math.trunc(r*Math.pow(10,n-3)),e.length)}},A={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return J.y(t,e)},Y:function(t,e,n,r){const a=Y(t,r),o=a>0?a:1-a;return"YY"===e?z(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):z(o,e.length)},R:function(t,e){return z(I(t),e.length)},u:function(t,e){return z(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return z(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return z(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return J.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return z(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=F(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):z(a,e.length)},I:function(t,e,n){const r=H(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):z(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):J.d(t,e)},D:function(t,e,n){const r=O(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):z(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return z(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return z(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return z(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return J.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):J.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):z(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):z(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):J.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):J.s(t,e)},S:function(t,e){return J.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Q(r);case"XXXX":case"XX":return G(r);default:return G(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Q(r);case"xxxx":case"xx":return G(r);default:return G(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");default:return"GMT"+G(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");default:return"GMT"+G(r,":")}},t:function(t,e,n){return z(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return z(t.getTime(),e.length)}};function B(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+z(o,2)}function Q(t,e){return t%60==0?(t>0?"-":"+")+z(Math.abs(t)/60,2):G(t,e)}function G(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+z(Math.trunc(r/60),2)+e+z(r%60,2)}const X=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},$=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},R={p:$,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return X(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",X(r,e)).replace("{{time}}",$(a,e))}},U=/^D+$/,Z=/^Y+$/,V=["D","DD","YY","YYYY"];function K(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=D(t);return!isNaN(Number(n))}const _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;function at(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}function ot(t,e,n){const r=document.querySelector(".list-container");r.innerHTML="",e.forEach((a=>{const o=document.createElement("div"),i=document.createElement("div");i.classList.add("firstDiv"),o.classList.add("taskRow");const s=function(t){const e=document.createElement("p");return e.textContent=t.taskName,t.status&&e.classList.add("strike"),e}(a),c=document.createElement("div"),u=document.createElement("p");let d=(new Date).getTime()-new Date(a.dueDate).getTime();d=-d/864e5,d=Math.round(d),i.appendChild(function(t,e,n,r,a){const o=document.createElement("div");return o.classList.add("checkbox"),n.status&&o.classList.add("checked"),o.addEventListener("click",(()=>{n.status=!n.status,o.classList.toggle("checked"),r.classList.toggle("strike"),a.classList.toggle("hidden"),ot(t,e,!1),localStorage.setItem("projectsList",JSON.stringify(t))})),o}(t,e,a,s,u)),i.appendChild(s),o.appendChild(i),a.status||(u.textContent=d<0?`Due ${-d} day(s) ago`:0==d?"Due today":`Due in ${d} day(s)`,c.appendChild(u),o.appendChild(c)),e[e.length-1].taskName==a.taskName&&n&&o.classList.add("taskFade"),r.appendChild(o),o.addEventListener("click",(()=>{!function(t,e,n){const r=document.querySelector(".details-container");r.innerHTML="";const a=document.createElement("h2");a.textContent=t.taskName;const o=document.createElement("h3");o.textContent=t.description;const i=document.createElement("h3");i.textContent=function(t,e,n){const r=P(),a=n?.locale??r.locale??M,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=D(t);if(!K(s))throw new RangeError("Invalid time value");let c=e.match(tt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,R[e])(t,a.formatLong):t})).join("").match(_).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:at(t)};if(A[e])return{isToken:!0,value:t};if(e.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return Z.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return U.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),V.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,A[o[0]])(s,o,a.localize,u)})).join("")}(t.dueDate,"dd MMM yyyy");const s=document.createElement("button");s.textContent="Delete",s.addEventListener("click",(()=>{const a=n.indexOf(t);n.splice(a,1),ot(e,n,!1),r.innerHTML="",localStorage.setItem("projectsList",JSON.stringify(e))})),r.appendChild(a),r.appendChild(o),r.appendChild(i),r.appendChild(s)}(a,t,e)}))}))}const it=n.p+"e5c075cc889ac6176e80.png";function st(){document.querySelector("#projectTitle").textContent=JSON.parse(localStorage.getItem("activeProject")).obj.name}function ct(t,e){const n=document.querySelector(".projects-list"),r=document.querySelector(".details-container"),a=document.getElementById("taskInput");n.innerHTML="",console.log("parsin active project",JSON.parse(localStorage.getItem("activeProject"))),t.list.forEach((o=>{const i=document.createElement("div");i.classList.add("projectName");const s=document.createElement("p");s.textContent=o.name,i.appendChild(s);const c=function(t,e,n,r){const a=document.createElement("div"),o=new Image;return o.src=it,o.classList.add("trashCan"),a.appendChild(o),a.addEventListener("click",(()=>{const r=t.list.indexOf(n);t.list.splice(r,1),function(t,e){e.obj=t.list[0],console.log("CHIENNNN",e.obj),localStorage.setItem("activeProject",JSON.stringify(e)),ct(t,e),ot(t,e.obj.list,!1)}(t,e),o.classList.toggle("trashToggle"),st()})),a}(t,e.obj,o);i.appendChild(c),n.appendChild(i),i.dataset.name=o.name,s.addEventListener("click",(()=>{a.value="",r.innerHTML="",a.placeholder="Enter task here",e.obj=o,localStorage.setItem("activeProject",JSON.stringify(e)),i.classList.toggle("activeProject"),ct(t,e),ot(t,e.obj.list,!1),st()})),o.name==e.obj.name&&(i.classList.add("activeProject"),c.classList.toggle("trashToggle"))}))}function ut(t,e,n){this.taskName=t,this.completed=!1,this.description=n,this.dueDate=e}function dt(t){this.name=t,this.list=[]}let lt={list:[]};const ht=document.getElementById("taskInput");ht.placeholder="Enter task here";const mt=document.querySelector("#addProject button"),ft=(document.querySelector(".list-container"),document.querySelector("#projectName")),gt=document.querySelector("#projectDialog"),pt=document.querySelector("#projectForm"),bt=document.querySelector("#taskDialog"),wt=document.querySelector("#taskForm"),yt=document.querySelector(".details-container");if(mt.addEventListener("click",(()=>{gt.showModal()})),pt.addEventListener("submit",(t=>{if(t.preventDefault(),-1!=lt.list.map((t=>t.name)).indexOf(ft.value))return void ft.setCustomValidity("Invalid");const e=new dt(ft.value);lt.list.push(e),localStorage.setItem("projectsList",JSON.stringify(lt)),vt.obj=e,localStorage.setItem("activeProject",JSON.stringify(vt)),gt.close(),st(),yt.innerHTML="",ft.value="",ct(lt,vt),ot(lt,vt.obj.list,!1)})),ht.addEventListener("keypress",(t=>{"Enter"==t.key&&""!=ht.value&&(document.querySelector("#filledTaskInput").value=ht.value,bt.showModal())})),wt.addEventListener("submit",(t=>{vt=JSON.parse(localStorage.getItem("activeProject"));const e=document.querySelector("#filledTaskInput"),n=document.querySelector("#taskDueDate"),r=document.querySelector("#taskDescription");t.preventDefault();const a=new ut(e.value,n.value,r.value);vt.obj.list.push(a);const o=lt.list.map((t=>t.name)).indexOf(vt.obj.name);console.log("Where were you"),lt.list[o].list.push(a),console.log("is it being pushed",lt),localStorage.setItem("projectsList",JSON.stringify(lt)),ht.placeholder="Enter task here",ht.value="",yt.innerHTML="",n.value="",r.value="",bt.close(),ot(lt,vt.obj.list,!0)})),document.querySelector("#cancelTask").addEventListener("click",(()=>{taskDueDate.value="",taskDescription.value="",bt.close()})),document.querySelector("#cancelProject").addEventListener("click",(()=>{ft.value="",gt.close()})),localStorage.getItem("projectsList"))lt=JSON.parse(localStorage.getItem("projectsList"));else{const t=new dt("Main Project");lt.list.push(t),localStorage.setItem("projectsList",JSON.stringify(lt))}let vt={obj:lt.list[0]};localStorage.setItem("activeProject",JSON.stringify(vt)),ft.addEventListener("change",(()=>{ft.setCustomValidity("")})),document.addEventListener("click",(()=>{localStorage.setItem("projectsList",JSON.stringify(lt))})),st(),ct(lt,vt),ot(lt,vt.obj.list,!1)})()})();