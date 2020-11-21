<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="授权文件记录" name="trust-instrument">
        <!-- 列表 start -->
        <el-row class="table-wrapper">
          <el-row class="header-group">
            <span class="txt-title">授权文件记录</span>
          </el-row>
          <el-table
            v-loading="loading"
            :data="tableData"
            border
          >
            <el-table-column
              v-for="(col,idx) in columns"
              :key="idx"
              :prop="col.prop"
              :label="col.label"
              :formatter="col.formatter"
            />
          </el-table>
        </el-row>
        <!-- 列表 end -->

        <!-- 分页 start -->
        <el-row class="page-wrapper">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-row>
        <!-- 分页 end -->
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: 'TrustInstrument',
  data() {
    return {
      activeName: 'trust-instrument',
      loading: false,
      tableData: [],
      columns: [
        {
          label: '日期',
          prop: 'date',
          href: '',
          width: '',
          formatter: (row) => {
            return row.date
          }
        },
        {
          label: '用户',
          prop: 'status',
          href: '',
          width: '',
          formatter: (row) => {
            return row.status
          }
        },
        {
          label: '授权文件',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '用途',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.theme
          }
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
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
    handleNavigateToDetail(row) {
      console.log(row)
      // this.$router.push({ path: `${row}` })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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
      .header-group {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .txt-title {
          line-height: 20px;
          font-size: 14px;
          color: #313303;
          padding: 0 10px;
          border-left: 3px solid #409EFF;
          flex: 1;
        }
      }
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
