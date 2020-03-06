<template>
  <div class="jun-application" >
    <b-table-simple responsive borderless v-show="isInApplication ">
      <b-thead class="jun-list-layout__head">
        <b-tr>
          <b-th class="jun-list-layout__head-app">Application</b-th>
          <b-th>App type</b-th>
          <b-th>App Category</b-th>
          <b-th>Search keywords</b-th>
          <b-th>Active</b-th>
          <b-th>Actions</b-th>
        </b-tr>
      </b-thead>
      <draggable :list="contentData" tag="b-tbody" class="jun-list-layout__body list-application">
        <b-tr class="jun-list-layout__row" v-for="item in contentData" :key="item.id" :id="item.id">
          <b-td class="list-application__icon-arrow"><img class="list-application__brand" :src="item.logo" alt=""/>{{item.app}}
            <Icon name="arrow-up" v-b-tooltip.hover.bottom title="URL:aaaa"/>
          </b-td>
          <b-td>{{item.type}}</b-td>
          <b-td>{{item.name}}</b-td>
          <b-td>
            <span class="jun-list-layout__keywords" v-for="tag in item.tags" :key="tag.id">
              {{tag.label}}
            </span>
          </b-td>
          <b-td class="jun-list-layout__active jun-switch">
            <b-form-checkbox switch size="lg" v-model="item.isActive"></b-form-checkbox>
          </b-td>
          <b-td>
            <ListAction :action="item"/>
          </b-td>
        </b-tr>
      </draggable>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: 'application',
  computed: {
    isInApplication () {
      return this.$route.name === 'application'
    }
  }
}
</script>

<style lang="scss" scoped>
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
    &-keyword {
      &.b-form-tags, &.b-form-tags.focus {
        background-color: adjust-color($color-placeholder, $lightness: -60%);
        box-shadow: none;
        border: none;
        li {
          margin-top: 1rem!important;
          &.b-form-tag {
            background-color: $color-tags;
            border-radius: 5rem;
          }
        }
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
