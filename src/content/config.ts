import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: image().optional(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
		author: z.string().optional(),
		license: z.string().optional(),
		encrypted: z.boolean().optional(),
	}),
});

const comments = defineCollection({
	schema: z.object({
		id: z.number(),
		name: z.string(),
		contact: z.string().optional(),
		url: z.string().optional(),
		date: z.coerce.date(),
		replyTo: z.coerce.number().optional(),
	})
});

export const collections = { blog, comments };
