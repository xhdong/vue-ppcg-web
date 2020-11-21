<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="账号管理" name="account-manage">
        <el-row class="form-wrapper">
          <el-form :model="pageForm" size="small" :rules="rules" label-width="120px">
            <el-row class="form-group">
              <el-row class="form-group__left">
                <el-form-item label="登录账号：" prop="name">
                  <span class="txt-value">xxxx</span>
                </el-form-item>
                <el-form-item label="账号状态：" prop="status">
                  <span class="txt-value">正常</span>
                </el-form-item>
                <el-form-item label="姓名：" prop="name">
                  <el-input v-model="pageForm.name" placeholder="请输入姓名" clearable class="form-control" />
                </el-form-item>
                <el-form-item label="职务：" prop="position">
                  <el-input v-model="pageForm.position" placeholder="请输入职务" clearable class="form-control" />
                </el-form-item>
                <el-form-item label="手机号码：" prop="mobile">
                  <el-input v-model="pageForm.mobile" placeholder="请输入手机号码" clearable class="form-control" />
                </el-form-item>
                <el-form-item label="电子邮箱：" prop="email">
                  <el-input v-model="pageForm.email" placeholder="请输入电子邮箱" clearable class="form-control" />
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
              <el-row class="form-group__right">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="pageForm.imageUrl" :src="pageForm.imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-row>
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
  name: 'AccountManage',
  data() {
    return {
      activeName: 'account-manage',
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
      display: flex;
      .form-group__left {
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
      .form-group__right {
        flex: 1;
        text-align: center;
        ::v-deep .avatar-uploader {
          padding: 100px 0;
          .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
              border-color: #409EFF;
            }
          }
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
          }
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }
        }
      }
    }

    .btn-group {
      padding-left: 120px;
    }
  }
</style>
