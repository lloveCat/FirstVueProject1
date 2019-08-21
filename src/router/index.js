import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'    //引入HelloWorld.vue中的HelloWorld组件
import MyFirstComponent from '@/components/MyFirstComponent'
import HH from '@/components/hh'
import ListShow from '@/components/listShow'
import Model from '@/components/model'

Vue.use(Router)
// Vue.component("myfirstcomponent", {
//   data: {count : 0 },
//   template: '<button v-on:click="count++">myCount : {{ count }}</button>'
// })
Vue.filter('myFilter',function (value) {    //自定义过滤器，过滤内容为value，返回过滤结果
  return '共点击' + value;
})

export default new Router({
  routes: [
    {
      path: '/',          //路径为#/，向Router-view区域展示HelloWorld组件
      name: 'HelloWorld',
      component: HelloWorld
    },
    // },
    {
      path: '/add',     //路径为#/add,向Router-view区域展示MyFirstComponent组件
      name: 'listShow',
      component: ListShow
    },
    {
      path: '/test',  //路径为#/test,向Router-view区域展示HH组件
      name: 'HH',
      component: HH
    },
    {
      path: '/model',  //路径为#/test,向Router-view区域展示HH组件
      name: 'Model',
      component: Model
    }
  ]
})
