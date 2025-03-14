<template>
    <label class="one-checkbox" :class="{'is-checked':isChecked}">
    <span class="one-checkbox_input">
      <span class="one-checkbox_inner"></span>
      <input type="checkbox"
      class="one-checkbox_original"
      :name="name"
      v-model="model"
      :value="label"
      >
    </span>
    <span class="one-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>

</template>
<script setup>
import { computed, inject } from 'vue';
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    }

}
)
const emit = defineEmits(['update:modelValue']);
const checkboxGroup = inject("checkboxGroup")
const model = computed(({
    get() {
        return !!checkboxGroup ? checkboxGroup.selectedValue.value : props.modelValue
    },
    set(newVal) {
        !!checkboxGroup ? checkboxGroup.updateValue(newVal) : emit("update:modelValue", newVal)
    }
}))
const isChecked = computed(() => {
    return (!!checkboxGroup) ? model.value.includes(props.label) : model.value
})

</script>

<style lang="scss" scoped>
.one-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .one-checkbox_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .one-checkbox_inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &:after{
          box-sizing: content-box;
          content: '';
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .one-checkbox_original{
        opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .one-checkbox_label{
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  // 选中的样式
  .one-checkbox.is-checked{
    .one-checkbox_input{
      .one-checkbox_inner{
        background-color: #409eff;
        border-color: #409eff;
      }
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
    .one-checkbox_label{
      color: #409eff;
    }

  }
</style>