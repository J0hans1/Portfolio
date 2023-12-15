<template>
  <div class="w-1/4">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
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
