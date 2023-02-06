import App from './App'


// import nv from "@/components/pyh-nv/pyh-nv.vue";//非uni_modules的全局引用组件

// #ifndef VUE3
import Vue from 'vue'
// Vue.component('nv',nv);//非uni_modules的全局引用组件
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  // app.component('nv',nv);//非uni_modules的全局引用组件
  return {
    app
  }
}
// #endif