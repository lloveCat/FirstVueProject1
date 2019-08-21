<template>
  <div>
    <input type="input" placeholder="thie is input" v-on:input="iInput" v-model="inputValue" />  <!-- input输入事件，value与inputValue双向绑定 -->
    <p>input Message : {{inputValue}}</p>
    <hr>
    <textarea placeholder="this is textarea" v-on:input="TAInput" v-model="TAValue"/>
    <p>textArea Message : {{TAValue}} </p>
    <hr>
    <select name="select" v-model="selectValue">
      <option value="laihuihui">赖晖晖</option>
      <option value="gengjia">耿甲</option>
      <option value="huangdi">黄帝</option>
    </select>
    <p>select Message : {{TAValue}} </p>
    <hr>
    <input type="checkbox" name="checkbox" value="bb" />篮球
    <input type="checkbox" name="checkbox" value="fb" />足球
    <input type="checkbox" name="checkbox" value="cb" />羽毛球
    <hr>
    <input type="radio" name="radio" value="m" v-on:change="">男
    <input type="radio" name="radio" value="f">女
  </div>
</template>

<script>
  export default {
    name: 'Model',
    data () {
      return {
        inputValue: '',
        TAValue: '',
        selectValue: ''
      }
    },
    created(){},
    methods: {
      iInput: function (event) {
        alert( 'inputMessage :  ' + this.inputValue)
      },
      clickTA: function (event) {
        alert('click textArea')
      },
      TAInput: function (event) {
        alert( 'textAreaMessage :  ' + this.TAValue)
      }
    }
  }
</script>
