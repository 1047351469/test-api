<template>
    <div class="one-form">
      <slot></slot>
    </div>
  </template>
  <script setup>
  const props = defineProps({
    modelValue: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }

})
  </script>