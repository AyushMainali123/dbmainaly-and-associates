const taxImage = "/images/service-tax.jpg";
const auditImage = "/images/service-audit.jpg";
const advisoryImage = "/images/service-advisory.jpg";

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Tax Planning & Compliance",
    shortDescription: "Strategic tax solutions to minimize liability and ensure full compliance with regulations.",
    fullDescription: "Our comprehensive tax services help businesses and individuals navigate complex tax regulations while optimizing their tax position. We provide year-round support to ensure compliance and identify opportunities for tax savings.",
    features: [
      "Income Tax Return Filing",
      "Tax Planning & Advisory",
      "GST Registration & Filing",
      "TDS Compliance",
      "International Taxation",
      "Tax Dispute Resolution"
    ],
    icon: "Calculator",
    image: taxImage
  },
  {
    id: 2,
    title: "Audit & Assurance",
    shortDescription: "Independent financial audits to ensure accuracy and build stakeholder confidence.",
    fullDescription: "Our audit services provide independent verification of your financial statements, helping you maintain credibility with stakeholders, comply with regulations, and identify areas for improvement in your financial processes.",
    features: [
      "Statutory Audit",
      "Internal Audit",
      "Stock Audit",
      "Management Audit",
      "Concurrent Audit",
      "Forensic Audit"
    ],
    icon: "ClipboardCheck",
    image: auditImage
  },
  {
    id: 3,
    title: "Business Advisory",
    shortDescription: "Expert guidance to help your business grow and thrive in a competitive market.",
    fullDescription: "We provide strategic business advisory services to help you make informed decisions, improve operational efficiency, and achieve your business goals. Our experts work closely with you to understand your unique challenges and opportunities.",
    features: [
      "Business Planning & Strategy",
      "Financial Restructuring",
      "Mergers & Acquisitions",
      "Risk Management",
      "Working Capital Management",
      "Corporate Compliance"
    ],
    icon: "TrendingUp",
    image: advisoryImage
  },
  {
    id: 4,
    title: "Accounting & Bookkeeping",
    shortDescription: "Accurate financial record-keeping to support informed business decisions.",
    fullDescription: "Maintain accurate and up-to-date financial records with our professional accounting and bookkeeping services. We handle everything from daily transactions to monthly reconciliations, ensuring your books are always audit-ready.",
    features: [
      "Financial Statements Preparation",
      "Bank Reconciliation",
      "Accounts Payable/Receivable",
      "Payroll Processing",
      "MIS Reporting",
      "Cloud Accounting Solutions"
    ],
    icon: "BookOpen",
    image: taxImage
  },
  {
    id: 5,
    title: "Company Registration",
    shortDescription: "Simplified company incorporation and registration services for new businesses.",
    fullDescription: "Starting a new business? We guide you through the entire company registration process, helping you choose the right structure and ensuring all legal requirements are met efficiently.",
    features: [
      "Private Limited Company Registration",
      "LLP Registration",
      "One Person Company",
      "Partnership Firm",
      "Trademark Registration",
      "MSME Registration"
    ],
    icon: "Building2",
    image: advisoryImage
  },
  {
    id: 6,
    title: "Financial Planning",
    shortDescription: "Personalized financial strategies to secure your financial future.",
    fullDescription: "Our financial planning services help individuals and families build wealth, plan for retirement, and achieve their long-term financial goals through comprehensive analysis and strategic recommendations.",
    features: [
      "Retirement Planning",
      "Investment Advisory",
      "Estate Planning",
      "Insurance Planning",
      "Wealth Management",
      "Education Planning"
    ],
    icon: "PiggyBank",
    image: auditImage
  }
];
