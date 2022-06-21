<template>
  <layoutDefault>
    <RouterView />
  </layoutDefault>
</template>
<script lang="ts">
import layoutDefault from './layouts/layout-default/index.vue'

export default {
  name: 'app',
  components: {
    layoutDefault
  }
} </script>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>
<style lang="scss" src="./style/main.scss"></style>
