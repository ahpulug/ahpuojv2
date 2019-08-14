(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{159:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"e",function(){return s}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return c});var n=a(1);function r(e){return Object(n.a)("POST","admin/tag",e)}function i(e,t){return Object(n.a)("PUT","admin/tag/".concat(e),t)}function s(e,t,a){return Object(n.a)("GET","admin/tags",{page:e,perpage:t,param:a})}function o(){return Object(n.a)("GET","admin/alltags")}function c(e){return Object(n.a)("DELETE","admin/tag/".concat(e))}},676:function(e,t,a){"use strict";a.r(t);a(10),a(7),a(38),a(11);var n=a(159);function r(e,t,a,n,r,i,s){try{var o=e[i](s),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function i(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var s=e.apply(t,a);function o(e){r(s,n,i,o,c,"next",e)}function c(e){r(s,n,i,o,c,"throw",e)}o(void 0)})}}var s={data:function(){return{loading:!0,currentPage:1,currentRowId:0,perpage:10,queryParam:"",total:0,dialogFormTitle:"",dialogFormVisible:!1,submitMode:"",form:{name:""},rules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{max:20,message:"超出长度限制",trigger:"blur"}]},tableData:[]}},mounted:function(){},methods:{fetchTagList:function(){var e=i(regeneratorRuntime.mark(function e(){var t,a,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this).loading=!0,e.prev=2,e.next=5,Object(n.e)(t.currentPage,t.perpage,t.queryParam);case 5:a=e.sent,r=a.data,setTimeout(function(){t.tableData=r.data,t.total=r.total,t.loading=!1},200),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2);case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(){return e.apply(this,arguments)}}(),handleSizeChange:function(e){this.perpage=e,this.fetchTagList()},openDialog:function(){this.$refs.form.clearValidate(),this.$refs.input.focus()},closeDialog:function(){this.$refs.form.resetFields(),this.$refs.input.blur(),this.form.name=""},submit:function(){var e=this;e.$refs.form.validate(function(){var t=i(regeneratorRuntime.mark(function t(a){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=21;break}if(t.prev=1,"create"!=e.submitMode){t.next=8;break}return t.next=5,Object(n.a)(e.form);case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,Object(n.c)(e.currentRowId,e.form);case 10:r=t.sent;case 11:e.$message({message:r.data.message,type:"success"}),e.fetchTagList(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),e.$message({message:t.t0.response.data.message,type:"error"});case 18:e.dialogFormVisible=!1,t.next=22;break;case 21:return t.abrupt("return",!1);case 22:case"end":return t.stop()}},t,null,[[1,15]])}));return function(e){return t.apply(this,arguments)}}())},cancel:function(){this.dialogFormVisible=!1},handleCreateTag:function(){this.dialogFormTitle="新建标签",this.submitMode="create",this.dialogFormVisible=!0},handleEditTag:function(e){this.dialogFormTitle="编辑标签",this.submitMode="edit",this.currentRowId=e.id,this.form.name=e.name,this.dialogFormVisible=!0},handleDeleteTag:function(){var e=i(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,e.prev=1,e.next=4,a.$confirm("确认要删除标签".concat(t.name,"吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 4:return e.prev=4,e.next=7,Object(n.b)(t.id);case 7:r=e.sent,a.$message({type:"success",message:r.data.message}),1==a.tableData.length&&a.currentPage>1&&a.currentPage--,a.fetchTagList(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),a.$message({type:"error",message:e.t0.response.data.message});case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),a.$message({type:"info",message:"已取消删除"});case 21:case"end":return e.stop()}},e,this,[[1,18],[4,13]])}));return function(t){return e.apply(this,arguments)}}()},activated:function(){this.fetchTagList()}},o=a(2),c=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-content"},[a("div",{staticClass:"content__breadcrumb"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{name:"adminIndex"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v(e._s(e.$route.meta.title))])],1)],1),a("div",{staticClass:"content__main"},[a("div",{staticClass:"content__button__wrapper"},[a("el-button",{attrs:{type:"success"},on:{click:e.handleCreateTag}},[e._v("新建标签")])],1),a("div",{staticClass:"content__searchbar__wrapper"},[a("el-input",{staticStyle:{"max-width":"20em"},attrs:{placeholder:"请输入标签名称",maxlength:"20",clearable:""},model:{value:e.queryParam,callback:function(t){e.queryParam=t},expression:"queryParam"}}),a("el-button",{attrs:{icon:"el-icon-search",type:"primary",plain:""},on:{click:e.fetchTagList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"ID",prop:"id",width:"180"}}),a("el-table-column",{attrs:{label:"标签名称",prop:"name"}}),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEditTag(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDeleteTag(t.row)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.fetchTagList,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),a("el-dialog",{attrs:{title:e.dialogFormTitle,visible:e.dialogFormVisible,width:"400px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t},closed:e.closeDialog,opened:e.openDialog}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[a("el-input",{ref:"input",attrs:{autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取消")]),a("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:e.submit}},[e._v("确定")])],1)],1)],1)},[],!1,null,"1ea79b28",null);t.default=c.exports}}]);