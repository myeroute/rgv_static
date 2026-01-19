import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),

      // ❗ BẮT BUỘC PHẢI CÓ DÒNG NÀY
      heroImage: image().optional(),

      pubDate: z.date(),
      category: z.string().optional(),
    }),
});

export const collections = {
  blog,
};
