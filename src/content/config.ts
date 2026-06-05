import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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
  type: 'content',
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
