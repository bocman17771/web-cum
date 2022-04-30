<template>
  <label :class="[$style.wrapper, focus && $style.wrapperFocus]">
    <w-icon v-if="icon" :class="$style.icon" :icon="icon"/>
    <input v-model="proxy" :placeholder="placeholder" @focus="onFocus" @blur="removeFocus"/>
    <w-icon v-show="showCross" icon="cross" sm @click="$emit('update:modelValue', '')"/>
  </label>
</template>
<script lang="ts">export default {name: 'w-text-field'}</script>
<script lang="ts" setup>
import { computed, ref } from "vue"
interface IProps {
  modelValue?: string,
  placeholder?: string,
  icon?: string
}
type Emit = {
  (e: 'update:modelValue', val: boolean | undefined): void
}

const props = defineProps<IProps>()
const emit = defineEmits<Emit>()

const focus = ref(false)

const proxy = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
const showCross = computed(() => !!proxy.value)

const onFocus = () => {
  focus.value = true
  // inputRef.value.focus()
}
const removeFocus = () => {
  focus.value = false
}
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  height: 4rem;
  font-size:  1.6rem;
  line-height: 1.23625;
  color: #606074;
  //border: solid 1px rgba(196, 196, 205, 0.4);
  box-shadow: 0 0 0 1px rgba(196, 196, 205, 0.4);
  transition: box-shadow 0.2s ease;
  background-color: #FEFEFF;
  border-radius: 10rem;
  &.wrapperFocus {
    //outline: solid 2px #FF93CD;
    box-shadow: 0 0 0 2px #FF93CD;
  }
  &:not(&.wrapperFocus) {
    &:hover {
      box-shadow: 0 0 0 1px #FF93CD;
    }
  }
  .icon {
    margin-right: 0.8rem;
  }
  input {
    height: 3rem;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
}

</style>
