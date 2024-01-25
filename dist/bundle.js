<<<<<<< HEAD
(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n\n.body-content {\n    width: max(600px, 75vw);    \n    height: max(500px, 50vh);\n    display: grid;\n    grid-template-columns: 1fr 3fr 2fr;\n    gap: 15px;\n}\n\n.body-content>div {\n    border-radius: 10px;\n    padding-top: 20px;\n}\n\n.checkbox {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin-right: 5px;\n    border: 1px solid black;\n}\n\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.checked {\n    background-color: black;\n}\n\n.projects-container {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n#addProject {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#addProject button {\n    width: 30px;\n    height: 30px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.projectName {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    background-color: white;\n    padding-left: 15px;\n    transition: background-color 600ms;\n}\n\n.activeProject {\n    animation: fadeIn .5s;\n    background-color: black;\n    color: white;\n}\n\n.projectName:hover {\n    cursor: pointer;\n}\n\n.details-container {\n    border: 1px solid black;\n    padding: 20px;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid black;\n}\n\n.modalForm {\n    display: flex;\n    flex-direction: column;\n}\n\n.list-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.taskRow {\n    width: 90%;\n    height: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 5px;\n    margin-bottom: 15px;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.taskRow:hover {\n    cursor: pointer;\n}\n\n#taskInput {\n    width: 90%;\n    height: 20px;\n    border-radius: 5px;\n    padding-left: 10px;\n}\n\n.strike {\n    text-decoration: line-through;\n}\n\n.inputs {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n.taskFade {\n    animation: .5s fadeIn;\n}\n\n.firstDiv {\n    display: flex;\n    align-items: center;\n}\n\n.hidden {\n    display: none;\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),u=n(216),d=n.n(u),l=n(589),h=n.n(l),m=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function p(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const w={date:p({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:p({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:p({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const v={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const k={ordinalNumber:(M={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(M.matchPattern);if(!n)return null;const r=n[0],a=t.match(M.parsePattern);if(!a)return null;let o=M.valueCallback?M.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var M;const S={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=g[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:(t,e,n,r)=>b[t],localize:v,match:k,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function P(){return D}Math.pow(10,8);const T=6048e5,C=864e5;function E(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function L(t){const e=E(t);return e.setHours(0,0,0,0),e}function W(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function j(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function q(t){const e=E(t);return function(t,e){const n=L(t),r=L(e),a=+n-W(n),o=+r-W(r);return Math.trunc((a-o)/C)}(e,function(t){const e=E(t),n=j(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function N(t,e){const n=P(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=E(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function O(t){return N(t,{weekStartsOn:1})}function Y(t){const e=E(t),n=e.getFullYear(),r=j(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=O(r),o=j(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=O(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function H(t){const e=E(t),n=+O(e)-+function(t){const e=Y(t),n=j(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),O(n)}(e);return Math.trunc(n/T)+1}function F(t,e){const n=E(t),r=n.getFullYear(),a=P(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=j(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=N(i,e),c=j(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=N(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function I(t,e){const n=E(t),r=+N(n,e)-+function(t,e){const n=P(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=F(t,e),o=j(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),N(o,e)}(n,e);return Math.trunc(r/T)+1}function A(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const z={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return A("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):A(n+1,2)},d:(t,e)=>A(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>A(t.getHours()%12||12,e.length),H:(t,e)=>A(t.getHours(),e.length),m:(t,e)=>A(t.getMinutes(),e.length),s:(t,e)=>A(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return A(Math.trunc(r*Math.pow(10,n-3)),e.length)}},Q={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return z.y(t,e)},Y:function(t,e,n,r){const a=F(t,r),o=a>0?a:1-a;return"YY"===e?A(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):A(o,e.length)},R:function(t,e){return A(Y(t),e.length)},u:function(t,e){return A(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return A(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return A(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return z.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return A(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=I(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):A(a,e.length)},I:function(t,e,n){const r=H(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):A(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):z.d(t,e)},D:function(t,e,n){const r=q(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):A(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return A(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return A(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return A(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return z.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):z.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):A(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):A(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):z.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):z.s(t,e)},S:function(t,e){return z.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return G(r);case"XXXX":case"XX":return X(r);default:return X(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return G(r);case"xxxx":case"xx":return X(r);default:return X(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");default:return"GMT"+X(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");default:return"GMT"+X(r,":")}},t:function(t,e,n){return A(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return A(t.getTime(),e.length)}};function B(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+A(o,2)}function G(t,e){return t%60==0?(t>0?"-":"+")+A(Math.abs(t)/60,2):X(t,e)}function X(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+A(Math.trunc(r/60),2)+e+A(r%60,2)}const $=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},J=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},R={p:J,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return $(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",$(r,e)).replace("{{time}}",J(a,e))}},U=/^D+$/,Z=/^Y+$/,V=["D","DD","YY","YYYY"];function K(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=E(t);return!isNaN(Number(n))}const _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;function at(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}function ot(t,e){const n=document.querySelector(".list-container");n.innerHTML="",t.forEach((r=>{const a=document.createElement("div"),o=document.createElement("div");o.classList.add("firstDiv"),a.classList.add("taskRow");const i=function(t){const e=document.createElement("p");return e.textContent=t.name,t.status&&e.classList.add("strike"),e}(r),s=document.createElement("div"),c=document.createElement("p");let u=(new Date).getTime()-r.date.getTime();u=-u/864e5,u=Math.ceil(u),o.appendChild(function(t,e,n){const r=document.createElement("div");return r.classList.add("checkbox"),t.status&&r.classList.add("checked"),r.addEventListener("click",(()=>{t.status=!t.status,r.classList.toggle("checked"),e.classList.toggle("strike"),n.classList.toggle("hidden")})),r}(r,i,c)),o.appendChild(i),a.appendChild(o),r.status||(c.textContent=u<0?`Due ${-u} day(s) ago`:0==u?"Due today":`Due in ${u} day(s)`,s.appendChild(c),a.appendChild(s)),t[t.length-1].name==r.name&&e&&a.classList.add("taskFade"),n.appendChild(a),a.addEventListener("click",(()=>{!function(t){const e=document.querySelector(".details-container");e.innerHTML="";const n=document.createElement("h2");n.textContent=t.name;const r=document.createElement("h3");r.textContent=t.description;const a=document.createElement("h3");a.textContent=function(t,e,n){const r=P(),a=n?.locale??r.locale??S,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=E(t);if(!K(s))throw new RangeError("Invalid time value");let c=e.match(tt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,R[e])(t,a.formatLong):t})).join("").match(_).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:at(t)};if(Q[e])return{isToken:!0,value:t};if(e.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return Z.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return U.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),V.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,Q[o[0]])(s,o,a.localize,u)})).join("")}(t.date,"dd MMM yyyy"),e.appendChild(n),e.appendChild(r),e.appendChild(a)}(r)}))}))}function it(t,e){const n=document.querySelector(".projects-list"),r=document.querySelector(".details-container"),a=document.getElementById("taskInput");return n.innerHTML="",t.forEach((o=>{const i=document.createElement("div");i.classList.add("projectName");const s=document.createElement("p");s.textContent=o.name,i.appendChild(s),n.appendChild(i),i.addEventListener("click",(()=>(a.value="",r.innerHTML="",a.placeholder="Enter task here",e=o,i.classList.toggle("activeProject"),console.log(e),it(t,e),ot(o.getList(),!1),e))),o==e&&i.classList.add("activeProject")})),e}class st{constructor(t,e,n){this.taskName=t,this.completed=!1,this.description=n,this.dueDate=e}get name(){return this.taskName}set status(t){this.completed=t}get status(){return this.completed}set date(t){this.dueDate=t}get date(){return this.dueDate}}class ct{constructor(t){this.name=t,this.list=[]}getList(){return this.list}addTask(t){this.list.push(t)}logTasks(){console.log(this.list)}}const ut=[],dt=new ct("Main Project");ut.push(dt);let lt=dt;const ht=document.getElementById("taskInput");ht.placeholder="Enter task here";const mt=document.querySelector("#addProject button"),ft=(document.querySelector(".list-container"),document.querySelector("#projectName")),gt=document.querySelector("#projectDialog"),pt=document.querySelector("#projectForm"),wt=document.querySelector("#taskDialog"),bt=document.querySelector("#taskForm"),yt=document.querySelector(".details-container");mt.addEventListener("click",(()=>{gt.showModal()})),pt.addEventListener("submit",(t=>{t.preventDefault();const e=new ct(ft.value);ut.push(e),lt=e,gt.close(),console.log(lt),yt.innerHTML="",ft.value="",lt=it(ut,lt),console.log("changing active project to ",lt),ot(lt.getList())})),ht.addEventListener("keypress",(t=>{"Enter"==t.key&&""!=ht.value&&(document.querySelector("#filledTaskInput").value=ht.value,wt.showModal())})),bt.addEventListener("submit",(t=>{const e=document.querySelector("#filledTaskInput"),n=document.querySelector("#taskDueDate"),r=document.querySelector("#taskDescription");t.preventDefault();const a=new st(e.value,new Date(n.value),r.value);console.log(lt),lt.addTask(a),ht.placeholder="Enter task here",ht.value="",yt.innerHTML="",n.value="",r.value="",wt.close(),ot(lt.getList(),!0)})),document.querySelector("#cancelTask").addEventListener("click",(()=>{taskDueDate.value="",taskDescription.value="",wt.close()})),document.querySelector("#cancelProject").addEventListener("click",(()=>{ft.value="",gt.close()})),it(ut,lt),localStorage.setItem("test","fairy"),console.log(localStorage.getItem("test"))})()})();
=======
(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n\n.body-content {\n    width: max(600px, 75vw);    \n    height: max(500px, 50vh);\n    display: grid;\n    grid-template-columns: 1fr 3fr 2fr;\n    gap: 15px;\n}\n\n.body-content>div {\n    border-radius: 10px;\n    padding-top: 20px;\n}\n\n.checkbox {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin-right: 5px;\n    border: 1px solid black;\n}\n\n.checkbox:hover {\n    cursor: pointer;\n}\n\n.checked {\n    background-color: black;\n}\n\n.projects-container {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n#addProject {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#addProject button {\n    width: 30px;\n    height: 30px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.projectName {\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    background-color: white;\n    padding-left: 15px;\n    transition: background-color 600ms;\n}\n\n.activeProject {\n    animation: fadeIn .5s;\n    background-color: black;\n    color: white;\n}\n\n.projectName:hover {\n    cursor: pointer;\n}\n\n.details-container {\n    border: 1px solid black;\n    padding: 20px;\n}\n\n.task-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid black;\n}\n\n.modalForm {\n    display: flex;\n    flex-direction: column;\n}\n\n.list-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.taskRow {\n    width: 90%;\n    height: 20px;\n    padding-left: 10px;\n    border-radius: 5px;\n    margin-bottom: 15px;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n}\n\n.taskRow:hover {\n    cursor: pointer;\n}\n\n#taskInput {\n    width: 90%;\n    height: 20px;\n    border-radius: 5px;\n    padding-left: 10px;\n}\n\n.strike {\n    text-decoration: line-through;\n}\n\n.inputs {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n.taskFade {\n    animation: .5s fadeIn;\n}",""]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],d=o.base?i[0]+o.base:i[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=t(a[c]);n[s].references--}for(var i=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),s=t(565),i=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};function f(e,n){console.log("this function is working");const t=document.querySelector(".list-container");t.innerHTML="",e.forEach((o=>{const r=document.createElement("div");r.classList.add("taskRow");const a=function(e){const n=document.createElement("p");return n.textContent=e.name,e.status&&n.classList.add("strike"),n}(o),c=document.createElement("p");r.appendChild(function(e,n){const t=document.createElement("div");return t.classList.add("checkbox"),e.status&&t.classList.add("checked"),t.addEventListener("click",(()=>{e.status=!e.status,t.classList.toggle("checked"),n.classList.toggle("strike")})),t}(o,a)),r.appendChild(a),c.textContent="djhfaskdfhjkasdfhkjasdhfkjdsahf",console.log("appending div"),r.appendChild(c),e[e.length-1].name==o.name&&n&&r.classList.add("taskFade"),t.appendChild(r),r.addEventListener("click",(()=>{!function(e){const n=document.querySelector(".details-container");n.innerHTML="";const t=document.createElement("h2");t.textContent=e.name;const o=document.createElement("h3");o.textContent=e.description,document.createElement("h3"),console.log(""),n.appendChild(t),n.appendChild(o)}(o)}))}))}h.styleTagTransform=p(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(e,n,t){this.taskName=e,this.completed=!1,this.description=t,this.dueDate=n}get name(){return this.taskName}set status(e){this.completed=e}get status(){return this.completed}set date(e){this.dueDate=e}get date(){return this.dueDate}}class g{constructor(e){this.name=e,this.list=[]}getList(){return this.list}addTask(e){this.list.push(e)}logTasks(){console.log(this.list)}}const x=[],y=new g("Main Project"),k=new g("Side Project");x.push(y),x.push(k);let b=y;const E=document.getElementById("taskInput");E.placeholder="Enter task here";const L=document.querySelector(".projects-list"),j=document.querySelector("#addProject button"),w=(document.querySelector(".list-container"),document.querySelector(".details-container")),S=document.querySelector("#projectName"),C=document.querySelector("#projectDialog"),T=document.querySelector("#projectForm"),q=document.querySelector("#taskDialog"),M=document.querySelector("#taskForm");function D(){L.innerHTML="",x.forEach((e=>{const n=document.createElement("div");n.classList.add("projectName");const t=document.createElement("p");t.textContent=e.name,n.appendChild(t),L.appendChild(n),n.addEventListener("click",(()=>{E.value="",w.innerHTML="",E.placeholder="Enter task here",b=e,n.classList.toggle("activeProject"),D(),f(e.getList(),!1)})),e==b&&n.classList.add("activeProject")}))}j.addEventListener("click",(()=>{C.showModal()})),T.addEventListener("submit",(e=>{e.preventDefault();const n=new g(S.value);x.push(n),b=n,C.close(),S.value="",D(),f(b.getList(),!1)})),document.addEventListener("keypress",(e=>{"Enter"==e.key&&""!=E.value&&(document.querySelector("#filledTaskInput").value=E.value,q.showModal())})),M.addEventListener("submit",(e=>{const n=document.querySelector("#taskDueDate"),t=document.querySelector("#taskDescription");e.preventDefault();const o=new v(E.value,n.value,t.value);b.addTask(o),E.placeholder="Enter task here",E.value="",n.value="",t.value="",q.close(),f(b.getList(),!0)})),document.querySelector("#cancelTask").addEventListener("click",(()=>{taskDueDate.value="",taskDescription.value="",q.close()})),document.querySelector("#cancelProject").addEventListener("click",(()=>{S.value="",C.close()})),D()})()})();
>>>>>>> f557d8b5a13eade74d04ef5467d345536e388a1c
