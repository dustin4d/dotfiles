"use strict"
;__filename="background/completion_utils.js",define(["require","exports","./store","./browser","./utils","./settings","./normalize_urls","./tools","./browsing_data_manager"],function(n,r,t,u,e,o,i,f,l){
var a,c,s,_,v,h,m,d,b,p,w,g,x,M,T,k,E,y,R,I,P,j,q,K;Object.defineProperty(r,"__esModule",{value:true}),
r.Br=r.jt=r.sortBy0=r.shortenUrl=r.highlight=r.cutTitle=r.Nr=r.get2ndArg=r.ComputeRelevancy=r.ComputeRecency=r.ComputeWordRelevancy=r.Ar=r.zr=r.Qr=r.bt=r.we=r.Wr=r.Pt=r.Tt=r.setupQueryTerms=r.Wt=r.Hr=r.tabsInNormal=void 0,
a=[0,0],r.tabsInNormal=c=null,s=null,_=0,v=[],p=0,r.Hr=w=3,g=function(){r.tabsInNormal=c=null},r.Wt=g,
r.setupQueryTerms=function(n,r,t){h=n,m=r,b=false,d=t},r.Tt=function(n){h=n},r.Pt=function(n){p=n},x=function(n){
r.Hr=w=n},r.Wr=x,r.we={Tr:null,Rr:null,tt:0,Kt:0,Qt:function(n){var u,e,o,i,f,l=null,a=0,c=h.join(" ");for(u=v,
e=c?u.length:0;0<=--e;)if(u[e].Lt||!n){for(o=u[e].Nt,i=0,f=0;i<o.length&&f<h.length;f++)h[f].includes(o[i])&&i++
;if(i>=o.length){l=u[e];break}}
r.we.Tr=l,l&&(t.Vt.i<200||!l.Ge||l.Ge.length>1e3)&&(a=performance.now())-l.Fe<Math.max(300,1.3*t.Vt.i)?(r.we.Rr=l,
l.Nt=h.slice(0)):!c||l&&c===l.Nt.join(" ")||!(c.length>4||/\w\S|[^\x00-\x80]/.test(c))?r.we.Rr=null:(r.we.Rr={
Nt:h.slice(0),Lt:n,Fe:a||performance.now(),Ge:l&&l.Ge,un:l&&l.un},v.push(r.we.Rr),
r.we.tt||(r.we.tt=setInterval(r.we.Xt,6e3)))},Xt:function(){
for(var n=v,t=-1,u=performance.now()-5983;++t<n.length&&n[t].Fe<u;);++t<n.length?n.splice(0,t):(n.length=0,
clearInterval(r.we.tt),r.we.tt=0)},mn:function(n){for(var r of v)n<2?r.Ge=null:n<3?r.un=null:s=null},dt:function(n){
s!==n&&(r.we.Kt&&(clearTimeout(r.we.Kt),r.we.Kt=0),s=n,n&&(r.we.Kt=setTimeout(r.we.dt,3e3,null)))}},r.bt={Yt:0,Te:0,
gt:function(){var n=h[0],u=t.vr.keywords;return null===u?(r.bt.Te=r.bt.Te||setTimeout(r.bt.nu,67),
true):!(n.length>=r.bt.Yt)&&u.includes("\n"+n)},nu:function(){var n,u,o,i=e.ru(t.vr.map).sort(),f=0,l="",a=[]
;for(n=i.length;0<=--n;)l.startsWith(u=i[n])||(f=(o=u.length)>f?o:f,l=u,a.push(u));t.vr.keywords="\n"+a.join("\n"),
r.bt.Yt=f,r.bt.Te=0}},r.Qr={Pr:null,Ur:null,Ct:null,Zt:function(){var n,t=r.Qr.Pr=[];for(n of(r.Qr.Ur=r.Qr.Ct=null,
h))t.push(new RegExp(e.ct(n),n!==n.toUpperCase()&&n.toLowerCase()===n?"i":""))},Zr:function(){
var n,t,u,e=r.Qr.Ur=[],o=r.Qr.Ct=[];for(n of r.Qr.Pr)t="\\b"+n.source,u=n.flags,e.push(new RegExp(t,u)),
o.push(new RegExp(t+"\\b",u))},Gt:function(n,t){r.Qr.Pr&&(n=e.ct(t?n:n.slice(0,-1)),
r.Qr.Pr[0]=new RegExp(t?n:n+"(?:/|$)",r.Qr.Pr[0].flags))}},r.zr=function(n,t){
for(var u of r.Qr.Pr)if(!(u.test(n)||u.test(t)))return false;return true},M=function(n,t){
var u,e,o,i=0,f=0,l=0,a=0,c=!!t;for(r.Qr.Ur||r.Qr.Zr(),u=0,e=h.length;u<e;u++)a+=(o=k(u,n))[0],l+=o[1],
c&&(f+=(o=k(u,t))[0],i+=o[1]);return a=a/w*T(l,n.length),0===i?t?a/2:a:a<(f=f/w*T(i,t.length))?f:(a+f)/2},r.Ar=M,
T=function(n,r){return n<r?n/r:r/n},k=function(n,t){var u,e=0;return(u=t.split(r.Qr.Pr[n]).length)<1?a:(e=1,
r.Qr.Ur[n].test(t)&&(e+=1,r.Qr.Ct[n].test(t)&&(e+=1)),[e,(u-1)*h[n].length])},E=function(n){return r.Ar(n.t,n.title)},
r.ComputeWordRelevancy=E,r.ComputeRecency=function(n){var r=(n-p)/18144e5
;return r<0?0:r<1?r*r*.666667:r<1.000165?.666446:0},y=function(n,t,u){var e=r.ComputeRecency(u),o=r.Ar(n,t)
;return e<=o?o:(o+e)/2},r.ComputeRelevancy=y,r.get2ndArg=function(n,r){return r},R=function(n){var t,u,e
;m||void 0!==n.v||(n.v=r.jt(n.u)),null==n.textSplit?(n.title=r.cutTitle(n.title),
(u=i.tu(t=n.t,n.u)).length!==t.length?e=P(t,"\\"===u[0]?5:"/"===t.charAt(7)&&"%3a"===t.substr(9,3).toLowerCase()?10:8):(u=r.shortenUrl(t),
e=j(u)),
n.t=t.length!==n.u.length?u:"",n.textSplit=q(u,e,t.length-u.length,m?d-13-Math.min(n.title.length,40):d)):n.t===n.u&&(n.t="")
},r.Nr=R,I=function(n,t){var u=n.length>d+40;return u&&(n=e.nt(n,0,d+39)),r.highlight(u?n+"\u2026":n,t||j(n))},
r.cutTitle=I,r.highlight=function(n,r){var t,u,o,i,f;if(b)return n;if(0===r.length)return e.At(n);for(t="",u=0,
o=0;o<r.length;o+=2)f=r[o+1],(i=r[o])>=n.length||(t+=e.At(n.slice(u,i)),t+="<match>",t+=e.At(n.slice(i,f)),
t+="</match>",u=f);return t+e.At(n.slice(u))},r.shortenUrl=function(n){var r=e.Ft(n)
;return!r||r>=n.length?n:n.slice(r,n.length-+(n.endsWith("/")&&!n.endsWith("://")))},P=function(n,r){var t,u=j(n)
;for(t=0;t<u.length;)u[t+1]<=r?u.splice(t,2):(u[t]=Math.max(u[t]-r,0),u[t+1]-=r,t+=2);return u},j=function(n){
var t,u,e,o,i,f,l,a,c,s,_,v=[];for(t=0,u=h.length;t<u;t++)for(e=0,o=0,i=void 0,l=(f=n.split(r.Qr.Pr[t])).length-1,
a=h[t].length;e<l;e++,o=i)i=(o+=f[e].length)+a,v.push([o,i]);if(0===v.length)return v;if(1===v.length)return v[0]
;for(v.sort(r.sortBy0),c=v[0],t=1,s=1,u=v.length;s<u;s++)c[t]>=(_=v[s])[0]?c[t]<_[1]&&(c[t]=_[1]):(c.push(_[0],_[1]),
t+=2);return c},r.sortBy0=function(n,r){return n[0]-r[0]},q=function(n,r,t,u){var o,i,f,l,a,c="",s=n.length,_=s,v=""
;if(s<=u||(t>1?_=n.indexOf("/")+1||s:(_=n.indexOf(":"))<0?_=s:e.uu.test(n.slice(0,_+3).toLowerCase())?_=n.indexOf("/",_+4)+1||s:_+=22),
_<s&&r.length)for(o=r.length,i=s+8;(o-=2)>-4&&i>=_;i=o<0?0:r[o])if(f=o<0?_:r[o+1],(l=i-20-Math.max(f,_))>0&&(s-=l)<=u){
_=f+(u-s);break}for(s=0,o=0;s<u&&o<r.length;o+=2)(l=(i=r[o])-20-(a=Math.max(s,_)))>0?(u+=l,v=e.nt(n,s,a+11),
c+=b?v:e.At(v),c+="\u2026",v=e.eu(n,i-8,i),c+=b?v:e.At(v)):s<i&&(v=n.slice(s,i),c+=b?v:e.At(v)),v=n.slice(i,s=r[o+1]),
b?c+=v:(c+="<match>",c+=e.At(v),c+="</match>");return v=n.length<=u?n.slice(s):e.nt(n,s,u-1>s?u-1:s+10),
c+(b?v:e.At(v))+(n.length<=u?"":"\u2026")},r.jt=function(n){
for(var r=l.le.Ee&&n.startsWith("http")?l.le.Oe(n):-1,u=r<0?~r-1:r,e=u<0?[]:t.Ce.Ge,o=n.indexOf(":")+3,i=0,f=0,a="",c="",s=0,_=0;i<=u&&(o="/"===n[o]?o+1:n.indexOf("/",o+1)+(f?0:1))>0;f=o){
for(a=n.slice(f,o),_=u;i<=_;)if((c=e[s=i+_>>>1].u.slice(f))>a)_=s-1;else{if(c===a)return f?e[s].u:"";i=s+1}
if(i<=u&&f&&"/"===(a=e[i].u)[o]&&a.length<=++o)return a}return""},K=function(n,e,o,i,f){var l,a,v=t.cn
;null===c&&(v=1!==v?v:t.kn>51||t.Q.wn||s?t.cn=0:1),1!==v||2048&e?(r.tabsInNormal=c=2!==v&&!(2048&e),
_!==(l=(c?2:0)|(n?1:0))&&(s=null,
_=l),(f=f||s)?o(i,f):(a=o.bind(null,i),n?(512&e?u.getCurTabs:u.tn)(a):u.gn.query({},a))):u.getCurWnd(n,function(u){
t.cn=u.incognito?2:0,i.o||r.Br(n,e,o,i,n?u.tabs:null)})},r.Br=K,f.Bn.ou=function(){
s&&(1&_||!(2&_)!=(2===t.cn))&&r.we.dt(null)},o.st.then(function(){o._t("searchEngines",null)})});