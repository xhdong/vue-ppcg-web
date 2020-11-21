<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="分公司/代理商管理" name="agent-manage">
        <el-row class="form-wrapper">
          <el-form :model="pageForm" size="small" :rules="rules" label-width="230px">
            <el-row class="form-group">
              <el-form-item label="分公司类型：" prop="type">
                <el-radio v-model="pageForm.type" label="1">分公司</el-radio>
                <el-radio v-model="pageForm.type" label="2">代理公司</el-radio>
              </el-form-item>
              <el-form-item label="公司全称：" prop="fullName">
                <el-input v-model="pageForm.fullName" placeholder="请输入公司简称" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="公司简称：" prop="simpleName">
                <el-input v-model="pageForm.simpleName" placeholder="请输入公司简称" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="公司所在地：">
                <el-row class="select-group">
                  <el-row class="select-item">
                    <el-select v-model="pageForm.address.province" placeholder="请选择省份" clearable class="form-control">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-row>
                  <el-row class="select-item">
                    <el-select v-model="pageForm.address.city" placeholder="请选择市区" clearable class="form-control">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-row>
                  <el-row class="select-item">
                    <el-select v-model="pageForm.address.town" placeholder="请选择城镇" clearable class="form-control">
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
              <el-form-item label="账号名：" prop="accountName">
                <el-input v-model="pageForm.accountName" placeholder="请输入账号名" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input v-model="pageForm.password" placeholder="请输入密码" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="确认密码：" prop="confirmPassword">
                <el-input v-model="pageForm.confirmPassword" placeholder="请输入确认密码" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="联系人姓名：" prop="contactName">
                <el-input v-model="pageForm.contactName" placeholder="请输入联系人姓名" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="联系人性别：" prop="gender">
                <el-radio v-model="pageForm.gender" label="1">男</el-radio>
                <el-radio v-model="pageForm.gender" label="2">女</el-radio>
              </el-form-item>
              <el-form-item label="联系人职位：" prop="position">
                <el-input v-model="pageForm.position" placeholder="请输入联系人职位" clearable class="form-control" />
              </el-form-item>
              <el-form-item label="身份证号码：" prop="IDNumber">
                <el-input v-model="pageForm.IDNumber" placeholder="请输入身份证号码" clearable class="form-control" />
              </el-form-item>
            </el-row>
            <el-row class="btn-group">
              <el-button type="default" size="small">返回</el-button>
              <el-button type="primary" size="small">提交</el-button>
            </el-row>
          </el-form>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: 'AgentManage',
  data() {
    return {
      activeName: 'agent-manage',
      pageForm: {
        type: '',
        fullName: '',
        simpleName: '',
        address: {
          province: '',
          city: '',
          town: ''
        },
        accountName: '',
        password: '',
        confirmPassword: '',
        gender: '',
        position: '',
        IDNumber: ''
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      rules: {
        type: [
          { required: true, message: '请选择分公司类型', trigger: 'change' }
        ],
        fullName: [
          { required: true, message: '请输入公司全称', trigger: 'blur' }
        ],
        simpleName: [
          { required: true, message: '请输入公司简称', trigger: 'blur' }
        ],
        accountName: [
          { required: true, message: '请输入账号名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择联系人性别', trigger: 'change' }
        ],
        position: [
          { required: true, message: '请输入联系人职位', trigger: 'blur' }
        ],
        IDNumber: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  }
}

</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;
  }
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
