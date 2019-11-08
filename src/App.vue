<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              Vue-demo
            </div>
            <div class="demo-avatar" style="position: relative; left: 1246px; top: 12px">
              <div class="Avatar"></div>
            </div>
          </Menu>
        </Header>
        <Layout class="centerBox">
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="1-2" @on-select="menuChange" theme="light" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  列表页
                </template>
                <MenuItem name="/list">列表1</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  详情页
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  编辑页
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', background: '#fff'}">
              <router-view></router-view>
            </Content>
<!--            <router-view></router-view>-->
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

    }
  },
  methods: {
    menuChange (val) {
      this.$router.push({
        path: `${val}`,
      })
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
