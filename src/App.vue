<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>    <!-- router-view同Angular中的ng-view,用于展示路由中指定的内容,用于局部渲染 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
