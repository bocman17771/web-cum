<template>
  <label :class="$style.wrapper">
    <div :class="$style.checkbox">
      <input type="checkbox" v-model="valProxy" >
      <span/>
    </div>
    <span>
      <slot/>
    </span>
  </label>
</template>
<script lang="ts"> export default { name: 'w-checkbox' }</script>
<script lang="ts" setup>
  import { defineProps, computed } from "vue";

  interface IProps {
    modelValue: boolean
  }
  interface IEmit {
    (e: 'update:modelValue', val: boolean): void
  }
  const emit = defineEmits<IEmit>()
  const props = defineProps<IProps>()

  const valProxy = computed({
    get: () => props.modelValue,
    set: val => emit('update:modelValue', val)
  })

</script>
<style lang="scss" module>
.wrapper {
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  & > .checkbox {
    position: relative;
    & > input {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: -1;
    }
    & > span {
      display: block;
      box-shadow: 0px 0px 0px 2px $gray3;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 4px;
      transition: opacity .1s ease-out;
      &:hover {
        box-shadow: 0px 0px 0px 2px $pink;
      }
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1rem;
        height: 1rem;
        border-radius: 2px;
        transition: opacity .1s ease-out;
        background-color: $pinkBlack2;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
    }
    & > input:checked + span {
      &:before {
        opacity: 1;
      }
    }
  }

  & > * + * {
    margin-left: 1.2rem;
  }
}
</style>
