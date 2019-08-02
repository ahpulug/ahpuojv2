(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{112:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return l});var a=n(1);function r(e){return Object(a.a)("POST","admin/new",e)}function c(e,t){return Object(a.a)("PUT","admin/new/".concat(e),t)}function s(e){return Object(a.a)("GET","admin/new/".concat(e))}function i(e,t,n){return Object(a.a)("GET","admin/news",{page:e,perpage:t,param:n})}function u(e){return Object(a.a)("DELETE","admin/new/".concat(e))}function o(e){return Object(a.a)("PUT","admin/new/".concat(e,"/status"))}function l(e){return Object(a.a)("PUT","admin/new/".concat(e,"/topstatus"))}},668:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(11);var a=n(112);function r(e,t,n,a,r,c,s){try{var i=e[c](s),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(a,r)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(a,c){var s=e.apply(t,n);function i(e){r(s,a,c,i,u,"next",e)}function u(e){r(s,a,c,i,u,"throw",e)}i(void 0)})}}var s={data:function(){return{loading:!0,currentPage:1,currentRowId:0,perpage:10,total:0,queryParam:"",submitMode:"",form:{title:""},rules:{title:[{required:!0,message:"请输入新闻名称",trigger:"blur"},{max:20,message:"超出长度限制",trigger:"blur"}]},tableData:[]}},mounted:function(){},methods:{fetchNewList:function(){var e=c(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this).loading=!0,e.prev=2,e.next=5,Object(a.e)(t.currentPage,t.perpage,t.queryParam);case 5:n=e.sent,r=n.data,setTimeout(function(){t.tableData=r.data,t.total=r.total,t.loading=!1},200),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2);case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(){return e.apply(this,arguments)}}(),handleSizeChange:function(e){this.perpage=e,this.fetchNewList()},handleDeleteNew:function(){var e=c(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.prev=1,e.next=4,n.$confirm("确认要删除新闻".concat(t.title,"吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 4:return e.prev=4,e.next=7,Object(a.b)(t.id);case 7:r=e.sent,n.$message({type:"success",message:r.data.message}),1==n.tableData.length&&n.currentPage>1&&n.currentPage--,n.fetchNewList(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),n.$message({type:"error",message:e.t0.response.data.message});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),n.$message({type:"info",message:"已取消删除"});case 21:case"end":return e.stop()}},e,this,[[1,18],[4,13]])}));return function(t){return e.apply(this,arguments)}}(),handleToggleNewStatus:function(){var e=c(regeneratorRuntime.mark(function e(t){var n,r,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,r="确认要".concat(0==t.defunct?"隐藏":"显示","新闻").concat(t.title,"吗?"),e.prev=2,e.next=5,n.$confirm(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 5:return e.prev=5,e.next=8,Object(a.f)(t.id);case 8:c=e.sent,n.$message({type:"success",message:c.data.message}),t.defunct=!t.defunct,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),n.$message({type:"error",message:e.t0.response.data.message});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(2),n.$message({type:"info",message:"已取消操作"});case 21:case"end":return e.stop()}},e,this,[[2,18],[5,13]])}));return function(t){return e.apply(this,arguments)}}(),handleToggleNewTopStatus:function(){var e=c(regeneratorRuntime.mark(function e(t){var n,r,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,r="确认要".concat(0==t.top?"置顶":"取置","新闻").concat(t.title,"吗?"),e.prev=2,e.next=5,n.$confirm(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 5:return e.prev=5,e.next=8,Object(a.g)(t.id);case 8:c=e.sent,n.$message({type:"success",message:c.data.message}),n.fetchNewList(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),n.$message({type:"error",message:e.t0.response.data.message});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(2),n.$message({type:"info",message:"已取消操作"});case 21:case"end":return e.stop()}},e,this,[[2,18],[5,13]])}));return function(t){return e.apply(this,arguments)}}()},activated:function(){this.fetchNewList()}},i=n(2),u=Object(i.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-content"},[n("div",{staticClass:"content__breadcrumb"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{name:"adminIndex"}}},[e._v("首页")]),n("el-breadcrumb-item",[e._v(e._s(e.$route.meta.title))])],1)],1),n("div",{staticClass:"content__main"},[n("div",{staticClass:"content__searchbar__wrapper"},[n("el-input",{staticStyle:{"max-width":"20em"},attrs:{placeholder:"请输入新闻名称",maxlength:"20",clearable:""},model:{value:e.queryParam,callback:function(t){e.queryParam=t},expression:"queryParam"}}),n("el-button",{attrs:{icon:"el-icon-search",type:"primary",plain:""},on:{click:e.fetchNewList}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{label:"ID",prop:"id",width:"180"}}),n("el-table-column",{attrs:{label:"标题",prop:"title"}}),n("el-table-column",{attrs:{label:"状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"text-button",class:[0==t.row.defunct?"text-button--success":"text-button--danger"]},[e._v(e._s(0==t.row.defunct?"显示":"隐藏"))]),t.row.top>0?n("span",{staticClass:"text-button text-button--success"},[e._v("置顶")]):e._e()]}}])}),n("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.$router.push({name:"adminEditNew",params:{id:t.row.id}})}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:0==t.row.defunct?"danger":"success"},on:{click:function(n){return e.handleToggleNewStatus(t.row)}}},[e._v(e._s(0==t.row.defunct?"隐藏":"显示"))]),n("el-button",{attrs:{size:"mini",type:0==t.row.top?"success":"danger"},on:{click:function(n){return e.handleToggleNewTopStatus(t.row)}}},[e._v(e._s(0==t.row.top?"置顶":"取置"))]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDeleteNew(t.row)}}},[e._v("删除")])]}}])}),n("div",{staticClass:"content__pagination__wrapper"})],1),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.fetchNewList,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)])},[],!1,null,"efe5fe8a",null);t.default=u.exports}}]);