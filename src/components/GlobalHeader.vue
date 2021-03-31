<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a class="navbar-brand  mx-3" href="#">Navbar w/ text</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0 mx-3">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0  mx-3">
       <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">你好 {{user.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: string;
}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  setup(props) {
    // const columnListData = computed(() => {
    //   return props.list.map((column) => {
    //     if (!column.avatar) {
    //       // column.avatar = require('../assets/logo.png')
    //       column.avatar =
    //         "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg";
    //     }
    //     return column;
    //   });
    // });
    // // columnList.value = columnListData;
    // return { props };
  },
});
</script>

<style></style>
