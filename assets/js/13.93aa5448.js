(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{aYB9:function(t,e,s){},lGOr:function(t,e,s){"use strict";s("aYB9")},nFff:function(t,e,s){"use strict";s.r(e);var n={props:{question:{type:String,default:""},options:{type:Array}}},i=(s("lGOr"),s("KHd+")),a=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport.once",modifiers:{once:!0}}],staticClass:"survey__item grid grid-2 animate-inside-slide in-viewport"},[e("h3",[t._v(" "+t._s(t.question)+" ")]),e("div",{staticClass:"survey__wrapper"},t._l(t.options,(function(s,n){return e("button",{key:s.mainText,class:"survey__btn survey__btn--"+n,attrs:{"data-value":s.value},on:{click:function(e){return t.$emit("nextQuestion",s.value)}}},[e("span",{staticClass:"survey__mainText"},[t._v(t._s(s.mainText))]),s.subText?e("span",{staticClass:"survey__subText"},[t._v(t._s(s.subText))]):t._e()])})),0)])}),[],!1,null,"1e6960f2",null);e.default=a.exports}}]);