<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border w-100">
        <!-- <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border w-100"> -->
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts"  >
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import { testData, testPosts  } from "../data/testData";

export default defineComponent({
  name: "Column",
  setup: () => {
    const route = useRoute();
    // const datas = reactive({ count: 521 });
    const currentId = +route.params.id 
    const column = testData.find(c => c.id === currentId)
    const list = testPosts.find(post => post.columnId === currentId)
    console.log(column)
    return {  column,list };
  },
});
</script>

<style scoped>
</style>