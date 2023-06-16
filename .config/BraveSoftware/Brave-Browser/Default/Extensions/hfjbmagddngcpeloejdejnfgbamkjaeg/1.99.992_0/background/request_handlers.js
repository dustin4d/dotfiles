"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./tools","./open_urls","./frame_commands","./tab_commands"],function(n,t,u,o,r,i,e,l,f,a,c,s,d,v,m,p,b,g,y){
var _,k,N,w,P,I;Object.defineProperty(t,"__esModule",{value:true}),_=-1,u.mu=[function(n,t){var o=n.handler
;o&&"string"==typeof o&&("focus"===o?(4&t.s.d||(t.s.d|=4,t.postMessage({N:8
})),u.mu[12]({},t)):"command"===o?v.executeExternalCmd(n,null,t):"tip"===o&&(u.O=f.indexFrame(t.s.b,0)||t,
f.showHUD(n.tip||"Error: Lack .tip")))},function(){return 0},function(n,t){var o,r,i=n.k,e=l.yo
;if(!(i>=0&&i<e.length))return u.O=t,f.complainLimits(s.A("notModify",[i]));r=u.go,
u.z[o=e[i]]!==n.v&&(r?r.then(function(){l.ga(o,n.v)}):l.ga(o,n.v))},function(n,t){var u="object"==typeof n
;return p.dn.Nt(t.s.an,u?n.q:"",u?1:n)},function(n,t){var u=e.Sn(n);if(null==n.i)return u;t.postMessage({N:44,i:n.i,s:u
})},function(n,t){var i=n.u,l=n.e,a=e.hi(n)
;o._r(),n.e=a,null==a.p?(u.O=t,f.showHUD(a.u)):l||i!==a.u?!t||"file://"===a.u.slice(0,7).toLowerCase()&&"file://"!==i.slice(0,7).toLowerCase()?r.tabsUpdate({
url:a.u}):v.sendFgCmd(18,false,{r:1,u:a.u}):(u.O=t,f.showHUD("Here is just root"),n.e={p:null,u:"(just root)"})
},function(n,t){var o,r,i,l=e.Sn(n);if(!l||!l.k)return u.O=t,f.showHUD(s.A("noEngineFound")),
void(n.n&&v.runNextCmdBy(0,n.n))
;r=n.o||b.parseOpenPageUrlOptions(n.n),i={},o=n.t.trim()&&u.R(n.t.trim(),524288,r.s,i).trim()||(n.c?u.wr(r.s,0,i={}):""),
Promise.resolve(o).then(function(o){
var e,a=null===o?"It's not allowed to read clipboard":(o=o.trim())?"":s.A("noSelOrCopied");if(a)return u.O=t,
f.showHUD(a),void(n.n&&v.runNextCmdBy(0,n.n));r.k=null!==(e=i.S)&&void 0!==e?e:null==r.k?l.k:r.k,u.mu[8]({u:o,o:r,r:0,
n:v.parseFallbackOptions(n.n)||{}},t)})},function(n,t){var o,i,e=n.s,l=0!==n.a,a=2===n.a,c=u._n;u.O=f.findCPort(t),
"number"!=typeof e?r.jn()?(o=t.s.b>=0?t.s.b:u.hn>=0?u.hn:null,i=l?null:o,r.jn().restore(e[1],function(n){var t=r.m()
;return t?f.showHUD(s.A("noSessionItem")):y.Cn(c,n,i).then(function(n){a&&o&&n&&n.windowId!==c&&r.tabsGet(o,function(t){
r.gn.move(n.id,{windowId:c,index:t?t.index+1:-1},r.m),r.tabsUpdate(n.id,{active:true})})}),t}),
i&&r.selectTab(i,r.m)):f.complainNoSession():r.selectTab(e,function(n){
return r.m()?f.showHUD(s.A("noTabItem")):r.selectWnd(n),r.m()})},b.openUrlReq,function(n,t){var o,r,i,e
;(r=u.a.get(o=t.s.b))?t!==(e=r.c)&&(r.c=t,u.o&&(i=t.s.f)!==e.s.f&&u.r(o,i)):u.o&&u.r(o,t.s.f)},function(n,t){
var o,r,i,e,l,c,s,d=t;if(d||(d=f.indexFrame(n.tabId,n.frameId))){if(i=(r=d.s).yr,e=u.a.get(r.b),l=r.yr=t?n.u:n.url,
!e||!e.ss){
if(c=a.ns?a.rs(l,r):null,r.f!==(s=null===c?0:c?1:2))r.f=s,u.o&&e.c===d&&u.r(r.b,s);else if(!c||c===a.rs(i,r))return
;d.postMessage({N:1,p:c,f:0})}}else(o=u.a.get(n.tabId))&&512&o.d&&(o.d|=4096)},function(n,t){var o,r=n.t||0;u.O=t,
u.x=r||u.x>0?1:-1,
u.Dn=n.k,v.replaceCmdOptions(n.f||{}),2!==r?1===r?g.parentFrame():g.nextFrame():(o=f.Mu(t))?g.focusFrame(o.c,o.W.length<=2,n.o?1:2):f.safePost(t,{
N:45,l:u.Dn})},function(n,t){var u,o,r,i=f.Mu(t);if(i&&(t.s.d|=4,i.d|=4,!(i.W.length<2)))for(o of(u={N:8},i.W))r=o.s.d,
o.s.d|=4,4&r||o.postMessage(u)},function(n,t,o){var i,e,l=t.s.b,a=f.Mu(t),c=n.u;if(!a||a.W.length<2)return false
;for(e of a.W)if(e.s.yr===c&&e!==a.j){if(i){i=null;break}i=e}return i&&i!==t?(u.Dn=n.k,w(n,t,i,1),
true):!!r.N()&&(r.N().getAllFrames({tabId:t.s.b},function(o){var r,i,e=0,a=t.s.J;for(r of o)if(r.parentFrameId===a){
if(e){e=0;break}e=r.frameId}(i=e&&f.indexFrame(l,e))&&(u.Dn=n.k,w(n,t,i,1))}),!!o&&t)},g.initHelp,function(n,t){
f.Mu(t).d|=4,t.s.d|=12,t.postMessage({N:11,H:u.bo})},function(n,t){var r,i,l,f,a,c,s=n.i;if(u.Dn=0,null!=n.u)l=n.t,
a=n.u,c={},a=(f=(i=n.m)>=42&&i<=64)?e.gi(a,true):a,a=u.R(a,f?1048576:524288,n.o&&n.o.s,c),v.replaceCmdOptions({url:a,
newtab:null!=l?!!l:!f,keyword:null!==(r=c.S)&&void 0!==r?r:n.o.k}),P(n.f),u.x=1;else{if(true!==n.r)return
;if(null==u.g||"omni"!==u.g.k){if(s)return;u.g=o.i(),u.x=1}else if(s&&u.g.v===u.Q.Gu)return}u.O=t,g.showVomnibar(s)
},function(n,t){f.isNotVomnibarPage(t,false)||u.vt.Sr(n.q,n,N.bind(t,0|n.i))},function(n,t){
var r,i,l,a,c,m,p,y,_,k,N,w,P,I,j,T,G;if(null!=n.i)return i=n.i,l=(r=(n.r||"")+"").includes("name")?n.u:"",
void Promise.all([/^data:/i.test(i)?Promise.resolve(i):o.wo(i||n.u),null]).then(function(n){
var i,e,a,c,d,v,m,p=n[0],b="string"==typeof p,y=b?p:p?p[1]:"";u.O=t,i=y.indexOf(",")+1,
a=(e=y.slice(5,Math.max(5,i)).toLowerCase()).split(";")[0],p&&!a.startsWith("text/")?(c=y.slice(i,i+8),
c=e.includes("base64")?o.Zn(c,"atob"):c.slice(0,6),
d=c.startsWith("\x89PNG")?"PNG":c.startsWith("\xff\xd8\xff")?"JPEG":/^GIF8[79]a/.test(c)?"GIF":(a.split("/")[1]||"").toUpperCase()||a,
v=l&&/^(http|ftp|file)/i.test(l)?l:"",m=r.includes("safe")&&"GIF"!==d||r.includes("force"),
g.handleImageUrl(b?p:"",b?null:p[0],m&&"PNG"!==d?9:1,function(n){
f.showHUD(s.A(n?"imgCopied":"failCopyingImg",[1===n?"HTML":m?"PNG":d]))},l,v,null,false),
o._r()):p?f.showHUD("",74):f.showHUD(s.A(0===p?"downloadTimeout":"downloadFail"))});if(a=n.n,
c=n.o||a&&b.parseOpenPageUrlOptions(a)||{},y=(m=!!(a&&a.copy&&a.o))?null:c.s,_=m?null:c.k,
k=(p=null!=n.s&&n.m||0)>=42&&p<=64&&(!y||false!==y.r),
N=n.d?false!==c.d:!!c.d,a&&null!=a.type&&"frame"!==a.type)return P=v.concatOptions(a,o.qu({url:null,
type:"tab"===(w=a.type)&&a.url||"tab-url"===w?null:"tab-title"===w?"title":w})),u.O=t,u.x=1,
void v.executeCommand(d.na("copyWindowInfo",P),1,u.Dn,t,1,a.$f&&{c:a.$f,r:a.$retry,u:0,w:0});if(I=n.u||n.s||"",
N)if("string"!=typeof I)for(j=I.length;0<=--j;)k&&(I[j]=e.gi(I[j]+"")),I[j]=o.pr(I[j]+"");else k&&(I=e.gi(I)),
I=o.pr(I);else"string"==typeof I&&I.length<4&&!I.trim()&&" "===I[0]&&(I="");T=!!I,G=I&&u.mr(I,n.j,y,_),
G=n.s&&"object"==typeof n.s?"[".concat(n.s.length,"] ")+n.s.slice(-1)[0]:G,Promise.resolve(G).then(function(o){u.O=t,
f.showHUD(N?o.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):o,n.u?14:15),a&&v.runNextCmdBy(T?1:0,a)})},function(n,t){
var r,i,e,l,a,c,s=null!=t?t.s:null;null===s||4&s.d||(s.d|=4,(r=f.Mu(t))&&(r.d|=4)),e=1,
null!=(l=/^\d+|^-\d*/.exec(i=n.k))?(i=i.slice((a=l[0]).length),
e="-"!==a?parseInt(a,10)||1:-1):i.length>6&&i.startsWith("<".concat("c-v-").concat(i[5],">"))&&(i=i[5]+i.slice(7)),
(c=u.Hu.get(i))||(l=i.match(d.sa),e=1,c=u.Hu.get(i=l[l.length-1])),o._r(),c&&(38===c.Nu&&c.ju&&u.ro(c),n.e&&(u.pi={
element:o.Po(n.e)}),v.executeCommand(c,e,n.l,t,0,null))},v.waitAndRunKeyReq,function(n,t){var o,r,i,e
;if(2===n.c)return o=p.pn.mn(n.u),void(n.f&&v.runNextCmdBy(o>0?1:0,n.f));i=n.c.o,(r=!!n.f)||(u.O=t),
e=!r&&g.vn(t,i.type,n.l)||t,Promise.resolve(e).then(function(u){if(!(r||u===t&&n.u)){var o=n
;return o.U=(i.extUrl?1:0)|(n.c.a?2:0),o.f=true,void f.bn(o,true,1,u)}1===n.c.a?(p.pn.ga(n,t.s.an,t.s.b),
f.showHUDEx(t,"mNormalMarkTask",1,[["mCreate"],[n.l?"Local":"Global"],n.n]),
v.runNextCmdBy(1,i)):p.pn.Io(i,n,t,n.l&&r?n.k:0)})},b.di,v.onBeforeConfirm,v.onConfirmResponse,function(n,t){
var o,i,e,l,a,c,d,v;"e"!==n.t?(e=n.s,l=n.u,c="tab"===(a="history"===(i=n.t)&&null!=e?"session":i)?a:a+" item",
d=function(n){Promise.resolve(s.A("sugs")).then(function(t){f.showHUD(s.A(n?"delSug":"notDelSug",[t&&s.Wu(t,a[0])||c]))
})
},u.O=f.findCPort(t),"tab"===a&&u.hn===e?f.showHUD(s.A("notRemoveCur")):"session"!==a?u.vt.mt("tab"===a?e:l,a,d):(null===(o=r.jn())||void 0===o?void 0:o.forgetClosedTab)&&(v=e,
r.jn().forgetClosedTab(v[0],v[1]).then(function(){return 1},u.l).then(d))):f.showHUD(s.A("cannotDelSug"))
},g.openImgReq,function(n,t){u.O=null,b.openJSUrl(n.u,{},function(){u.O=t,f.showHUD(s.A("jsFail"))})},function(n,t){
var u
;2!==n.c&&4!==n.c?w(n,t,(null===(u=f.Mu(t))||void 0===u?void 0:u.j)||null,n.f):f.getParentFrame(t.s.b,t.s.J,1).then(function(u){
var o;w(n,t,u||(null===(o=f.Mu(t))||void 0===o?void 0:o.j)||null,n.f)})},c.An,function(n,t){v.replaceCmdOptions({
active:true,returnToViewport:true,extend:!!(1&n.c),direction:n.c>=56?"before":null}),u.O=t,u.x=1,g.performFind()
},g.framesGoBack,function(){return s.Ku&&s.Ku(),s.Yu},function(n,t){t.s.d|=8},function(n,t){v.replaceCmdOptions({
mode:n.c?"caret":"",start:true}),P(n.f),u.O=t,u.x=1,g.enterVisualMode()},function(n){if(performance.now()-n.r.n<500){
var t=n.r.c;t.element=o.Po(n.e),m.runKeyWithCond(t)}},function(n,t){
var o,l=n.o||{},a={},c=u.R(e.gi(n.u,true),1048576,l.s,a),s=null!==(o=a.S)&&void 0!==o?o:l.k;c=c!==n.u||s?i.Or(c,s,0):c,
u.O=t,f.showHUD(c,78),r.downloadFile(c,n.f,n.r||"").then(n.m<44?function(o){o||u.mu[26]({m:37,f:n.f,u:c},t)}:void 0)
},function(n,t,u){return setTimeout(function(){f.sendResponse(t,u,9)},n),t},function(n){var t=n.v,u=t!==!!t
;f.showHUD(s.A(u?"useVal":t?"turnOn":"turnOff",[n.k,u?JSON.stringify(t):""]))},function(n,t){u.mu[19](n,f.findCPort(t))
},function(n,t,o){return!(false!==t.s&&!t.s.yr.startsWith(u.Yn))&&(I(n.q,n.i,t).then(function(n){t.postMessage(o?{N:4,
m:o,r:n}:n)}),t)},function(n,t){var o=n.u,r=o.indexOf("://")
;o=(o=r>0?o.slice(o.indexOf("/",r+4)+1):o).length>40?o.slice(0,39)+"\u2026":o,u.O=t,f.showHUD(o,78)},function(n,t){
var r=n.t,i=o.pr(n.u),e=r&&i?(u.Ou.actions.find(function(n){return n.startsWith("itemJoin=")})||"").slice(9):""
;e=e?e.includes("\\")?o.tryParse('"'===e[0]?e:'"'.concat(e,'"')):o.Zn(e):"\n",u.mu[18]({s:r&&i?r+e+i:i||r,d:false,m:0
},f.findCPort(t))},function(n,t){u.O=f.findCPort(t),f.showHUD(n.t,15)},function(n,t){
f.showHUDEx(t,"mLocalMarkTask",1,[[n.n?"mCreate":"mJumpTo"],n.i>1?n.i:["mLastMark"]]),u.O=t,v.runNextCmdBy(1,n.c.o)
},function(){var n=u.Tu(null,null);return n&&(clearTimeout(n.i),n.r&&n.r(false)),!n},function(n,t){
var o=n>0&&f.indexFrame(t.s.b,n);return o?(g.focusFrame(o,false,2,1),2):(n<=0&&u.mu[45](),n?4:2)
},f.OnFreeze,function(n,t){var o,r,i,e=n.s,l=e[0],a=e[2],c=a&&(e[1]?"^ ":"")+a.join(" "),s={N:1,p:c,f:l}
;if(t.postMessage(s),r=3===l?2:0,(o=f.Mu(t))&&(!o.ss||o.ss.f!==r||o.ss.as!==c))for(i of(o.ss={f:r,as:c},
u.o&&o.c.s.f!==r&&u.r(t.s.b,r),o.W))i.s.f=r,512&i.s.d||i.postMessage(s)}],N=function(n,t,r,i,e,l,a,c){
var s,d,v,m,p,b=this.s.yr,g=2===n?2:0;if(1===n&&u.kn>=58)if(b=b.slice(0,b.indexOf("/",b.indexOf("://")+3)+1),
null!=(m=-1!==_?null===(s=u.a.get(_))||void 0===s?void 0:s.j:null)&&(m.s.yr.startsWith(b)?g=1:_=-1),
g);else for(p of u.a.values())if((v=(d=p.j)&&d.s)&&v.yr.startsWith(b)){g=1,_=v.b;break}f.safePost(this,{N:43,a:r,c:c,
i:g,l:t,m:i,r:a,s:e,t:l}),o._r()},u.jo=function(n,t,o,r,i){n.postMessage({N:7,H:i||4!==t?f.ensureInnerCSS(n.s):null,
m:i?5:0,k:i?u.Dn:0,f:{},c:t,n:r||0,a:o})},w=function(n,t,o,r){o&&2!==o.s.f?u.jo(o,n.c,n.a,n.n,r):(n.a.$forced=1,
v.portSendFgCmd(t,n.c,false,n.a,n.n||0))},P=function(n){n&&("string"==typeof n&&(n=m.parseEmbeddedOptions(n)),
n&&"object"==typeof n&&Object.assign(u.g,o.qu(n)))},I=function(t,u,o){return k||(k=new Promise(function(t,u){
n(["/background/sync.js"],t,u)}).then(n=>n).then(function(){return l.st}).then(function(){
return r.import2("/background/page_handlers.js")})),k.then(function(n){return Promise.all(t.map(function(t){
return n.onReq(t,o)}))}).then(function(n){return{i:u,a:n.map(function(n){return void 0!==n?n:null})}})},
window.onPagesReq=function(n){var t;return-3===n.i?((t=u.Tu(null,null))&&clearTimeout(t.i),t):I(n.q,n.i,null)}});