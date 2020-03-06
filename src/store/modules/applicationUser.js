import {
  // Actions
  GET_APPLICATION_USER,
  // Mutations
  UPDATE_APPLICATION_USER,
  UPDATE_APPLICATION_USER_LOADING,
  // Common
  MAKE_TOAST
} from '../action-types'

import { getApplicationUser } from '@/services/applicationUser'

const state = {
  applicationUser: {},
  isLoading: false
}

const mutations = {
  [UPDATE_APPLICATION_USER] (state, payload) {
    state.applicationUser = payload
  },
  [UPDATE_APPLICATION_USER_LOADING] (state, payload) {
    state.isLoading = payload
  }
}

const actions = {
  async [GET_APPLICATION_USER] ({ commit, dispatch }) {
    try {
      // Set loading state to true
      dispatch(UPDATE_APPLICATION_USER_LOADING, true)
      // Request API
      let response = await getApplicationUser()
      if (response && response.data) {
        commit(UPDATE_APPLICATION_USER, response.data)
        return Promise.resolve()
      } else {
        return Promise.reject(response.data)
      }
    } catch (error) {
      // Make toast an error
      dispatch(`toast/${MAKE_TOAST}`, {
        title: 'Cannot get logged employee information.',
        variant: 'danger'
      }, { root: true })
      // Reject an error
      return Promise.reject(error)
    } finally {
      // Set loading state to false
      dispatch(UPDATE_APPLICATION_USER_LOADING, false)
    }
  },
  [UPDATE_APPLICATION_USER_LOADING] ({ commit }, payload) {
    commit(UPDATE_APPLICATION_USER_LOADING, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
