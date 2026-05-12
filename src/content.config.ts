import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const changes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/changes" }),
    schema: z.object({
        date: z.coerce.date(),
        summary: z.string(),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        date: z.coerce.date(),
    }),
});

export const collections = { changes, blog };
