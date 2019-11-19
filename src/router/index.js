import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import list from '../components/list'
import echarts from '../components/echarts'
import edit from '../components/edit'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path:'/',
    name:'/',
    component:Home,
    meta:{
      title:'首页',
      parent: '1',
      check: true
    }
  },
  { path:'/list',
    name:'list',
    component: list,
    meta:{
      title: '列表页',
      parent: '2',
      check: false
    }
  },
  {
    path:'/echarts',
    name:'echarts',
    component: echarts,
    meta:{
      title: 'echarts',
      parent: '2',
      check: false
    }
  },
  {
    path:'/edit',
    name:'edit',
    component: edit,
    meta:{
      title: 'edit',
      parent: '3',
      check: false
    }
  }
]
export default new VueRouter({
  routes
})