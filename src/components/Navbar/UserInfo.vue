<template>
  <div class="jun-user-menu__wrapper">
    <div class="jun-user-menu">
      <div class="jun-user-menu__info clickable">
        <div class="jun-user-menu__avatar-wrapper">
          <img class="jun-user-menu__avatar" alt="avatar" >
        </div>
        <div class="jun-user-menu__name">Ryan</div>
      </div>
      <div :class="userActionClass">
        <div class="jun-user-menu__action-item">
          <a class="jun-user-menu__action-link" href="#">
            <span>Change password</span>
          </a>
        </div>
        <div class="jun-user-menu__action-item">
          <a class="jun-user-menu__action-link" href="#">
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jun-user-menu',
  data () {
    return {
      isShowUserAction: false
    }
  },
  computed: {
    userActionClass () {
      return {
        'jun-user-menu__action-list': true,
        'jun-user-menu__action-list--opened': this.isShowUserAction
      }
    }
  }
}
</script>
<style lang="scss" src="./UserInfo.scss" scoped></style>
