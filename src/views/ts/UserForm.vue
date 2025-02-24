<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import UserTable from "./UserTable.vue";
defineProps<{ modelValue: string, title: string; count: number  }>();
defineEmits<{
  (event: "sayHello", value: string): void;
  (event: "update:modelValue", value: string): void;
  (event: "update:title", value: string): void;
  (event: "update:count", value: number): void;
}>();
const form=ref<any>(null)
interface Address{
  street:string,
  city:string,
  zip:string,
}
interface User{
  id:number,
  name:string,
  active:boolean,
  age:number,
  balance:number,
  roles:string[],
  address:Address,
  preferences:{
    theme:string,
    language:"en"|"cn"|"jp",
    notifications?:true
  },
  [key:string]:any
  

}
let user:User={
  id:1,
  name:"John Doe",
  active:true,
  age:30,
  balance:1000,
  roles:["admin"],
  address:{
    street:"123 Main St",
    city:"New York",
    zip:"12345"
  },
  preferences:{
    theme:"light",
    language:"en",
    notifications:true
  },
  gender:true,
  job:"student"
}
axios.request({
  method: 'post',
  url: 'http://localhost:8083/test/getUserConfig',
  data:user
})
 .then(response => {
     console.log(response);
  })


// Form data
const formData = ref({
  id:null,
  username: "",
  gender: "",
  address: "",
  hobbies: [] as string[],
  introduction: "",
});

// Address options
const addressOptions = ["New York", "Los Angeles", "San Francisco", "Chicago", "Houston"];


// Hobby options
const hobbyOptions = ["Reading", "Travel", "Gaming", "Sports"];

// Validation rules
const rules = {
  required: (v: string) => !!v || "This field is required",
  minLength: (v: string) => (v.length >= 2) || "Minimum 2 characters required",
  maxLength: (v: string) => (v.length <= 4) || "Maximum 4 characters allowed",
  checkArray: (v: string[]) => (v.length > 0) || "Select at least one",
};

// Submit form
const submitForm = async () => {
  const { valid } = await form?.value?.validate();
  if(!valid){

  }
};

// Reset form values and validation
const resetForm = () => {
  formData.value = {
    id:null,
    username: "",
    gender: "",
    address: "",
    hobbies: [],
    introduction: "",
  };
  form.value.reset(); // Reset validation
};
</script>

<template>
  <v-container>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value.toUpperCase())" />
    <input :value="title" @input="$emit('update:title', $event.target.value)" />
  <button @click="$emit('update:count', count + 1)">+1</button>
  {{ count }} {{ title }}
    <v-card class="pa-4" style="width:500px">
       <p @click="$emit('sayHello', 'caijie')">UserForm{{ modelValue }}</p>
      <v-card-title>UserForm</v-card-title>
      <v-form ref="form">
        <!-- Username -->
        <v-text-field
          v-model="formData.username"
          label="Username"
          :rules="[rules.required, rules.minLength, rules.maxLength]"
        ></v-text-field>

        <!-- Gender -->
        <v-radio-group inline v-model="formData.gender" label="Gender" :rules="[rules.required]">
          <v-radio label="Male" value="Male"></v-radio>
          <v-radio label="Female" value="Female"></v-radio>
          <v-radio label="Other" value="Other"></v-radio>
        </v-radio-group>

        <!-- Address -->
        <v-select
          v-model="formData.address"
          label="Address"
          :items="addressOptions"
          :rules="[rules.required]"
        ></v-select>
        <v-list-subheader>hobby</v-list-subheader>
        <v-row >
           <v-col cols="3" v-for="hobby in hobbyOptions" :key="hobby">
            <v-checkbox :rules='[
                (v: string[]) => v.length > 0 || "At least one hobby is required",
                (v: string[]) => v.length <= 3 || "You can select up to 3 hobbies"
            ]' v-model="formData.hobbies"  :label="hobby" :value="hobby">
            </v-checkbox>
           </v-col>
        </v-row>
         
       

        <!-- Self Introduction -->
        <v-textarea
          v-model="formData.introduction"
          label="Self Introduction"
          :rules="[rules.required, rules.maxLength]"
        ></v-textarea>

        <!-- Actions -->
        <v-row class="mt-4">
          <v-col cols="6">
            <v-btn color="primary" @click="submitForm">Submit</v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn color="error" @click="resetForm">Reset</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
