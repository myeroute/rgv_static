import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    heroImage: z.string().optional(),

    category: z.enum([
      "retro-games",
      "retro-style-indie-games",
      "pixel-art",
    ]),

    game: z.string().optional(),
    tag: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
