<template>
  son{{name}}{{`--${key}-`}}
  <a :[href]="url" @[eventName]="method">百度</a>
  <div class="father">
    <div class="son">
        son
    </div>
    <v-container>
    <v-form ref="formRef" v-model="valid">
      <!-- Name 输入框 -->
      <v-text-field
        label="Name"
        v-model="formData.name"
        :rules="nameRules"
        ref="nameField"
      ></v-text-field>

      <!-- Email 输入框 -->
      <v-text-field
        label="Email"
        v-model="formData.email"
        :rules="emailRules"
      ></v-text-field>

      <!-- 按钮触发 Name 校验 -->
      <v-btn @click="validateName">Validate Name</v-btn>
    </v-form>
  </v-container>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

import {onMounted,inject,ref } from 'vue'



// 表单数据
const formData = ref({
  name: "",
  email: ""
});

// 表单校验状态
const valid = ref(false);

// Name 校验规则
const nameRules = [
  v => !!v || "Name is required",
  v => v.length >= 3 || "Name must be at least 3 characters"
];

// Email 校验规则
const emailRules = [
  v => !!v || "Email is required",
  v => /.+@.+\..+/.test(v) || "Email must be valid"
];

// 获取表单引用
const formRef = ref(null);

// Name 字段的引用
const nameField = ref(null);

// 校验 Name 字段
const validateName = () => {
  if (nameField.value) {
    const isValid = nameField.value.validate(); // 校验 Name 字段
    console.log(`Name is ${isValid ? "valid" : "invalid"}`);
  }
};
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
    // width: 40px;
    // height: 40px;
    // border: 1px solid green;
    // padding: 10px;
    // color:yellow;
    .son{
      color:aqua;
    }
  }
</style>
