<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="修改密码" name="change-password">
        <el-row class="form-wrapper">
          <el-form :model="pageForm" size="small" :rules="rules" label-width="120px">
            <el-row class="form-group">
              <el-form-item label="原密码：" prop="name">
                <el-input v-model="pageForm.name" placeholder="请输入姓名" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="新密码：" prop="position">
                <el-input v-model="pageForm.position" placeholder="请输入职务" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="确认密码：" prop="mobile">
                <el-input v-model="pageForm.mobile" placeholder="请输入手机号码" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="手机号码：" prop="mobile">
                <span class="txt-value">xxxx</span>
              </el-form-item>
              <el-form-item label="手机验证码：" prop="auditCode">
                <el-input v-model="pageForm.auditCode" placeholder="请输入验证码" clearable class="form-control">
                  <el-button slot="append">获取验证码</el-button>
                </el-input>
              </el-form-item>
            </el-row>
            <el-row class="btn-group">
              <el-button type="default" size="small">返回</el-button>
              <el-button type="primary" size="small">提交</el-button>
            </el-row>
          </el-form>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: 'ChangePassword',
  data() {
    return {
      activeName: 'change-password',
      pageForm: {
        name: '',
        position: '',
        mobile: '',
        email: '',
        auditCode: '',
        imageUrl: ''
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请输入职位', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        auditCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}

</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;
  }
  .form-wrapper {
    .form-group {
      ::v-deep .el-form-item__label {

      }
      ::v-deep .el-form-item__content {
        width: 500px;
        .select-group {
          display: flex;
          .select-item {
            margin-left: 10px;
            flex: 1;
            &:first-child {
              margin-left: 0;
            }
          }
        }
        .form-control {
          width: 100%;
        }
      }
    }

    .btn-group {
      padding-left: 120px;
    }
  }
</style>
