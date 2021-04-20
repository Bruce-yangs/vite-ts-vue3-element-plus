<template>
  <teleport to="#back">
    <!-- 传送门 -->
    <div
      class="d-flex justify-content-center align-items-center h-100 loading-container"
    >
      <div
        class="loading-content"
        :style="{ backgroundColor: background || '' }"
      >
        <div class="spinner-border text-primary" role="status">
          <!-- <span class="sr-only">{{ text || "Loading..." }}</span> -->
        </div>
        <p class="text-primary small text" v-if="text">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { defineProps, onUnmounted } from "vue";
export default {
  props: {
    text: {
      type: String,
    },
    background: {
      type: String,
    },
  },
  setup() {
    const node = document.createElement("div");
    node.id = "back";
    document.body.appendChild(node);
    onUnmounted(() => {
      document.body.removeChild(node);
    });
  },
};

/* export default {
  props: {
    text: {
      type: String,
    },
    background: {
      type: String,
    },
  },
}; */
</script>

<style>
.loading-content {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  text-align: center;
}
.spinner-border {
  position: fixed;
  top: 50%;
}
.loading-container .text {
  position: fixed;
  top: 55%;
  text-align: center;
  display: block;
  width: 103%;
}
</style>
