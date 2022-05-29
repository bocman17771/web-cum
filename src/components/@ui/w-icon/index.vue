<template>
  <span :class="[
      $style.icon,
      props.sm && $style.sm,
      props.md && $style.md
      ]"
      v-html="proxyIcon"
  />
</template>

<script lang="ts">export default {name: 'w-icon'}</script>
<script lang="ts" setup>
import { computed } from 'vue'
import Icons from './icons'

interface IProps {
  icon: string
  sm?: boolean
  md?: boolean
}


const props = defineProps<IProps>()

const proxyIcon =  computed(() => Icons[props.icon])

</script>
<style lang="scss" module>
.icon {
  display: block;
  & > svg {
    width: 1.4rem;
  }
  &.sm > svg {
    width: 1rem;
    height: 1rem;
  }
  &.md > svg {
    width: 2.2rem;
    height: 2.2rem;
  }
}
</style>
