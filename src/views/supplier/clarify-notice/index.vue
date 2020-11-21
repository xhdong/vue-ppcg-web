<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="澄清公告" name="clarify-notice">
        <el-row class="form-wrapper">
          <el-form ref="pageForm" :inline="true" label-width="90px" size="small" :model="pageForm">
            <el-row class="form-group">
              <el-form-item label="澄清主题：" prop="theme">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="澄清主题" />
              </el-form-item>
              <el-form-item label="招标工程：" prop="publishDate">
                <el-select v-model="pageForm.type" class="form-control" clearable placeholder="招标工程">
                  <el-option
                    v-for="item in replyStatusOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="回复状态：" prop="type">
                <el-select v-model="pageForm.type" class="form-control" clearable placeholder="回复状态">
                  <el-option
                    v-for="item in replyStatusOptions"
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
        <el-row class="table-wrapper">
          <el-row class="header-group">
            <span class="txt-title">公告列表</span>
          </el-row>
          <el-table
            v-loading="loading"
            :data="tableData"
            border
          >
            <el-table-column type="index" />
            <el-table-column
              v-for="(col,idx) in columns"
              :key="idx"
              :prop="col.prop"
              :label="col.label"
              :formatter="col.formatter"
            >
              <template slot-scope="scope">
                <template v-if="col.prop === 'operate'">
                  <el-link :href="col.href" type="primary" target="_blank" v-html="col.formatter(scope.row)" />
                </template>
                <template v-else>
                  <span v-html="col.formatter(scope.row)" />
                </template>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <el-row class="page-wrapper">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
          />
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import { replyStatusOptions } from '@/utils/dict'
export default {
  name: 'ClarifyNotice',
  data() {
    return {
      activeName: 'clarify-notice',
      pageForm: {
        theme: '',
        type: '',
        date: '',
        status: ''
      },
      replyStatusOptions,
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
          label: '公告标题',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.type
          }
        },
        {
          label: '发布日期',
          prop: 'theme',
          href: '',
          width: '',
          formatter: (row) => {
            return row.type
          }
        },
        {
          label: '操作',
          prop: 'operate',
          href: '#/supplier/notice-detail',
          formatter: () => {
            return '查看'
          }
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
    handleNavigateToDetail(row) {
      console.log(row)
      // this.$router.push({ path: `${row}` })
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
