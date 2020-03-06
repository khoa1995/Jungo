import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import applicationUser from './modules/applicationUser'
import toast from './modules/toast'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toast,
    category,
    applicationUser
  }
})
