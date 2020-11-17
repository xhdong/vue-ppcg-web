<template>
  <el-form :model="ruleForm" ref="ruleForm">
    <el-form-item label="职务">
      <el-input v-model="ruleForm.duty" placeholder="请输入职务"></el-input>
    </el-form-item>
    <el-form-item label="数量">
      <el-input type="number" v-model="ruleForm.num" placeholder="请输入数量" min="0"></el-input>
    </el-form-item>
    <el-form-item label="管理人员证书" prop="report">
    </el-form-item>
    <el-form-item>
      <el-button @click="onCancle('ruleForm')">取消</el-button>
      <el-button @click="onSave('ruleForm')" type="primary">保存</el-button>
      <!-- <el-button @click="onNext" type="primary">下一步</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script>
import mixins from '../mixins/index'
export default {
  props: {},
  data () {
    return {
      tableData: [],
      ruleForm: {
        dutyList: [],
        num: '',
        duty: ''
      },
    }
  },
  mixins,
  mounted () {},
  methods: {
    // 预留
    setData (data) {
      console.log('%c 🍠 data: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', data);
    },
    getData () {
      const res = {}
      return res
    },
    onSave(formName) {
      console.log('onSave: ', this.ruleForm, formName)
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      this.$emit('save', 5)
    }
  }
}
</script>
<style lang="scss" scoped>
  ::v-deep .el-input input::-webkit-outer-spin-button,
  ::v-deep .el-input input::-webkit-inner-spin-button { -webkit-appearance: none; }
  ::v-deep .el-input input[type="number"]{ -moz-appearance: textfield; }
</style>
