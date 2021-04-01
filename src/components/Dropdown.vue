<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      @click.prevent="toggleOpen"
      class="btn btn-outline-light my-2 dropdown-toggle"
      >{{ title }}</a
    >
    <ul
      class="dropdown-menu"
      v-if="isOpen"
      :style="{ display: 'block' }"
      aria-labelledby="dropdownMenuButton1"
    >
      <!-- <li><a class="dropdown-item" href="#">新建文字</a></li>
      <li><a class="dropdown-item" href="#">编辑资料</a></li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useClickOutside from "../hooks/useClickOutside";
export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const isClickOutside = useClickOutside(dropdownRef);

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    });

    /* const handler =(e:MouseEvent ) =>{
      if (dropdownRef.value) {
        if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
          isOpen.value = false
        }
      }
    }
     onMounted(() => {
      document.addEventListener('click',handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click',handler)
    }) */
    return { isOpen, toggleOpen, dropdownRef };
  },
});
</script>

<style></style>
