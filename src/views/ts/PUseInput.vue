<template>
  <!-- 普通文本框 -->
  <VEnhancedTextField label="普通输入框" />

  <!-- 防抖文本框（300ms） -->
  <VEnhancedTextField label="防抖输入" v-model="text" :debounce="300" />

  <!-- 可清空文本框 -->
  <VEnhancedTextField label="可清空" v-model="text" clearable />

  <!-- Loading 状态 -->
  <VEnhancedTextField label="加载中..." :loading="true" />

  <!-- 自定义 prepend / append 插槽 -->
  <VEnhancedTextField label="带图标">
    <template #prepend-inner>
      <v-icon>mdi-account</v-icon>
    </template>
    <template #append-inner>
      <v-icon>mdi-check</v-icon>
    </template>
  </VEnhancedTextField>

  <VEnhancedTextField
    label="测试输入框"
    v-model="text"
    :debounce="500"
    clearable
    :loading="isLoading"
    @click:append="handleClickAppend"
    @click:clear="handleClickClear"
    class="custom-border-radius"
  >

    <template #prepend-inner>
      <v-icon>mdi-account</v-icon>
    </template>
  </VEnhancedTextField>

  <p>当前输入值：{{ text }}</p>

  <v-text-field
  class="custom-border-radius"
  v-tooltip
  @click:append="(e) => console.log('click:append-', e)"
      @click:appendInner="(e) => console.log('click:appendInner', e)"
      @click:clear="(e) => console.log('click:clear', e)"
      @click:control="(e) => console.log('click:control-', e)"
      @click:prepend="(e) => console.log('click:prepend-', e)"
      @click:prependInner="(e) => console.log('click:prependInner', e)"
      @mousedown:control="(e) => console.log('mousedown:control-', e)"
      @update:focused="(focused) => console.log('update:focused-', focused)"
      @update:modelValue="(value) => console.log('update:modelValue-', value)"
      label="示例输入框"
      prepend-icon="mdi-account"
      append-icon="mdi-check"
      variant="outlined"
      v-model="text"
      append-inner-icon="mdi-eye"
    >
      <!-- 输入框前面的内容 -->
      <template v-slot:prepend>
        <v-icon color="primary">mdi-email</v-icon>
      </template>

      <!-- 输入框内部起始部分 -->
      <template v-slot:prepend-inner>
        <v-icon color="secondary">mdi-pencil</v-icon>
      </template>

      <!-- 输入框内部结束部分 -->
      <template v-slot:append-inner>
        <v-icon color="success">mdi-eye</v-icon>
      </template>

      <!-- 输入框后面的内容 -->
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-information" color="info"></v-btn>
      </template>

      <!-- 详细信息插槽 -->
      <template v-slot:details>
        <span class="text-caption text-grey-darken-1">请输入有效的信息</span>
      </template>
    </v-text-field>
<VEnhancedTextField
class="custom-border-radius"  
v-tooltip
v-ripple
@click:append="(e) => console.log('click:append-', e)"
      @click:appendInner="(e) => console.log('click:appendInner', e)"
      @click:clear="(e) => console.log('click:clear', e)"
      @click:control="(e) => console.log('click:control-', e)"
      @click:prepend="(e) => console.log('click:prepend-', e)"
      @click:prependInner="(e) => console.log('click:prependInner', e)"
      @mousedown:control="(e) => console.log('mousedown:control-', e)"
      @update:focused="(focused) => console.log('update:focused-', focused)"
      @update:modelValue="(value) => console.log('update:modelValue-', value)"
      label="示例输入框"
      prepend-icon="mdi-account"
      append-icon="mdi-check"
      variant="outlined"
      v-model="text"
      append-inner-icon="mdi-eye"
   >
 <!-- 输入框前面的内容 -->
 <template v-slot:prepend>
        <v-icon color="primary">mdi-email</v-icon>
      </template>

      <!-- 输入框内部起始部分 -->
      <template v-slot:prepend-inner>
        <v-icon color="secondary">mdi-pencil</v-icon>
      </template>

      <!-- 输入框内部结束部分 -->
      <template v-slot:append-inner>
        <v-icon color="success">mdi-eye</v-icon>
      </template>

      <!-- 输入框后面的内容 -->
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-information" color="info"></v-btn>
      </template>

      <!-- 详细信息插槽 -->
      <template v-slot:details>
        <span class="text-caption text-grey-darken-1">请输入有效的信息</span>
      </template>
      
</VEnhancedTextField>

</template>

<script setup>
import { ref } from "vue";
import VEnhancedTextField from "./VEnhancedTextField.vue";
const text = ref("");
const isLoading = ref(false);

const handleClickAppend = () => {
  console.log("附加图标被点击！");
};

const handleClickClear = () => {
  console.log("清除按钮被点击！");
};
</script>

<style scoped lang="scss">
/* 不加scoped直接改 */
/* .custom-border-radius .v-field {
  border-radius:20px !important; 
} */
 /* 加scoped这么改 */
 .custom-border-radius :deep( .v-field) {
//   border-radius: 20px !important; 
}
</style>
