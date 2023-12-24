<template>
  <div class="md:w-1/4 flex flex-col justify-between">
    <div>
      <h3>
        <a :href="link">{{ title }}</a>
      </h3>
      <p>{{ description }}</p>
    </div>
    <div class="border h-64 my-4"></div>
    <img :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    link: String,
  },
};
</script>
