import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
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
                  defaultValue: 'Member of ICAN Nepal',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Professional Financial Excellence.',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue:
                    'Navigating the complexities of Nepalese corporate law and global financial standards with architectural precision and unwavering integrity.',
                },
                {
                  name: 'primaryButton',
                  type: 'group',
                  fields: [
                    { name: 'text', type: 'text', defaultValue: 'Explore Advisory' },
                    { name: 'href', type: 'text', defaultValue: '/services' },
                  ],
                },
                {
                  name: 'secondaryButton',
                  type: 'group',
                  fields: [
                    { name: 'text', type: 'text', defaultValue: 'Our Specializations' },
                    { name: 'href', type: 'text', defaultValue: '/about' },
                  ],
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
          label: 'Compliance Badge Section',
          fields: [
            {
              name: 'complianceBadge',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Regulatory Standard',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Institute of Chartered Accountants of Nepal (ICAN) Licensed',
                },
                {
                  name: 'badges',
                  type: 'array',
                  fields: [
                    { name: 'text', type: 'text', required: true }
                  ],
                  defaultValue: [
                    { text: 'FIN-COMPLY' },
                    { text: 'TAX-NEPAL' },
                    { text: 'AUDIT-CORP' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Services Section',
          fields: [
            {
              name: 'services',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Core Competencies',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Strategic Financial Services',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: 'A multidisciplinary approach to fiscal health, combining local expertise with international standards.',
                },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      options: [
                        { label: 'Account Balance', value: 'MdOutlineAccountBalance' },
                        { label: 'Gavel', value: 'MdOutlineGavel' },
                        { label: 'Query Stats', value: 'MdOutlineQueryStats' },
                        { label: 'Payments', value: 'MdOutlinePayments' },
                      ],
                      required: true,
                    },
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea', required: true },
                    {
                      name: 'points',
                      type: 'array',
                      fields: [
                        { name: 'text', type: 'text', required: true }
                      ],
                    },
                    { name: 'buttonText', type: 'text', required: true },
                    { name: 'buttonLink', type: 'text', required: true },
                  ],
                  defaultValue: [
                    {
                      icon: 'MdOutlineAccountBalance',
                      title: 'Audit & Assurance',
                      description: 'Independent verification services that build investor trust and ensure regulatory compliance through meticulous analysis.',
                      points: [
                        { text: 'Statutory Audit' },
                        { text: 'Internal Control Review' },
                        { text: 'Forensic Auditing' },
                        { text: 'Risk Management' },
                      ],
                      buttonText: 'View Practice Area',
                      buttonLink: '/services',
                    },
                    {
                      icon: 'MdOutlineGavel',
                      title: 'Corporate Law',
                      description: 'Expert guidance on company formation, compliance filings, and complex legal structuring.',
                      points: [],
                      buttonText: 'Consult Expert',
                      buttonLink: '/services',
                    },
                    {
                      icon: 'MdOutlineQueryStats',
                      title: 'Management Consulting',
                      description: 'Transformational strategies to scale your operations and improve organizational efficiency.',
                      points: [],
                      buttonText: 'View Practice Area',
                      buttonLink: '/services',
                    },
                    {
                      icon: 'MdOutlinePayments',
                      title: 'Tax Advisory',
                      description: 'Optimizing tax strategies within the complex landscape of Nepalese VAT, Income Tax, and Customs duties.',
                      points: [],
                      buttonText: 'View Practice Area',
                      buttonLink: '/services',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Our Impact Section',
          fields: [
            {
              name: 'ourImpact',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Our Trajectory',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Decades of Fiscal Authority.',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: 'Since our inception, we have been the standard-bearer for financial integrity in Nepal, guiding organizations from startup to public listing.',
                },
                {
                  name: 'stats',
                  type: 'array',
                  fields: [
                    { name: 'value', type: 'text', required: true },
                    { name: 'label', type: 'text', required: true },
                  ],
                  defaultValue: [
                    { value: '15+', label: 'Years Excellence' },
                    { value: '500+', label: 'Active Clients' },
                    { value: '1.2B', label: 'Capital Managed' },
                    { value: '100%', label: 'Compliance Rate' },
                  ]
                },
                {
                  name: 'testimonial',
                  type: 'group',
                  fields: [
                    { name: 'quote', type: 'textarea', defaultValue: '"DB Mainaly & Associates transformed our corporate governance structure, enabling our transition to a public entity."' },
                    { name: 'authorInitials', type: 'text', defaultValue: 'SC' },
                    { name: 'authorName', type: 'text', defaultValue: 'Sunil Chaudhary' },
                    { name: 'authorRole', type: 'text', defaultValue: 'CEO, Apex Infrastructure' },
                  ],
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
        {
          label: 'Latest Insights Section',
          fields: [
            {
              name: 'latestInsights',
              type: 'group',
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  defaultValue: 'Financial Intelligence',
                },
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Latest Insights',
                },
                {
                  name: 'linkText',
                  type: 'text',
                  defaultValue: 'View All Publications',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  defaultValue: '/blog',
                },
                {
                  name: 'selectedArticles',
                  type: 'relationship',
                  relationTo: 'blogs',
                  hasMany: true,
                  maxRows: 3,
                  admin: {
                    description: 'Select up to 3 articles to display in this section. If left empty, the most recent articles will be shown.',
                  }
                },
              ],
            },
          ],
        },
        {
          label: 'Final CTA Section',
          fields: [
            {
              name: 'finalCta',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  defaultValue: 'Ready to secure your financial future?',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  defaultValue: 'Schedule a confidential consultation with our principal partners to discuss your corporate advisory or audit requirements.',
                },
                {
                  name: 'primaryButton',
                  type: 'group',
                  fields: [
                    { name: 'text', type: 'text', defaultValue: 'Contact Principal Partner' },
                    { name: 'href', type: 'text', defaultValue: '/contact' },
                  ],
                },
                {
                  name: 'secondaryButton',
                  type: 'group',
                  fields: [
                    { name: 'text', type: 'text', defaultValue: 'Request Firm Profile' },
                    { name: 'href', type: 'text', defaultValue: '/about' },
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