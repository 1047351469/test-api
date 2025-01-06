
<template>
  <div>
    <div class="div">11</div>
    <div class="test">test</div>
    <ul>
      <li v-for="item in arr" :key="item.id">
        {{ item.name }}
        {{ item.age }}
      </li>
    </ul>
    <button @click="increment"> {{ count }}</button>
    <button @click="increment1"> {{ count1 }}</button>
    <span v-html="text"></span>
    <span>{{ str }}</span>
   <son ref="mySon" name="name" @test="(str)=>console.error('hello'+str)"></son>
   <son ></son>
   <todo-delete-button></todo-delete-button>
  </div>
</template>

<script setup lang="ts">
import {onMounted,ref,provide } from 'vue'
import {useCount} from "./hooks/useCounter"
const {count,increment,sum} = useCount(2,3)
const {count:count1,increment:increment1} = useCount(1,5)
const text="<h1>test</h1>"
import "./hooks/testTs"
import Son from "./Son.vue"
type Item={
  id:number,
  name:string,
  age:number
}
const arr=ref<Item[]>([
  {id:1,name:'name1',age:18},
  {id:2,name:'name2',age:19},
  {id:3,name:'name3',age:20}
])

const mySon=ref(null)
onMounted(()=>{
  console.error(mySon.value.url)
})
const key=ref("hello")

setTimeout(()=>{
  key.value="key"
},3000)
provide('key',key)
provide("onMounted",(str)=>{console.error(str)})
const test=ref<number|string>(1)
test.value="1"
</script>
<style scoped lang="scss">
button{
    margin: 10px;
}
:deep(.father .son){
    color:pink
}
</style>