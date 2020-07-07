import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//公共头部组件
import nv from "@/components/pyh-nv/pyh-nv.vue";
Vue.component("nv",nv)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
