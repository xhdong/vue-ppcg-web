<template>
  <el-row class="app-container">
    <el-row class="form-wrapper">
      <el-form ref="pageForm" :inline="true" size="small" :model="pageForm">
        <el-form-item label="分包编码">
          <el-input v-model="pageForm.code" placeholder="分包编码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="default" icon="el-icon-refresh" @click="onReset('pageForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="table-wrapper">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
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
    <el-row class="page-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'MaterialSelector',
  data() {
    return {
      pageForm: {
        code: ''
      },
      tableData: [],
      columns: [
        {
          label: '材料编码',
          prop: 'code'
        },
        {
          label: '货期',
          prop: 'desc'
        },
        {
          prop: 'operate',
          label: '操作',
          operator: [
            {
              name: '删除',
              type: 'danger',
              click: () => {
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    onSubmit() {
    },
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    getList() {
      this.tableData = [
        {
          label: '分包编码',
          prop: 'code'
        },
        {
          label: '服务说明',
          prop: 'desc'
        },
        {
          label: '工程价',
          prop: 'code'
        },
        {
          label: '工程价',
          prop: 'code'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .app-container {
        padding: 20px;
        .table-wrapper {

        }
        .page-wrapper {
            text-align: right;
            padding: 15px 0;
        }
    }
</style>
