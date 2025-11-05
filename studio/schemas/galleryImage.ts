import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: r => r.required()
    }),
    defineField({ name: 'caption', type: 'string' }),
    defineField({ name: 'town', title: 'Town/Area', type: 'string' }),
    defineField({ name: 'takenAt', title: 'Taken on', type: 'date' })
  ]
})
