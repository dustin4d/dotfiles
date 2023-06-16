"use strict"
;__filename="background/others.js",define(["require","exports","./store","./browser","./utils","./settings","./i18n","./normalize_urls","./normalize_urls","./open_urls"],function(n,e,o,t,i,r,u,l,c,a){
Object.defineProperty(e,"__esModule",{value:true});var s,f,m,d,g,v,p,b=o.at.showActionIcon=function(n){
var e=t.t.browserAction;e?(o.o=n,t.import2("/background/action_icon.js").then(function(n){n.n()}),
Promise.resolve(u.Fn("name")).then(function(o){n||(o+="\n\n"+u.Fn("noActiveState")),e.setTitle({title:o})
})):o.at.showActionIcon=void 0};r.st.then(function(){o.z.showActionIcon?b(true):o.r=o.l}),setTimeout(function(){
new Promise(function(e,o){n(["/background/sync.js"],e,o)}).then(n=>n)},100),(function(){function n(){_&&(_.lo=null),
y=M=_=h=null,k&&clearTimeout(k),w&&clearTimeout(w),j=F=S=k=w=0,T="",i._r()}function e(){var o=Date.now()-j
;if(o>5e3||o<-5e3)return n();k=setTimeout(e,3e4)}function r(){var n,e;if(w=0,(n=_)&&!n.fo)return _=null,
n.lo?((e=Date.now())<j&&(j=e-1e3),f(n.mo,n.lo)):void 0}function s(n,e,r,u,l){var a,s,f,m,g,p,w,P,k,j,D,O,U,V,q,x,z
;if(n.lo){for(_=null,a=e.length>0?e[0]:null,F=u,S=l,M=[],f=new Set,m=" ".concat(o.Vt.t," ").includes(" type-letter "),
g=0,
p=r?0:1,w=e.length;g<w;g++)k=(P=e[g]).title,D=P.e,U="",V=null!=P.s,q=b&&!(r&&0===g)&&("tab"===D?P.s!==o.hn:"history"===D&&!V),
(O=i.br(O=j=P.u,1)).startsWith("file")&&(O=c.tu(O)),
O=O.replace(/%20/g," "),f.has(O)?O=":".concat(g+p," ").concat(O):f.add(O),q&&(U=" ~".concat(g+p,"~")),x={content:O,
description:U=(k||m?(k?k+" <dim>":"<dim>")+(m?"[".concat(P.e[0].toUpperCase(),"] "):"")+(k?"-</dim> <url>":"</dim><url>"):"<url>")+P.textSplit+"</url>"+(U&&"<dim>".concat(U,"</dim>"))
},q&&(x.deletable=true),(q||V)&&(y||(y=new Map),y.has(O)||y.set(O,{do:D,ot:V?P.s:null,yr:j})),M.push(x);h=n.mo,
r?"search"===a.e?(s=((z=a.p)&&"<dim>".concat(i.At(z)+d,"</dim>"))+"<url>".concat(a.textSplit,"</url>"),C=2,
(a=e[1])&&"math"===a.e&&(M[1].description="".concat(a.textSplit," = <url><match>").concat(a.t,"</match></url>"))):(C=3,
s=M[0].description):1!==C&&(s="<dim>".concat(v,"</dim><url>%s</url>"),C=1),r&&(T=e[0].u,
y&&M.length>0&&T!==M[0].content&&y.set(T,y.get(M[0].content)),M.shift()),s&&t.t.omnibox.setDefaultSuggestion({
description:s}),n.lo(M),i._r()}else _===n&&(_=null)}function f(n,t){var i,u,l,c;n=O(n),_&&(_.lo=(i=n===_.mo)?t:null,
i)||(n!==h?1===F&&n.startsWith(h)?t([]):(_={lo:t,mo:n,fo:false},w||(u=Date.now(),
(l=o.Vt.i+j-u)>30&&l<3e3?w=setTimeout(r,l):(_.fo=true,k||(k=setTimeout(e,3e4)),j=u,y=M=null,T="",
c=F<2||!n.startsWith(h)?0:3===F?n.includes(" ")?0:8:S,o.vt.Sr(n,{o:"omni",t:c,r:D,c:P,f:1},s.bind(null,_))))):M&&t(M))}
function m(n,e,t){return n?":"===n[0]&&/^:([1-9]|1[0-2]) /.test(n)&&(n=n.slice(" "===n[2]?3:4)):n=l.Or(""),
"file://"===n.slice(0,7).toLowerCase()&&(n=i.Au().test(n)?l.vu("show image "+n,false,0):n),null!=t?o.mu[7]({s:t
}):a.openUrlReq({u:n,r:"currentTab"===e?0:"newForegroundTab"===e?-1:-2})}
var d,g,v,p,b,h,T,_,w,y,P,M,k,j,C,F,S,D,O,U=t.t.omnibox;U&&(d=": ",g=false,v="Open: ",
b=!!(p=U.onDeleteSuggestion)&&"function"==typeof p.addListener,h=null,T="",_=null,w=0,y=null,P=128,M=null,k=0,C=0,F=0,
S=0,D=o.kn<60?6:12,O=function(n){if(n=n.trim().replace(i.F," "),o.Ou.actions.includes("icase")){
var e=/^:[WBH] /.test(n)?3:0;n=e?n.slice(0,e)+n.slice(e).toLowerCase():n.toLowerCase()}return n},
U.onInputStarted.addListener(function(){if(t.getCurWnd(false,function(n){var e=n&&n.width
;P=e?Math.floor((e-160/devicePixelRatio)/7.72):128}),g||(g=true,Promise.resolve(u.Fn("i18n")).then(function(){
"en"!==u.Qu()&&Promise.resolve(u.A("colon")).then(function(n){d=n+u.A("NS")||d,v=u.A("OpenC")||v})})),k)return n()}),
U.onInputChanged.addListener(f),U.onInputEntered.addListener(function e(t,i){var u,l,c=_;if(c&&c.lo){
if(c.lo=e.bind(null,t,i),c.fo)return;return w&&clearTimeout(w),r()}return t=O(t),null===h&&t?o.vt.Sr(t,{o:"omni",t:0,
r:3,c:P,f:1},function(n,e){return e?m(n[0].u,i,n[0].s):m(t,i)}):(T&&t===h&&(t=T),
l=null==(u=null==y?void 0:y.get(t))?void 0:u.ot,n(),m(u?u.yr:t,i,l))}),b&&p.addListener(function(n){
var e=parseInt(n.slice(n.lastIndexOf("~",n.length-2)+1))-1,t=M&&M[e].content,i=t&&y?y.get(t):null,r=i&&i.do;r?o.mu[25]({
t:r,s:i.ot,u:i.yr
}):console.log("Error: want to delete a suggestion but no related info found (may spend too long before deleting).")}))
})(),s=0,f=false,m=0,d=o.Xn?"edge:":"chrome:",g=o.Xn?"":d+"//newtab/",v=o.Xn?"":d+"//new-tab-page/",p=function(n){
0===n.frameId&&n.url.startsWith(d)&&s&(o.Xn||!n.url.startsWith(g)&&!n.url.startsWith(v)?1:2)&&!m&&t.s(n.tabId)},t.w([{
origins:["chrome://*/*"]},o.kn>79&&!o.Xn?{origins:["chrome://new-tab-page/*"]}:null],function n(e){
if(1&(s=(e[0]?1:0)+(e[1]?2:0))&&!o.z.allBrowserUrls&&(s^=1),f!==!!s){var i=t.N();if(!i)return false
;i.onCommitted[(f=!f)?"addListener":"removeListener"](p)}m=m||s&&setTimeout(function(){s?t.gn.query({url:d+"//*/*"
},function(n){for(var e of(m=0,n||[]))!o.a.has(e.id)&&s&(e.url.startsWith(g)||e.url.startsWith(v)?2:1)&&t.s(e.id)
;return t.m()}):m=0},120),s&&!o.at.allBrowserUrls&&(o.at.allBrowserUrls=n.bind(null,e,false))}),
o.te&&Promise.all([o.te,r.st]).then(function(n){
var e=n[0],c=e&&e.reason,s="install"===c?"":"update"===c&&e.previousVersion||"none";"none"!==s&&setTimeout(function(){
var n,c,f;if(t.gn.query({status:"complete"},function(n){var e,i=/^(file|ftps?|https?):/
;for(e of n)i.test(e.url)&&!o.a.has(e.id)&&t.s(e.id)
}),console.log("%cVimium C%c has been %cinstalled%c with %o at %c%s%c.","color:red","color:auto","color:#0c85e9","color:auto",e,"color:#0c85e9",i.now(),"color:auto"),
o.Q.wn&&console.log("Sorry, but some commands of Vimium C require the permission to run in incognito mode."),
!s)return n=function(){o.io||o.go?++c<25&&setTimeout(n,200):a.di({u:o.Q.Bt+"#commands"})},c=0,void n()
;r._t("vomnibarPage"),parseFloat(s)>=parseFloat(o.Q.pa)&&(s>="1.99.98"||o.Q.pa<"1.99.98")||(o.vo?o.vo(6e3):o.vo=true,
r._t("newTabUrl"),
o.z.notifyUpdate&&(f="vimium_c-upgrade-notification",Promise.all([u.A("Upgrade"),u.A("upgradeMsg",[o.Q.no]),u.A("upgradeMsg2"),u.A("clickForMore")]).then(function(n){
var e,i={type:"basic",iconUrl:o.Yn+"icons/icon128.png",title:"Vimium C "+n[0],message:n[1]+n[2]+"\n\n"+n[3]}
;o.kn<67&&(i.isClickable=true),o.kn>=70&&(i.silent=true),(e=t.t.notifications)&&e.create(f,i,function(n){var o
;if(o=t.m())return o;f=n||f,e.onClicked.addListener(function n(o){o==o&&(e.clear(o),a.di({u:l.Or("vimium://release")}),
e.onClicked.removeListener(n))})})})))},500)}),setTimeout(function(){globalThis.document.body.innerHTML="",i._r()},1e3)
});