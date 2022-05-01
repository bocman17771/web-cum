<template>
  <button
    :class="[
      $style.button,
      props.blue && $style.blue
    ]"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>
<script lang="ts"> export default { name: 'w-button' }</script>
<script lang="ts" setup>
import {defineEmits} from "vue";
interface IProps {
  blue?: boolean
}
const props = defineProps<IProps>()

interface IEmit {
  (e: 'click', val: boolean): void
}
defineEmits<IEmit>()


</script>
<style lang="scss" module>
.button {
  padding: 1rem 1.8rem;
  background: rgba($pinkBlack, .2);
  border: none;
  border-radius: $br3;
  outline: none;
  cursor: pointer;
  width: 100%;
  transition: background $transition ease;
  @include p;
  &:hover {
    background: rgba($pinkBlack, $opacity);
  }
  &.blue {
    background: linear-gradient(86.42deg, #B4DBFF 0%, #BEF3FF 100%);
    &:hover {
      background: linear-gradient(268.28deg, #A6EFFF 0%, #9ED1FF 100%);
      opacity: 1;
    }
  }
}
</style>
