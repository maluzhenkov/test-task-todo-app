(function(t){function e(e){for(var r,o,a=e[0],l=e[1],c=e[2],u=0,p=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("div",{staticClass:"app container"},[i("div",{staticClass:"app__toolbar"},[i("NewItem",{on:{addItem:t.addItem}}),i("Description",{attrs:{text:t.description,date:t.date}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length,expression:"items.length"}],staticClass:"app__search"},[i("Search",{attrs:{value:t.search,placeholder:"Fiend our item"},on:{search:function(e){t.search=e}}})],1),i("div",{staticClass:"app__content"},[t.items.length&&!t.itemsFiltred.length?i("div",{staticClass:"app__content_text"},[t._v("Nothing found")]):t._e(),t.items.length?i("items",{attrs:{items:t.itemsFiltred},on:{select:t.selectItem,removeItem:t.removeItem}}):i("div",{staticClass:"app__content_text"},[t._v("The list is empty, add item")])],1),i("div",{staticClass:"app__footer"},[t._v("Footer 50px")])])])},n=[],o=(i("386d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition-group",{staticClass:"items-list",attrs:{tag:"ul",name:"fade",appear:""}},t._l(t.items,(function(e,s){return r("li",{key:s,staticClass:"items-list__item",attrs:{tabindex:"0"},on:{click:function(e){return t.selectItem(s)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(s)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.removedItem(s)}]}},[r("span",[t._v(t._s(e.title))]),r("button",{staticClass:"btn btn_remove",attrs:{type:"button",tabindex:"-1"},on:{click:function(e){return e.stopPropagation(),t.removedItem(s)}}},[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":i("8a78")+"#delete"}})])])])})),0)}),a=[],l={props:{items:{type:Array,required:!0}},methods:{selectItem:function(t){this.$emit("select",t)},removedItem:function(t){var e=this;new Promise((function(t,e){setTimeout((function(){console.log("Preparing data... 1 sec"),t()}),1e3)})).then((function(){e.$emit("removeItem",t)})).catch((function(){return console.error("Server request error")}))}}},c=l,d=i("2877"),u=Object(d["a"])(c,o,a,!1,null,null,null),p=u.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"app__item-add form",on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[r("div",{staticClass:"form__group"},[r("div",{staticClass:"form__label_group"},[r("label",{staticClass:"form__label"},[t._v("Title")]),!t.$v.title.required&&t.$v.title.$dirty?r("small",{staticClass:"error"},[t._v("Field is required")]):t._e()]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.title.$model,expression:"$v.title.$model",modifiers:{trim:!0}}],staticClass:"form__field",attrs:{type:"text"},domProps:{value:t.$v.title.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.title,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form__group flex-grow"},[r("div",{staticClass:"form__label_group"},[r("label",{staticClass:"form__label"},[t._v("Description")]),!t.$v.description.required&&t.$v.description.$dirty?r("small",{staticClass:"error"},[t._v("Field is required")]):t._e()]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.description.$model,expression:"$v.description.$model",modifiers:{trim:!0}}],staticClass:"form__field textarea",attrs:{rows:"3"},domProps:{value:t.$v.description.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.description,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("button",{staticClass:"btn btn_success btn_size_wide",class:{disabled:t.loading||t.$v.$dirty&&t.$v.$invalid},attrs:{type:"submit",disabled:t.loading||t.$v.$dirty&&t.$v.$invalid}},[t.loading?r("span",{staticClass:"spinner"}):r("span",[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":i("8a78")+"#plus"}})]),t._v("Add\n    ")])])])},f=[],v=i("b5ae"),h={data:function(){return{title:"",description:"",loading:!1}},validations:{title:{required:v["required"]},description:{required:v["required"]}},methods:{addItem:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)return!1;this.loading=!0;var e={title:this.title,description:this.description};new Promise((function(t){setTimeout((function(){console.log("Preparing data... 2 sec"),t()}),2e3)})).then((function(){t.$emit("addItem",e)})).finally((function(){t.loading=!1})),this.$v.$reset(),this.title="",this.description=""}}},_=h,g=Object(d["a"])(_,m,f,!1,null,null,null),I=g.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app__item-description description",attrs:{tabindex:"0"}},[i("div",{staticClass:"description__text"},[t._v(t._s(t.text))]),i("div",{staticClass:"description__date"},[t._v(t._s(t.date))])])},$=[],y={props:{text:{type:String,required:!0},date:{type:String,required:!1}}},D=y,w=Object(d["a"])(D,b,$,!1,null,null,null),C=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"icon icon__search"},[r("svg",{staticClass:"icon"},[r("use",{attrs:{"xlink:href":i("8a78")+"#magnifying-glass"}})])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form__field",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])},S=[],O={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(t){this.$emit("search",t)}}},k=O,P=Object(d["a"])(k,x,S,!1,null,null,null),j=P.exports,q={components:{NewItem:I,Items:p,Description:C,Search:j},data:function(){return{description:"Select item to view the description",date:"",search:"",nowDate:new Date(Date.now()).toLocaleString(),items:[{title:"Item 1",description:"Description for Item 1",date:this.nowDate},{title:"Long description",description:"Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2 Description for Item 2",date:this.nowDate},{title:"Item 3",description:"Description for Item 3",date:this.nowDate},{title:"Item 4",description:"Description for Item 4",date:this.nowDate},{title:"Item 5",description:"Description for Item 5",date:this.nowDate}]}},computed:{itemsFiltred:function(){var t=this.items,e=this.search;return e?(e=e.trim().toLowerCase(),t=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(e))return t})),t):t}},methods:{addItem:function(t){t.date=new Date(Date.now()).toLocaleString(),this.items.unshift(t);var e=localStorage.getItem("ListItems");if(e){var i=JSON.parse(e);i.unshift(t),localStorage.setItem("ListItems",JSON.stringify(i))}else localStorage.setItem("ListItems",JSON.stringify([t]))},selectItem:function(t){this.description=this.items[t].description,this.date=this.items[t].date},removeItem:function(t){this.items.splice(t,1),localStorage.setItem("ListItems",JSON.stringify(this.items))}},created:function(){var t=localStorage.getItem("ListItems");if(t){var e=JSON.parse(t);this.items=e}else localStorage.setItem("ListItems",JSON.stringify(this.items))}},N=q,L=Object(d["a"])(N,s,n,!1,null,null,null),J=L.exports,F=(i("a41b"),i("1dce")),T=i.n(F);r["a"].use(T.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(J)}}).$mount("#app")},"8a78":function(t,e,i){t.exports=i.p+"img/sprite.4ea81e29.svg"},a41b:function(t,e,i){}});
//# sourceMappingURL=app.d543a8f6.js.map