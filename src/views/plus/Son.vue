<template>
 <label for="money">输入金额：</label>
    <el-input id="money" v-model="formattedMoney"  placeholder="输入金额" @blur="updateMoney"/>
    <p>当前金额：{{ formattedMoney }}</p>
    <button @click="submit">提交金额</button>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue'

// 1️⃣ 接收 `money` 和 `submitMoney` 方法（通过 `props`）
interface Props {
  money: number
  submitMoney: (value: number) => void // 父组件提供的方法
}
const props = defineProps<Props>()

// 2️⃣ 创建 `localMoney` 响应式变量，初始值来自 `props.money`
const localMoney = ref<number>(props.money)

// 3️⃣ 计算属性：格式化显示金额（带 ¥ 符号）
const formattedMoney = computed<string>({
  get: () => `¥ ${localMoney.value.toFixed(2)}`,
  set: (newValue: string) => {
    // 移除 "¥" 并转换为数字
    localMoney.value = parseFloat(newValue.replace(/[^\d.]/g, '')) || 0
  }
})

// 4️⃣ 定义 `emits`，用于通知父组件 `money` 变化
const emit = defineEmits<{
  (event: 'update:money', value: number): void
}>()

// 5️⃣ 当金额变化时，通知父组件更新 `money`
const updateMoney = () => {
  emit('update:money', localMoney.value)
}

// 6️⃣ 触发 `submitMoney` 方法（提交金额）
const submit = () => {
  props.submitMoney(localMoney.value)
}
</script>
<style scoped>
</style>