<template>
  <div :class="loadingClass" :style="loadingStyle"></div>
</template>

<script>
export default {
  name: 'jun-loading-bar',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2rem'
    },
    borderRadius: {
      type: String,
      default: '0.5rem'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    loadingClass () {
      return {
        'jun-loading-bar': true,
        'jun-loading-bar--dark': this.dark
      }
    },
    loadingStyle () {
      return {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.jun-loading-bar {
  animation: backgroundStripes 1.75s linear infinite forwards;
  background-color: $color-border;
  background: linear-gradient(90deg, $color-btn-border 8%, $color-border 18%, $color-btn-border 33%);
  &--dark {
    background: linear-gradient(90deg, $color-border 8%, $color-btn-border 18%, $color-border 33%);
  }
}

@keyframes backgroundStripes {
  0% {
    background-position: 100% 0;
    background-size: 200% 100%;
  }
  100% {
    background-position: -100% 0;
    background-size: 200% 100%;
  }
}
</style>
