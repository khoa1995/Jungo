import Vue from 'vue'
import env from '@/utils/env'

Vue.mixin({
  methods: {
    convertRelativeUrl (value) {
      return value ? value.startsWith('/') ? `${env.BASE_URL}${value}` : `${env.BASE_URL}/${value}` : ''
    }
  }
})
