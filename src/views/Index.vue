<template>
  <el-container style="border: 1px solid #eee"
    ><!-- height: 500px; -->

    <el-container style="height: 100%; overflow-y: auto">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>王小虎 {{datas.count}}</span>
      </el-header>

      <div class="container">
       <div class="nav" >
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template #title><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template #title><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template #title>选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template #title><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template #title>选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
       </div>

        <div class="wrapper">

        
        <el-main >
          <el-table
            :data="tableData"
           
          >
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-main>
        </div>
      </div>
    </el-container>
  </el-container>
</template>


<script lang="ts" setup>
import { defineComponent, reactive } from "vue";
const item = {
  date: "2016-05-02",
  name: "王小虎",
  address: "上海市普陀区金沙江路 1518 弄",
};
//  export default defineComponent({
//  name: 'Index',
//  setup:()=> {
const datas = reactive<object>({ count: 521 });
const tableData = Array(20).fill(item);
//  return { datas,tableData };
//  },
//  });
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.container {
  display: flex;
}
.wrapper {
  height: calc(100% -60px);
  width: 100%;
  overflow-y: auto;
  padding-bottom: 90px;
}
.nav{
  flex: 0 0 200px;
  height: 100vh; 
}
.nav >>> .el-aside {
  height: inherit;
}
</style>