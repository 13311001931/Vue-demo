<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              Vue-demo
            </div>

          </Menu>
        </Header>
        <Layout class="centerBox">
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu
              accordion
              ref="sideMenu"
              :active-name="activeName"
              theme="primary"
              width="auto"
              :open-names="openNames"
              @on-select="menuChange">
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  列表页
                </template>
                <MenuItem name="/list">列表1</MenuItem>
                <MenuItem name="/echarts">echarts</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  编辑
                </template>
                <MenuItem name="/edit">编辑1</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <div style="background-color: #d7dde4;height: 40px;width: 100%; line-height: 40px; padding: 0 15px;margin: 10px 0">
              <Tag size="large" :color="isCheck ? 'success' : 'default'">首页</Tag>
              <Tag
                closable
                checkable
                v-for="(item, index) in tagList"
                :color="item.meta.check === true ? 'success' : 'default'"
                ref="tagsPageOpened"
                :key="index"
                :name="item.name"
                @on-change="tagClick(item)"
              >{{ item.meta.title }}</Tag>
            </div>
            <Content :style="{padding: '24px', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      activeName: '/',
      openNames: ['1'],
      tagList: [],
      success: 'sess'
    }
  },
  created () {
  },
  computed: {
    isCheck () {
      return this.tagList.length === 0
    }
  },
  watch: {
    '$route' (newRoute) {
      this.log(this.$route.params,'params')
      const nameFlag = this.tagList.filter( it => it.name === newRoute.name)
      this.tagList.forEach( it => it.meta.check = false)
      newRoute.meta.check = true
      nameFlag.length === 0 && this.tagList.push(newRoute)
    }
  },
  methods: {
    menuChange (val) {
      const name = val.substring(1)
      this.log(`${name}1111111111111`)
      this.$router.push({
        name,
        params: {
          id: 33
        }
      })
    },
    tagClick (val) {
      this.log(val)
    },



















    log (val) {
      window.console.log(val)
    }
  }
}
</script>

<style>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    line-height: 30px;
    text-align: center;
    color: azure;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .centerBox {
    height: 100%;
  }
  body,html {
    height: 100%;
  }
  #app {
    height: 100%;
  }
  .layout {
    height: 100%;
  }
  .ivu-layout {
    height: 100%;
  }
  .centerBox {
    height: 100%;
  }
  .Avatar {
    height: 40px;
    width: 40px;
    background: url("./assets/001.jpg") no-repeat;
    background-size: 40px 40px;
    border-radius: 50%;
  }
</style>
