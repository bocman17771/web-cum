<template>
  <button :class="$style.like" @click="valProxy = !valProxy">
    <w-icon :icon="getTypeLike" md></w-icon>
  </button>
</template>
<script lang="ts">export default { name: 'w-like' }</script>
<script lang="ts" setup>
import { computed, defineProps, ref, watch } from "vue"
import WIcon from "../w-icon/index.vue";

interface IProps {
  modelValue: boolean
}
interface IEmit {
  (e: 'update:modelValue', val: boolean): void
}
const emit = defineEmits<IEmit>()
const props = defineProps<IProps>()

const valProxy = ref(props.modelValue)

const getTypeLike = computed(() => valProxy.value ? 'likeFilled' : 'like')

watch(valProxy, () => {
  emit('update:modelValue', valProxy.value)
}, { immediate: false })

</script>
<style lang="scss" module>
.like {
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
</style>
