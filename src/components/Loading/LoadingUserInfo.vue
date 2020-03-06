<template>
  <div class="jun-user-menu jun-user-menu--loading">
    <div class="jun-user-menu__info">
      <div class="jun-user-menu__avatar-wrapper">
        <LoadingBar width="2.75rem" height="2.75rem" borderRadius="50%" dark />
      </div>
      <div class="jun-user-menu__name">
        <LoadingBar width="10rem" height="3rem" dark />
      </div>
    </div>
  </div>
</template>

<script>
import LoadingBar from '@/components/Loading/LoadingBar.vue'

export default {
  name: 'jun-user-menu--loading',
  components: {
    LoadingBar
  }
}
</script>

<style lang="scss" scoped>
@import './../Navbar/UserInfo.scss';
</style>
