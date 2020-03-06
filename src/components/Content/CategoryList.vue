<template>
  <div class="jun-list-layout">
    <!--list of category-->
    <b-table-simple responsive borderless>
      <b-thead class="jun-list-layout__head">
        <b-tr>
          <b-th></b-th>
          <b-th>Order</b-th>
          <b-th>App Category</b-th>
          <b-th>Active</b-th>
          <b-th>Actions</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-if="isCategoryListLoading">
         <CategoryLoading/>
      </b-tbody>
      <draggable :list="categoryFilteredList" tag="b-tbody" class="jun-list-layout__body" v-else>
        <b-tr v-if="isCategoryListLoading">
          <CategoryLoading/>
        </b-tr>
        <b-tr v-if="!isCategoryListLoading && !hasData">
          <b-td colspan="5" class="noResult"><i>No category found.</i></b-td>
        </b-tr>
        <b-tr class="jun-list-layout__row" v-for="item in categoryFilteredList" :key="item.categoryId" :id="item.categoryId" v-else>
          <b-td class="jun-list-layout__draggable" >
            <Icon name="move"/>
          </b-td>
          <b-td >{{item.order}}</b-td>
          <b-td class="jun-list-layout__name">{{ item.name }}</b-td>
          <b-td class="jun-list-layout__active jun-switch">
            <b-form-checkbox switch size="lg" v-model="item.isActive" @change="switchStatus(item.categoryId, $event)"></b-form-checkbox>
          </b-td>
          <b-td>
            <ListAction :category="item" />
          </b-td>
        </b-tr>
      </draggable>
    </b-table-simple>
    <!-- Delete category modal -->
    <DeleteCategoryModal />
    <!-- Update category modal -->
    <UpdateCategoryModal />
  </div>
</template>

<script>
import { isEmpty } from 'lodash'
import draggable from 'vuedraggable'
import { mapState, mapActions } from 'vuex'
import {
  UPDATE_CATEGORY_STATUS,
  MAKE_TOAST
} from '@/store/action-types'

export default {
  name: 'jun-list-layout',
  components: {
    draggable,
    CategoryLoading: () => import(/* webpackChunkName: "CategoryLoading" */ '@/components/Loading/LoadingList.vue'),
    ListAction: () => import(/* webpackChunkName: "ListAction" */ '@/components/Action/ListAction.vue'),
    DeleteCategoryModal: () => import(/* webpackChunkName: "Modal" */ '@/components/Modal/DeleteCategory.vue'),
    UpdateCategoryModal: () => import(/* webpackChunkName: "Modal" */ '@/components/Modal/UpdateCategory.vue'),
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      disabled: false
    }
  },
  computed: {
    ...mapState({
      categoryFilteredList: state => state.category.categoryFilteredList,
      isCategoryListLoading: state => state.category.isCategoryListLoading
    }),
    hasData () {
      return !isEmpty(this.categoryFilteredList)
    }
  },
  methods: {
    ...mapActions({
      _makeToast: `toast/${MAKE_TOAST}`,
      _updateCategoryStatus: `category/${UPDATE_CATEGORY_STATUS}`
    }),
    switchStatus (categoryId, status) {
      this._updateCategoryStatus({
        categoryId: categoryId,
        status: status
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './ListLayout.scss'
</style>
