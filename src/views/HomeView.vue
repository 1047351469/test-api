<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <v-list lines="one">
      <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"></v-list-item>
    </v-list>
  </main>
</template>
