<template>
  <el-row class="app-container">
    <el-row class="header-wrapper">
      <span class="txt-title">报名登记表</span>
    </el-row>
    <el-row class="form-wrapper">
      <el-form :model="pageForm" :rules="rules" size="small">
        <el-row class="form-group">
          <el-row class="input-group">
            <el-form-item label="" prop="name">
              <el-row
                v-for="(item, index) in pageForm.list"
                :key="index"
                class="checkbox-wrapper"
              >
                <el-checkbox v-model="item.name" />
              </el-row>
            </el-form-item>
          </el-row>
          <el-row class="input-group">
            <el-form-item label="参与标段" prop="name">
              <el-input
                v-for="(item, index) in pageForm.list"
                :key="index"
                v-model="item.name"
              />
            </el-form-item>
          </el-row>
          <el-row class="input-group">
            <el-form-item label="联系人" prop="contactName">
              <el-input
                v-for="(item, index) in pageForm.list"
                :key="index"
                v-model="item.contactName"
              />
            </el-form-item>
          </el-row>
          <el-row class="input-group">
            <el-form-item label="联系人职位" prop="contactPosition">
              <el-input
                v-for="(item, index) in pageForm.list"
                :key="index"
                v-model="item.contactPosition"
              />
            </el-form-item>
          </el-row>
          <el-row class="input-group">
            <el-form-item label="联系人号码" prop="contactPhone">
              <el-input
                v-for="(item, index) in pageForm.list"
                :key="index"
                v-model="item.contactPhone"
              />
            </el-form-item>
          </el-row>
          <el-row class="input-group">
            <el-form-item label="联系人授权委托书">
              <template v-for="(item, index) in pageForm.list">
                <el-upload
                  :key="index"
                  class="upload-wrapper"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="item.fileList"
                >
                  <el-button size="small" icon="el-icon-upload" type="primary">上传</el-button>
                </el-upload>
              </template>
            </el-form-item>
          </el-row>
        </el-row>
        <el-row class="btn-group">
          <el-button type="default" size="small" class="btn-cancel">取消</el-button>
          <el-button type="primary" size="small" class="btn-comfirm">报名</el-button>
        </el-row>
      </el-form>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'OnlineRegistration',
  data() {
    return {
      loading: false,
      tableData: [],
      multipleSelection: [],
      pageForm: {
        list: [
          {
            name: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            src: ''
          },
          {
            name: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            src: ''
          },
          {
            name: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            src: ''
          }
        ]
      },
      rules: {
        contactName: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        contactPosition: [
          { required: true, message: '请输入联系人职位', trigger: 'blur' }
        ],
        contactPhone: [
          { required: true, message: '请输入联系人电话', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getMessageList()
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getMessageList() {
      this.loading = true
      this.tableData = [
        {
          name: '报名标段',
          theme: '【通知】母子关系绑定通知',
          date: '2020-11-16',
          status: '未读'
        }
      ]
      this.loading = false
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;

    .header-wrapper {
      text-align: center;
      position: relative;

      .txt-title {
        display: block;
        line-height: 30px;
        padding: 20px 0;
        color: #313303;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        right: 0;
        bottom: 0;
        background: -webkit-repeating-linear-gradient(
            0deg, /* 倾斜度*/
            #009cff,
            #009cff 50px,
            #ffcb21 50px,
            #ffcb21 100px
        );
      }
    }
    .form-wrapper {
      margin: 20px 0;
      .form-group {
        display: flex;
        .input-group {
          padding: 0 10px;
          &:first-child {
            margin-top: 32px;
          }
          .checkbox-wrapper {
            min-height: 30px;
            margin-bottom: 10px;
          }
          ::v-deep .el-form-item__label {
            text-align: center;
            display: block;
            white-space: nowrap;
            float: none;
          }
          ::v-deep .el-form-item__content {
            .el-input {
              margin-bottom: 10px;
            }
          }
          .upload-wrapper {
            margin-bottom: 10px;
            text-align: center;
          }
        }
      }
      .btn-group {
        text-align: right;
        padding:  0 35px;
      }
    }
  }
</style>
