import api from './api'
import env from '@/utils/env'

// Get application user
export const getApplicationUser = query => {
  return api.get({
    url: `${env.BASE_URL}${env.API.GET_APPLICATION_USER}`
  })
}
