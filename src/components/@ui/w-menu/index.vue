<template>
  <div :class="$style.wrapper">
    <w-button @click="active = !active" redLight>menu</w-button>
    <div v-if="active" :class="$style.body">
      body
    </div>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: 'w-menu',
  setup() {
    const active = ref(false)
    return {
      active
    }
  }
}
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
}
.body {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 3rem;
  background-color: #FEFEFF;
}
</style>
