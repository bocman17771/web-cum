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
    background-color: #FEFEFF;
    border: solid 1px rgba(196, 196, 205, 0.4);
    border-radius: 0.5rem;
    outline: none;
    cursor: pointer;
    font-size:  1.6rem;
    line-height: 1.23625;
    width: 100%;
    &:hover {
      border: solid 1px #FF93CD;
    }
    &:active {
      opacity: 0.9;
    }
  }
  .button {
    &.redLight {
      border: solid 1px #FFC5E4;
      background-color: #FFC5E4;
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
