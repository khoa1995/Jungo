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
      variant: state => state.toast.variant
    })
  },
  watch: {
    counter () {
      this.makeToast()
    }
  },
  methods: {
    makeToast () {
      this.$bvToast.toast(' ', {
        ...toastConfig,
        title: this.title,
        variant: this.variant
      })
    }
  }
}
</script>
