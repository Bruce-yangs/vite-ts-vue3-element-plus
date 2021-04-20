<template>
  <teleport to="#Message">
    <div class="alert message-info" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
export type MessageType = 'success' | 'error' | 'default'
import { PropType, ref, defineProps } from "vue";
const props = defineProps({
  message: {
    type: String,
  },
  type: {
    type: String as PropType<MessageType>,
    default: 'default'
  }
});
const node = document.createElement('div')
node.id = 'message'
document.body.appendChild(node)
</script>

<style scoped>
</style>