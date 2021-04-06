<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
   <!--  <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
       @click="loadMorePage" v-if="!isLastPage"
    >
      加载更多
    </button> -->

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
/* import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import useLoadMore from '../hooks/useLoadMore' */
import ColumnList,{ColumnProps} from '../components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是test1专栏，有一段非常有意思的见解，可以更新下",
    avatar:
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是test2专栏，有一段非常有意思的见解，可以更新下",
    avatar:
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是test3专栏，有一段非常有意思的见解，可以更新下",
    avatar:
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是test4专栏，有一段非常有意思的见解，可以更新下",
    // avatar:
    // "https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/612ecba34e3035f2f395dff412dcc8b3~300x300.image",
  },
];
export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const list = testData;
    return {list}


    /* const store = useStore<GlobalDataProps>()
    const total = computed(() => store.state.columns.total)
    const currentPage = computed(() => store.state.columns.currentPage)
    onMounted(() => {
      store.dispatch('fetchColumns', { pageSize: 3 })
    })
    const list = computed(() => store.getters.getColumns)
    const { loadMorePage, isLastPage } = useLoadMore('fetchColumns', total, { pageSize: 3, currentPage: (currentPage.value ? currentPage.value + 1 : 2) })
    return {
      list,
      loadMorePage,
      isLastPage
    } */
  }
})
</script>
