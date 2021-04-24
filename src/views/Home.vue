<template>
  <div class="home-page container">
    <!-- <Message type="error" :message="error.message"></Message>  -->

    <GlobalHeader :user="currentUser" />
    <!-- <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list> -->

    <!-- <Loader background="rgba(0,0,0,.8)" text="拼命加载ing..." v-if="$store.state.loading"></Loader>   -->

    <router-view></router-view>
    <!--  <button
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25"
       @click="loadMorePage" v-if="!isLastPage"
    >
      加载更多
    </button> -->
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">©2021 杨坤</li>
          <li class="list-inline-item">读书</li>
          <li class="list-inline-item">学习</li>
          <li class="list-inline-item">音乐</li>
          <li class="list-inline-item">锻炼</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
/* import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
import useLoadMore from '../hooks/useLoadMore' */
import ColumnList from "../components/ColumnList.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader, { UserProps } from "../components/GlobalHeader.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store";
import Loader from '../components/Loader.vue'
// import Message from '../components/Message.vue'
/* 自定义loading */

/* import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue"; */

const currentUser: UserProps = { isLogin: true, name: "viki" };

export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
    GlobalHeader,Loader/* , Message */
  },
  setup() {
    // const list = testData;
    const store = useStore<GlobalDataProps>()
    console.log(store.state.columns)
    const list = computed(() => store.state.columns)
    return { list, currentUser };

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
  },
});
</script>
