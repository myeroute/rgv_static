import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load Markdown and MDX files in src/content/blog/
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      category: z
        .enum(['retro-games', 'retro-style-indie-games'])
        .optional(),

      heroImage: image().optional(),
    }),
});

export const collections = { blog };
