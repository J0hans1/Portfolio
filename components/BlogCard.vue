<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-4xl font-bold">Blog</h1>
    <div class="flex flex-col gap-10">
      <BlogCard
        v-for="post in posts"
        :key="post.slug"
        :title="post.title"
        :description="post.description"
        :slug="post.slug"
      />
    </div>
  </div>
</template>
