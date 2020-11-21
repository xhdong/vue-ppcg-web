<template>
  <el-dialog
    title="新增绑定"
    :visible.sync="dialogVisible"
    class="dialog-md"
  >
    <el-row class="form-wrapper">
      <el-form :model="pageForm" size="small" label-width="120px">
        <el-row class="form-group" prop="name">
          <el-form-item label="公司名称：">
            <el-input v-model="pageForm.name" placeholder="请输入公司名称" clearable class="form-control">
              <el-button slot="append">搜索</el-button>
            </el-input>
          </el-form-item>
        </el-row>
      </el-form>
      <el-row class="detail-wrapper">
        <el-col :span="12">
          <el-row class="txt-group">
            <el-row class="txt-label">发布时间</el-row>
            <el-row class="txt-content">2020-11-16</el-row>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row class="txt-group">
            <el-row class="txt-label">招标方式</el-row>
            <el-row class="txt-content">公开招标</el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogTenderReceiptVisible = false">取 消</el-button>
      <el-button type="primary" size="small" @click="dialogTenderReceiptVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddDialog',
  props: {
    pageForm: {
      type: Object,
      default: () => {}
    },
    dialogVisible: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style scoped>

</style>
