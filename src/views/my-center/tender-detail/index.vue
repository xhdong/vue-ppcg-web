<template>
  <el-row class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="投标详情" name="tender">
        <el-row class="header-group">
          <span class="txt-title">主体工程</span>
          <el-row class="btn-group">
            <el-button type="primary" size="small" @click="dialogTenderReceiptVisible = true">应标回执
            </el-button>
            <el-button type="primary" size="small" @click="dialogDepositUploadVisible = true">保证金附件上传
            </el-button>
            <el-button type="primary" size="small">下载标书</el-button>
            <el-button type="primary" size="small" @click="handleNavigateToOnlineQuestion">在线提疑</el-button>
            <el-button type="primary" size="small" @click="dialogResponseToTenderVisible = true">回标</el-button>
          </el-row>
        </el-row>
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
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">招标分类</el-row>
              <el-row class="txt-content">承建商类</el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">需求城市</el-row>
              <el-row class="txt-content">广州</el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">招标单位</el-row>
              <el-row class="txt-content">广州富力</el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">报名截止时间</el-row>
              <el-row class="txt-content">2020-11-20</el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">联系人</el-row>
              <el-row class="txt-content">王某某</el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">相关附件</el-row>
              <el-row class="txt-content">无</el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="txt-group">
              <el-row class="txt-label">资质需求</el-row>
              <el-row class="txt-content">--</el-row>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="table-wrapper">
          <el-row class="header-group">
            <span class="txt-title">工程地段</span>
            <el-link type="primary" :underline="false">(隐藏)</el-link>
          </el-row>
          <el-table
            v-loading="loading"
            :data="tableData"
            border
          >
            <el-table-column
              v-for="(col,idx) in columns"
              :key="idx"
              :prop="col.prop"
              :label="col.label"
              :formatter="col.formatter"
            />
          </el-table>
        </el-row>
        <el-row class="table-wrapper">
          <el-row class="header-group">
            <span class="txt-title">投标日志</span>
            <el-link type="primary" :underline="false">(隐藏)</el-link>
          </el-row>
          <el-table
            v-loading="loading"
            :data="tableData"
            border
          >
            <el-table-column
              v-for="(col,idx) in columns"
              :key="idx"
              :prop="col.prop"
              :label="col.label"
              :formatter="col.formatter"
            />
          </el-table>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <!--应标回执 start -->
    <TenderReceipt
      :dialog-tender-receipt-visible="dialogTenderReceiptVisible"
      :tender-receipt-form="tenderReceiptForm"
      :rules="rules"
    />
    <!--应标回执 end -->
    <!--保证金上传附件 start -->
    <DepositUpload
      :dialog-deposit-upload-visible="dialogDepositUploadVisible"
      :deposit-upload-form="depositUploadForm"
      :rules="rules"
    />
    <!--保证金上传附件 end -->
    <!--回标 start -->
    <ResponseToTender
      :dialog-response-to-tender-visible="dialogResponseToTenderVisible"
      :response-to-tender-form="responseToTenderForm"
      :rules="rules"
    />
    <!--回标 end -->
  </el-row>
</template>

<script>
import TenderReceipt from '@/components/my-center/tender-detail/tender-receipt'
import DepositUpload from '@/components/my-center/tender-detail/deposit-upload'
import ResponseToTender from '@/components/my-center/tender-detail/response-to-tender'

export default {
  name: 'TenderDetail',
  components: {
    TenderReceipt,
    DepositUpload,
    ResponseToTender
  },
  data() {
    return {
      activeName: 'tender',
      pageForm: {
        theme: '',
        type: '',
        date: '',
        status: ''
      },
      loading: false,
      tableData: [],
      columns: [
        {
          label: '招标工程',
          prop: 'type'
        },
        {
          label: '标段名称',
          prop: 'theme'
        },
        {
          label: '标段状态',
          prop: 'date'
        },
        {
          label: '操作',
          prop: 'status'
        }
      ],
      dialogTenderReceiptVisible: false,
      dialogDepositUploadVisible: false,
      dialogResponseToTenderVisible: false,
      tenderReceiptForm: {
        isPartake: 1,
        tenderList: [
          {
            tenderName: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            pic: ''
          },
          {
            tenderName: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            pic: ''
          },
          {
            tenderName: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            pic: ''
          }
        ]
      },
      depositUploadForm: {},
      responseToTenderForm: {},
      rules: {
        contactName: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        contactPosition: [
          { required: true, message: '请输入联系人职位', trigger: 'blur' }
        ],
        contactPhone: [
          { required: true, message: '请输入联系人电话', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getMessageList()
  },
  methods: {
    getMessageList() {
      this.loading = true
      this.tableData = [
        {
          type: '母子关系绑定',
          theme: '【通知】母子关系绑定通知',
          date: '2020-11-16',
          status: '未读'
        }
      ]
      this.loading = false
    },
    onSubmit() {
    },
    onReset(formName) {
      this.$refs[formName] && this.$refs[formName].resetFields()
    },
    handleNavigateToOnlineQuestion() {
      this.$router.push({
        path: '/my-center/online-question'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;

    .header-group {
      padding: 0 10px;
      margin-top: 10px;
      margin-bottom: 15px;
      display: flex;

      .txt-title {
        flex: 1;
        font-size: 14px;
        color: #409EFF;
        font-weight: bold;
        line-height: 24px;
      }

      .btn-group {
        flex: 1;
      }
    }

    .detail-wrapper {
      border: 1px solid #EBEEF5;
      position: relative;
      overflow: hidden;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #fff;
        left: 0;
        bottom: 0;
      }

      .txt-group {
        display: flex;
        line-height: 30px;

        .txt-label, .txt-content {
          font-size: 14px;
          padding: 5px 10px;
          border-bottom: 1px solid #EBEEF5;
        }

        .txt-label {
          background-color: #f5f7fa;
          color: #313303;
          flex: 0 0 150px;
          text-align: center;
        }

        .txt-content {
          flex: 1;
          color: #606266;
        }
      }
    }

    .table-wrapper {
      margin: 15px 0;

      .header-group {
        padding: 0 10px;
        border-left: 3px solid #409EFF;
        margin-top: 10px;
        margin-bottom: 15px;

        .txt-title {
          font-size: 14px;
          color: #313303;
          line-height: 24px;
        }
      }
    }

    .page-wrapper {
      margin: 15px 0;

      .el-pagination {
        text-align: right;
      }
    }
  }
</style>
