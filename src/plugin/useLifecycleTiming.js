import { getCurrentInstance, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export function useLifecycleTiming({ showBeforeHooks = false } = {}) {
    const instance = getCurrentInstance();
    const componentName = instance?.type?.name || 'AnonymousComponent';
  
    const timings = {};
  
    const logTiming = (hookName) => {
      const now = performance.now();
      const lastHookTime = Object.values(timings).at(-1) || 0;
      const timeSinceLast = lastHookTime ? (now - lastHookTime).toFixed(2) : 'N/A';
      timings[hookName] = now;
  
      // 控制哪些钩子展示
      if (showBeforeHooks || !hookName.startsWith('onBefore')) {
        // 当前 onMounted 钩子触发时，页面加载的累计时间为 5260.90ms。time since last call:
        // 当前钩子（onMounted）与上一个钩子（onBeforeMount）的时间差为 0.10ms。

        console.log(
          `[${componentName}] ${hookName} executed at: ${now.toFixed(2)}ms, time since last call: ${timeSinceLast}ms`
        );
      }
    };
  
    onBeforeMount(() => logTiming('onBeforeMount'));
    onMounted(() => logTiming('onMounted'));
    onBeforeUpdate(() => logTiming('onBeforeUpdate'));
    onUpdated(() => logTiming('onUpdated'));
    onBeforeUnmount(() => logTiming('onBeforeUnmount'));
    onUnmounted(() => logTiming('onUnmounted'));
  
    return timings;
  }
  