<template>
  <div class="register-page">
    <div class="banner-wrap">
      <div class="banner" />
    </div>
    <div class="content-wrap">
      <div class="content">
        <div class="step">
          <el-steps :active="activeIndex" align-center>
            <el-step title="基本信息" />
            <el-step title="经办人信息" />
            <el-step title="财务状况" />
            <el-step title="公司管理人员架构" />
            <el-step title="其他信息" />
            <el-step title="材料服务维护" />
          </el-steps>
        </div>
        <div class="tip">温馨提示：</div>
      </div>
      <div class="step-wrap">
        <div v-if="activeIndex == 1" class="step-1">
          <Step1 ref="ruleForm1" @save="onSave"/>
        </div>
        <div v-if="activeIndex == 2" class="step-2">
          <Step2 ref="ruleForm1" @save="onSave"/>
        </div>
        <div v-if="activeIndex == 3" class="step-3">
          <Step3 ref="ruleForm3" @save="onSave"/>
        </div>
        <div v-if="activeIndex == 4" class="step-4">
          <Step4 ref="ruleForm4" @save="onSave"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'
import Step4 from './Components/Step4'
export default {
  name: 'Register',
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  data() {
    return {
      activeIndex: 1,
      login: true,
      activeName: 'first'
    }
  },
  methods: {
    onSave (activeIndex) {
      console.log('activeIndex: ', activeIndex)
      if (!activeIndex) return
      this.activeIndex = activeIndex
    }
  }
}
</script>
<style lang="scss" scoped>
  .register-page {
    .banner-wrap {
      width: 100%;
      height: 200px;
      .banner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 200px;
        background: red;
      }
    }
    .content-wrap {
      position: relative;
      z-index: 10;
      background: #ffffff;
      .content {
        margin-top: -135px;
        .step {
          padding-top: 28px;
          width: 100%;
          height: 116px;
          margin-bottom: 42px;
          border-bottom: 2px solid #cccccc;
          // >>> .el-step__icon {
          //   width: 30px;
          //   height: 30px;
          // }
        }
        .tip {
          margin: 20px auto 20px;
          padding: 0 40px;
          width: 670px;
          text-align: center;
          height: 46px;
          line-height: 46px;
          font-size: 16px;
          color: #d87168;
          border: 1px solid #f3e1b2;
          background-color: #ffc2bd;
        }
      }
      .step-wrap {
        width: 670px;
        margin: 0 auto;
      }
      .btm-tip {
        text-indent: 130px;
        font-size: 12px;
        color: #666666;
        text-align: center;
        i {
          color: #f00;
          font-style: normal;
          margin-right: 10px;
        }
      }
    }
  }
  ::v-deep .el-form .el-form-item {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    margin-bottom: 0px;
    .el-form-item__label {
      flex: 1;
      padding-right: 20px;
    }
    .el-form-item__content {
      flex: 2;
      margin-left: 0 !important;
      .el-input {
        width: 300px;
      }
    }
    &:last-child {
      text-align: center;
    }
  }

</style>
