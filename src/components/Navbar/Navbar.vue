<template>
  <div class="jun-navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img src="./../../assets/images/Mantu-logo.png"/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="jun-navbar__list">
          <b-nav-item class="jun-navbar__item active" >App Category</b-nav-item>
          <b-nav-item class="jun-navbar__item" >App Info Config</b-nav-item>
          <b-nav-item class="jun-navbar__item" href="#">API Gateway Configuration</b-nav-item>
        </b-navbar-nav>

         <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto">
           <UserInfo/>
         </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'jun-navbar',
  components: {
    UserInfo: () => import(/* webpackChunkName: "UserInfo" */ './UserInfo.vue')
  }
}
</script>
<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.jun-navbar {
  background-color: adjust-color($color-mantu, $lightness: -10%);
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0;
  &__list {
    padding-left: 1rem;
  }
  &__item {
    padding: 0 2rem;
  }
  @media screen and(max-width: $iPhoneXSMax-landscape) {
    padding: 0.5rem 0;
  }
}
</style>
