(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{230:function(t,a,n){"use strict";var e=n(9),r=n.n(e),o=(n(321),n(322),n(323),n(324),n(325),{name:"line-chart",props:{option:{type:Object},id:{type:String},flag:{type:Boolean}},data:function(){return{chartObj:null}},mounted:function(){},methods:{init:function(){var t=this;setTimeout(function(){t.chartObj=r.a.init(document.getElementById(t.id)),t.chartObj.setOption(t.option)},500)}},watch:{flag:function(t){1==t&&this.init()}}}),i=(n(319),n(2)),c=Object(i.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart",staticClass:"chart",attrs:{id:"mychart",id:this.id}})},[],!1,null,"0dde1452",null);a.a=c.exports},298:function(t,a,n){var e=n(661);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(14)(e,r);e.locals&&(t.exports=e.locals)},319:function(t,a,n){"use strict";var e=n(92);n.n(e).a},320:function(t,a,n){(t.exports=n(13)(!0)).push([t.i,"\n.chart[data-v-0dde1452] {\n  height: 100%;\n  width: 100%;\n}\n","",{version:3,sources:["web-common/components/linechart.vue"],names:[],mappings:";AAqDA;EACA,YAAA;EACA,WAAA;AACA",file:"linechart.vue?vue&type=style&index=0&id=0dde1452&scoped=true&lang=css&",sourcesContent:['<template lang="pug">\n  #mychart.chart(ref="chart",:id="id")\n</template>\n \n<script>\n// 引入基本模板\nimport echarts from "echarts/lib/echarts";\nimport "echarts/lib/chart/line";\nimport "echarts/lib/chart/bar";\nimport "echarts/lib/chart/radar";\n// 引入提示框和图例组件\nimport "echarts/lib/component/tooltip";\nimport "echarts/lib/component/legend";\n\nexport default {\n  name: "line-chart",\n  props: {\n    option: {\n      type: Object\n    },\n    id: {\n      type: String\n    },\n    flag: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      chartObj: null\n    };\n  },\n  mounted() {\n    console.log(this.flag);\n  },\n  methods: {\n    init() {\n      setTimeout(() => {\n        this.chartObj = echarts.init(document.getElementById(this.id));\n        this.chartObj.setOption(this.option);\n      }, 500);\n    }\n  },\n  watch: {\n    flag(flag) {\n      if (flag == true) {\n        this.init();\n      }\n    }\n  }\n};\n<\/script>\n<style scoped>\n.chart {\n  height: 100%;\n  width: 100%;\n}\n</style>']}])},660:function(t,a,n){"use strict";var e=n(298);n.n(e).a},661:function(t,a,n){(t.exports=n(13)(!1)).push([t.i,".red[data-v-f7fcab10]{color:red}.green[data-v-f7fcab10]{color:green}.blue[data-v-f7fcab10]{color:blue}.black[data-v-f7fcab10]{color:#000}.white[data-v-f7fcab10]{color:#fff}.yellow[data-v-f7fcab10]{color:#ff0}.gold[data-v-f7fcab10]{color:gold}.purple[data-v-f7fcab10]{color:purple}.cyan[data-v-f7fcab10]{color:cyan}.orange[data-v-f7fcab10]{color:orange}.orangered[data-v-f7fcab10]{color:#ff4500}.pink[data-v-f7fcab10]{color:pink}.violet[data-v-f7fcab10]{color:violet}.yellowgreen[data-v-f7fcab10]{color:#9acd32}.tomato[data-v-f7fcab10]{color:tomato}.tan[data-v-f7fcab10]{color:tan}.snow[data-v-f7fcab10]{color:snow}.gray[data-v-f7fcab10]{color:gray}.silver[data-v-f7fcab10]{color:silver}.skyblue[data-v-f7fcab10]{color:skyblue}.navy[data-v-f7fcab10]{color:navy}.brown[data-v-f7fcab10]{color:brown}.beige[data-v-f7fcab10]{color:beige}.magenta[data-v-f7fcab10]{color:#f0f}.c0[data-v-f7fcab10]{color:#000}.c1[data-v-f7fcab10]{color:#111}.c2[data-v-f7fcab10]{color:#222}.c3[data-v-f7fcab10]{color:#333}.c4[data-v-f7fcab10]{color:#444}.c5[data-v-f7fcab10]{color:#555}.c6[data-v-f7fcab10]{color:#666}.c7[data-v-f7fcab10]{color:#777}.c8[data-v-f7fcab10]{color:#888}.c9[data-v-f7fcab10]{color:#999}.c10[data-v-f7fcab10]{color:#aaa}.c11[data-v-f7fcab10]{color:#bbb}.c12[data-v-f7fcab10]{color:#ccc}.c13[data-v-f7fcab10]{color:#ddd}.c14[data-v-f7fcab10]{color:#eee}.c15[data-v-f7fcab10]{color:#fff}.porange[data-v-f7fcab10]{color:#fc9}.pgold[data-v-f7fcab10]{color:#ffc}.pazure[data-v-f7fcab10]{color:#cff}.pdgreen[data-v-f7fcab10]{color:#9cc}.ppurple[data-v-f7fcab10]{color:#ccf}.pblue[data-v-f7fcab10]{color:#09c}.plblue[data-v-f7fcab10]{color:#9cf}.pdblue[data-v-f7fcab10]{color:#369}.pgreen[data-v-f7fcab10]{color:#9c3}.userinfo__wrapper[data-v-f7fcab10]{padding:0.15rem;text-align:left;background:#fff}.userinfo__wrapper .userinfo__section[data-v-f7fcab10]{min-height:100px;padding:0.15rem 0}.userinfo__wrapper .userinfo__section[data-v-f7fcab10]:not(:last-child){border-bottom:1px solid #ddd}.userinfo__wrapper .userinfo__section:not(:last-child) .userinfo__avatart__wrapper img[data-v-f7fcab10]{height:200px;width:200px;border-radius:100px;border:1px solid #eee}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist[data-v-f7fcab10]{text-align:left}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist li[data-v-f7fcab10]{margin-top:0.15rem;font-size:20px}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist li span[data-v-f7fcab10]{display:inline-block}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist li span[data-v-f7fcab10]:first-child{width:100px}.userinfo__wrapper .userinfo__section .problem__links[data-v-f7fcab10]{font-size:24px;word-spacing:16px}\n",""])},702:function(t,a,n){"use strict";n.r(a);n(10),n(7),n(11);var e=n(30);function r(t,a,n,e,r,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?a(s):Promise.resolve(s).then(e,r)}var o={name:"",data:function(){return{user:null,chartOption:{color:["#ffdf25","#36a9ce"],tooltip:{},legend:{data:["累计通过","累计提交"]},xAxis:{type:"time"},yAxis:{},series:[{name:"累计通过",type:"line",data:[]},{name:"累计提交",type:"line",data:[]}]},renderFlag:!1}},components:{LineChart:n(230).a},mounted:function(){this.init()},methods:{init:function(){var t,a=(t=regeneratorRuntime.mark(function t(){var a,n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this,t.prev=1,n=a.$route.params.id,t.next=5,Object(e.e)(n);case 5:r=t.sent,o=r.data,a.user=o.userinfo,a.renderFlag=!0,a.chartOption.series[0].data=a.user.recent_solved_statistic,a.chartOption.series[1].data=a.user.recent_submit_statistic,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1);case 16:case"end":return t.stop()}},t,this,[[1,13]])}),function(){var a=this,n=arguments;return new Promise(function(e,o){var i=t.apply(a,n);function c(t){r(i,e,o,c,s,"next",t)}function s(t){r(i,e,o,c,s,"throw",t)}c(void 0)})});return function(){return a.apply(this,arguments)}}(),jumpToSolved:function(){this.$store.dispatch("setSolutionFilter",{result:4,nick:this.user.nick}),this.$router.push({name:"status",params:{id:this.$route.params.id}})},jumpToSubmit:function(){this.$store.dispatch("setSolutionFilter",{nick:this.user.nick}),this.$router.push({name:"status",params:{id:this.$route.params.id}})}}},i=(n(660),n(2)),c=Object(i.a)(o,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("title",[t._v(t._s(t.user.nick+"的个人空间"))]),n("div",{staticClass:"content__main"},[n("div",{staticClass:"userinfo__wrapper"},[n("div",{staticClass:"userinfo__section"},[n("h2",[t._v("个人信息")]),n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"userinfo__avatart__wrapper"},[t.user.avatar?n("img",{attrs:{src:t.imgUrl(t.user.avatar)}}):t._e()])]),n("el-col",{attrs:{span:12}},[n("ul",{staticClass:"infolist"},[n("li",[n("span",[t._v("昵称 ")]),n("span",[t._v(t._s(t.user.nick))])]),n("li",[n("span",[t._v("解决 ")]),n("a",{on:{click:t.jumpToSolved}},[t._v(t._s(t.user.solved))])]),n("li",[n("span",[t._v("提交 ")]),n("a",{on:{click:t.jumpToSubmit}},[t._v(t._s(t.user.submit))])]),n("li",[n("span",[t._v("排名 ")]),n("span",[t._v(t._s(t.user.rank))])]),n("li",[n("span",[t._v("注册时间 ")]),n("span",[t._v(t._s(t.user.created_at))])])])])],1)],1),n("div",{staticClass:"userinfo__section"},[n("h2",[t._v("近期提交情况")]),n("line-chart",{staticStyle:{width:"100%",height:"500px"},attrs:{option:t.chartOption,flag:t.renderFlag,id:"chart"}})],1),n("div",{staticClass:"userinfo__section"},[n("h2",[t._v("已解决的问题")]),n("div",{staticClass:"problem__links"},[t._l(t.user.solved_problem_list,function(a,e){return[n("router-link",{attrs:{to:{name:"problem",params:{id:a}}}},[t._v(t._s(a)+" ")])]})],2)]),n("div",{staticClass:"userinfo__section"},[n("h2",[t._v("未解决的问题")]),n("div",{staticClass:"problem__links"},[t._l(t.user.unsolved_problem_list,function(a,e){return[n("router-link",{attrs:{to:{name:"problem",params:{id:a}}}},[t._v(t._s(a)+" ")])]})],2)])])])])},[],!1,null,"f7fcab10",null);a.default=c.exports},92:function(t,a,n){var e=n(320);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(14)(e,r);e.locals&&(t.exports=e.locals)}}]);