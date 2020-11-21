<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="消息中心" name="message">
        <!-- 表单 start -->
        <el-row class="form-wrapper">
          <el-form ref="pageForm" :inline="true" label-width="90px" size="small" :model="pageForm">
            <el-row class="form-group">
              <el-form-item label="主题：" prop="theme">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="主题" />
              </el-form-item>
              <el-form-item label="消息类型：" prop="type">
                <el-select v-model="pageForm.type" class="form-control" clearable placeholder="消息类型">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="接收时间：" prop="date">
                <el-date-picker
                  v-model="pageForm.date"
                  type="datetimerange"
                  class="form-control"
                  clearable
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </el-form-item>
              <el-form-item label="阅读状态：" prop="status">
                <el-select v-model="pageForm.status" class="form-control" clearable placeholder="阅读状态">
                  <el-option
                    v-for="item in readStatusOptions"
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
              :width="col.width"
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
import { readStatusOptions } from '@/utils/dict'
export default {
  name: 'Messages',
  data() {
    return {
      activeName: 'message',
      pageForm: {
        theme: '',
        type: '',
        date: '',
        status: ''
      },
      loading: false,
      tableData: [],
      readStatusOptions,
      columns: [
        {
          label: '类型',
          prop: 'type',
          width: '',
          href: '',
          formatter: (row) => {
            return row.type
          }
        },
        {
          label: '主题',
          prop: 'theme',
          width: '400',
          href: '#/supplier/message-detail',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '日期',
          prop: 'date',
          width: '',
          href: '',
          formatter: (row) => {
            return row.date
          }
        },
        {
          label: '状态',
          prop: 'status',
          width: '',
          href: '',
          formatter: (row) => {
            return row.status === 1 ? '已读' : '未读'
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
          type: '资料管理',
          theme: '您已成功注册富力集团招投标平台客商账号。请尽快完善公司资料并提交审核。',
          date: '2020-11-19',
          status: '未读'
        }
      ]
      this.loading = false
    },
    onSubmit() {
    },
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
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
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
