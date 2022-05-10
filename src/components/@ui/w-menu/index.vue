<template>
  <div :class="$style.wrapper">
    <w-button @click="open" redLight>menu</w-button>
    <div ref="body" v-if="props.modelValue" :class="$style.body">
      <slot/>
    </div>
  </div>
  <div
    v-if="props.modelValue"
    :class="$style.wrapperFixed"
    @click="close"
  />
</template>
<script lang="ts"> export default { name: 'w-menu' } </script>
<script lang="ts" setup>
import { ref, watch, nextTick, computed } from "vue"
interface IProps {
  modelValue: boolean
}

const props =  withDefaults(defineProps<IProps>(), {
  modelValue: false
})

const active = ref(props.modelValue)
const body = ref(null)
const windowHeight = ref(window.outerHeight)

interface IEmit {
  (e: 'update:modelValue', val: boolean): void
}

const emit = defineEmits<IEmit>()

const open = () => {
  emit('update:modelValue', !props.modelValue)

}
const close = () => {
  emit('update:modelValue', false)
}

const openBottom = ():void => {
  const bodyCord = body.value.getBoundingClientRect()
  const top = Math.ceil(bodyCord.top)
  const height = Math.ceil(bodyCord.height)
  if( top + height <  windowHeight.value) return
  body.value.style.top = `-${height / 10}rem`
}


watch(() => props.modelValue, ():void => {
  if (!props.modelValue) return
  nextTick(():void => {
    openBottom()
  })
})

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
  z-index: 10;
  padding: 2.4rem 2.8rem 2.8rem;
  background-color: #FEFEFF;
}
.wrapperFixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
