<template>
  <div class="layout">
    <h1>列表页</h1>
    <a href="#" @click="toList">返回首页</a>
  </div>
</template>

<script>
  export default {
    name: 'list',
    created() {
      return {

      }
    },
    methods:{
      toList () {
        this.$router.push({
          path: `/`,
        })
        // window.location.href = 'http://localhost:8080/#/'
      }
    },
  }
</script>

<style>

</style>