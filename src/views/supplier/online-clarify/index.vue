<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="在线澄清" name="online-clarify">
        <!-- 表单 start -->
        <el-row class="form-wrapper">
          <el-form ref="pageForm" :inline="true" label-width="90px" size="small" :model="pageForm">
            <el-row class="form-group">
              <el-form-item label="疑标问题：" prop="theme">
                <el-input v-model="pageForm.question" class="form-control" clearable placeholder="疑标问题" />
              </el-form-item>
              <el-form-item label="招标工程：" prop="theme">
                <el-input v-model="pageForm.theme" class="form-control" clearable placeholder="招标工程" />
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
        <!-- 表单 end -->

        <!-- 列表 start -->
        <el-row class="table-wrapper">
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
              <!--              <template slot-scope="scope">-->
              <!--                <div v-if="col.prop === 'theme'">-->
              <!--                  <router-link :to="scope.row.src"></router-link>-->
              <!--                </div>-->
              <!--              </template>-->
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
import { replyStatusOptions } from '@/utils/dict'
export default {
  name: 'OnlineClarify',
  data() {
    return {
      activeName: 'online-clarify',
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
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
