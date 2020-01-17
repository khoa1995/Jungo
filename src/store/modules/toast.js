import { MAKE_TOAST } from './../action-types'

const state = {
  counter: 0,
  title: '',
  variant: ''
}

const mutations = {
  [MAKE_TOAST] (state, payload = { title: 'Default Message', variant: 'primary' }) {
    state.title = payload.title
    state.variant = payload.variant
    state.counter++
  }
}

const actions = {
  [MAKE_TOAST] ({ commit }, payload) {
    commit(MAKE_TOAST, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
