<template>
  <li class="dropdown-option" :class="{'is-disabled':disabled}">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import {  defineComponent, ref } from "vue";

export default defineComponent({
  name: "DropdownItem",
  props: {
    disabled: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    // const isOpen = ref(false);
    // const toggleOpen = () => {
    //   isOpen.value = !isOpen.value;
    // };
    // return {isOpen,toggleOpen}
  },
});
</script>

<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
