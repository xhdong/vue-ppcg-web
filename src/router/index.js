import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import LayoutMyCenter from '@/layout-supplier'
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: '首页' }
      },
      {
        path: 'bidding',
        component: () => import('@/views/bidding/index'),
        name: 'Bidding',
        meta: { title: '招标公告' }
      },
      {
        path: 'change',
        component: () => import('@/views/change/index'),
        name: 'Change',
        meta: { title: '变更公告' }
      },
      {
        path: 'win',
        component: () => import('@/views/win/index'),
        name: 'Win',
        meta: { title: '中标结果' }
      },
      {
        path: 'recruit',
        component: () => import('@/views/recruit/index'),
        name: 'Recruit',
        meta: { title: '供应商招募' }
      },
      {
        path: 'company-information',
        component: () => import('@/views/company-information/index'),
        name: 'CompanyInformation',
        meta: { title: '公司资料' }
      }
    ]
  },
  {
    path: '/supplier',
    component: LayoutMyCenter,
    redirect: '/index',
    hidden: true,
    children: [
      {
        path: 'company-information',
        component: () => import('@/views/company-information/index'),
        name: 'CompanyInformation',
        meta: { title: '公司资料' }
      },
      {
        path: 'message-center',
        component: () => import('@/views/supplier/message-center/index.vue'),
        name: 'MessageCenter',
        meta: { title: '消息中心' }
      },
      {
        path: 'message-detail',
        component: () => import('@/views/supplier/message-detail/index.vue'),
        name: 'MessageDetail',
        meta: { title: '消息详情' }
      },
      {
        path: 'online-registration',
        component: () => import('@/views/supplier/online-registration/index.vue'),
        name: 'OnlineRegistration',
        meta: { title: '在线报名' }
      },
      {
        path: 'my-bidding',
        component: () => import('@/views/supplier/my-bidding/index.vue'),
        name: 'MyBidding',
        meta: { title: '我的投标' }
      },
      {
        path: 'bidding-detail',
        component: () => import('@/views/supplier/bidding-detail/index.vue'),
        name: 'BiddingDetail',
        meta: { title: '投标详情' }
      },
      {
        path: 'online-question',
        component: () => import('@/views/supplier/online-question/index.vue'),
        name: 'OnlineQuestion',
        meta: { title: '在线提疑' }
      },
      {
        path: 'question-info',
        component: () => import('@/views/supplier/question-info/index.vue'),
        name: 'QuestionInfo',
        meta: { title: '在线信息' }
      },
      {
        path: 'suspend-notice',
        component: () => import('@/views/supplier/suspend-notice/index.vue'),
        name: 'SuspendNotice',
        meta: { title: '中止公告' }
      },
      {
        path: 'clarify-notice',
        component: () => import('@/views/supplier/clarify-notice/index.vue'),
        name: 'ClarifyNotice',
        meta: { title: '澄清公告' }
      },
      {
        path: 'notice-detail',
        component: () => import('@/views/supplier/notice-detail/index.vue'),
        name: 'NoticeDetail',
        meta: { title: '公告详情' }
      },
      {
        path: 'online-clarify',
        component: () => import('@/views/supplier/online-clarify/index.vue'),
        name: 'OnlineClarify',
        meta: { title: '在线澄清' }
      },
      {
        path: 'base-info',
        component: () => import('@/views/supplier/base-info/index.vue'),
        name: 'BaseInfo',
        meta: { title: '基本资料' }
      },
      {
        path: 'audit-logs',
        component: () => import('@/views/supplier/audit-logs/index.vue'),
        name: 'AuditLogs',
        meta: { title: '审核日志' }
      },
      {
        path: 'permission-file',
        component: () => import('@/views/supplier/permission-file/index.vue'),
        name: 'PermissionFile',
        meta: { title: '授权文件' }
      },
      {
        path: 'agent-manage',
        component: () => import('@/views/supplier/agent-manage/index.vue'),
        name: 'AgentManage',
        meta: { title: '分公司/代理商管理' }
      },
      {
        path: 'parent-subsidiary-company',
        component: () => import('@/views/supplier/parent-subsidiary-company/index.vue'),
        name: 'ParentSubsidiaryCompany',
        meta: { title: '母子公司关系绑定' }
      },
      // {
      //   path: 'account-manage',
      //   component: () => import('@/views/supplier/account-manage/index.vue'),
      //   name: 'AccountManage',
      //   meta: { title: '账号管理' }
      // },
      {
        path: 'change-password',
        component: () => import('@/views/supplier/change-password/index.vue'),
        name: 'ChangePassword',
        meta: { title: '修改密码' }
      },
      {
        path: 'favorite-list',
        component: () => import('@/views/supplier/favorite-list/index.vue'),
        name: 'FavoriteList',
        meta: { title: '收藏夹' }
      }
    ]
  },
  {
    path: '/register',
    component: Layout,
    redirect: 'noRedirect',
    hidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/register/index'),
        name: 'Register',
        meta: { title: '注册页' }
      }
    ]
  },
  {
    path: '/detail',
    component: Layout,
    redirect: 'noRedirect',
    hidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/detail/index'),
        name: 'Detail',
        meta: { title: '详情页' }
      }
    ]
  },
  {
    path: '/material-selector',
    component: () => import('@/views/material-selector/index'),
    hidden: true,
    name: 'MaterialSelector',
    meta: { title: '材料选择' }
  },
  {
    path: '/service-selector',
    component: () => import('@/views/service-selector/index'),
    hidden: true,
    name: 'ServiceSelector',
    meta: { title: '服务内容选择' }
  },
  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = [
  // 404必须放在动态路由表的最下面
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
console.log('router: ', router)
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
