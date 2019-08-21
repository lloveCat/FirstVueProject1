<template>
<div id="myDiv" v-on:click.self="clickMyDiv">       <!-- 使用组件标签需要一个根标签，否则报错-->
<h1>hehe</h1>
  <MyFirstComponent :myData="object"></MyFirstComponent>     <!-- HH组件给子组件MyFirstComponent传值，Key:title,value:countS-->
  <MyFirstComponent :myData="object"></MyFirstComponent>     <!-- 传值方式title = "{{countS}}"/title = {{countS}}不可使用-->
  <MyFirstComponent :myData="object"></MyFirstComponent>     <!-- 应使用 :key = "value"方式  <==> v-bind:key = "value"-->
</div>
</template>
<script>
import MyFirstComponent from '@/components/MyFirstComponent'    //引用MyFirstComponent组件,使用./MyFirstComponent相对定位找不到
export default {
  name: 'HH',
  data() {
    // return {countS: 0}   //返回一个整形
    return {
      object : {            //返回一个对象
        a : 0,
        b : 2
      }
    }
  },
  components: {MyFirstComponent},      //声明MyFirstComponent是当前组件的子组件，否则上面的MyFirstComponent组件显示异常
  methods: {
    clickMyDiv: function (event) {
      alert('doMyDiv')
    }
  }
}
</script>
<style scoped>
  #myDiv{
    width: 400px;
    height: 400px;
    background-color: lavender;
    margin: 0 auto;
  }

</style>


<!--  传值Value传递给子组件属于值传递（同java,传递数据在栈中的存储值--基本类型：值，对象：引用地址），即栈存储数据（如基本类型数据）互不影响，堆存储数据会互相影响
      个人好理解所以把之称为栈和堆，Vue中可能没有这个概念,
       1.这里的title传递的是一个int基本类型整形，子组件改变其值时，父组件中不影响。不污染，但数据不共享
       2.这里的title传递的是一个对象object,含有a,b两个属性。子组件改变a的值，父组件及其他组件的值都发生了改变。会污染，但可以达到数据共享
