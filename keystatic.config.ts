import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'DB Mainaly' },
    navigation: {
      Content: ['blog', 'services', 'resources'],
      Pages: ['home', 'about', 'contact'],
    },
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.string({ label: 'Excerpt', multiline: true }),
        author: fields.string({ label: 'Author' }),
        authorRole: fields.string({ label: 'Author Role' }),
        authorImage: fields.string({ label: 'Author Image URL' }),
        date: fields.date({ label: 'Date' }),
        category: fields.string({ label: 'Category' }),
        readTime: fields.string({ label: 'Read Time' }),
        image: fields.string({ label: 'Main Image URL' }),
        featured: fields.checkbox({ label: 'Featured Post' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.string({ label: 'Description', multiline: true }),
        icon: fields.string({ label: 'Material Symbol Icon Name' }),
        features: fields.array(fields.string({ label: 'Feature' }), {
          label: 'Features',
          itemLabel: props => props.value,
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Tax', value: 'Tax' },
            { label: 'Audit', value: 'Audit' },
            { label: 'Consulting', value: 'Consulting' },
            { label: 'Law', value: 'Law' },
          ],
          defaultValue: 'Consulting',
        }),
        featured: fields.checkbox({ label: 'Featured Service' }),
        order: fields.integer({ label: 'Order' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    resources: collection({
      label: 'Resources',
      slugField: 'title',
      path: 'src/content/resources/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.string({ label: 'Description', multiline: true }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'PDF', value: 'PDF' },
            { label: 'Excel', value: 'Excel' },
            { label: 'Package', value: 'Package' },
          ],
          defaultValue: 'PDF',
        }),
        category: fields.string({ label: 'Category' }),
        version: fields.string({ label: 'Version' }),
        downloadUrl: fields.string({ label: 'Download URL' }),
        icon: fields.string({ label: 'Material Symbol Icon Name' }),
        featured: fields.checkbox({ label: 'Featured Resource' }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.string({ label: 'Hero Title' }),
        heroSubtitle: fields.string({ label: 'Hero Subtitle', multiline: true }),
        heroButton1: fields.string({ label: 'Hero Button 1 Text' }),
        heroButton1Link: fields.string({ label: 'Hero Button 1 Link' }),
        heroButton2: fields.string({ label: 'Hero Button 2 Text' }),
        heroButton2Link: fields.string({ label: 'Hero Button 2 Link' }),
        complianceBadgeTitle: fields.string({ label: 'Compliance Badge Title' }),
        complianceBadgeText: fields.string({ label: 'Compliance Badge Text' }),
        impactTitle: fields.string({ label: 'Impact Title' }),
        impactSubtitle: fields.string({ label: 'Impact Subtitle', multiline: true }),
        ctaTitle: fields.string({ label: 'CTA Title' }),
        ctaSubtitle: fields.string({ label: 'CTA Subtitle', multiline: true }),
      }
    }),
    about: singleton({
      label: 'About Page',
      path: 'src/content/pages/about',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.string({ label: 'Hero Title' }),
        heroSubtitle: fields.string({ label: 'Hero Subtitle', multiline: true }),
        foundationTitle: fields.string({ label: 'Foundation Title' }),
        foundationSubtitle: fields.string({ label: 'Foundation Subtitle', multiline: true }),
        visionTitle: fields.string({ label: 'Vision Title' }),
        visionText: fields.string({ label: 'Vision Text', multiline: true }),
        missionTitle: fields.string({ label: 'Mission Title' }),
        missionText: fields.string({ label: 'Mission Text', multiline: true }),
        leaders: fields.array(
          fields.object({
            name: fields.string({ label: 'Name' }),
            role: fields.string({ label: 'Role' }),
            description: fields.string({ label: 'Description', multiline: true }),
            image: fields.string({ label: 'Image URL' }),
            quote: fields.string({ label: 'Quote' }),
          }),
          {
            label: 'Leaders',
            itemLabel: props => props.fields.name.value,
          }
        )
      }
    }),
    contact: singleton({
      label: 'Contact Page',
      path: 'src/content/pages/contact',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.string({ label: 'Hero Title' }),
        heroSubtitle: fields.string({ label: 'Hero Subtitle', multiline: true }),
        officeAddress: fields.string({ label: 'Office Address', multiline: true }),
        officePhone: fields.string({ label: 'Office Phone', multiline: true }),
        officeEmail: fields.string({ label: 'Office Email', multiline: true }),
        faqs: fields.array(
          fields.object({
            question: fields.string({ label: 'Question' }),
            answer: fields.string({ label: 'Answer', multiline: true }),
          }),
          {
            label: 'FAQs',
            itemLabel: props => props.fields.question.value,
          }
        )
      }
    })
  }
});