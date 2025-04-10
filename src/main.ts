// import './assets/main.css'
import './assets/fonts/iconfont.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import "./settings.scss"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import TodoDeleteButton from './TodoDeleteButton.vue'
// 使用全局变量 window.VueToastification
const Toast = window['VueToastification'];
console.error(window);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

import MathFormatterPlugin from '@/plugin/mathFormatterPlugin.js';
import App from './App.vue'
import router from './router'
// import "@/lib/index.scss"
// import "@/utils/dayjs/test.js"
// import  "@/utils/searchObj/test.js"
// import "@/utils//logSetting/test.js"
// import "@/utils/excel/test.js"
// import "@/utils/lodash.js"
// import "@/promise/index.js"
import registerGlobalComponents from '@/plugins/global-components.js';
const app = createApp(App)
app.component('TodoDeleteButton', TodoDeleteButton)
// 调用全局注册函数
registerGlobalComponents(app);
app.use(createPinia())
app.use(router)
app.use(MathFormatterPlugin);
app.use(vuetify)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
app.mount('#app')

//防抖函数


