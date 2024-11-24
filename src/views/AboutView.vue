<template>
<div class="wenzi">这是一个非常长的文字内容</div>

  <!-- <div class="about">
    <h1>This is an about page</h1>
    <p>2 + 3 = {{ $math.add(2, 3) }}</p>
  </div> -->
</template>

<style>

</style>
<script lang="js" setup>
defineOptions({
  name: 'About', // 使用 defineOptions 设置组件名称
});
import { useLifecycleTiming } from '@/plugin/useLifecycleTiming.js';

// 引入生命周期统计
useLifecycleTiming();

</script>
<style scoped>
.wenzi {
  width: 100px;
  border: 1px solid yellow;
}
</style>
