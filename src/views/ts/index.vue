<!--  -->
<template>
  <div>
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

<script setup>
import { reactive,toRefs,onMounted,ref,provide} from 'vue'
import Sone from "./Sone.vue"
import Life from "./Life.vue"
import PUseBtn from './PUseBtn.vue'
import PUseInput from './PUseInput.vue'
import hook from './hook.vue'
// import "./index.ts"
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