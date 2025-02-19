<template>
    <!-- group radio的 width -->
    <v-radio-group class="group" :inline="true" v-model="radios" color="orange" width="600" max-width="600"
        min-width="300">
        <!-- stylecolor文字边框 color选中 radio盒子指定width大小-->
        <v-radio label="Radio One" value="one" style="width: 200px;"></v-radio>
        <v-radio label="Radio Two" value="two"></v-radio>
        <v-radio label="Radio Three" value="three"></v-radio>
    </v-radio-group>
    <v-checkbox color="red" v-model="selected" label="John" value="John"></v-checkbox>
    <!-- compact高度  loading hide-details error error-messages="我错了" active autofocus -->
     <!-- blur失去焦点 input总是 change失去焦点并且值变化 click focus-->
    <v-text-field :rules="[rules.required, rules.minLength(6), rules.containsNumber]"   v-model="test"   density="compact" clearable  solo rounded placeholder="placeholder" width="300" max-width="800" bg-color="#ccc" color="green"
        variant="outlined"></v-text-field>

    <v-form ref="form" style="width: 600px;">
        <v-radio-group
         ref="radioField"
      v-model="radio"
      :rules="[v => !!v || 'You must select one']"
      label="Select an Option"
      required
      
    >
      <v-radio label="Option 1" value="option1"></v-radio>
      <v-radio label="Option 2" value="option2"></v-radio>
      <v-radio label="Option 3" value="option3"></v-radio>
    </v-radio-group>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-select
       
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
       
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn
          class="mt-4"
          color="success"
          block
          @click="resetEmailValidation"
        >
          重置单个属性input,select
        </v-btn>
        <v-btn
          class="mt-4"
          color="success"
          block
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
          class="mt-4"
          color="error"
          block
          @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
          class="mt-4"
          color="warning"
          block
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </div>
    </v-form>
</template>

<script setup>
import { reactive, toRefs, onMounted, ref } from 'vue'
const radios = ref('two')
const radio= ref(null)
const selected = ref(['John'])
const test=ref("")
const radioField=ref(null)
const rules = {
  required: (value) => !!value || '密码不能为空',
  minLength: (min) => (value) => value.length >= min || `密码至少 ${min} 位`,
  containsNumber: (value) => /\d/.test(value) || '密码必须包含至少一个数字',
};
const form = ref()
const resetEmailValidation = () => {
  radioField.value.validate(); // 仅清除错误提示
setTimeout(() => {
    radioField.value.rules=[]
}, 3000);
  
};
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const name = ref('')
  const nameRules = ref([
    v => !!v || 'Name is required',
    v => (v && v.length <= 10) || 'Name must be 10 characters or less',
  ])
  const select = ref(null)
  const checkbox = ref(false)

  async function validate () {
    const { valid } = await form.value.validate()

    if (valid) alert('Form is valid')
  }
  function reset () {
    form.value.reset()
  }
  function resetValidation () {
    form.value.resetValidation()
  }
</script>
<style scoped>
.v-selection-control {
    background-color: pink;
    padding-right: 10px;
    margin-right: 20px;
    border-radius: 20px;
}

/* 小圆不被默认背景覆盖 */
::v-deep(.v-selection-control__input) {
    width: 18px !important;
    height: 18px !important;
    background-color: white !important;
}
.v-text-field ::v-deep(.v-field) {
    /* 改变边框 */
    border-radius: 8px;
}

:deep(.v-input.v-input--error .v-input__control) {
  background-color: orange !important; /* 浅红色背景#ffebee */
}
</style>