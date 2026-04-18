import type { GlobalConfig } from 'payload'

export const ResourcePage: GlobalConfig = {
  slug: 'resource-page',
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
                  defaultValue: 'COMPLIANCE HUB',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Resources & Templates',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: "Empowering our clients with essential financial tools, regulatory templates, and strategic documents for Nepal's fiscal landscape.",
                },
              ],
            },
          ],
        },
        {
          label: 'Statutory Forms',
          fields: [
            {
              name: 'statutoryForms',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Statutory Forms & Templates',
                },
                {
                  name: 'primaryForm',
                  type: 'group',
                  fields: [
                    {
                      name: 'version',
                      type: 'text',
                      defaultValue: 'v2.4 (2024)',
                    },
                    {
                      name: 'title',
                      type: 'text',
                      defaultValue: 'VAT Registration Package',
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      defaultValue: 'The complete guide and application package for Value Added Tax registration under the Inland Revenue Department (IRD) of Nepal.',
                    },
                    {
                      name: 'buttonText',
                      type: 'text',
                      defaultValue: 'Download Complete Package',
                    },
                    {
                      name: 'file',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
                {
                  name: 'secondaryForm',
                  type: 'group',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      defaultValue: 'Audit Checklists',
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      defaultValue: 'Comprehensive internal audit checklists for manufacturing and service-based entities to ensure financial health.',
                    },
                    {
                      name: 'buttonText',
                      type: 'text',
                      defaultValue: 'Get Templates',
                    },
                    {
                      name: 'link',
                      type: 'text',
                      defaultValue: '#',
                    },
                  ],
                },
                {
                  name: 'additionalDownloads',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'file',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'FAQs Section',
          fields: [
            {
              name: 'faqsSection',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Regulatory FAQs',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: "Expert answers to common queries regarding Nepal's taxation and accounting standards.",
                },
                {
                  name: 'questions',
                  type: 'array',
                  fields: [
                    {
                      name: 'question',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'answer',
                      type: 'textarea',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Newsletter Section',
          fields: [
            {
              name: 'newsletter',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Regulatory Alerts',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: 'Stay informed about changes in the Finance Act, circulars from the NRB, and new IFRS/NFRS updates delivered directly to your inbox.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
