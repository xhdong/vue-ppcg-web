<template>
  <el-form :rules="rules" :model="ruleForm" ref="ruleForm">
    <el-form-item label="经办人姓名" prop="transactor">
      <el-input v-model="ruleForm.baitransactor" placeholder="请输入经办人姓名"></el-input>
    </el-form-item>
    <el-form-item label="经办人电话" prop="transactorT">
      <el-input v-model="ruleForm.transactorT" placeholder="请输入经办人电话"></el-input>
    </el-form-item>
    <el-form-item label="经办人邮箱" prop="transactorEmail">
      <el-input v-model="ruleForm.transactorEmail" placeholder="请输入经办人邮箱"></el-input>
    </el-form-item>
    <el-form-item label="经办人职务" prop="transactorP">
      <el-input v-model="ruleForm.transactorP" placeholder="请输入经办人职务"></el-input>
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
      ruleForm: {
        transactor: '',
        transactorT: '',
        transactorEmail: '',
        transactorP: ''
      },
      rules: {
        transactor: [
          { required: true, message: '请输入经办人姓名', trigger: 'blur' }
        ],
        transactorT: [
          { required: true, message: '请输入经办人电话', trigger: 'blur' }
        ],
        transactorEmail: [
          { required: true, message: '请输入经办人邮箱', trigger: 'blur' }
        ],
        transactorP: [
          { required: true, message: '请输入经办人职务', trigger: 'blur' }
        ]
      }
    }
  },
  mixins,
  methods: {
    // 预留
    setData (data) {},
    getData () {
      const res = {}
      return res
    },
    onSave(formName) {
      console.log('onSave: ', this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      this.$emit('save', 3)
    },
  }
}
</script>
<style lang="scss" scoped>
.home-page {
  .wrap {
    padding: 20px;
    margin-bottom: 20px;
    // width: 460px;
    border-radius: 4px;
    background: #ffffff;
    .wrap-title {
      margin-bottom: 5px;
      h3 {
        font-size: 16px;
      }
      span {
        display: block;
        color: #cccccc;
        font-size: 12px;
      }
    }
  }
}
</style>
