<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-bind="$attrs"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    />
    <span class="invalid-feedback" v-if="inputRef.error">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from "vue";
import {emitter} from './ValidateForm.vue'

const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  props: {
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
      if (props.rules) {
        //every 当全部为true 才会返回true
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;

            default:
              break;
          }
          return passed;
        });
        console.log(allPassed);
        inputRef.error = !allPassed;
        return allPassed
      }
        return true
    };
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    return {
      validateInput,
      inputRef,updateValue
    };
  },
});
</script>

<style>
</style>