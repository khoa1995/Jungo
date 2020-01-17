<template>
  <div id="app" class="app-container">
   <Navbar></Navbar>
   <main class="jun-main">
     <!-- <router-view /> -->
     <Category/>
   </main>
  <Toast />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Navbar: () => import(/* webpackChunkName: "Navbar" */ '@/components/Navbar/Navbar.vue'),
    Category: () => import(/* webpackChunkName: "Category" */ '@/views/Category.vue'),
    Toast: () => import(/* webpackChunkName: "Toast" */ '@/components/Toast/Toast.vue')
  }
}
</script>
<style lang="scss" scoped>
@import './assets/scss/base/variables';
.app-container {
    min-height: 100vh;
    background-color: $color-black;
    .jun-main {
      padding: 3rem 6rem;
      @media screen and (max-width: $iPhoneXSMax-landscape) {
        padding: 0;
      }
    }
}
</style>
