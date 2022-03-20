<template>
  <div :class="[$style.wrapper, focus && $style.wrapperFocus]" @click="onFocus">
    <w-icon v-if="icon" :class="$style.icon" :icon="icon"/>
    <input ref="inputRef" v-model="proxy" :placeholder="placeholder" @focus="onFocus" @blur="removeFocus"/>
    <w-icon v-show="proxy" icon="cross" sm @click="$emit('update:modelValue', '')"/>
  </div>
</template>
<script>
import { computed, ref } from "vue"

export default {
  name: 'w-icons',
  props: {
    modelValue: Number || String,
    placeholder: Number || String,
    icon: String
  },
  setup(props, ctx) {
    const {emit} = ctx
    const inputRef = ref(null)
    const focus = ref(false)
    const proxy = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit('update:modelValue', val)
      }
    })

    const onFocus = () => {
      focus.value = true
      inputRef.value.focus()
    }
    const removeFocus = () => {
      focus.value = false
    }

    return {
      proxy,
      inputRef,
      focus,
      onFocus,
      removeFocus
    }
  }

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
  border: solid 1px rgba(196, 196, 205, 0.4);
  background-color: #FEFEFF;
  border-radius: 37px;
  &.wrapperFocus {
    outline: solid 2px #FF93CD;
  }
  &:not(&.wrapperFocus) {
    &:hover {
      border: solid 1px  #FF93CD;
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
