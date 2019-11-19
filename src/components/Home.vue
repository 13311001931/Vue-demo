<template>
  <div class="layout">
    <h1>首页</h1>
    <p>{{ $store.state.user.name }}</p>
    <Button type="success" @click="login('李四')">李四登录</Button>
    <Button type="success" @click="login('老五')">老五登录</Button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
  },
  created() {
    // 获取路由传递的参数
    // alert(this.$route.query.id)
  },
  watch: {
  },
  methods: {
    ...mapActions(['handleName']),
    login (name) {
      this.handleName(name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_div {
  height: 100%;
  width:100%;
  background: #222222;
}
</style>
