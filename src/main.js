import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Libs
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

// Libs style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
