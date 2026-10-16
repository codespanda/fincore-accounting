import {
  Building2,
  Calculator,
  ChartLine,
  ClipboardList,
  Factory,
  FileChartColumn,
  HeartPulse,
  Hotel,
  Laptop,
  ShoppingBag,
  Truck,
  UserRoundSearch,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"

export const contact = {
  phone: "+91 62803 47210",
  phoneHref: "tel:+916280347210",
  email: "info@fincoreaccounting.com",
  address: ["123, Health Street, Sector 45", "Your City, State 500001"],
  mapQuery: "123, Health Street, Sector 45, Your City, State 500001",
  hours: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM"],
}

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  text: string
  intro: string
  features: string[]
  process: { title: string; text: string }[]
  price: string
}

export const services: Service[] = [
  {
    slug: "bookkeeping",
    icon: Users,
    title: "Bookkeeping",
    text: "We keep your books organized and up to date so you always know where you stand.",
    intro:
      "Accurate books are the foundation of every good financial decision. Our team records, reconciles and categorizes every transaction so your numbers are always ready for tax time, lenders and investors.",
    features: [
      "Monthly bank & credit card reconciliation",
      "Accounts payable and receivable tracking",
      "Expense categorization and receipt matching",
      "Cloud setup on QuickBooks, Xero or Zoho Books",
      "Monthly profit & loss and balance sheet",
      "Year-end cleanup and catch-up bookkeeping",
    ],
    process: [
      { title: "Onboard", text: "We connect your bank feeds and review your current books." },
      { title: "Clean up", text: "Past discrepancies are corrected and accounts reconciled." },
      { title: "Maintain", text: "Weekly entries and monthly closes, handled for you." },
      { title: "Report", text: "Clear monthly reports land in your inbox on time." },
    ],
    price: "From $299/mo",
  },
  {
    slug: "tax-preparation",
    icon: ClipboardList,
    title: "Tax Preparation",
    text: "Individual, business, and corporate tax returns prepared accurately and on time.",
    intro:
      "From sole proprietors to multi-entity corporations, we prepare and file federal, state and local returns accurately, claim every deduction you're entitled to, and keep you clear of penalties.",
    features: [
      "Individual (1040) and joint returns",
      "Partnership (1065) and S-Corp (1120-S) returns",
      "C-Corporation (1120) returns",
      "Multi-state and local filings",
      "Quarterly estimated tax calculations",
      "IRS notice response and audit support",
    ],
    process: [
      { title: "Gather", text: "Upload documents securely through our client portal." },
      { title: "Prepare", text: "A certified preparer builds your return line by line." },
      { title: "Review", text: "A senior CPA reviews every return before you see it." },
      { title: "File", text: "We e-file and confirm acceptance with the IRS and state." },
    ],
    price: "From $249/return",
  },
  {
    slug: "payroll-services",
    icon: Calculator,
    title: "Payroll Services",
    text: "Hassle-free payroll processing with accurate calculations and on-time payments.",
    intro:
      "Pay your team correctly and on time, every time. We handle wages, withholdings, benefits deductions and payroll tax filings so you can focus on running your business.",
    features: [
      "Weekly, bi-weekly or monthly pay runs",
      "Direct deposit and pay stubs",
      "Federal, state and local payroll tax filings",
      "W-2 and 1099 preparation",
      "New-hire reporting and onboarding",
      "PTO and benefits deduction tracking",
    ],
    process: [
      { title: "Set up", text: "We import employee data and configure pay schedules." },
      { title: "Run", text: "Approve hours and we process payroll in minutes." },
      { title: "File", text: "All payroll taxes are deposited and filed on time." },
      { title: "Report", text: "Year-end forms and labor cost reports, done." },
    ],
    price: "From $99/mo",
  },
  {
    slug: "financial-statements",
    icon: FileChartColumn,
    title: "Financial Statements",
    text: "Detailed reports that give you clear insights into your business performance.",
    intro:
      "Lender-ready and investor-ready financial statements prepared to GAAP standards, with plain-English commentary on what the numbers mean for your business.",
    features: [
      "Compiled and reviewed financial statements",
      "Income statement, balance sheet and cash flow",
      "Budget vs. actual variance reports",
      "KPI dashboards tailored to your industry",
      "Statements for loan and grant applications",
      "Quarterly management reporting packs",
    ],
    process: [
      { title: "Close", text: "We close the period and confirm every balance." },
      { title: "Compile", text: "Statements are prepared to GAAP standards." },
      { title: "Analyze", text: "Trends, ratios and red flags are highlighted." },
      { title: "Present", text: "We walk you through the results on a call." },
    ],
    price: "From $499/report",
  },
  {
    slug: "business-advisory",
    icon: ChartLine,
    title: "Business Advisory",
    text: "Strategic advice and planning to help you grow, scale, and boost profitability.",
    intro:
      "Act as if you had a CFO on staff. We help you plan growth, manage cash flow, price profitably and prepare for financing, acquisitions or a successful exit.",
    features: [
      "Cash flow forecasting and management",
      "Budgeting and financial modeling",
      "Pricing and profitability analysis",
      "Business entity selection and structuring",
      "Funding and loan application support",
      "Succession and exit planning",
    ],
    process: [
      { title: "Discover", text: "We learn your goals, market and current position." },
      { title: "Diagnose", text: "We find the levers that move profit and cash." },
      { title: "Plan", text: "You get a clear, prioritized action plan." },
      { title: "Execute", text: "Monthly check-ins keep the plan on track." },
    ],
    price: "From $799/mo",
  },
  {
    slug: "tax-planning",
    icon: UserRoundSearch,
    title: "Tax Planning",
    text: "Smart tax strategies to minimize your liability and maximize your savings.",
    intro:
      "Tax preparation looks back; tax planning looks ahead. We model your options throughout the year so you can make moves that legally reduce what you owe.",
    features: [
      "Year-round proactive tax strategy",
      "Entity structure and S-Corp election analysis",
      "Retirement plan and deduction optimization",
      "Equipment and depreciation planning",
      "Real estate and investment tax strategies",
      "Multi-year tax projections",
    ],
    process: [
      { title: "Review", text: "We analyze your last three years of returns." },
      { title: "Model", text: "We project your liability under different scenarios." },
      { title: "Recommend", text: "You get specific, actionable savings strategies." },
      { title: "Implement", text: "We help put each strategy in place, step by step." },
    ],
    price: "From $599/plan",
  },
]

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
  },
  { label: "Industries", to: "/industries" },
  {
    label: "Resources",
    to: "/resources",
    children: [
      { label: "Blog & Insights", to: "/resources" },
      { label: "Tax Guides", to: "/resources#guides" },
      { label: "FAQs", to: "/resources#faqs" },
    ],
  },
  { label: "Contact", to: "/contact" },
]

