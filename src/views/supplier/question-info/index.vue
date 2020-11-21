<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="提问信息" name="online-question">
        <el-row class="form-wrapper">
          <el-form ref="pageForm" label-width="90px" size="small" :model="pageForm">
            <el-row class="form-group">
              <el-form-item label="招标工程：" prop="theme">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="招标工程" />
              </el-form-item>
              <el-form-item label="疑问标题：" prop="type">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="疑问标题" />
              </el-form-item>
              <el-form-item label="提问类型：" prop="type">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="提问类型" />
              </el-form-item>
              <el-form-item label="提问内容：" prop="type">
                <el-input v-model="pageForm.theme" type="textarea" class="form-control" clearable placeholder="提问内容" />
              </el-form-item>
              <el-form-item label="提问文档：" prop="type">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="pageForm.fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-row>
            <el-row class="btn-group">
              <el-button type="default" size="small" icon="el-icon-refresh" @click="handleNavigateToList()">返回</el-button>
              <el-button type="default" size="small" icon="el-icon-refresh" @click="onReset('pageForm')">重置</el-button>
              <el-button type="primary" size="small" icon="el-icon-search" @click="onSubmit">提交</el-button>
            </el-row>
          </el-form>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: 'OnlineQuestion',
  data() {
    return {
      activeName: 'online-question',
      pageForm: {
        theme: '',
        type: '',
        date: '',
        status: '',
        fileList: []
      },
      loading: false,
      tableData: [],
      columns: [
        {
          label: '招标工程',
          prop: 'type'
        },
        {
          label: '疑问标题',
          prop: 'theme'
        },
        {
          label: '类型',
          prop: 'theme'
        },
        {
          label: '提问人',
          prop: 'theme'
        },
        {
          label: '操作',
          prop: 'opt'
        }
      ]
    }
  },
  created() {
    this.getMessageList()
  },
  methods: {
    getMessageList() {
      this.loading = true
      this.tableData = [
        {
          type: '母子关系绑定',
          theme: '【通知】母子关系绑定通知',
          date: '2020-11-16',
          status: '未读',
          src: ''
        }
      ]
      this.loading = false
    },
    onSubmit() {
    },
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleNavigateToList() {
      this.$router.push({ path: `/supplier/online-question` })
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
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;

    .form-wrapper {
      .form-group {
        ::v-deep .el-form-item__content {
          width: 370px;

          .form-control {
            width: 100%;
          }
        }
      }

      .btn-group {
        padding-left: 90px;
      }
    }

    .table-wrapper {
      margin: 15px 0;
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
