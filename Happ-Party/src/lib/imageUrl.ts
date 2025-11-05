// URL builder for Sanity images

import imageUrlBuilder from '@sanity/image-url';
import { client, cmsEnabled } from './sanity';

const builder = cmsEnabled ? imageUrlBuilder(client) : null as any;

export function urlFor(source: any) {
  if (!builder) {
    // Fallback: return empty object with url() to avoid runtime crashes
    return { url: () => '' };
  }
  return builder.image(source);
}

