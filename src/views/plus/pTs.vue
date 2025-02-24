<template>
    <el-input
    v-model="formattedName"
    style="width: 240px"
    placeholder="Please input name"
    clearable
    ref="inputRef"
  />
    <p>name：{{ formattedName }}</p>
   <son :money="money" @update:money="handleMoneyUpdate" :submitMoney="submitMoney"></son>
    
</template>
<script setup lang="ts">
import { ref, computed, watch,onMounted } from 'vue'
 import { ElMessage } from 'element-plus'
const name = ref<string>('')

watch(name, (newValue, oldValue) => {
  console.log(`name变化: ${oldValue} → ${newValue}`)
})

const formattedName = computed<string>({
  get: () => {
    return name.value ? `👤 ${name.value}` : ''
  },
  set: (newValue: string) => {
    name.value = newValue.replace(/^👤\s*/, '')
  }
})
const inputRef = ref<HTMLInputElement | null>(null)
    onMounted(() => {
  inputRef.value?.focus()
})
import Son from "./Son.vue"
const money = ref<number>(100.0)

// 2️⃣ 监听 `update:money` 事件，更新 `money`
const handleMoneyUpdate = (newMoney: number) => {
  console.log('父组件收到新金额:', newMoney)
  money.value = newMoney
}

// 3️⃣ 提交金额的方法（传递给子组件）
const submitMoney = (amount: number) => {
  console.log('提交金额:', amount)
  ElMessage.success(`已提交金额: ¥${amount.toFixed(2)}`)
}
</script>

<style>


</style>