<template>
    <div class="one-input" :class="{'one-input_suffix':showSuffix}">
        <input class="one-input_inner" :class="{ 'is-disabled': disabled }" :placeholder="placeholder" 
        @input="handleInput"  :name="name" :disabled="disabled" :value="modelValue" :type="showPassword ? (passwordVisible ? 'text' : 'password') : type">
        <span class="one-input_suffix" >
   <i class="on-input_icon one-icon-cancel" v-if=" clearable && modelValue" @click="clear"></i>
   <i class="on-input_icon one-icon-visible" v-if="showPassword && type=='password'" @click="handlePassword"></i>
 </span>


    </div>
</template>
<script setup>
import {ref,computed} from "vue"
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue:{
        type:String
    },
    showPassword:{
        type:Boolean,
        default:false
    },
    clearable:{
        type:Boolean,
        default:false
    },

});
const  passwordVisible=ref(false)
const emit = defineEmits(['update:modelValue']);
 const  handleInput =(e)=> {
    emit('update:modelValue', e.target.value)
}
const clear=()=>{
    emit('update:modelValue',"")
}
const showSuffix=computed(()=>{
    return props.clearable|| props.showPassword
})
const handlePassword=()=>{
    passwordVisible.value=!passwordVisible.value
}
</script>
<style lang="scss" >
.one-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    .one-input_inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, 045, .355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }

        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}

.one-input_suffix{
    .one-input_inner{
      padding-right: 30px;
    }
    .one-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
  
</style>