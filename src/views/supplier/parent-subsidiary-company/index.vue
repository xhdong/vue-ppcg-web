<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="母子公司关系绑定" name="parent-subsidiary-company">
        <el-tabs v-model="activeNameSub">
          <!-- 已绑定列表 start -->
          <el-tab-pane label="已绑定列表" name="boundList">
            <el-row class="table-wrapper">
              <el-row class="header-group">
                <span class="txt-title">已绑定列表</span>
                <el-row class="btn-group">
                  <el-button type="primary" size="small" icon="el-icon-plus" class="btn-add" @click="handleNavigateToAdd">新增</el-button>
                </el-row>
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
            <el-row class="page-wrapper">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
              />
            </el-row>
          </el-tab-pane>
          <!-- 已绑定列表 end -->

          <!-- 已申请列表 start -->
          <el-tab-pane label="已申请列表" name="appliedList">
            <el-row class="table-wrapper">
              <el-row class="header-group">
                <span class="txt-title">已申请列表</span>
                <el-row class="btn-group">
                  <el-button type="primary" size="small" icon="el-icon-plus" class="btn-add" @click="handleNavigateToAdd">新增</el-button>
                </el-row>
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
            <el-row class="page-wrapper">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
              />
            </el-row>
          </el-tab-pane>
          <!-- 已申请列表 end -->
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <AddDialog
      :page-form="pageForm"
      :dialog-visible="dialogVisible"
    />
  </el-row>
</template>

<script>
import AddDialog from '@/components/supplier/parent-subsidiary-company/add-dialog'
export default {
  name: 'ParentSubsidiaryCompany',
  components: {
    AddDialog
  },
  data() {
    return {
      activeName: 'parent-subsidiary-company',
      activeNameSub: 'boundList',
      loading: false,
      tableData: [],
      pageForm: {
        name: ''
      },
      dialogVisible: false,
      columns: [
        {
          label: '关系',
          prop: 'type',
          href: '',
          formatter: (row) => {
            return row.type
          }
        },
        {
          label: '公司全称',
          prop: 'theme',
          href: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '公司所在地',
          prop: 'theme',
          href: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '法人代表',
          prop: 'theme',
          href: '',
          formatter: (row) => {
            return row.theme
          }
        },
        {
          label: '申请时间',
          prop: 'opt',
          formatter: (row) => {
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
          status: '未读',
          src: ''
        }
      ]
      this.loading = false
    },
    handleNavigateToAdd() {
      this.$router.push({ path: `/supplier/question-info` })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;
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
