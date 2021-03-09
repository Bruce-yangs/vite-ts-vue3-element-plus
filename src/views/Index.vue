<template>
  <div>
    {{ datas.count }}
  </div>
</template>

<script lang="ts"  >
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: 'Index',
  setup:()=> {
    const datas = reactive({ count: 521 });
    return { datas };
  },
});
</script>

<style scoped>
</style>