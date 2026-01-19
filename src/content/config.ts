import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),

    // metadata dùng cho sidebar / category
    game: z.string().optional(),
    tag: z.string().optional(),

    // KHÔNG khai báo slug ở đây
    // slug sẽ được Astro tự sinh từ filename
  }),
});

export const collections = {
  blog,
};
