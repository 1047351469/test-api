<!--  -->
<template>
  <div>
    <user-form v-model.uppercase="message" @sayHello="sayHello" v-model:title="title" v-model:count="count" ></user-form>
    <user-table :headers="headers" :items="items"></user-table>
    <p-input></p-input>
    <func></func>
    <hook></hook>
     <p-use-btn></p-use-btn>
     <p-use-input></p-use-input>
     <v-icon color="$vuetify"></v-icon>
     {{ age }}
    <a ref="link" href="https://www.baiducom" id="link">百度</a>
    <sone :age="age" ref="son"  @printMsg="printMsg"></sone>
    <life></life>
    
  </div>
</template>

<script setup lang="ts">
import PInput from "./form/pInput.vue"
import { reactive,toRefs,onMounted,ref,provide} from 'vue'
import func from "./func.vue"
import Sone from "./Sone.vue"
import Life from "./Life.vue"
import PUseBtn from './PUseBtn.vue'
import PUseInput from './PUseInput.vue'
import hook from './hook.vue'
import "./form/test.js"
import UserForm from "./UserForm.vue"
import UserTable from "./UserTable.vue";
const sayHello=(name:string)=>{
  console.log(`Hello, ${name}!`)
}
const message = ref("Hello Vue 3!");
const title = ref("Vue 3");

// import "./index.ts"
const headers = ref([
        { title: 'username', key: 'username', sortable: false },
        { title: 'gender', key: 'gender', sortable: false },
        { title: 'address', key: 'address', sortable: false },
        { title: 'hobbies', key: 'hobbies', sortable: false },
        { title: 'introduction', key: 'introduction', sortable: false },
        { title: "Actions", key: "actions", sortable: false },
    ])
    const items=ref([
        {id:1, username: 'Alice', gender: 'Female', address: 'New York', hobbies: ['reading', 'painting'], introduction: 'I am a passionate and creative person' },
        {id:2, username: 'Bob', gender: 'Male', address: 'Los Angeles', hobbies: ['sports', 'cooking'], introduction: 'I am a loving and patient person' },  
    ])
    const showUser = (item) => {
   
    }
   const deleteUser = (id:number) => {
      items.value=items.value.filter(item => item.id!=id)
  };
let count=ref(1)
const changeCount=()=>{
    count.value++
}
provide("obj",{
  count,
  changeCount
})
let link=ref(null)
const son=ref(null)
onMounted(()=>{
    console.error(link.value)
    console.error(son.value.son)
})
let name=ref("success")
let age=ref(1)
const changeName=()=>{
    age.value+=1   
    name.value=age.value%2==0?"primary":"danger"
}
setInterval(changeName,100000)
changeName()
const printMsg=(val)=>{
    console.log(val)
}


</script>
<style scoped>
</style>