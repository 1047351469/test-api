<template>
    <div class="one-radio-group">
      <slot></slot>
    </div>
  </template>
  <script setup>
  import {provide,ref} from "vue"
 const props = defineProps({
   modelValue:null
}
)
const selectedValue = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);
const updateValue=(newValue) =>{
    selectedValue.value = newValue; // 更新内部值
   emit("update:modelValue",newValue)
}
provide('radioGroup', {
  updateValue,
  selectedValue
});
  </script>