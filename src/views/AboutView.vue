<template>
<div class="wenzi">这是一个非常长的文字内容</div>
 

<div class="father">
  <!-- 子 div 1 -->
  <div class="child child-1">
    <div class="grandchild grandchild-1-1">子1-子1</div>
    <div class="grandchild grandchild-1-2">子1-子2</div>
  </div>
  <!-- 子 div 2 -->
  <div class="child child-2">
    <div class="grandchild grandchild-2-1">子2-子1</div>
    <div class="grandchild grandchild-2-2">子2-子2</div>
  </div>
</div>

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
/* 父容器样式 */
.father {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: lightgray;
  border: 2px solid gray;
}

/* 子 div 样式 */
.child {
  flex: 1;
  display: flex;
  border: 2px solid black;
}

/* 子 div 区分颜色 */
.child-1 {
  background-color: lightblue;
}

.child-2 {
  background-color: lightgreen;
}

/* 孙子 div 样式 */
.grandchild {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid black;
}

/* 孙子 div 区分颜色 */
.grandchild-1-1 {
  background-color: lightcoral;
}

.grandchild-1-2 {
  background-color: lightsalmon;
}

.grandchild-2-1 {
  background-color: lightpink;
}

.grandchild-2-2 {
  background-color: lightyellow;
}

</style>
