<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
  
    <div class="wenzi">这是一个非常长的文字内容，可能会超出容器范围。</div>
    <TheWelcome />
  
    <v-list lines="one">
      <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"></v-list-item>
    </v-list>
  </main>
  <div class="modal">
  <p>这是一个模态框</p>
</div>
<table>
  <thead>
    <tr>
      <th>表头 1</th>
      <th>表头 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据 1</td>
      <td>数据 2</td>
    </tr>
  </tbody>
</table>
</template>

<style>
.wenzi {
  width: 100px;
  border: 1px solid black;
  overflow: hidden;
}

</style>
