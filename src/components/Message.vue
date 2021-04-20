<template>
  <teleport to="#Message">
    <div class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2" :class="classObject" v-if="isVisible">
      <strong>{{ meassage }}</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        class="btn-close"
        aria-label="Close" @click.prevent="hide"
      ></button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
export type MessageType = "success" | "error" | "default";
import { PropType, ref } from "vue";
export default {
  props: {
    message: {
      type: String,
    },
    type: {
      type: String as PropType<MessageType>,
      default: "default",
    },
  },
  emits:['close-message'],
  setup(props, context) {
    const node = document.createElement("div");
    node.id = "message";
    document.body.appendChild(node);

    const isVisible = ref(true)
    const classObject = {
        'alert-success': props.type === 'success',
        'alert-danger': props.type === 'error',
        'alert-primary': props.type === 'default',
    }
    const hide = () => {
        isVisible.value = false
        context.emit('close-message', true)
    }
    return {
        hide, classObject, isVisible
    }
  },
};
</script>

<style scoped>
</style>