<template>
  <div class="w-1/4 flex flex-col justify-between">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="border h-64 my-4"></div>
    <!-- <img :src="image" /> -->
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    // image: String,
    // link: String,
  },
};
</script>
