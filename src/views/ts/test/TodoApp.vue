<template>
    <div>
      <div
        v-for="todo in todos"
        :key="todo.id"
        data-test="todo"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
        <input
          type="checkbox"
          v-model="todo.completed"
          data-test="todo-checkbox"
        />
      </div>
  
      <form data-test="form" @submit.prevent="createTodo">
        <input data-test="new-todo" v-model="newTodo" />
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // ✅ 定义响应式数据
  const newTodo = ref('')
  const todos = ref([
    { id: 1, text: 'Learn Vue.js 3', completed: false }
  ])
  
  // ✅ 定义添加 todo 的方法
  const createTodo = () => {
    debugger
    if (!newTodo.value.trim()) return  // 避免空输入
  
    todos.value.push({
      id: Date.now(), // 生成唯一 ID
      text: newTodo.value,
      completed: false
    })
    newTodo.value = '' // 清空输入框
  }
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  