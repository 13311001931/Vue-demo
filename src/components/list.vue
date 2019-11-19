<template>
  <div class="layout">
    <h1>列表页</h1>
    <p :style="{'font-size' : size ? '20px' : '40px' }">123456789</p>
    <a href="#" @click="toList">返回首页</a>
    <p>{{ obj.a }}</p>
    <Button @click="chengNumber">变1</Button>
    <edit>
      <p slot="aa">{{stringValue}}</p>
    </edit>
    <div style="font-size: 30px">欢迎您{{ $store.state.user.name }}</div>
  </div>
</template>

<script>
  // class obj {
  //   constructor () {
  //     this.id = '2'
  //     this.name = '张三'
  //   }
  //   getData () {
  //     // window.console.log(this,'this')
  //     this.id = 1
  //     this.name = '李四'
  //   }
  // }
  class Coder {
    name(val) {
      return val;
    }

    constructor() {
      // window.console.log(a,b,'ab')
      this.a = 1;
    }

    add(num) {
      // window.console.log(this.a)
      this.a = num
      return this
    }

  }

  import edit from './edit'

  export default {
    name: 'list',
    components: {edit},
    data() {
      return {
        obj: new Coder(),
        size: true,
        stringValue: 'abcdefd'
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        // new Promise( ( resolve) => {
        /**
         * 异步代码执行,
         * */
        //   setTimeout(resolve('参数009'),1000)
        // }).then((val) => {
        //   alert(val)
        // })

        window.console.log(this.$isEmpty())

        // window.console.log()

      },
      chengNumber() {
        this.obj = new Coder().add(5)
        // this.obj.a = 2
        this.log('2222')
      },
      toList() {
        /**
         * 1、路由传参有两种，可以用query params
         * query 配合 path
         * params 配合 name
         *
         * 2、router 与 route
         * router 是路由的实力对象，进行路由跳转
         * route 是正在跳转的路由对象，可以获取到数据
         * */
        this.$router.push({
          path: `/`,
          query: {id: 1}
        })
        // window.location.href = 'http://localhost:8080/#/'
      },
      log(val) {
        window.console.log(val)
      }
    },
  }
  /**
   * 1、获取父元素的属性
   *    this.$parent.data
   * 2、修饰符
   *    .sync : 父传子实现双向绑定，子组件 $emit("update:data","参数" )
   *    .stop : 阻止默认事件
   * 3、
   *
   *
   * */
  /**
   * 字符串
   *  1、charAt() 返回指定位置的字符
   *  2、split() 字符串分割为数组
   *  3、substring() 指定两个位置的字符
   * 数组
   *  1、concat() 合并数组
   * */
</script>

<style>

</style>