<!--  -->
<template>
  <div>
    {{ count }}
    {{ name }}
    
    <h2>customRef() 实现防抖输入</h2>
    <input v-model="debouncedInput" placeholder="输入时防抖">
    <p>当前值（延迟更新）: {{ debouncedInput }}</p>
   <button ref="button" :class="theme.button" class="button">点击我</button>
   <p>id1: {{ id1 }}</p>
   <p>id2: {{ id2 }}</p>
  </div>
</template>

<script setup>
import { markRaw ,ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, onServerPrefetch } from 'vue';

import {nextTick,getCurrentInstance,useCssModule,  shallowRef, shallowReactive, customRef, triggerRef,defineSlots,withDefaults,defineComponent } from "vue";
import { effectScope, watch, onScopeDispose } from "vue";
import { readonly,isProxy,isRef,isReactive,isReadonly } from "vue";
import {useAttrs,useSlots,useModel,useId} from "vue"
// useModeL 简化v-model父子
const scope = effectScope();
const id1 = useId();
const id2 = useId();
scope.run(() => {
  const count = ref(0);
  const stopWatch = watch(count, () => console.log("count 变化:", count.value));
  // 模拟数据变化
  setTimeout(() => {
    count.value++;
  }, 1000);
  // 作用域销毁时，自动清理监听
  onScopeDispose(() => {
    stopWatch();
    console.log("watch 监听已销毁");
  });

});
setTimeout(() => {
  scope.stop(); // ✅ 触发 onScopeDispose()
}, 3000);
// defineSlots() withDefaults defineComponent 与ts结合定义slot props component
// 自定义防抖 ref
// 只能获取css的class
const theme = useCssModule("theme")
function changeColor() {
    //修改属性
  document.documentElement.style.setProperty("--theme-color", "yellow");
}
const button=ref(null)
const instance = getCurrentInstance();
onMounted(() => {
    //获取
    const styles = window.getComputedStyle(button.value);
    console.log(styles.fontSize,"----");
    console.log("当前组件实例:", instance);
    // emit slots appContext attrs未声明的props parent root
    console.log("组件属性:", instance?.proxy?.$attrs);
})
function useDebouncedRef(value, delay = 500) {
  let timeout;
  return customRef((track, trigger) => ({
    get() {
      track(); // 追踪依赖
      return value;
    },
    set(newValue) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        value = newValue;
        trigger(); // 触发更新
      }, delay);
    }
  }));
}

const debouncedInput = useDebouncedRef("theme"); // 创建一个防抖 ref


// markRaw 阻止成为响应式对象
const count = ref(0);
const name=ref("cai")
// 组件即将挂载
onBeforeMount(() => {
  console.log('onBeforeMount: 组件即将挂载');
});

// 组件已挂载
onMounted(() => {
  console.log('onMounted: 组件已挂载');
  window.addEventListener('resize', () => {
    console.log('窗口大小改变');
  });
});

// 组件即将更新
onBeforeUpdate(() => {
  console.log('onBeforeUpdate: 组件即将更新');
});

// 组件已更新
onUpdated(() => {
  console.log('onUpdated: 组件已更新');
});

// 组件即将卸载
onBeforeUnmount(() => {
  console.log('onBeforeUnmount: 组件即将卸载');
});

// 组件已卸载
onUnmounted(() => {
  console.log('onUnmounted: 组件已卸载');
});

// 监听子组件错误
onErrorCaptured((err, instance, info) => {
  console.error('onErrorCaptured: 捕获到子组件错误', err, info);
});

// 依赖被追踪时触发（调试用）onRenderTracked() 追踪依赖（get 访问）
onRenderTracked((event) => {
    if (event.key === "value") { 
        console.log('onRenderTracked: 依赖追踪', event);
    }
 
});

// 组件重新渲染时触发  onRenderTriggered() 触发重新渲染（set 修改）
onRenderTriggered((event) => {
    if (event.key === "value") { 
        console.log('onRenderTriggered: 组件重新渲染', event);
    }
 
});

// <KeepAlive> 组件激活
onActivated(() => {
  console.log('onActivated: 组件被 KeepAlive 激活');
});

// <KeepAlive> 组件停用
onDeactivated(() => {
  console.log('onDeactivated: 组件被 KeepAlive 停用');
});

// 服务器端预取数据 (仅 SSR 环境下有效)
onServerPrefetch(async () => {
  console.log('onServerPrefetch: 服务器端预取数据');
});
setInterval(() => {
    count.value = count.value + 1;
    name.value = name.value +"-"
}, 500000);
</script>
<style scoped >
:root {
  /* 运行时可以动态修改 */
  --theme-color: blue;
}
.button {
  color:  var(--theme-color);
  padding: 10px;
  font-size: 40px;
  border-radius: 5px;
}
</style>
<style module="theme">
.button {
  background-color: pink;
  color: white;
}
</style>

<style module="layout">
.container {
  display: flex;
  justify-content: center;
}
</style>

