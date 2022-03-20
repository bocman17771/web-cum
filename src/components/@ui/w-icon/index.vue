<template>
  <div :class="[$style.icon, sm && $style.sm]" v-html="proxy"/>
</template>
<script>
import {watch, ref} from 'vue'

export default {
  name: 'w-icon',
  props: {
    icon: String,
    sm: Boolean
  },
  setup(props) {
    const proxy = ref()
    watch(props.icon, async () => {
      const res = await import(`../../../assets/icons/${props.icon}.svg?raw`)
      proxy.value = res.default
    }, {immediate: true})

    return {
      proxy
    }
  }
}
</script>
<style lang="scss" module>
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  &.sm {
    width: 3rem;
  }
}
</style>
