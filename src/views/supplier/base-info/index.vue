<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本资料" name="base-info">
        <el-tabs v-model="activeNameSub">
          <el-tab-pane label="公司基本信息" name="base-company-info">
            <BaseCompanyInfo
              :base-info-form="baseInfoForm"
              :options="options"
            />
          </el-tab-pane>
          <el-tab-pane label="其他信息" name="other-info">
            <OtherInfo
              :base-info-form="baseInfoForm"
              :options="options"
            />
          </el-tab-pane>
          <el-tab-pane label="联系人" name="contacts">
            <ContactsList />
          </el-tab-pane>
          <el-tab-pane label="财务状态评估表" name="financial-status">
            <FinancialStatus />
          </el-tab-pane>
          <el-tab-pane label="产品服务信息" name="product-service">
            <ProductService />
          </el-tab-pane>
          <el-tab-pane label="资质信息" name="qualification-list">
            <QualificationList />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import BaseCompanyInfo from '@/components/supplier/base-info/base-company-info'
import OtherInfo from '@/components/supplier/base-info/other-info'
import ContactsList from '@/components/supplier/base-info/contact-list'
import FinancialStatus from '@/components/supplier/base-info/financial-status'
import ProductService from '@/components/supplier/base-info/product-service'
import QualificationList from '@/components/supplier/base-info/qualification-list'
export default {
  name: 'BaseInfo',
  components: {
    BaseCompanyInfo,
    OtherInfo,
    ContactsList,
    FinancialStatus,
    ProductService,
    QualificationList
  },
  data() {
    return {
      activeName: 'base-info',
      activeNameSub: 'base-company-info',
      baseInfoForm: {
        companyFullName: '',
        companySimpleName: '',
        valueList: [],
        date: '',
        status: '',
        fileList: []
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
    },
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleNavigateToDetail(row) {
      console.log(row)
      // this.$router.push({ path: `${row}` })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;

    .table-wrapper {
      margin: 15px 0;
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
