<template>
  <div :class="[
      $style.dot,
      $style[props.color],
      props.xs && $style.xs
     ]"
  />
</template>
<script lang="ts">export default { name: 'w-dot' }</script>
<script lang="ts" setup>
import {defineProps} from "vue";

interface IProps {
  color: string
  xs: boolean
}

const props = defineProps<IProps>()

</script>
<style lang="scss" module>
.dot {
  border-radius: 30rem;
}
.gray {
  background-color: rgba($black, .1);
}
.xs {
  width: .6rem;
  height: .6rem;
}
</style>
