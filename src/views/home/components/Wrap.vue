<template>
  <div class="wrap">
    <div v-if="title" class="wrap-title">
      <h3>{{ title }}</h3>
      <slot name="enTitle">{{ enTitle }}</slot>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    enTitle: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.home-page {
  .wrap {
    padding: 20px;
    margin-bottom: 20px;
    // width: 460px;
    border-radius: 4px;
    background: #ffffff;
    .wrap-title {
      margin-bottom: 5px;
      h3 {
        font-size: 16px;
      }
      span {
        display: block;
        color: #cccccc;
        font-size: 12px;
      }
    }
  }
}
</style>
