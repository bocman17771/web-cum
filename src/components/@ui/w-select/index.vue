<template>
  <div :class="$style.select">
    <w-menu v-model="active">
      <ul>
        <li v-for="(item, index) in props.items" :key="index" @click="active = false">
          {{item}}
        </li>
      </ul>
    </w-menu>
  </div>
</template>
<script lang="ts"> export default { name: 'w-select' }</script>
<script lang="ts" setup>
import {defineProps, ref} from "vue";
const active = ref(false)
interface IProps {
  items: string[]
}
const props = defineProps<IProps>()

</script>
<style lang="scss" module>
.select {
  ul > li + li {
    margin-top: 2.8rem;
  }
  ul > li {
    cursor: pointer;
    &:hover {
      color: $blue;
    }
  }
}
</style>
