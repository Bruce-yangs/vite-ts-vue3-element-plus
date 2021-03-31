<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Index/> -->
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList,{ColumnProps} from './components/ColumnList.vue'
// import ColumnList,{ColumnProps} from '@/components/ColumnList.vue'
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Index from './views/Index.vue'
const testData:ColumnProps[] =[
  {
    id:1,
    title:'test1的专栏',
    description:'这是test1专栏，有一段非常有意思的见解，可以更新下',
    avatar:'https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/612ecba34e3035f2f395dff412dcc8b3~300x300.image'
  },{
    id:2,
    title:'test2的专栏',
    description:'这是test2专栏，有一段非常有意思的见解，可以更新下',
    avatar:'https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/612ecba34e3035f2f395dff412dcc8b3~300x300.image'
  }
]
export default defineComponent({
  name: 'App',
  setup(){
    return {list:testData}
  },
  components: {
    ColumnList
  }
})
// export default defineComponent({
//   name: 'App',
//   components: {
//     HelloWorld,Index
//   }
// })
</script>

<style>
html,body,#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>