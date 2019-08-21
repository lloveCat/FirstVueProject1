<template>  <!--  当前组件的显示模板 -->
  <div v-if="myData.b == 2">    <!-- Vue指令，v-if同if -->
      <button v-on:click.stop="myData.a++" v-once>myCount : {{ myData.a }}</button>
    <div>
      <button v-on:click.middle="myData.a++">myCount : {{ myData.a }}</button>
    </div>
  </div>
  <!-- 插值使用{{ prop/expression }} mustache表达式 -->
  <!-- {{* count }}/v-once（vue 1.0/vue 2.0）标识单次插值，即值在第一次插值完成之后不发生显示改变 -->
  <!-- 上述中，按钮一单次插值，显示始终为第一次渲染的值，但按钮二的值增加，说明调用了函数值增加了，但不渲染 -->
</template>
<script>
export default {      //相当于定义组件体   Vue.component('MyFirstComponent', {template:...,data...})
  name: 'MyFirstComponent',
  data (){
    return {
      count: 0
     }
   },
  props: ['myData']      //属于值传递，如果myData为栈存储，则不污染父组件中的值，而如果为对象，则污染,具体见hh.vue
}
</script>
