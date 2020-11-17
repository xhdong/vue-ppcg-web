<template>
  <el-form :rules="rules" :model="ruleForm" ref="ruleForm" class="financial-status">
    <el-form-item label="财务报告" prop="report">
    </el-form-item>
    <el-form-item label="年份" prop="nianfen1">
      <el-input v-model="ruleForm.nianfen1" placeholder="请输入年份" disabled></el-input>
    </el-form-item>
    <el-form-item label="对应年份营业额" prop="yingyee1">
      <el-input v-model="ruleForm.yingyee1" type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10"></el-input>
      <span class="unit">万元</span>
    </el-form-item>
    <el-form-item label="年份" prop="nianfen2">
      <el-input v-model="ruleForm.nianfen2" placeholder="请输入年份" disabled></el-input>
    </el-form-item>
    <el-form-item label="对应年份营业额" prop="yingyee2">
      <el-input v-model="ruleForm.yingyee2" type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10"></el-input>
      <span class="unit">万元</span>
    </el-form-item>
    <el-form-item label="年份" prop="nianfen3">
      <el-input v-model="ruleForm.nianfen3" placeholder="请输入年份" disabled></el-input>
    </el-form-item>
    <el-form-item label="对应年份营业额" prop="yingyee3">
      <el-input v-model="ruleForm.yingyee3" type="number" placeholder="请输入对应年份营业额" min="0" precision="2" :maxlength="10"></el-input>
      <span class="unit">万元</span>
    </el-form-item>
    <p>前三合作方</p>
    <el-form-item label="2019" label-width="80px" class="extra">
      <div class="grip-wrap">
        <span class="title">合作方名称</span>
        <span class="title">营业额</span>
        <span class="title">占比</span>
        <el-input v-model="ruleForm.yingyee3" placeholder="合作方名称" min="0" precision="2" :maxlength="10" class="cooperate"></el-input>
        <div><el-input v-model="ruleForm.yingyee3" type="number" placeholder="营业额" min="0" precision="2" :maxlength="10"></el-input><span class="unit">万元</span></div>
        <div><el-input v-model="ruleForm.yingyee3" placeholder="占比" min="0" precision="2" :maxlength="10"></el-input><span class="unit">%</span></div>
        <el-input v-model="ruleForm.yingyee3" placeholder="合作方名称" min="0" precision="2" :maxlength="10" class="cooperate"></el-input>
        <div><el-input v-model="ruleForm.yingyee3" type="number" placeholder="营业额" min="0" precision="2" :maxlength="10"></el-input><span class="unit">万元</span></div>
        <div><el-input v-model="ruleForm.yingyee3" placeholder="占比" min="0" precision="2" :maxlength="10"></el-input><span class="unit">%</span></div>
        <el-input v-model="ruleForm.yingyee3" placeholder="合作方名称" min="0" precision="2" :maxlength="10" class="cooperate"></el-input>
        <div><el-input v-model="ruleForm.yingyee3" type="number" placeholder="营业额" min="0" precision="2" :maxlength="10"></el-input><span class="unit">万元</span></div>
        <div><el-input v-model="ruleForm.yingyee3" placeholder="占比" min="0" precision="2" :maxlength="10"></el-input><span class="unit">%</span></div>
      </div>
    </el-form-item>
    <el-form-item label="2020" label-width="80px" class="extra">
      <div class="grip-wrap">
        <span class="title">合作方名称</span>
        <span class="title">营业额</span>
        <span class="title">占比</span>
        <el-input v-model="ruleForm.yingyee3" placeholder="合作方名称" min="0" precision="2" :maxlength="10" class="cooperate"></el-input>
        <div><el-input v-model="ruleForm.yingyee3" type="number" placeholder="营业额" min="0" precision="2" :maxlength="10"></el-input><span class="unit">万元</span></div>
        <div><el-input v-model="ruleForm.yingyee3" placeholder="占比" min="0" precision="2" :maxlength="10"></el-input><span class="unit">%</span></div>
        <el-input v-model="ruleForm.yingyee3" placeholder="合作方名称" min="0" precision="2" :maxlength="10" class="cooperate"></el-input>
        <div><el-input v-model="ruleForm.yingyee3" type="number" placeholder="营业额" min="0" precision="2" :maxlength="10"></el-input><span class="unit">万元</span></div>
        <div><el-input v-model="ruleForm.yingyee3" placeholder="占比" min="0" precision="2" :maxlength="10"></el-input><span class="unit">%</span></div>
        <el-input v-model="ruleForm.yingyee3" placeholder="合作方名称" min="0" precision="2" :maxlength="10" class="cooperate"></el-input>
        <div><el-input v-model="ruleForm.yingyee3" type="number" placeholder="营业额" min="0" precision="2" :maxlength="10"></el-input><span class="unit">万元</span></div>
        <div><el-input v-model="ruleForm.yingyee3" placeholder="占比" min="0" precision="2" :maxlength="10"></el-input><span class="unit">%</span></div>
      </div>
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
        report: '',
        nianfen1: '',
        yingyee1: '',
        nianfen2: '',
        yingyee2: '',
        nianfen3: '',
        yingyee3: '',
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
        ],
      }
    }
  },
  mixins,
  mounted () {
    const cur = new Date()
    console.log('cur: ', cur.getFullYear())
    this.ruleForm.nianfen1 = cur.getFullYear()
    this.ruleForm.nianfen2 = this.ruleForm.nianfen1 - 1
    this.ruleForm.nianfen3 = this.ruleForm.nianfen1 - 2
    this.tableData.push({
      nianfen: this.ruleForm.nianfen2,
    }, {
      nianfen: this.ruleForm.nianfen1
    })
  },
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
      this.$emit('save', 4)
    }
  }
}
</script>
<style lang="scss" scoped>
  ::v-deep .el-input input::-webkit-outer-spin-button,
  ::v-deep .el-input input::-webkit-inner-spin-button { -webkit-appearance: none; }
  ::v-deep .el-input input[type="number"]{ -moz-appearance: textfield; }
  .grip-wrap {
    display: grid;
    align-items: center;
    line-height: 20px;
    grid-template-columns: 200px 140px 140px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .title {
      text-align: center;
    }
  }
  .el-form .el-form-item.extra {
    ::v-deep .el-form-item__label {
      flex: none;
      line-height: 190px;
    }
    ::v-deep .el-form-item__content {
      flex: none;
      .el-input {
        width: 100px;
        &.cooperate {
          width: 200px;
        }
      }
    }
  }
  .unit {
    padding-left: 5px;
  }
</style>
