<template>
  <div class="header">
    <div class="header-wrap">
      <div class="logo">
        <a href="#/">
          <img :src="logo" alt="logo">
        </a>
      </div>
      <el-input
        v-model="search"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
      />
    </div>
  </div>
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
