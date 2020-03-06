export default {

  STORAGE_KEY: 'jun-storage',
  BASE_URL: process.env.NODE_ENV === 'production' ? `${window.location.origin}/Jungo` : 'http://localhost/Jungo',
  API: {
    // Category
    GET_CATEGORIES: '/Category/GetList',
    CREATE_CATEGORY: '/Category/Create',
    UPDATE_CATEGORY: '/Category/Update',
    DELETE_CATEGORY: '/Category/Delete',
    UPDATE_CATEGORY_STATUS: '/Category/ChangeStatus',

    // Application User
    GET_APPLICATION_USER: '/Employee/GetApplicationUser'
  }
}
