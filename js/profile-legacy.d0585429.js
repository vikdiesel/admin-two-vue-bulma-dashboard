(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"3b73":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?a("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},r=[],o={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("title-bar",[t._v(" Profile "),a("router-link",{staticClass:"button is-primary",attrs:{slot:"button",to:"/"},slot:"button"},[t._v(" Dashboard ")])],1),a("tiles",[a("profile-update-form",{staticClass:"tile is-child"}),a("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[a("div",{staticClass:"image is-user-avatar has-max-width is-aligned-center"},[a("img",{attrs:{src:t.userAvatar,alt:t.userName}})]),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),a("password-update-form")],1)},r=[],o=a("5530"),i=a("2f62"),n=a("6df7"),l=a("1e1d"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Avatar"}},[a("file-picker")],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[a("b-input",{attrs:{name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[a("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},c=[],m=(a("b0c0"),a("3b73")),d={name:"ProfileUpdateForm",components:{CardComponent:n["a"],FilePicker:m["a"]},data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:Object(o["a"])({},Object(i["b"])(["userName","userEmail"])),mounted:function(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$store.commit("user",t.form),t.$buefy.snackbar.open({message:"Updated",queue:!1})}),500)}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}},p=d,f=a("2877"),b=Object(f["a"])(p,u,c,!1,null,null,null),h=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{attrs:{title:"Change Password",icon:"lock"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[a("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[a("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[a("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v(" Submit ")])])])],1)])},v=[],_={name:"PasswordUpdateForm",components:{CardComponent:n["a"]},data:function(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Updated",queue:!1},500)}))}}},g=_,C=Object(f["a"])(g,w,v,!1,null,null,null),k=C.exports,y=a("9e7c"),P={name:"Profile",components:{Tiles:y["a"],PasswordUpdateForm:k,ProfileUpdateForm:h,TitleBar:l["a"],CardComponent:n["a"]},computed:Object(o["a"])({},Object(i["b"])(["userAvatar","userName","userEmail"]))},E=P,$=Object(f["a"])(E,s,r,!1,null,null,null);e["default"]=$.exports}}]);
//# sourceMappingURL=profile-legacy.d0585429.js.map