<template>
  <div :class="[$style.icon, sm && $style.sm]" v-html="proxyIcon"/>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  &.sm {
    width: 3rem;
  }
}
</style>
