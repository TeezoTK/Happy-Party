// URL builder for Sanity images
import { client, cmsEnabled } from './sanity';
// Happ-Party/src/lib/imageUrl.ts
import imageUrlBuilder from '@sanity/image-url'

// reuse your actual values
const projectId = 'u36hm72k'
const dataset = 'production'

// builder accepts a config-like object with projectId/dataset
const builder = imageUrlBuilder({ projectId, dataset })

export function urlFor(src: any) {
  return builder.image(src)
}
