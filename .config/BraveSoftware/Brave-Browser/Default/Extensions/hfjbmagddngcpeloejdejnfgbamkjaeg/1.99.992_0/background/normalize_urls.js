"use strict"
;__filename="background/normalize_urls.js",define(["require","exports","./store","./utils"],function(e,r,n,t){
var i,u,a,s,l,o,f,c,m,d;Object.defineProperty(r,"__esModule",{value:true
}),r.Ju=r.tu=r.ei=r.$r=r.D=r.vu=r.ri=r.ni=r.Or=r.ti=r.Ir=r.ii=r.ui=r.ai=r.si=r.li=r.es=r.oi=r.fi=void 0,
r.fi=/^([^:]+(:[^:]+)?@)?([^:]+|\[[^\]]+])(:\d{2,5})?$/,r.oi=/^(?:ext|web)\+[a-z]+:/,
r.es=/^"[^"]*"$|^'[^']*'$|^\u201c[^\u201d]*\u201d$/,r.li=/\$([sS$])?(?:\{([^}]*)})?/g,r.si=/\$([+-]?\d+|\$)/g,
r.ai=/^[\w\x80-\ufffd]{1,8}>/,r.ui=/<[\w\x80-\ufffd]{1,8}$/,r.ii=/\|([\w\x80-\ufffd]{1,8}|(,|%2[cC])[\w,-]*)$/,
i=["blank","newtab","options","show"],a={__proto__:null,about:"",changelog:"/RELEASE-NOTES.md",help:"/wiki",home:"",
license:"/LICENSE.txt",option:u="options.html",permissions:"/PRIVACY-POLICY.md#permissions-required",
policy:"/PRIVACY-POLICY.md",popup:u,preference:u,preferences:u,privacy:"/PRIVACY-POLICY.md#privacy-policy",profile:u,
profiles:u,readme:"#readme",release:"/RELEASE-NOTES.md",releases:"/RELEASE-NOTES.md",
"release-notes":"/RELEASE-NOTES.md",setting:u,settings:u,wiki:"/wiki"},r.Ir=0,r.ti=false,r.Or=function(e,i,u,a){
var o,f,c,d,p,w,v,g,$;return e=e.trim(),r.Ir=0,t.hr(e)?(e=e.replace(/\xa0/g," "),t._r(),e):(o=-1,f=0,c=false,
g='"'===(w=e.replace(/[\n\r]+[\t \xa0]*/g,"").replace(/\xa0/g," "))[0]&&w.endsWith('"'),$=w,e=w=g?w.slice(1,-1):w,
/^[A-Za-z]:(?:[\\/](?![:*?"<>|/])|$)|^\/(?:Users|home|root)\/[^:*?"<>|/]+/.test(e)||e.startsWith("\\\\")&&e.length>3?m(e):((d=(e=w.toLowerCase()).indexOf(" ")+1||e.indexOf("\t")+1)>1&&(e=e.slice(0,d-1)),
0===(d=e.indexOf(":"))?o=4:-1!==d&&t.uu.test(e)?e.startsWith("vimium:")?(o=3,u|=0,e=w.slice(9),
u<-1||!e?w="vimium://"+e:-1===u||g||!(w=n.yt(e,u,null,(a||0)+1))?w=r.vu(e,false,u):"string"!=typeof w&&(o=5)):r.oi.test(e)?o=0:(-1===(p=e.indexOf("/",d+3))?e.length<w.length:e.charCodeAt(p+1)<33)?o=4:/[^a-z]/.test(e.slice(0,d))?o=(d=e.charCodeAt(d+3))>32&&47!==d?0:4:e.startsWith("file:")?o=0:e.startsWith("chrome:")?o=e.length<w.length&&e.includes("/")?4:0:n.Xn&&e.startsWith("read:")?o=!/^read:\/\/([a-z]+)_([.\da-z\-]+)(?:_(\d+))?\/\?url=\1%3a%2f%2f\2(%3a\3)?(%2f|$)/.test(e)||e.length<w.length?4:0:e=e.slice(d+3,p>=0?p:void 0):(-1!==d&&e.lastIndexOf("/",d)<0&&(o=r.ni(w.toLowerCase(),d,e.length%w.length)),
f=2,
p=w.length,-1===o&&e.startsWith("//")&&(e=e.slice(2),f=1,p-=2),-1!==o?"about:blank/"===e&&(w="about:blank"):(d=e.indexOf("/"))<=0?(0===d||e.length<p)&&(o=4):e.length>=p||e.charCodeAt(d+1)>32?(c=e.length>d+1,
e=e.slice(0,d)):o=4),-1===o&&e.lastIndexOf("%")>=0&&(e=t.Zn(e)).includes("/")&&(o=4),
-1===o&&e.startsWith(".")&&(e=e.slice(1)),
-1!==o||((v=r.fi.exec(e))?(e=v[3]).endsWith("]")?o=t.du(e,6)?f:4:"localhost"===e||e.endsWith(".localhost")||t.du(e,4)||v[4]&&c?o=f:(d=e.lastIndexOf("."))<0||0===(o=t.ci(e.slice(d+1)))?(p=e.length-d-1,
o=2!==f&&(d<0||(0!==f?p>=3&&p<=5:p>=2&&p<=14)&&!/[^a-z]/.test(e.slice(d+1)))||s(e,v[4])>0?f:4):o=/[^.\da-z_\-]|xn--|^-/.test(e)?e.startsWith("xn--")||e.includes(".xn--")||(e.length===d+3||1!==o?!f:s(e,v[4]))?f:4:2!==f||c?f:e.endsWith(".so")&&e.startsWith("lib")&&e.indexOf(".")===e.length-3?4:v[2]||v[4]||!v[1]||/^ftps?(\b|_)/.test(e)?2:e.startsWith("mail")||e.indexOf(".mail")>0||(p=e.indexOf("."))===d?4:e.indexOf(".",++p)!==d?2:e.length===d+3&&1===o&&t.ci(e.slice(p,d),true)?4:2:(o=4,
e.length===w.length&&t.du(e="[".concat(e,"]"),6)&&(w=e,o=2))),t._r(),a||(r.ti=false),r.Ir=o,
0===o?/^extension:\/\//i.test(w)?"chrome-"+w:w:4===o?r.D($.split(t.F),i,u,a):o<=2?2===o&&l(w,e)||(2===s(e,v&&v[4])?"https:":"http:")+(2===o?"//":"")+w:w))
},s=function(e,r){var t=r&&n.Ce.Xe.get(e+r)||n.Ce.Xe.get(e);return t?t.et?2:1:0},l=function(e,r){
if(/^(?!www\.)[a-z\d-]+\.([a-z]{3}(\.[a-z]{2})?|[a-z]{2})\/?$/i.test(e)&&!s(r)){var t=n.Ce.Xe.get("www."+r)
;if(t)return"".concat(t.et?"https":"http","://www.").concat(e.toLowerCase().replace("/",""),"/")}return""},
o=function(e,n,i){var u="/"===e.substr(n+1,1);if("%"===e.substr(n+1,1))return 4;switch(e.slice(0,n)){case"about":
return u?4:i>0||e.includes("@",n)?-1:0;case"blob":case"view-source":
return(e=e.slice(n+1)).startsWith("blob:")||e.startsWith("view-source:")?4:(r.Or(e,null,-2,1),r.Ir<=2?0:4);case"data":
return u?4:(n=e.indexOf(",",n))<0||i>0&&i<n?-1:0;case"file":return 0;case"filesystem":return e=e.slice(n+1),
t.uu.test(e)?(r.Or(e,null,-2,1),0===r.Ir&&/[^/]\/(?:persistent|temporary)(?:\/|$)/.test(e)?0:4):4;case"magnet":
return"?"!==e[n+1]?-1:0;case"mailto":return u?4:(n=e.indexOf("/",n))>0&&e.lastIndexOf("?",n)<0?-1:0;case"tel":
return/\d/.test(e)?0:4;default:return r.oi.test(e)?0:u?4:-1}},r.ni=o,r.ri=function(e){
var r=e.startsWith("filesystem:")?11:e.startsWith("view-source:")?12:0;return r?e.slice(r):e},r.vu=function(e,r,t){
var u,s,l="",o="",f=e.trim();if(!f)return r?"":n.Yn+"pages/";if((u=f.indexOf(" ")+1)&&(o=f.slice(u).trim(),
f=f.slice(0,u-1)),(u=f.search(/[\/#?]/)+1)&&(l=f.slice(u-1).trim(),f=f.slice(0,u-1)),"display"===f&&(f="show"),
!/\.\w+$/.test(f))if(f=f.toLowerCase(),
null!=(s=a[f]))("release"===f||"releases"===f)&&(s+="#"+n.Q.pa.replace(/\D/g,"")),
s=f=s&&"/"!==s[0]&&"#"!==s[0]?s:n.Q.to+(s.includes(".")?"/blob/master"+s:s);else{if("newtab"===f)return n.newTabUrl_f
;if("/"===f[0]||i.indexOf(f)>=0)f+=".html";else{if(1===t||-1===t)return"vimium://"+e.trim()
;f="show.html#!url vimium://"+f}}return r||s&&s.includes("://")||(f=n.Yn+("/"===f[0]?f.slice(1):"pages/"+f)),l&&(f+=l),
f+(o&&(f.includes("#")?" ":"#!")+o)},r.D=function(e,t,i,u){var a,s
;return s=(a=n.vr.map.get(t=t||"~"))?r.$r(e,a.yr,a.l):e.join(" "),u||(r.ti=!!a&&"~"!==t),
"~"!==t?r.Or(s,null,i,(u||0)+1):(r.Ir=4,s)},r.$r=function(e,i,u,a){var s,l=0
;return i=0===e.length&&u?u:i.replace(r.li,function(u,o,f,c){var m,d,p,w
;return u.endsWith("$")||!o&&!f?"$":(o||(/^s:/i.test(f)?(o=f[0],f=null==f?void 0:f.slice(2)):o="s"),d=e,
(p=f?r.ii.exec(f):null)&&"\\"!==f.charAt(p.index-1)?f=f.slice(0,p.index):p=null,
!(w=f?r.ui.exec(f)||r.ai.exec(f):null)||"<"===w[0][0]&&"\\"===f.charAt(w.index-1)||(f="<"===w[0][0]?f.slice(0,w.index):f.slice(w[0].length),
d=(d=[n.ir.get("<"===w[0][0]?w[0].slice(1):w[0].slice(0,-1))||""])[0].split(" ")),"S"===o?(m=d,
o=" "):(m=d===e&&s?s:d.map(t.gr),d===e&&!s&&(s=m),o=t.hr(i)||i.startsWith("vimium://run")?"%20":"+"),
f&&f.includes("\\")&&(f=f.replace(/\\([\\<>|])/g,"$1")),
f=0===m.length?"":f&&f.includes("$")?f.replace(r.si,function(e,r){if("$"===r)return"$";var n=parseInt(r,10)
;if(!n)return m.join(o);if(n<0)n+=m.length+1;else if("+"===r[0])return m.slice(n-1).join(o);return m[n-1]||""
}):m.join(null!=f?f:o),p&&(f=n.R(f,0,t.Zn(p[0].slice(1)))),null!=a&&f&&(a.push(c+=l,c+f.length),l+=f.length-u.length),f)
}),t._r(),null==a?i:{yr:i,St:a}},f=function(e){var n,t,i=e.indexOf(":"),u=i;if(i<=0)return e
;if(r.oi.test(e.slice(0,i+1).toLowerCase()))return e.slice(0,i).toLowerCase()+e.slice(i)
;if("://"===e.substr(i,3))if((i=e.indexOf("/",i+3))<0)i=u,
u=-1;else if(7===i&&"file"===e.slice(0,4).toLowerCase())return"file:///"+((i=":"===e.charAt(9)?3:"%3a"===e.substr(9,3).toLowerCase()?5:0)?e[8].toUpperCase()+":/":"")+e.slice(i+8)
;return t=(n=e.slice(0,i)).toLowerCase(),-1===u&&/^(file|ftp|https?|rt[ms]p|wss?)$/.test(n)&&(e+="/"),
n!==t?t+e.slice(i):e},r.ei=f,c=function(e){var r=t.Zn(e);return/[^\w.$+-\x80-\ufffd]|\s/.test(r)?e.replace(/%24/g,"$"):r
},m=function(e){var r,n,i
;return(e=e.replace(/\\/g,"/")).startsWith("//")&&!e.startsWith("//./")?((r=(e=e.slice(2)).split("/",1)[0]).includes("%")&&(e=c(r)+e.slice(r.length)),
e.includes("/")||(e+="/")):(e.startsWith("//")&&(e=e.slice(4)),":"===e[1]&&(e=e[0].toUpperCase()+":/"+e.slice(3)),
"/"!==e[0]&&(e="/"+e)),
/[%?#&\s]/.test(e)?(n="",e.indexOf("#")&&((i=/\.[A-Za-z\d]{1,4}(\?[^#]*)?#/.exec(e))?n=(n=e.slice(i.index+i[0].length-1)).includes("=")||!n.includes("/")||n.includes(":~:")?i[1]?i[1]+n:n:"":(i=/#(\w+=|:~:)/.exec(e))&&(n=e.slice(i.index)),
n&&(e=e.slice(0,-n.length))),e="file://"+e.replace(/[?#&\s]/g,encodeURIComponent)+n.replace(/\s/g,encodeURIComponent),
t._r(),e):(t._r(),"file://"+e)},r.tu=function(e,r){var i,u,a,s,l,o,f,m,d;if(2===n.G&&e.startsWith("file://")){
if((i=e.indexOf("/",7))<0||i===e.length-1)return i<0?e+"/":e
;a=(u=7===i?":"===e.charAt(9)?3:"%3a"===e.substr(9,3).toLowerCase()?5:0:0)?e[8].toUpperCase()+":":i>7?"\\\\"+c(e.slice(7,i)):"",
s=e.slice(u?u+7:i>7?i:0),
l=r?/[?#]/.exec(r):null,(f=(o=!r||l?/[?#]/.exec(s):null)?o.index:0)&&l&&(m=t.Zn(r.slice(r.indexOf("/",u?9:i>7?8:0),l.index)))===s.slice(0,m.length)&&(f=m.length),
d=f?s.slice(f):"",e=a+(s=(s=f?s.slice(0,f):s).replace(/\/+/g,"\\"))+d}return e},d=function(e){
var r,n,i,u,a,s,l,o,f,c,m=(new DOMParser).parseFromString(e,"image/svg+xml").firstElementChild
;for(r of m?[].slice.call(m.querySelectorAll("script,use")):[])r.remove();if(!m||!m.lastElementChild)return""
;for(n of"id class aria-hidden".split(" "))m.removeAttribute(n)
;for(u=(i=m.attributes).length;0<=--u;)(a=i.item(u).name).startsWith("data-")&&m.removeAttribute(a)
;if(!m.getAttribute("xmlns")){for(u of s=[].slice.call(i))m.removeAttributeNode(u)
;for(u of(m.setAttribute("xmlns","http://www.w3.org/2000/svg"),s))m.setAttributeNode(u)}
for(o=m.ownerDocument.createTreeWalker(m,NodeFilter.SHOW_TEXT);l=o.nextNode();)(c=(f=l.data).trim()).length<f.length&&(l.data=c?(t.F.test(f[0])?" ":"")+c+(t.F.test(f.slice(-1))?" ":""):" ")
;return m.outerHTML.replace(/\xa0/g," ")},r.Ju=function(e){
return"data:image/svg+xml,"+d(e).replace(/<\/?[A-Z:]+(?=\s|>)/g,function(e){return e.toLowerCase()
}).replace(/(?:[%?#]|[^\S ])+/g,encodeURIComponent)}});