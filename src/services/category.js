import api from './api'
import env from '@/utils/env'

// Get all application categories
export const getCategoryList = () => {
  return api.get({
    url: `${env.BASE_URL}${env.API.GET_CATEGORIES}`
  })
}

// Create new category
export const createCategory = payload => {
  return api.post({
    url: `${env.BASE_URL}${env.API.CREATE_CATEGORY}`,
    data: payload
  })
}

// Update category label
export const updateCategory = payload => {
  return api.post({
    url: `${env.BASE_URL}${env.API.UPDATE_CATEGORY}`,
    data: payload
  })
}

// Update category status
export const updateCategoryStatus = payload => {
  return api.post({
    url: `${env.BASE_URL}${env.API.UPDATE_CATEGORY_STATUS}`,
    data: payload
  })
}

// Delete selected category
export const deleteCategory = payload => {
  return api.post({
    url: `${env.BASE_URL}${env.API.DELETE_CATEGORY}`,
    data: payload
  })
}
