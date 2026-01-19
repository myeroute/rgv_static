import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load all Markdown / MDX files, including subfolders
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

      // Không khóa enum để tránh fail khi migrate / move file
      category: z.string().optional(),

      heroImage: image().optional(),
    }),
});

export const collections = { blog };
