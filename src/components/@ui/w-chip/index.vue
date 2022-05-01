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
    display: flex;
    align-items: center;
    justify-content: space-between;
    //padding: 0.4rem 1rem;
    height: 3rem;
    font-size: 1.6rem;
    background-color: #FFBEE1;
    border-radius: 6px;
  }
  .icon {
    margin-left: 1.58rem;
    cursor: pointer;
  }
</style>
