export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Tax Planning for Small Businesses",
    excerpt: "Learn essential tax planning strategies that can help your small business save money and stay compliant.",
    content: `Tax planning is crucial for small businesses looking to optimize their financial performance. Here are key strategies to consider:

## 1. Keep Accurate Records
Maintaining detailed financial records throughout the year makes tax time much easier and helps identify deductions.

## 2. Maximize Deductions
Take advantage of all available business deductions, including home office expenses, vehicle usage, and business-related meals.

## 3. Consider Your Business Structure
The right business structure can significantly impact your tax liability. Consult with a professional to determine if an LLC, S-Corp, or other structure is best for you.

## 4. Plan for Quarterly Payments
Avoid penalties by making estimated quarterly tax payments if required.

## 5. Invest in Retirement Plans
Business retirement plans offer tax advantages while helping you save for the future.

Regular consultation with a qualified accountant can help ensure you're taking advantage of all available tax benefits while staying compliant with regulations.`,
    author: "DB Mainaly",
    date: "2024-01-15",
    category: "Tax Planning",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Importance of Regular Financial Audits",
    excerpt: "Discover why regular financial audits are essential for maintaining business health and investor confidence.",
    content: `Financial audits serve as a critical tool for businesses of all sizes. Here's why they matter:

## Building Trust
Regular audits demonstrate transparency and accountability to stakeholders, investors, and customers.

## Identifying Issues Early
Audits can uncover financial discrepancies, inefficiencies, or fraud before they become major problems.

## Improving Internal Controls
The audit process often reveals opportunities to strengthen internal financial controls and processes.

## Compliance Assurance
Audits ensure your business complies with relevant accounting standards and regulatory requirements.

## Strategic Decision Making
Accurate financial information from audits enables better strategic planning and decision making.

Whether required by law or conducted voluntarily, regular financial audits are an investment in your business's long-term success and credibility.`,
    author: "DB Mainaly",
    date: "2024-01-10",
    category: "Audit & Assurance",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "GST Compliance: Best Practices for 2024",
    excerpt: "Stay updated with the latest GST compliance requirements and best practices to avoid penalties.",
    content: `GST compliance can be complex, but following these best practices will help keep your business on track:

## 1. Timely Filing
Always file your GST returns on time to avoid late fees and interest charges.

## 2. Maintain Proper Documentation
Keep all invoices, receipts, and supporting documents organized and easily accessible.

## 3. Reconcile Regularly
Regular reconciliation of your accounts with GST returns helps identify and correct discrepancies quickly.

## 4. Stay Updated
GST regulations evolve frequently. Stay informed about changes that affect your business.

## 5. Use Technology
Leverage GST software solutions to automate compliance tasks and reduce errors.

## 6. Claim Input Tax Credit Properly
Ensure you're claiming all eligible input tax credits while maintaining proper documentation.

## 7. Seek Professional Guidance
Work with experienced accountants who understand the nuances of GST compliance.

By implementing these practices, businesses can minimize compliance risks and focus on growth.`,
    author: "DB Mainaly",
    date: "2024-01-05",
    category: "Compliance",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    readTime: "7 min read"
  }
];
