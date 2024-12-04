<script setup lang="ts">
const route = useRoute()
const { data: blog } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

// Page not found, set correct status code on SSR
if (!blog.value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description
})
</script>

<template>
  <div class="prose prose-sm sm:prose-base md:prose-lg prose-h1:no-underline prose-h2:!no-underline prose-h3:!no-underline prose-h3:underline-offset-4 prose-h3:hover:underline max-w-5xl mx-auto prose-muted dark:prose-invert prose-img:rounded-lg">
    <ContentRenderer v-if="blog" :value="blog" />
    <div v-else>Post not found</div>
  </div>
</template>