(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{MA1D:function(t,a,s){"use strict";s("jCJr")},cs3z:function(t,a,s){"use strict";s.r(a);var e={components:{Spinner:()=>s.e(1).then(s.bind(null,"I3XD"))},data(){return{data_email:"",result:this.$response,interval:null,location:"",recaptchaSitekey:"6LfWlZskAAAAAPuytuz58Dw_43zPSqKvbN7pFpkP",gscript:"AKfycbwO6k6h2HQ1j63x3TGw4JIa6rv-hp8sQWN-ah-mjPKb0j2KEJZd7jCtrJZVDjBZ_X-k"}},methods:{onSubmit(){this.interval=setInterval(()=>{this.result=this.$response,console.log(this.$response)},1e3),"success"!==this.$response&&"error"!==this.$response||clearInterval(this.interval)}},watch:{result:function(t,a){"success"!==t&&"error"!==t||clearInterval(this.interval)}},mounted(){this.location="https://robonomics.cloud"+this.$route.path}},i=(s("MA1D"),s("KHd+")),n=Object(i.a)(e,(function(){var t=this,a=t._self._c;return a("gsp-form",{staticClass:"contacts__form",attrs:{gscriptID:t.gscript,captchaID:t.recaptchaSitekey}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data_email,expression:"data_email"}],staticClass:"contacts__input",class:{sent:"success"===t.result},attrs:{required:"",name:"email",type:"email",placeholder:"Your email","data-gsp-name":"Email","data-gsp-data":t.data_email?t.data_email:"-",disabled:"success"===t.result},domProps:{value:t.data_email},on:{input:function(a){a.target.composing||(t.data_email=a.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{type:"hidden",placeholder:"Location","data-gsp-name":"Location","data-gsp-data":t.location},domProps:{value:t.location},on:{input:function(a){a.target.composing||(t.location=a.target.value)}}}),a("div",{staticClass:"google-sheets-form__actions"},["success"!==t.result?a("button",{staticClass:"button large",attrs:{disabled:"error"===t.result||"wait"===t.result},on:{click:t.onSubmit}},["wait"!==t.result?a("span",[t._v("Want emails from robonomics")]):a("span",{staticClass:"isLoading"},[t._v("Adding you to our special list...")]),a("span",{staticClass:"spinner"},["wait"===t.result?a("Spinner"):t._e()],1)]):a("button",{staticClass:"button button-success",attrs:{disabled:""}},[t._v("Nice, you are in the list")]),"error"===t.result?a("div",{staticClass:"error"},[t._v("Something went  wrong :( Try again later")]):t._e()])])}),[],!1,null,"48c9ffcc",null);a.default=n.exports},jCJr:function(t,a,s){}}]);