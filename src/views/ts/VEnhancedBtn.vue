<script setup>
import { defineProps, useAttrs, useSlots, ref } from "vue";
import { VBtn } from "vuetify/components";

const props = defineProps({
  loading: Boolean, // 是否启用 loading
  debounce: Number, // 防抖时间（毫秒）
});

const attrs = useAttrs();
const slots = useSlots();
const isDisabled = ref(false); // ✅ 通过 ref 绑定 disabled

// 防抖点击处理
const debounceClick = (event) => {
  if (props.debounce) {
    if (isDisabled.value) return; // ✅ 检查 ref 状态
    isDisabled.value = true; // ✅ 更新 ref
    setTimeout(() => (isDisabled.value = false), props.debounce);
  }
  attrs["onClick"]?.(event);
};
</script>

<template>
  <v-btn v-bind="attrs" :loading="loading" :disabled="isDisabled" @click="debounceClick">
    <!-- 透传所有具名插槽 -->
    <template v-for="(slotFn, name) in slots" #[name]>
      <component :is="slotFn"></component>
    </template>
  </v-btn>
</template>
