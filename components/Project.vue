<template>
  <div>
    <div class="border h-64"></div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <div class="flex gap-2">
      <Tag text="Design" />
      <Tag text="Fullstack" />
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
  },
};
</script>
