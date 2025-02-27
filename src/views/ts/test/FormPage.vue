<template>
    <v-container>
      <v-text-field data-testid="query" v-model="query" label="请输入查询条件" />
      <v-btn @click="fetchData">查询</v-btn>
      <v-radio-group v-model="selectedItem">
        <v-radio v-for="item in results" :key="item.id" :label="item.name" :value="item.id" />
      </v-radio-group>
  
      <v-btn @click="submitForm">提交</v-btn>
    </v-container>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
console.log(import.meta.env.MODE); 
if (process.env.NODE_ENV === 'development') {
  const mock = new MockAdapter(axios);

  // 模拟 GET 请求
  mock.onGet('/api/search').reply(200, [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // 模拟 POST 请求
  mock.onPost('/api/submit').reply(200, {
    message: '提交成功',
  });
}

  const router = useRouter()
  const query = ref('')
  const results = ref([])
  const selectedItem = ref(null)
  
  const fetchData = async () => {
    const res = await axios.get(`/api/search`, { params: { q: query.value } })
    results.value = res.data
  }
  
  const submitForm = async () => {
    await axios.post('/api/submit', { selected: selectedItem.value })
    router.push('/about')
  }
  async function randomAsyncOperation() {
    let data=await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) { // 50% 成功概率
          resolve("Success1!");
        } else {
          resolve("Success2!");
        }
      }, 1000); // 1秒后执行
    });
    return data
  }
  async function test1() {
    const result = await randomAsyncOperation();
    console.log("返回值:", result); // 直接返回 "Success!" 或 "Failure!"
  }
 
  test1()
  </script>
  