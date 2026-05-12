import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Get in Touch',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: "Let's secure your financial future together",
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    "Expert financial advisory and corporate legal solutions tailored for Nepal's evolving economic landscape.",
                },
              ],
            },
          ],
        },
        {
          label: 'Inquiry Form',
          fields: [
            {
              name: 'inquiryForm',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Send us a Message',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Briefly outline your requirements and our partners will contact you within 24 business hours.',
                },
                {
                  name: 'fullNameLabel',
                  type: 'text',
                  defaultValue: 'Full Name',
                },
                {
                  name: 'fullNamePlaceholder',
                  type: 'text',
                  defaultValue: 'John Doe',
                },
                {
                  name: 'emailLabel',
                  type: 'text',
                  defaultValue: 'Email Address',
                },
                {
                  name: 'emailPlaceholder',
                  type: 'text',
                  defaultValue: 'john@company.com',
                },
                {
                  name: 'serviceLabel',
                  type: 'text',
                  defaultValue: 'Service Interest',
                },
                {
                  name: 'serviceOptions',
                  type: 'array',
                  fields: [{ name: 'label', type: 'text', required: true }],
                  defaultValue: [
                    { label: 'Tax Advisory' },
                    { label: 'Audit & Assurance' },
                    { label: 'Corporate Law' },
                    { label: 'Financial Consulting' },
                  ],
                },
                {
                  name: 'phoneLabel',
                  type: 'text',
                  defaultValue: 'Phone Number',
                },
                {
                  name: 'phonePlaceholder',
                  type: 'text',
                  defaultValue: '+977 1-XXXXXXX',
                },
                {
                  name: 'messageLabel',
                  type: 'text',
                  defaultValue: 'How can we help?',
                },
                {
                  name: 'messagePlaceholder',
                  type: 'text',
                  defaultValue: 'Describe your consultation needs...',
                },
                {
                  name: 'submitButtonText',
                  type: 'text',
                  defaultValue: 'Submit Inquiry',
                },
              ],
            },
          ],
        },
        {
          label: 'Office & Map',
          fields: [
            {
              name: 'office',
              type: 'group',
              fields: [
                {
                  name: 'headquartersTitle',
                  type: 'text',
                  defaultValue: 'Office Headquarters',
                },
                {
                  name: 'addressBlockTitle',
                  type: 'text',
                  defaultValue: 'Physical Address',
                },
                {
                  name: 'addressLines',
                  type: 'textarea',
                  defaultValue:
                    'DB Mainaly & Associates Building\nBansidhar Marg, Bishalnagar\nKathmandu, Nepal (100m South of the Embassy of Finland)',
                },
                {
                  name: 'phoneBlockTitle',
                  type: 'text',
                  defaultValue: 'Phone & Fax',
                },
                {
                  name: 'phoneLines',
                  type: 'textarea',
                  defaultValue: '+977 1 4483012\n+977 9851000000',
                },
                {
                  name: 'emailBlockTitle',
                  type: 'text',
                  defaultValue: 'Electronic Mail',
                },
                {
                  name: 'emailLines',
                  type: 'textarea',
                  defaultValue: 'info@dbmainaly.com\nsupport@dbmainaly.com',
                },
              ],
            },
            {
              name: 'mapCard',
              type: 'group',
              label: 'Map marker',
              admin: {
                description:
                  'Pin position for the contact page map. Requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (Maps Embed API).',
              },
              fields: [
                {
                  name: 'latitude',
                  type: 'number',
                  required: true,
                  admin: {
                    description: 'WGS84 latitude.',
                  },
                  defaultValue: 27.724097,
                },
                {
                  name: 'longitude',
                  type: 'number',
                  required: true,
                  admin: {
                    description: 'WGS84 longitude.',
                  },
                  defaultValue: 85.337111,
                },
              ],
            },
          ],
        },
        {
          label: 'FAQ Section',
          fields: [
            {
              name: 'faq',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Frequently Asked Questions',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'question', type: 'text', required: true },
                    { name: 'answer', type: 'textarea', required: true },
                  ],
                  defaultValue: [
                    {
                      question: 'What documents are required for initial tax consultation?',
                      answer:
                        'Typically, we require your previous three years of financial statements, current PAN/VAT registration certificates, and details of any outstanding tax liabilities or notices from the Inland Revenue Department.',
                    },
                    {
                      question: 'Do you offer virtual consulting for international clients?',
                      answer:
                        'Yes, we provide secure digital consultation via Microsoft Teams and Zoom for international investors looking to navigate the Nepalese corporate landscape.',
                    },
                    {
                      question: 'How do your fees structure work?',
                      answer:
                        'Our fees are structured based on the complexity and volume of work. We offer both project-based fixed pricing for audits and hourly rates for advisory services.',
                    },
                    {
                      question: 'Are you a member of any international accounting networks?',
                      answer:
                        'We are a proud member of ICAN (The Institute of Chartered Accountants of Nepal) and maintain strong affiliations with global financial networks to ensure international compliance standards.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
