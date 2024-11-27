import { createVNode, render, reactive } from "vue";

// 创建 Snackbar 控制器
const snackbarState = reactive({
  show: false,
  message: "",
  color: "info",
  timeout: 3000,
});

// 渲染到 DOM 的方法
let container = null;

function createSnackbarContainer() {
  // 如果容器不存在，则创建
  if (!container) {
    container = document.createElement("div");
    document.body.appendChild(container);

    // 创建虚拟节点并渲染到容器
    const vnode = createVNode("v-snackbar", {
      modelValue: snackbarState.show,
      "onUpdate:modelValue": (value) => (snackbarState.show = value),
      color: snackbarState.color,
      timeout: snackbarState.timeout,
    });
    vnode.children = () => snackbarState.message;
    render(vnode, container);
  }
}

// 方法：显示 Snackbar
export function showSnackbar({ message, color = "info", timeout = 3000 }) {
  debugger
  createSnackbarContainer(); // 确保 Snackbar 容器已创建
  snackbarState.message = message;
  snackbarState.color = color;
  snackbarState.timeout = timeout;
  snackbarState.show = true;
}
