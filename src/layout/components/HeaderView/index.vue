<template>
  <div class="header">
    <div class="header-wrap">
      <div class="logo">
        <a href="#/">占位</a>
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
