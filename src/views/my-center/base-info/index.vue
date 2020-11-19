<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本资料" name="base-info">
        <el-tabs v-model="activeNameSub">
          <el-tab-pane label="公司基本信息" name="base-company-info">
            <BaseCompanyInfo
              :base-info-form="baseInfoForm"
            />
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import BaseCompanyInfo from '@/components/my-center/base-info/base-company-info'
export default {
  name: 'BaseInfo',
  components: {
    BaseCompanyInfo
  },
  data() {
    return {
      activeName: 'base-info',
      activeNameSub: 'base-company-info',
      baseInfoForm: {
        companyFullName: '',
        companySimpleName: '',
        date: '',
        status: '',
        fileList: []
      }
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

    .form-wrapper {
      .form-group {
        ::v-deep .el-form-item__label {

        }
        ::v-deep .el-form-item__content {
          width: 500px;
          .address-group {
            display: flex;
            .address-item {
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
