"use strict";__filename="pages/show.js",define(["require","exports","./async_bg"],function(n,e,t){function i(){return __awaiter(this,void 0,void 0,function*(){var n,i,u,a,h,m,g,p,w,v,b,k,U,z,$;for(C&&(y(),q.style.display="none",C.remove(),C=null),VData=window.VData=Object.create(null),n=location.hash,i="",u="",N||!n&&S&&(a=yield t.O(17))?(n=N||a,N="",/^[^:]+[ &]data:/i.test(n)&&(V=-1),h=j(n,V=V||Math.floor(4294967296*Math.random())||3286711320,true),history.state?history.pushState(h,"",""):history.replaceState(h,"",""),window.name=""+V):n||!history.state||(V?(n=j(history.state,V,false),window.name=""+V):history.replaceState(null,"","")),VData.full=n,n.length<3||(n.startsWith("#!image")?(n=n.slice(7),i="image"):/^#!(url|text)\b/.test(n)&&(n=n.slice("url"==(i="u"===n[2]?"url":"text")?5:6))),n=n.startsWith("%20")?n.slice(3):n.trim(),m=0;m=n.indexOf("&")+1;n=n.slice(m))if(p=(g=n.slice(0,m).indexOf("="))>0?n.slice(0,g):"",w=g>0?n.slice(g+1,m-1):"","download"===p)u=(u=c(w).split(/\||\uff5c| [-\xb7] /,1)[0].trim()).replace(/[\r\n"]/g,""),VData.file=u;else if(w=w.toLowerCase(),"auto"===p)VData.auto="once"===w?w:"true"===w||"false"!==w&&parseInt(w,10)>0;else if("pixel"===p)VData.pixel="1"===w||"true"===w;else{if("incognito"!==p)break;VData.incognito="true"===w||"false"!==w&&parseInt(w,10)>0}switch(v=c(n,n.includes(":")||n.includes("/")?decodeURI:null),(n=(v==n||/[%\n]/.test(v)?n:v).trim())?n.toLowerCase().startsWith("javascript:")?i=n=u=VData.file="":S?(b=yield t.O(10,[n,-2]))[1]<=2&&(n=b[0]):n.startsWith("//")?n="http:"+n:/^([-.\dA-Za-z]+|\[[\dA-Fa-f:]+])(:\d{2,5})?\//.test(n)&&(n="http://"+n):"image"===i&&(i=""),VData.type=i,/^data:/i.test(n)&&(n="data:"+n.slice(5).replace(/#/g,"%23")),VData.url=VData.original=n,i){case"image":VData.auto&&(k=yield x(S&&(yield t.O(18,[n,256]))||n,n))&&(console.log("Auto predict a better URL:\n %o =>\n %o",n,k),n=VData.url=k),(C=f("shownImage")).onerror=function(){VData.url!==VData.original&&VData.url?I():(T(),VData.auto=false,this.onerror=this.onload=null,this.alt=VData.error=e.Ln("failInLoading"),t.Ot>=60&&this.classList.add("broken"),setTimeout(r,34),this.onclick=function(n){return __awaiter(this,void 0,void 0,function*(){S&&(yield t.O(19,VData.url))||(n.ctrlKey||n.shiftKey||n.altKey||!t.sn.tabs||!t.sn.tabs.update?o({target:"_top"},n):t.sn.tabs.update({url:VData.url}))})})},/[:.]/.test(n)?(C.alt=e.Ln("loading"),C.onclick=l,C.onload=function(){var n,e,i,o,a,c,l,s,d,h=this.naturalWidth,m=this.naturalHeight;if(h<12&&m<12){if(VData.auto)return void I();if(h<2&&m<2)return console.log("The image is too small to see."),void this.onerror(null)}if(VData.original=VData.url,T(),((e=(n=VData.url.slice(0,6).toLowerCase()).startsWith("blob:"))||n.startsWith("data:")&&!this.src.startsWith("data"))&&(q.dataset.vimUrl=VData.original=VData.url=this.src,L(e?0:1)),this.onerror=this.onload=null,this.src.startsWith("blob:")||setTimeout(function(){C.src=C.src},0),r(),this.alt=u,this.classList.add("zoom-in"),VData.pixel&&(M.classList.add("pixel"),i=devicePixelRatio,h>innerWidth*i*.9&&m>innerHeight*i*.9)){for((o=f("snapshot-banner",true)).querySelector(".banner-close").onclick=function(){o.remove()},a=o.querySelectorAll("[data-i]"),c=0;c<a.length;c++)s=(l=a[c].dataset.i).endsWith("-t"),(d=t.y(s?l.slice(0,-2):l))&&(s?a[c].title=d:a[c].textContent=d);M.insertBefore(o,M.firstChild)}h>=.9*innerWidth&&M.classList.add("filled")},U=yield X(n),R(n,C,U)):(n=VData.url="",C.onerror(null),C.alt=VData.error=e.Ln("none")),u&&(VData.file=u=_(u)||u,(z=u.split(/[/\\]+/)).length>1&&C.setAttribute("download",z[z.length-1]),C.setAttribute("aria-title",u));break;case"url":case"text":if(C=f("shownText"),n&&"text"!==i){if("string"!=typeof($=yield t.O(16,n))){d($[1],$[0]||$[2]||"");break}n=$}d(i,n=A(n)||n);break;default:n="",(C=f("shownImage")).src="../icons/icon128.png",q.style.display="none"}q.dataset.vimUrl=n,u?(q.dataset.vimText=u,q.download=u):(q.removeAttribute("data-vim-text"),q.removeAttribute("download")),q.onclick=C?s:l})}function r(){var n=C.scrollWidth;q.style.height=C.scrollHeight+"px",q.style.width=n+"px",q.style.display=""}function o(n,e){var i,r;if(t.Kt(e),VData.url){for(r in i=document.createElement("a"),Object.setPrototypeOf(n,null),n)i.setAttribute(r,n[r]);i.href=VData.url,t._n(i,e)}}function u(n){var e,i,r,o,u,c,f;if(VData.error)return false;if(e=n.keyCode,"space"===(r=(i=VApi&&VApi.z?VApi.r[3]({c:" ",e:n,i:e,v:""},9):32===e?"space":13===e?"enter":"").slice(i.lastIndexOf("-")+1)||i&&"-")||"enter"===r)return VData.pixel&&(u=(o=document.activeElement)&&document.querySelector("#snapshot-banner"))&&u.contains(o)?((c=u.querySelector(".banner-close")).contains(o)&&c.onclick(null),true):(t.Kt(n),"enter"===r&&H&&H.isShown&&!H.hiding&&!H.played?H.play(true):H&&H.isShown&&!H.hiding||t._n(C,n),true);switch(f=0,i){case"c-=":case"m-=":case"+":case"=":case"up":f=1;break;case"left":f=-2;break;case"right":f=2;break;case"c--":case"m--":case"-":case"down":f=-1;break;default:return false}return t.Kt(n),n.stopImmediatePropagation(),H&&H.viewed?a(H,f):(B=false,v().then(b).then(function(n){a(n,f)}).catch(w)),true}function a(n,e){2===e||-2===e?n.rotate(45*e):n.zoom(e/10,true)}function c(n,e){try{n=(e||decodeURIComponent)(n)}catch(n){}return n}function f(n,e){var i=t.$("#bodyTemplate"),r=document.importNode(i.content.querySelector("#"+n),true);return e||document.body.insertBefore(r,i),r}function l(n){if(n.altKey)return n.stopImmediatePropagation(),o({download:VData.file||""},n);switch(VData.type){case"url":o({target:"_blank"},n);break;case"image":if(VData.error)return;B=n.ctrlKey||n.metaKey,v().then(b).catch(w)}}function s(n){t.Kt(n),C.onclick&&C.onclick(n)}function d(n,i){n="number"==typeof n?["math","copy","search","ERROR","status","paste","run","url","run-one-key"][n]:n,t.$("#textTip").dataset.text=e.Ln("t_".concat(n))||n,t.$(".colon").dataset.colon=e.Ln("colon")+e.Ln("NS");var o=t.$("#textBody");return i?(o.textContent="string"!=typeof i?i.join(" "):i,C.onclick=h):o.classList.add("null"),r()}function h(n){var e,i=getSelection(),r=""+i;if(!r||"image"===VData.type&&r.trim()===C.alt.trim()){if("image"===VData.type&&VData.url){if("Range"===i.type&&!VData.url.startsWith(location.protocol))return;if(t.Kt(n),(e=navigator.clipboard)&&e.write)return void(null!=W?Promise.resolve(W):fetch(VData.url,{cache:"force-cache",referrer:"no-referrer"}).then(function(n){return n.blob()}).catch(function(){return m(VData.url),0}).then(function(n){return W=n})).then(function(n){var i,r,o,u;if(n)return(i={})["image/png"]="image/png"!==n.type?new Blob([n],{type:"image/png"}):n,r=i,/^(http|ftp|file)/i.test(VData.url)&&(r["text/plain"]=new Blob([VData.url],{type:"text/plain"})),o=function(){return e.write([new ClipboardItem(r)])},t.Ot<86?o():((u=document.createElement("img")).src=VData.url,VData.file&&u.setAttribute("aria-title",u.alt=VData.file),r["text/html"]=new Blob([u.outerHTML],{type:"text/html"}),o().catch(function(){return delete r["text/html"],o()}))}).catch(function(n){console.log(n),m(VData.url)})}m("url"===VData.type?t.$("#textBody").textContent:VData.url,n)}}function m(n,e){n&&VApi&&(e&&t.Kt(e),VApi.p({H:18,s:n}))}function g(n){"image"===VData.type&&(VData.error||H&&H.isShown&&!H.hiding?t.Kt(n):C.classList.toggle("invert"))}function p(n){if(!t.$('link[href="'+n+'"]')){var e=document.createElement("link");return e.rel="stylesheet",e.href=n,new Promise(function(n){e.onload=function(){e.onload=null,n()};var i=t.$('link[href$="show.css"]');document.head.insertBefore(e,i)})}}function w(n){n&&console.log("%o",n)}function v(){return P?Promise.resolve(P):Promise.all([t.bn("../lib/viewer.js"),p("../lib/viewer.css")]).then(function(n){var e,t,i,r=n[0];return(r=r&&"function"==typeof r?r:window.Viewer).setDefaults({navbar:false,shown:function(){q.style.display="none"},viewed:function(){E&&E(true)},zoom:function(n){var e,t,i,r,o,u;if(F){if(o=(i=(t=H.imageData).naturalWidth*(e=n.detail.ratio))-t.width,u=(r=t.naturalHeight*e)-t.height,1===e)t.oldXY=[t.x,t.y],t.x=(innerWidth-i)/2|0,t.y=(innerHeight-r)/2|0;else{if(!t.oldXY)return;t.x=t.oldXY[0],t.y=t.oldXY[1]}t.x+=o/2,t.y+=u/2}},hide:function(){q.style.display="",E&&E(false)}}),t=(e=r.prototype).initImage,i=e.toggle,e.initImage=function(n){var e=[].slice.call(arguments);e[0]=function(){var e,t,i,r,o,u,a=H&&H.imageData;a&&(e=a.naturalWidth,t=a.naturalHeight,r=(i=!!document.webkitFullscreenElement)?window.screen.availWidth:e,o=i?window.screen.availHeight:t,(i?e>=r&&t>=o:!B&&a.ratio<1)&&(u=i?Math.max(r/e,o/t):1,a.left=a.x=i?(r-e*u)/2|0:0,a.top=a.y=i?(o-t*u)/2|0:0,a.width=Math.round(e*u),a.height=Math.round(t*u),a.ratio=u)),n.apply(this,arguments)},t.apply(this,e)},e.toggle=function(n){F=!(n||!H||1===this.imageData.ratio&&1===this.imageData.oldRatio);var e=i.apply(this,arguments);return F=false,e},P=r,r})}function b(n){var e,t=scrollX||scrollY,i=getSelection();return"Range"===i.type&&i.collapseToStart(),(e=H=H||new n(C)).scrollbarWidth=0,e.hiding&&(e.isShown=false),e.isShown||e.show(),e.hiding=false,t&&scrollTo(0,0),e.viewed?(e.zoomTo(1),e):new Promise(function(n,t){E=function(i){E=null,i?n(e):t("failed to view the image")}})}function y(){if(k(),W=null,Z&&(Z(),Z=null),"image"===VData.type){var n=document.body.classList;C.classList.remove("svg"),n.remove("pixel"),n.remove("filled"),C.removeAttribute("src"),C.onerror=C.onload=null,H&&(H.destroy(),H=null)}}function x(n,e){return __awaiter(this,void 0,void 0,function*(){function t(n){try{return new URL(n)}catch(n){}return null}function i(n){try{n=decodeURIComponent(n||"")}catch(n){}return n}var r,o,u,a,c,f,l,s,d,h,m,g,p,w,v,b,y=t(n);if(!y||!/^(ht|s?f)tp/i.test(y.protocol))return null;if(r=y.origin,o=y.pathname,e=e||n,(u=y.search).length>10)for(a of u.slice(1).split("&")){if(c=a.split("=",1)[0],(l=f=a.slice(c.length+1)).length>7)if(!l.includes("://")&&/%(?:3[aA]|2[fF])/.test(l)&&(l=i(l).trim()),l.includes("/")&&null!=t(l)){if(/^(?:imgurl|mediaurl|objurl|origin(?:al)?|real\w*|src|url)$/i.test(c))return l;if(s=l.split("?")[0].split("/"),O.test(s[s.length-1])&&!/\bthumb/i.test(c))return l}else if("id"===c&&/&w=\d{2,4}&h=\d{2,4}/.test(u))return r+o+"?id="+f;if("name"===c&&/^(\d{2,4}x\d{2,4}|small)$/i.test(f)&&u.toLowerCase().includes("format="))return r+o+u.replace(l,"large");if(/^(x-)?(\w+)-?process\b/i.test(c)&&f.toLowerCase().includes("image/")&&/resize|quality/i.test(f))return r+o+((u=u.replace(c+"="+f,"")).length>1?u:"")}if(d=null,(d=/[?&]s=\d{2,4}(&|$)/.exec(u))&&u.split("=").length<=4)return r+o;if(h=(u=o).lastIndexOf("/")+1,p=null,g=(m=(u=u.slice(h)).lastIndexOf("@")+1||u.lastIndexOf("!")+1)>2||O.test(u)){for(h+=m,u=u.slice(m),w=/(?:[.\-_]|\b)(?:[1-9]\d{2,3}[a-z]{1,3}[_\-]?|[1-9]\d?[a-z][_\-]?|0[a-z][_\-]?|[1-9]\d{1,3}[_\-]|[1-9]\d{1,2}(?=[.\-_]|\b)){2,6}(?=[.\-_]|\b)/gi;p=w.exec(u);d=p);d&&/.[_\-].|\d\dx\d/i.test(d[0])?(p=O.exec(u.slice(d.index+d[0].length)),v=d[0].length,p&&0===p.index&&(v+=p[0].length),u=o.slice((h+=d.index)+v),o.lastIndexOf("@",h+v)>=0&&u.includes("!")&&(b=u.slice(u.indexOf("!")).toLowerCase()).includes("cover")&&/^![a-z\d_\.-]+\.(avif|jpe?g|a?png|svg|webp)$/.test(b)&&(u=u.split("!")[0]),/[@!]$/.test(u||o.charAt(h-1))?u?u=u.slice(0,-1):h--:u||!p||0!==p.index||O.test(o.slice(Math.max(0,h-6),h))||(u=p[0])):(d=/\b([\da-f]{8,48})([_-](?:[a-z]{1,2}|\d{3,4}[whp]?))\.[a-z]{2,4}$/.exec(u))?(h+=d.index+d[1].length,u=u.slice(d.index+d[1].length+d[2].length)):(d=/\b((?:[1-9]\d{1,3}[whxyp][_\-x]?){1,2})\.[a-z]{2,4}$/.exec(u))?(h+=d.index,u=u.slice(d.index+d[1].length)):g=false}return g||m>2?g=g||0:(d=/_(0x)?[1-9]\d{2,3}([whp]|x0)?\./.exec(u))?u=u.slice(0,d.index)+u.slice(d.index+d[0].length-1):u.startsWith("thumb_")?u=u.slice(6):/^[1-9]\d+$/.test(u)&&+u>0&&+u<640?(h--,u=""):O.test(u)&&/^\/(small|(thumb|mw|orj)[1-9]\d{2,3})\//.test(o)?(g=true,u="/large"+o.slice(o.indexOf("/",1)),h=0):g=0,0!==g?r+o.slice(0,h)+u:e!==n?n:null})}function _(n){var e,t,i,r;if(n&&!/.\.[a-z]{3,4}\b/i.test(n)){if(e=O.exec(VData.url))return n+e[0];if((t=W?W.type.toLowerCase():"").startsWith("image/"))for(r in i={jpeg:"jpg",png:0,bmp:0,svg:0,gif:0,tif:0,ico:0})if(i.hasOwnProperty(r)&&t.includes(r))return i[r]||"."+r}}function R(n,i,r){var o,u,a,c,f=new Text,l=Z=function(){i.removeEventListener("load",l),i.removeEventListener("error",l),clearTimeout(c),f.remove(),Z===l&&(Z=null)};i.addEventListener("load",l,true),i.addEventListener("error",l,true),u=(o=n.slice(0,20).toLowerCase()).startsWith("blob:"),(a=o.startsWith("data:"))&&o.startsWith("data:image/svg+xml,")&&i.classList.add("svg"),r?i.src=n:(k(),M.replaceChild(f,i),Promise.resolve($[n]||(t.Ot<48?new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){e(this.response)},i.onerror=function(n){t("Error: "+n.message)},i.open("GET",n,true),i.send()}):fetch(n,u||a?{}:{cache:"no-store",referrer:"no-referrer"}).then(function(n){return n.blob()}))).then(function(e){return $[n]=e,G=URL.createObjectURL(W=e)},function(){return n}).then(function(n){i.src=n,f.parentNode?M.replaceChild(i,f):M.appendChild(i)})),c=setTimeout(function(){!i.parentNode||i.scrollHeight>=24||i.scrollWidth>=80?l():f.parentNode||(M.insertBefore(f,i),f.data=e.Ln("loading"))},400)}function k(){G&&(URL.revokeObjectURL(G),G="")}function A(n){var e=n.split(":",1)[0];switch(e.toLowerCase()){case"thunder":case"flashget":case"qqdl":n=n.slice(e.length+3).split("&",1)[0];break;default:return""}try{n=atob(n)}catch(n){return""}return n.startsWith("AA")&&n.endsWith("ZZ")&&(n=n.slice(2,-2)),n.startsWith("[FLASHGET]")&&n.endsWith("[FLASHGET]")&&(n=n.slice(10,-10)),A(n)||n}function I(){console.log("Failed to visit the predicted URL, so go back to the original version."),T(),VData.auto=false,i()}function T(){var n=false;return"once"===VData.auto&&(VData.auto=false,n=true),n&&L(),n}function L(n){var e,t,i=VData.type;i&&(e="#!"+i+" "+(VData.incognito?"incognito=1&":"")+(VData.file?"download="+U(VData.file)+"&":"")+(VData.auto?"auto="+("once"===VData.auto?"once":1)+"&":"")+(VData.pixel?"pixel=1&":"")+VData.original,VData.full=e,n||(t=j(e,V,true),history.replaceState(t,"","")))}function U(n){return n.replace(t.Ot<64||false?/[\x00-`{-\u0390\u03ca-\u4dff\u9fa6-\uffff\s]+/g:new RegExp("[^\\p{L}\\p{N}]+","ug"),encodeURIComponent)}function j(n,e,t){var i,r,o;if(-1===e)return n;if(i=[],t)n=encodeURIComponent(n);else try{n=atob(n)}catch(e){n=""}for(r of n)i.push(r.charCodeAt(0));for(o=0;o<i.length;o++)i[o]=255&(i[o]^e>>>8*(3&o));if(n=String.fromCharCode.apply(String,i),t)n=btoa(n);else try{n=decodeURIComponent(n)}catch(e){n=""}return n}function z(){return VData&&VData.full?location.href.split("#",1)[0]+VData.full:location.href}var VData,S,$,M,P,C,q,E,H,V,B,F,O,G,W,Z,N,X;Object.defineProperty(e,"__esModule",{value:true}),e.Ln=void 0,VData=null,S=true,$={},M=document.body,C=null,q=t.$("#bgLink"),E=null,H=null,V=+window.name||0,B=false,F=false,O=/\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)(?=[.\-_]|\b)/i,G="",W=null,e.Ln=function(n,e){return t.y(n,e)||""},t.R(1),t.Sn.then(function(){VApi.u=z}),t.V(function(){window.onhashchange=i,window.onpopstate=i,i().then(function(){t.Sn.then(t.An)}),t.O(31).then(function(n){t.P(n.os)})}),window.onunload=k,M.ondrop=function(n){var e,r,o=n.dataTransfer.files;1===o.length&&(r=(e=o.item(0)).name,(e.type.startsWith("image/")||O.test(r))&&(t.Kt(n),N="#!image download="+U(r)+"&"+URL.createObjectURL(e),i()))},M.ondragover=M.ondragenter=function(n){var e=n.dataTransfer.items;1===e.length&&e[0].type.startsWith("image/")&&t.Kt(n)},document.addEventListener("keydown",function(n){var e,r;"image"===VData.type&&u(n)||!n.ctrlKey&&!n.metaKey||n.altKey||t.Hn(n)||t.Tn(n)||("S"===(e=String.fromCharCode(n.keyCode))?o({download:VData.file||""},n):"C"===e?h(n):"A"===e?g(n):"O"===e&&(t.Kt(n),(r=document.createElement("input")).type="file",r.accept="image/*",r.onchange=function(){var n=r.files&&r.files[0];n&&(N="#!image download="+U(n.name)+"&"+URL.createObjectURL(n),i())},document.body.appendChild(r),setTimeout(function(){r.remove()},0),r.click()))}),X=function(n){var e=n.slice(0,20).toLowerCase();return!(e.startsWith("blob:")||e.startsWith("data:")&&n.length>1e4)&&(!/^(ht|s?f)tp|^data:/.test(e)||!("cache"in Request.prototype)||!VData.incognito&&t.O(5,{key:"showInIncognito"}).then(function(n){return!n}))}});