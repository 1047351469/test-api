<template>
    <div>
      <h1>Detail Page</h1>
      <p>Details for item ID: {{ id }}</p>
      <button @click="goBack">Back to List</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const id = ref(null);
  
  // 获取动态参数
  onMounted(() => {
    id.value = route.params.id;
  });
  
  // 返回列表页
  const goBack = () => {
    router.push('/list');
  };
  </script>
  