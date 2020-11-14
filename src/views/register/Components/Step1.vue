<template>
  <el-form :rules="rules" :model="ruleForm" ref="ruleForm">
    <el-form-item label="登录账号" prop="userName">
      <el-input v-model="ruleForm.userName" placeholder="请输入登录账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPass">
      <el-input v-model="ruleForm.confirmPass" type="password" placeholder="请输入确认密码"></el-input>
    </el-form-item>
    <el-form-item label="公司名称" prop="company">
      <el-input v-model="ruleForm.company" placeholder="请输入公司名称"></el-input>
    </el-form-item>
    <el-form-item label="公司地址" prop="address">
      <el-input v-model="ruleForm.address" placeholder="请输入公司地址"></el-input>
    </el-form-item>
    <el-form-item label="是有有工厂" prop="hasFactory">
      <el-radio-group v-model="ruleForm.hasFactory">
        <el-radio v-for="item in config.defaultRadio || []" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="公司网址" prop="web">
      <el-input v-model="ruleForm.web" placeholder="请输入公司网址"></el-input>
    </el-form-item>
    <el-form-item label="总经理电话" prop="managerT">
      <el-input v-model="ruleForm.managerT" placeholder="请输入总经理电话"></el-input>
    </el-form-item>
    <el-form-item label="公司注册资金" prop="registeredFunds">
      <el-input v-model="ruleForm.registeredFunds" placeholder="请输入公司注册资金"></el-input>
    </el-form-item>
    <el-form-item label="所有制属性" prop="ownership">
        <el-radio-group v-model="ruleForm.ownership">
        <el-radio v-for="item in config.ownerRadio || []" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="详细地址" prop="detailedAddress">
      <el-input v-model="ruleForm.detailedAddress" placeholder="请输入详细地址"></el-input>
    </el-form-item>
    <el-form-item label="公司电话" prop="companyTel">
      <el-input v-model="ruleForm.companyTel" placeholder="请输入公司电话"></el-input>
    </el-form-item>
    <el-form-item label="总经理姓名" prop="managerName">
      <el-input v-model="ruleForm.officePhone" placeholder="请输入总经理姓名"></el-input>
    </el-form-item>
    <el-form-item label="公司成立日期" prop="startTime">
      <el-date-picker
        v-model="ruleForm.startTime"
        align="right"
        type="date"
        placeholder="请选择公司成立日期"
        format="yyyy-MM-dd"
        value-format="timestamp"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <!-- <p class="btm-tip"><i>*</i>我们将审核结果发送到您的手机和电子邮箱，请正确输入。</p> -->
    <el-form-item>
      <el-button @click="onCancle('ruleForm')">取消</el-button>
      <el-button @click="onSave('ruleForm')" type="primary">保存</el-button>
      <!-- <el-button @click="onNext" type="primary">下一步</el-button> -->
    </el-form-item>
  </el-form>
</template>
<script>
import config from '@/config/input'
import mixins from '../mixins/index'
export default {
  props: {},
  data () {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登录账号'))
      } else if (!(/^(?![^a-zA-Z]+$)(?!\D+$)/).test(value)) {
        callback(new Error('登录账号需由字母和数字组合'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不能少于6位'))
      } else {
        callback()
      }
    }
    const validateCPass = (rule, value, callback) => {
      console.log(' value: ', value)
      console.log(' this.ruleForm.password', this.ruleForm.password)
      if (value.length < 6) {
        callback(new Error('再次输入的密码长度不能少于6位'))
      } else if (value !== this.ruleForm.password) {
        console.log('this.ruleForm.password: ', this.ruleForm.password)
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      config,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      ruleForm: {
        userName: '',
        password: '',
        confirmPass: '',
        company: '',
        address: '',
        hasFactory: 1,
        web: '',
        managerT: '',
        registeredFunds: '',
        ownership: 0,
        detailedAddress: '',
        companyTel: '',
        managerName: '',
        startTime: ''
      },
      rules: {
        userName: [
          { required: true, validator: validateName, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, validator: validateCPass, trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入公司地址', trigger: 'blur' }
        ],
        hasFactory: [
          { required: true, message: '请选择是否有工厂', trigger: 'blur' }
        ],
        web: [
          { required: true, message: '请输入公司网址', trigger: 'blur' }
        ],
        managerT: [
          { required: true, message: '请输入总经理电话', trigger: 'blur' }
        ],
        registeredFunds: [
          { required: true, message: '请输入公司注册资金', trigger: 'blur' }
        ],
        ownership: [
          { required: true, message: '请选择所有制属性', trigger: 'blur' }
        ],
        detailedAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        companyTel: [
          { required: true, message: '请输入公司电话', trigger: 'blur' }
        ],
        managerName: [
          { required: true, message: '请输入总经理姓名', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择公司成立日期', trigger: 'blur' }
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
      this.$emit('save', 2)
    }
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
