(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},200:function(e,t,n){"use strict";n.r(t);n(153);var r=n(199),o={mounted:function(){var e;(e=this.subjects).push.apply(e,[this.generateSubject("Math","red"),this.generateSubject("English","indigo"),this.generateSubject("Science","yellow"),this.generateSubject("Social Studies","blue")])},data:function(){return{subjects:[],version:r.a}},methods:{push:function(e){var t=e.assignments;t.push({name:e.entry,id:new Date}),e.assignments=t,e.entry=""},deleteItem:function(e,i){var t=e.assignments;t.splice(i,1),e.assignments=t},generateSubject:function(e,t){return{name:e,id:e.toLowerCase(),color:t,get assignments(){return JSON.parse(localStorage.getItem(e.toLowerCase())||"[]")},set assignments(t){localStorage.setItem(e.toLowerCase(),JSON.stringify(t))}}},parseColor:function(e){switch(e){case"red":return"bg-red-400 text-white";case"indigo":return"bg-indigo-400 text-white";case"blue":return"bg-blue-400 text-white";case"yellow":return"bg-yellow-400 text-white";default:return"bg-red-400 text-white"}}}},l=n(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("h1",{staticClass:"font-serif font-bold text-4xl p-1"},[e._v("E-jenda "),n("span",{staticClass:"text-base"},[e._v("v"+e._s(e.version))])]),e._v(" "),e._l(e.subjects,(function(t){return n("ul",{key:t.name,staticClass:"-bg-opacity-50 w-full p-6",class:e.parseColor(t.color)},[n("h1",{staticClass:"font-serif font-bold text-4xl"},[e._v(e._s(t.name))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.assignments.length>0,expression:"!subject.assignments.length > 0"}],staticClass:"py-2 italic"},[e._v("\n      Nothing yet, add a new assignment\n    ")]),e._v(" "),e._l(t.assignments,(function(r,i){return n("li",{key:""+r.id,staticClass:"\n        bg-opacity-75\n        font-serif\n        rounded-sm\n        bg-white\n        text-gray-800\n        my-2\n        p-1\n        flex\n        justify-between\n      "},[n("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"assignment.name"}],staticClass:"bg-transparent flex-auto",domProps:{value:r.name},on:{input:function(t){t.target.composing||e.$set(r,"name",t.target.value)}}}),e._v(" "),n("button",{staticClass:"px-2 py-1 m-1 bg-white rounded-md",on:{click:function(n){return e.deleteItem(t,i)}}},[e._v("\n        Delete\n      ")])])})),e._v(" "),n("button",{staticClass:"rounded-l-sm bg-white text-gray-800 p-2",on:{click:function(n){return e.push(t)}}},[e._v("\n      +")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"subject.entry"}],staticClass:"text-gray-800 rounded-r-sm p-2",attrs:{placeholder:"Add a new assignment"},domProps:{value:t.entry},on:{input:function(n){n.target.composing||e.$set(t,"entry",n.target.value)}}})],2)}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);