<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
import func from "~/../vue-temp/vue-editor-bridge";
/* interface RuleProp {
  type: "required" | "email";
  message: string;
} */
type ValidateFunc = () => boolean
// export type RulesProp = RuleProp[];
export const emitter = mitt();
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[]  = []
    const submitForm = () => {
      const resulet = funcArr.map(func => func()).every(func =>func)
      context.emit("form-submit", resulet);
    };
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    emitter.on("form-item-created", callback)
    onUnmounted(() => {
      emitter.off("form-item-created", callback)
      funcArr =  []
    });
    return { submitForm };
  },

  /*  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  inheritAttrs: false,
  setup(props,context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      
    };
    return {
     
    };
  }, */
});
</script>

<style>
</style>