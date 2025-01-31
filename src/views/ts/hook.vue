<!--  -->
<template>
    <div>
        <a @click.prevent="increment" href="#">{{ count }}</a> <br />
        <a @click.prevent="increment1" href="#">{{ count1 }}</a>

        <div v-if="loading">加载中...</div>
        <div v-else-if="error">发生错误: {{ error.message }}</div>
        <ul v-else>
            <li v-for="post in data" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script setup>
import {onMounted} from "vue"
import { useCounter, useFetch } from "./hook/useCounter.js"
const { count, increment } = useCounter()
const { count: count1, increment: increment1 } = useCounter()
const { data, error, loading, fetchData } = useFetch();
// console.log(data, error, loading, fetchData)
onMounted(async () => {
  await  fetchData('https://jsonplaceholder.typicode11.com/posts')
});
</script>
<style scoped></style>