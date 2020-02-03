<template>
  <div class="jun-application">
    <div class="jun-category-header">
      <div class="jun-category-header__title">My Applications</div>
      <div class="jun-category-header__actions">
        <div class="jun-category-header__search">
          <input placeholder="Search by name..." />
        </div>
        <div class="jun-category-header__add">
          <button class="jun-button" @click="addApplication"><Icon name="add"/>Add external app</button>
        </div>
      </div>
    </div>
    <ListLayout :contentData="application"/>
    <!--Add external app-->
    <b-modal v-model="modalAddAppToggle"
      centered
      id="add-app"
      body-class="jun-modal-app"
      size="lg"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
      hide-footer>
      <div class="add-category-modal">
        <div class="add-category-modal__title">Add external app</div>
        <div class="add-category-modal__input">
          <input autofocus type="text" ref="inputText" required />
          <label>Name <span class="required">*</span></label>
        </div>
        <div class="add-category-modal__input">
          <input autofocus type="text" ref="inputText" required />
          <label>URL <span class="required">*</span></label>
        </div>
        <div class="add-category-modal__input">
          <multiselect
            v-model="value"
            id="ajax"
            label="name"
            track-by="id"
            open-direction="bottom"
            :options="application"
            :internal-search="false"
            :clear-on-select="false"
            :close-on-select="true"
            :max-height="600"
            :show-no-results="true"
            placeholder="App Category">
          </multiselect>
        </div>
        <div class="add-category-modal__input jun-modal-app__search">
          <input autofocus type="text" ref="inputText" required placeholder="Use spacebar to separate multiple keywords..." />
          <label>Search keyword</label>
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
import Multiselect from 'vue-multiselect'
import { application } from '@/fakeData.js'
export default {
  name: 'application',
  components: {
    Multiselect,
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    ListLayout: () => import(/* webpackChunkName: "ListLayout" */ '@/components/Content/ListLayout.vue')
  },
  data () {
    return {
      value: '',
      application,
      modalAddAppToggle: false
    }
  },
  methods: {
    addApplication () {
      this.modalAddAppToggle = true
    },
    closeModal () {
      this.modalAddAppToggle = false
    }
  }
}
</script>

<style lang="scss">
@import './Category.scss';
.jun-application {
  .list-application {
    &__brand {
      width: 20px;
      height: 20px;
      margin: .75rem 0.5rem .75rem 0;
    }
    .jun-list-layout__row {
      cursor: pointer;
      td:first-child {
        padding-left: 2rem;
      }
    }
    &__icon-arrow {
      .jun-icon {
        position: relative;
        top: 0.45rem;
      }
    }
  }
  .jun-list-layout__head-app {
    padding-left: 2rem;
  }
}
.jun-modal-app {
  background-color: adjust-color($color-black, $lightness: 20%);
  color: $color-white;
  &__search {
    label {
      top: 0.125rem;
      font-size: .75rem;
    }
    input {
      &::placeholder {
        font-size: 1rem;
      }
    }
  }
  .multiselect__input {
    &::placeholder {
      color: $color-white;
    }
  }
  .multiselect__tags {
    background-color: adjust-color($color-placeholder, $lightness: -60%);
    border:none;
  }
  .multiselect__content-wrapper {
    background-color: adjust-color($color-placeholder, $lightness: -60%);
    border:none;
    color: $color-white;
  }
  .multiselect__single {
    background: transparent;
    color: $color-white;
  }
  .multiselect__option--selected {
    background: transparent;
    color: $color-white;
    &.multiselect__option--highlight {
      background: adjust-color($color-mantu, $alpha: -0.8, $lightness: -15%);
      color: $color-mantu;
      &::after {
        content: ''
      }
    }
    &:after {
      content: ''
    }
  }
  .multiselect__option--highlight {
    background: adjust-color($color-mantu, $alpha: -0.8, $lightness: -15%);
    color: $color-mantu;
    &::after {
      content: '';
    }
  }
}
</style>
