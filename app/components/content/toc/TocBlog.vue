<script setup lang="ts">
const route = useRoute()
const { data: blog } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

const links = computed(() => blog.value?.body?.toc?.links || [])
</script>

<template>
  <div class="ltablet:col-span-4 lg:col-span-4 hidden ltablet:block lg:block">
    <div class="h-full border-s border-cream-300 dark:border-muted-800">
      <div class="sticky top-40 h-96">
        <div class="ps-12 py-3 pe-4 rounded-md min-w-[200px]">
          <BaseHeading
            as="h2" size="sm" weight="bold"
            class="mb-3 border-b border-muted-200 dark:border-muted-800 pb-2 mb-4"
          >
            On this page
          </BaseHeading>
          <NuxtLink
            v-for="link in links" :key="link.id" :to="`#${link.id}`"
            class="block text-xs mb-3 hover:underline underline-offset-4 hover:text-primary-500 dark:hover:text-primary-500 font-sans text-muted-600 dark:text-muted-400"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>