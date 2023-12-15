<template>
  <div>
    <h3>{{ value }}</h3>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    title: String,
  },
};
</script>
