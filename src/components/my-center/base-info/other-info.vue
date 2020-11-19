<template>
  <el-row class="form-wrapper">
    <el-form :model="baseInfoForm" size="small" label-width="230px">
      <el-row class="form-group">
        <el-form-item label="营业执照号：">
          <el-input v-model="baseInfoForm.companyFullName" placeholder="请输入营业执照号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="营业执照副本：">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="baseInfoForm.fileList"
          >
            <el-button size="small" icon="el-icon-upload" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="税务登记号：">
          <el-input v-model="baseInfoForm.companyFullName" placeholder="请输入税务登记号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="办公地性质：">
          <el-select v-model="baseInfoForm.companySimpleName" placeholder="请选择办公地性质" clearable class="form-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开户银行：">
          <el-input v-model="baseInfoForm.companyFullName" placeholder="请输入开户银行" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="开户账号：">
          <el-input v-model="baseInfoForm.companyFullName" placeholder="请输入开户账号" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="办公/工厂面积：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入办公/工厂面积" clearable class="form-control" />
        </el-form-item>
        <el-form-item label="近两年平均营业额：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业额" clearable class="form-control" />
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
        <el-form-item label="近两年平均营业额：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业额" clearable class="form-control" />
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
        <el-form-item label="近两年平均营业额：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业额" clearable class="form-control" />
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
        <el-form-item label="注册资本：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业额" clearable class="form-control" />
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
        <el-form-item label="固定资产：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业额" clearable class="form-control" />
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
        <el-form-item label="流动资金：">
          <el-row class="input-group">
            <el-row class="input-item">
              <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入营业额" clearable class="form-control" />
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
        <el-form-item label="员工数量：">
          <el-input v-model="baseInfoForm.companySimpleName" placeholder="请输入员工数量" clearable class="form-control" />
        </el-form-item>
      </el-row>
      <el-row class="btn-group">
        <el-button type="primary" size="small">上一步</el-button>
        <el-button type="primary" size="small">下一步</el-button>
        <el-button type="primary" size="small">提交</el-button>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
export default {
  name: 'OtherInfo',
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
  },
  methods: {
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
  .form-wrapper {
    .form-group {
      ::v-deep .el-form-item__label {

      }
      ::v-deep .el-form-item__content {
        width: 500px;
        .input-group {
          display: flex;
          .select-item {
            flex: 1;
            margin-left: 10px;
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
