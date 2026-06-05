import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.date(),
    lang:        z.enum(['ja', 'en', 'zh']).default('ja'),
    tags:        z.array(z.string()).optional(),
    heroImage:   z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.date(),
    lang:        z.enum(['ja', 'en', 'zh']).default('ja'),
    location:    z.string(),
    online:      z.boolean().default(false),
    url:         z.string().url().optional(),
    tags:        z.array(z.string()).optional(),
  }),
});

export const collections = { blog, events };
