(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f375af0a"],{"06c6":function(e,t,a){},"159b":function(e,t,a){var n=a("da84"),r=a("fdbc"),i=a("785a"),c=a("17c2"),s=a("9112"),u=function(e){if(e&&e.forEach!==c)try{s(e,"forEach",c)}catch(t){e.forEach=c}};for(var o in r)r[o]&&u(n[o]&&n[o].prototype);u(i)},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,r=a("a640"),i=r("forEach");e.exports=i?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},1960:function(e,t,a){"use strict";var n=a("7a23"),r=function(e){return Object(n["w"])("data-v-d1abaa1e"),e=e(),Object(n["u"])(),e},i={id:"account-form"},c=r((function(){return Object(n["g"])("div",{class:"brand-icon"},null,-1)})),s={class:"input-table"},u=["value"],o={key:0,class:"reminder"},d=Object(n["h"])(" Do not have an account? Please "),p=["href"],l=Object(n["h"])(" here. "),f={key:1,class:"reminder"},b=Object(n["h"])(" Already have an account? Please "),h=["href"],m=Object(n["h"])(" here. ");function g(e,t,a,r,g,j){var O=Object(n["B"])("FormInput");return Object(n["t"])(),Object(n["f"])("div",i,[c,Object(n["g"])("div",s,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e.fieldsSettings,(function(a){return Object(n["t"])(),Object(n["d"])(O,{key:a.inputName,setting:a,initialValue:e.formData[a.inputName],displayType:e.formInputDisplayType,onInput:t[0]||(t[0]=function(t){return e.updateValue(t)})},null,8,["setting","initialValue","displayType"])})),128))]),Object(n["L"])(Object(n["g"])("div",{class:Object(n["o"])(["message-showed",[e.messageType]])},Object(n["D"])(e.messageShowed),3),[[n["I"],""!==e.messageShowed]]),Object(n["g"])("input",{type:"button",value:e.buttonName,onClick:t[1]||(t[1]=function(t){return e.$emit("clickSubmitButton")})},null,8,u),"Login"===e.pageName?(Object(n["t"])(),Object(n["f"])("div",o,[d,Object(n["g"])("a",{href:"".concat(e.publicPath,"register")},"Sign up",8,p),l])):"Register"===e.pageName?(Object(n["t"])(),Object(n["f"])("div",f,[b,Object(n["g"])("a",{href:"".concat(e.publicPath,"login")},"Sign in",8,h),m])):Object(n["e"])("",!0)])}var j=a("4af8"),O=Object(n["j"])({props:{fieldsSettings:{type:Array,required:!0},formData:{type:Object,required:!0},pageName:{type:String,required:!0},buttonName:{type:String,required:!0},messageShowed:{type:String,required:!0},messageType:{type:String,required:!0}},components:{FormInput:j["a"]},emits:["input","clickSubmitButton"],data:function(){return{publicPath:"/my_online_shop/",formInputDisplayType:"table"}},methods:{updateValue:function(e){this.$emit("input",{inputName:e.inputName,value:e.value})}}}),w=(a("f5d0"),a("6b0d")),y=a.n(w);const v=y()(O,[["render",g],["__scopeId","data-v-d1abaa1e"]]);t["a"]=v},"4af8":function(e,t,a){"use strict";var n=a("7a23"),r=function(e){return Object(n["w"])("data-v-4ad31a6f"),e=e(),Object(n["u"])(),e},i=["for"],c={class:"required-mark"},s=["type","name","required","pattern","placeholder","disabled","value","size"],u=r((function(){return Object(n["g"])("span",{class:"alter-mark"},null,-1)}));function o(e,t,a,r,o,d){return Object(n["t"])(),Object(n["f"])("label",{for:e.setting.inputName,class:Object(n["o"])([e.displayType])},[Object(n["g"])("span",null,Object(n["D"])(e.setting.nameDisplayed),1),Object(n["g"])("span",c,Object(n["D"])(e.setting.required?"*":""),1),Object(n["g"])("input",{type:e.setting.type,name:e.setting.inputName,required:e.setting.required,pattern:e.setting.pattern,placeholder:e.setting.placeholder,class:Object(n["o"])({"should-alert":e.setting.shouldAlert}),disabled:e.setting.disabled,onInput:t[0]||(t[0]=function(t){return e.updateValue(t,e.setting.inputName)}),onChange:t[1]||(t[1]=function(t){return e.updateValue(t,e.setting.inputName)}),value:e.initialValue,size:e.inputSize},null,42,s),u],10,i)}var d=Object(n["j"])({props:{setting:{type:Object,required:!0},initialValue:{type:String,required:!0},displayType:{type:String,required:!0}},emits:["input"],computed:{inputSize:function(){if(-1!==this.$route.path.indexOf("/checkout")){if("address"===this.setting.inputName)return 55;if("tel"===this.setting.type)return 15;if("email"===this.setting.type)return 30}return 20}},methods:{updateValue:function(e,t){this.$emit("input",{inputName:t,value:e.currentTarget.value})}}}),p=(a("5391"),a("6b0d")),l=a.n(p);const f=l()(d,[["render",o],["__scopeId","data-v-4ad31a6f"]]);t["a"]=f},5391:function(e,t,a){"use strict";a("06c6")},"9a3b":function(e,t,a){},ac13:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={id:"change-password-page"};function i(e,t,a,i,c,s){var u=Object(n["B"])("CurrentPathBar"),o=Object(n["B"])("AccountForm");return Object(n["t"])(),Object(n["f"])("div",r,[Object(n["i"])(u,{parentPageList:e.fullPathList},null,8,["parentPageList"]),Object(n["i"])(o,{fieldsSettings:e.fieldsSettings,formData:e.formData,pageName:e.pageName,buttonName:"Confirm",messageShowed:e.messageShowed,messageType:"warning",onInput:t[0]||(t[0]=function(t){return e.formData[t.inputName]=t.value}),onClickSubmitButton:e.submit},null,8,["fieldsSettings","formData","pageName","messageShowed","onClickSubmitButton"])])}var c=a("1da1"),s=(a("96cf"),a("99af"),a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("ac1f"),a("5319"),a("159b"),a("4de4"),a("0613")),u=a("e22b"),o=a("1960"),d=Object(n["j"])({name:"ChangePasswordPage",store:s["a"],components:{CurrentPathBar:u["a"],AccountForm:o["a"]},data:function(){return{parentPageList:[{name:"Home",path:""},{name:"Account Center",path:"account-center"}],fieldsSettings:[{inputName:"current_password",nameDisplayed:"Current Password",type:"password",required:!0,pattern:"[A-Za-z0-9]+",placeholder:" ",shouldAlert:!1,disabled:!1},{inputName:"new_password",nameDisplayed:"New Password",type:"password",required:!0,pattern:"[a-z0-9A-Z]{8,}",placeholder:" ",shouldAlert:!1,disabled:!1},{inputName:"new_password_check",nameDisplayed:"Password Check",type:"password",required:!0,pattern:"[A-Za-z0-9]+",placeholder:" ",shouldAlert:!1,disabled:!1}],formData:{current_password:"",new_password:"",new_password_check:""},pageName:"Change Password",messageShowed:""}},computed:{fullPathList:function(){return this.parentPageList.concat([{name:"Password",path:"./#"}])}},methods:{submit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in a=new URLSearchParams,e.formData)a.append(n,e.formData[n]);return t.next=4,fetch("".concat(s["a"].state.backendApiUrl,"/change-password"),{method:"post",body:a,credentials:"include"}).then((function(e){return e.json()}));case 4:r=t.sent["status"],"succeeded"===r?e.$router.replace("/account-center"):(e.messageShowed=r,"wrong password"===r?(e.formData.current_password="",e.fieldsSettings.filter((function(e){return"current_password"===e.inputName})).forEach((function(e){return e.shouldAlert=!0}))):"password too simple"===r?e.fieldsSettings.filter((function(e){return"new_password"===e.inputName})).forEach((function(e){return e.shouldAlert=!0})):"check your password"===r&&e.fieldsSettings.filter((function(e){return"new_password_check"===e.inputName})).forEach((function(e){return e.shouldAlert=!0})));case 6:case"end":return t.stop()}}),t)})))()}}}),p=a("6b0d"),l=a.n(p);const f=l()(d,[["render",i]]);t["default"]=f},cb53:function(e,t,a){"use strict";a("dc44")},dc44:function(e,t,a){},e22b:function(e,t,a){"use strict";a("b0c0");var n=a("7a23"),r={id:"current-path-bar"},i=["href"],c={key:0,class:"slash"};function s(e,t,a,s,u,o){return Object(n["t"])(),Object(n["f"])("div",r,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(e.parentPageList,(function(t){return Object(n["t"])(),Object(n["f"])("div",{class:"part-of-path",key:t.name},[Object(n["g"])("a",{class:"path-name",href:e.getCorrectPath(t.path)},Object(n["D"])(t.name),9,i),t.name!==e.parentPageList[e.parentPageList.length-1].name?(Object(n["t"])(),Object(n["f"])("span",c," / ")):Object(n["e"])("",!0)])})),128))])}a("99af");var u=Object(n["j"])({props:{parentPageList:{type:Array,required:!0}},data:function(){return{publicPath:"/my_online_shop/"}},methods:{getCorrectPath:function(e){if(-1!==e.indexOf("./")){var t=window.location.pathname;return"/"!==t[t.length-1]?"".concat(t,"/").concat(e):e}return"".concat(this.publicPath).concat(e)}}}),o=(a("cb53"),a("6b0d")),d=a.n(o);const p=d()(u,[["render",s],["__scopeId","data-v-d4343ff4"]]);t["a"]=p},f5d0:function(e,t,a){"use strict";a("9a3b")}}]);
//# sourceMappingURL=chunk-f375af0a.85902c19.js.map