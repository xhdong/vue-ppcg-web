import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
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
