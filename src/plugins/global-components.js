import { defineAsyncComponent } from 'vue';

export default function registerGlobalComponents(app) {
  // 使用 Vite 的 import.meta.glob 批量加载组件
  const components = import.meta.glob('../components/*.vue');
  for (const [path, component] of Object.entries(components)) {
    const componentName = path
      .split('/')
      .pop()
      .replace('.vue', ''); // 提取组件文件名作为组件名称

    // 全局注册组件
    app.component(componentName, defineAsyncComponent(component));
  }
}
