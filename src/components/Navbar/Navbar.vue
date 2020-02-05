<template>
  <div class="jun-navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand class="jun-navbar__logo" :to="{name: 'home'}">
        <img width="70%" height="70%" src="./../../assets/images/Mantu-logo.png"/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="jun-navbar__list">
          <b-nav-item class="jun-navbar__item" :to="{name: 'category'}">App Category</b-nav-item>
          <b-nav-item class="jun-navbar__item" :to="{name: 'application'}">App Info Config</b-nav-item>
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
  background-color: adjust-color($color-mantu, $lightness: -20%);
  position: sticky;
  top: 0;
  width: 100%;
  height: 85px;
  padding: 0;
  .navbar-dark {
    height: 100%;
  }
  &__list {
    padding-left: 1rem;
  }
  &__item {
    padding: 0 .75rem;
    .nav-link {
      font-size: 14px;
      color: adjust-color($color-white, $lightness: -15%);;
      &.router-link-exact-active.router-link-active, &:hover {
        color: $color-white;
      }
    }
  }
  &__logo {
    text-align: center;
    margin-right: 0;
    width: 10rem;
  }
  @media screen and(max-width: $iPhoneXSMax-landscape) {
    padding: 0.5rem 0;
  }
}
</style>
