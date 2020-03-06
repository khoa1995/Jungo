import {
  // Actions
  GET_CATEGORY_LIST,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY_STATUS,
  // Mutations
  UPDATE_CATEGORY_LIST,
  UPDATE_CATEGORY_FILTERED_LIST,
  SET_CATEGORY_LOADING,
  UPDATE_SEARCH_QUERY,
  SHOW_UPDATE_CATEGORY_MODAL,
  UPDATE_CATEGORY_STATE,
  SELECT_CATEGORY,
  UPDATE_DELETE_CATEGORY_MODAL_STATE,
  DISABLED_DELETE_BUTTON,
  // Toast
  MAKE_TOAST
} from './../action-types'

import {
  getCategoryList,
  createCategory,
  updateCategory,
  updateCategoryStatus,
  deleteCategory
} from '@/services/category'

const state = {
  // Category list
  categoryList: [],
  categoryFilteredList: [],
  isCategoryListLoading: false,
  searchQuery: '',
  // Selected category
  selectedCategory: {},
  // Show/hide delete category modal
  isShowDeleteCategoryModal: false,
  // Show/hide update category modal
  isShowUpdateCategoryModal: false,
  // Check loading category
  isCategoryOnLoading: false
}

const mutations = {
  [UPDATE_CATEGORY_LIST] (state, categoryList) {
    state.categoryList = categoryList
  },
  [UPDATE_CATEGORY_FILTERED_LIST] (state, categoryFilterdList) {
    state.categoryFilteredList = categoryFilterdList
  },
  [SET_CATEGORY_LOADING] (state, payload) {
    state.isCategoryListLoading = payload
  },
  [UPDATE_SEARCH_QUERY] (state, payload) {
    state.searchQuery = payload
  },
  [UPDATE_CATEGORY_STATE] (state, payload) {
    state.isCategoryUpdating = payload
  },
  [SHOW_UPDATE_CATEGORY_MODAL] (state, payload) {
    state.isShowUpdateCategoryModal = payload
  },
  [UPDATE_DELETE_CATEGORY_MODAL_STATE] (state, payload) {
    state.isShowDeleteCategoryModal = payload
  },
  [DISABLED_DELETE_BUTTON] (state, payload) {
    state.isCategoryOnLoading = payload
  },
  [SELECT_CATEGORY] (state, payload) {
    state.selectedCategory = payload
  }
}

