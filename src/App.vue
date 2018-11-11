<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{
    // 标签名也叫Tabbar
    Tabbar
  },
  // 默认路由 刷新页面时进入首页
  beforeCreate:function(){
    this.$router.push("/");
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
