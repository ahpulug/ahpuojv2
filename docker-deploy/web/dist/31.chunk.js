(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(e,t,a){"use strict";var n=a(9),r=a.n(n),o=(a(321),a(322),a(323),a(324),a(325),{name:"line-chart",props:{option:{type:Object},id:{type:String},flag:{type:Boolean}},data:function(){return{chartObj:null}},mounted:function(){},methods:{init:function(){var e=this;setTimeout(function(){e.chartObj=r.a.init(document.getElementById(e.id)),e.chartObj.setOption(e.option)},500)}},watch:{flag:function(e){1==e&&this.init()}}}),i=(a(319),a(2)),s=Object(i.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"chart",staticClass:"chart",attrs:{id:"mychart",id:this.id}})},[],!1,null,"0dde1452",null);t.a=s.exports},298:function(e,t,a){var n=a(661);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(14)(n,r);n.locals&&(e.exports=n.locals)},319:function(e,t,a){"use strict";var n=a(92);a.n(n).a},320:function(e,t,a){(e.exports=a(13)(!0)).push([e.i,"\n.chart[data-v-0dde1452] {\n  height: 100%;\n  width: 100%;\n}\n","",{version:3,sources:["web-common/components/linechart.vue"],names:[],mappings:";AAqDA;EACA,YAAA;EACA,WAAA;AACA",file:"linechart.vue?vue&type=style&index=0&id=0dde1452&scoped=true&lang=css&",sourcesContent:['<template lang="pug">\n  #mychart.chart(ref="chart",:id="id")\n</template>\n \n<script>\n// 引入基本模板\nimport echarts from "echarts/lib/echarts";\nimport "echarts/lib/chart/line";\nimport "echarts/lib/chart/bar";\nimport "echarts/lib/chart/radar";\n// 引入提示框和图例组件\nimport "echarts/lib/component/tooltip";\nimport "echarts/lib/component/legend";\n\nexport default {\n  name: "line-chart",\n  props: {\n    option: {\n      type: Object\n    },\n    id: {\n      type: String\n    },\n    flag: {\n      type: Boolean\n    }\n  },\n  data() {\n    return {\n      chartObj: null\n    };\n  },\n  mounted() {\n    console.log(this.flag);\n  },\n  methods: {\n    init() {\n      setTimeout(() => {\n        this.chartObj = echarts.init(document.getElementById(this.id));\n        this.chartObj.setOption(this.option);\n      }, 500);\n    }\n  },\n  watch: {\n    flag(flag) {\n      if (flag == true) {\n        this.init();\n      }\n    }\n  }\n};\n<\/script>\n<style scoped>\n.chart {\n  height: 100%;\n  width: 100%;\n}\n</style>']}])},660:function(e,t,a){"use strict";var n=a(298);a.n(n).a},661:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,".red[data-v-de870e08]{color:red}.green[data-v-de870e08]{color:green}.blue[data-v-de870e08]{color:blue}.black[data-v-de870e08]{color:#000}.white[data-v-de870e08]{color:#fff}.yellow[data-v-de870e08]{color:#ff0}.gold[data-v-de870e08]{color:gold}.purple[data-v-de870e08]{color:purple}.cyan[data-v-de870e08]{color:cyan}.orange[data-v-de870e08]{color:orange}.orangered[data-v-de870e08]{color:#ff4500}.pink[data-v-de870e08]{color:pink}.violet[data-v-de870e08]{color:violet}.yellowgreen[data-v-de870e08]{color:#9acd32}.tomato[data-v-de870e08]{color:tomato}.tan[data-v-de870e08]{color:tan}.snow[data-v-de870e08]{color:snow}.gray[data-v-de870e08]{color:gray}.silver[data-v-de870e08]{color:silver}.skyblue[data-v-de870e08]{color:skyblue}.navy[data-v-de870e08]{color:navy}.brown[data-v-de870e08]{color:brown}.beige[data-v-de870e08]{color:beige}.magenta[data-v-de870e08]{color:#f0f}.c0[data-v-de870e08]{color:#000}.c1[data-v-de870e08]{color:#111}.c2[data-v-de870e08]{color:#222}.c3[data-v-de870e08]{color:#333}.c4[data-v-de870e08]{color:#444}.c5[data-v-de870e08]{color:#555}.c6[data-v-de870e08]{color:#666}.c7[data-v-de870e08]{color:#777}.c8[data-v-de870e08]{color:#888}.c9[data-v-de870e08]{color:#999}.c10[data-v-de870e08]{color:#aaa}.c11[data-v-de870e08]{color:#bbb}.c12[data-v-de870e08]{color:#ccc}.c13[data-v-de870e08]{color:#ddd}.c14[data-v-de870e08]{color:#eee}.c15[data-v-de870e08]{color:#fff}.porange[data-v-de870e08]{color:#fc9}.pgold[data-v-de870e08]{color:#ffc}.pazure[data-v-de870e08]{color:#cff}.pdgreen[data-v-de870e08]{color:#9cc}.ppurple[data-v-de870e08]{color:#ccf}.pblue[data-v-de870e08]{color:#09c}.plblue[data-v-de870e08]{color:#9cf}.pdblue[data-v-de870e08]{color:#369}.pgreen[data-v-de870e08]{color:#9c3}.userinfo__wrapper[data-v-de870e08]{padding:0.15rem;text-align:left;background:#fff}.userinfo__wrapper .userinfo__section[data-v-de870e08]{min-height:100px;padding:0.15rem 0}.userinfo__wrapper .userinfo__section[data-v-de870e08]:not(:last-child){border-bottom:1px solid #ddd}.userinfo__wrapper .userinfo__section:not(:last-child) .userinfo__avatart__wrapper img[data-v-de870e08]{height:200px;width:200px;border-radius:100px;border:1px solid #eee}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist[data-v-de870e08]{text-align:left}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist li[data-v-de870e08]{margin-top:0.15rem;font-size:20px}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist li span[data-v-de870e08]{display:inline-block}.userinfo__wrapper .userinfo__section:not(:last-child) ul.infolist li span[data-v-de870e08]:first-child{width:100px}.userinfo__wrapper .userinfo__section .problem__links[data-v-de870e08]{font-size:24px;word-spacing:16px}\n",""])},702:function(e,t,a){"use strict";a.r(t);a(10),a(7),a(11);var n=a(30);function r(e,t,a,n,r,o,i){try{var s=e[o](i),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(n,r)}var o={name:"",data:function(){return{user:null,chartOption:{color:["#ffdf25","#36a9ce"],tooltip:{},legend:{data:["累计通过","累计提交"]},xAxis:{type:"time"},yAxis:{},series:[{name:"累计通过",type:"line",data:[]},{name:"累计提交",type:"line",data:[]}]},renderFlag:!1}},components:{LineChart:a(230).a},mounted:function(){this.init()},methods:{init:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,a,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.prev=1,a=t.$route.params.id,e.next=5,Object(n.e)(a);case 5:r=e.sent,o=r.data,t.user=o.userinfo,t.renderFlag=!0,t.chartOption.series[0].data=t.user.recent_solved_statistic,t.chartOption.series[1].data=t.user.recent_submit_statistic,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1);case 16:case"end":return e.stop()}},e,this,[[1,13]])}),function(){var t=this,a=arguments;return new Promise(function(n,o){var i=e.apply(t,a);function s(e){r(i,n,o,s,c,"next",e)}function c(e){r(i,n,o,s,c,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}(),jumpToSolved:function(){this.$store.dispatch("setSolutionFilter",{result:4,nick:this.user.nick}),this.$router.push({name:"status",params:{id:this.$route.params.id}})},jumpToSubmit:function(){this.$store.dispatch("setSolutionFilter",{nick:this.user.nick}),this.$router.push({name:"status",params:{id:this.$route.params.id}})}}},i=(a(660),a(2)),s=Object(i.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("title",[e._v(e._s(e.user?e.user.nick+"的个人空间":""))]),a("div",{staticClass:"content__main"},[a("div",{staticClass:"userinfo__wrapper"},[a("div",{staticClass:"userinfo__section"},[a("h2",[e._v("个人信息")]),a("el-row",{staticClass:"tac"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"userinfo__avatart__wrapper"},[a("img",{attrs:{src:e.imgUrl(e.user?e.user.avatar:"")}})])]),a("el-col",{attrs:{span:12}},[a("ul",{staticClass:"infolist"},[a("li",[a("span",[e._v("昵称 ")]),e.user?a("span",[e._v(e._s(e.user.nick))]):e._e()]),a("li",[a("span",[e._v("解决 ")]),e.user?a("a",{on:{click:e.jumpToSolved}},[e._v(e._s(e.user.solved))]):e._e()]),a("li",[a("span",[e._v("提交 ")]),e.user?a("a",{on:{click:e.jumpToSubmit}},[e._v(e._s(e.user.submit))]):e._e()]),a("li",[a("span",[e._v("排名 ")]),e.user?a("span",[e._v(e._s(e.user.rank))]):e._e()]),a("li",[a("span",[e._v("注册时间 ")]),e.user?a("span",[e._v(e._s(e.user.created_at))]):e._e()])])])],1)],1),a("div",{staticClass:"userinfo__section"},[a("h2",[e._v("近期提交情况")]),a("line-chart",{staticStyle:{width:"100%",height:"500px"},attrs:{option:e.chartOption,flag:e.renderFlag,id:"chart"}})],1),a("div",{staticClass:"userinfo__section"},[a("h2",[e._v("已解决的问题")]),e.user?a("div",{staticClass:"problem__links"},[e._l(e.user.solved_problem_list,function(t,n){return[a("router-link",{attrs:{to:{name:"problem",params:{id:t}}}},[e._v(e._s(t)+" ")])]})],2):e._e()]),a("div",{staticClass:"userinfo__section"},[a("h2",[e._v("未解决的问题")]),e.user?a("div",{staticClass:"problem__links"},[e._l(e.user.unsolved_problem_list,function(t,n){return[a("router-link",{attrs:{to:{name:"problem",params:{id:t}}}},[e._v(e._s(t)+" ")])]})],2):e._e()])])])])},[],!1,null,"de870e08",null);t.default=s.exports},92:function(e,t,a){var n=a(320);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(14)(n,r);n.locals&&(e.exports=n.locals)}}]);