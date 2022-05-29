<template>
  <div :class="$style.wrapper">
    <div :class="$style.row">
      <h2>slider</h2>
      <w-slider/>
    </div>

    <div :class="$style.row">
      <h2>text-field</h2>
      <w-text-field v-model="valField" icon="find"/>
      <br>
      <w-text-field v-model="valField" />
    </div>

    <div :class="$style.row">
      <h2>icon</h2>
      <w-icon icon="find"></w-icon>
      <w-icon md icon="like"></w-icon>
      <w-icon md icon="likeFilled"></w-icon>
      <w-icon icon="crown"></w-icon>
      <w-icon icon="medal"></w-icon>
      <w-icon icon="female"></w-icon>
      <w-icon icon="maleGender"></w-icon>
      <w-icon icon="femaleMaleGender"></w-icon>
    </div>

    <div :class="$style.row">
      <h2>button</h2>
      <w-button @click="btnClick">кнопка</w-button>
      <w-button @click="btnClick" blue>кнопка</w-button>
    </div>

    <div :class="$style.row">
      <h2>button block</h2>
      <w-button-block @click="btnClick">кнопка</w-button-block>
    </div>

    <div :class="$style.row">
      <h2>tabs</h2>
      <h3 style="color: red">
        + тут должна быть анимация бегунка
      </h3>
      <w-tabs :items="[{title: '123'}, {title: '456'}, {title: '789'}]"></w-tabs>
    </div>

    <div :class="$style.row">
      <h2>chip</h2>
      <w-chip sm>123321</w-chip>
    </div>

    <div :class="$style.row">
      <h2>menu</h2>
      <w-menu v-model="activeMenu">
        menu
      </w-menu>
    </div>

    <div :class="$style.row">
      <h2>select</h2>
      <w-select v-model="selectVal" :items="[{ title: '1' },{ title: '2' }]"/>
    </div>
    <div :class="$style.row">
      <h2>paginate-panel</h2>
      <w-paginate-panel v-model="paginateVal" :pageCount="20"/>
    </div>

    <div :class="$style.row">
      <h2>paginate-panel</h2>
      <w-checkbox v-model="check">{{check}}</w-checkbox>
    </div>

    <div :class="$style.row">
      <h2>like</h2>
      <w-like v-model="like"></w-like>
      {{like}}
    </div>

    <div :class="$style.row">
      <h2>dots</h2>
      <w-dot color="gray" xs></w-dot>
    </div>

  </div>
</template>
<script lang="ts">export default { name: 'storyBook' }</script>
<script lang="ts" setup>
import { ref} from "vue"
const valField = ref('text')
const valField2 = ref('text2')
const activeMenu = ref(false)
const selectVal = ref('')
const btnClick = () => {
  valField.value = 'wehrewdsr'
}
const check = ref(false)
const paginateVal = ref(1)
const like = ref(false)

</script>
<style lang="scss" module>
.wrapper {
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 0 1rem;
}
.row {
  margin-bottom: 5rem;
  padding-bottom: 2rem;
  border-bottom: 5px solid #E6E6EA;
}
</style>
