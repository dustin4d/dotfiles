"use strict";__filename="background/store.js",define(["require","exports"],function(n,e){var t,r,a,o,l,s
;Object.defineProperty(e,"__esModule",{value:true
}),e.Q=e.yu=e.mi=e.vo=e.yt=e.R=e.wr=e.mr=e.go=e.Lo=e.r=e.getNextFakeTabId=e.vt=e.l=e.Tu=e.jo=e.ro=e.I=e.y=e.M=e.x=e.O=e.Dn=e.ir=e.fa=e.Hu=e.ba=e.$u=e.X=e.Me=e.Ce=e.in=e._a=e.ha=e.cn=e.xu=e._n=e.hn=e.Hn=e.zn=e.a=e.wa=e.co=e.at=e.mu=e.io=e.re=e.el=e.Qn=e.oo=e.u=e.Ru=e.o=e.Ma=e.bo=e.Ca=e.Pa=e.Ou=e.Vt=e.vr=e.B=e.vomnibarPage_f=e.newTabUrl_f=e.il=e.z=e.ja=e.To=e.No=e.Yn=e.te=e.G=e.Sa=e.kn=e.Xn=e.OnSafari=e.OnEdge=e.OnFirefox=e.OnChrome=e.Va=void 0,
e.Va=1,e.OnChrome=!0,e.OnFirefox=!!0,e.OnEdge=!!0,e.OnSafari=!!0,t=navigator.userAgentData,
e.Xn=(r=t&&(t.brands||t.uaList))?!!r.find(function(n){return n.brand.includes("Edge")||n.brand.includes("Microsoft")
}):matchMedia("(-ms-high-contrast)").matches,e.kn=r&&(a=r.find(function(n){return n.brand.includes("Chromium")
}))&&parseInt(a.version)>82?parseInt(a.version):(s=navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/))?75==+s[1]&&matchMedia("(prefers-color-scheme)").matches?81:0|s[1]:998,
e.Sa=999,e.G=2,e.Yn=location.origin+"/",e.No=navigator.language.startsWith("zh"),e.To=false,e.ja=false,e.z={},
e.il=new Map,e.newTabUrl_f="",e.vomnibarPage_f="",e.B={v:e.kn,d:"",g:false,m:false},e.vr={map:new Map,rules:[],
keywords:null},e.Vt={v:e.Xn?-e.kn:e.kn,c:"",i:0,l:0,m:null,n:0,s:"",t:""},e.Ou={actions:[]},e.Pa=false,e.o=false,
e.Qn=new Map,e.el=new Map,e.re=0,e.at={},e.co=-1,e.wa=false,e.a=new Map,e.zn=[],e.Hn=new Map,e.hn=-1,e._n=-1,e.xu=-1,
e.cn=1,e.ha=null,e._a=null,e.in={un:[],Un:[],f:0,En:0},e.Ce={Ge:null,Xe:new Map,qe:0,Qe:0,Ye:0},e.Me=new Map,e.$u=null,
e.ba=null,e.fa=0,e.ir=new Map,e.Dn=0,e.O=null,e.x=1,o=null;e.g=null,e.pi=null,e.Tu=function(n,e){
var t=o,r=!n||t&&t.i===n;return o=r?e:t,r?t:null},e.l=function(){},e.vt={},l=-4,e.getNextFakeTabId=function(){return l--
},e.r=e.l,e.Lo=e.l,e.go=null,e.mr=function(){return""},e.wr=function(){return""},e.R=function(n){return n},
e.yt=function(){return null},e.vo=null,e.mi=null,e.Q={Ia:0,U:"chrome",Na:0,
ne:e.Xn?/^https:\/\/(ntp|www)\.msn\.\w+\/(edge|spartan)\/ntp\b/:"chrome-search://local-ntp/local-ntp.html",wn:false,
ee:null,pa:"",no:"",GitVer:"792929e",so:"/lib/injector.js",_u:"/front/vomnibar-tee.html",
HelpDialogJS:"/background/help_dialog.js",Bt:"pages/options.html",da:"browser",Ba:"",
to:"https://github.com/gdh1995/vimium-c",va:null,Su:"/pages/show.html",Gu:"",po:"/front/vomnibar.js",Eu:""}});