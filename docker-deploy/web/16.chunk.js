(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{15:function(t,e,n){"use strict";n.d(e,"i",function(){return r}),n.d(e,"m",function(){return o}),n.d(e,"j",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"g",function(){return i}),n.d(e,"k",function(){return u}),n.d(e,"l",function(){return d}),n.d(e,"n",function(){return s}),n.d(e,"o",function(){return f}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return p}),n.d(e,"e",function(){return g}),n.d(e,"f",function(){return m}),n.d(e,"d",function(){return b}),n.d(e,"a",function(){return h});var a=n(1);function r(){return Object(a.a)("GET","languages")}function o(t,e){return Object(a.a)("GET","ranklist",{page:t,perpage:e})}function c(t,e){return Object(a.a)("GET","news",{page:t,perpage:e})}function l(t,e,n){return Object(a.a)("GET","problem/".concat(t,"/issues"),{page:e,perpage:n})}function i(t,e,n){return Object(a.a)("GET","/issue/".concat(t),{page:e,perpage:n})}function u(t){return Object(a.a)("GET","problem/".concat(t))}function d(t,e,n,r,o){return Object(a.a)("GET","problems",{page:t,perpage:e,param:n,level:r,tag_id:o})}function s(t){return Object(a.a)("GET","solution/".concat(t))}function f(t,e,n,r,o,c,l){return Object(a.a)("GET","solutions",{page:t,perpage:e,param:n,username:r,language:o,result:c,contest_id:l})}function v(t,e,n){return Object(a.a)("GET","contests",{page:t,perpage:e,param:n})}function p(t){return Object(a.a)("GET","contest/".concat(t))}function g(t){return Object(a.a)("GET","contest/".concat(t,"/ranklist"))}function m(t){return Object(a.a)("GET","contest/".concat(t,"/teamranklist"))}function b(t,e){return Object(a.a)("GET","contest/".concat(t,"/problem/").concat(e))}function h(){return Object(a.a)("GET","alltags")}},163:function(t,e,n){"use strict";var a,r,o=n(171),c=RegExp.prototype.exec,l=String.prototype.replace,i=c,u=(a=/a/,r=/b*/g,c.call(a,"a"),c.call(r,"a"),0!==a.lastIndex||0!==r.lastIndex),d=void 0!==/()??/.exec("")[1];(u||d)&&(i=function(t){var e,n,a,r,i=this;return d&&(n=new RegExp("^"+i.source+"$(?!\\s)",o.call(i))),u&&(e=i.lastIndex),a=c.call(i,t),u&&a&&(i.lastIndex=i.global?a.index+a[0].length:e),d&&a&&a.length>1&&l.call(a[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)}),a}),t.exports=i},171:function(t,e,n){"use strict";var a=n(26);t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},264:function(t,e,n){var a=n(70),r=n(46);t.exports=function(t){return function(e,n){var o,c,l=String(r(e)),i=a(n),u=l.length;return i<0||i>=u?t?"":void 0:(o=l.charCodeAt(i))<55296||o>56319||i+1===u||(c=l.charCodeAt(i+1))<56320||c>57343?t?l.charAt(i):o:t?l.slice(i,i+2):c-56320+(o-55296<<10)+65536}}},265:function(t,e,n){"use strict";var a=n(264)(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},266:function(t,e,n){"use strict";var a=n(90),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},267:function(t,e,n){"use strict";n(306);var a=n(37),r=n(47),o=n(44),c=n(46),l=n(19),i=n(163),u=l("species"),d=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),s=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=l(t),v=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),p=v?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e}):void 0;if(!v||!p||"replace"===t&&!d||"split"===t&&!s){var g=/./[f],m=n(c,f,""[t],function(t,e,n,a,r){return e.exec===i?v&&!r?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),b=m[0],h=m[1];a(String.prototype,t,b),r(RegExp.prototype,f,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}}},289:function(t,e,n){var a=n(634);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(14)(a,r);a.locals&&(t.exports=a.locals)},306:function(t,e,n){"use strict";var a=n(163);n(54)({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},31:function(t,e,n){"use strict";var a=n(26),r=n(164),o=n(86),c=n(70),l=n(265),i=n(266),u=Math.max,d=Math.min,s=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(267)("replace",2,function(t,e,n,p){return[function(a,r){var o=t(this),c=null==a?void 0:a[e];return void 0!==c?c.call(a,o,r):n.call(String(o),a,r)},function(t,e){var r=p(n,t,this,e);if(r.done)return r.value;var s=a(t),f=String(this),v="function"==typeof e;v||(e=String(e));var m=s.global;if(m){var b=s.unicode;s.lastIndex=0}for(var h=[];;){var w=i(s,f);if(null===w)break;if(h.push(w),!m)break;""===String(w[0])&&(s.lastIndex=l(f,o(s.lastIndex),b))}for(var x,_="",y=0,k=0;k<h.length;k++){w=h[k];for(var S=String(w[0]),E=u(d(c(w.index),f.length),0),O=[],T=1;T<w.length;T++)O.push(void 0===(x=w[T])?x:String(x));var C=w.groups;if(v){var I=[S].concat(O,E,f);void 0!==C&&I.push(C);var j=String(e.apply(void 0,I))}else j=g(S,f,E,O,C,e);E>=y&&(_+=f.slice(y,E)+j,y=E+S.length)}return _+f.slice(y)}];function g(t,e,a,o,c,l){var i=a+t.length,u=o.length,d=v;return void 0!==c&&(c=r(c),d=f),n.call(l,d,function(n,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(i);case"<":l=c[r.slice(1,-1)];break;default:var d=+r;if(0===d)return n;if(d>u){var f=s(d/10);return 0===f?n:f<=u?void 0===o[f-1]?r.charAt(1):o[f-1]+r.charAt(1):n}l=o[d-1]}return void 0===l?"":l})}})},563:function(t,e,n){"use strict";n(580);var a=n(26),r=n(171),o=n(32),c=/./.toString,l=function(t){n(37)(RegExp.prototype,"toString",t,!0)};n(44)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?l(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=c.name&&l(function(){return c.call(this)})},564:function(t,e,n){var a=Date.prototype,r=a.toString,o=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(37)(a,"toString",function(){var t=o.call(this);return t==t?r.call(this):"Invalid Date"})},580:function(t,e,n){n(32)&&"g"!=/./g.flags&&n(45).f(RegExp.prototype,"flags",{configurable:!0,get:n(171)})},633:function(t,e,n){"use strict";var a=n(289);n.n(a).a},634:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".red[data-v-1dd8a484]{color:red}.green[data-v-1dd8a484]{color:green}.blue[data-v-1dd8a484]{color:blue}.black[data-v-1dd8a484]{color:#000}.white[data-v-1dd8a484]{color:#fff}.yellow[data-v-1dd8a484]{color:#ff0}.gold[data-v-1dd8a484]{color:gold}.purple[data-v-1dd8a484]{color:purple}.cyan[data-v-1dd8a484]{color:cyan}.orange[data-v-1dd8a484]{color:orange}.orangered[data-v-1dd8a484]{color:#ff4500}.pink[data-v-1dd8a484]{color:pink}.violet[data-v-1dd8a484]{color:violet}.yellowgreen[data-v-1dd8a484]{color:#9acd32}.tomato[data-v-1dd8a484]{color:tomato}.tan[data-v-1dd8a484]{color:tan}.snow[data-v-1dd8a484]{color:snow}.gray[data-v-1dd8a484]{color:gray}.silver[data-v-1dd8a484]{color:silver}.skyblue[data-v-1dd8a484]{color:skyblue}.navy[data-v-1dd8a484]{color:navy}.brown[data-v-1dd8a484]{color:brown}.beige[data-v-1dd8a484]{color:beige}.magenta[data-v-1dd8a484]{color:#f0f}.c0[data-v-1dd8a484]{color:#000}.c1[data-v-1dd8a484]{color:#111}.c2[data-v-1dd8a484]{color:#222}.c3[data-v-1dd8a484]{color:#333}.c4[data-v-1dd8a484]{color:#444}.c5[data-v-1dd8a484]{color:#555}.c6[data-v-1dd8a484]{color:#666}.c7[data-v-1dd8a484]{color:#777}.c8[data-v-1dd8a484]{color:#888}.c9[data-v-1dd8a484]{color:#999}.c10[data-v-1dd8a484]{color:#aaa}.c11[data-v-1dd8a484]{color:#bbb}.c12[data-v-1dd8a484]{color:#ccc}.c13[data-v-1dd8a484]{color:#ddd}.c14[data-v-1dd8a484]{color:#eee}.c15[data-v-1dd8a484]{color:#fff}.porange[data-v-1dd8a484]{color:#fc9}.pgold[data-v-1dd8a484]{color:#ffc}.pazure[data-v-1dd8a484]{color:#cff}.pdgreen[data-v-1dd8a484]{color:#9cc}.ppurple[data-v-1dd8a484]{color:#ccf}.pblue[data-v-1dd8a484]{color:#09c}.plblue[data-v-1dd8a484]{color:#9cf}.pdblue[data-v-1dd8a484]{color:#369}.pgreen[data-v-1dd8a484]{color:#9c3}.contest-ranklist__wrapper[data-v-1dd8a484]{background:#fff}.contest-ranklist__wrapper .link[data-v-1dd8a484]{padding:0 0.1rem}\n",""])},694:function(t,e,n){"use strict";n.r(e);n(10),n(563),n(564),n(7),n(31),n(11);var a=n(15);function r(t,e,n,a,r,o,c){try{var l=t[o](c),i=l.value}catch(t){return void n(t)}l.done?e(i):Promise.resolve(i).then(a,r)}var o={name:"",data:function(){return{problemColumnIOffset:5,tableData:[],contest:null,timer:0,seeable:!1,reason:""}},mounted:function(){var t=this;this.fetctContestRankList(),this.timer=setInterval(function(){t.fetctContestRankList()},6e4)},methods:{fetctContestRankList:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).loading=!0,t.prev=2,t.next=5,Object(a.e)(e.$route.params.id);case 5:n=t.sent,r=n.data,e.tableData=r.ranklist,e.seeable=r.seeable,e.reason=r.reason,e.contest=r.contest,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),e.$router.replace({name:"404Page"});case 18:case"end":return t.stop()}},t,this,[[2,14]])}),function(){var e=this,n=arguments;return new Promise(function(a,o){var c=t.apply(e,n);function l(t){r(c,a,o,l,i,"next",t)}function i(t){r(c,a,o,l,i,"throw",t)}l(void 0)})});return function(){return e.apply(this,arguments)}}(),handleSizeChange:function(t){this.fetchNewList()},calcProblemStatus:function(t,e){var n="";return t.ac_time[e-1]>0&&(n+=this.secToTimeStr(t.ac_time[e-1])),t.wa_count[e-1]>0&&(n+="(-".concat(t.wa_count[e-1],")")),n},cellStyle:function(t){var e=t.row,n=(t.column,t.rowIndex,t.columnIndex);if(n>=this.problemColumnIOffset){if(e.ac_time[n-this.problemColumnIOffset]>0){var a=51+32*e.wa_count[n-this.problemColumnIOffset];return a=(a=a>170?170:a).toString(16),"background:#".concat(a+"ff"+a,";")}if(e.wa_count[n-this.problemColumnIOffset]>0){var r=170-10*e.wa_count[n-this.problemColumnIOffset];return r=(r=r>16?r:16).toString(16),"background:#".concat("ff"+r+r,";")}}},rowStyle:function(t){var e=t.row;t.rowIndex;if(e.user.username==this.$store.getters.username)return"background: #f0f9eb;"},jumpToContestStatus:function(t){this.$store.dispatch("setSolutionFilter",{nick:t.user.nick}),this.$router.push({name:"contestStatus",params:{id:this.contest.id}})}},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},c=(n(633),n(2)),l=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("title",[t._v(t._s("竞赛&作业排名 -- "+t.contest.name+" - AHPUOJ"))]),n("div",{staticClass:"content__main"},[n("div",{staticClass:"contest-ranklist__wrapper"},[n("h1",{staticClass:"content__panel__title"},[t._v(t._s("竞赛&作业排名 -- "+t.contest.name))]),t.seeable?n("el-table",{staticClass:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"cell-style":t.cellStyle,"row-style":t.rowStyle}},[n("el-table-column",{attrs:{label:"排名",type:"index","min-width":"40"}}),n("el-table-column",{attrs:{label:"用户名","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"userinfo",params:{id:e.row.user.id}}}},[t._v(" "+t._s(e.row.user.username))])]}}],null,!1,3393593140)}),n("el-table-column",{attrs:{label:"昵称","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"userinfo",params:{id:e.row.user.id}}}},[t._v(" "+t._s(e.row.user.nick))])]}}],null,!1,1386754637)}),n("el-table-column",{attrs:{label:"通过","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{staticClass:"link",on:{click:function(n){return t.jumpToContestStatus(e.row)}}},[t._v(t._s(e.row.solved))])]}}],null,!1,1425354814)}),n("el-table-column",{attrs:{label:"罚时","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.secToTimeStr(e.row.time)))]}}],null,!1,3049783015)}),t._l(t.contest.problem_count,function(e){return[n("el-table-column",{attrs:{"min-width":"100"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("router-link",{attrs:{to:{name:"contestProblem",params:{id:t.contest.id,num:e.$index-t.problemColumnIOffset+1}}}},[t._v(t._s(t.engNum(e.$index-t.problemColumnIOffset+1)))])]}},{key:"default",fn:function(n){return[t._v(t._s(t.calcProblemStatus(n.row,e)))]}}],null,!0)})]})],2):n("p",[t._v(t._s(t.reason)+"              ")])],1)])])},[],!1,null,"1dd8a484",null);e.default=l.exports}}]);