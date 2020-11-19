<template>
  <el-row class="main-left">
    <el-row class="menu-wrapper">
      <el-row
        v-for="(item, index) in menuList"
        :key="index"
        class="first-menu"
      >
        <el-row class="menu-item">
          <el-link icon="el-icon-chat-dot-round" :underline="false" class="txt-title">{{ item.label }}</el-link>
        </el-row>
        <el-row
          v-for="(node, idx) in item.children"
          :key="idx"
          class="second-menu"
        >
          <el-row :class="routePath === node.path ? 'menu-item active' : 'menu-item'">
            <router-link :to="node.path" class="txt-title">{{ node.label }}</router-link>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'LeftMenu',
  data() {
    return {
      routePath: '',
      menuList: [
        {
          label: '消息中心',
          key: '',
          id: 0,
          path: '',
          children: [
            {
              label: '消息中心',
              key: '',
              id: 0,
              path: '/my-center/message-center'
            }
          ]
        },
        {
          label: '我的合作情况',
          key: '',
          id: 0,
          path: '',
          children: [
            {
              label: '在线报名',
              key: '',
              id: 0,
              path: '/my-center/online-registration'
            },
            {
              label: '我的投标',
              key: '',
              id: 0,
              path: '/my-center/my-tender'
            },
            {
              label: '中止公告',
              key: '',
              id: 0,
              path: '/my-center/suspension-notice'
            },
            {
              label: '澄清公告',
              key: '',
              id: 0,
              path: '/my-center/clarification-notice'
            },
            {
              label: '在线质疑',
              key: '',
              id: 0,
              path: '/my-center/online-question'
            },
            {
              label: '在线澄清',
              key: '',
              id: 0,
              path: '/my-center/online-clarification'
            }
          ]
        },
        {
          label: '公司资料',
          key: '',
          id: 0,
          path: '',
          children: [
            {
              label: '基本资料',
              key: '',
              id: 0,
              path: '/my-center/base-info'
            },
            {
              label: '审核日志',
              key: '',
              id: 0,
              path: '/my-center/audit-logs'
            },
            {
              label: '授权文件',
              key: '',
              id: 0,
              path: '/my-center/permission-file'
            },
            {
              label: '分公司/代理商管理',
              key: '',
              id: 0,
              path: '/my-center/agent-manage'
            },
            {
              label: '母子公司关系绑定',
              key: '',
              id: 0,
              path: '/my-center/parent-subsidiary-company'
            }
          ]
        },
        {
          label: '个人中心',
          key: '',
          id: 0,
          path: '',
          children: [
            {
              label: '账号管理',
              key: '',
              id: 0,
              path: '/my-center/account-manage'
            },
            {
              label: '修改密码',
              key: '',
              id: 0,
              path: '/my-center/change-password'
            },
            {
              label: '收藏夹',
              key: '',
              id: 0,
              path: '/my-center/favorite-list'
            }
          ]
        }
      ]
    }
  },
  watch: {
    $route: {
      handler() {
        this.routePath = this.$route.path
      }
    }
  }
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
      white-space: nowrap;
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
