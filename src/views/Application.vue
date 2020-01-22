<template>
  <div class="jun-application">
    <div class="jun-category-header">
      <div class="jun-category-header__title">My Applications</div>
      <div class="jun-category-header__actions">
        <div class="jun-category-header__search">
          <input placeholder="Search by name..." />
        </div>
        <div class="jun-category-header__add">
          <button class="jun-button"><Icon name="add"/>Add external app</button>
        </div>
      </div>
    </div>
    <ListLayout :contentData="application"/>
  </div>
</template>
<script>
import { application } from '@/fakeData.js'
export default {
  name: 'application',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    ListLayout: () => import(/* webpackChunkName: "ListLayout" */ '@/components/Content/ListLayout.vue')
  },
  data () {
    return {
      application
    }
  }
}
</script>

<style lang="scss">
@import './Category.scss';
.list-application {
  &__brand {
    width: 20px;
    height: 20px;
    margin: .75rem 0.5rem .75rem 0;
  }
  .jun-list-layout__row {
    cursor: pointer;
  }
}
</style>
