<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center"  v-if="column.length>0"><!-- -->
      <div class="col-3 text-center">
        <!-- <img :src="column.avatar.url" :alt="column.title" class="rounded-circle border w-100"> -->
       <!--  {{currentId}}
        {{currentId-1}}
        {{list[currentId-1].avatar}} -->
        <img :src="column[currentId-1].avatar" :alt="column.title" class="rounded-circle border w-100">
        <!-- <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border w-100"> -->
      </div>
      <div class="col-9">
        <h4>{{column[currentId-1].title}}</h4>
        <p class="text-muted">{{column[currentId-1].description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts"  >
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { testData, testPosts  } from "../data/testData";
import PostList from "../components/PostList.vue";
import store from "../store";

export default defineComponent({
  name: "Column",
  components: {PostList},
  setup: (props) => {
    console.log(props)
    const route = useRoute();
    // const datas = reactive({ count: 521 });
    const currentId: any = route.params.id 
    /* onMounted(() => {
      store.dispatch('fetchColumn', currentId)
      store.dispatch('fetchPost', currentId)
    })   */
    // const column = computed(() => store.getters.getColumnById(currentId))
    // const list = computed(() => store.getters.getPostsByCId(currentId))
    const column = testData
    const list = testPosts
    console.log(list)
    console.log(column)
    return {  column,list,currentId };
  },
});
</script>

<style scoped>
</style>