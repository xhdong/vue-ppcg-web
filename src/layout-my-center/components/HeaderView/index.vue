<template>
  <el-row class="header-wrapper">
    <el-row class="header-container">
      <el-row class="header-left">
        <el-row class="logo-wrapper">
          <a href="#/" class="logo">占位</a>
        </el-row>
      </el-row>
      <el-row class="header-center">
        <el-row class="input-group">
          <el-input placeholder="请输入内容" v-model="search" size="small" class="form-control">
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
export default {
  name: 'HeaderView',
  data() {
    return {
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
    .header-container {
      display: flex;
      align-items: center;
      width: 1200px;
      margin: 0 auto;
      padding: 15px 0;
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
        }
        .user-info {

        }
        .action-wrapper {

        }
      }
    }
  }
</style>
