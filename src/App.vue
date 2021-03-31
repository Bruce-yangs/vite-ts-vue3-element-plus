<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Index/> -->
  <div id="app" class="container">
    <!-- <router-view /> -->
    <GlobalHeader :user="currentUser"/>
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue'
// import Index from './views/Index.vue'
const currentUser: UserProps = { isLogin: true,name:'viki' };
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
  name: "App",
  setup() {
    return { list: testData ,currentUser};
  },
  components: {
    ColumnList,
    GlobalHeader,
  },
});
// export default defineComponent({
//   name: 'App',
//   components: {
//     HelloWorld,Index
//   }
// })
</script>

<style>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
</style>