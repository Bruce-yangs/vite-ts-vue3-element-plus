/* import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from './utils/http'

const app = createApp(App) 


//  全局挂载
app.config.globalProperties.$axios = axios

app.use(ElementPlus)
//   .use(store)
  .use(router)
  .mount('#app')
