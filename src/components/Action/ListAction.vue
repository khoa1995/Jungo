<template>
  <div class="jun-list-action">
    <button @click="onToggleEditCategoryModal" class="btn jun-list-button jun-list-button--edit">
      <Icon name="edit"/>
    </button>
    <button
      @click="onToggleDeleteCategoryModal"
      v-if="category.isActive === true"
      class="btn jun-list-button jun-list-button--delete">
      <Icon name="delete" />
    </button>
    <button v-else
      v-b-tooltip.hover.bottom
      class="btn jun-list-button jun-list-button--delete-disabled"
      title="At least one app is linked to this category. Please unlink all to delete this category.">
      <Icon name="delete"/>
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import {
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_DELETE_CATEGORY_MODAL_STATE,
  SELECT_CATEGORY,
  MAKE_TOAST
} from '@/store/action-types'

export default {
  name: 'jun-list-action',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    category: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      modalEditToggle: false,
      modalEditApp: false,
      value: { id: this.category.categoryId, name: this.category.name }
    }
  },
  methods: {
    ...mapActions({
      _makeToast: `toast/${MAKE_TOAST}`,
      _updateCategory: `category/${UPDATE_CATEGORY}`,
      _deleteCategory: `category/${DELETE_CATEGORY}`,
      _setSelectedCategory: `category/${SELECT_CATEGORY}`,
      _updateDeleteCategoryModalState: `category/${UPDATE_DELETE_CATEGORY_MODAL_STATE}`
    }),
    onToggleDeleteCategoryModal () {
      // Show delete category modal
      this._updateDeleteCategoryModalState(true)
      // Get selected category
      this._setSelectedCategory(this.category)
    },
    // focusInput () {
    //   this.$refs.inputText.focus()
    // },
    onToggleEditCategoryModal () {
      this.modalEditToggle = true
      if (this.value.name === this.category.name) {
        // this._updateDeleteButtonState(true)
      }
    },
    closeEditModal () {
      this.modalEditToggle = false
    },
    disableButton (disableBtn) {
      this._updateDeleteButtonState(disableBtn)
    },
    async handleUpdateCategory () {
      // Validate
      if (isEmpty(this.value.name)) {
        this._makeToast({
          content: 'Please input category name.',
          variant: 'danger'
        })
      } else { // call api to update category
        this._updateDeleteButtonState(true)
        await this._updateCategory({
          categoryId: this.value.id,
          name: this.value.name
        })
        // Close modal when successfully
        this.closeEditModal()
      }
    },
    async handleDeleteCategory () {
      this._updateDeleteButtonState(true)
      await this._deleteCategory({
        categoryId: this.value.id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './ListAction.scss';
</style>
