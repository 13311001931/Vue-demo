import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import router from './router'

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
