<template>
  <div :class="$style.wrapper">
    <span>{{ sliderVal[0] }}</span>
    <slider :class="$style.slider" :tooltips="false" :min="0" :max="100" v-model="sliderVal"></slider>
    <span>{{ sliderVal[1] }}</span>
  </div>
</template>
<script setup>
import { ref} from 'vue'
import Slider from '@vueform/slider'
const sliderVal = ref([0, 100])

</script>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss">
.slider-connect {
  background-color: #D3D3E1;
}
.slider-horizontal {
  height: 2px;
}

.slider-horizontal .slider-handle {
  top: calc(var(--slider-handle-height, 16px)/2*-1 - var(--slider-height, 6px)/2*-1 + -2px);
  width: 8px;
  height: 16px;
  border-radius: 3px;
}
.slider-handle {
  box-shadow: none;
  background-color: #606074;
  opacity: 0.7;
  &:focus {
    box-shadow: none;
    background-color: #E95BA8;
    opacity: 0.7;
  }
}
.slider-focused {}
</style>
<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 1.6rem;
    line-height: 1.23625;
  }
}
.slider {
  width: inherit;
  margin-left: 0.5rem;
  margin-right: 1rem;
}
</style>
