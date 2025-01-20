<template>
  <div class="one-switch" :class="{'is-checked':modelValue}" @click="handleClick">
    <span class="one-switch_core" ref="core" :style="{borderColor:color,backgroundColor:color}">
      <span class="one-switch_button"></span>
    </span>
    <input type="checkbox" class="one-switch_input" :name="name" ref="input">

  </div>
  </template>

<script setup>
import {watch,ref,onMounted} from "vue"
const props = defineProps({
    modelValue: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inactiveColor: {
      type: String,
      defualt: ''
    },
    name: {
      type: String,
      defualt: ''
    }

})
const emit = defineEmits(['update:modelValue']);
const color=ref(null)
onMounted(()=>{
    color.value=props.modelValue ?props.activeColor:props.inactiveColor
})
watch(()=>props.modelValue,(val)=>{
    color.value=val ?props.activeColor:props.inactiveColor
})
const handleClick= ()=>{
   emit("update:modelValue",!props.modelValue)
  
}

</script>
<style lang="scss" scoped>
.one-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .one-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .one-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
  // 选中样式
  .is-checked {
    .one-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .one-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .one-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

</style>
