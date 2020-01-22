<template>
  <span class="jun-icon">
    <IconAdd v-if='name === "add"'/>
    <IconEdit v-else-if='name === "edit"'/>
    <IconDelete v-else-if='name === "delete"'/>
    <IconDefault v-else/>
  </span>
</template>
<script>
export default {
  name: 'jun-icon',
  props: {
    name: String
  },
  components: {
    IconDefault: () => import(/* webpackChunkName: "Icon" */ './Icons/IconDefault'),
    IconAdd: () => import(/* webpackChunkName: "Icon" */ './Icons/IconAdd.vue'),
    IconEdit: () => import(/* webpackChunkName: "Icon" */ './Icons/IconEdit.vue'),
    IconDelete: () => import(/* webpackChunkName: "Icon" */ './Icons/IconDelete.vue')
  }
}
</script>
<style lang="scss" scoped>
.jun-icon {
  pointer-events: none;
  display: inline-flex;
  padding: 5px;
}
</style>
