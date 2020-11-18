<template>
  <el-form ref="ruleForm" :rules="rules" :model="ruleForm" class="financial-status">
    <el-form-item label="财务报告" prop="report">
      <!-- <el-input v-model="ruleForm.report" placeholder="请输入财务报告"></el-input> -->
    </el-form-item>
    <el-form-item label="年份" prop="nianfen1">
      <el-input v-model="ruleForm.nianfen1" placeholder="请输入年份" disabled />
    </el-form-item>
    <el-form-item label="对应年份营业额" prop="yingyee1">
      <el-input v-model="ruleForm.yingyee1" type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10" />
      <span>万元</span>
    </el-form-item>
    <el-form-item label="年份" prop="nianfen2">
      <el-input v-model="ruleForm.nianfen2" placeholder="请输入年份" disabled />
    </el-form-item>
    <el-form-item label="对应年份营业额" prop="yingyee2">
      <el-input v-model="ruleForm.yingyee2" type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10" />
      <span>万元</span>
    </el-form-item>
    <el-form-item label="年份" prop="nianfen3">
      <el-input v-model="ruleForm.nianfen3" placeholder="请输入年份" disabled />
    </el-form-item>
    <el-form-item label="对应年份营业额" prop="yingyee3">
      <el-input v-model="ruleForm.yingyee3" type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10" />
      <span>万元</span>
    </el-form-item>
    <p>前三合作方</p>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="nianfen"
        label=""
        width="180"
      />
      <el-table-column
        label="姓名"
        width="180"
      />
      <el-table-column
        label="地址"
      />
    </el-table>
    <el-form-item>
      <el-button @click="onCancle('ruleForm')">取消</el-button>
      <el-button type="primary" @click="onSave('ruleForm')">保存</el-button>
      <!-- <el-button @click="onNext" type="primary">下一步</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script>
import mixins from '../mixins/index'
export default {
  mixins,
  props: {},
  data() {
    return {
      tableData: [],
      ruleForm: {
        report: '',
        nianfen1: '',
        yingyee1: '',
        nianfen2: '',
        yingyee2: '',
        nianfen3: '',
        yingyee3: ''
      },
      rules: {
        report: [
          { required: true, message: '请上传财务报告', trigger: 'blur' }
        ],
        nianfen1: [
          { required: true, message: '请输入年份', trigger: 'blur' }
        ],
        yingyee1: [
          { required: true, message: '请输入营业额', trigger: 'blur' }
        ],
        nianfen2: [
          { required: true, message: '请输入年份', trigger: 'blur' }
        ],
        yingyee2: [
          { required: true, message: '请输入营业额', trigger: 'blur' }
        ],
        nianfen3: [
          { required: true, message: '请输入年份', trigger: 'blur' }
        ],
        yingyee3: [
          { required: true, message: '请输入营业额', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    const cur = new Date()
    console.log('cur: ', cur.getFullYear())
    this.ruleForm.nianfen1 = cur.getFullYear()
    this.ruleForm.nianfen2 = this.ruleForm.nianfen1 - 1
    this.ruleForm.nianfen3 = this.ruleForm.nianfen1 - 2
    this.tableData.push({
      nianfen: this.ruleForm.nianfen2
    }, {
      nianfen: this.ruleForm.nianfen1
    })
  },
  methods: {
    // 预留
    setData(data) {},
    getData() {
      const res = {}
      return res
    },
    onSave(formName) {
      console.log('onSave: ', this.ruleForm)
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      this.$emit('save', 4)
    }
  }
}
</script>
<style lang="scss" scoped>
  ::v-deep .el-input input::-webkit-outer-spin-button,
  ::v-deep .el-input input::-webkit-inner-spin-button { -webkit-appearance: none; }
  ::v-deep .el-input input[type="number"]{ -moz-appearance: textfield; }
</style>
