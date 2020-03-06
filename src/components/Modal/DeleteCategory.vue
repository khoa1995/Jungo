<template>
  <b-modal
      v-model="isShowDeleteCategoryModal"
      centered
      id="delete-category-modal"
      body-class="jun-modal-delete"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
      hide-footer>
      <div class="delete-category-modal">
        <div class="delete-category-modal__title">Delete app category</div>
        <div class="delete-category-modal__content">
          Are you sure you want to delete <strong>Development Direction</strong> permanently?
        </div>
      </div>
      <div class="modal-footer">
        <b-button :class="{'btn-cancel jun-button--outline-mantu': true}" @click="closeDeleteModal">Cancel</b-button>
        <b-button
          :class="{'btn-confirm jun-button--default': true, 'disabled': isDisabledDeleteButton}"
          @click.stop="handleDeleteCategory">Confirm</b-button>
      </div>
    </b-modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  DELETE_CATEGORY,
  SELECT_CATEGORY,
  UPDATE_DELETE_CATEGORY_MODAL_STATE
} from '@/store/action-types'

export default {
  name: 'jun-delete-category-modal',
  computed: {
    ...mapState({
      selectedCategory: state => state.category.selectedCategory,
      isShowDeleteCategoryModal: state => state.category.isShowDeleteCategoryModal,
      isDisabledDeleteButton: state => state.category.isCategoryOnLoading
    })
  },
  methods: {
    ...mapActions({
      _deleteCategory: `category/${DELETE_CATEGORY}`,
      _setSelectedCategory: `category/${SELECT_CATEGORY}`,
      _updateDeleteCategoryModalState: `category/${UPDATE_DELETE_CATEGORY_MODAL_STATE}`
    }),
    closeDeleteModal () {
      // Hide delete modal
      this._updateDeleteCategoryModalState(false)
      // Clear selected category
      this._setSelectedCategory({})
    },
    async handleDeleteCategory () {
      // API to delete category
      await this._deleteCategory({
        categoryId: this.selectedCategory.categoryId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

/deep/.jun-modal-delete {
  background-color: adjust-color($color-black, $lightness: 20%);
  color: $color-white;
  .modal-footer {
    border-top: none;
    .btn-cancel {
      border-color: $color-btn-confirm;
      color: $color-btn-confirm;
      &:hover {
        background-color: $color-btn-confirm;
        color: $color-white;
      }
    }
    .btn-confirm {
      background-color: $color-btn-confirm
    }
  }
}
.delete-category-modal {
  padding: 0 1rem;
  &__content {
    margin-top: 1rem;
    color: adjust-color($color-placeholder, $lightness: -15%);
  }
  &__title {
    font-weight: 500;
  }
}
</style>
