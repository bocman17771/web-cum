<template>
  <paginate
      v-model="getPage"
      :page-count="props.pageCount"
      :click-handler="functionName"
      :prev-text="''"
      :next-text="''"
      :margin-pages="1"
      :container-class="$style.paginate"
      :page-class="$style['page-item']"
  >
  </paginate>

</template>
<script lang="ts"> export default { name: 'w-paginate-panel' }</script>
<script lang="ts" setup>
import Paginate from "vuejs-paginate-next"
import { computed } from "vue"

interface IProps {
  modelValue: number
  pageCount: number
}

const props = defineProps<IProps>()

interface IEmit {
  (e: 'update:modelValue', val: boolean): void
}

const emit = defineEmits<IEmit>()

const functionName = () => {
  console.log(true)
}
const getPage = computed({
  get: () => props.modelValue,
  set: val => {
    emit('update:modelValue', val)
  }
})
</script>

<style lang="scss" module>
   .paginate {
     display: inline-flex;
     border: 1px solid rgba(196, 196, 205, 0.4);
     border-radius: $br3;
     padding-top: 0.4rem;
     padding-bottom: 0.5rem;
     & > * + * {
       margin-left: 0.5rem;
     }
     & > .page-item > a {
       display: flex;
       align-items: center;
       justify-content: center;
       width: 3.8rem;
       height: 3.2rem;
       border-radius: $br;
     }
     & > .page-item:global(:not(.disabled)) > a {
       &:hover {
         background-color: rgba($pinkLight2, $opacity2);
         cursor: pointer;
       }
     }
     & > .page-item:global(.active) {
       background-color: $pinkLight2;
       border-radius: $br;
     }
   }
</style>

