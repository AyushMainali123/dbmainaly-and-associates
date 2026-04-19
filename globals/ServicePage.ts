import type { GlobalConfig } from 'payload'

export const ServicePage: GlobalConfig = {
  slug: 'service-page',
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
                  defaultValue: 'OUR EXPERTISE',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Precision in Every Ledger',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Navigating the complexities of Nepalese financial regulations with institutional rigor and deep-sector expertise.',
                },
              ],
            },
          ],
        },
        {
          label: 'Services Grid',
          fields: [
            {
              name: 'servicesGrid',
              type: 'group',
              fields: [
                {
                  name: 'services',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                    },
                    {
                      name: 'icon',
                      type: 'select',
                      options: [
                        { label: 'Account Balance', value: 'MdOutlineAccountBalance' },
                        { label: 'Gavel', value: 'MdOutlineGavel' },
                        { label: 'Query Stats', value: 'MdOutlineQueryStats' },
                        { label: 'Payments', value: 'MdOutlinePayments' },
                      ],
                    },
                    {
                      name: 'features',
                      type: 'array',
                      fields: [
                        {
                          name: 'feature',
                          type: 'text',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Sector Specialization',
          fields: [
            {
              name: 'sectorSpecialization',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'SECTOR SPECIALIZATION',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Industry-Specific Solutions',
                },
                {
                  name: 'sectors',
                  type: 'array',
                  minRows: 3,
                  maxRows: 3,
                  admin: {
                    description: 'This section requires exactly 3 sectors to maintain the grid layout.',
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'ICAN FAQ Section',
          fields: [
            {
              name: 'icanFaq',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Nepal ICAN Compliance FAQ',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Essential information regarding the Institute of Chartered Accountants of Nepal standards.',
                },
                {
                  name: 'faqs',
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
          label: 'CTA Section',
          fields: [
            {
              name: 'cta',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Ready to align your financial strategy?',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Consult with our lead partners today and ensure your enterprise meets the highest standards of fiscal integrity.',
                },
                {
                  name: 'primaryButton',
                  type: 'group',
                  fields: [
                    { name: 'text', type: 'text', defaultValue: 'Schedule a Meeting' },
                    { name: 'link', type: 'text', defaultValue: '/contact' },
                  ],
                },
                {
                  name: 'secondaryButton',
                  type: 'group',
                  fields: [
                    { name: 'text', type: 'text', defaultValue: 'View Firm Profile' },
                    { name: 'link', type: 'text', defaultValue: '/about' },
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