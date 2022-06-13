<template>
<!--  <div id="map" style="width: 600px; height: 400px"></div>-->
  <loading v-if="loading">loading...</loading>
  <template v-else>
    <yandex-map :settings="settings">
<!--      <ymap-marker-->
<!--          :coords="coords"-->
<!--          marker-id="123123"-->
<!--          marker-type="placemark"-->
<!--      />-->
    </yandex-map>
  </template>
</template>
<script lang="ts">
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import testComponent from './testComponent.vue';

console.log(yandexMap)
export default {
  name: 'testPage',
  components: {
    yandexMap,
    ymapMarker,
    testComponent,
  }
}
</script>
<script lang="ts" setup>
import {ref} from "vue";

const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 2000)

const coords = [54.82896654088406, 39.831893822753904]
const settings = {
  apiKey: '5c81cb20-2376-4a88-a4d8-7016fd97df75',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}


// ymaps.ready(init)
// console.log(ymaps)
// function init(){
//   var myMap = new ymaps.Map("map", {
//     center: [55.76, 37.64],
//     zoom: 7
//   });
// }

// const arr = ref<any[]>([false,1,0,1,2,0,1,3,"a"])

// arr.value.sort((a,b):void => {
//   console.log(a, b, a-b, 'sort')
// })

// console.log(arr.value.sort((a,b) => {
//   if (a > b) return -1
// }))
//
// console.log(arr.value, 'arrsss')


// const humanReadable = (seconds) => {
//   const s = (seconds % 60) ? seconds % 60 :  0
//   const h = Math.floor(seconds / 60 / 60) ? Math.floor(seconds / 60 / 60) : 0
//   const m =  Math.floor(seconds / 60) - (h * 60) ? Math.floor(seconds / 60) - (h * 60) : 0
//   const time = `${h > 99 ? 99 : h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
//   return time
// }
//
// console.log(humanReadable(3600))

// const findOutlier = (integers) => {
//   return integers.filter(e => e % 2).length < 2 ? integers.filter(e => e % 2)[0] : integers.filter(e => !(e % 2))[0]
// }
//
// console.log(findOutlier([0, 1, 2]))
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))


</script>
