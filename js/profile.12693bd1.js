"use strict";(self["webpackChunkadmin_two_vue_bulma_dashboard"]=self["webpackChunkadmin_two_vue_bulma_dashboard"]||[]).push([[845],{9263:function(e,t,a){a.d(t,{Z:function(){return u}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-field",{staticClass:"file"},[a("b-upload",{attrs:{accept:e.accept},on:{input:e.upload},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[a("a",{staticClass:"button is-primary"},[a("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),a("span",[e._v(e._s(e.buttonLabel))])],1)]),e.file?a("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e()],1)},r=[],i={name:"FilePicker",props:{accept:{type:String,default:null}},data(){return{file:null,uploadPercent:0}},computed:{buttonLabel(){return this.file?"Pick another file":"Pick a file"}},methods:{upload(e){this.$emit("input",e)},progressEvent(e){this.uploadPercent=Math.round(100*e.loaded/e.total)}}},o=i,l=a(1001),n=(0,l.Z)(o,s,r,!1,null,null,null),u=n.exports},1451:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("title-bar",[e._v(" Profile "),a("router-link",{staticClass:"button is-primary",attrs:{slot:"button",to:"/"},slot:"button"},[e._v(" Dashboard ")])],1),a("tiles",[a("profile-update-form",{staticClass:"tile is-child"}),a("card-component",{staticClass:"tile is-child",attrs:{title:"Profile",icon:"account"}},[a("div",{staticClass:"image is-user-avatar has-max-width is-aligned-center"},[a("img",{attrs:{src:e.userAvatar,alt:e.userName}})]),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:e.userName,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"E-mail"}},[a("b-input",{attrs:{value:e.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1),a("password-update-form")],1)},r=[],i=a(629),o=a(5307),l=a(4885),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Avatar"}},[a("file-picker")],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[a("b-input",{attrs:{name:"name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[a("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"submit"}},[e._v(" Submit ")])])])],1)])},u=[],m=a(9263),d={name:"ProfileUpdateForm",components:{CardComponent:o.Z,FilePicker:m.Z},data(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:{...(0,i.rn)(["userName","userEmail"])},watch:{userName(e){this.form.name=e},userEmail(e){this.form.email=e}},mounted(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$store.commit("user",this.form),this.$buefy.snackbar.open({message:"Updated",queue:!1})}),500)}}},c=d,p=a(1001),f=(0,p.Z)(c,n,u,!1,null,null,null),b=f.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card-component",{attrs:{title:"Change Password",icon:"lock"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[a("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:e.form.password_current,callback:function(t){e.$set(e.form,"password_current",t)},expression:"form.password_current"}})],1),a("hr"),a("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[a("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[a("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},attrs:{type:"submit"}},[e._v(" Submit ")])])])],1)])},w=[],_={name:"PasswordUpdateForm",components:{CardComponent:o.Z},data(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit(){this.isLoading=!0,setTimeout((()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Updated",queue:!1},500)}))}}},v=_,g=(0,p.Z)(v,h,w,!1,null,null,null),C=g.exports,k=a(2736),y={name:"Profile",components:{Tiles:k.Z,PasswordUpdateForm:C,ProfileUpdateForm:b,TitleBar:l.Z,CardComponent:o.Z},computed:{...(0,i.rn)(["userAvatar","userName","userEmail"])}},P=y,E=(0,p.Z)(P,s,r,!1,null,null,null),$=E.exports}}]);
//# sourceMappingURL=profile.12693bd1.js.map