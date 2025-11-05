// Minimal Sanity client helper used by posts.tsx and [slug].tsx

import { createClient } from '@sanity/client';

// Toggle CMS usage based on presence of env vars
export const cmsEnabled = Boolean(
  import.meta.env.VITE_SANITY_PROJECT_ID &&
  import.meta.env.VITE_SANITY_DATASET &&
  import.meta.env.VITE_SANITY_API_VERSION
);

// Only create a client when CMS is enabled
export const client = cmsEnabled
  ? createClient({
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID!,
      dataset: import.meta.env.VITE_SANITY_DATASET!,
      apiVersion: import.meta.env.VITE_SANITY_API_VERSION!,
      useCdn: true,
      perspective: 'published',
    })
  : (null as any);

// Safe fetch wrapper used in the pages
export async function sfetch<T = unknown>(query: string, params: Record<string, unknown> = {}) {
  if (!cmsEnabled) return [] as unknown as T;
  return client.fetch<T>(query, params);
}
