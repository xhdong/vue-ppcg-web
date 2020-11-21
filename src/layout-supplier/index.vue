<template>
  <el-row class="app-wrapper">
    <header-view />
    <el-row class="main-wrapper">
      <el-row class="main-container">
        <left-menu />
        <app-main />
      </el-row>
    </el-row>
    <footer-view />
  </el-row>
</template>

<script>
import { HeaderView, LeftMenu, AppMain, FooterView } from './components'

export default {
  name: 'Layout',
  components: {
    HeaderView,
    LeftMenu,
    AppMain,
    FooterView
  },
  data() {
    return {
      fixedHeader: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-wrapper {
    background-color: #f5f5f5;
    .main-container {
      width: 1200px;
      margin: 15px auto;
      display: flex;
      .main-left, .main-right {
        background-color: #fff;
      }
      .main-left {
        width: 200px;
        margin-right: 15px;
      }
      .main-right {
        flex: 1;

      }
    }
  }
</style>
