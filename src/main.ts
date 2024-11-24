import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
// import '@/assets/materialdesignicons.min.css' 
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



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
// import "@/utils/dayjs/test.js"
// import  "@/utils/searchObj/test.js"
// import "@/utils//logSetting/test.js"
import "@/utils/excel/test.js"
import "@/utils/lodash.js"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MathFormatterPlugin);
app.use(vuetify)
app.mount('#app')
