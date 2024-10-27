import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: z.string().refine(image),
      url: z.string().url(),
      technologies: z.string().min(1),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  portfolio,
};
