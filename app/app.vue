<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate: (title) => title ? `${title} | Project Name` : 'Project Name',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})

useSeoMeta({
  ogSiteName: 'Project Name',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.twitter,
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--color-primary-500)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>