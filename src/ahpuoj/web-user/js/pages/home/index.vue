<template lang="pug">
  .content
    .content__main
      .one-main
        p(class="welcome__title") 欢迎使用AHPUOJ
        .carousel__wrapper
          el-carousel(trigger="click",height="400px", indicator-position="outside")
            el-carousel-item
              img(src="@/web-common/assets/images/acm.jpg")
        template(v-for="item in newList")
          .new__box
            .new__title {{item.title}}
            .new__content(v-html="item.content")
            .new__time
              span.text-muted {{item.updated_at}}
        el-pagination.tal.mt20(@current-change="fetchData",:current-page.sync="currentPage",background,
        :page-size="perpage",:layout="'prev, pager, next'+(screenWidth>960?',jumper':'')",:total="total",:small="!(screenWidth>960)")
</template>

<script>
import {getNewList} from '@/web-user/js/api/nologin.js';
export default {
  props: {
    screenWidth: {
      type: Number,
      default: 1920
    }
  },
  data() {
    return {
      currentPage: 1,
      perpage: 5,
      newList: [],
      total: 0
    };
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const self = this;
      try {
        let res = await getNewList(self.currentPage, self.perpage);
        console.log(res);
        let data = res.data;
        self.newList = data.data;
        self.total = data.total;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome__title {
  padding-top: 0.2rem;
  font-size: 0.4rem;
}
.carousel__wrapper {
  padding: 0 2rem;
  .el-carousel {
    overflow: hidden;
  }
}
.new__box {
  position: relative;
  padding: 0.3rem 0.5rem;
  border-top: 1px solid $--color-level13;
  &:last-child {
    border-bottom: 1px solid $--color-level13;
  }
  .new__title {
    text-align: left;
    font-size: 0.3rem;
    color: $--title-color;
  }
  .new__content {
    min-height: 200px;
    text-align: left;
    font-size: 0.24rem;
  }
  .new__time {
    font-size: 0.14rem;
    position: absolute;
    bottom: 5px;
    right: 0.5rem;
  }
}
</style>