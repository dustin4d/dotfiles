"use strict";__filename="pages/options_wnd.js",define(["require","exports","./async_bg","./options_base","./options_defs","./options_permissions"],function(n,t,e,i,o,u){var c,r,a,f,s,l,d;Object.defineProperty(t,"__esModule",{value:true}),t.wn=t.clear_delayed_task=t.advancedOptBtn=t.delayed_task=void 0,t.advancedOptBtn=e.$("#advancedOptionsButton"),c=false,r=function(){t.delayed_task=null},t.clear_delayed_task=r,e.R(8),e.V(i.p),i.e&&e.V(i.e),e.V(function(n){n.textContent=u.yn.version_name||u.yn.version,parseInt(u.yn.version)>=2!=(3===u.yn.manifest_version)&&(n.parentElement.nextElementSibling.textContent="-mv"+u.yn.manifest_version)},e.$("#version")),i.h(o.At,"click",function(n){if(false===n){var t=i.r.st;i.r.st=[],o.At.disabled=true,o.At.firstChild.data=i.t("115_3"),o.Jt.disabled=false,o.Vt(false),window.onbeforeunload=null,window.addEventListener("beforeunload",a,true),0!==t.length&&setTimeout(function(n){e.O(4,n.map(function(n){return i.u.L[n]}))},100,t)}else i.r.Lt().then(function(n){n&&o.At.onclick(false)})},"on"),a=function(){e.O(30)},f=function(){var n,o,r,a,f,s;for(n in t.advancedOptBtn.onclick=function(n,t){var o,u=this,r=null,a=function(){return r=i.u.z("showAdvancedOptions")};null!=n||"hash"===t&&false===a()?i.u.J("showAdvancedOptions",c=!c):c=null!=r?r:a(),o=true===t&&c?null:e.$("#advancedOptions"),e.V(function(){for(;o;)o.style.display=c?"":"none",o=o.nextElementSibling;var n=c?"Hide":"Show";u.firstChild.data=i.t(n)||n,u.setAttribute("aria-checked",""+c)},9)},t.advancedOptBtn.onclick(null,true),i.r.B=false,i.r.n)i.r.n[n].Z();for(s of(i.r.n.exclusionRules.C.length>0&&e.V(function(n){n.style.visibility=""},e.$("#exclusionToolbar")),document.addEventListener("keyup",l),i.h("[data-check]","input",function n(){for(var t of e.$$("[data-check]"))t.removeEventListener("input",n);e.bn("./options_checker.js")}),i.h("[data-auto-resize]","click",function(n){var t,i,o=e.$("#"+n.target.dataset.autoResize),u=o.scrollHeight,c=o.scrollWidth,r=c-o.clientWidth;u<=o.clientHeight&&r<=0||(t=Math.max(Math.min(innerWidth,1024)-120,550),o.style.maxWidth=c>t?t+"px":"",o.style.height=o.style.width="",i=o.offsetHeight-o.clientHeight,u+=i=(r=c-o.clientWidth)>0?Math.max(26,i):i+18,r>0&&(o.style.width=o.offsetWidth+r+4+"px"),o.style.height=u+"px")}),i.h("[data-delay]","click",function(n){var i=this.dataset.delay,o=null;"event"===i&&(o=n||null),"continue"!==i&&n&&e.Kt(n),t.delayed_task=["#"+this.id,o],"complete"!==document.readyState?window.addEventListener("load",function n(t){t.target===document&&(window.removeEventListener("load",n),e.bn("./options_ext.js"))}):e.bn("./options_ext.js")},"on"),e.Ot<53&&i.h(".sel-all","mousedown",function(n){n.target===this&&(e.Kt(n),getSelection().selectAllChildren(this))}),(o=e.$$("[data-permission]")).length>0&&(function(n){function t(){var n,t=this.querySelector("[data-permission]");this.onclick=null,t&&(t.placeholder=i.t("lackPermission",[(n=t.dataset.permission)?': "'.concat(n,'"'):""]))}var o,c=u.yn.permissions||[],r=function(o){var r,a,f=n[o],s=f.dataset.permission;if("C"===s[0]){if(e.Ot>=parseInt(s.slice(1)))return"continue";if("."===(a=s.split(",",2)[1]||",")[0]?null!=window[a.slice(1)]:"("===a[0]&&matchMedia(a).matches)return"continue";r=["beforeChromium",[s.slice(1).split(",",1)[0]]]}else{if("mv3,nonFF"===s)return f.parentNode.parentNode.parentNode.style.display="none","continue";if("action"===s&&(s="browser_action"),s in u.yn||c.includes(s))return"continue";r=["lackPermission",[s?":\n* "+s:""]]}e.V(function(n){n.disabled=true;var e=i.t("invalidOption",[i.t(r[0],r[1])]);n instanceof HTMLInputElement&&"checkbox"===n.type?(n.nextElementSibling.tabIndex=-1,(n=n.parentElement).title=e):(n.value="",n.title=e,i.h(n.parentElement,"click",t,"on"),n instanceof HTMLSpanElement&&(n.style.textDecoration="line-through"))},f)};for(o=n.length;0<=--o;)r(o)})(o),i.h("[data-href]","mousedown",function(){var n,t;for(t of(document.onmouseover=null,n=function(n){n.onmousedown=null,e.O(10,[n.dataset.href,-1]).then(function(t){var e=t[0];n.removeAttribute("data-href"),n.href=e})},e.$$("[data-href]")))n(t)},"on"),document.onmouseover=function(){i.f("mousedown"),e.$("[data-href]").onmousedown()},r=e.$("#openExtensionsPage"),e.Ot<65?e.V(function(n){n.href="chrome://extensions/configureCommands"},r):e.qn&&e.V(function(n){var t="edge://extensions/";n.href=t+"shortcuts",n.textContent=t+"\u2026"},r),e.V(function(n){var t=n.children[1],e=i.t("NewTabAdapter");t.title=e+" - "+i.t("webstore")},e.$("#chromeExtVomnibar")),a=function(n){var i,o,u;c||t.advancedOptBtn.onclick(null),e.Kt(n),i=n.currentTarget.dataset.for.split(":").slice(-1)[0],u=((o=e.$$(i)).find(function(n){return n.checked})||o[0]).nextElementSibling,d(u,true,function(n){VApi&&VApi.x(n.parentElement.parentElement)})},f=function(n){var t=n.dataset.for,o=t.slice(t.indexOf(":")+1),u=t.split(":")[0],c=i.r.n[u.replace("#","")],r=c.F,f=n.parentElement,s=function(){e.V(function(n){var t,o,u=n[0],c=n[1],r=n[2],a=r.find(function(n){return n.checked})||r[0];u.textContent=i.t(a.checked?"145_2":"144"),c&&(o=(t=a.nextElementSibling).getAttribute("data-i2"),c.textContent=o?e.y(o):t.textContent)},[f.querySelector(".status-of-related"),f.querySelector(".name-of-related"),o!==t?e.$$(o):[c.j]])};c.F=function(){return s(),r.call(c)},i.h(n,"click",a,"on"),i.h(c.j,"change",s,true)},e.$$(".ref-text")))f(s)},s=function(){var n,t,u,c,r;for(n in f(),f=s=null,e.jn||e.V(function(n){n.textContent="Cmd"},e.$("#Ctrl")),i.r.n)i.r.n[n].F();e.V(function(){document.documentElement.classList.remove("loading")}),e.Sn.then(e.An),location.hash&&e.V(window.onhashchange),e.R(0,8),i.r.n.keyMappings.F=function(){return e.O(7).then(o.Mt)},t=matchMedia("(prefers-color-scheme: dark)"),u=function(){c.K&&e.O(11),setTimeout(r,34)},r=function(){var n,i,o,u,r,a,f,s=c.Y(),l=2===s?!!t&&t.matches:1===s;if(VApi&&VApi.z){if(n=VApi.y().r)for(o of(i=n.firstElementChild&&"span"===n.firstElementChild.localName?n.firstElementChild:n,e.Ot<51?[].slice.call(i.children):i.children))"style"!==o.localName&&(o.classList.toggle("D",l),"iframe"===(o=o.firstElementChild||o).localName&&(u=o.classList.contains("Find"),(a=(r=o.contentDocument).querySelector("style#dark"))&&a.sheet&&(a.sheet.disabled=!l),r.body.classList.toggle(u?"D":"has-dark",l),u&&(f=VApi.y().f)&&f.parentElement.classList.toggle("D",l)));e.O(3,{key:"d",val:l}).then(function(n){VApi.z.d=n})}e.En(l?2===s?2:1:0)},(c=i.r.n.autoDarkMode).F=u,e.Ot>75?e.V(function(){2===c.C&&e.Sn.then(u),t.onchange=u}):t=null,e.V(function(){setTimeout(function(){var n=document.createElement("script");n.src="loader.js",n.async=true,document.head.appendChild(n),document.documentElement.classList.add("smooth")},120)})},l=function(n){var t,u=n.target,c=n.keyCode;if(13===c)u instanceof HTMLAnchorElement?u.hasAttribute("href")||(setTimeout(function(n){e._n(n),n.blur()},0,u),e.Kt(n)):(n.ctrlKey||n.metaKey)&&(e.Kt(n),u.blur&&u.blur(),o.Vt()&&(i.f("click"),o.At.onclick()));else{if(32!==c)return;u instanceof HTMLSpanElement&&u.parentElement instanceof HTMLLabelElement&&(e.Kt(n),(t=u.parentElement.control).disabled||t.readOnly||e._n(t))}},i.h(i.r.n.userDefinedCss.j,"input",i.v(function(){var n,t,o,u,c,r=i.r.n.userDefinedCss,a=r.j.classList.contains("debugging");(!r.K||a)&&VApi&&VApi.z&&(n=r.Y(),t=n===r.C,o=e.O(8,[n,e.Mn]),u=VApi.y(),c=u.r,o.then(function(n){var e,o,u;r.j.classList.toggle("debugging",!t),VApi.t({k:c||t?0:1,t:i.t("livePreview")||"Live preview CSS\u2026",H:n.ui,f:n.find}),(o=(e=c&&c.querySelector("iframe.Omnibar"))&&e.contentDocument)&&((u=o.querySelector("style.debugged")||o.querySelector("style#custom"))||((u=o.createElement("style")).type="text/css",u.id="custom"),u.parentNode||o.head.appendChild(u),u.classList.add("debugged"),u.textContent=(t?"\n":"\n.inactive { opacity: 1; }\n")+(n.omni&&n.omni+"\n"||""))}))},1200,null,0)),i.h("#importButton","click",function(){var n=e.$("#importOptions");n.onchange?n.onchange(null):e._n(e.$("#settingsFile"))},"on"),e.V(function(n){var t,o,u,c,r=i.u.b,a=e.In,f=e.Ot;a||(u=(o=((t=navigator.userAgentData)&&(t.brands||t.uaList)||[]).filter(function(n){return(parseInt(n.version)===e.Ot&&"Chromium"!==n.brand||n.brand.includes("Opera"))&&!" ".concat(n.brand," ").includes(" Not ")})).find(function(n){return/\b(Edge|Opera)\b/.test(n.brand)})||o[0],c=e.qn?"MS Edge":"",a=u?u.brand:t?c||"Chromium":(/\bChromium\b/.exec(navigator.userAgent)||[""])[0]||c||"Chrome",u&&(f=parseInt(u.version))),n.textContent=a+" "+f+i.t("comma")+i.t("NS")+(i.t(r)||r[0].toUpperCase()+r.slice(1))},e.$("#browserName")),document.addEventListener("keydown",function(n){var t,i,o,u,c;if(e.jn||!n.metaKey)if(32===n.keyCode)"span"===(c=n.target).localName&&"label"===c.parentElement.localName&&n.preventDefault();else{if(!VApi||!VApi.z||"input textarea".includes(document.activeElement.localName))return;"a-f12"===(t=VApi.r[3]({c:" ",e:n,i:n.keyCode,v:""},11))?(i=e.$("#importOptions"),o=i.selectedIndex,u=function(){i.onchange&&i.onchange(null),i.selectedIndex=o},e.$("#recommendedSettings").selected=true,null!=i.onchange?u():setTimeout(u,100)&&i.click()):"?"===t&&e.$("#showCommands").click()}else l(n)}),t.wn=function(n){var t,o;if((n=n.slice("!"===n[1]?2:1))&&/^[a-z][\w-]*$/i.test(n))if(t=e.$('[data-hash="'.concat(n,'"]')))i.f("click"),t.onclick&&t.onclick(null,"hash");else if(t=e.Ot>=49?e.$('[id="'.concat(n.replace(/-/g,""),'" i]')):n.includes("-")&&e.$("#"+n.replace(/-[a-z]/gi,function(n){return n[1].toUpperCase()}))||e.$("#"+n)){if(t.dataset.model&&(t="input"===t.localName&&"checked"===t.type?t.parentElement:t).classList.add("highlight"),o=function(n){n&&n.target!==window||(window.onload&&(window.onload=null,Element.prototype.scrollBy?scrollTo({behavior:"instant",top:0,left:0}):scrollTo(0,0)),d(t))},"complete"===document.readyState)return o();window.scrollTo(0,0),window.onload=o}},window.onhashchange=function(){t.wn(location.hash)},d=function(n,t,i){var o,u=-1;e.Ot<61?n.scrollIntoViewIfNeeded(true):n.scrollIntoView({block:t?"nearest":"center",behavior:"smooth"}),o=setInterval(function(){var t=scrollY;t===u&&(clearInterval(o),i&&i(n),n.focus()),u=t},72)},i.u.N().then(s),e.O(7).then(function(n){e.V(o.Mt,n)}),e.O(12).then(function(n){"?"!==n&&e.V(function(n){n[0].textContent=n[1]},[e.$("#questionShortcut"),n])}),i.h("#openExtensionsPage","click",function(n){e.Kt(n),e.O(15,{u:n.target.href,p:true})}),i.h(document,"click",function n(){var t=VApi,i=t&&t.y();i&&i.r&&(document.removeEventListener("click",n,true),i.r.addEventListener("click",function(n){var t,e=n.target;VApi&&e.classList.contains("HelpCommandName")&&(t=e.textContent.slice(1,-1),VApi.p({H:18,s:t}))},true),document.addEventListener("click",function(n){var t,i,o,u;"a"!==n.target.localName||!n.ctrlKey&&!n.metaKey||e.Mn<-1||(o=(i=(t=VApi)&&t.b)&&i.$())&&o.a&&o.k&&null===o.k.c&&(u=-17&o.m)<32&&2&u&&!(1&u)&&setTimeout(function(){e.Mn>=0&&(e.sn.tabs?e.sn.tabs.update(e.Mn,{active:true},function(){}):e.O(25,{module:"tabs",name:"update",args:[e.Mn,{active:true}]}))},0)}))},true),i.h("#testKeyInputBox","focus",function n(t){var o,u,c,r=t.currentTarget,a=e.$("#testKeyInput"),f=function(n,t){var e,i=void 0!==n?a.textContent=n:a.textContent;return n&&0!==t&&document.activeElement===a&&getSelection().setBaseAndExtent(e=a.firstChild,n.length,e,n.length),i},s=0,l=false;a.onkeydown=function(n){var t,i,c,r,d,p;l&&(l=false,a.classList.remove("outline")),229!==n.keyCode&&"Process"!==n.key?VApi&&!e.Hn(n)&&(t={c:" ",e:n,i:n.keyCode,v:""},c="esc"===(i=VApi.r[3](t,11))||"c-["===i,r=4&VApi.z.l?VApi.r[3](t,10):i,d=i.length>1?"<".concat(i,">"):i||"(empty)",p=r===i?"":r.length>1?"<".concat(r,">"):r||"(empty)",o=n,u=VApi.z.l,f(p?"".concat(d," / ").concat(p):d),"enter"===i||"tab"===i||"s-tab"===i||c||"f12"===i)?("enter"===i||c)&&a.blur():(s=n.keyCode,e.Kt(n)):f("")},a.onkeyup=function(n){n.keyCode===s&&e.Kt(n)},a.onfocus=function(){VApi&&(a.classList.add("outline"),l=true,VApi.f(7,Object.setPrototypeOf({i:true,r:0,k:"v-esc:test",p:true,h:a.previousElementSibling.textContent},null),1,0))},a.onblur=function(){VApi&&VApi.f(16,Object.setPrototypeOf({type:"keydown",key:"Esc",esc:true},null),1,0)},a.addEventListener("compositionend",function(){f("")}),a.onpaste=e.Kt,a.onclick=function(){a.focus()},(c=e.$("#testKeyInInput")).onchange=function(){c.checked?a.contentEditable="true":a.removeAttribute("contenteditable"),a.focus()},r.removeEventListener("focus",n,true),r.addEventListener("blur",function(n){var t=l?n.relatedTarget:null;(t?!r.contains(t):l)&&(l=false,a.classList.remove("outline"))},true),i.r.rt=function(){o&&u!==VApi.z.l&&a.onkeydown(o)}},true)});