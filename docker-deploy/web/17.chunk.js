(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{15:function(t,e,n){"use strict";n.d(e,"i",function(){return r}),n.d(e,"m",function(){return c}),n.d(e,"j",function(){return o}),n.d(e,"h",function(){return i}),n.d(e,"g",function(){return l}),n.d(e,"k",function(){return u}),n.d(e,"l",function(){return s}),n.d(e,"n",function(){return f}),n.d(e,"o",function(){return d}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return p}),n.d(e,"e",function(){return g}),n.d(e,"f",function(){return m}),n.d(e,"d",function(){return b}),n.d(e,"a",function(){return h});var a=n(1);function r(){return Object(a.a)("GET","languages")}function c(t,e){return Object(a.a)("GET","ranklist",{page:t,perpage:e})}function o(t,e){return Object(a.a)("GET","news",{page:t,perpage:e})}function i(t,e,n){return Object(a.a)("GET","problem/".concat(t,"/issues"),{page:e,perpage:n})}function l(t,e,n){return Object(a.a)("GET","/issue/".concat(t),{page:e,perpage:n})}function u(t){return Object(a.a)("GET","problem/".concat(t))}function s(t,e,n,r,c){return Object(a.a)("GET","problems",{page:t,perpage:e,param:n,level:r,tag_id:c})}function f(t){return Object(a.a)("GET","solution/".concat(t))}function d(t,e,n,r,c,o,i){return Object(a.a)("GET","solutions",{page:t,perpage:e,param:n,username:r,language:c,result:o,contest_id:i})}function v(t,e,n){return Object(a.a)("GET","contests",{page:t,perpage:e,param:n})}function p(t){return Object(a.a)("GET","contest/".concat(t))}function g(t){return Object(a.a)("GET","contest/".concat(t,"/ranklist"))}function m(t){return Object(a.a)("GET","contest/".concat(t,"/teamranklist"))}function b(t,e){return Object(a.a)("GET","contest/".concat(t,"/problem/").concat(e))}function h(){return Object(a.a)("GET","alltags")}},163:function(t,e,n){"use strict";var a,r,c=n(171),o=RegExp.prototype.exec,i=String.prototype.replace,l=o,u=(a=/a/,r=/b*/g,o.call(a,"a"),o.call(r,"a"),0!==a.lastIndex||0!==r.lastIndex),s=void 0!==/()??/.exec("")[1];(u||s)&&(l=function(t){var e,n,a,r,l=this;return s&&(n=new RegExp("^"+l.source+"$(?!\\s)",c.call(l))),u&&(e=l.lastIndex),a=o.call(l,t),u&&a&&(l.lastIndex=l.global?a.index+a[0].length:e),s&&a&&a.length>1&&i.call(a[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)}),a}),t.exports=l},171:function(t,e,n){"use strict";var a=n(26);t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},264:function(t,e,n){var a=n(70),r=n(46);t.exports=function(t){return function(e,n){var c,o,i=String(r(e)),l=a(n),u=i.length;return l<0||l>=u?t?"":void 0:(c=i.charCodeAt(l))<55296||c>56319||l+1===u||(o=i.charCodeAt(l+1))<56320||o>57343?t?i.charAt(l):c:t?i.slice(l,l+2):o-56320+(c-55296<<10)+65536}}},265:function(t,e,n){"use strict";var a=n(264)(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},266:function(t,e,n){"use strict";var a=n(90),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var c=n.call(t,e);if("object"!=typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},267:function(t,e,n){"use strict";n(306);var a=n(37),r=n(47),c=n(44),o=n(46),i=n(19),l=n(163),u=i("species"),s=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=i(t),v=!c(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=v?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e}):void 0;if(!v||!p||"replace"===t&&!s||"split"===t&&!f){var g=/./[d],m=n(o,d,""[t],function(t,e,n,a,r){return e.exec===l?v&&!r?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),b=m[0],h=m[1];a(String.prototype,t,b),r(RegExp.prototype,d,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}}},290:function(t,e,n){var a=n(636);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(14)(a,r);a.locals&&(t.exports=a.locals)},306:function(t,e,n){"use strict";var a=n(163);n(54)({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},31:function(t,e,n){"use strict";var a=n(26),r=n(164),c=n(86),o=n(70),i=n(265),l=n(266),u=Math.max,s=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;n(267)("replace",2,function(t,e,n,p){return[function(a,r){var c=t(this),o=null==a?void 0:a[e];return void 0!==o?o.call(a,c,r):n.call(String(c),a,r)},function(t,e){var r=p(n,t,this,e);if(r.done)return r.value;var f=a(t),d=String(this),v="function"==typeof e;v||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}for(var h=[];;){var x=l(f,d);if(null===x)break;if(h.push(x),!m)break;""===String(x[0])&&(f.lastIndex=i(d,c(f.lastIndex),b))}for(var w,_="",y=0,k=0;k<h.length;k++){x=h[k];for(var S=String(x[0]),E=u(s(o(x.index),d.length),0),O=[],T=1;T<x.length;T++)O.push(void 0===(w=x[T])?w:String(w));var I=x.groups;if(v){var j=[S].concat(O,E,d);void 0!==I&&j.push(I);var C=String(e.apply(void 0,j))}else C=g(S,d,E,O,I,e);E>=y&&(_+=d.slice(y,E)+C,y=E+S.length)}return _+d.slice(y)}];function g(t,e,a,c,o,i){var l=a+t.length,u=c.length,s=v;return void 0!==o&&(o=r(o),s=d),n.call(i,s,function(n,r){var i;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(l);case"<":i=o[r.slice(1,-1)];break;default:var s=+r;if(0===s)return n;if(s>u){var d=f(s/10);return 0===d?n:d<=u?void 0===c[d-1]?r.charAt(1):c[d-1]+r.charAt(1):n}i=c[s-1]}return void 0===i?"":i})}})},563:function(t,e,n){"use strict";n(580);var a=n(26),r=n(171),c=n(32),o=/./.toString,i=function(t){n(37)(RegExp.prototype,"toString",t,!0)};n(44)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?i(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=o.name&&i(function(){return o.call(this)})},564:function(t,e,n){var a=Date.prototype,r=a.toString,c=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(37)(a,"toString",function(){var t=c.call(this);return t==t?r.call(this):"Invalid Date"})},580:function(t,e,n){n(32)&&"g"!=/./g.flags&&n(45).f(RegExp.prototype,"flags",{configurable:!0,get:n(171)})},635:function(t,e,n){"use strict";var a=n(290);n.n(a).a},636:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".red[data-v-92fc15a0]{color:red}.green[data-v-92fc15a0]{color:green}.blue[data-v-92fc15a0]{color:blue}.black[data-v-92fc15a0]{color:#000}.white[data-v-92fc15a0]{color:#fff}.yellow[data-v-92fc15a0]{color:#ff0}.gold[data-v-92fc15a0]{color:gold}.purple[data-v-92fc15a0]{color:purple}.cyan[data-v-92fc15a0]{color:cyan}.orange[data-v-92fc15a0]{color:orange}.orangered[data-v-92fc15a0]{color:#ff4500}.pink[data-v-92fc15a0]{color:pink}.violet[data-v-92fc15a0]{color:violet}.yellowgreen[data-v-92fc15a0]{color:#9acd32}.tomato[data-v-92fc15a0]{color:tomato}.tan[data-v-92fc15a0]{color:tan}.snow[data-v-92fc15a0]{color:snow}.gray[data-v-92fc15a0]{color:gray}.silver[data-v-92fc15a0]{color:silver}.skyblue[data-v-92fc15a0]{color:skyblue}.navy[data-v-92fc15a0]{color:navy}.brown[data-v-92fc15a0]{color:brown}.beige[data-v-92fc15a0]{color:beige}.magenta[data-v-92fc15a0]{color:#f0f}.c0[data-v-92fc15a0]{color:#000}.c1[data-v-92fc15a0]{color:#111}.c2[data-v-92fc15a0]{color:#222}.c3[data-v-92fc15a0]{color:#333}.c4[data-v-92fc15a0]{color:#444}.c5[data-v-92fc15a0]{color:#555}.c6[data-v-92fc15a0]{color:#666}.c7[data-v-92fc15a0]{color:#777}.c8[data-v-92fc15a0]{color:#888}.c9[data-v-92fc15a0]{color:#999}.c10[data-v-92fc15a0]{color:#aaa}.c11[data-v-92fc15a0]{color:#bbb}.c12[data-v-92fc15a0]{color:#ccc}.c13[data-v-92fc15a0]{color:#ddd}.c14[data-v-92fc15a0]{color:#eee}.c15[data-v-92fc15a0]{color:#fff}.porange[data-v-92fc15a0]{color:#fc9}.pgold[data-v-92fc15a0]{color:#ffc}.pazure[data-v-92fc15a0]{color:#cff}.pdgreen[data-v-92fc15a0]{color:#9cc}.ppurple[data-v-92fc15a0]{color:#ccf}.pblue[data-v-92fc15a0]{color:#09c}.plblue[data-v-92fc15a0]{color:#9cf}.pdblue[data-v-92fc15a0]{color:#369}.pgreen[data-v-92fc15a0]{color:#9c3}.contest-ranklist__wrapper[data-v-92fc15a0]{background:#fff}.contest-ranklist__wrapper .link[data-v-92fc15a0]{padding:0 0.1rem}\n",""])},695:function(t,e,n){"use strict";n.r(e);n(10),n(563),n(564),n(7),n(31),n(11);var a=n(15);function r(t,e,n,a,r,c,o){try{var i=t[c](o),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(a,r)}var c={name:"",data:function(){return{problemColumnIOffset:4,tableData:[],contest:null,timer:0,seeable:!1,reason:""}},mounted:function(){var t=this;this.fetctContestTeamRankList(),this.timer=setInterval(function(){t.fetctContestTeamRankList()},6e4)},methods:{fetctContestTeamRankList:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=this).loading=!0,t.prev=2,t.next=5,Object(a.f)(e.$route.params.id);case 5:n=t.sent,r=n.data,e.tableData=r.teamranklist,e.seeable=r.seeable,e.reason=r.reason,e.contest=r.contest,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),e.$router.replace({name:"404Page"});case 18:case"end":return t.stop()}},t,this,[[2,14]])}),function(){var e=this,n=arguments;return new Promise(function(a,c){var o=t.apply(e,n);function i(t){r(o,a,c,i,l,"next",t)}function l(t){r(o,a,c,i,l,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),handleSizeChange:function(t){this.fetchNewList()},calcProblemStatus:function(t,e){var n="";return t.ac_time[e-1]>0&&(n+=this.secToTimeStr(t.ac_time[e-1]),n+="(".concat(t.ac_count[e-1],")")),t.wa_count[e-1]>0&&(n+="(-".concat(t.wa_count[e-1],")")),n},cellStyle:function(t){var e=t.row,n=(t.column,t.rowIndex,t.columnIndex);if(n>=this.problemColumnIOffset){if(e.ac_time[n-this.problemColumnIOffset]>0){var a=51+32*e.wa_count[n-this.problemColumnIOffset];return a=(a=a>170?170:a).toString(16),"background:#".concat(a+"ff"+a,";")}if(e.wa_count[n-this.problemColumnIOffset]>0){var r=170-10*e.wa_count[n-this.problemColumnIOffset];return r=(r=r>16?r:16).toString(16),"background:#".concat("ff"+r+r,";")}}},jumpToContestStatus:function(t){this.$store.dispatch("setSolutionFilter",{nick:t.user.nick}),this.$router.push({name:"contestStatus",params:{id:this.contest.id}})}},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},o=(n(635),n(2)),i=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("title",[t._v(t._s("竞赛&作业团队排名 -- "+t.contest.name+" - AHPUOJ"))]),n("div",{staticClass:"content__main"},[n("div",{staticClass:"contest-ranklist__wrapper"},[n("h1",{staticClass:"content__panel__title"},[t._v(t._s("竞赛&作业团队排名 -- "+t.contest.name))]),t.seeable?n("el-table",{staticClass:"dataTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"cell-style":t.cellStyle}},[n("el-table-column",{attrs:{label:"排名",type:"index","min-width":"40"}}),n("el-table-column",{attrs:{label:"团队名","min-width":"160",prop:"team.name"}}),n("el-table-column",{attrs:{label:"总通过","min-width":"70",prop:"solved"}}),n("el-table-column",{attrs:{label:"总罚时","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.secToTimeStr(e.row.time)))]}}],null,!1,3049783015)}),t._l(t.contest.problem_count,function(e){return[n("el-table-column",{attrs:{"min-width":"100"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("router-link",{attrs:{to:{name:"contestProblem",params:{id:t.contest.id,num:e.$index-t.problemColumnIOffset+1}}}},[t._v(t._s(t.engNum(e.$index-t.problemColumnIOffset+1)))])]}},{key:"default",fn:function(n){return[t._v(t._s(t.calcProblemStatus(n.row,e)))]}}],null,!0)})]})],2):n("p",[t._v(t._s(t.reason))])],1)])])},[],!1,null,"92fc15a0",null);e.default=i.exports}}]);