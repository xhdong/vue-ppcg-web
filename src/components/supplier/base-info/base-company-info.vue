<template>
  <el-row class="form-wrapper">
    <el-form :model="baseInfoForm" size="small" label-width="230px">
      <el-row class="form-group">
        <el-form-item label="公司全称：">
          <el-input v-model="baseInfoForm.companyFullName" placeholder="请输入公司全称" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="公司简称：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入公司简称" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="企业性质：">
          <el-select v-model="baseInfoForm.companySimpleName" placeholder="请选择企业性质" clearable class="form-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="是否是上市公司：">
          <el-select v-model="baseInfoForm.companySimpleName" placeholder="是否是上市公司" clearable class="form-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="有设置分支机构或分公司的城市：">
          <el-select v-model="baseInfoForm.valueList" placeholder="请选择分支机构或城市" multiple clearable class="form-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="愿意承接工程的省份/城市：">
          <el-select v-model="baseInfoForm.valueList" placeholder="请选择省份/城市" multiple clearable class="form-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="企业办公固话：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入企业办公固话" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="企业邮箱：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入企业邮箱" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="公司所在地：">
          <el-row class="select-group">
            <el-row class="select-item">
              <el-select v-model="baseInfoForm.companySimpleName" placeholder="请选择省份" clearable class="form-control">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-row>
            <el-row class="select-item">
              <el-select v-model="baseInfoForm.companySimpleName" placeholder="请选择市区" clearable class="form-control">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-row>
            <el-row class="select-item">
              <el-select v-model="baseInfoForm.companySimpleName" placeholder="请选择城镇" clearable class="form-control">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入详细地址" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="邮政编码：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入邮政编码" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="曾合作过的其他大型地产商：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入地产商" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="基本情况介绍：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入基本信息" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="营业范围：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业范围" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" clearable class="form-control" />
        </el-form-item>
      </el-row>
      <el-row class="btn-group">
        <el-button type="primary" size="small">下一步</el-button>
        <el-button type="primary" size="small">提交</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
export default {
  name: 'BaseCompanyInfo',
  props: {
    baseInfoForm: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  created() {
  }
}

</script>

<style lang="scss" scoped>
  .form-wrapper {
    .form-group {
      ::v-deep .el-form-item__label {

      }
      ::v-deep .el-form-item__content {
        width: 500px;
        .select-group {
          display: flex;
          .select-item {
            margin-left: 10px;
            flex: 1;
            &:first-child {
              margin-left: 0;
            }
          }
        }
        .form-control {
          width: 100%;
        }
      }
    }

    .btn-group {
      padding-left: 90px;
      text-align: center;
    }
  }
</style>