const actions = {
  async [GET_CATEGORY_LIST] ({ commit, dispatch }) {
    try {
      // Set loading state to true
      commit(SET_CATEGORY_LOADING, true)
      // Request API
      let response = await getCategoryList()
      if (response && response.data.isSuccess) {
        commit(UPDATE_CATEGORY_LIST, response.data.payload.categories)
        commit(UPDATE_CATEGORY_FILTERED_LIST, response.data.payload.categories)
        return Promise.resolve()
      } else {
        return Promise.reject(response.data.failureReason)
      }
    } catch (error) {
      // Make toast an error
      dispatch(`toast/${MAKE_TOAST}`, {
        title: error,
        variant: 'danger'
      }, { root: true })
      // Reject an error
      return Promise.reject(error)
    } finally {
      // Set loading state to false
      commit(SET_CATEGORY_LOADING, false)
    }
  },
  async [CREATE_CATEGORY] ({ dispatch, commit }, payload) {
    try {
      // Request API
      let { name } = payload
      var response = await createCategory({
        Name: name
      })
      // Get return result
      if (response && response.data.isSuccess) {
        // Update category list
        state.categoryList.push(response.data.payload)
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: 'Update category successfully.',
          variant: 'success'
        }, { root: true })
        return Promise.resolve()
      } else {
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: response.data.failureReason,
          variant: 'danger'
        }, { root: true })

        // Reject an error
        return Promise.reject(response.data.Message)
      }
    } catch (error) {
      dispatch(`toast/${MAKE_TOAST}`, {
        content: error,
        variant: 'danger'
      }, { root: true })

      // Reject an error
      return Promise.reject(error)
    } finally {
      commit(UPDATE_CATEGORY_STATE, false)
    }
  },
  async [UPDATE_CATEGORY_FILTERED_LIST] ({ commit }, payload) {
    commit(UPDATE_CATEGORY_FILTERED_LIST, payload)
  },
  async [UPDATE_CATEGORY] ({ state, dispatch, commit }, payload) {
    try {
      // Set updating state to true
      commit(UPDATE_CATEGORY_STATE, true)
      // Request API
      let { categoryId, name } = payload
      var response = await updateCategory({
        CategoryId: categoryId,
        Name: name
      })
      // Get return result
      if (response && response.data.isSuccess) {
        // Update category list
        state.categoryList.find(x => x.categoryId === categoryId).name = name
        state.categoryFilteredList.find(x => x.categoryId === categoryId).name = name
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: 'Update category successfully.',
          variant: 'success'
        }, { root: true })
        return Promise.resolve()
      } else {
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: response.data.failureReason,
          variant: 'danger'
        }, { root: true })

        // Reject an error
        return Promise.reject(response.data.Message)
      }
    } catch (error) {
      dispatch(`toast/${MAKE_TOAST}`, {
        content: error,
        variant: 'danger'
      }, { root: true })

      // Reject an error
      return Promise.reject(error)
    } finally {
      commit(UPDATE_CATEGORY_STATE, false)
    }
  },
  async [UPDATE_CATEGORY_STATUS] ({ state, dispatch, commit }, payload) {
    try {
      // Request API
      let { categoryId, status } = payload
      var response = await updateCategoryStatus({
        CategoryId: categoryId,
        Status: status
      })
      // Get return result
      if (response && response.data.isSuccess) {
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: 'Update category status successfully.',
          variant: 'success'
        }, { root: true })
        // Update category list
        state.categoryList.find(x => x.categoryId === categoryId).isActive = status
        state.categoryFilteredList.find(x => x.categoryId === categoryId).isActive = status

        return Promise.resolve()
      } else {
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: response.data.failureReason,
          variant: 'danger'
        }, { root: true })
        // Reject an error
        return Promise.reject(response.data.Message)
      }
    } catch (error) {
      dispatch(`toast/${MAKE_TOAST}`, {
        content: error,
        variant: 'danger'
      }, { root: true })
      // Reject an error
      return Promise.reject(error)
    } finally {
      commit(UPDATE_CATEGORY_STATE, false)
    }
  },
  async [DELETE_CATEGORY] ({ state, dispatch, commit }, payload) {
    try {
      // Disable delete button
      commit(DISABLED_DELETE_BUTTON, true)
      // Request API
      let { categoryId } = payload
      var response = await deleteCategory({
        CategoryId: categoryId
      })
      // Get return result
      if (response && response.data.isSuccess) {
        // Show toast
        dispatch(`toast/${MAKE_TOAST}`, {
          content: 'Delete category successfully.',
          variant: 'success'
        }, { root: true })
        // Get new list category
        let responseCategoryList = await getCategoryList()
        if (responseCategoryList && responseCategoryList.data.isSuccess) {
          // Update category full list
          commit(UPDATE_CATEGORY_LIST, responseCategoryList.data.payload.categories)
          // Hide delete category modal
          commit(UPDATE_DELETE_CATEGORY_MODAL_STATE, false)
          // Clear selected category
          commit(SELECT_CATEGORY, {})
          // Filter search category list
          var filteredList = responseCategoryList.data.payload.categories.filter((item) => {
            return item.name.toLowerCase().match(state.searchQuery.toLowerCase())
          })
          commit(UPDATE_CATEGORY_FILTERED_LIST, filteredList)
        }
        return Promise.resolve()
      } else {
        dispatch(`toast/${MAKE_TOAST}`, {
          content: response.data.failureReason,
          variant: 'danger'
        }, { root: true })
      }
    } catch (error) {
      dispatch(`toast/${MAKE_TOAST}`, {
        content: error,
        variant: 'danger'
      }, { root: true })

      // Reject an error
      return Promise.reject(error)
    } finally {
      // Enable delete button
      commit(DISABLED_DELETE_BUTTON, false)
    }
  },
  async [UPDATE_SEARCH_QUERY] ({ commit }, payload) {
    commit(UPDATE_SEARCH_QUERY, payload)
  },
  [UPDATE_DELETE_CATEGORY_MODAL_STATE] ({ commit }, payload) {
    commit(UPDATE_DELETE_CATEGORY_MODAL_STATE, payload)
  },
  [DISABLED_DELETE_BUTTON] ({ commit }, payload) {
    commit(DISABLED_DELETE_BUTTON, payload)
  },
  [SHOW_UPDATE_CATEGORY_MODAL] ({ commit }, payload) {
    commit(SHOW_UPDATE_CATEGORY_MODAL, payload)
  },
  [SELECT_CATEGORY] ({ commit }, payload) {
    commit(SELECT_CATEGORY, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
