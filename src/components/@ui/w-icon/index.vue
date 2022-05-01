<template>
  <span :class="[$style.icon, props.sm && $style.sm]" v-html="proxyIcon"/>
</template>

<script lang="ts">export default {name: 'w-icon'}</script>
<script lang="ts" setup>
import { computed } from 'vue'
import Icons from './icons'

interface IProps {
  icon: string
  sm?: boolean
}


const props = defineProps<IProps>()

const proxyIcon =  computed(() => Icons[props.icon])

</script>
<style lang="scss" module>
.icon {
  & > svg {
    width: 1.4rem;
  }
  &.sm > svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>
