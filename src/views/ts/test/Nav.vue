<template>
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const admin = ref(false) // ✅ 使用 ref 代替 data()
  </script>
  