<template>
  <el-row class="form-wrapper">
    <el-form ref="baseInfoForm" :model="baseInfoForm" :rules="rules" size="small" label-width="230px">
      <el-row class="form-group">
        <el-form-item label="公司全称：" prop="fullName">
          <el-input v-model="baseInfoForm.fullName" placeholder="请输入公司全称" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="公司简称：" prop="simpleName">
          <el-input v-model="baseInfoForm.simpleName" placeholder="请输入公司简称" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="企业性质：" prop="businessNature">
          <el-select v-model="baseInfoForm.businessNature" placeholder="请选择企业性质" clearable class="form-control">
            <el-option
              v-for="item in businessNatureOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="是否是上市公司：" prop="companyType">
          <el-select v-model="baseInfoForm.companyType" placeholder="是否是上市公司" clearable class="form-control">
            <el-option
              v-for="item in companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="承接类别：" prop="categoryList">
          <el-select v-model="baseInfoForm.categoryList" multiple placeholder="请选择承接类别" clearable class="form-control">
            <el-option
              v-for="item in companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="有设置分支机构或分公司的城市：" prop="categoryList">
          <el-select v-model="baseInfoForm.categoryList" placeholder="请选择分支机构或城市" multiple clearable class="form-control">
            <el-option
              v-for="item in companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="愿意承接工程的省份/城市：" prop="categoryList">
          <el-select v-model="baseInfoForm.categoryList" placeholder="请选择省份/城市" multiple clearable class="form-control">
            <el-option
              v-for="item in companyTypeOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="企业办公固话：" prop="telephone">
          <el-input v-model="baseInfoForm.telephone" placeholder="请输入企业办公固话" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="企业邮箱：" prop="email">
          <el-input v-model="baseInfoForm.email" placeholder="请输入企业邮箱" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="公司所在地：">
          <el-row class="select-group">
            <el-row class="select-item">
              <el-form-item prop="address">
                <el-select v-model="baseInfoForm.address" placeholder="请选择省份" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="address">
                <el-select v-model="baseInfoForm.address" placeholder="请选择市区" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="select-item">
              <el-form-item prop="address">
                <el-select v-model="baseInfoForm.address" placeholder="请选择城镇" clearable class="form-control">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-row>
          </el-row>
        </el-form-item>
        <el-form-item label="详细地址：" prop="detailedAddress">
          <el-input v-model="baseInfoForm.detailedAddress" placeholder="请输入详细地址" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="邮政编码：" prop="postcode">
          <el-input v-model="baseInfoForm.postcode" placeholder="请输入邮政编码" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="曾合作过的其他大型地产商：">
          <el-input v-model="baseInfoForm.otherCompany" placeholder="请输入地产商" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="基本情况介绍：" prop="summary">
          <el-input v-model="baseInfoForm.summary" placeholder="请输入介绍说明" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="营业范围：" prop="businessRange">
          <el-input v-model="baseInfoForm.businessRange" placeholder="请输入营业范围" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" clearable class="form-control" />
        </el-form-item>
      </el-row>
      <el-row class="btn-group">
        <el-button type="default" size="small" @click="onReset('baseInfoForm')">重置</el-button>
        <el-button type="primary" size="small">下一步</el-button>
        <el-button type="primary" size="small">提交</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
import { businessNatureOptions, companyTypeOptions } from '@/utils/dict'
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
  data() {
    return {
      businessNatureOptions,
      companyTypeOptions,
      rules: {
        fullName: [
          { required: true, message: '请输入公司全称', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入企业办公固话', trigger: 'blur' }
        ],
        detailedAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        summary: [
          { required: true, message: '请输入介绍说明', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    }
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
          .el-form-item {
            margin-bottom: 0;
            .el-form-item__content {
              width: auto;
            }
          }
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
