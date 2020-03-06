<template>
    <div class="jun-category-header">
      <div class="jun-category-header__title">My Categories</div>
      <div class="jun-category-header__actions">
        <div class="jun-category-header__search">
          <input placeholder="Search by name..." v-model="searchQuery" />
        </div>
        <div class="jun-category-header__add">
          <button class="jun-button" @click="onClickAddItem"><Icon name="add"/>Add Category</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  UPDATE_CATEGORY_FILTERED_LIST,
  UPDATE_SEARCH_QUERY
} from '@/store/action-types'
import { isEmpty } from 'lodash'

export default {
  name: 'jun-header',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    onClickAddItem: {
      type: Function,
      require: true
    }
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    ...mapActions({
      _updateCategoryFilteredList: `category/${UPDATE_CATEGORY_FILTERED_LIST}`,
      _updateSearchQuery: `category/${UPDATE_SEARCH_QUERY}`
    })
  },
  computed: {
    ...mapState({
      categoryList: state => state.category.categoryList
    })
  },
  watch: {
    searchQuery () {
      if (!isEmpty(this.categoryList)) {
        this._updateCategoryFilteredList(this.categoryList.filter((item) => {
          return item.name.toLowerCase().match(this.searchQuery.toLowerCase())
        }))
        this._updateSearchQuery(this.searchQuery)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';
.jun-category {
  &-header {
    display: flex;
    &__title {
      color: $color-white;
      font-weight: 500;
      font-size: 1.25rem;
      @media screen and (max-width: $iPhoneXSMax-landscape) {
        margin: 1rem 0;
      }
    }
    &__actions {
      margin-left: auto;
      display: flex;
    }
    &__add {
      margin: 0 0 0 1rem;
      .jun-button {
        font-size: 14px;
        .jun-icon {
          padding-right: .25rem;
        }
      }
    }
    &__search {
      width: 40rem;
      input {
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        background-color: adjust-color($color-dark-theme, $lightness: 10%);
        border:none;
        color: $color-white;
        font-size: 14px;
        &::placeholder {
          font-size: 14px;
          padding: 0;
        }
      }
    }
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      display: block;
      margin: 1rem;
    }
  }
}
</style>
