<template>
  <button :class="[$style.button, redLight && $style.redLight, notBorder && $style.notBorder]" v-on="$event">
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'w-button',
  props: {
    redLight: Boolean,
    notBorder: Boolean
  }
}
</script>
<style lang="scss" module>
  .button {
    padding: 0.9rem 15rem;
    background-color: $white2;
    border: solid 1px rgba(196, 196, 205, 0.4);
    border-radius: $br;
    outline: none;
    cursor: pointer;
    width: 100%;
    @include p;
    &:hover {
      border: solid 1px $pink;
    }
    &:active {
      opacity: 0.9;
    }
  }
  .button {
    &.redLight {
      border: solid 1px $pinkLight2;
      background-color: $pinkLight2;
      //&:hover {
      //  border: none;
      //}
    }
  }
  .button {
    &.notBorder {
      border: none;
    }
  }

</style>
