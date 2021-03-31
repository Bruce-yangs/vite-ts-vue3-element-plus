<template>
  <div class="row">
    <div v-for="column in columnListData" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            class="rounded-circle border border-light w-25 my-3"
            :src="column.avatar"
            :alt="column.title"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnListData = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          // column.avatar = require('../assets/logo.png')
          column.avatar =
            "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg";
        }
        return column;
      });
    });
    // columnList.value = columnListData;
    return { columnListData };
  },
});
</script>

<style></style>
