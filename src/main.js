import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import router from './router'
import store from './store'
import './styles/main.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
