<template>
  <el-row class="app-container">
    <el-row class="header-wrapper">
      <span class="txt-title">报名登记表</span>
    </el-row>
    <el-row class="table-wrapper">
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" />
        <el-table-column label="报名标段">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
        <el-table-column label="联系人">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
        <el-table-column label="联系人职位">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
        <el-table-column label="联系人号码">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" size="small" clearable class="form-control" />
          </template>
        </el-table-column>
        <el-table-column label="联系人授权委托书" width="200px">
          <template slot-scope="scope">
            <el-upload
              class="upload-wrapper"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="scope.fileList"
            >
              <el-button size="small" icon="el-icon-upload" type="primary">上传</el-button>
            </el-upload>
            <el-button size="small" type="default" icon="el-icon-view">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="btn-group">
        <el-button type="default" size="small">取消</el-button>
        <el-button type="primary" size="small">报名</el-button>
      </el-row>
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
      multipleSelection: []
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

    .table-wrapper {
      margin: 15px 0;

      ::v-deep .form-control {
        text-align: center;
      }

      ::v-deep .upload-wrapper {
        display: inline-block;
        margin-right: 10px;
      }

      .btn-group {
        margin: 15px 0;
        text-align: center;
      }
    }
  }
</style>
