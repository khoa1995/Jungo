import { MAKE_TOAST } from './../action-types'

const state = {
  counter: 0,
  title: '',
  variant: '',
  content: ''
}

const mutations = {
  [MAKE_TOAST] (state, payload = { title: 'Default Message', variant: 'primary' }) {
    state.title = payload.title
    state.variant = payload.variant
    var content = 'System is busy at the moment. Please come back later.'
    if (payload.content &&
      payload.content !== undefined &&
      payload.content !== null &&
      payload.content.length > 0) {
      content = payload.content
    }
    state.content = content
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
