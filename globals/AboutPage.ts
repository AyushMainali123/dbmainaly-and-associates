import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
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
                  defaultValue: 'ESTABLISHED AUTHORITY',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'The Legacy of Financial Stewardship',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Guiding enterprises through the complexities of global finance with unwavering precision, local expertise, and a commitment to institutional excellence since our founding.',
                },
                {
                  name: 'highlightText',
                  type: 'text',
                  defaultValue: 'A MEMBER OF THE INSTITUTE OF CHARTERED ACCOUNTANTS OF NEPAL',
                },
                {
                  name: 'backgroundImage',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
        {
          label: 'Foundation Section',
          fields: [
            {
              name: 'foundation',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Foundation of Purpose',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Architecture of a Modern Advisory',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Our firm is built upon three pillars that define every audit, advisory, and corporate strategy we execute. We do not just process numbers; we engineer trust.',
                },
                {
                  name: 'vision',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text', defaultValue: 'Our Vision' },
                    {
                      name: 'description',
                      type: 'textarea',
                      defaultValue:
                        'To be the most trusted financial vanguard in the region, bridging Nepalese enterprise with global standards.',
                    },
                  ],
                },
                {
                  name: 'mission',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text', defaultValue: 'Our Mission' },
                    {
                      name: 'description',
                      type: 'textarea',
                      defaultValue:
                        'Delivering uncompromising integrity and analytical depth to empower sustainable corporate growth.',
                    },
                  ],
                },
                {
                  name: 'pillars',
                  type: 'array',
                  minRows: 2,
                  maxRows: 2,
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea', required: true },
                    {
                      name: 'icon',
                      type: 'select',
                      options: [
                        { label: 'Gavel', value: 'MdOutlineGavel' },
                        {
                          label: 'Precision Manufacturing',
                          value: 'MdOutlinePrecisionManufacturing',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'stewardship',
                  type: 'group',
                  fields: [
                    { name: 'title', type: 'text', defaultValue: 'Client Stewardship' },
                    {
                      name: 'description',
                      type: 'textarea',
                      defaultValue:
                        'Our relationships are viewed as decades-long partnerships, prioritizing the long-term stability of the institutions we serve over short-term metrics.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Leadership Section',
          fields: [
            {
              name: 'leadership',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Executive Leadership',
                },
                {
                  name: 'titleLine1',
                  type: 'text',
                  defaultValue: 'Managed by Experts,',
                },
                {
                  name: 'titleLine2',
                  type: 'text',
                  defaultValue: 'Driven by Excellence.',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Our partners bring over 60 years of combined experience across auditing, taxation, and law.',
                },
                {
                  name: 'leaders',
                  type: 'array',
                  fields: [
                    { name: 'name', type: 'text', required: true },
                    { name: 'role', type: 'text', required: true },
                    { name: 'description', type: 'textarea', required: true },
                    { name: 'quote', type: 'textarea', required: true },
                    { name: 'image', type: 'upload', relationTo: 'media', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Accreditations Section',
          fields: [
            {
              name: 'accreditations',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Institutional Recognition',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    {
                      name: 'iconType',
                      type: 'select',
                      options: [
                        { label: 'Text', value: 'text' },
                        { label: 'Icon', value: 'icon' },
                      ],
                      required: true,
                    },
                    { name: 'iconText', type: 'text' },
                    {
                      name: 'icon',
                      type: 'select',
                      options: [
                        { label: 'Verified User', value: 'MdOutlineVerifiedUser' },
                        { label: 'Language', value: 'MdOutlineLanguage' },
                      ],
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