(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables"],{8840:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("title-bar",[t._v(" Tables "),a("router-link",{staticClass:"button is-primary",attrs:{slot:"button",to:"/"},slot:"button"},[t._v(" Dashboard ")])],1),a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table. ")],1)]),a("card-component",{staticClass:"has-table",attrs:{title:"Clients",icon:"account-multiple"}},[a("clients-table-sample",{attrs:{"data-url":t.$router.options.base+"data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Tightly wrapped")]),t._v(" — table header becomes a card header ")],1)]),a("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[a("clients-table-sample",{attrs:{"data-url":t.$router.options.base+"data-sources/clients.json",checkable:!0}})],1),a("hr"),a("notification",{staticClass:"is-primary"},[a("div",[a("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),a("b",[t._v("Empty table.")]),t._v(" When there's nothing to show ")],1)]),a("card-component",{staticClass:"has-table"},[a("clients-table-sample")],1)],1)},i=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},n=[],o={name:"Notification",data(){return{isDismissed:!1}},methods:{dismiss(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},c=o,r=a("2877"),u=Object(r["a"])(c,l,n,!1,null,null,null),b=u.exports,d=a("7080"),m=a("6df7"),p=a("1e1d"),f={name:"Tables",components:{TitleBar:p["a"],CardComponent:m["a"],ClientsTableSample:d["a"],Notification:b}},h=f,v=Object(r["a"])(h,e,i,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=tables.0cb15493.js.map