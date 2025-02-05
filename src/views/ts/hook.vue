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
import { useCounter, useFetch,useOnce } from "./hook/useCounter.js"
import _ from "lodash"
import fp from "lodash/fp";
const { count, increment } = useCounter()
const { count: count1, increment: increment1 } = useCounter()
const { data, error, loading, fetchData } = useFetch();

// console.log(data, error, loading, fetchData)
onMounted(async () => {
  await  fetchData('https://jsonplaceholder.typicode11.com/posts')
});

let method=useOnce((a)=>console.log(a))
method("useonce")
method("usetwo")
// curry flow组合
const log = _.curry((level, message) => {
  console.log(`[${level}] ${message}`);
});

const info = log("INFO");
const ERROR = log("ERROR");

info("系统启动成功");  // 👉 [INFO] 系统启动成功
ERROR("服务器崩溃");

const trim = (str) => str.trim();
const toLower = (str) => str.toLowerCase();
const capitalizeWords = (str) => str.replace(/\b\w/g, (c) => c.toUpperCase());

// const formatString = _.flow(trim, toLower, capitalizeWords);

// console.log(formatString("  hello WORLD   ")); // 👉 "Hello World"
const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '));

console.log(f('NEVER SAY DIE')); 
const firstLetterToUpper = fp.flowRight(
  fp.join('. '),  // 用 ". " 连接处理后的单词
  fp.map(fp.flowRight(fp.first, fp.toUpper)),  // 取单词首字母并转换为大写
  fp.split(' ')  // 按空格拆分单词
);

console.log(firstLetterToUpper('world wild web'))
const packageBox = (value) => ({
  value,
  map: (fn) => packageBox(fn(value)), // 处理盒子里的值
});

const package1 = packageBox("📦 原材料");
const package2 = package1.map((item) => item + " → 🏭 加工");
const package3 = package2.map((item) => item + " → 🚚 运输");
const package4 = package3.map((item) => item + " → 🏠 到达");
console.log(package4.value); //每一步都会保存自己的结果 Functor 

class Maybe {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return this.value == null ? this : new Maybe(fn(this.value));
  }

  getOrElse(defaultValue) {
    return this.value == null ? defaultValue : this.value;
  }
}

// ✅ 安全的物流流程（链式调用）
const logistics = new Maybe("📦 原材料")
  .map((item) => item + " → 🏭 加工")
  .map((item) => item + " → 🚚 运输")
  .map((item) => item + " → 🏠 到达");

console.log(logistics.getOrElse("🚫 无物流信息")); 
// 👉 "📦 原材料 → 🏭 加工 → 🚚 运输 → 🏠 到达"

// ✅ 处理 `null`，不会崩溃
const logisticsFail = new Maybe(null)
  .map((item) => item + " → 🏭 加工")
  .map((item) => item + " → 🚚 运输")
  .map((item) => item + " → 🏠 到达");

console.log(logisticsFail.getOrElse("🚫 无物流信息")); //maybe
// 👉 "🚫 无物流信息"
// Currying 组合 fp模块自动Curry,方法在前(之前的是兼容原生)，数据在后 chain链式
// point-free functor maybe either
</script>
<style scoped></style>