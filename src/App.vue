<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Index/> -->
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Index from './views/Index.vue'

// export default defineComponent({
//   name: 'App',
//   components: {
//     HelloWorld,Index
//   }
// })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
</style>