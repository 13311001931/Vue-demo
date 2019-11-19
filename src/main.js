import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import router from './router'
import echarts from 'echarts'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(iView)

Vue.prototype.$echarts = echarts
Vue.prototype.$isEmpty = function () {
  return true
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
