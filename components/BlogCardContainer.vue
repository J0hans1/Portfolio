<script lang="ts">
import { data } from "~/data"; // adjust the path to match the location of your data.ts file

export default {
  data(): { myData: typeof data } {
    return {
      myData: data, // now you can use myData in your component
    };
  },
};
</script>

<template>
  <SectionWrapper>
    <hr />
    <div class="md:flex md:gap-8 lg:gap-32 justify-center">
      <BlogCard
        v-for="blogPost in myData.blog"
        :key="blogPost.id"
        :title="blogPost.title"
        :description="blogPost.description"
        :link="blogPost.url"
        :image="blogPost.image"
      />
    </div>
    <hr />
  </SectionWrapper>
</template>
