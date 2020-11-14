<template>
  <el-row class="app-container">
    <el-row class="header-wrapper">
      <h1 class="txt-title">韶关富力城市花园项目物业服务中标通知书</h1>
      <el-row class="txt-group">
        <span class="txt-label">中标公告</span>
        <span class="txt-time">2020-11-14</span>
      </el-row>
    </el-row>
    <el-main class="main-wrapper">
      <h2 class="txt-title">物业中标通知书</h2>
      <p class="txt-desc">广州天力物业发展有限公司韶关分公司：</p>
      <p class="txt-desc">经我司物业管理项目招标小组对贵公司投标书的评议和对贵公司物管现场的考察，贵公司的投标书评分96分，现场考察评分92 分，在三个被邀请的公司中评分最高。 经仔细研究和慎重考虑，我司决定选聘贵公司为富力城市花园物业服务单位，承担富力城市花园前期物业管理服务工作。 请贵司法人代表（或委托代理人）携带公章于2018年 9月25日到广东省韶关市万紫千红置业有限公司物业管理项目招标小组与我司签订《富力城市花园物业服务合同》。 预祝合作愉快。</p>
      <el-row class="btn-group">
        <el-button type="primary" size="small" icon="el-icon-arrow-left" class="btn-back">返回</el-button>
      </el-row>
    </el-main>
  </el-row>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 1200px;
  background-color: #fff;
  padding: 30px 50px;
  .header-wrapper {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px dashed #666;
    .txt-title {
      font-size: 26px;
      line-height: 60px;
      color: #1294f5;
      margin: 0;
    }
    .txt-group {
      line-height: 30px;
      .txt-label, .txt-time {
        display: inline-block;
        padding: 0 10px;
        color: #666;
      }
    }
  }
  .main-wrapper {
    .txt-title {
      color: #313303;
      font-size: 18px;
      text-align: center;
      font-weight: normal;
    }
    .txt-desc {
      color: #606266;
      text-indent: 34px;
      line-height: 30px;
    }
    .btn-group {
      padding: 20px 0;
      text-align: center;
      .btn-back {

      }
    }
  }
}
</style>
