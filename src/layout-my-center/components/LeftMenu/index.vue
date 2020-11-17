<template>
 <el-row class="main-left">
  <el-row class="menu-wrapper">
   <el-row class="first-menu">
    <el-row class="menu-item">
     <el-link icon="el-icon-chat-dot-round" :underline="false" class="txt-title">消息中心</el-link>
    </el-row>
    <el-row class="second-menu">
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">消息中心</a>
     </el-row>
    </el-row>
   </el-row>
   <el-row class="first-menu">
    <el-row class="menu-item">
     <el-link icon="el-icon-goblet-square-full" :underline="false" class="txt-title">我的合作情况</el-link>
    </el-row>
    <el-row class="second-menu">
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">在线报名</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">我的投标</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">中止公告</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">澄清公告</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">在线提疑</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">在线澄清</a>
     </el-row>
    </el-row>
   </el-row>
   <el-row class="first-menu">
    <el-row class="menu-item">
     <el-link icon="el-icon-collection" :underline="false" class="txt-title">公司资料</el-link>
    </el-row>
    <el-row class="second-menu">
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">基本资料</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">审核日志</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">授权文件</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">分公司/代理商管理</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">母子公司关系绑定</a>
     </el-row>
    </el-row>
   </el-row>
   <el-row class="first-menu">
    <el-row class="menu-item">
     <el-link icon="el-icon-user" :underline="false" class="txt-title">个人中心</el-link>
    </el-row>
    <el-row class="second-menu">
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">账号管理</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">修改密码</a>
     </el-row>
     <el-row class="menu-item">
      <a href="javascript:;" class="txt-title">收藏夹</a>
     </el-row>
    </el-row>
   </el-row>
  </el-row>
 </el-row>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
.main-left {
 padding: 20px 0;
 .menu-wrapper {
  .first-menu {
   margin-bottom: 20px;
   .menu-item {
    border-left: 4px solid transparent;
    .txt-title {
     line-height: 30px;
     color: #313303;
     display: block;
     padding-left: 20px;
     ::v-deep i {
      font-size: 18px;
      vertical-align: middle;
     }
    }
   }
   .second-menu {
    .menu-item {
     .txt-title {
      color: #606266;
      font-size: 14px;
      display: block;
      padding-left: 42px;
     }
     &.active,
     &:hover {
      background-color: #ecf5ff;
      border-left-color: #409EFF;
     }
    }
   }
  }
 }
}
</style>
