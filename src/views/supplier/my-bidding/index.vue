<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="我的投标" name="bidding">
        <!-- 表单 start -->
        <el-row class="form-wrapper">
          <el-form ref="pageForm" :inline="true" label-width="120px" size="small" :model="pageForm">
            <el-row class="form-group">
              <el-form-item label="招标工程名称：" prop="theme">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="招标工程名称" />
              </el-form-item>
              <el-form-item label="招标分类：" prop="type">
                <el-select v-model="pageForm.type" class="form-control" clearable placeholder="招标分类">
                  <el-option
                    v-for="item in biddingCategoryOptions"
                    :key="item.key"
                    :label="item.label"
                    :value="item.key"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="招标单位：" prop="date">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="招标单位" />
              </el-form-item>
              <el-form-item label="状态：" prop="status">
                <el-select v-model="pageForm.status" class="form-control" clearable placeholder="状态">
                  <el-option
                    v-for="item in biddingStatusOptions"
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
        <el-row class="table-wrapper" data-before="投标列表">
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
import { biddingCategoryOptions, biddingStatusOptions } from '@/utils/dict'
export default {
  name: 'MyBidding',
  data() {
    return {
      activeName: 'bidding',
      biddingCategoryOptions,
      biddingStatusOptions,
      pageForm: {
        theme: '',
        type: '',
        date: '',
        status: ''
      },
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
          label: '招标单位',
          prop: 'theme',
          width: '300',
          href: '#/supplier/bidding-detail',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '标段名称',
          prop: 'date',
          href: '',
          width: '',
          formatter: (row) => {
            return row.date
          }
        },
        {
          label: '标段状态',
          prop: 'date',
          href: '',
          width: '',
          formatter: (row) => {
            return row.date
          }
        },
        {
          label: '发标时间',
          prop: 'date',
          href: '',
          width: '',
          formatter: (row) => {
            return row.date
          }
        },
        {
          label: '回标截止',
          prop: 'date',
          href: '',
          width: '',
          formatter: (row) => {
            return row.date
          }
        },
        {
          label: '操作',
          prop: 'operate',
          href: '',
          formatter: () => {
            return ''
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
          min-width: 320px;

          .form-control {
            width: 100%;
          }
        }
      }

      .btn-group {
        padding-left: 120px;
      }
    }

    .table-wrapper {
      margin: 15px 0;

      &:before {
        content: attr(data-before);
        display: block;
        line-height: 24px;
        font-size: 14px;
        color: #313303;
        padding: 0 10px;
        border-left: 3px solid #409EFF;
        margin-top: 10px;
        margin-bottom: 15px;
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
