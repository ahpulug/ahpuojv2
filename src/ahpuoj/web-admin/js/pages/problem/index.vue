<template lang="pug">
.admin-content
  .content__breadcrumb
    el-breadcrumb(separator="/")
      el-breadcrumb-item(:to="{name:`home`}") 首页
      el-breadcrumb-item {{$route.meta.title}}
  .content__main
    el-form(:model="form", :rules="rules", ref="form", label-width="6em")
      el-form-item(label="标题", prop="title")
        el-input(placeholder="请输入标题",v-model="form.title",:autofocus="true")
      el-form-item(label="时间限制", prop="time_limit")
       el-input(placeholder="请输入内容" v-model.number="form.time_limit")
          template(slot="append") 秒
      el-form-item(label="内存限制", prop="memory_limit")
        el-input(placeholder="请输入内容" v-model.number="form.memory_limit")
          template(slot="append") 兆字节
      el-form-item(label="题目描述")
        tinymce-editor(v-model="form.description",:height="300")
      el-form-item(label="输入")
        tinymce-editor(v-model="form.input" :height="300")
      el-form-item(label="输出")
        tinymce-editor(v-model="form.output" :height="300")
      el-form-item(label="样例输入")
       el-input(type="textarea" :rows="10" resize="none" v-model="form.sample_input")
      el-form-item(label="样例输出")
       el-input(type="textarea" :rows="10" resize="none" v-model="form.sample_output")
      el-form-item(label="提示")
        tinymce-editor(v-model="form.hint" :height="300")
      el-form-item(label="难度")
          el-select(style="width:100%", v-model="form.level", default-first-option,placeholder="请选择题目难度")
            el-option(label="简单" :value="0")
            el-option(label="中等" :value="1")
            el-option(label="困难" :value="2")
      el-form-item(label="标签")
          el-select(style="width:100%",v-model="form.tags",multiple,filterable,allow-create,default-first-option,placeholder="请选择题目标签")
            el-option(v-for="tag in tags" :key="tag.id" :label="tag.name" :value="tag.id")
      el-form-item(class="fl")
        el-button(type="primary",@click="submit") 提交
</template>

<script>
import TinymceEditor from '@/web-common/components/tinymce_editor.vue';
import {
  createProblem,
  editProblem,
  getProblem
} from '@/web-admin/js/api/problem.js';
import {getAllTags} from '@/web-admin/js/api/tag.js';
export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      tags: [],
      form: {
        title: '',
        time_limit: 1,
        memory_limit: 128,
        description: '',
        input: '',
        output: '',
        sample_input: '',
        sample_output: '',
        hint: '',
        spj: 0,
        level: 1,
        tags: []
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入问题名称',
            trigger: 'blur'
          },
          {
            max: 20,
            message: '超出长度限制',
            trigger: 'blur'
          }
        ],
        time_limit: [
          {
            required: true,
            message: '请输入时间限制',
            trigger: 'blur'
          },
          {
            type: 'integer',
            min: 1,
            message: '清输入大于零的整数',
            trigger: 'blur'
          }
        ],
        memory_limit: [
          {
            required: true,
            message: '请输入时间限制',
            trigger: 'blur'
          },
          {
            type: 'integer',
            min: 1,
            message: '清输入大于零的整数',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == 'adminAddproblem' || to.name == 'adminEditProblem') {
        this.init();
      }
    }
  },
  async mounted() {
    this.init();
  },
  methods: {
    async init() {
      const self = this;
      let res = await getAllTags();
      self.tags = res.data.tags;
      if (self.$route.name == 'adminEditProblem') {
        try {
          let id = self.$route.params.id;
          let res = await getProblem(id);
          Object.assign(self.form, res.data.problem);
          self.form.tags = [];
          // 将tag对象数组中的id取出
          res.data.problem.tags.forEach((val, index, arr) => {
            self.form.tags.push(val.id);
          });
        } catch (err) {
          console.log(err);
          self.$router.replace({name: 'admin404Page'});
        }
      } else {
        Object.assign(self.form, {
          title: '',
          time_limit: 1,
          memory_limit: 128,
          description: '',
          input: '',
          output: '',
          sample_input: '',
          sample_output: '',
          hint: '',
          spj: 0,
          tags: []
        });
      }
    },
    async submit() {
      const self = this;
      self.$refs['form'].validate(async valid => {
        if (valid) {
          try {
            console.log(self.form);
            let res;
            if (self.$route.name == 'adminAddproblem') {
              res = await createProblem(self.form);
            } else {
              let id = self.$route.params.id;
              res = await editProblem(id, self.form);
            }
            self.$message({
              message: res.data.message,
              type: 'success'
            });
            self.$router.push({name: 'adminProblemList'});
          } catch (err) {
            self.$message({
              message: err.response.data.message,
              type: 'error'
            });
          }
        } else {
          self.$message({
            message: '表单必填项不能为空',
            type: 'error'
          });
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>