
<template>
  <div>{{ name }}
    {{ obj.count }}
    {{ age }}
  </div>
</template>

<script setup>
import { reactive,toRefs,onMounted,inject,ref,toRef,computed,watch,toRaw,watchEffect} from 'vue'
const props=defineProps({
    name:{
        type: String,
        default:"primary",
        requird: true,
        validator: (value) => ['primary','secondary','success','danger','warning'].includes(value)
    },
    age:{
        type: Number,
        default:20,
        validator: (value) => value >= 0
    }
})
const emits=defineEmits(["printMsg"])
emits("printMsg",1)
let obj=inject("obj")
onMounted(()=>{
  setInterval(() => {
    console.log(obj.count.value,"------count")
    obj.changeCount()
  }, 300000);
 
})
const {name,age}=toRefs(props)
console.log(toRaw(props),"toRaw")
setInterval(() => {
    console.log(age,"------age")
}, 100000);


let son=ref("sonRef")
defineExpose({son})
</script>
<style scoped>
</style>