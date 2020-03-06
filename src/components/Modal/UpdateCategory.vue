<template>
  <b-modal v-model="isShowUpdateCategoryModal"
      centered
      id="edit-category"
      body-class="jun-modal-edit"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
      hide-footer
      @shown="focusInput">
      <div class="edit-category-modal">
        <div class="edit-category-modal__title">Edit Category</div>
        <div :class="{'edit-category-modal__input': true}">
          <input @keyup="disableButton(false)" type="text" v-model="value.name" ref="inputText" required/>
          <label>Name <span class="required">*</span></label>
        </div>
      </div>
      <div class="modal-footer modal-footer-custom">
        <b-button :class="{'btn-cancel jun-button--outline-mantu': true}" @click="closeEditModal">Cancel</b-button>
        <b-button :class="{'btn-done jun-button--default': true, 'disabled': isCategoryOnLoading}" @click.stop="handleUpdateCategory">Done</b-button>
      </div>
    </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'jun-update-category-modal',
  computed: {
    ...mapState({
      isShowUpdateCategoryModal: state => state.category.isShowUpdateCategoryModal
    })
  }
}
</script>
