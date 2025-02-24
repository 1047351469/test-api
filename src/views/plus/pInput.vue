<template>
    <div>
    <el-segmented v-model="trigger" :options="options" />
  </div>
  <div>
    <el-segmented v-model="tagType" :options="type" class="mr-5" />
    <el-segmented v-model="tagEffect" :options="effect" />
  </div>
    <el-input-tag
     :tag-type="tagType"
    :tag-effect="tagEffect"
    draggable
    :trigger="trigger"
      v-model="input"
      :disabled="false"
      :max="3"
      placeholder="Please input"
      aria-label="Please click the Enter key after input"
    >
    <template #prefix>
      <el-icon><ElementPlus /></el-icon>
    </template>
    <template #suffix>
      <el-icon><Search /></el-icon>
    </template>
    </el-input-tag>
    
    <el-rate
    v-model="value"
    :disabled="false"
    show-score
    :texts="['oops', 'disappointed', 'normal', 'good', 'great',]"
    show-text
    clearable 
    score-template="{value} points"
    :icons="icons"
    :void-icon="ChatRound"
    :colors="['#409eff', '#67c23a', 'red',]"
  />
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider   :max="10" placement="bottom" size="small" :step="2" show-input show-stops   v-model="value5" :show-tooltip="true" :format-tooltip="formatTooltip" />
  </div>
  <el-slider v-model="value1" range :marks="marks" />

  <el-switch
    v-model="value2"
    class="ml-2"
    :loading="loading2"
    :before-change="beforeChange2"
  />
  </template>
  
  <script lang="ts" setup>
  import {  reactive,ref } from 'vue'
  import type { CSSProperties } from 'vue'
  import { EVENT_CODE,ElMessage } from 'element-plus'
  import type { TagProps } from 'element-plus'
  import { ElementPlus, Search,ChatDotRound, ChatLineRound, ChatRound  } from '@element-plus/icons-vue'
  const type: Array<TagProps['type']> = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
]
const effect: Array<TagProps['effect']> = ['light', 'dark', 'plain']
    const tagType = ref<TagProps['type']>('primary')
        const tagEffect = ref<TagProps['effect']>('plain')
  const input = ref<string[]>(['tag1', 'tag2', 'tag3'])
    const trigger = ref<'Enter' | 'Space'>('Space')
    const options = [EVENT_CODE.enter, EVENT_CODE.space]
    const value = ref(2)
    const icons = [ChatRound, ChatLineRound, ChatDotRound] 
    const value5 = ref([4,8])
    const formatTooltip = (val: number) => {
  return val / 100
}

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>

const value1 = ref([30, 60])
const marks = reactive<Marks>({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: 'red',
      backgroundColor: 'yellow',
      fontSize: '50px'
    },
    label: '50%',
  },
})
const value2 = ref(false)
const loading2 = ref(false)
const beforeChange2 = (): Promise<boolean> => {
  loading2.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading2.value = false
    //   ElMessage.error('Switch failed')
    //   return reject(new Error('Error'))
      ElMessage.error('success')
      return resolve(true)
    }, 1000)
  })
}

  </script>