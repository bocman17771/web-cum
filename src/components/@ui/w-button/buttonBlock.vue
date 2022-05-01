<template>
  <button :class="$style.button" @click="$emit('click')">
    <slot/>
  </button>
</template>
<script lang="ts"> export default { name: 'w-button-block' }</script>
<script lang="ts" setup>
import {defineEmits} from "vue";

interface IEmit {
  (e: 'click', val: boolean): void
}
defineEmits<IEmit>()


</script>
<style lang="scss" module>
  .button {
    padding: 2rem 2.8rem;
    background: linear-gradient(272.12deg, #DBC4FF 0%, #B7EAFF 100%);
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    transition: ease;
    @include p;
    &:hover {
      opacity: $opacity;
    }
  }
</style>
