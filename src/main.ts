import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

const app = createApp(App);

// 添加全局的ElementPlus依赖
app.use(ElementPlus);

app.use(store).use(router).mount('#app')
