(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{163:function(e,t,r){"use strict";var n,a,i=r(171),o=RegExp.prototype.exec,c=String.prototype.replace,s=o,u=(n=/a/,a=/b*/g,o.call(n,"a"),o.call(a,"a"),0!==n.lastIndex||0!==a.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(s=function(e){var t,r,n,a,s=this;return l&&(r=new RegExp("^"+s.source+"$(?!\\s)",i.call(s))),u&&(t=s.lastIndex),n=o.call(s,e),u&&n&&(s.lastIndex=s.global?n.index+n[0].length:t),l&&n&&n.length>1&&c.call(n[0],r,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)}),n}),e.exports=s},171:function(e,t,r){"use strict";var n=r(26);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},264:function(e,t,r){"use strict";var n=r(265)(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},265:function(e,t,r){var n=r(70),a=r(46);e.exports=function(e){return function(t,r){var i,o,c=String(a(t)),s=n(r),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?e?c.charAt(s):i:e?c.slice(s,s+2):o-56320+(i-55296<<10)+65536}}},266:function(e,t,r){"use strict";var n=r(90),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"==typeof r){var i=r.call(e,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},267:function(e,t,r){"use strict";r(306);var n=r(37),a=r(47),i=r(44),o=r(46),c=r(19),s=r(163),u=c("species"),l=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=c(e),d=!i(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),m=d?!i(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[p](""),!t}):void 0;if(!d||!m||"replace"===e&&!l||"split"===e&&!f){var g=/./[p],v=r(o,p,""[e],function(e,t,r,n,a){return t.exec===s?d&&!a?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),h=v[0],b=v[1];n(String.prototype,e,h),a(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},306:function(e,t,r){"use strict";var n=r(163);r(54)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},33:function(e,t,r){"use strict";var n=r(26),a=r(164),i=r(86),o=r(70),c=r(264),s=r(266),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;r(267)("replace",2,function(e,t,r,m){return[function(n,a){var i=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,a):r.call(String(i),n,a)},function(e,t){var a=m(r,e,this,t);if(a.done)return a.value;var f=n(e),p=String(this),d="function"==typeof t;d||(t=String(t));var v=f.global;if(v){var h=f.unicode;f.lastIndex=0}for(var b=[];;){var x=s(f,p);if(null===x)break;if(b.push(x),!v)break;""===String(x[0])&&(f.lastIndex=c(p,i(f.lastIndex),h))}for(var y,w="",_=0,k=0;k<b.length;k++){x=b[k];for(var $=String(x[0]),O=u(l(o(x.index),p.length),0),T=[],E=1;E<x.length;E++)T.push(void 0===(y=x[E])?y:String(y));var P=x.groups;if(d){var L=[$].concat(T,O,p);void 0!==P&&L.push(P);var j=String(t.apply(void 0,L))}else j=g($,p,O,T,P,t);O>=_&&(w+=p.slice(_,O)+j,_=O+$.length)}return w+p.slice(_)}];function g(e,t,n,i,o,c){var s=n+e.length,u=i.length,l=d;return void 0!==o&&(o=a(o),l=p),r.call(c,l,function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var p=f(l/10);return 0===p?r:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):r}c=i[l-1]}return void 0===c?"":c})}})},670:function(e,t,r){"use strict";r.r(t);r(10),r(7),r(33),r(11);var n=r(69);function a(e,t,r,n,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function c(e){a(o,n,i,c,s,"next",e)}function s(e){a(o,n,i,c,s,"throw",e)}c(void 0)})}}var o={data:function(){return{loading:!0,currentPage:1,currentRowId:0,perpage:10,queryParam:"",total:0,dialogFormVisible:!1,dialogOperatorInfoVisible:!1,infoList:[],team:null,form:{userList:""},rules:{userList:[{required:!0,message:"请输入要添加的用户名列表",trigger:"blur"}]},tableData:[]}},mounted:function(){var e=i(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.prev=1,e.next=4,Object(n.g)(t);case 4:r=e.sent,this.team=r.data.team,this.fetchTeamUserList(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),this.$router.replace({name:"admin404Page"});case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}(),methods:{fetchTeamUserList:function(){var e=i(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this).loading=!0,e.prev=2,e.next=5,Object(n.i)(t.team.id,t.currentPage,t.perpage,t.queryParam);case 5:r=e.sent,a=r.data,setTimeout(function(){t.tableData=a.data,t.total=a.total,t.loading=!1},200),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2);case 14:case"end":return e.stop()}},e,this,[[2,11]])}));return function(){return e.apply(this,arguments)}}(),handleSizeChange:function(e){this.perpage=e,this.fetchTeamUserList()},openDialog:function(){this.$notify({title:"提示",message:"每一行对应一个用户名，若对应账号存在则加入团队，否则将忽略。",duration:6e3}),this.$refs.form.clearValidate(),this.$refs.input.focus()},closeDialog:function(){this.$refs.form.resetFields(),this.$refs.input.blur()},submit:function(){var e=this;e.$refs.form.validate(function(){var t=i(regeneratorRuntime.mark(function t(r){var a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=19;break}return t.prev=1,i=e.$route.params.id,t.next=5,Object(n.a)(i,e.form);case 5:a=t.sent,e.infoList=a.data.info,e.dialogOperatorInfoVisible=!0,e.$message({message:a.data.message,type:"success"}),e.fetchTeamUserList(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.$message({message:t.t0.response.data.message,type:"error"});case 16:e.dialogFormVisible=!1,t.next=20;break;case 19:return t.abrupt("return",!1);case 20:case"end":return t.stop()}},t,null,[[1,13]])}));return function(e){return t.apply(this,arguments)}}())},cancel:function(){this.dialogFormVisible=!1},handleAddUser:function(){this.dialogFormVisible=!0},handleDeleteTeamUser:function(){var e=i(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,e.prev=1,e.next=4,r.$confirm("确认要删除团队成员".concat(t.username,"吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 4:return e.prev=4,e.next=7,Object(n.d)(r.team.id,t.id);case 7:a=e.sent,r.$message({type:"success",message:a.data.message}),1==r.tableData.length&&r.currentPage>1&&r.currentPage--,r.fetchTeamUserList(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),r.$message({type:"error",message:e.t0.response.data.message});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),r.$message({type:"info",message:"已取消删除"});case 21:case"end":return e.stop()}},e,this,[[1,18],[4,13]])}));return function(t){return e.apply(this,arguments)}}()}},c=r(2),s=Object(c.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"admin-content"},[r("div",{staticClass:"content__breadcrumb"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{name:"adminIndex"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v(e._s(e.$route.meta.title))])],1)],1),r("div",{staticClass:"content__main"},[r("el-card",{staticClass:"content__card__wrapper"},[r("p",[e._v("团队名称: "+e._s(e.team.name))]),r("p",[e._v("成员总数: "+e._s(e.total))])]),r("div",{staticClass:"content__button__wrapper"},[r("el-button",{attrs:{type:"success"},on:{click:e.handleAddUser}},[e._v("添加成员")])],1),r("div",{staticClass:"content__searchbar__wrapper"},[r("el-input",{staticStyle:{"max-width":"20em"},attrs:{placeholder:"请输入用户名或昵称",maxlength:"20",clearable:""},model:{value:e.queryParam,callback:function(t){e.queryParam=t},expression:"queryParam"}}),r("el-button",{attrs:{icon:"el-icon-search",type:"primary",plain:""},on:{click:e.fetchTeamUserList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{label:"ID",prop:"id",width:"180"}}),r("el-table-column",{attrs:{label:"用户名",prop:"username",width:"180"}}),r("el-table-column",{attrs:{label:"昵称",prop:"nick"}}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDeleteTeamUser(t.row)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.fetchTeamUserList,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}),r("el-dialog",{attrs:{title:"添加团队成员",visible:e.dialogFormVisible,width:"400px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t},closed:e.closeDialog,opened:e.openDialog}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"用户名列表",prop:"userList"}},[r("el-input",{ref:"input",attrs:{type:"textarea",rows:"20",autocomplete:"off",resize:"none"},model:{value:e.form.userList,callback:function(t){e.$set(e.form,"userList",t)},expression:"form.userList"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.cancel}},[e._v("取消")]),r("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:function(t){return e.submit()}}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"操作信息",visible:e.dialogOperatorInfoVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogOperatorInfoVisible=t}}},[e._l(e.infoList,function(t,n){return[r("p",{key:n},[e._v(e._s(t))])]}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogOperatorInfoVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogOperatorInfoVisible=!1}}},[e._v("确定")])],1)],2)],1)])},[],!1,null,"59f9e15e",null);t.default=s.exports},69:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i}),r.d(t,"g",function(){return o}),r.d(t,"e",function(){return c}),r.d(t,"h",function(){return s}),r.d(t,"f",function(){return u}),r.d(t,"i",function(){return l}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return p});var n=r(1);function a(e){return Object(n.a)("POST","admin/team",e)}function i(e,t){return Object(n.a)("POST","admin/team/".concat(e,"/users"),t)}function o(e){return Object(n.a)("GET","admin/team/".concat(e))}function c(e,t){return Object(n.a)("PUT","admin/team/".concat(e),t)}function s(e,t,r){return Object(n.a)("GET","admin/teams",{page:e,perpage:t,param:r})}function u(){return Object(n.a)("GET","admin/allteams")}function l(e,t,r,a){return Object(n.a)("GET","admin/team/".concat(e,"/users"),{page:t,perpage:r,param:a})}function f(e){return Object(n.a)("DELETE","admin/team/".concat(e))}function p(e,t){return Object(n.a)("DELETE","admin/team/".concat(e,"/user/").concat(t))}}}]);