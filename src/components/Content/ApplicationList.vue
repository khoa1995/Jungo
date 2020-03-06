<template>
  <div class="jun-list-app">
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

<style lang="scss" scoped>
@import './ListLayout.scss';
</style>
