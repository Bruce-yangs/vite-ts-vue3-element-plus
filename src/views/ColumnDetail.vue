<template>
  <div>
    {{ datas.count }} 
    <pre>{{route}}</pre>
  </div>
</template>

<script lang="ts"  >
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: 'Column',
  setup:()=> {
    const route = useRoute()
    const datas = reactive({ count: 521 });
    return { datas,route };
  },
});
</script>

<style scoped>
</style>