<template>
  <div :class="$style.wrapper">
    <label
      v-for="(item, index) in props.items"
      :key="index"
    >
      <input
        type="radio"
        v-model="currentVal"
        :checked="!index"
        :value="item.title"
        name="radio"
      />
      <div>{{item.title}}</div>
    </label>
  </div>
</template>
<script lang="ts"> export default { name: "w-tabs" }</script>
<script lang="ts" setup>
import {ref} from "vue";

const currentVal = ref('')

interface IProps {
  items: [{title: string}]
}

const props = defineProps<IProps>()
</script>
<style lang="scss" module>
.wrapper {
  display: inline-flex;
  padding: 0.4rem;
  background-color: $white2;
  border: 1px solid rgba(196, 196, 205, 0.4);
  border-radius: $br3;
  label > div {
    cursor: pointer;
    padding: 0.6rem 1rem;
    border-radius: $br;
    transition: background-color $transition ease;
    @include p;
  }
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + div{
      background-color: $pinkLight2;
    }
  }
}

</style>
