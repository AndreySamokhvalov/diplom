import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StarRating from 'vue-star-rating'



Vue.config.productionTip = false

Vue.component('star-rating', StarRating);


new Vue({
  router,
  store,
  StarRating,


  render: h => h(App)
}).$mount('#app')





