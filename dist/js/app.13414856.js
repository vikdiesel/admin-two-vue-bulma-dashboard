(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function i(e){return o.p+"js/"+({forms:"forms",profile:"profile",tables:"tables"}[e]||e)+"."+{forms:"cae32269",profile:"552b45d1",tables:"73e73d24"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e),r=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1e1d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title"},[e._t("default")],2)])]),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[e._t("button")],2)])])])},s=[],r={name:"TitleBar"},i=r,o=a("2877"),c=Object(o["a"])(i,n,s,!1,null,null,null);t["a"]=c.exports},"226e":function(e,t,a){e.exports=a.p+"img/justboil-logo.7298fabb.svg"},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d"),a("b107"),a("5363");var n=a("2b0e"),s=a("289d"),r=a("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("title-bar",[e._v("\n    Welcome, "+e._s(e.userName)+"!\n    "),a("a",{staticClass:"button is-primary",attrs:{slot:"button",href:"https://admin-two.justboil.me"},slot:"button"},[e._v("\n      Switch to Premium demo\n    ")])]),a("tiles",[a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-primary",icon:"account-multiple",number:512,label:"Clients"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-info",icon:"cart-outline",number:7770,prefix:"$",label:"Sales"}}),a("card-widget",{staticClass:"tile is-child",attrs:{type:"is-success",icon:"chart-timeline-variant",number:256,suffix:"%",label:"Performance"}})],1),a("card-component",{attrs:{title:"Performance",icon:"finance","header-icon":"reload"},on:{"header-icon-click":e.fillChartData}},[e.defaultChart.chartData?a("div",{staticClass:"chart-area"},[a("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":e.defaultChart.chartData,"extra-options":e.defaultChart.extraOptions}})],1):e._e()]),a("card-component",{staticClass:"has-table",attrs:{title:"Clients"}},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json"}})],1)],1)},o=[],c=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),l=a("2f62");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(c["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},b={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},m=d({},b,{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),p=a("6df7"),h=a("9e7c"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",[a("div",{staticClass:"level"},[e.icon?a("div",{staticClass:"level-item has-widget-icon"},[a("div",{staticClass:"is-widget-icon"},[a("b-icon",{attrs:{icon:e.icon,size:"is-large",type:e.type}})],1)]):e._e(),a("div",{staticClass:"level-item"},[a("div",{staticClass:"is-widget-label"},[a("h3",{staticClass:"subtitle is-spaced"},[e._v("\n          "+e._s(e.label)+"\n        ")]),a("h1",{staticClass:"title"},[a("growing-number",{attrs:{value:e.number,prefix:e.prefix,suffix:e.suffix}})],1)])])])])},g=[],j=(a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n  "+e._s(e.prefix)+e._s(e.newValueFormatted)+e._s(e.suffix)+"\n")])}),y=[],w=a("6612"),C=a.n(w),O={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0,step:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:C()(this.newValue).format("0,0")}},mounted:function(){this.growInit()},methods:{growInit:function(){var e=this.value/(this.duration/25);this.grow(e)},grow:function(e){var t=this,a=Math.ceil(this.newValue+e);if(a>this.value)return this.newValue=this.value,!1;this.newValue=a,setTimeout(function(){t.grow(e)},25)}},watch:{value:function(){this.growInit()}}},k=O,_=a("2877"),x=Object(_["a"])(k,j,y,!1,null,null,null),P=x.exports,D={name:"CardWidget",components:{GrowingNumber:P,CardComponent:p["a"]},props:{icon:{type:String,default:null},number:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},A=D,B=Object(_["a"])(A,v,g,!1,null,null,null),M=B.exports,S=a("1fca"),E={name:"line-chart",extends:S["a"],mixins:[S["b"].reactiveProp],props:{extraOptions:Object},data:function(){return{ctx:null}},mounted:function(){var e=this;this.$watch("chartData",function(t,a){a||e.renderChart(e.chartData,e.extraOptions)},{immediate:!0})}},z=a("7080"),N=a("1e1d");function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach(function(t){Object(c["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L={name:"home",components:{TitleBar:N["a"],ClientsTableSample:z["a"],CardWidget:M,Tiles:h["a"],CardComponent:p["a"],LineChart:E},data:function(){return{defaultChart:{chartData:null,extraOptions:m}}},computed:T({},Object(l["b"])(["userName"])),mounted:function(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{randomChartData:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.round(200*Math.random()));return t},fillChartData:function(){this.defaultChart.chartData={datasets:[{fill:!1,borderColor:f.default.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:f.default.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:f.default.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:f.default.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:f.default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:f.default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:f.default.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:f.default.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:f.default.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)}],labels:["01","02","03","04","05","06","07","08","09"]}}}},V=L,I=Object(_["a"])(V,i,o,!1,null,null,null),F=I.exports;n["a"].use(r["a"]);var H=new r["a"]({base:"/",routes:[{path:"/",name:"home",component:F},{path:"/tables",name:"tables",component:function(){return a.e("tables").then(a.bind(null,"8840d"))}},{path:"/forms",name:"forms",component:function(){return a.e("forms").then(a.bind(null,"0894"))}},{path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}}],scrollBehavior:function(e,t,a){return a||{x:0,y:0}}});a("7f7f");n["a"].use(l["a"]);var W=new l["a"].Store({state:{userName:null,userEmail:null,userAvatar:null,isNavBarVisible:!0,isFooterBarVisible:!0,isAsideVisible:!0,isAsideMobileExpanded:!1},mutations:{basic:function(e,t){e[t.key]=t.value},user:function(e,t){t.name&&(e.userName=t.name),t.email&&(e.userEmail=t.email),t.avatar&&(e.userAvatar=t.avatar)},asideMobileStateToggle:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n="has-aside-mobile-expanded";t=null!==a?a:!e.isAsideMobileExpanded,t?document.documentElement.classList.add(n):document.documentElement.classList.remove(n),e.isAsideMobileExpanded=t}},actions:{}}),R=a("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("aside-menu",{attrs:{menu:e.menu}}),a("router-view"),a("footer-bar")],1)},J=[],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggleMobile(t)}}},[a("b-icon",{attrs:{icon:e.menuToggleMobileIcon}})],1)]),a("div",{staticClass:"navbar-brand is-right"},[a("div",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop"},[a("a",{on:{click:function(t){return t.preventDefault(),e.menuNavBarToggle(t)}}},[a("b-icon",{attrs:{icon:e.menuNavBarToggleIcon,"custom-size":"default"}})],1)])]),a("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuNavBarActive}},[a("div",{staticClass:"navbar-end"},[a("nav-bar-menu",{staticClass:"has-divider"},[a("b-icon",{attrs:{icon:"menu","custom-size":"default"}}),a("span",[e._v("Sample Menu")]),a("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"account","custom-size":"default"}}),a("span",[e._v("My Profile")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"settings","custom-size":"default"}}),a("span",[e._v("Settings")])],1),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"email","custom-size":"default"}}),a("span",[e._v("Messages")])],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log Out")])],1)])],1),a("a",{staticClass:"navbar-item",attrs:{href:"https://justboil.me/bulma-admin-template/two",title:"About"}},[a("b-icon",{attrs:{icon:"help-circle","custom-size":"default"}}),a("span",[e._v("About")])],1),a("a",{staticClass:"navbar-item",attrs:{title:"Log out"},on:{click:e.logout}},[a("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),a("span",[e._v("Log out")])],1)],1)])])},G=[],K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive}},[a("a",{staticClass:"navbar-link is-arrowless",on:{click:e.toggle}},[e._t("default"),a("b-icon",{attrs:{icon:e.toggleDropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},Q=[],X={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data:function(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon:function(){return this.isDropdownActive?"chevron-up":"chevron-down"}},created:function(){window.addEventListener("click",this.forceClose)},beforeDestroy:function(){window.removeEventListener("click",this.forceClose)},methods:{toggle:function(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose:function(e){this.$el.contains(e.target)||(this.isDropdownActive=!1)}}},Y=X,Z=Object(_["a"])(Y,K,Q,!1,null,null,null),ee=Z.exports;function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach(function(t){Object(c["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ne={name:"NavBar",components:{NavBarMenu:ee},data:function(){return{isMenuNavBarActive:!1}},computed:ae({menuNavBarToggleIcon:function(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon:function(){return this.isAsideMobileExpanded?"backburger":"forwardburger"}},Object(l["b"])(["isNavBarVisible","isAsideMobileExpanded"])),methods:{menuToggleMobile:function(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle:function(){this.isMenuNavBarActive=!this.isMenuNavBarActive},logout:function(){this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},se=ne,re=Object(_["a"])(se,U,G,!1,null,null,null),ie=re.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left is-expanded"},[e._m(0),a("div",{staticClass:"menu is-menu-main"},[a("aside-menu-list",{attrs:{menu:e.menu},on:{"menu-click":e.menuClick}})],1)])},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image"},[n("a",{attrs:{href:"https://justboil.me"}},[n("img",{attrs:{src:a("f92b")}})])])}];function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach(function(t){Object(c["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var de={name:"AsideMenu",props:{menu:{type:Array,default:function(){return[]}}},computed:ue({},Object(l["b"])(["isAsideVisible"])),methods:{menuClick:function(e){}}},fe=de,be=Object(_["a"])(fe,oe,ce,!1,null,null,null),me=be.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[e._v("\n          "+e._s(e.year)+", JustBoil.me\n        ")])]),e._m(0)])])])},he=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("div",{staticClass:"logo"},[n("a",{attrs:{href:"https://justboil.me"}},[n("img",{attrs:{src:a("226e"),alt:"JustBoil.me"}})])])])])}],ve=a("c1df"),ge=a.n(ve);function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach(function(t){Object(c["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var we={name:"FooterBar",computed:ye({year:function(){return ge()().year()}},Object(l["b"])(["isFooterBarVisible"]))},Ce=we,Oe=Object(_["a"])(Ce,pe,he,!1,null,null,null),ke=Oe.exports,_e={components:{FooterBar:ke,AsideMenu:me,NavBar:ie},computed:{menu:function(){return[{to:"/",icon:"desktop-mac",label:"Dashboard"},{to:"/tables",label:"Tables",icon:"table",updateMark:!0},{to:"/forms",label:"Forms",icon:"square-edit-outline"},{to:"/profile",label:"Profile",icon:"account-circle"},{href:"https://admin-two.justboil.me",label:"Premium version",icon:"credit-card"},{href:"https://justboil.me/bulma-admin-template/two",label:"About",icon:"help-circle"},{label:"Submenus",subLabel:"Submenus Example",icon:"view-list",menu:[{href:"#void",label:"Sub-item One"},{href:"#void",label:"Sub-item Two"}]}]}},created:function(){this.$store.commit("user",{name:"John Doe",email:"john@example.com",avatar:"/data-sources/avatars/annie-spratt-121576-unsplash.jpg"})}},xe=_e,Pe=Object(_["a"])(xe,q,J,!1,null,null,null),De=Pe.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,function(t,n){return a("aside-menu-item",{key:n,attrs:{item:t},on:{"menu-click":e.menuClick}})}),1)},Be=[],Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{"is-active":e.isDropdownActive}},[a(e.componentIs,{tag:"component",class:{"has-icon":!!e.item.icon},attrs:{to:e.itemTo,href:e.itemHref,"exact-active-class":"is-active"},on:{click:e.menuClick}},[e.item.icon?a("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?a("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(e._s(e.item.label))]):e._e()],1),e.hasDropdown?a("aside-menu-list",{attrs:{menu:e.item.menu,isSubmenuList:!0}}):e._e()],1)},Se=[],Ee={name:"AsideMenuItem",data:function(){return{isDropdownActive:!1}},props:{item:{type:Object,default:null}},methods:{menuClick:function(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive)}},computed:{componentIs:function(){return this.item.to?"router-link":"a"},hasDropdown:function(){return!!this.item.menu},itemTo:function(){return this.item.to?this.item.to:null},itemHref:function(){return this.item.href?this.item.href:null}}},ze=Ee,Ne=Object(_["a"])(ze,Me,Se,!1,null,null,null),$e=Ne.exports,Te={name:"AsideMenuList",components:{AsideMenuItem:$e},props:{isSubmenuList:{type:Boolean,default:!1},menu:{type:Array,default:function(){return[]}}},methods:{menuClick:function(e){this.$emit("menu-click",e)}}},Le=Te,Ve=Object(_["a"])(Le,Ae,Be,!1,null,null,null),Ie=Ve.exports;H.afterEach(function(){W.commit("asideMobileStateToggle",!1)}),n["a"].config.productionTip=!1,n["a"].component("AsideMenuList",Ie),n["a"].use(s["a"]),new n["a"]({router:H,store:W,render:function(e){return e(De)}}).$mount("#app")},"6df7":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[e.title?a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[e.icon?a("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v("\n      "+e._s(e.title)+"\n    ")],1),e.headerIcon?a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[a("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()]):e._e(),a("div",{staticClass:"card-content"},[e._t("default")],2)])},s=[],r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},i=r,o=a("2877"),c=Object(o["a"])(i,n,s,!1,null,null,null);t["a"]=c.exports},7080:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("modal-box",{attrs:{"is-active":e.isModalActive,"trash-object-name":e.trashObjectName},on:{confirm:e.trashConfirm,cancel:e.trashCancel}}),a("b-table",{attrs:{checkable:e.checkable,loading:e.isLoading,paginated:e.paginated,"per-page":e.perPage,striped:!0,hoverable:!0,"default-sort":"name",data:e.clients},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{staticClass:"has-no-head-mobile is-image-cell"},[a("div",{staticClass:"image"},[a("img",{staticClass:"is-rounded",attrs:{src:t.row.file}})])]),a("b-table-column",{attrs:{label:"Name",field:"name",sortable:""}},[e._v("\n        "+e._s(t.row.name)+"\n      ")]),a("b-table-column",{attrs:{label:"Company",field:"company",sortable:""}},[e._v("\n        "+e._s(t.row.company)+"\n      ")]),a("b-table-column",{attrs:{label:"City",field:"city",sortable:""}},[e._v("\n        "+e._s(t.row.city)+"\n      ")]),a("b-table-column",{staticClass:"is-progress-col",attrs:{label:"Progress",field:"progress",sortable:""}},[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.row.progress}},[e._v(e._s(t.row.progress))])]),a("b-table-column",{attrs:{label:"Created"}},[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:t.row.created}},[e._v(e._s(t.row.created))])]),a("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"}},[a("div",{staticClass:"buttons is-right"},[a("button",{staticClass:"button is-small is-primary",attrs:{type:"button"}},[a("b-icon",{attrs:{icon:"eye","custom-size":"default"}})],1),a("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),e.trashModal(t.row)}}},[a("b-icon",{attrs:{icon:"trash-can","custom-size":"default"}})],1)])])]}}])},[a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[a("p",[a("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),a("p",[e._v("Fetching data...")])]:[a("p",[a("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),a("p",[e._v("Nothing's there…")])]],2)])])],1)},s=[],r=(a("7f7f"),a("bc3a")),i=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{active:e.isModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isModalActive=t}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[e._v("This will permanently delete "),a("b",[e._v(e._s(e.trashObjectName))])]),a("p",[e._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:e.confirm}},[e._v("Delete")])])])])},c=[],l={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(e){this.isModalActive=e},isModalActive:function(e){e||this.cancel()}}},u=l,d=a("2877"),f=Object(d["a"])(u,o,c,!1,null,null,null),b=f.exports,m={name:"ClientsTableSample",components:{ModalBox:b},props:{dataUrl:{type:String,default:null},checkable:{type:Boolean,default:!1}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},mounted:function(){var e=this;this.dataUrl&&(this.isLoading=!0,i.a.get(this.dataUrl).then(function(t){e.isLoading=!1,t.data&&t.data.data&&(t.data.data.length>e.perPage&&(e.paginated=!0),e.clients=t.data.data)}).catch(function(t){e.isLoading=!1,e.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger"})}))},methods:{trashModal:function(e){this.trashObject=e,this.isModalActive=!0},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1}}},p=m,h=Object(d["a"])(p,n,s,!1,null,null,null);t["a"]=h.exports},"9e7c":function(e,t,a){"use strict";a("c5f6");var n,s,r=a("91c8"),i=a.n(r),o={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},render:function(e){var t=this;return this.$slots.default.length<=this.maxPerRow?this.renderAncestor(e,this.$slots.default):e("div",{attrs:{class:"is-tiles-wrapper"}},i()(this.$slots.default,this.maxPerRow).map(function(a){return t.renderAncestor(e,a)}))},methods:{renderAncestor:function(e,t){return e("div",{attrs:{class:"tile is-ancestor"}},t.map(function(t){return e("div",{attrs:{class:"tile is-parent"}},[t])}))}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);t["a"]=u.exports},b107:function(e,t,a){},f92b:function(e,t,a){e.exports=a.p+"img/jblogo-icon.9ed33b87.png"}});
//# sourceMappingURL=app.13414856.js.map