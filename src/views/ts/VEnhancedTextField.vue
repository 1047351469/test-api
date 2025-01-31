<script setup>
import { defineProps, defineEmits, useAttrs, useSlots, ref, watch } from "vue";
import { VTextField } from "vuetify/components";
defineOptions({ inheritAttrs: false }); // 关闭默认的 $attrs 继承 默认挂载到父标签
// 定义 props
const props = defineProps({
  modelValue: String, // `v-model`
  debounce: Number, // 防抖时间（毫秒）
  clearable: Boolean, // 是否支持清空
  loading: Boolean, // 是否显示 loading
});

// 继承所有 `v-text-field` 的 props 和事件
const attrs = useAttrs();
// 获取插槽
const slots = useSlots();
// 定义 emits
const emit = defineEmits(["update:modelValue"]);

// `v-model` 绑定的值
const inputValue = ref(props.modelValue);
let debounceTimer = null;

// 监听 `modelValue`，同步 `inputValue`
watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
});

// 防抖处理
const emitChange = (event) => {
  if (props.debounce) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      emitUpdate(event);
    }, props.debounce);
  } else {
    emitUpdate(event);
  }
};

// 触发 `update:modelValue`
const emitUpdate = (event) => {
  inputValue.value = event.target.value;
  emit("update:modelValue", inputValue.value);
};

// 清空输入框
const clearInput = () => {
  inputValue.value = "";
  emit("update:modelValue", "");
};
</script>

<template>
  <v-text-field
    v-bind="attrs" 
    v-model="inputValue"
    :loading="loading"
    @input="emitChange"

  >
    <!-- 透传所有具名插槽 name名称 slotFn内容 -->
    <template v-for="(slotFn, name) in slots" #[name]>
      <component :is="slotFn"></component>
    </template>
      <!-- 透传默认插槽 -->
    <template v-if="slots.default">
      <component :is="slots.default"></component>
    </template>

    <!-- 追加 `clearable` 功能 -->
    <template v-if="clearable" #append-inner>
      <v-icon @click="clearInput">mdi-close</v-icon>
    </template>
  </v-text-field>
</template>
