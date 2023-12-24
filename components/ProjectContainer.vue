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
    <div class="lg:w-2/5 mb-2">
      <h2>My Projects</h2>
      <p>
        Explore my diverse range of projects, where design and development
        converge. My portfolio showcases a blend of creativity and technical
        expertise, delivering beautiful and functional solutions.
      </p>
    </div>
    <div
      class="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 sm:flex sm:flex-col md:gap-20"
    >
      <Project
        v-for="project in myData.projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :tags="project.tags"
      />
    </div>
  </SectionWrapper>
</template>
