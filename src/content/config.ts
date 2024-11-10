import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      image: z.string().refine(image),
      technologies: z.string().min(1),
      url: z.string().url().nullable(),
      github: z.string().nullable(),
      slug: z.string().optional(),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  portfolio,
};
