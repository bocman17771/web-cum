<template>
  <div :class="$style.wrapper">
    <w-button
      :class="[$style.button]"
      v-for="(item, index) in itemsProxy"
      :key="index"
      :redLight="item.active"
      @click="onItem(item)"
      notBorder
    >
      {{item.title}}
    </w-button>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: 'w-tabs',
  props: {
    items: Array,
  },
  setup(props) {

    const itemsProxy = ref(props.items.map(e => ({...e, active: false})))

    const onItem = (item) => {
      itemsProxy.value.forEach(e => e.active = false)
      item.active = true
    }
    return {
      itemsProxy,
      onItem
    }
  }
}
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  padding: 0.4rem;
  background-color: #FEFEFF;
}

</style>
