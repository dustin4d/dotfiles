"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],function(n,e,t,r,i,u){
var o,l,f,c,s,a,y,d,v,S,g,p,b,m,O,j,N,J,w,T,_,k,h,x,D,q,M;Object.defineProperty(e,"__esModule",{value:true}),o=r.qu({
findModeRawQueryList:1,innerCSS:1,keyboard:1,newTabUrl_f:1,vomnibarPage_f:1}),l=i.t.storage,f="sync.cloud:",s=null,
a=null,y="",d=null,v=null,S=0,g=null,p=function(){return c||(c=l&&l.sync)},b=function(n){m(n,"sync")},m=function(n,e){
var t,i,u;if("sync"===e)if(t=function(n){var e,t,i,u;if(d){
for(e in r.qu(n),d)!(i=(t=e.split(":")[0])===e)&&t in d||j(t,null!=(u=i?d[e]:null)?u.newValue:n[t],n);d=null}},r.qu(n),
d?Object.assign(d,n):d=n,g)g.then(function(){return m({},e)});else for(i in n=d,d=null,n){if(u=n[i],
8===(i.includes(":")?8:j(i,null!=u?u.newValue:null)))return d=n,void p().get(t);delete n[i]}},
O=console.log.bind(console,"[%s]",{toString:function(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}}),
j=function(n,e,r){var i,o,l,f,c,s,a,y=e&&"object"==typeof e&&e.$_serialize||"";if(n in u.V&&D(n)){if(l=u.V[n],y){
if("split"===y&&!r)return 8;if(8===(e=k(n,e,r)))return}
null!=e?(f=t.z[n],(a="object"!=typeof l||!e||"object"!=typeof e)?(s=e,c=f):(s=JSON.stringify(e),c=JSON.stringify(f)),
s!==c&&(s===(a?l:JSON.stringify(l))&&(e=l),
g||O("sync.this:","update",n,"string"==typeof e?(e.length>32?e.slice(0,30)+"...":e).replace(/\n/g,"\\n"):e),
N(n,e))):t.z[n]!=l&&(g||O("sync.this:","reset",n),N(n,l))
}else(o=y||!u.$o?-1:u.ho.indexOf(n))>=0&&(null!=(i=t.il.get(n))?i+"":null)!==(null!=e?e+"":null)&&(u.nl(n,null!=e?e:null),
u.qo(o))},N=function(n,e){y=n,u.ga(n,e),y="",n in u.K&&u.pu({N:6,d:[u.K[n]]})},J=function(n,e){
var t=D(n)?1:u.ho.includes(n)?2:0;t&&n!==y&&(s||(setTimeout(x,800),s=r.i()),1===t?s[n]=e:(a||(a=[])).push(n))},
w=function(n){return n.replace(/[<`\u2028\u2029]/g,function(n){return"<"===n?"`l":"`"===n?"`d":"\u2028"===n?"`r":"`n"})
},T=function(n){return n.replace(/"|\\[\\"]/g,function(n){return'"'===n?"`q":'\\"'===n?"`Q":"`S"})},_=function(n){
var e={Q:'\\"',S:"\\\\",d:"`",l:"<",n:"\u2029",q:'"',r:"\u2028"};return n.replace(/`[QSdlnqr]/g,function(n){
return e[n[1]]})},k=function(n,e,t){var r,i,o,l,f="";switch(e.$_serialize){case"split":for(r=e.k,i=e.s,o=0;o<i;o++){
if(!(l=t[n+":"+o])||"string"!=typeof l||!l.startsWith(r))return 8;f+=l.slice(r.length)}break;case"single":
return JSON.parse(_(JSON.stringify(e.d)));default:
return O("Error: can not support the data format in synced settings data:",n,":",e.$_serialize),null}
return"string"==typeof u.V[n]?f=_(f):(f=_(JSON.stringify(f)),JSON.parse(f.slice(1,-1)))},h=function(n,e,t){
var r,i,o,l,f,c,s,a,y,d,S,g,p,b,m,O;if(e&&!("string"!=typeof e?"object"!=typeof e:e.length<8192/6-40)&&(i="",
!((r=JSON.stringify(e)).length<8192/6-40||(o=function(n){return n.replace(/[^\x00-\xff]/g,function(n){
var e=n.charCodeAt(0);return"\\u"+(e>4095?"":"0")+e.toString(16)})},l=true,f=r.length,
3*((c=(r=w(r)).length)-f)+3*f<8093)))){
if((i=l?t.encode(r):r=o(r)).length<8093)return(l?i.length+4*(c-f):Math.ceil((i.length-c)/5*3+6*(c-f)+(f-(i.length-c)/5-(c-f))))<8093?void 0:r
;for(s=0,a=Date.now().toString(36)+":",y={},r="string"==typeof u.V[n]?r.slice(1,-1):T(r),l?(v||(v=new TextDecoder),
i=t.encode(r)):i=o(r),d=0,S=i.length;d<S;){if(g=Math.min(d+8134,S),p=void 0,b=0,l){for(;g<S&&128==(192&i[g]);g--);
p=v.decode(i.subarray(d,g))}else p=i.slice(d,g);if(r=p.slice(-6),(b=g<S?r.lastIndexOf("\\"):-1)>0&&b>r.length-2)p+="b",
b=1;else if(b>0&&"u"===r[b+1])for(m=b=r.length-b;m++<6;p+="b");else b=0;if(p=JSON.parse('"'.concat(p,'"')),
b&&((O=p.endsWith("b"))||(g-=b),p=p.slice(0,b>1&&O?b-6:-1)),y[n+":"+s++]=a+p,d=g,s>=13)break}return y[n]={
$_serialize:"split",k:a,s:s},y}},x=function(){var n,e,o,l,c,y,d,S,g=s,b=a,m=[],j=[],N=[],w=r.i(),T={};if(s=a=null,
g&&t.Lo===J){
for(e in n=Object.keys(g).length>0?new TextEncoder:null,g)for(y="string"==typeof(c=u.V[o=e])||"object"==typeof c&&"vimSync"!==o?0:13,
null!=(l=g[o])?(d=h(o,l,n))&&"object"==typeof d?(w[o]=d,y=d[o].s):(T[o]=d?{$_serialize:"single",d:JSON.parse(d)}:l,
j.push(o)):m.push(o);y<13;y++)N.push(o+":"+y);for(o in v=n=null,b&&m.push.apply(m,b),N.push.apply(N,m),
m.length>0&&O(f,"reset",m.join(", ")),N.length>0&&p().remove(N),j.length>0&&(O(f,"update",j.join(", ")),p().set(T)),
S=function(n){p().set(w[n],function(){var e=i.m()
;return e?O("Failed to update",n,":",e.message||e):O(f,"update (serialized) "+n),e})},w)S(o)}},D=function(n){
return!(n in o)},q=function(n){t.vo=null,S&&clearTimeout(S),S=setTimeout(function(){S=0,u.So.get(function(n){
var e,i,o,l,f,c,s,a,y=u.zo;if(y.length){for(O("storage.local: update settings from localStorage"),r.qu(n),e=r.i(),i=0,
o=y.length;i<o;i++)f=n[l=y.key(i)],l in u.V?(s=c=t.z[l],a=f,"object"==typeof u.V[l]&&(a=JSON.stringify(f),
s=JSON.stringify(c)),s!==a&&u.ga(l,c)):n[l]!==f&&"i18n_f"!==l&&(e[l]=f);Object.keys(e).length>0&&u.So.set(e),y.clear()}
})},n)},M=function(n,e){var i,o,l,c;if(r.qu(n),i=n.vimSync||null==t.z.vimSync&&t.To,t.at.vimSync(false,"vimSync"),i){
for(c in n.vimSync||(O(f,"enable vimSync"),n.vimSync=true,p().set({vimSync:true})),o=[],l=u.zo,
t.z)t.z[c]!==u.V[c]&&(!(c in n)&&D(c)&&("keyLayout"===c&&2&u.$o||o.push(c)),l&&l.length&&l.removeItem(c))
;for(c of o)j(c,null);for(c in n)c.includes(":")||j(c,n[c],n);q(60),u._t("vimSync"),setTimeout(function(){e()},4),
O(f,"download settings")}else e()},t.at.vimSync=function(n){var e,r,i;if(p()){if(r=(e=p().onChanged)||l.onChanged,
i=e?b:m,!n)return r.removeListener(i),void(t.Lo=t.l);t.Lo!==J?(r.addListener(i),t.Lo=J,
q(60)):s&&(O(f,"save immediately"),x())}},u.st.then(function(){var n,e=t.z.vimSync
;false===e||!e&&!t.To?(t.vo=(n=true===t.vo)?null:q,n&&q(6e3),t.te=null):t.te?(g=t.te.then(function(n){return t.te=null,
!!n&&"install"===n.reason}).then(function(n){return new Promise(function(e){p()?p().get(function(r){
var o=i.m(),l=n&&t.To&&(o||0===Object.keys(r).length)?function(){u.ga("keyLayout",2),e()}:e;return o?(t.at.vimSync=t.l,
l(),O("Error: failed to get storage:",o,"\n\tSo disable syncing temporarily.")):M(r,l),o}):e()})}).then(function(){
t.go=null,g=null}),t.go=Promise.race([g,new Promise(function(n){setTimeout(n,800)})]).then(function(){t.go=null,
t.z.vimSync&&t.Lo!==J&&u._t("vimSync")})):u._t("vimSync")})});