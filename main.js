(()=>{"use strict";var e={402:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #f1f1f1;\n  background: linear-gradient(45deg, rgb(105 45 48), rgb(59 74 58));\n  width: 25%;\n  height: 100vh;\n}\n\n.container {\n  width: 800px;\n  height: 602px;\n  background: linear-gradient(45deg, #101db6, #e2127abf);\n  display: grid;\n  grid-template: 100px 300px 100px 100px / repeat(8, 100px);\n  margin: 20% 0 20% 90%;\n  position: relative;\n  border: 1px solid #f1f1f1;\n}\n\nh1 {\n  position: relative;\n  top: 15px;\n  left: 150%;\n  color: #859181;\n  width: 125%;\n}\n\nform {\n  grid-area: 1 / 1 / 2 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #f1f1f1;\n}\n\nform input {\n  padding: 10px;\n  width: 50%;\n  border: 1px solid #a71e73;\n  border-radius: 5px;\n  margin-right: 2px;\n}\n\nform input::placeholder {\n  color: #a71e73;\n}\n\nbutton {\n  padding: 5px;\n  border: 3px solid  #4d1d99;\n  border-radius: 5px;\n  background-color: #a71e73;\n  color: #4d1d99;\n  font-size: 1.2em;\n}\n\n.logo-info {\n  grid-area: 2 / 1 / 3 / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo,\n.info {\n  width: 50%;\n}\n\n.logo img {\n  width: 100%;\n  height: auto;\n}\n\n.info .weather {\n  font-size: 40px;\n}\n\n.info .weather::first-letter {\n  text-transform: capitalize;\n}\n\n.info .temperature {\n  font-size: 60px;\n}\n\n.info .localization {\n  font-size: 40px;\n  word-wrap: break-word;\n}\n\n.hour-forecast {\n  grid-area: 3 / 1 / 4 / -1;\n}\n\n.day-forecast {\n  grid-area: 4 / 1 / 5 / -1;\n}\n\n.hour-forecast,\n.day-forecast {\n  display: grid;\n  grid-template: 100px / repeat(7, 1fr);\n}\n\n.hour,\n.day {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-top: 1px solid #f1f1f1;\n  font-size: 21px;\n}\n\n.hour:not(:last-child),\n.day:not(:last-child) {\n  border-right: 1px solid #f1f1f1;\n}\n\n.hour p,\n.day p {\n  margin: 5px;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],d=t[l]||0,s="".concat(l," ").concat(d);t[l]=d+1;var u=i(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:s,updater:m(f,n),references:1}),r.push(s)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,s=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var a=h++;t=p||(p=l(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var l=c(e,n),d=0;d<t.length;d++){var s=i(t[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=l}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(402);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];let a=(new Date).toLocaleDateString("en-EN",{weekday:"long"});a=a.charAt(0).toUpperCase()+a.slice(1);const i=o.slice(o.indexOf(a)),c=o.slice(0,o.indexOf(a)),l=i.concat(c);let d;const s=document.querySelector(".weather"),u=document.querySelector(".temperature"),f=document.querySelector(".localization"),p=document.querySelectorAll(".hour-forecast-name"),h=document.querySelectorAll(".hour-forecast-value"),m=document.querySelectorAll(".day-forecast-name"),g=document.querySelectorAll(".day-forecast-value"),y=document.querySelector(".logo"),v=document.createElement("img"),b=(e,n,t)=>{fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&\nlon=${n}&exclude=minutely&units=metric&appid=5020f52919e5e158831dceb8b9d46e77`).then((e=>e.json())).then((e=>{d=e,s.innerText=d.current.weather[0].description,u.innerText=`${Math.trunc(d.current.temp)}°C`;const n=d.timezone.split("/");f.innerText=n[1];for(let e=0;e<p.length;e+=1){const n=t+3*e;p[e].innerText=n>24?n-24+":00":24===n?"00:00":`${n}:00`}for(let e=0;e<h.length;e+=1)h[e].innerText=`${Math.trunc(d.hourly[3*e].temp)}°C`;for(let e=0;e<l.length;e+=1)m[e].innerText=l[e].slice(0,3);for(let e=0;e<7;e+=1)g[e].innerText=`${Math.trunc(d.daily[e+1].temp.day)}°C`;v.setAttribute("alt","logo of weather"),v.setAttribute("src",`svgs/${d.current.weather[0].icon}.svg`),y.appendChild(v)}))},x=document.getElementById("city");let w;const S=document.getElementById("city");document.querySelector(".city-entry").addEventListener("submit",(e=>{e.preventDefault(),(e=>{fetch(`http://api.positionstack.com/v1/forward?access_key=e38f9a4538444e94bac42b28e4027be5&query=${e}`).then((e=>e.json())).then((e=>{w=e;const{latitude:n}=w.data[0],{longitude:t}=w.data[0];fetch(`https://api.ipgeolocation.io/timezone?apiKey=99a67da6f017470da19b331a2c14b86c&lat=${n}&long=${t}`).then((e=>e.json())).then((e=>{const r=e.time_24.split(":"),o=parseInt(r,10);b(n,t,o)}))})).catch((()=>{x.setAttribute("placeholder","Please Add a Valid City Name"),setTimeout((()=>{x.setAttribute("placeholder","Try Another City")}),3e3)}))})(S.value.trim()),S.value=""})),navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const n=e.coords.latitude,t=e.coords.longitude,r=(new Date).getHours();b(n,t,r)}))})()})();