export type Industry = { icon: LucideIcon; title: string; text: string; points: string[] }

export const industries: Industry[] = [
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    text: "Inventory accounting, sales tax across states and marketplace reconciliation.",
    points: ["Multi-channel sales tax", "Inventory costing", "Shopify & Amazon sync"],
  },
  {
    icon: Laptop,
    title: "Technology & SaaS",
    text: "Revenue recognition, R&D tax credits and investor-ready reporting.",
    points: ["ASC 606 revenue", "R&D tax credits", "SaaS metrics"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Practice accounting for clinics, dentists and private healthcare providers.",
    points: ["Practice profitability", "Insurance reconciliation", "Provider payroll"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    text: "Property-level books, 1031 exchanges and depreciation strategies.",
    points: ["Property P&Ls", "Cost segregation", "1031 exchange support"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    text: "Food cost tracking, tip reporting and daily POS reconciliation.",
    points: ["Prime cost reporting", "Tip compliance", "POS reconciliation"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Job costing, inventory valuation and margin analysis by product line.",
    points: ["Job costing", "WIP valuation", "Margin analysis"],
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    text: "Fleet costs, IFTA filings and per-mile profitability tracking.",
    points: ["IFTA & HVUT filing", "Fleet depreciation", "Per-load profitability"],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    text: "Seasonal cash flow planning and occupancy-tax compliance for hotels.",
    points: ["Occupancy tax", "Seasonal forecasting", "Departmental reporting"],
  },
]

export const team = [
  {
    name: "Robert Hayes, CPA",
    role: "Founder & Managing Partner",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&h=560&q=80",
  },
  {
    name: "Priya Sharma, CPA",
    role: "Director of Tax",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&h=560&q=80",
  },
  {
    name: "Michael Turner",
    role: "Head of Advisory",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&h=560&q=80",
  },
  {
    name: "Laura Kim, EA",
    role: "Payroll & Compliance Lead",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&h=560&q=80",
  },
]

export type Post = {
  category: "Tax" | "Bookkeeping" | "Payroll" | "Growth"
  title: string
  excerpt: string
  date: string
  read: string
  image: string
}

export const posts: Post[] = [
  {
    category: "Tax",
    title: "10 Small Business Tax Deductions You're Probably Missing",
    excerpt: "From home office costs to startup expenses, these overlooked write-offs can add up to real savings.",
    date: "Oct 8, 2026",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Bookkeeping",
    title: "Cash vs. Accrual Accounting: Which Is Right for You?",
    excerpt: "A plain-English guide to the two methods and how your choice affects taxes and reporting.",
    date: "Sep 24, 2026",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Growth",
    title: "How to Build a 13-Week Cash Flow Forecast",
    excerpt: "The simple forecasting tool that helps owners spot shortfalls weeks before they happen.",
    date: "Sep 10, 2026",
    read: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Payroll",
    title: "Employee or Contractor? Getting Classification Right",
    excerpt: "Misclassification is costly. Here's how the IRS decides, and how to protect your business.",
    date: "Aug 27, 2026",
    read: "7 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Tax",
    title: "Should Your LLC Elect S-Corp Status?",
    excerpt: "When the S-Corp election saves money on self-employment tax, and when it doesn't.",
    date: "Aug 12, 2026",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Growth",
    title: "5 Financial KPIs Every Owner Should Track Monthly",
    excerpt: "Gross margin, burn, DSO and more: the numbers that tell you how your business is really doing.",
    date: "Jul 30, 2026",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
]

export const guides = [
  { title: "2026 Small Business Tax Calendar", pages: "PDF · 4 pages" },
  { title: "Year-End Bookkeeping Checklist", pages: "PDF · 6 pages" },
  { title: "New Employer Payroll Setup Guide", pages: "PDF · 8 pages" },
  { title: "Startup Financial Model Template", pages: "XLSX · Template" },
]

export const faqs = [
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the size and complexity of your business. Bookkeeping starts at $299/month and tax returns at $249. We always provide a fixed quote after a free consultation, with no hidden fees.",
  },
  {
    q: "Do you work with businesses outside our city?",
    a: "Yes. We serve clients in all 50 states. Our cloud-based tools and secure client portal let us work with you just as closely as a local firm.",
  },
  {
    q: "Which accounting software do you support?",
    a: "We are certified in QuickBooks Online, Xero and Zoho Books, and can also work with NetSuite, FreshBooks and industry-specific platforms.",
  },
  {
    q: "Can you help if my books are behind?",
    a: "Absolutely. Catch-up and clean-up bookkeeping is one of our specialties. We can bring months or even years of records up to date and file any missed returns.",
  },
  {
    q: "How do I share documents securely?",
    a: "All documents are exchanged through our encrypted client portal. We never ask you to email sensitive information such as tax IDs or bank details.",
  },
  {
    q: "Will I have a dedicated accountant?",
    a: "Yes. Every client is assigned a dedicated accountant who knows your business, backed by a senior CPA who reviews all work.",
  },
]
