import Vue from 'vue'
import { MdMenu, MdButton, MdCard, MdToolbar, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(MdMenu)
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdToolbar)
Vue.use(MdIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
