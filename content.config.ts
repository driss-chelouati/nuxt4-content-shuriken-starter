import { defineCollection, z } from '@nuxt/content'

export const collections = {
  blog: defineCollection({
    source: 'blog/*.md',
    type: 'page',
    // Define custom schema for blog collection
    schema: z.object({
      tags: z.array(z.string()),
      image: z.string(),
      date: z.date()
    })
  })
}