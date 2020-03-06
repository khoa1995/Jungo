<template>
  <div class="jun-category">
    <!--Category header (searching, adding)-->
    <Header :onClickAddItem="addCategory" />

    <!--Category list-->
    <CategoryList />

    <!--Add category modal-->
    <b-modal v-model="modalAddToggle"
      centered
      id="add-category"
      body-class="jun-modal-add"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
      hide-footer
      @shown="focusInput">
      <div class="add-category-modal">
        <div class="add-category-modal__title">Add Category</div>
        <div :class="{'add-category-modal__input':true, 'mb-1':$v.categoryName.$error }">
          <input class="form-control" v-model="categoryName" type="text" ref="inputText" required />
          <label>Name <span class="required">*</span></label>
        </div>
        <span v-if="$v.categoryName.$error" :class="{ 'validate-error': $v.categoryName.$error }">Category name is required</span>
      </div>
      <div class="modal-footer modal-footer-custom">
        <b-button :class="{'btn-cancel jun-button--outline-mantu': true }" @click="closeModal">Cancel</b-button>
        <b-button :class="{'btn-done jun-button--default': true, 'disabled': disabledDone}" @click.stop="handleAddCategory">Done</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {
  GET_CATEGORY_LIST,
  MAKE_TOAST,
  CREATE_CATEGORY
} from '@/store/action-types'
import { isEmpty } from 'lodash'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'category',
  components: {
    CategoryList: () => import(/* webpackChunkName: "CategoryList" */ '@/components/Content/CategoryList.vue'),
    Header: () => import(/* webpackChunkName: "CategoryList" */ '@/components/Header/Header.vue')
  },
  validations: {
    categoryName: {
      required
    }
  },
  data () {
    return {
      categoryName: '',
      modalAddToggle: false,
      disabledDone: false
    }
  },
  methods: {
    addCategory () {
      this.modalAddToggle = true
      this.disabledDone = false
      this.categoryName = ''
    },
    focusInput () {
      this.$refs.inputText.focus()
    },
    closeModal () {
      this.modalAddToggle = false
      this.$v.$reset()
    },
    ...mapActions({
      _getCategoryList: `category/${GET_CATEGORY_LIST}`,
      _makeToast: `toast/${MAKE_TOAST}`,
      _createCategory: `category/${CREATE_CATEGORY}`
    }),
    async handleAddCategory () {
      // Validate
      this.$v.$touch()
      if (isEmpty(this.categoryName)) {
        this._makeToast({
          content: 'Please input category name.',
          variant: 'danger'
        })
      } else {
        this.disabledDone = true
        await this._createCategory({
          name: this.categoryName
        })
        this.closeModal()
      }
    }
  },
  async created () {
    try {
      await this._getCategoryList()
    } catch (error) {
      this._makeToast({
        content: error,
        variant: 'danger'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Category.scss';
</style>
