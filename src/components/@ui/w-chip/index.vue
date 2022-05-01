<template>
  <div :class="$style.chip">
    <slot/>
    <w-icon :class="$style.icon" sm icon="cross" @click="$emit('remove')"/>
  </div>
</template>
<script>
export default {
  name: 'w-chip'
}
</script>
<style lang="scss" module>
  .chip {
    display: inline-flex;
    padding: 0.6rem 1rem;
    background-color: $pinkLight;
    border-radius: $br;
    @include p;
  }
  .icon {
    margin-left: 1.58rem;
    cursor: pointer;
  }
</style>
