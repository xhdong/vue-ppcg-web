<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="消息中心" name="message">
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
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
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
export default {
  name: 'MessageCenter',
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
      columns: [
        {
          label: '类型',
          prop: 'type'
        },
        {
          label: '主题',
          prop: 'theme',
          click: (row) => {
            this.handleNavigateToDetail(row)
          }
        },
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '状态',
          prop: 'status',
          formatter: (row, key) => {
            if (row[key] === 0) {
              return '未读'
            }
            return '已读'
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
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
