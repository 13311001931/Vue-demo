
export default {
  state: {
    user_id: 12311,
    name: '张三'
  },
  getter: {

  },
  mutations: {
    getUserName (state,name) {
      state.name = name
    }
  },
  actions: {
    handleName ({commit},name) {
      setTimeout(() => {
        window.console.log(11111111111111111111)
        commit('getUserName',name)
      },3000)
    }
  },
  modules: {

  }
}
/**
 * - state : 就想组件中的数据
 *      this.$store.state.count 获取store 中的状态
 * - getter : 类似组件中的计算属性，
 * - mutations : 改变store中状态的唯一方法,同步修改，不可以异步修改
 *      commit('xxx','参数')
 *      commit('xxx',{})
 * - actions : 异步执行后提交commit，不可以直接修改状态，因为如果两个异步同时修改状态，我们保证不了哪个先执行
*               Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
 * - modules ： 把store 分成 模块化
 * */