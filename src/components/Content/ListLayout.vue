<template>
  <div class="jun-list-layout" v-if="hasData">
    <!-- <draggable v-model="contentData" draggable=".jun-list-layout__row">
      <b-table
        show-empty
        responsive
        borderless
        :items="contentData"
        :fields="tableFields"
        primary-key="id"
        thead-class="jun-list-layout__head"
        tbody-class="jun-list-layout__body"
        tbody-tr-class="jun-list-layout__row"
        :tbody-transition-props="transProps"
        :busy="isBusy">
        <div slot="table-busy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
        </div>
        <template v-slot:cell(drag)="data">
        </template>
        <template v-slot:cell(index)="data">
          <span>{{data.index + 1}}</span>
        </template>
        <template v-slot:cell(name)="data">
          <span>{{data.item.name}}</span>
        </template>
        <template v-slot:cell(active)="data">
          <b-form-checkbox switch size="lg" v-model="data.item.isActive"></b-form-checkbox>
        </template>
        <template v-slot:cell(action)="data">
          <ListAction :action="data"/>
        </template>
      </b-table>
    </draggable> -->

    <!--list of category-->
    <b-table-simple responsive borderless v-show="isInCategory">
      <b-thead class="jun-list-layout__head">
        <b-tr>
          <b-th></b-th>
          <b-th>Order</b-th>
          <b-th>App Category</b-th>
          <b-th>Active</b-th>
          <b-th>Actions</b-th>
        </b-tr>
      </b-thead>
      <draggable :list="contentData" tag="b-tbody" class="jun-list-layout__body">
        <b-tr class="jun-list-layout__row" v-for="item in contentData" :key="item.id" :id="item.id">
          <b-td class="jun-list-layout__draggable" >
            <svg xmlns="http://www.w3.org/2000/svg" width="20.321" height="20.323" viewBox="0 0 20.321 20.323">
              <g id="move-object-arrows" transform="translate(-0.001)">
                <path id="Path_18" data-name="Path 18" d="M19.656,10.867l.667-.667-.667-.667h0L17.294,7.171a.945.945,0,0,0-1.337,1.336l.749.749h-2.44a.956.956,0,0,0-.377-.079H11.145V3.616l.591.591a.945.945,0,0,0,1.336-1.336l-2.2-2.2h0L10.2,0,9.533.667h0L7.172,3.029A.944.944,0,1,0,8.507,4.365l.749-.749v2.44a.943.943,0,0,0-.079.376V9.177H3.617l.591-.591A.944.944,0,0,0,2.873,7.25l-2.2,2.2h0L0,10.121l.668.667h0L3.03,13.151a.944.944,0,0,0,1.336-1.336l-.749-.749h2.44a.958.958,0,0,0,.376.079H9.178v5.561l-.591-.591a.945.945,0,1,0-1.336,1.336l2.2,2.2h0l.668.668.667-.668h0l2.361-2.361a.944.944,0,0,0-1.336-1.336l-.749.748v-2.44a.945.945,0,0,0,.079-.376V11.145h5.561l-.591.591a.945.945,0,0,0,1.336,1.336l2.2-2.2S19.656,10.867,19.656,10.867Z" fill="#9645c8"/>
              </g>
            </svg>
          </b-td>
          <b-td >{{item.order}}</b-td>
          <b-td>{{item.name}}</b-td>
          <b-td class="jun-list-layout__active jun-switch">
            <b-form-checkbox switch size="lg" v-model="item.isActive"></b-form-checkbox>
          </b-td>
          <b-td>
            <ListAction :action="item"/>
          </b-td>
        </b-tr>
      </draggable>
    </b-table-simple>

    <!--list of application-->
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
      <b-tbody :list="contentData" class="jun-list-layout__body list-application">
        <b-tr class="jun-list-layout__row" v-for="item in contentData" :key="item.id" :id="item.id">
          <b-td class="list-application__icon-arrow"><img class="list-application__brand" :src="item.logo" alt=""/>{{item.app}}
            <a class="btn-url" :href="'https://'+item.url"  v-b-tooltip.hover.bottom :title="item.url" target="_blank"><Icon name="arrow-up"/></a>
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
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
// import { mapActions } from 'vuex's
import { isEmpty } from 'lodash'
import draggable from 'vuedraggable'

export default {
  name: 'jun-list-layout',
  components: {
    draggable,
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    ListAction: () => import(/* webpackChunkName: "ListAction" */ '@/components/ListAction/ListAction.vue')
  },
  props: {
    contentData: {
      type: Array,
      require: true
    }
  },
  computed: {
    hasData () {
      return !isEmpty(this.contentData)
    },
    isInCategory () {
      return this.$route.name === 'category'
    },
    isInApplication () {
      return this.$route.name === 'application'
    }
  }
  // data () {
  //   return {
  //     isBusy: false,
  //     tableFields: [
  //       {
  //         key: 'drag',
  //         label: '',
  //         sortable: true
  //       },
  //       {
  //         key: 'index',
  //         label: 'Order',
  //         sortable: true
  //       },
  //       {
  //         key: 'name',
  //         label: 'App name',
  //         sortable: true
  //       },
  //       {
  //         key: 'active',
  //         label: 'Active',
  //         sortable: true,
  //         tdClass: 'jun-list-layout__active jun-switch'
  //       },
  //       {
  //         key: 'action',
  //         label: 'Actions',
  //         sortable: true
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';
.jun-list
{
  &-layout {
    margin-top: 5rem;
    .table-responsive {
      overflow-x: hidden;
    }
    &__draggable {
      width: 4rem;
      text-align: center;
    }
    &__keywords {
      border-radius: 5rem;
      background-color: $color-tags;
      padding: .5rem;
      margin: .5rem .5rem 0 0;
      font-weight: 500;
      font-size: 14px;
    }
  }
}
/deep/.jun-list-layout {
  &__head {
    color: $color-white;
    th {
      padding-bottom: 1.5rem;
    }
  }
  &__body {
    color: $color-white;
    background-color: adjust-color($color-dark-theme, $lightness: 10%)
  }
  &__row {
    border: 0.125rem solid;
    border-color: $color-border transparent $color-border transparent;
    td {
      vertical-align: middle;
    }
    &:first-child {
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover{
      background-color: adjust-color($color-dark-theme, $lightness: 15%)
    }
  }
}
.btn-url {
  background-color: transparent;
  border: none;
}
</style>
