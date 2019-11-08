import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import list from '../components/list'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home},
  {path:'/list',component: list}
]
export default new VueRouter({
  routes
})