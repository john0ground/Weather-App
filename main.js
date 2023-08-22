(()=>{"use strict";const t=["London","Buenos Aires","Tokyo","Manila"];let e;async function n(r){if(function(t){return!(0!==t.length&&!/^ +$/.test(t)||(Mt("Please input a city / location."),0))}(r))return;_.style.display="none",J.style.display="block",$.textContent=B.value,X.classList.add("inactive"),R.textContent="";const a=`http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=${r}&aqi=no`;await async function(t){try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw n;const r=await n.json();e=r}catch(t){const e=await t.json();throw console.log(e),e.error.message}}(a).then((()=>{var r;(function(){const r=e.location.name;if(t.includes(r)){const e=t.indexOf(r);t.splice(e,1)}else t.pop();var a;t.unshift(r),a=t,I.innerHTML="",a.forEach((t=>{const e=document.createElement("li");e.textContent=t,I.appendChild(e),e.addEventListener("click",(()=>{X.classList.contains("inactive")||n(t)}))}))})(),r=e,({current:bt,location:pt}=r),Tt(),kt(),ot.setAttribute("src",bt.condition.icon),function(){const[t,e]=pt.localtime.split(" "),n=new Date(t),r=z(n,"EEEE"),a=z(n,"dd MMM")+" '"+z(n,"yy");it.textContent=e+" - ",ut.textContent=r+",",st.textContent=a}(),ct.textContent=bt.condition.text,dt.textContent=bt.condition.text,lt.textContent=bt.cloud+"%",ht.textContent=bt.humidity+"%",mt.textContent=bt.wind_kph+"km/h",gt.textContent=pt.country,vt.textContent=pt.region,wt.textContent=pt.lat,yt.textContent=pt.lon,console.log(r),B.value="",async function(){!async function(){try{const t=G[xt()],e=t.id,n=await fetch(`https://api.pexels.com/v1/photos/${e}`,{headers:{Authorization:"k1QAYhe230dwOf6Gl2FFjoH6czizpYh1u1mGPJto1Vwy6gJ5ArAc5LGd"},mode:"cors"});if(!n.ok)throw n;const r=await n.json();alert("Note: Animal backgrounds are not related to the current weather. Used for api tests only and might load longer. Choosing this will depend on your character, and your network provider."),et.src=r.src.large2x,function(t,e){"day"===t?(X.style.background=e.day.theme,tt.style.background=`linear-gradient(#00000077, #00000021 3%, ${e.day.theme} 12%)`):"night"===t?(X.style.background=e.night.theme,tt.style.background=`linear-gradient(#00000077, #00000021 3%, ${e.night.theme} 12%)`):(X.style.background=e.theme,tt.style.background=`linear-gradient(#00000077, #00000021 3%, ${e.theme} 12%)`)}(null,t)}catch(t){const e=await t.json();alert("Animal Background Image: "+e.error)}}()}()})).catch(Mt).finally((()=>{_.style.display="block",J.style.display="none",X.classList.remove("inactive")}))}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t){a(1,arguments);var e=o(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function s(t){a(1,arguments);var e=o(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=u(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var c=u(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}var c={};function d(){return c}function l(t,e){var n,r,u,s,c,l,h,m;a(1,arguments);var f=d(),g=i(null!==(n=null!==(r=null!==(u=null!==(s=null==e?void 0:e.weekStartsOn)&&void 0!==s?s:null==e||null===(c=e.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==r?r:null===(h=f.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function h(t,e){var n,r,u,s,c,h,m,f;a(1,arguments);var g=o(t),v=g.getUTCFullYear(),w=d(),y=i(null!==(n=null!==(r=null!==(u=null!==(s=null==e?void 0:e.firstWeekContainsDate)&&void 0!==s?s:null==e||null===(c=e.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==r?r:null===(m=w.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,y),b.setUTCHours(0,0,0,0);var p=l(b,e),C=new Date(0);C.setUTCFullYear(v,0,y),C.setUTCHours(0,0,0,0);var T=l(C,e);return g.getTime()>=p.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}function m(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var f={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return m("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):m(n+1,2)},d:function(t,e){return m(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return m(t.getUTCHours()%12||12,e.length)},H:function(t,e){return m(t.getUTCHours(),e.length)},m:function(t,e){return m(t.getUTCMinutes(),e.length)},s:function(t,e){return m(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return m(Math.floor(r*Math.pow(10,n-3)),e.length)}};const g=f;var v={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g.y(t,e)},Y:function(t,e,n,r){var a=h(t,r),o=a>0?a:1-a;return"YY"===e?m(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):m(o,e.length)},R:function(t,e){return m(s(t),e.length)},u:function(t,e){return m(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return m(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return m(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return g.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return m(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var u=function(t,e){a(1,arguments);var n=o(t),r=l(n,e).getTime()-function(t,e){var n,r,o,u,s,c,m,f;a(1,arguments);var g=d(),v=i(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==r?r:null===(m=g.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1),w=h(t,e),y=new Date(0);return y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0),l(y,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(u,{unit:"week"}):m(u,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=u(e).getTime()-function(t){a(1,arguments);var e=s(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),u(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):m(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):g.d(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):m(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return m(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return m(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return m(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):g.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):m(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):m(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):g.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):g.s(t,e)},S:function(t,e){return g.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return y(a);case"XXXX":case"XX":return b(a);default:return b(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return y(a);case"xxxx":case"xx":return b(a);default:return b(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+w(a,":");default:return"GMT"+b(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+w(a,":");default:return"GMT"+b(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return m(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return m((r._originalDate||t).getTime(),e.length)}};function w(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+m(o,2)}function y(t,e){return t%60==0?(t>0?"-":"+")+m(Math.abs(t)/60,2):b(t,e)}function b(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+m(Math.floor(a/60),2)+n+m(a%60,2)}const p=v;var C=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},T=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},k={p:T,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return C(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",C(a,e)).replace("{{time}}",T(o,e))}};const M=k;var S=["D","DD"],x=["YY","YYYY"];function D(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function U(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var P,W={date:U({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:U({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:U({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},E={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Y(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function L(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const O={code:"en-US",formatDistance:function(t,e,n){var r,a=q[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:function(t,e,n,r){return E[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(P={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(P.matchPattern);if(!n)return null;var r=n[0],a=t.match(P.parsePattern);if(!a)return null;var o=P.valueCallback?P.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:L({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:L({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:L({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:L({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var N=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,j=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,H=/^'([^]*?)'?$/,F=/''/g,A=/[a-zA-Z]/;function z(t,e,n){var u,s,c,l,h,m,f,g,v,w,y,b,C,T,k,q,U,P;a(2,arguments);var W=String(e),E=d(),Y=null!==(u=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:E.locale)&&void 0!==u?u:O,L=i(null!==(c=null!==(l=null!==(h=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==h?h:E.firstWeekContainsDate)&&void 0!==l?l:null===(v=E.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==c?c:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var z=i(null!==(y=null!==(b=null!==(C=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(k=n.locale)||void 0===k||null===(q=k.options)||void 0===q?void 0:q.weekStartsOn)&&void 0!==C?C:E.weekStartsOn)&&void 0!==b?b:null===(U=E.locale)||void 0===U||null===(P=U.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==y?y:0);if(!(z>=0&&z<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Y.localize)throw new RangeError("locale must contain localize property");if(!Y.formatLong)throw new RangeError("locale must contain formatLong property");var G=o(t);if(!function(t){if(a(1,arguments),!function(t){return a(1,arguments),t instanceof Date||"object"===r(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}(G))throw new RangeError("Invalid time value");var Q=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(G),B=function(t,e){return a(2,arguments),function(t,e){a(2,arguments);var n=o(t).getTime(),r=i(e);return new Date(n+r)}(t,-i(e))}(G,Q),X={firstWeekContainsDate:L,weekStartsOn:z,locale:Y,_originalDate:G};return W.match(j).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,M[e])(t,Y.formatLong):t})).join("").match(N).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(H))?o[1].replace(F,"'"):a;var u,s=p[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===x.indexOf(u))||D(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==S.indexOf(t)}(r)||D(r,e,String(t)),s(B,r,Y.localize,X);if(i.match(A))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const G=[{id:"1203309",theme:"#cfa459"},{id:"16057125",theme:"#b2b68d"},{id:"6690564",theme:"#a7b7d8"},{id:"7787730",theme:"#8b9ecf"},{id:"2244297",theme:"#c5c53b"},{id:"2397653",theme:"#71b4d6"},{id:"247373",theme:"#e9d044"},{id:"5745357",theme:"#bbbbab"},{id:"12075077",theme:"#82ad5a"},{id:"1275451",theme:"#bdaeb7"},{id:"3160373",theme:"#b8ad83"}],Q=document.querySelector(".weather-sidebar"),B=document.querySelector("#input-city"),X=document.querySelector("#search"),R=document.querySelector("#error-message"),_=document.querySelector(".data-container"),J=document.querySelector(".loading-container"),$=document.querySelector("#pending-city"),I=document.querySelector("#search-history > ul"),V=I.querySelectorAll("li"),K=document.querySelector("#menu"),Z=document.querySelector(".menu-modal"),tt=document.querySelector("#toggle-temp-btn"),et=document.querySelector(".background > img"),nt=document.querySelector(".data-main"),rt=nt.querySelector("#temperature"),at=nt.querySelector("#city"),ot=nt.querySelector("#weather-icon"),it=nt.querySelector("#time"),ut=nt.querySelector("#day"),st=nt.querySelector("#date"),ct=nt.querySelector("#condition"),dt=document.querySelector("#data-condition"),lt=document.querySelector("#cloud-percentage"),ht=document.querySelector("#humidity-percentage"),mt=document.querySelector("#wind-speed"),ft=document.querySelector("#feels-like"),gt=document.querySelector("#country"),vt=document.querySelector("#region"),wt=document.querySelector("#lat"),yt=document.querySelector("#lon");let bt,pt,Ct="celsius";function Tt(){"celsius"===Ct?(rt.textContent=bt.temp_c+"°",ft.textContent=bt.feelslike_c+"°"):(rt.textContent=bt.temp_f+"°",ft.textContent=bt.feelslike_f+"°")}function kt(){at.textContent=pt.name}function Mt(t){R.textContent=t}let St=[];function xt(){const t=Math.floor(Math.random()*G.length);return St.includes(t)?xt():(St.unshift(t),St.length>5&&St.pop(),t)}X.addEventListener("click",(()=>{X.classList.contains("inactive")||n(B.value)})),B.addEventListener("keydown",(t=>{if("Enter"===t.key){if(X.classList.contains("inactive"))return;n(B.value)}})),V.forEach((t=>{t.addEventListener("click",(()=>{X.classList.contains("inactive")||(B.value=t.textContent,n(t.textContent))}))})),K.addEventListener("click",(function(){Q.classList.add("weather-sidebar-hide"),K.classList.add("menu-hide"),nt.classList.add("data-main-slide"),Z.classList.add("menu-modal-show")})),Z.addEventListener("click",(t=>{t.target===Z&&(Q.classList.remove("weather-sidebar-hide"),K.classList.remove("menu-hide"),nt.classList.remove("data-main-slide"),Z.classList.remove("menu-modal-show"))})),tt.addEventListener("click",(()=>{X.classList.contains("inactive")||("c"===tt.dataset.activeTemp?(Ct="fahrenheit",tt.dataset.activeTemp="f"):(Ct="celsius",tt.dataset.activeTemp="c"),Tt())}))})();