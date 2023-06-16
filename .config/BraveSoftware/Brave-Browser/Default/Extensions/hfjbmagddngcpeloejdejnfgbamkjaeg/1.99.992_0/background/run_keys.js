"use strict"
;__filename="background/run_keys.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./i18n","./key_mappings","./run_commands"],function(n,e,t,r,l,u,i,o,f,a){
var s,c,v,p,d,y,$,b,k,g,m,h,j;Object.defineProperty(e,"__esModule",{value:true}),
e.parseEmbeddedOptions=e.parseKeyNode=e.runKeyInSeq=e.parseKeySeq=e.runKeyWithCond=void 0,s=Math.abs,
c=["expect","keys","options","mask"],v=0,p=function(n){var e,t,l=r.i(),u=[],i=""
;for(e in n)e.includes("$")||(e.startsWith("o.")?e.length>2&&(l[i=e.slice(2)]=n[e]):c.includes(e)||u.push(e))
;for(t of u)l[i=t]=n[t];return i?l:null},d=function(n,o){
var f,a,s,c,v,p,d=n.host,y=n.iframe,$=n.fullscreen,b=n.element,k=n.incognito
;if(void 0===d&&(d=n.host=null!=n.url?n.url:null,delete n.url),null!=k&&2===t.cn!=!!k)return 1
;if("string"==typeof d&&(d=n.host=i.cr(d)),null!=d){
if(a=void 0,null!=(f=o.url)||(3===d.t?!["/*","*"].includes(d.v.p.pathname)||"*"!==d.v.p.search||"*"!==d.v.p.hash:2!==d.t||(a=d.v.indexOf("/",d.v.indexOf("://")+3))!==d.v.length-1&&-1!==a)||(f=(c=(s=u.C())&&s.j||t.O)?c.s.yr:null),
null==f&&(f=u.$(null,true))instanceof Promise)return f.then(function(n){var r
;o.url=n||(t.O?((null===(r=u.C())||void 0===r?void 0:r.j)||t.O).s.yr:""),e.runKeyWithCond(o)}),0;if(!i.sr(d,f))return 1}
if(null!=y){if(!t.O&&false!==y)return 1;if("string"==typeof y&&(y=n.iframe=i.cr(y)||true),"boolean"==typeof y){
if(y!==!!(t.O&&t.O.s.J))return 1}else if(!i.sr(y,t.O.s.yr))return 1}if(null==$);else{
if(null==o.fullscreen)return l.getCurWnd(false,function(n){return o.fullscreen=!!n&&n.state.includes("fullscreen"),
e.runKeyWithCond(o),l.m()}),0;if(!!$!==o.fullscreen)return 1}if(b&&"*"!==b&&(v="string"==typeof b?[]:b,
"string"==typeof b&&(n.element=b.split(",").some(function(n){
var e=(n="*"===n[0]?n.slice(1):n).indexOf("#"),t=n.indexOf("."),l=n.length;return n&&v.push({
tag:n.slice(0,e<0?t<0?l:t:t<0?e:Math.min(t,e)),id:e>=0?n.slice(e+1,t>e?t:l):"",
classList:r.fl(t>=0?n.slice(t+1,e>t?e:l):"")}),"*"===n||n.includes(" ")})?(v.length=0,"*"):v),p=o.element,v.length)){
if(null==p)return t.O&&u.safePost(t.O,{N:13,n:performance.now(),c:o}),t.O?0:1;if(!v.some(function(n){
return 0===p?"body"===n.tag&&!n.id&&!n.classList:(!n.tag||p[0]===n.tag)&&(!n.id||p[1]===n.id)&&(!n.classList.length||p[2].length>0&&n.classList.every(function(n){
return p[2].includes(n)}))}))return 1}return 2},y=function(n){var e,t,l,u=n.expect
;return n.$normalized?u:(e=function(n){
return n?"string"!=typeof n?n instanceof Array?n:[]:(n=n.trim()).includes(" ")?n.split(/ +/):r.splitWhenKeepExpressions(n,",").map(function(n){
return n.trim()}):[]},t=[],u&&(u instanceof Array?t=u.map(function(n){return n instanceof Array?{env:n[0],keys:e(n[1]),
options:n[2]}:n&&"object"==typeof n?{env:n.env||n,keys:e(n.keys),options:n.options}:null
}):"object"==typeof u?t=Object.keys(u).map(function(n){var t=u[n],r=t&&"object"==typeof t&&!(t instanceof Array);return{
env:n,keys:e(r?t.keys:t),options:r?t.options:null}
}):"string"==typeof u&&/^[^{].*?[:=]/.test(u)&&(l=u.includes(":")?/:/:/=/,
t=u.split(u.includes(";")?/[;\s]+/g:/[,\s]+/g).map(function(n){return n.split(l)}).map(function(n){
return 2!==n.length?null:{env:n[0].trim(),keys:e(n[1]),options:null}}))),t=t.map(function(n){
return n&&n.env&&(n.keys.length||n.options)?n:null}),a.overrideOption("expect",t,n),
a.overrideOption("keys",e(n.keys),n),a.overrideOption("$normalized",1,n),t)},$=function(n){
var t=n.startsWith("#")?n.split("+",1)[0]:"";return{tree:e.parseKeySeq(n.slice(t?t.length+1:0)),
options:t.length>1?e.parseEmbeddedOptions(t.slice(1)):null}},b=function(n){
var r,l,i,o,b,k,g,h,j,A,z,_,w,x,O,T,D,K,N,Z=s(t.x),M=u.C();for(i of(t.O||(t.O=M?M.c:null),n=n||t.pi||{},t.pi=null,
l=y(t.g)))if(i){if("string"==typeof(b=o=i.env)){if(!f.ra)return void u.showHUD("No environments have been declared")
;if(void 0===(b=f.ra.get(b)))return void u.showHUD('No environment named "'.concat(o,'"'))
;if("string"==typeof b&&(b=f.oa(b,2),f.ra.set(o,b)),null===b)continue}if(0===(k=d(b,n)))return;if(2===k){r=i;break}}
if(g=r&&r.keys.length?r.keys:t.g.keys,
A=r?"string"==typeof r.env?"[".concat(r.env,"]: "):"(".concat(l.indexOf(r),")"):"",
0===g.length)u.showHUD(A+"Require keys: comma-seperated-string | string[]");else if(Z>g.length&&1!==g.length)u.showHUD(A+"Has no such a key");else if((h=g[j=1===g.length?0:t.x>0?Z-1:g.length-Z])&&("string"==typeof h||"object"==typeof h&&h.tree&&"object"==typeof h.tree&&"number"==typeof h.tree.t)){
if(z=1===g.length?t.x:1,"string"==typeof h){if(null!=(_=t.g.mask)){
if(!(w=a.fillOptionWithMask(h,_,"",c,z)).ok)return void u.showHUD((w.result?"Too many potential keys":"No key")+" to fill masks")
;_=w.ok>0,h=w.result,z=w.useCount?1:z}h=$(h),_||(g[j]=h)}
if(O=h.options,3===(x=h.tree).t||0===x.val.length)return void(3===x.t&&u.showHUD(x.val))
;T=r&&r.options&&"object"==typeof r.options&&r.options||t.g.options||(t.g.$masked?null:p(t.g)),T=a.concatOptions(T,O),
D=v=(v+1)%64||1,K="<v-runKey:$1>".replace("$1",""+D),x.val.length>1||0!==x.val[0].t?(N={$seq:{keys:x,repeat:z,options:T,
cursor:x,timeout:0,id:K,fallback:a.parseFallbackOptions(t.g)},$then:K,$else:"-"+K,$retry:-999},a.replaceCmdOptions(N),
t.Hu.set(K,f.na("runKey",N)),e.runKeyInSeq(N.$seq,1,null,n)):m(x.val[0],{keys:x,repeat:z,options:T,cursor:x,timeout:0,
id:K,fallback:null},n)}else u.showHUD(A+"The key is invalid")},e.runKeyWithCond=b,e.parseKeySeq=function(n){
var e,t,l,u,i,o,f,a=/^([$%][a-zA-Z]\+?)*([\d-]\d*\+?)?([$%][a-zA-Z]\+?)*((<([acmsv]-){0,4}.\w*(:i)?>|[^#()?:+$%-])+|-)(#[^()?:+]*)?/,s={
t:1,val:[],par:null},c=s;for(t=n.length>1?0:n.length;t<n.length;t++)switch(n[t]){case"(":(e=s).val.push(s={t:1,val:[],
par:s});break;case")":e=s;do{e=e.par}while(2===e.t);s=e;break;case"?":case":":
for(e="?"===n[t]?null:s;e&&2!==e.t;)e=e.par;e&&!e.val.f||(s.par={t:2,val:{cond:s,t:null,f:null},par:(e=s.par)||(c={t:1,
val:[],par:null})
},e?1===e.t?e.val.splice(e.val.indexOf(s),1,s.par):e.val.t===s?e.val.t=s.par:e.val.f=s.par:c.val.push(s.par),e=s.par),
s={t:1,val:[],par:e},"?"===n[t]?e.val.t=s:e.val.f=s;break;case"+":break;default:
for(;t<n.length&&!"()?:+".includes(n[t]);){if(!(l=a.exec(n.slice(t))))return{t:3,
val:"Invalid item to run: "+((u=n.slice(t)).length>12?u.slice(0,11)+"\u2026":u),par:null}
;(o=(i=l[0]).indexOf("#"))>0&&/[#&]#/.test(i.slice(o))?(i=n.slice(t),
t=n.length):o>0&&/["\[]/.test(i.slice(o))?(f=r.al(n.slice(t+o)),i=i.slice(0,o)+f[0],t+=o+f[1]):t+=i.length,s.val.push({
t:0,val:i,par:s})}t--}return 1===n.length&&c.val.push({t:0,val:n,par:c}),r._r(),c},k=function(n,e){var t,r,l=true,u=n
;for(0===u.t&&(u=(r=(t=u.par).val.indexOf(u))<t.val.length-1&&e>0?t.val[r+1]:(l=false,
t));u&&0!==u.t;)if(l&&1===u.t&&u.val.length>0)u=u.val[0];else if(l&&2===u.t)u=u.val.cond;else{if(!u.par){u=null;break}
1===u.par.t?((l=(r=(t=u.par).val.indexOf(u))<t.val.length-1)&&e<0&&(e=1),
u=l?t.val[r+1]:t):u=(l=u===(t=u.par).val.cond)&&(e>0?t.val.t:(e=1,t.val.f))||(l=false,t)}return u},
e.runKeyInSeq=function(n,e,r,l){
var i,f,s,c,p,d=k(n.cursor,e),y=d&&k(d,1),$=d&&k(d,-1),b=!(d&&(y||$)),g=n.fallback,h=t.g,j=n.id;if(b&&(t.Hu.delete(j),
clearTimeout(n.timeout||0),"<v-runKey:$1>".replace("$1",""+v)===j&&(v=Math.max(--v,0)),d&&(delete h.$then,
delete h.$else,
g&&(n.options=n.options?Object.assign(g,n.options):g))),d)f=$&&h.$else?"string"==typeof $.val?$.val:$.val.prefix:"",
s=((i=y&&h.$then?"string"==typeof y.val?y.val:y.val.prefix:"").includes("$l")?1:0)+(f.includes("$l")?2:0),
c=(i.includes("$D")?1:0)+(f.includes("$D")?2:0),(s||c)&&(n.cursor===n.keys&&(a.overrideCmdOptions({}),h=t.g),
h.$then=(1&s?"$l+":"")+(1&c?"$D+":"")+h.$then,h.$else=(2&s?"$l+":"")+(2&c?"$D+":"")+h.$else),
p=b?0:n.timeout=setTimeout(function(){var n=t.Hu.get(j),e=n&&n.ca;e&&e.$seq&&e.$seq.timeout===p&&t.Hu.delete(j)},3e4),
m(d,n,l);else{if(g&&(g.$f?g.$f.t=r&&r.t||g.$f.t:g.$f=r,a.runNextCmdBy(e>0?1:0,g,1)))return
;e<0&&r&&r.t&&u.showHUD(o.Fn("".concat(r.t)))}},g=function(n){var t,r,l,u,i,o,f,a,s=n.val
;return"string"!=typeof s?s:(r=!!(t=/^([$%][a-zA-Z]\+?|-)+/.exec(s))&&t[0].includes("-"),
l=!t||"+-".includes(t[0].slice(-1)),u=t?t[0].replace(/[+-]/g,"").replace(/%/g,"$"):"",s=t?s.slice(t[0].length):s,
i=(r?-1:1)*((t=/^\d+/.exec(s))&&parseInt(t[0],10)||1),s=t?s.slice(t[0].length):s,
f=(o=(s=l||t||!s.startsWith("+")?s:s.slice(1)).indexOf("#",1))>0?s.slice(0,o):s,a=null,
o>0&&o+1<s.length&&(s=s.slice(o+1),a=e.parseEmbeddedOptions(s)),n.val={prefix:u,count:i,key:f,options:a})},
e.parseKeyNode=g,e.parseEmbeddedOptions=function(n){
var e,t,l=/(^|&)#/.exec(n),u=l?n.slice(l.index+l[0].length):"",i=function(n){
return"\\u"+(n.charCodeAt(0)+65536).toString(16).slice(1)},o=function(n){
return/\s/.test(n)?JSON.stringify(n).replace(/\s/g,i):n};return n=(l?n.slice(0,l.index):n).split("&").map(function(n){
var e=n.split("=",1)[0],t=n.slice(e.length);return e?e+(t?"="+o(r.Zn(t.slice(1))):""):""}).join(" "),
u&&(e=u.split("=",1)[0],t=u.slice(e.length),n=e?(n?n+" ":"")+e+(t?"="+o(t.slice(1)):""):n),f.oa(n,2)},m=function(n,t,l){
var u=e.parseKeyNode(n),i=t.cursor===t.keys,o=i||u.prefix.includes("$c"),f=u.prefix.includes("$W"),s=f?a.concatOptions(u.options,r.qu({
$then:"",$else:""})):a.concatOptions(t.options,u.options);t.cursor=n,j(u.key,u.count*(o?t.repeat:1),s,l,null,i),
f&&setTimeout(function(){e.runKeyInSeq(t,1,null,null)},0)},t.I=function(n,e,r,l){var u,i,o,f,a
;for(n=n.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""),i=1,null!=(u=/^\d+|^-\d*/.exec(n))&&(n=n.slice((o=u[0]).length),
i="-"!==o?parseInt(o,10)||1:-1),l&&(i*=l),n=n.replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""),
f=1;(f=n.indexOf("#",f)+1)&&(a=n.slice(0,f-1),!t.Hu.has(a)&&!/^[a-z]+(\.[a-z]+)?$/i.test(a)););t.O=e,t.Dn=0,t.g=null,
j(f?n.slice(0,f-1):n,i,f?n.slice(f):null,null,r)},h=function(n){for(var e=t.g;e&&e!==n;)e=e.$o;return e===n},
j=function(n,l,i,o,s,c){
var v,p,d,y,$,b,k=n,g=t.Hu.get(n)||!n.includes("<")&&!n.includes(":",1)&&t.Hu.get(k="<v-".concat(n,">"))||null,m=true
;if(null==g&&n in f.ea&&(m=false,g=f.na(n,null)),null==g)return v=/^\w+$/.test(n)?k:n,
void u.showHUD('"'.concat(v.length>=20?v.slice(0,19)+"\u2026":v,'" has not been mapped'));38===g.Nu&&g.ju&&(t.ro(g),
h(g.ca))?u.showHUD('"runKey" should not call itself'):("string"==typeof i&&(i=i?e.parseEmbeddedOptions(i):null),
d=(p=t.g)&&a.parseFallbackOptions(p),y=p&&p.$f,(i&&"object"==typeof i||d||y)&&($=f.Iu(g),g=m?Object.assign({},g):g,
b=r.i(),i&&a.copyCmdOptions(b,r.qu(i)),d&&a.copyCmdOptions(b,r.qu(d)),$&&a.copyCmdOptions(b,$),b.$f=y,
i&&"$count"in i?b.$count=i.$count:$&&"$count"in $&&(i&&"count"in i||(b.$count=$.$count)),g.ca=b,
f.aa(g,f.ea[38===g.Nu&&g.ju?"runKey":g.ao])),r._r(),c&&38===g.Nu&&g.ju?setTimeout(function(){t.pi=o,
a.executeCommand(g,l,t.Dn,t.O,0,s)},0):(t.pi=o,a.executeCommand(g,l,t.Dn,t.O,0,s)))},t.ro=function(n,l){
var u,i,o,s,v,d,b,g,m,h,j,A,z,_,w,x,O,T,D,K=f.Iu(n);if(K||(K=n.ca=r.i()),2!==K.$normalized)for(d=true,y(v=K),
v.$normalized=2,b=1,v.$count&&(b=v.$count,v=K=a.copyCmdOptions(r.i(),v));v&&0===y(v).length&&v.keys.length>=1;){
if(g=v.keys,d=d&&1===g.length,"string"==typeof(m=g[0])){if(null!=(h=v.mask)){
if(v!==K&&(v=K=a.concatOptions(v,K||r.i())),!(j=a.fillOptionWithMask(m,h,"",c,1,K)).ok)return;h=j.ok>0,m=j.result,
d=d&&!!j.value&&!j.useCount&&!j.useDict}m=$(m),h||(g[0]=m)}if(!(A=1===m.tree.t?k(m.tree,1):null))return
;if(d=d&&1===m.tree.val.length&&m.tree.val[0]===A,
z=e.parseKeyNode(A),null!=(w=t.Hu.get(_=z.key)||!_.includes("<")&&!_.includes(":",1)&&t.Hu.get("<v-".concat(_,">"))||null)&&38===w.Nu&&w.ju){
if(l||(l=[n]),l.includes(w))return n.Nu=41,n.ao="showHUD",void(n.ca=r.qu({text:'"runKey" should not call itself'}))
;l.push(w),t.ro(w,l)}if(!(x=w?w.ao:_ in f.ea?_:null))return;if(!(O=null!=w&&38===w.Nu&&w.ju)&&!d)return void(n.ao=x)
;if(v!==K&&(K=a.concatOptions(v,K)),K=K.options?a.copyCmdOptions(r.i(),K.options):K.$masked?null:p(K),
T=null!==(s=null!==(i=null===(u=z.options)||void 0===u?void 0:u.$count)&&void 0!==i?i:null===(o=m.options)||void 0===o?void 0:o.$count)&&void 0!==s?s:null==K?void 0:K.$count,
(K=!(K=a.concatOptions(a.concatOptions(K,m.options),z.options))||K!==m.options&&K!==z.options?K:a.copyCmdOptions(r.i(),K))&&("count"in K||null!=T)&&(T=null!=T?parseFloat(T)||1:parseFloat(K.count||1)||1,
delete K.count),
b*=(null!=T?T:1)*z.count,D=w&&f.Iu(w),!O)return(K=a.concatOptions(D,K))&&K===D&&(K=a.copyCmdOptions(r.i(),K)),
1!==b&&((K||(K=r.i())).$count=b),void Object.assign(n,f.na(x,K))
;v=!K||void 0===K.keys&&void 0===K.expect&&void 0===K.mask?D||r.i():K=a.concatOptions(D,K)}}});