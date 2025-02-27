<template>
    <div>
      <p style="color:red">Hello, {{ msg }}</p>
      <button @click="count++">Count: {{ count }}</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  defineProps<{ msg: string }>()
  const count = ref(0)
  </script>
  