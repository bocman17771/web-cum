<template>
  <div :class="$style.wrapper">
    <div :class="$style.row">
      <h2>slider</h2>
      <w-slider/>
    </div>
    <div :class="$style.row">
      <h2>text-field</h2>
      <w-text-field v-model="valField" icon="find"/>
      <br>
      <w-text-field v-model="valField" />
    </div>
    <div :class="$style.row">
      <h2>icon</h2>
      <w-icon icon="find"></w-icon>
    </div>
    <div :class="$style.row">
      <h2>button</h2>
      <h3 style="color: red">
        тут должны быть другие батоны
      </h3>
      <w-button @click="btnClick">кнопка</w-button>
      <w-button @click="btnClick" redLight>кнопка</w-button>
    </div>
    <div :class="$style.row">
      <h2>tabs</h2>
      <h3 style="color: red">
        это радиобаттоны + тут должна быть анимация бегунка
      </h3>
      <w-tabs :items="[{title: '123'}, {title: '456'}, {title: '789'}]"></w-tabs>
    </div>
    <div :class="$style.row">
      <h2>chip</h2>
      <h3 style="color: red">
        чип не того размера + он должен быть по ширине под контент
      </h3>
      <w-chip>123321</w-chip>
    </div>
    <div :class="$style.row">
      <h2>menu</h2>
      <w-menu></w-menu>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
const valField = ref('text')
const btnClick = () => {console.log(true)}
</script>
<style lang="scss" module>
.wrapper {
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 0 1rem;
}
.row {
  margin-bottom: 5rem;
  padding-bottom: 2rem;
  border-bottom: 5px solid #E6E6EA;
}
</style>
