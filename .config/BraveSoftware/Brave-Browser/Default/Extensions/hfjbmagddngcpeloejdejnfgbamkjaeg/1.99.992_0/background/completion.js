"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./completion_utils","./browsing_data_manager"],function(n,e,r,t,u,i,f,o,l){
var a,c,s,_,d,v,m,h,p,w,g,b,S,y,M,k,x,T,R,$,z,A,j,F,B,D,E,O,I;Object.defineProperty(e,"__esModule",{value:true}),a=0,
c=false,s=false,_=0,d=0,v=0,m=0,h=0,p=[""],w="",g="",b="",S="",y=0,M=false,k=false,x="",T="",R=0,$=true,
z=function(n,e,r,t,u,i){this.e=n,this.u=e,this.t=r,this.title=t,this.r=u(this,i),this.visit=0},A={Sr:function(n,e){
if(0!==p.length&&1&R)2===r.in.f?A.Mr():l.ae.ge=function(){n.o||A.Mr()};else if(O.kr([],1),e)return;0===r.in.f&&l.ae.ye()
},Mr:function(){var n,e,t,u,i,f,a,c,s,v,w=p.some(function(n){return 47===n.charCodeAt(0)
}),g=null===(n=o.we.Tr)||void 0===n?void 0:n.un,b=o.we.Rr?[]:null,S=g&&g[0]===w?g[1]:r.in.un,y=S.length,M=[]
;for(t=0;t<y;t++)if(o.zr((u=S[t]).t,w?u.je:u.Ie)&&($||u.Le)){if(null!==b&&b.push(u),
T&&u.u.length<T.length+2&&T===(u.u.endsWith("/")?u.u.slice(0,-1):u.u))continue;M.push([-o.Ar(u.t,u.Ie),t])}
for(a of(b&&(o.we.Rr.un=[w,b]),m+=e=M.length,e?(M.sort(o.sortBy0),h>0&&!(6&R)?(M=M.slice(h,h+d),
h=0):e>h+d&&(M.length=h+d)):R^=1,i=[],f=64&_?-.666446:0,M))c=a[0],f&&(c=c<f?c:(c+f)/2),
s=new z("bookm",(u=S[t=a[1]]).u,u.t,w?u.je:u.Ie,o.get2ndArg,-c),v=32&_&&l.le.Ee?l.le.Oe(u.u):-1,
s.visit=v<0?0:r.Ce.Ge[v].Fe,s.id=u.nn,i.push(s),null!==u.Wn&&(s.u=u.Wn,s.title=o.cutTitle(w?u.je:u.Ie),
s.textSplit="javascript: \u2026",s.t=u.Ue);O.kr(i,1)}},j={Sr:function(n,e){var t,u,i,f,a
;if(!p.length&&1024&_||!(2&R))return O.kr([],2);if(t=p.length>0,r.Ce.Ge){if(t)return void j.Mr()
;(r.Ce.Qe>10||r.Ce.Ye>0)&&l.le.Ze()}else if(u=t?function(){n.o||j.Mr()
}:null,t&&(s||l.le.Se)?(l.le.Se>0&&clearTimeout(l.le.Se),l.le.Se=0,l.le.We(u)):(l.le.Se||(l.le.Se=setTimeout(function(){
l.le.Se=0,l.le.We(u)},t?200:150)),t&&O.jr((a=(f=(i=O.Fr).length)>0)&&"search"===i[0].t?[i[0]]:[],c&&a,0,0,f,g,y)),
t)return;0===e?o.Br(k,_,j.Dr,n):l.fe(h+d,$,j.Er.bind(null,n))},Mr:function(){
var n,e,t,u,f,a,c=1===p.length?p[0]:"",s=!!c&&("."===c[0]?/^\.[\da-zA-Z]+$/.test(c):(i.Or(c,null,-2),
i.Ir<=2)),_=s?"."===c[0]||i.Ir>0?o.Qr.Pr[0]:(o.Qr.Ur||o.Qr.Zr(),
o.Qr.Ur[0]):null,v=o.we.Rr?[]:null,w=[-1.1,-1.1],g=[],b=o.zr,S=s&&c.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(c),y=d+h,M=-1.1,k=0,T=0,A=0
;for(x&&y++,T=y;--T;)w.push(-1.1,-1.1)
;for(y=2*y-2,t=(e=(null===(n=o.we.Tr)||void 0===n?void 0:n.Ge)||r.Ce.Ge).length;k<t;k++)if(u=e[k],
(s?_.test(S?u.u:u.t):b(u.t,u.Ie))&&($||u.Le)&&(null!==v&&v.push(u),
A++,(f=s?o.ComputeRecency(u.Fe)||1e-16*Math.max(0,u.Fe):o.ComputeRelevancy(u.t,u.Ie,u.Fe))>M)){
for(T=y-2;0<=T&&w[T]<f;T-=2)w[T+2]=w[T],w[T+3]=w[T+1];w[T+2]=f,w[T+3]=k,M=w[y]}for(v&&(o.we.Rr.Ge=v),m+=A,A||(R^=2),
5&R?k=0:(k=2*h,
h=0);k<=y&&!((f=w[k])<=0);k+=2)(u=e[w[k+1]]).u!==x&&((a=new z("history",u.u,S?u.u:u.t,u.Ie,o.get2ndArg,f)).visit=u.Fe,
g.push(a));l.ie.Be(),O.kr(g,2)},Dr:function(n,e){var r,u;if(o.we.dt(e),!n.o){for(u of(r=new Set,
e))u.incognito&&o.tabsInNormal||r.add(t.getTabUrl(u));j.qr([],n,r,h,r.size)}},Er:function(n,e){var r,t,u,i;n.o||(r=[],
t=new Set,u=new Set,i=-h,e.some(function(n){var e,f=n.u;return!t.has(e=f+"\n"+n.Ie)&&(t.add(e),u.add(f),
++i>0&&r.push(n),r.length>=d)})?j.Cr(r):j.qr(r,n,u,-i,0))},qr:function(n,e,r,u,i){(0,t.t.history.search)({text:"",
maxResults:h+d*($?1:2)+i},function(t){if(!e.o){t=t.filter(function(n){var e=n.url
;return e.length>2e3&&(n.url=e=l.le.ze(e,n)),!r.has(e)&&($||0!==l.ue(n.url,n.title||""))}),
u<0?t.length=Math.min(t.length,d-n.length):u>0&&(t=t.slice(u,u+d));var i=t.map(function(n){return{u:n.url,
Ie:n.title||"",it:n.lastVisitTime,ot:null,ut:null}});u<0&&(i=n.concat(i)),j.Cr(i)}})},Cr:function(n){n.forEach(j.Gr),
h=0,l.ie.Be(),O.kr(n,2)},Gr:function(n,e,r){
var t=n.u,u=new z("history",t,l.ie.Ae(t,t),n.Ie||"",o.get2ndArg,(99-e)/100),i=n.ot;u.visit=n.it,i&&(u.s=i,
u.label='<span class="undo">&#8630;</span>'+n.ut),r[e]=u}},F={Sr:function(n,e){
if(1!==p.length||!(16&R)||p[0].lastIndexOf("/",p[0].length-2)>=0)return O.kr([],16);if(l.le.Je){
if(!r.Ce.Ge)return e>0?O.kr([],16):l.le.We(function(){n.o||F.Sr(n,0)});l.le.Je(r.Ce.Ge)}return F.Mr()},Mr:function(){
var n,e,t,i,f,l,a,s,_,v,w,g=r.Ce.Xe,b=o.Hr,S=16===R&&c?[]:null,y=p[0].replace("/","").toLowerCase(),M=y.length===p[0].length,k=[],x="",T=-1.1
;for(e of(o.Wr(3),g.keys()))(M?e.includes(y):e.endsWith(y))&&(n=g.get(e),($||n.$e>0)&&(t=o.ComputeRelevancy(e,"",n.Fe),
S?S.push({r:t,d:e,m:n}):t>T&&(T=t,x=e)))
;if(i=x.length===y.length,x&&!i&&(x.startsWith("www.")||x.startsWith(y)||(f=x.slice(x.indexOf(".")+1)).includes(y)&&(l=void 0,
(l=g.get(f="www."+f))?($||l.$e>0)&&(x=f,n=l):(l=g.get(f="m."+f))&&($||l.$e>0)&&($||l.$e>0)&&(x=f,n=l)),
(a=x.startsWith(y)?0:x.startsWith("www."+y)?4:-1)>=0&&(w=(_=(s=u.Jr(x))[0]).length-1,
(v=s[1])>1&&(!(a=x.length-a-y.length-_[w].length-1)||3===v&&a===_[w-1].length+1)&&(i=true))),x)m++,c=!h&&i||c,
k=F.Kr(x,n,0,M);else if(S)for(w of(S.sort(F.Lr),(m=S.length)>h+d&&(S.length=h+d),S))k.push(F.Kr(w.d,w.m,w.r,M)[0])
;o.Wr(b),O.kr(k,16)},Kr:function(n,e,t,i){var f,a,c,s,_,v,m,p,w=e.et>0,g=""
;return 2===r.in.f&&(f=new RegExp("^https?://".concat(u.ct(n),"/?$")),a=r.in.un.filter(function(n){
return f.test(n.u)&&($||n.Le)}),a.length>0&&(c=a.filter(function(n){return"s"===n.u[4]}),
T=(s=(a=(w=c.length>0)?c:a)[0].u).endsWith("/")?s.slice(0,-1):s,g=a[0].Ie)),_=(w?"https://":"http://")+n+"/",!t&&(x=_,
h>0)?(h--,[]):(v=new z("domain",_,i?n:n+"/","",o.get2ndArg,t||2),p=(m=l.le.Ee?l.le.Oe(_):-1)>0?r.Ce.Ge[m]:null,o.Nr(v),
p&&($||p.Le)&&(v.visit=p.Fe,g=g||p.Ie),v.title=o.cutTitle(g,[]),--d,[v])},Lr:function(n,e){return e.r-n.r}},
B="audible audio muted unmuted active discarded incognito normal pinned visited new grouped ungrouped".split(" "),D={
Sr:function(n,e){!(4&R)||e&&(!p.length||256&_)?O.kr([],4):o.Br(k,_,D.Mr,n)},Mr:function(n,e){
var i,f,a,c,s,w,g,b,S,y,M,x,T,$,A,j,F,D,E,I,P,Q,U,Z,q,C,G,H,W,J,K,L,N,V,X,Y,nn,en,rn,tn;if(o.we.dt(e),!n.o){if(i=r.hn,
f=p.length<=0,a=3&R,s=[],g=0,(c=!!(8&_)&&k&&f)&&!(128&_)&&e.length>h&&e.length>v){for(S of(b=new Map,e))b.set(S.id,S)
;for(x=(M=(y=(w=b.get(i))?w.openerTabId:0)?b.get(y):null)?e.indexOf(M):w?e.indexOf(w)-1:0,
T=M?0:v/2|0;1<--T&&x>0&&e[x-1].openerTabId===y;x--);e=x>0?e.slice(x).concat(e.slice(0,x)):e}for(S of($=[],A=[],
j=(p.join("\n").match(/^:[a-z]+$/gm)||[]).reduce(function(n,e){e=e.slice(1)
;for(var r=0;r<B.length;r++)B[r].startsWith(e)&&(n|=1<<r);return n},0),w=!w&&j?e.filter(function(n){return n.id===i
})[0]:w,F=j&&w?t.getGroupId(w):null,e))!k&&o.tabsInNormal&&S.incognito||(D=t.getTabUrl(S),
E=S.text||(S.text=l.ie.Ae(D,S.incognito?"":D)),I=S.title,j&&(1===p.length&&(E=I=""),S.audible&&(1&j&&(I+=" :audible"),
2&j&&(I+=" :audio"),12&j&&(t.isTabMuted(S)?4&j&&(I+=" :muted"):8&j&&(I+=" :unmuted"))),
16&j&&S.active&&!k&&(I+=":active"),
32&j&&S.discarded&&(I+=" :discarded"),192&j&&(S.incognito?64&j&&(I+=" :incognito"):128&j&&(I+=" :normal")),
256&j&&S.pinned&&(I+=" :pinned"),1536&j&&(r.Hn.has(S.id)?512&j&&(I+=" :visited"):1024&j&&(I+=" :new")),
6144&j&&(F&&t.getGroupId(S)===F?2048&j&&(I+=" :grouped"):4096&j&&(I+=" :ungrouped"))),(f||o.zr(E,I))&&(P=S.windowId,
!k&&A.lastIndexOf(P)<0&&A.push(P),$.push(S)));if(a&&1===$.length&&$[0].id===i&&($.length=0),m+=Q=$.length,Q||(R^=4),
h>=Q&&!a)return h=0,O.kr(s,4);if(A.sort(function(n,e){return n-e}),U=c?u.i():null,Z=r._n,
c)for(S of $)U[S.id]=(C=(q=S.openerTabId)&&U[q])?C<5?C+1:5:1
;for(G=32&_?1===r.G?0:r.kn<62?Date.now()-(g=performance.now()):performance.timeOrigin:0,H=f?c?function(n,e){return 1/e
}:(g=g||performance.now(),function(n,e){return r.Hn.get(e)||(4&_?g+e:-e)}):o.ComputeWordRelevancy,
W=0;W<$.length;)J=(S=$[W++]).id,K=c?U[J]:1,D=t.getTabUrl(S),L=r.Hn.get(J),N=new z("tab",D,S.text,S.title,H,c?W:J),
P=S.windowId!==Z?A.indexOf(S.windowId)+1+":":"",
V=S.index+1+"",X="",S.active?(c||!(i===J||S.windowId===Z)||(N.r=f||!/^(?!:[a-z]+)/m.test(p.join("\n"))?1<<31:0),
V="(".concat(V,")")):L||(V="**".concat(V,"**")),!o.tabsInNormal&&S.incognito&&(X+="*"),!!S.discarded&&(X+="~"),
S.audible&&(X+=t.isTabMuted(S)?"\u266a":"\u266c"),
N.visit=L?L+G:0,N.s=J,N.label="#".concat(P).concat(V).concat(X&&" "+X),K>1&&(N.level=" level-"+K),s.push(N)
;if(s.sort(O.Vr),nn=h+d-(Y=s.length),a||nn<0||!f){for(h>0&&!a?(s=s.slice(h,h+d),Y=d,h=0):Y>h+d&&(s.length=Y=h+d),
T=a?0:Y,en=Math.min(Y,28);T<en;T++)s[T].r*=8/(T/4+1);!h&&O.Fr&&O.Xr(s)}else if(h>0){
for(tn of(rn=s.slice(0,nn).map(function(n){return Object.assign({},n)}),rn))tn.label+="[r]"
;for(Y=(s=s.slice(h).concat(rn)).length,T=0;T<Y;T++)s[T].r=Y-T;h=0}l.ie.Be(),O.kr(s,4)}}},E={Yr:0,Sr:r.l,
ht:function(n,e,t){var u,f,c,s,_,d,v,m,w,g;if(!(8&R))return O.kr([],8);if(c=(f=p).length>0?f[0]:"",0===f.length);else{
if(!e&&"\\"===c[0]&&"\\"!==c[1])return c.length>1?f[0]=c.slice(1):f.shift(),c=b.slice(1).trimLeft(),
$=!l.omniBlockList||$||l.oe.ft([c]),h?(h--,O.kr([],8)):(u=E.wt(c,t),O.kr([u],8));s=r.vr.map.get(c)}if(e){
if(!s)return true}else{if(!s&&!c.startsWith("vimium://"))return 0===a&&f.length<=1&&(a=f.length?o.bt.gt()?-2:0:-1),
O.kr([],8);s&&S&&(f.push(S),h=0,b+=" "+S,S="",y&=-5),f.length>1||(a=-1)}if(f.length>1&&s?(f.shift(),
b.length>200&&(f=b.split(" ")).shift()):s&&(f=[]),$=!l.omniBlockList||$&&l.oe.ft([c]),s?(v=_=(m=i.$r(f,s.yr,s.l,[])).yr,
d=m.St):(v=_=f.join(" "),d=[]),"~"===c);else if(_.startsWith("vimium://")){if(w=r.yt(_.slice(9),1,true),
g=E.Mt.bind(E,f,_,v,t||s,d),w instanceof Promise)return w.then(E.kt.bind(E,n,t||s,g))
;if(w instanceof Array)return E.kt(n,t||s,g,w);w&&(_=v=w,d=[])}else _=i.Or(_,null,-2);return u=E.Mt(f,_,v,t||s,d),
O.kr([u],8)},kt:function(n,e,r,t){var i,l,c,s,_;if(!n.o){switch(t[1]){case 5:case 7:if(a=7===t[1]&&p.length>1?a:-1,
!(l=t[0]))break
;return S="",(p=((b="\\ "+l).length<201?b:u.nt(b,0,200).trim()).split(" ")).length>1&&(p[1]=f.xt(p[1],p.length>2)),
o.Tt(p),E.ht(n,null,e);case 2:if(o.Tt(p=(c=t[0]).length>1||1===c.length&&c[0]?c:p),(s=E.Yr++)>12)break
;if(_=E.ht(n,true,e),s<=0&&(E.Yr=0),true!==_)return _;break;case 0:t[0]&&(i=E.Rt(r(),t))}O.kr(i||[r()],8)}},
Mt:function(n,e,r,t,i){var f=new z("search",e,r,(t?t.$t+": ":"")+n.join(" "),o.get2ndArg,9)
;return n.length>0&&t?(f.t=E.zt(r,i),f.title=o.cutTitle(f.title,[t.$t.length+2,f.title.length]),
f.textSplit=o.highlight(f.t,i)):(f.t=u.Zn(o.shortenUrl(r)),f.title=o.cutTitle(f.title,[]),f.textSplit=u.At(f.t)),
f.v=s?"":t&&t.l||o.jt(e),f.p=s&&t?t.$t:"",f},Rt:function(n,e){
var r=e[0],t=new z("math","vimium://copy "+r,r,r,o.get2ndArg,9)
;return--t.r,t.title='<match style="text-decoration: none;">'.concat(o.cutTitle(t.title,[]),"<match>"),
t.textSplit=u.At(e[2]),[n,t]},zt:function(n,e){var r,t,i,f=e.length;if(t=u.Zn(e.length>0?n.slice(0,e[0]):n),
(r=u.Ft(t))&&(t=t.slice(r),r=0),e.length<=0)return t;for(i=e[0];e[r]=t.length,f>++r;)t+=u.Zn(n.slice(i,e[r])),i=e[r]
;return i<n.length&&(t+=u.Zn(n.slice(i))),t},wt:function(n,e){
var t=i.Or(n,null,-2),f=4===i.Ir,l=new z("search",t,u.Zn(o.shortenUrl(t)),"",o.get2ndArg,9)
;return l.title=f?(e&&e.$t||"~")+": "+o.cutTitle(n,[0,n.length]):o.cutTitle(n,[]),l.textSplit=u.At(l.t),
l.v=s?"":f&&e&&((e.l||e.yr).startsWith("vimium:")?r.Q.Bt:e.l)||o.jt(t),l.p=s&&f?"~":"",l.n=1,l}},O={Dt:0,Et:0,Fr:null,
Ot:null,jr:null,Sr:function(n){var e,r,t,u;if(O.Ot&&(O.Ot.o=true),e=O.Ot={o:false},O.Et=0,r=1,t=-9&(R&=n[0])?n.length:2,
O.Fr=[],O.Dt=t-1,a=h&&-1,n[1]===E){if(u=E.ht(e),t<3)return;if(u)return void u.then(O.It.bind(null,n,e,r));r=2}
O.It(n,e,r)},It:function(n,e,r){for(o.Pt(Date.now()-18144e5),o.Wr(3*p.length||.01),
p.indexOf("__proto__")>=0&&(p=p.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),o.Tt(p)),
o.we.Qt($),p.sort(O.Ut),o.Qr.Zt();r<n.length;r++)n[r].Sr(e,r-1)},Ut:function(n,e){
return e.length-n.length||(n<e?-1:n===e?0:1)},Xr:function(n){var e=new Map(n.map(function(n){return[n.u,n]}))
;O.Fr=O.Fr.filter(function(n){var r="search"===n.e?void 0:e.get(n.u);return r&&r.r<n.r&&(r.r=n.r),!r})},
kr:function(n,e){var r=O.Fr,t=n.length;if(t>0&&(O.Et|=e,O.Fr=0===r.length?n:r.concat(n),8===e&&(c=!0,d-=t,m+=t)),
0==--O.Dt)return r=null,O.qt()},qt:function(){var n,e,r,t,u,i,f,l,s,_,d,b,S=O.Fr;return O.Fr=null,S.sort(O.Vr),
h>0?(S=S.slice(h,h+v),h=0):S.length>v&&(S.length=v),o.Qr.Ct=o.Qr.Ur=null,p.length>0&&(e=o.shortenUrl(n=p[0]),
((r=n.length!==e.length)||n.endsWith("/")&&n.length>1&&!n.endsWith("//"))&&(r&&(p[0]=e),o.Qr.Gt(p[0],r))),
S.forEach(o.Nr),
t=S.length>0,u=c&&t,i=m,f=":"===w,s=g,_=y,d=2!=(l=a<0?-2!==a||t||f?0:3:$?p.length<=0||M?0:t?2:f?0:1:0)||f?0:O.Et,b=O.jr,
O.Ht(),b(S,u,l,d,i,s,_)},Ht:function(){O.Ot=O.jr=null,o.Wt(),o.setupQueryTerms(p=[],s=false,0),w=g=b=S=x=T="",
o.Qr.Pr=null,o.Wr(3),o.Pt(0),a=O.Et=_=d=v=m=0,R=0,y=0,c=false,M=k=false,$=true},Jt:function(){var n,e,r=b;if(h=0,S="",
!(0===r.length||(n=(r=r.slice(-5)).lastIndexOf("+"))<0||0!==n&&32!==r.charCodeAt(n-1))){if(r=r.slice(n),
n=b.length-r.length,(e=parseInt(r,10))>=0&&"+"+e===r&&e<=(n>0?100:200))h=e;else if("+"!==r)return;b=b.slice(0,n&&n-1),
S=r,y|=4}},Vr:function(n,e){return e.r-n.r}},I={__proto__:null,bookm:[1,A],domain:[16,F],history:[2,j],
omni:[63,E,F,j,A,D],search:[8,E],tab:[4,D]};r.vt.Sr=function(n,e,t){var i,a,h,S,x,T,z,A,j,F;n=n.trim(),M=false,
n&&2===r.G&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(n)||"file:"===n.slice(0,5).toLowerCase())&&(":/\\".includes(n[1])&&(n=(":"===n[1]?"":"//")+n.slice(":"===n[1]?0:2).replace(/\\+/g,"/")),
(i=(n=n.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2)>=2&&i<n.length&&"/"!==n[i]&&(a=n.slice(i).split("/",1)[0]).includes("%")&&(h=u.Zn(a),
M=h===a,n=n.slice(0,i)+h+n.slice(i+a.length))),w=b=n&&n.replace(u.F," "),g="",y=0,O.Jt(),
p=(n=b)?(n=n.length<201?n:u.nt(n,0,200).trimRight()).split(" "):[],
(S=0|e.c||128)&&(S-=n.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-n.length),
S=Math.max(50,Math.min(S,320)),s=!!(1&(_=e.f)),v=d=Math.min(Math.max(3,0|e.r||10),25),m=0,O.jr=t,x="bomni"===e.o?(_|=64,
I.omni):I[e.o],
z=e.t||63,A=e.e||63,x===I.tab&&(k=!!(2&_)),2===(T=p.length>=1?p[0]:"").length&&":"===T[0]&&(j="b"===(T=T[1])?I.bookm:"h"===T?I.history:"t"===T||"T"===T||"w"===T||"W"===T?(k="t"!==T&&"T"!==T,
_|=0,
_|="T"===T?2048:0,I.tab):"B"===T?(_|=64,I.omni):"H"===T?(_|=256,I.omni):"d"===T?I.domain:"s"===T?I.search:"o"===T?I.omni:null)&&(x=j,
g=p.shift(),
y|=1,b=b.slice(3),A=x[0]),p.length>0&&((T=p[0]).includes("\u3002")||T.includes("\uff1a"))&&!M&&((F=f.xt(T,M=p.length<2))!==T?(p[0]=F,
b=F+b.slice(T.length),
M=M&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(T)):M=M&&T.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(T)),
$=!l.omniBlockList||l.oe.ft(p),R=z&A,c=2===x.length,b&&(y|=2),o.setupQueryTerms(p,s,S),O.Sr(x)}});