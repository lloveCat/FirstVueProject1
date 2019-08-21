// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({       //这里创建Vue对象，使原生标签div成为Vue组件系统中的根组件
  el: '#app',   //绑定到id为app的div上，即index.html中的div，告诉Vue,id为app的div标签现在成为Vue组件了
  router,       //根Vue使用路由，router为router目录中的Router对象
  components: { App },  //App为当前Vue应用的子组件
  template: '<App/>'    //向应用标签div中添加<App/>标签，即组件APP
})
