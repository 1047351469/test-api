<template>
    <div>
      <h1>List Page</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          <!-- 跳转到详情页 -->
          <router-link :to="`/detail/${item.id}`">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { onActivated, onDeactivated, ref, onMounted } from 'vue';
  
  const items = ref([]); // 列表数据
  const scrollPosition = ref(0); // 滚动位置
  
  // 恢复滚动位置
  onActivated(() => {
    window.scrollTo(0, scrollPosition.value);
  });
  
  // 保存滚动位置
  onDeactivated(() => {
    scrollPosition.value = window.scrollY;
  });
  
  // 模拟数据加载
  onMounted(() => {
    console.error("onMounted")
    items.value = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));
  });
  </script>
  