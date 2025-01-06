
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
   <v-container>
    <v-form ref="formRef" v-model="isFormValid">
      <!-- 输入框 -->
      <v-text-field
        label="Name"
        v-model="formData.name"
        :rules="shouldValidate ? nameRules : []"
        ref="nameField"
      ></v-text-field>

      <!-- 提交按钮 -->
      <v-btn @click="handleSubmit">Submit</v-btn>
    </v-form>

    <p>Validation Result: {{ validationMessage }}</p>
  </v-container>
  </div>
</template>

<script setup lang="ts">
import {onMounted,ref,provide,nextTick } from 'vue'
import {useCount} from "./hooks/useCounter"
const {count,increment,sum} = useCount(2,3)
const {count:count1,increment:increment1} = useCount(1,5)

// 表单数据
const formData = ref({
  name: "",
});
const nameField = ref(null);
// 是否启用校验
const shouldValidate = ref(false);

// 校验规则
const nameRules = [
  (v) => !!v || "Name is required",
  (v) => v.length >= 3 || "Name must be at least 3 characters",
];

// 表单整体状态
const isFormValid = ref(false);

// 校验结果信息
const validationMessage = ref("");

// 提交按钮处理
const handleSubmit =async () => {
  shouldValidate.value = true; // 启用校验
  await nextTick()
   nameField.value.validate()
   nameField.value.resetValidation();
};
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