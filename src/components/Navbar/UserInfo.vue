<template>
  <div class="jun-user-menu__wrapper">
    <LoadingUserInfo v-if="isLoading"/>
    <div class="jun-user-menu" v-else>
      <div class="jun-user-menu__info clickable" @click="handleToggleActionList">
        <div class="jun-user-menu__avatar-wrapper">
          <img class="jun-user-menu__avatar" alt="avatar" :src="`https://arp.amaris.com/abook/Telecom/GetEmployeeThumbnail/${applicationUser.employeeId}`">
        </div>
        <div class="jun-user-menu__name">{{ applicationUser.firstname }} {{ applicationUser.lastname }}</div>
      </div>
      <div :class="userActionClass">
        <div class="jun-user-menu__action-item">
          <a class="jun-user-menu__action-link" href="https://mail.amaris.com/ecp/?rfr=owa&amp;amp;p=PersonalSettings/Password.aspx">
            <span class="jun-user-menu__action-icon">
              <Icon name="unlock" />
            </span>
            <span>Change password</span>
          </a>
        </div>
        <div class="jun-user-menu__action-item">
          <a class="jun-user-menu__action-link" href="https://login.o2f-it.com/adfs/ls/?wa=wsignout1.0">
            <span class="jun-user-menu__action-icon">
              <Icon name="logout" />
            </span>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LoadingUserInfo from '@/components/Loading/LoadingUserInfo.vue'
import {
  GET_APPLICATION_USER
} from '@/store/action-types'

export default {
  name: 'jun-user-menu',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    LoadingUserInfo
  },
  data () {
    return {
      isShowUserAction: false
    }
  },
  computed: {
    ...mapState({
      applicationUser: state => state.applicationUser.applicationUser,
      isLoading: state => state.applicationUser.isLoading
    }),
    userActionClass () {
      return {
        'jun-user-menu__action-list': true,
        'jun-user-menu__action-list--opened': this.isShowUserAction
      }
    }
  },
  methods: {
    ...mapActions({
      _getApplicationUser: `applicationUser/${GET_APPLICATION_USER}`
    }),
    handleToggleActionList () {
      if (!this.isShowUserAction) {
        // Show action list
        this.isShowUserAction = true
        // Add event listener
        document.addEventListener('click', this.hideActionList)
      } else {
        // Hide action list
        this.isShowUserAction = false
        // Remove evnet listener
        document.removeEventListener('click', this.hideActionList)
      }
    },
    hideActionList () {
      if (typeof event.target.className === 'string') {
        if (!event.target.className.includes('jun-user-menu')) {
          this.isShowUserAction = false
        }
      }
    }
  },
  mounted () {
    // Api to get application user information
    this._getApplicationUser()
  }
}
</script>
<style lang="scss" src="./UserInfo.scss" scoped></style>
