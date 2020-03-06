<template>
  <div class="jun-toast"></div>
</template>

<script>
import { mapState } from 'vuex'
import { toastConfig } from '@/utils/configs'

export default {
  name: 'jun-toast',
  computed: {
    ...mapState({
      counter: state => state.toast.counter,
      title: state => state.toast.title,
      variant: state => state.toast.variant,
      content: state => state.toast.content
    })
  },
  watch: {
    counter () {
      this.makeToast()
    }
  },
  methods: {
    makeToast () {
      let content = this.content ? this.content : ' '
      this.$bvToast.toast(content, {
        ...toastConfig,
        title: this.getTitle(),
        variant: this.variant
      })
    },
    getTitle () {
      switch (this.variant) {
        case 'success':
          return 'Success'
        case 'danger':
          return 'Error'
        case 'info':
        case 'default':
        case 'primary':
        case 'secondary':
          return 'Information'
        case 'warning':
          return 'Warning'
      }
    }
  }
}
</script>
