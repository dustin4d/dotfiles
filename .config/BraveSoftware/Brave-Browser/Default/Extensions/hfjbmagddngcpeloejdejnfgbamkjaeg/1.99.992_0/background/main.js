"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],function(n,o,e,t,i,u,r,s,c){
var a;Object.defineProperty(o,"__esModule",{value:true}),a=function(n){var o,t=e.a.get(e.hn)
;"quickNext"===n&&(n="nextTab"),
o=s.ia,6!==e.re||(o&&o.get(n)?null==t||4&t.d||e.hn<0?c.executeShortcut(n,t):i.tabsGet(e.hn,function(o){
return c.executeShortcut(n,o&&"complete"===o.status?e.a.get(o.id):null),i.m()}):(o&&null!==o.get(n)&&(o.set(n,null),
console.log("Shortcut %o has not been configured.",n)),
t&&(e.O=t.c),r.showHUD('Shortcut "'.concat(n,'" has not been configured.'))))},e.io=function(){if(6===e.re){
if(e.io)return t.uo(u.st.then.bind(u.st,e.io)),void(e.io=null);e.$u||(u._t("keyMappings"),0===e.G&&(s.Uu["m-s-c"]=36)),
u._t("exclusionListenHash"),u._t("vomnibarOptions"),u._t("autoDarkMode"),u._t("autoReduceMotion"),
i.t.runtime.onConnect.addListener(function(n){return r.OnConnect(n,0|n.name)
}),i.t.runtime.onConnectExternal.addListener(function(n){var o,t=n.sender,i=n.name
;if(t&&r.isExtIdAllowed(t)&&i.startsWith("vimium-c.")&&(o=i.split("@")).length>1){
if(o[1]!==e.Q.GitVer)return n.postMessage({N:2,t:1}),void n.disconnect();r.OnConnect(n,1024|o[0].slice(9))
}else n.disconnect()}),i.t.extension.isAllowedIncognitoAccess(function(o){e.Q.wn=false===o,setTimeout(function(){
new Promise(function(o,e){n(["/background/others.js"],o,e)}).then(n=>n),setTimeout(function(){new Promise(function(o,e){
n(["/background/browsing_data_manager.js"],o,e)}).then(n=>n),new Promise(function(o,e){
n(["/background/completion_utils.js"],o,e)}).then(n=>n),new Promise(function(o,e){n(["/background/completion.js"],o,e)
}).then(n=>n)},200)},200)})}},i.t.commands.onCommand.addListener(a),u.st.then(function(){u._t("extAllowList"),
i.t.runtime.onMessageExternal.addListener(function(n,o,t){var i;if(r.isExtIdAllowed(o)){
if("string"==typeof n)c.executeExternalCmd({command:n},o);else if("object"==typeof n&&n)switch(n.handler){
case"shortcut":(i=n.shortcut)&&a(i+"");break;case"id":return void t({name:"Vimium C",host:location.host,shortcuts:true,
injector:e.Q.so,version:e.Q.pa});case 99:return void t({s:n.scripts?e.Q.ee:null,version:e.Q.pa,host:"",h:"@"+e.Q.GitVer
});case"command":c.executeExternalCmd(n,o)}}else t(false)}),u._t("vomnibarPage",null),u._t("searchUrl",null)}),
i.gn.onReplaced.addListener(function(n,o){var t,i=e.a.get(o);if(e.co===o&&(e.co=n),i){for(t of(e.a.delete(o),
e.a.set(n,i),i.W))t.s.b=n;for(t of(i.c.s.b=n,e.zn))t.s.b===o&&(t.s.b=n)}}),e.vt.Sr=function(n,o,t){
setTimeout(function(){e.vt.Sr(n,o,t)},210)},e.re=4|e.re,e.io(),window.onunload=function(){
for(var n of e.zn)n.disconnect();e.a.forEach(function(n){for(var o of n.W)o.disconnect()})},
e.kn<59||!t.nr("\\p{L}","u",0)?t.Fu("words.txt").then(function(n){
e.Ru=n.replace(/[\n\r]/g,"").replace(/\\u(\w{4})/g,function(n,o){return String.fromCharCode(+("0x"+o))})}):e.Ru=""});