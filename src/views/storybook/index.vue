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
      <w-button @click="btnClick">кнопка</w-button>
      <w-button @click="btnClick" blue>кнопка</w-button>
    </div>

    <div :class="$style.row">
      <h2>button block</h2>
      <w-button-block @click="btnClick">кнопка</w-button-block>
    </div>

    <div :class="$style.row">
      <h2>tabs</h2>
      <h3 style="color: red">
        + тут должна быть анимация бегунка
      </h3>
      <w-tabs :items="[{title: '123'}, {title: '456'}, {title: '789'}]"></w-tabs>
    </div>

    {{valField}}
    {{valField2}}

    <div :class="$style.row">
      <h2>chip</h2>
      <w-chip sm>123321</w-chip>
    </div>

<!--    <div :class="$style.row">-->
<!--      <h2>menu</h2>-->
<!--      <w-menu></w-menu>-->
<!--    </div>-->
  </div>
</template>
<script lang="ts">export default { name: 'storyBook' }</script>
<script lang="ts" setup>
import { ref, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered } from "vue"
const valField = ref('text')
const valField2 = ref('text2')

const btnClick = () => {
  console.log(1)
  valField.value = 'wehrewdsr'
}
const arr = ref<any[]>([false,1,0,1,2,0,1,3,"a"])

// arr.value.sort((a,b):void => {
//   console.log(a, b, a-b, 'sort')
// })

console.log(arr.value.sort((a,b) => {
  if (a > b) return -1
}))

console.log(arr.value, 'arrsss')

onBeforeUpdate(() => {
  console.log(valField.value)
})
onUpdated(() => {
  console.log(valField.value)
})

onRenderTracked(({ key, target, type }) => {
  console.log({ key, target, type })
})

onRenderTriggered(({ key, target, type }) => {
  console.log({ key, target, type })
})

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
