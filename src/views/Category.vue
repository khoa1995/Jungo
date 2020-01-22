<template>
  <div class="jun-category">
    <div class="jun-category-header">
      <div class="jun-category-header__title">My Categories</div>
      <div class="jun-category-header__actions">
        <div class="jun-category-header__search">
          <input placeholder="Search by name..." />
        </div>
        <div class="jun-category-header__add">
          <button class="jun-button" @click="addCategory"><Icon name="add"/>Add Category</button>
        </div>
      </div>
    </div>
    <ListLayout :contentData="category"/>
    <!--Add category-->
    <b-modal v-model="modalAddToggle"
      centered
      id="add-category"
      body-class="jun-modal-add"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
      hide-footer>
      <div class="add-category-modal">
        <div class="add-category-modal__title">Add Category</div>
        <div class="add-category-modal__input">
          <input autofocus type="text" ref="inputText" required />
          <label>Name <span class="required">*</span></label>
        </div>
      </div>
      <div class="modal-footer modal-footer-custom">
        <b-button class="btn-cancel jun-button--outline-mantu" @click="closeModal">Cancel</b-button>
        <b-button class="btn-done jun-button--default" @click.stop="addRowCat">Done</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { category } from '@/fakeData.js'
export default {
  name: 'category',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    ListLayout: () => import(/* webpackChunkName: "ListLayout" */ '@/components/Content/ListLayout.vue')
  },
  data () {
    return {
      category,
      addRows: [],
      modalAddToggle: false
    }
  },
  methods: {
    addCategory () {
      this.modalAddToggle = true
      if (this.modalAddToggle === true) {
        this.$nextTick(function () {
          this.$refs.inputText.focus()
        })
      }
    },
    closeModal () {
      this.modalAddToggle = false
    }
  },
  mounted () {
    this.$refs.inputText.focus()
  }
}
</script>

<style lang="scss" scoped>
@import './Category.scss';
</style>
