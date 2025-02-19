<script setup lang="ts">
import { ref } from "vue";
import UserTable from "./UserTable.vue";
const form=ref<any>(null)
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

    <v-card class="pa-4" style="width:500px">
       
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
