<template>
  son{{name}}{{`--${key}-`}}
  <a :[href]="url" @[eventName]="method">百度</a>
  <div class="father">
    <div class="son">
        son
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

import {onMounted,inject } from 'vue'
type Props={
  name?:string
}


type Emits={
    (e:"test",str:string):string
}
const props= withDefaults(defineProps<Props>(), {
  name:"default",
})
const emit=defineEmits<Emits>()

const url="#"
const href="href"
const eventName="click"
defineExpose({
  url,
  href
})
const mounted=inject("onMounted")
const method=()=>{
    console.log('Method called');  // Output: Method called
    emit("test","hello world")
    mounted('test')
    
}
const key=inject("key")
onMounted(()=>{
    
    console.log(`Mounted son component with name: ${props.name}`);  // Output: Mounted son component with name: Default Name
})

</script>
<style lang="scss" scoped>
  .father{
    width: 40px;
    height: 40px;
    border: 1px solid green;
    padding: 10px;
    color:yellow;
    .son{
      color:aqua;
    }
  }
</style>
