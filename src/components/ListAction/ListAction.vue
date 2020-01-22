<template>
  <div class="jun-list-action">
    <button @click="editCategory" class="btn jun-list-button jun-list-button--edit"><Icon name="edit"/></button>
    <button  @click="deleteCategory" v-if="action.isActive === true"
      class="btn jun-list-button jun-list-button--delete">
      <Icon name="delete" />
    </button>
    <button v-else
      class="btn jun-list-button jun-list-button--delete-disabled" v-b-tooltip.hover.bottom title="At least one app is linked to this category. Please unlink all to delete this category.">
      <Icon name="delete"/>
    </button>
    <!-- Delete category -->
    <b-modal v-model="modalDeleteToggle"
      centered
      id="delete-category"
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
        <b-button class="btn-cancel jun-button--outline-mantu" @click="closeModal">Cancel</b-button>
        <b-button class="btn-confirm jun-button--default" @click.stop="addRowCat">Confirm</b-button>
      </div>
    </b-modal>

    <!-- Edit category -->
    <b-modal v-model="modalEditToggle"
      centered
      id="edit-category"
      body-class="jun-modal-edit"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
      hide-footer>
      <div class="edit-category-modal">
        <div class="edit-category-modal__title">Edit Category</div>
        <div class="edit-category-modal__input">
          <input type="text" required/>
          <label>Name <span class="required">*</span></label>
        </div>
      </div>
      <div class="modal-footer modal-footer-custom">
        <b-button class="btn-cancel jun-button--outline-mantu" @click="closeEditModal">Cancel</b-button>
        <b-button class="btn-done jun-button--default" @click.stop="editRow">Done</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { MAKE_TOAST } from '@/store/action-types'

export default {
  name: 'jun-list-action',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    action: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      modalDeleteToggle: false,
      modalEditToggle: false
    }
  },
  methods: {
    ...mapActions({
      _makeToast: `toast/${MAKE_TOAST}`
    }),
    deleteCategory () {
      this.modalDeleteToggle = true
    },
    closeModal () {
      this.modalDeleteToggle = false
    },
    editCategory () {
      this.modalEditToggle = true
    },
    closeEditModal () {
      this.modalEditToggle = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import './ListAction.scss';
</style>
