(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{15:function(t,e,a){"use strict";a.d(e,"i",function(){return n}),a.d(e,"m",function(){return c}),a.d(e,"j",function(){return o}),a.d(e,"h",function(){return i}),a.d(e,"g",function(){return l}),a.d(e,"k",function(){return s}),a.d(e,"l",function(){return u}),a.d(e,"n",function(){return d}),a.d(e,"o",function(){return p}),a.d(e,"c",function(){return f}),a.d(e,"b",function(){return b}),a.d(e,"e",function(){return v}),a.d(e,"f",function(){return _}),a.d(e,"d",function(){return g}),a.d(e,"a",function(){return m});var r=a(1);function n(){return Object(r.a)("GET","languages")}function c(t,e){return Object(r.a)("GET","ranklist",{page:t,perpage:e})}function o(t,e){return Object(r.a)("GET","news",{page:t,perpage:e})}function i(t,e,a){return Object(r.a)("GET","problem/".concat(t,"/issues"),{page:e,perpage:a})}function l(t,e,a){return Object(r.a)("GET","/issue/".concat(t),{page:e,perpage:a})}function s(t){return Object(r.a)("GET","problem/".concat(t))}function u(t,e,a,n,c){return Object(r.a)("GET","problems",{page:t,perpage:e,param:a,level:n,tag_id:c})}function d(t){return Object(r.a)("GET","solution/".concat(t))}function p(t,e,a,n,c,o,i){return Object(r.a)("GET","solutions",{page:t,perpage:e,param:a,username:n,language:c,result:o,contest_id:i})}function f(t,e,a){return Object(r.a)("GET","contests",{page:t,perpage:e,param:a})}function b(t){return Object(r.a)("GET","contest/".concat(t))}function v(t){return Object(r.a)("GET","contest/".concat(t,"/ranklist"))}function _(t){return Object(r.a)("GET","contest/".concat(t,"/teamranklist"))}function g(t,e){return Object(r.a)("GET","contest/".concat(t,"/problem/").concat(e))}function m(){return Object(r.a)("GET","alltags")}},172:function(t,e,a){var r=a(268),n=a(116),c=a(91),o=a(115),i=a(55),l=a(173),s=Object.getOwnPropertyDescriptor;e.f=a(31)?s:function(t,e){if(t=c(t),e=o(e,!0),l)try{return s(t,e)}catch(t){}if(i(t,e))return n(!r.f.call(t,e),t[e])}},268:function(t,e){e.f={}.propertyIsEnumerable},269:function(t,e,a){var r=a(34),n=a(307).set;t.exports=function(t,e,a){var c,o=e.constructor;return o!==a&&"function"==typeof o&&(c=o.prototype)!==a.prototype&&r(c)&&n&&n(t,c),t}},270:function(t,e,a){var r=a(54),n=a(46),c=a(44),o=a(271),i="["+o+"]",l=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t,e,a){var n={},i=c(function(){return!!o[t]()||"​"!="​"[t]()}),l=n[t]=i?e(d):o[t];a&&(n[a]=l),r(r.P+r.F*i,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(s,"")),t};t.exports=u},271:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},285:function(t,e,a){var r=a(626);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(14)(r,n);r.locals&&(t.exports=r.locals)},307:function(t,e,a){var r=a(34),n=a(26),c=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=a(68)(Function.call,a(172).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,a){return c(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:c}},308:function(t,e,a){var r=a(174),n=a(117).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,n)}},625:function(t,e,a){"use strict";var r=a(285);a.n(r).a},626:function(t,e,a){(t.exports=a(13)(!1)).push([t.i,".red[data-v-7ccde51a]{color:red}.green[data-v-7ccde51a]{color:green}.blue[data-v-7ccde51a]{color:blue}.black[data-v-7ccde51a]{color:#000}.white[data-v-7ccde51a]{color:#fff}.yellow[data-v-7ccde51a]{color:#ff0}.gold[data-v-7ccde51a]{color:gold}.purple[data-v-7ccde51a]{color:purple}.cyan[data-v-7ccde51a]{color:cyan}.orange[data-v-7ccde51a]{color:orange}.orangered[data-v-7ccde51a]{color:#ff4500}.pink[data-v-7ccde51a]{color:pink}.violet[data-v-7ccde51a]{color:violet}.yellowgreen[data-v-7ccde51a]{color:#9acd32}.tomato[data-v-7ccde51a]{color:tomato}.tan[data-v-7ccde51a]{color:tan}.snow[data-v-7ccde51a]{color:snow}.gray[data-v-7ccde51a]{color:gray}.silver[data-v-7ccde51a]{color:silver}.skyblue[data-v-7ccde51a]{color:skyblue}.navy[data-v-7ccde51a]{color:navy}.brown[data-v-7ccde51a]{color:brown}.beige[data-v-7ccde51a]{color:beige}.magenta[data-v-7ccde51a]{color:#f0f}.c0[data-v-7ccde51a]{color:#000}.c1[data-v-7ccde51a]{color:#111}.c2[data-v-7ccde51a]{color:#222}.c3[data-v-7ccde51a]{color:#333}.c4[data-v-7ccde51a]{color:#444}.c5[data-v-7ccde51a]{color:#555}.c6[data-v-7ccde51a]{color:#666}.c7[data-v-7ccde51a]{color:#777}.c8[data-v-7ccde51a]{color:#888}.c9[data-v-7ccde51a]{color:#999}.c10[data-v-7ccde51a]{color:#aaa}.c11[data-v-7ccde51a]{color:#bbb}.c12[data-v-7ccde51a]{color:#ccc}.c13[data-v-7ccde51a]{color:#ddd}.c14[data-v-7ccde51a]{color:#eee}.c15[data-v-7ccde51a]{color:#fff}.porange[data-v-7ccde51a]{color:#fc9}.pgold[data-v-7ccde51a]{color:#ffc}.pazure[data-v-7ccde51a]{color:#cff}.pdgreen[data-v-7ccde51a]{color:#9cc}.ppurple[data-v-7ccde51a]{color:#ccf}.pblue[data-v-7ccde51a]{color:#09c}.plblue[data-v-7ccde51a]{color:#9cf}.pdblue[data-v-7ccde51a]{color:#369}.pgreen[data-v-7ccde51a]{color:#9c3}.problemset__main[data-v-7ccde51a]{background:#fff;margin-right:250px}.problemset__main svg[data-v-7ccde51a]{padding-left:10px;width:14px;vertical-align:0px;height:14px}.problemset__siderbar[data-v-7ccde51a]{text-align:left;min-height:600px;width:240px;background:#fff;box-sizing:border-box;padding:0.1rem}.problemset__siderbar ul.problemset__siderbar__list[data-v-7ccde51a]{font-size:20px}.problemset__siderbar ul.problemset__siderbar__list>li[data-v-7ccde51a]{padding:0.1rem 0}.problemset__siderbar ul.problemset__siderbar__list>li[data-v-7ccde51a]:not(:last-child){border-bottom:1px solid #ddd}.problemset__siderbar ul.problemset__siderbar__list>li[data-v-7ccde51a]:first-child{padding-top:0}.problemset__siderbar ul.button-list[data-v-7ccde51a]{display:flex;justify-content:flex-start;align-content:flex-start;flex-wrap:wrap}.problemset__siderbar ul.button-list li[data-v-7ccde51a]{flex:0 1 auto}\n",""])},690:function(t,e,a){"use strict";a.r(e);a(10),a(7),a(85),a(11);var r=a(15);function n(t,e,a,r,n,c,o){try{var i=t[c](o),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(r,n)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(r,c){var o=t.apply(e,a);function i(t){n(o,r,c,i,l,"next",t)}function l(t){n(o,r,c,i,l,"throw",t)}i(void 0)})}}var o={name:"",data:function(){return{loading:!1,currentPage:1,perpage:20,queryParam:"",tableData:[],total:0,level:-1,tagId:-1,tags:[]}},mounted:function(){var t=c(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.tagId=this.$store.getters.tagId,this.fetchProblemList(),t.next=5,Object(r.a)();case 5:e=t.sent,this.tags=e.data.tags;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{fetchProblemList:function(){var t=c(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,window.pageYOffset=0,document.documentElement.scrollTop=0,document.body.scrollTop=0,e.loading=!0,t.prev=5,t.next=8,Object(r.l)(e.currentPage,e.perpage,e.queryParam,e.level,e.tagId);case 8:a=t.sent,n=a.data,setTimeout(function(){e.tableData=n.data,e.total=n.total,e.loading=!1},200),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5);case 16:this.$store.dispatch("resetTag");case 17:case"end":return t.stop()}},t,this,[[5,13]])}));return function(){return t.apply(this,arguments)}}(),handleSearchByResetConf:function(){this.loading=!0,this.level=-1,this.tagId=-1,this.queryParam="",this.fetchProblemList()},handleSearchByParam:function(){this.loading=!0,this.fetchProblemList()},handleSearchByLevel:function(t){this.loading=!0,this.level=t,this.fetchProblemList()},handleSearchByTag:function(t){this.loading=!0,this.tagId=t,this.fetchProblemList()},calcRate:function(t){var e=0==t.submit?0:t.accepted/t.submit;return Number(100*e).toFixed(2)+"%"}},activated:function(){-1!=this.$store.getters.tagId&&(this.tagId=this.$store.getters.tagId,this.fetchProblemList()),this.$store.dispatch("resetTag")}},i=(a(625),a(2)),l=Object(i.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"content__main"},[a("div",{staticClass:"problemset__siderbar fr"},[a("ul",{staticClass:"problemset__siderbar__list"},[a("li",[a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini",round:""},on:{click:function(e){return t.handleSearchByResetConf(0)}}},[t._v("重置")])],1),a("li",[a("p",[t._v("查找问题：")]),a("div",{staticClass:"siderbar__searchbar__wrapper"},[a("el-input",{staticStyle:{"max-width":"20em"},attrs:{placeholder:"请输入问题名或ID",maxlength:"20",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearchByParam(e)}},model:{value:t.queryParam,callback:function(e){t.queryParam=e},expression:"queryParam"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleSearchByParam},slot:"append"})],1)],1),a("div",{staticClass:"tags__wrapper"})]),a("li",[a("p",[t._v("按难度检索：")]),a("ul",{staticClass:"button-list"},[a("li",[a("el-button",{class:["tag__button",-1==t.level?"tag__button__active":""],attrs:{size:"mini",round:""},on:{click:function(e){return t.handleSearchByLevel(-1)}}},[t._v("全部")])],1),a("li",[a("el-button",{class:["tag__button",0==t.level?"tag__button__active":""],attrs:{size:"mini",round:""},on:{click:function(e){return t.handleSearchByLevel(0)}}},[t._v("简单")])],1),a("li",[a("el-button",{class:["tag__button",1==t.level?"tag__button__active":""],attrs:{size:"mini",round:""},on:{click:function(e){return t.handleSearchByLevel(1)}}},[t._v("中等")])],1),a("li",[a("el-button",{class:["tag__button",2==t.level?"tag__button__active":""],attrs:{size:"mini",round:""},on:{click:function(e){return t.handleSearchByLevel(2)}}},[t._v("困难")])],1)])]),a("li",[a("p",[t._v("按标签检索：")]),a("ul",{staticClass:"button-list"},[a("li",[a("el-button",{class:["tag__button",-1==t.tagId?"tag__button__active":""],attrs:{size:"mini",round:""},on:{click:function(e){return t.handleSearchByTag(-1)}}},[t._v("全部")])],1),t._l(t.tags,function(e){return[a("li",[a("el-button",{class:["tag__button",t.tagId==e.id?"tag__button__active":""],attrs:{size:"mini",round:""},on:{click:function(a){return t.handleSearchByTag(e.id)}}},[t._v(t._s(e.name))])],1)]})],2)])])]),a("div",{staticClass:"problemset__main"},[a("h1",{staticClass:"content__panel__title"},[t._v("问题列表")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("svg-icon",{attrs:{name:"ok"}}):2==e.row.status?a("svg-icon",{attrs:{name:"wrong"}}):t._e()]}}])}),a("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"标题","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{name:"problem",params:{id:e.row.id}}}},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{label:"难度","min-width":"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.level?a("el-button",{staticClass:"text-button text-button--success",attrs:{size:"mini"}},[t._v("简单")]):t._e(),1==e.row.level?a("el-button",{staticClass:"text-button text-button--warning",attrs:{size:"mini"}},[t._v("中等")]):t._e(),2==e.row.level?a("el-button",{staticClass:"text-button text-button--danger",attrs:{size:"mini"}},[t._v("困难")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"标签","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,function(e){return a("el-button",{key:e.id,staticClass:"text-button text-button--success",attrs:{size:"mini"}},[t._v(t._s(e.name))])})}}])}),a("el-table-column",{attrs:{label:"通过率","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.calcRate(e.row)))]}}])}),a("el-table-column",{attrs:{label:"通过",prop:"accepted","min-width":"60"}}),a("el-table-column",{attrs:{label:"提交",prop:"submit","min-width":"60"}})],1),a("el-pagination",{staticClass:"tal",attrs:{"current-page":t.currentPage,background:"","page-size":t.perpage,layout:"prev, pager, next,jumper",total:t.total},on:{"current-change":t.fetchProblemList,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])])},[],!1,null,"7ccde51a",null);e.default=l.exports},85:function(t,e,a){"use strict";var r=a(21),n=a(55),c=a(67),o=a(269),i=a(115),l=a(44),s=a(308).f,u=a(172).f,d=a(45).f,p=a(270).trim,f=r.Number,b=f,v=f.prototype,_="Number"==c(a(166)(v)),g="trim"in String.prototype,m=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){var a,r,n,c=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var o,l=e.slice(2),s=0,u=l.length;s<u;s++)if((o=l.charCodeAt(s))<48||o>n)return NaN;return parseInt(l,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(_?l(function(){v.valueOf.call(a)}):"Number"!=c(a))?o(new b(m(e)),a,f):m(e)};for(var h,y=a(31)?s(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)n(b,h=y[w])&&!n(f,h)&&d(f,h,u(b,h));f.prototype=v,v.constructor=f,a(37)(r,"Number",f)}}}]);