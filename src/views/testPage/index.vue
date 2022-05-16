<template>
  test
</template>
<script lang="ts"> export default { name: 'testPage' } </script>
<script lang="ts" setup>
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
