"use strict"
;__filename="background/clipboard.js",define(["require","exports","./store","./utils","./exclusions","./normalize_urls"],function(n,e,r,t,u,f){
var o,a,l,i,c,s,p,d,b,g,x,_,v,$,y,m,w;Object.defineProperty(e,"__esModule",{value:true}),
e.replaceUsingClipboard=e.doesNeedToSed=e.P=void 0,o={__proto__:null,atob:8,base64:9,base64decode:8,btoa:9,
base64encode:9,decodeforcopy:1,decode:1,decodeuri:1,decodeurl:1,decodemaybeescaped:2,decodeall:19,decodecomp:2,
encode:10,encodecomp:11,encodeall:12,encodeallcomp:13,unescape:3,upper:4,lower:5,capitalize:16,capitalizeall:17,
camel:14,camelcase:14,dash:15,dashed:15,hyphen:15,normalize:6,reverse:7,reversetext:7,break:99,stop:99,return:99,
latin:18,latinize:18,latinise:18,noaccent:18,nodiacritic:18,json:20,jsonparse:21,readablejson:25,virtual:22,
virtually:22,dryrun:22,inc:23,dec:24,increase:23,decrease:24},a=null,l=0,i=function(n,e){
var r,u,f,a,l,i,s,p,d,b,x,_,v,$,y,m,w=[],h=new Map
;for(r of n.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").split("\n"))if(r=r.trim(),
/^[<>][\w\x80-\ufffd]{1,8}$|^[\w\x80-\ufffd]{1,8}>$/.test(r)&&(r="s/^//,".concat(">"===r[0]?"paste":"copy","=").concat(r.endsWith(">")?r.slice(0,-1):r.slice(1))),
(u=/^([\w\x80-\ufffd]{1,8})([^\x00- \w\\\x7f-\uffff])/.exec(r))&&((a=h.get(f=u[2]))||(l="\\u"+(f.charCodeAt(0)+65536).toString(16).slice(1),
a=new RegExp("^((?:\\\\[^]|[^".concat(l,"\\\\])+)").concat(l,"(.*)").concat(l,"([a-z]{0,9})(?:,|$)")),h.set(f,a)),
i=a.exec(r=r.slice(u[0].length)))){
for(v of(s=u[1],p=i[3],b=[],x=null,_=0,(d=r.slice(i[0].length))?d.split(","):[]))($=v.toLowerCase()).startsWith("host=")?x=v.slice(5):$.startsWith("match")?_=Math.max($.includes("=")&&parseInt($.split("=")[1])||1,1):$.includes("=")?b.push($):(y=o[$.replace(/[_-]/g,"")]||0)&&b.push(y)
;(m=t.nr(i[1],_?p.replace(/g/g,""):p))&&w.push({er:e||g(s),rr:x,tr:m,ur:_,fr:c(i[2],1),or:b})}return w},c=function(n,e){
return n.replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[^])|\$[0$]/g,function(n,r){
return r?"x"===r[0]||"u"===r[0]?"$"===(r=String.fromCharCode(parseInt(r.slice(1),16)))?r+r:r:"t"===r?"\t":"r"===r?"\r":"n"===r?"\n":e?"0"===r?"$&":r>="1"&&r<="9"?"$"+r:r:r:e&&"$0"===n?"$&":n
})},s=function(n,e){
var t=14===e,u=15===e,f=16===e,o=17===e,a=r.kn<64||false?t||u?/(?:[-_\s\/+\u2010-\u2015]|(\d)|^)([a-z\u03b1-\u03c9]|[A-Z\u0391-\u03a9]+[a-z\u03b1-\u03c9]?)|[\t\r\n\/+]/g:f?/(\b|_)[a-z\u03b1-\u03c9]/:o?/(\b|_)[a-z\u03b1-\u03c9]/g:null:new RegExp(t||u?"(?:[-_\\t\\r\\n/+\\u2010-\\u2015\\p{Z}]|(\\p{N})|^)(\\p{Ll}|\\p{Lu}+\\p{Ll}?)|[\\t\\r\\n/+]":f||o?"(\\b|_)\\p{Ll}":"",f?"u":"ug"),l=0,i=0,c=function(n,e){
return e?n.toLocaleLowerCase():n.toLocaleUpperCase()};return n=t||u?n.replace(a,function(e,r,t,f){
var o="\t\r\n/+".includes(e[0]),a=o||!l++&&n.slice(i,f).toUpperCase()===n.slice(i,f).toLowerCase();return o&&(l=0,
i=f+1),
t=t?t.length>2&&t.slice(-1).toLowerCase()===t.slice(-1)&&!/^e?s\b/.test(n.substr(f+e.length-1,3))?u?c(t.slice(0,-2),true)+"-"+c(t.slice(-2),true):c(t[0],a)+c(t.slice(1,-2),true)+c(t.slice(-2,-1),false)+t.slice(-1):u?c(t,true):c(t[0],a)+c(t.slice(1),true):"",
(o?e[0]:(r||"")+(r||u&&!a?"-":""))+t}):f||o?n.replace(a,function(n){return c(n,false)}):n,
u&&(n=n.replace(r.kn<64||false?/[a-z\u03b1-\u03c9]([A-Z\u0391-\u03a9]+[a-z\u03b1-\u03c9]?)/g:new RegExp("\\p{Ll}(\\p{Lu}+\\p{Ll})","ug"),function(e,r,t){
return r=r.length>2&&r.slice(-1).toLowerCase()===r.slice(-1)&&!/^e?s\b/.test(n.substr(t+e.length-1,3))?c(r.slice(0,-2),true)+"-"+c(r.slice(-2),true):c(r,true),
e[0]+"-"+r})),n},p=function(n){return n.replace(r.kn<64||false?/[\u0300-\u0362]/g:new RegExp("\\p{Diacritic}","gu"),"")
},d=function(n){return(n=JSON.stringify(n).slice(1,-1)).replace(/[<\s"$%&#()?:+,;]/g,function(n){
return"\\u"+(n.charCodeAt(0)+65536).toString(16).slice(1)})},b=function(n){
return n=(n='"'===n[0]?n.slice(1,n.endsWith('"')?-1:void 0):n).replace(/[\r\n\0]/g,function(n){
return n<"\n"?"\\0":n>"\n"?"\\r":"\\n"}),n='"'.concat(n,'"'),t.tryParse(n)},e.P=function(n){
if(null!=n.$sed)return n.$sed;var e=n.sed,r=n.sedKeys||n.sedKey
;return null!=e||r||0===r?e&&"object"==typeof e?null!=e.r||e.k?e:null:n.$sed={r:"number"==typeof e?e+"":e,
k:"number"==typeof r?r+"":r}:null},g=function(n,e){var r,t,u,f,o,a,l
;if("object"==typeof n)return n.ar||n.lr?n:e?e.k=null:null
;for(r=null,t=0,"_"===(u="number"==typeof n?n+"":n)[0]&&(r=[u.slice(1)],
u=""),f=0;f<u.length;f++)(a=-33&(o=u.charCodeAt(f)))>64&&a<91?t|=83===a?32772:1<<a-65:(r||(r=[]),
!e&&r.includes(o)||r.push(o));return l=t||r?{ar:t,lr:r}:null,e?e.k=l:l},x=function(n,e){var r,t;if(n.ar&e.ar)return true
;if(r=e.lr,!n.lr||!r)return false;for(t of n.lr)if(r.includes(t))return true;return false},
e.doesNeedToSed=function(n,e){var t,u;if(e&&(false===e.r||e.r&&true!==e.r))return false!==e.r
;for(u of(t=e&&e.k&&g(e.k,e)||(n?{ar:n,lr:null}:null),a||t&&(a=i(r.z.clipSub,null)),t?a:[]))if(x(u.er,t))return true
;return false},_=function(n){
return n.startsWith(",")&&(n="s/^//"+n),n.includes("\n")?n:r.kn>63||false?n.replace(new RegExp("(?<!\\\\) ([\\w\\x80-\\ufffd]{1,8})(?![\\x00- \\w\\\\\\x7f-\\uffff])","g"),"\n$1"):n.replace(/\\ | ([\w\x80-\ufffd]{1,8})(?![\x00- \w\\\x7f-\uffff])/g,function(n,e){
return" "===n[1]?n:"\n"+e})},v=function(n,e,t){var u,f,o,a=e.fr;return a.includes("${")?(u=new Map,f=new Map,
o=a.replace(/\$(?:\$|\{([^}]*)})/g,function(n,e){var t,f,o
;return e?(t=e.split(/>(?=[\w\x80-\ufffd]{1,8}$)/)).length>1&&t[0]?(o=t[1],
f="0"===(f=t[0])||"$0"===f?"&":"$"===f[0]?f.slice(1):1===f.length?f:{input:"_",lastMatch:"&",lastParen:"+",
leftContext:"`",rightContext:"'"}[f]||"1",u.has(o)?u.get(o).push(f):u.set(o,[f]),
"$"+f):(r.ir.get(e.replace(/^<|>$/,""))||"").replace(/\$/g,"$$$$"):n}),n=n.replace(e.tr,u.size?function(){
var e=arguments,r=e.length,t=e[r-2];return o.replace(/\$([$1-9_&+`'])/g,function(u,o){if("$"===o)return"$"
;var a="_"===o?n:"&"===o?e[0]:"`"===o?n.slice(0,t):"'"===o?n.slice(t+e[0].length):r-3<=0?"":o>="1"&&o<"9"?+o<=r-2?e[+o]:"":"+"===o?e[r-3]:e[1]
;return f.set(o,a),a})}:o),u.forEach(function(n,e){var u=n.reduce(function(n,e){return n||f.get(e)||""},"")
;l!==t?r.ir.set(e,u):$(e,u)}),n):n.replace(e.tr,a)},e.replaceUsingClipboard=v,r.R=function(n,f,v,y){
var m,w,h,j,z,k=v&&"object"==typeof v?v.r:v;if(false===k)return n;for(z of(m=a||(a=i(r.z.clipSub,null)),
k&&("number"==typeof k||"string"==typeof k&&k.length<=8&&!/[^\w\x80-\ufffd]/.test(k))&&(v={r:null,k:k},k=null),
w=v&&"object"==typeof v&&(v.k||0===v.k)&&g(v.k,v)||(f?{ar:f,lr:null}:null),k&&true!==k&&(w||(m=[]),m=i(_(k+""),w||(w={
ar:1073741824,lr:null})).concat(m)),h=l,j=function(f){var a,l,i,_,v,m,j,z,k,L,M
;if(x(f.er,w)&&(!f.rr||("string"==typeof f.rr&&(f.rr=u.cr(f.rr)||-1),-1!==f.rr&&u.sr(f.rr,n)))){if(a=-1,l=n,f.ur?(i=0,
v=f.ur,l.replace(f.tr,function(n){var e=arguments;return a=(i=e[e.length-2])+n.length,_=e.length>2+v&&e[v]||"",""}),
a>=0&&(l=(m=e.replaceUsingClipboard(l,f,h)).slice(i,m.length-(l.length-a))||_||l.slice(i,a))):f.tr.test(l)&&(a=f.tr.lastIndex=0,
l=e.replaceUsingClipboard(l,f,h)),a<0){if(j=(f.or.find(function(n){return"string"==typeof n&&n.startsWith("else=")
})||"").slice(5)){if(99===o[j])return"break";/^[\w\x80-\ufffd]{1,8}$/.test(j)&&(w=g(j))}return"continue"}
for(k of(z=false,f.or))if("string"!=typeof k){if(z=99===k)break
;l=l?1===k?t.pr(l):2===k?t.dr(l):19===k?t.dr(l,true):3===k?c(l):4===k?l.toLocaleUpperCase():5===k?l.toLocaleLowerCase():10===k?t.br(l):11===k?t.gr(l):12===k?encodeURI(l):13===k?encodeURIComponent(l):8===k?t.Zn(l,"atob"):9===k?btoa(l):20===k?d(l):25===k?JSON.stringify(l).slice(1,-1):21===k?b(l):23===k?+l+1+"":24===k?+l-1+"":(l=6!==k&&7!==k&&18!==k||false?l:l.normalize(18===k?"NFD":"NFC"),
7===k?Array.from(l).reverse().join(""):18===k?p(l):14===k||15===k||16===k||17===k?s(l,k):l):""}else L=k.split("=")[0],
M=k.slice(L.length+1),
"copy"===L?$(M,l):"paste"===L?l=r.ir.get(M)||"":"keyword"===L&&y?y.S=M:"act"===L&&y&&(y.xr="false"!==M)
;if(!f.or.includes(22)&&(n=l,z))return"break"}},w?m:[]))if("break"===j(z))break;return t._r(),n},$=function(n,e){
r.ir.set(n,e),l&&clearTimeout(l),l=setTimeout(function(){r.ir.clear(),l=0},1e4)},y=function(){
var n=globalThis.document.createElement("textarea");return n.style.position="absolute",n.style.left="-99px",
n.style.width="0",n},m=function(n,e,u,o){var a,l,i,c=o,s=function(n){var e=r.vr.map.get(o)
;return e?f.$r(n.trim().split(t.F),e.yr,e.l):n};return"string"!=typeof n?(n=n.map(function(n){var e,t={},f=r.R(n,4,u,t)
;return(o=null!==(e=t.S)&&void 0!==e?e:c)?s(f):f
}),n="string"==typeof e&&e.startsWith("json")?JSON.stringify(n,null,+e.slice(4)||2):n.join(e!==!!e&&e||"\n")+(n.length>1&&(!e||e===!!e)?"\n":""),
false!==(u&&"object"==typeof u?u.r:u)&&(n=r.R(n,4096)),
n):(32!==(l=(n=n.replace(/\xa0/g," ").replace(/\r\n?/g,"\n")).charCodeAt(n.length-1))&&9!==l||((l=n.lastIndexOf("\n")+1)?n=n.slice(0,l)+n.slice(l).trimRight():32!==(l=n.charCodeAt(0))&&9!==l&&(n=n.trimRight())),
n=r.R(n,4,u,i={}),n=(o=null!==(a=i.S)&&void 0!==a?a:c)?s(n):n)},w=function(n,e,t){return n&&(n=n.replace(/\xa0/g," "),
n=r.R(n,32768,e,t)),n},r.mr=function(n,e,r,t){
var u,f,o=r&&("string"==typeof r?r:"object"==typeof r&&(r.r||r.k)),a=o&&"string"==typeof o&&">"===o[0]?o.slice(1):null
;return a&&(r=null),n=m(n,e,r,t),a?($(a,n),n):n?(u=globalThis.document,(f=y()).value=n,u.body.appendChild(f),f.select(),
u.execCommand("copy"),f.remove(),f.value="",n):""},r.wr=function(n,e,u){var f,o,a;return f=globalThis.document,
(o=y()).maxLength=e||102400,f.body.appendChild(o),o.focus(),f.execCommand("paste"),a=o.value.slice(0,e||102400),
o.value="",
o.remove(),o.removeAttribute("maxlength"),!e&&a.length>=81920&&("data:"===a.slice(0,5).toLowerCase()||t.hr(a))?r.wr(n,20971520):w(a,n,u)
},r.at.clipSub=function(){a=null}});