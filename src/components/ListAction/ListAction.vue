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
  <b-tooltip placement="bottom">
    Hello <strong>World!</strong>
  </b-tooltip>
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
      <div class="modal-footer">
        <b-button class="btn-cancel jun-button--outline-mantu" @click="closeEditModal">Cancel</b-button>
        <b-button class="btn-done jun-button--default" @click.stop="editRow">Done</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
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
  },
  mounted () {
    this.$root.$emit('bv::show::tooltip', 'my-trigger-button-id')
  }
}
</script>
<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.jun-list {
  &-button {
    &--delete {
      fill: $color-mantu;
      &-disabled {
        fill: adjust-color($color-placeholder, $lightness: -20%);
      }
    }
  }
  &-action {
    position: relative;
    z-index: 5;
    cursor: pointer;
    margin-left: -1rem;
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      display: flex;
      margin-left: auto;
    }
  }
}
/deep/.jun-modal-delete {
  background-color: adjust-color($color-black, $lightness: 7%);
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
  &__content {
    margin-top: 1rem;
    color: adjust-color($color-placeholder, $lightness: -15%);
  }
  &__title {
    font-weight: 500;
  }
}
.edit-category-modal {
  .required {
    color: $color-red;
  }
  &__title {
    font-weight: 500;
  }
  &__input {
    position: relative;
    margin-top: 1rem;
    input {
      border:none;
      border-bottom: 1px solid $color-mantu;
      background-color: adjust-color($color-black, $lightness: 10%);
      padding: 1rem 1rem 0.5rem;
      width: 100%;
      color: $color-white;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
    }
    label {
      pointer-events: none;
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 1rem;
      transition:0.2s ease all;
      -moz-transition:0.2s ease all;
      -webkit-transition:0.2s ease all;
      color: adjust-color($color-placeholder, $lightness: -15%);
    }
    input:focus ~ label, input:valid ~ label {
      top: 0.125rem;
      font-size: .75rem;
    }
  }
}
/deep/.jun-modal-edit {
  background-color: adjust-color($color-black, $lightness: 7%);
  color: $color-white;
}
</style>
