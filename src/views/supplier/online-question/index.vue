<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="在线提疑" name="online-question">
        <!-- 表单 start -->
        <el-row class="form-wrapper">
          <el-form ref="pageForm" :inline="true" label-width="90px" size="small" :model="pageForm">
            <el-row class="form-group">
              <el-form-item label="疑标问题：" prop="theme">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="疑标问题" />
              </el-form-item>
              <el-form-item label="招标工程：" prop="theme">
                <el-select v-model="pageForm.type" class="form-control" clearable placeholder="招标工程">
                  <el-option
                    v-for="item in questionTypeOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="类型：" prop="type">
                <el-select v-model="pageForm.type" class="form-control" clearable placeholder="类型">
                  <el-option
                    v-for="item in questionTypeOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="btn-group">
              <el-button type="primary" size="small" icon="el-icon-search" @click="onSubmit">查询</el-button>
              <el-button type="default" size="small" icon="el-icon-refresh" @click="onReset('pageForm')">重置</el-button>
            </el-row>
          </el-form>
        </el-row>
        <!-- 表单 end -->

        <!-- 列表 start -->
        <el-row class="table-wrapper">
          <el-row class="header-group">
            <span class="txt-title">疑问列表</span>
            <el-row class="btn-group">
              <el-button type="primary" size="small" icon="el-icon-plus" class="btn-add" @click="handleNavigateToAdd">新增</el-button>
            </el-row>
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
            >
              <template slot-scope="scope">
                <template v-if="col.prop === 'theme'">
                  <el-link :href="col.href" target="_blank" v-html="col.formatter(scope.row)" />
                </template>
                <template v-else>
                  <span v-html="col.formatter(scope.row)" />
                </template>
              </template>
            </el-table-column>
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
import { questionTypeOptions } from '@/utils/dict'
export default {
  name: 'OnlineQuestion',
  data() {
    return {
      activeName: 'online-question',
      pageForm: {
        theme: '',
        type: '',
        date: '',
        status: ''
      },
      questionTypeOptions,
      loading: false,
      tableData: [],
      columns: [
        {
          label: '招标工程',
          prop: 'type',
          href: '',
          width: '',
          formatter: (row) => {
            return row.type
          }
        },
        {
          label: '疑问标题',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '类型',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '提问人',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '操作',
          prop: 'operate',
          width: '',
          formatter: () => {
            return ''
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
    handleNavigateToAdd() {
      this.$router.push({ path: `/supplier/question-info` })
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
      margin-bottom: 15px;
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
