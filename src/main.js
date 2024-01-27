import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

export const eventBus = new Vue()
export default eventBus

new Vue({
  router,
  store,
  eventBus,

  render: h => h(App)
}).$mount('#app')


