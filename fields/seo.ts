import type { GroupField } from 'payload'

export const seoFields: GroupField = {
  name: 'seo',
  type: 'group',
  label: 'SEO & Metadata',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Meta Title',
      admin: {
        description: 'Recommended: 50-60 characters. Appears in search results and browser tabs.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Meta Description',
      admin: {
        description: 'Recommended: 150-160 characters. A brief summary of the page.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Meta Image (Open Graph)',
      admin: {
        description: 'Recommended dimensions: 1200x630px. Preview image when shared on social platforms.',
      },
    },
    {
      name: 'noindex',
      type: 'checkbox',
      label: 'Prevent Search Indexing (noindex)',
      defaultValue: false,
      admin: {
        description: 'If checked, search engines will be instructed not to list this page.',
      },
    },
  ],
}
