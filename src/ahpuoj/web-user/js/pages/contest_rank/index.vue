<template lang="pug">
  .content
    title {{contest?`竞赛排名 -- ${contest.name} - AHPUOJ`:''}}
    .content__main
      .one-main
        el-button.fr.mr10.mt10(type="primary",@click="exportExcel") 下载excel
        h1.content__panel__title {{contest?`竞赛排名 -- ${contest.name}`:""}}
        el-table(v-if="seeable",:data="tableData", style="width: 100%", class="dataTable",:cell-style="cellStyle",:row-style="rowStyle",id="ranktable")
          el-table-column(label="排名", type="index",min-width="40")
          el-table-column(label="用户名",min-width="160")
            template(slot-scope="scope")
                router-link(:to="{name:'userinfo',params:{id:scope.row.user.id}}")  {{scope.row.user.username}}
          el-table-column(label="昵称",min-width="160")
            template(slot-scope="scope")
                router-link(:to="{name:'userinfo',params:{id:scope.row.user.id}}")  {{scope.row.user.nick}}
          el-table-column( label="通过",min-width="70")
            template(slot-scope="scope")
             a.link(@click="jumpToContestStatus(scope.row)") {{scope.row.solved}}
          el-table-column(label="罚时", min-width="100")
            template(slot-scope="scope") {{secToTimeStr(scope.row.time)}}
          template(v-if="contest")
            template(v-for="count in contest.problem_count")
              el-table-column(min-width="100")
                template(slot="header" slot-scope="scope")
                  router-link(:to="{name:'contestProblem',params:{id:contest.id,num:scope.$index - problemColumnIOffset + 1}}") {{engNum(scope.$index - problemColumnIOffset + 1)}}
                template(slot-scope="scope") {{calcProblemStatus(scope.row,count)}}
        p(v-else) {{reason}}
</template>

<script>
import {getContestRankList} from '@/web-user/js/api/nologin.js';
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
export default {
  data() {
    return {
      problemColumnIOffset: 5,
      tableData: [],
      contest: null,
      timer: 0,
      seeable: false,
      reason: ''
    };
  },
  beforeDestroy() {
    // 关闭定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  mounted() {
    this.fetctContestRankList();
    // 每隔1分钟拉取一次数据
    this.timer = setInterval(() => {
      this.fetctContestRankList();
    }, 60000);
  },
  methods: {
    async fetctContestRankList() {
      const self = this;
      self.loading = true;
      try {
        let res = await getContestRankList(self.$route.params.id);
        console.log(res);
        let data = res.data;
        self.tableData = data.ranklist;
        self.seeable = data.seeable;
        self.reason = data.reason;
        self.contest = data.contest;
      } catch (err) {
        self.$router.replace({name: '404Page'});
        console.log(err);
      }
    },
    handleSizeChange(val) {
      this.fetchData();
    },
    calcProblemStatus(row, index) {
      let res = '';
      if (row.ac_time[index - 1] > 0) {
        res += this.secToTimeStr(row.ac_time[index - 1]);
      }
      if (row.wa_count[index - 1] > 0) {
        res += `(-${row.wa_count[index - 1]})`;
      }
      return res;
    },
    cellStyle({row, column, rowIndex, columnIndex}) {
      // 从题目的列开始计算 这一段算法照搬的hustoj的
      if (columnIndex >= this.problemColumnIOffset) {
        if (row.ac_time[columnIndex - this.problemColumnIOffset] > 0) {
          let aa =
            0x33 + row.wa_count[columnIndex - this.problemColumnIOffset] * 32;
          aa = aa > 0xaa ? 0xaa : aa;
          aa = aa.toString(16);
          let bgColor = aa + 'ff' + aa;
          return `background:#${bgColor};`;
        } else if (row.wa_count[columnIndex - this.problemColumnIOffset] > 0) {
          let aa =
            0xaa - row.wa_count[columnIndex - this.problemColumnIOffset] * 10;
          aa = aa > 16 ? aa : 16;
          aa = aa.toString(16);
          let bgColor = 'ff' + aa + aa;
          return `background:#${bgColor};`;
        }
      }
    },
    rowStyle({row, rowIndex}) {
      if (row.user.username == this.$store.getters.username) {
        return `background: #f0f9eb;`;
      }
    },
    jumpToContestStatus(row) {
      this.$store.dispatch('setSolutionFilter', {nick: row.user.nick});
      this.$router.push({
        name: 'contestStatus',
        params: {id: this.contest.id}
      });
    },
    exportExcel() {
      /* generate workbook object from table */
      let wb = XLSX.utils.table_to_book(document.querySelector('#ranktable'));
      /* get binary string as output */
      let wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], {type: 'application/octet-stream'}),
          `${this.contest.name}个人排名.xlsx`
        );
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout);
      }
      return wbout;
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  padding: 0 0.1rem;
}
</style>