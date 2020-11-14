<template>
<el-row class="app-container">
  <el-row class="header-wrapper">
    <!-- 面包屑 start -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>招标公告</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 面包屑 end -->

    <!-- 查询条件 start -->
    <el-row class="form-wrapper">
      <el-form ref="pageForm" :inline="true" :model="pageForm" label-width="110px" label-position="left" size="small" class="page-form">
        <el-row class="form-group">
        <el-form-item label="招标公告：" prop="name">
          <el-input v-model="pageForm.name" clearable class="form-control" placeholder="招标公告"></el-input>
        </el-form-item>
        <el-form-item label="发布日期：" prop="publishDate">
          <el-date-picker
            v-model="pageForm.publishDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            clearable
            class="form-control">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="报名截止时间：" prop="expiryDate">
          <el-date-picker
            v-model="pageForm.expiryDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            clearable
            class="form-control">
          </el-date-picker>
        </el-form-item>
        </el-row>
        <el-row class="btn-group">
          <el-button type="primary" size="small" icon="el-icon-search" @click="handleSubmit('pageForm')">查询</el-button>
          <el-button type="default" size="small" icon="el-icon-refresh" @click="handleReset('pageForm')">重置</el-button>
        </el-row>
      </el-form>
    </el-row>
    <!-- 查询条件 end -->
  </el-row>

  <el-row class="main-wrapper">
    <!-- 列表 start -->
    <TabsSwitch
      :tabs-list="tabsList"
      :columns="columns"
      :loading="loading"
      @handleClick="handleClick"
    />
    <!-- 列表 end -->
  </el-row>
</el-row>
</template>

<script>
import TabsSwitch from '@/components/common/TabsSwitch'
export default {
  name: 'Bidding',
  components: {
    TabsSwitch
  },
  data() {
    return {
      pageForm: {
        name: '',
        publishDate: '',
        expiryDate: ''
      },
      loading: false,
      tabsList: [
        {
          label: '工程类',
          key: 'engineering',
          list: []
        },
        {
          label: '设计类',
          key: 'design',
          list: []
        },
        {
          label: '营销策划类',
          key: 'marketing-planning',
          list: []
        },
        {
          label: 'IT类',
          key: 'it',
          list: []
        },
        {
          label: '行政人事类',
          key: 'administrative-personnel',
          list: []
        },
        {
          label: '物业类',
          key: 'property',
          list: []
        }
      ],
      columns: [
        {
          label: '招标公告',
          prop: 'biddingName'
        },
        {
          label: '需求城市',
          prop: 'city'
        },
        {
          label: '报名截止日期',
          prop: 'expiryDate'
        },
        {
          label: '发布时间',
          prop: 'publishDate'
        },
        {
          label: '状态',
          prop: 'state',
          formatter: (row, key) => {
            if (row[key] === 0) {
              return '未发布'
            }
            return '已发布'
          }
        },
        {
          prop: 'operate',
          label: '操作',
          operator: [
            {
              name: '编辑',
              type: 'primary',
              click: (row) => {
              },
              hidden: (row) => {
                return row.status === 1
              }
            },
            {
              name: '删除',
              type: 'danger',
              click: (row) => {
              }
            }
          ]
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
      this.tabsList.forEach(item => {
        item.list.push(
          {
            label: '招标公告',
            prop: 'biddingName'
          },
          {
            label: '需求城市',
            prop: 'city'
          },
          {
            label: '报名截止日期',
            prop: 'expiryDate'
          },
          {
            label: '发布时间',
            prop: 'publishDate'
          },
          {
            label: '状态',
            prop: 'state'
          }
        )
      })
      this.loading = false
    },
    handleSubmit() {

    },
    handleReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .header-wrapper {
    padding: 40px 50px 30px;
    border-bottom: 10px solid #f5f5f5;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      right: 0;
      bottom: -12px;
      background: -webkit-repeating-linear-gradient(
        0deg, /* 倾斜度*/
        #009cff,
        #009cff 50px,
        #ffcb21 50px,
        #ffcb21 100px
      );
    }
    .el-breadcrumb {
      line-height: 30px;
      margin-bottom: 20px;
    }
    .form-wrapper {
      .form-group, .btn-group {
        display: inline;
        &:before, &:after {
          display: none;
        }
      }
      .form-group {
        ::v-deep .el-form-item__content {
          min-width: 350px;
        }
      }
      .btn-group {
        padding: 0 110px;
      }
    }
  }

  .main-wrapper {
    padding: 30px 50px;
    ::v-deep .el-tabs {
      .el-tabs__content {
        .table-wrapper {
          .el-table {
            th, td {
              text-align: center;
            }
            th {
              background-color: #f5f7fa;
            }
          }
        }
        .page-wrapper {
          padding: 15px 0;
          text-align: right;
        }
      }
    }
  }
}
</style>
