
<template>
  <!-- 默认按钮 -->
  <VEnhancedBtn color="primary" :debounce="5000"  @click="()=>console.log(11111111111)">
    默认按钮
  </VEnhancedBtn>

  <!-- 带图标 -->
  <VEnhancedBtn >
    11
  </VEnhancedBtn>

  <!-- Loading 按钮 -->
  <VEnhancedBtn color="success" :loading="isLoading" @click="startLoading" >
    加载按钮
  </VEnhancedBtn>

  <!-- 具名插槽 -->
  <VEnhancedBtn color="error">
    <template #prepend>
      <v-icon>mdi-alert</v-icon>
    </template>
    带前置图标
    <template #append>
      <v-icon>mdi-arrow-right</v-icon>
    </template>
  </VEnhancedBtn>

  <!-- Loader 插槽 -->
  <VEnhancedBtn color="blue" :loading="true">
    <template #loader>
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </template>
    自定义 Loading
  </VEnhancedBtn>
</template>

<script setup>
import {ref} from "vue"
import VEnhancedBtn from './VEnhancedBtn.vue'
const isLoading = ref(false);

const startLoading = () => {
  isLoading.value = true;
  setTimeout(() => (isLoading.value = false), 2000);
};
</script>
<style scoped>
:root {
  --v-field-border-radius: 40px !important;
}
</style>