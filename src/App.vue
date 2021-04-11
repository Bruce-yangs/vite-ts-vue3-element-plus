<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Index/> -->
  <div id="app"><!--  class="container" -->
    <!-- <router-view /> -->
    <!-- <GlobalHeader :user="currentUser" /> -->
    <router-view></router-view>
    <!-- <ColumnList :list="list" /> -->
    <!-- <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="" class="form-label">邮箱地址</label>
        <validate-input
          type="text"
          placeholder="请输入邮箱地址"
          :rules="emailRules"
          v-model="emailVal"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">QQ</label>
        <validate-input
          type="text"
          placeholder="请输入QQ"
          :rules="QQRules"
          v-model="QQVal"
        ></validate-input> 
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="hello there"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </ValidateForm> -->
   <!--  <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item"> ©2021 杨坤</li>
          <li class="list-inline-item">读书</li>
          <li class="list-inline-item">学习</li>
          <li class="list-inline-item">音乐</li>
          <li class="list-inline-item">锻炼</li>
        </ul>
      </small>
    </footer> -->
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
import { defineComponent, ref } from "vue";
// import HelloWorld from './components/HelloWorld.vue'
// import Index from './views/Index.vue'
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
    const emailVal = ref("yang@qq.com");
    const QQVal = ref("469402333");
    const inputRef= ref<any>();
    const emailRules: RulesProp = [
      {
        type: "required",
        message: "电子邮箱地址不能为空",
      },
      {
        type: "email",
        message: "请输入正确的电子邮箱地址",
      },
    ];
    const QQRules: RulesProp = [
      {
        type: "required",
        message: "QQ不能为空",
      }
    ];
    const onFormSubmit = (result: boolean) => {
      console.log("123", result);
    };
    return { list: testData,  emailRules,QQVal, QQRules, onFormSubmit, emailVal, inputRef };
  },
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm,
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