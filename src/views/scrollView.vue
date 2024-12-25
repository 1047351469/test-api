<template>
    <div>
      <v-dialog v-model="isDialogOpen" max-width="800">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" text>Open Dialog</v-btn>
        </template>
  
        <template v-slot:default>
          <v-card class="dialog-card">
            <v-card-title>
              Use Google's location service?
            </v-card-title>
  
            <v-card-text>
              <div class="dialog-content">
                <p v-for="i in 100" :key="i">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. {{ i }}
                </p>
              </div>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="isDialogOpen = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isDialogOpen = ref(false);
  </script>
  
  <style scoped>
  /* 对话框样式 */
  .dialog-card {
    position: fixed; /* 固定对话框位置 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 800px;
    max-height: calc(100vh - 50px); /* 限制最大高度 */
    overflow: hidden; /* 禁止对话框内部滚动 */
  }
  
  /* 对话框的内容 */
  .dialog-content {
    overflow: visible; /* 确保溢出内容由 body 处理 */
  }
  
  /* Body 样式 */
  body {
    overflow-y: auto; /* 启用 body 滚动条 */
    height: auto; /* 允许滚动生效 */
  }
  </style>
  