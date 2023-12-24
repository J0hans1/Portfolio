<template>
  <div v-bind:class="`mt-${topMargin}`">
    <div class="border h-64"></div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <div class="flex gap-2">
      <Tag v-for="tag in tags" :key="tag" :text="tag" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    topMargin: {
      type: String,
      default: "0",
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
