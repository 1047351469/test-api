<template>
    <div>
      <h1 :class="{ active: count > 0 }">Count: {{ count }}</h1>
      <button @click="increment">+</button>
      <v-btn @click="increment">v-btn++</v-btn>
      <button @click="decrement">-</button>
      <slot name="footer"></slot>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props=defineProps({
    start: { type: Number, default: 0 }
  })
  
  const count = ref(props.start)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  </script>
  
  <style>
  .active {
    color: red;
  }
  </style>
  