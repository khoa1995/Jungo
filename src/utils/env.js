export default {
  STORAGE_KEY: 'bc-storage',
  BASE_URL: process.env.NODE_ENV === 'production' ? `${window.location.origin}/BrandCenter` : 'http://localhost/Jungo'
}
