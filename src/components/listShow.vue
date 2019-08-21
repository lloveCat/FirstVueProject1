<template>
  <div>
    <button v-on:click="clickCB">click me to change Arrays {{b}}</button>
    <button v-on:click="cCB">1111</button>    <!-- 检测非响应式数据 -->
    <h4>这是数组数组</h4>
    <ul>
      <li v-for="number in someArray"> {{number}}</li>      <!-- 整形数组 -->
    </ul>
    <h4>这是对象数组</h4>
    <ul>
      <li v-for="(ob, index) in someObject"> {{index}} : {{ob.name}}</li> <!--对象数组 -->
    </ul>
    <h4>这是对象</h4>
    <ul>
      <li v-for="(value,key,index) in oneObject"> {{index}} : {{key}} : {{value}}</li>    <!-- 对象的第一个属性为值，第二个属性为属性名，第三个属性为索引，规定的 -->
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListShow',
  data() {
    return {
      someArray: [1,2,3,4,5,6],
      someObject: [{name: 'laihuihui'},{name: 'gengjia'},{name: 'huangdi'},{name: 'linruzhen'},{name: 'zhengjunlong'}],
      oneObject: {name: 'laihuihui', age: 23, school: 'nanchang', home: 'ningdu'}
    }
  },
  methods: {        //添加方法属性
    clickCB: function (event) {
      // this.b = 3;                         //非响应式数据，修改不会触发视图更新。但值会随着视图更新重新渲染---比如b的值发生改变，未重新渲染。之后某些操作触发渲染，b的视图值也会更新
      // this.someArray[1] = 9
      // alert('' + this.someArray[1])       //这种方式改变数组值，但不触发视图更新。
      // this.$set(this.someArray,1, 9)      //使用set设置数组元素，不能使用this.someArray[1] = 9,这种方式不会渲染视图
      // this.someArray.push(1)              //使用push方法添加值可行  -------------像这种在原有数组上修改的方法叫做变异方法
      // this.someArray.pop(5)               //使用pop方法删除值可行
      // this.$delete(this.someArray,2)      //使用Vue.$delete删除值可行
      // this.someArray.splice(2,2)          //使用splice删除可行
      //替换数组Vue不会重新丢弃现有的数组dom重新绘制，而是重用
      //重用机制：将被替换数组的元素变更为替换数组的元素，从而达到类似在当前元素上做修改操作
      // this.someArray = this.someArray.slice(2,5)  //截取数组，获得一个新的数组---------------像这种直接过边数组的方法叫做非变异方法
                                                      //这样的方法还有比如filter(),concat()等。等同于this.someArray = [1,2,3,4,5,6]新数组
    },
    cCB: function (event) {
      this.b++;
      alert('' + this.b);
    }
  }
}
</script>
