<template>
  <el-row class="header-wrapper">
    <el-row class="header-container">
      <el-row class="header-left">
        <el-row class="logo-wrapper">
          <a href="#/" class="logo">
            <img :src="logo" alt="logo">
          </a>
        </el-row>
      </el-row>
      <el-row class="header-center">
        <el-row class="input-group">
          <el-input v-model="search" placeholder="请输入内容" size="small" class="form-control">
            <el-button slot="append" type="primary" icon="el-icon-search">搜索</el-button>
          </el-input>
        </el-row>
      </el-row>
      <el-row class="header-right">
        <el-row class="user-info">
          <el-badge :value="12" class="user-info_badge">
            <el-link icon="el-icon-user" :underline="false" class="txt-name">吴海</el-link>
          </el-badge>
        </el-row>
        <el-row class="action-wrapper">
          <el-link class="btn-action" :underline="false" icon="el-icon-switch-button">退出</el-link>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import logo from '@/assets/ppcg-logo.png'
export default {
  name: 'HeaderView',
  data() {
    return {
      logo,
      views: {
        path: '/index',
        title: '首页'
      },
      search: ''
    }
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
  .header-wrapper {
    background-color: #1890ff;
    .header-container {
      display: flex;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
      padding: 10px 0;
      .header-left {
        .logo-wrapper {
          width: 330px;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .header-center {
        padding: 0 100px;
        .input-group {
          width: 500px;
        }
      }
      .header-right {
        display: flex;
        .user-info, .action-wrapper {
          padding: 0 10px;
          ::v-deep .el-link {
            color: #fff;
          }
        }
        .user-info {

        }
        .action-wrapper {

        }
      }
    }
  }
</style>
