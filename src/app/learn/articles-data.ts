export type ArticleSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type ArticleResource = {
  label: string;
  href: string;
};

export type LearnArticle = {
  slug: string;
  title: string;
  eyebrow?: string;
  description: string;
  excerpt?: string;
  highlights?: { label: string; value: string }[];
  sections: ArticleSection[];
  resource?: ArticleResource;
};

export const articles: LearnArticle[] = [
  {
    slug: "intro-to-bots",
    title: "Intro to Bots",
    eyebrow: "Automation Playbooks",
    description:
      "Understand the strengths of Mizar, 3Commas, and Pionex, how their fees and returns differ, and the exact onboarding steps we coach before capital goes live.",
    excerpt:
      "Onboard traders to Mizar, 3Commas, and Pionex with no-drama setup, fee breakdowns, and compounding examples.",
    highlights: [
      { label: "Expected Monthly Return", value: "2% – 10% (3Commas)" },
      { label: "Performance Fees", value: "5% – 50% (Mizar copy leaders)" },
      { label: "Referral Share", value: "Up to 45% lifetime (Mizar)" },
    ],
    sections: [
      {
        heading: "Mizar · Performance-Based Automation",
        body:
          "Cloud-first copy trading with AI-driven bots. You only pay when the strategy prints profit, and the STAR referral program unlocks lifetime revenue share.",
        bullets: [
          "Connect Binance, Bybit, KuCoin, OKX, Gate.io and more with trade-only API keys for safety.",
          "Browse traders by profit %, drawdown, and risk score before mirroring positions.",
          "Iterate in paper mode, then go live and circulate your STAR referral link to capture up to 45% of trading commissions.",
        ],
      },
      {
        heading: "3Commas · Marketplace & Pro Controls",
        body:
          "A veteran automation hub with 1M+ users and a deep bot marketplace. Paid tiers unlock unlimited DCA, grid, and signal bots alongside smart-terminal tooling.",
        bullets: [
          "Link 15 major exchanges and protect access with 2FA plus trade-only keys.",
          "Spin up DCA bots for dollar-cost smoothing, grid bots for range trading, or TradingView signal bots for technical triggers.",
          "Copy vetted marketplace strategies, track drawdowns, and monetise referrals with 25–40% recurring commission on subscriptions.",
        ],
      },
      {
        heading: "Pionex · Built-In Exchange Bots",
        body:
          "If you want to avoid API juggling, Pionex ships 16 exchange-native bots, low fees (~0.05%), and simple spot/futures automation.",
        bullets: [
          "Launch grid, arbitrage, or DCA bots directly from a KYC-verified exchange account.",
          "Use guided setup wizards to set price ranges, grid counts, and risk in minutes.",
          "Earn 20% spot or 15% futures fee share from the Rebate center while your community trades.",
        ],
      },
      {
        heading: "Compounding Snapshot",
        body:
          "Returns compound quickly once gains are recycled. Pair the right bot cadence with disciplined withdrawals to smooth volatility.",
        bullets: [
          "$10K at ~3% monthly grows to ≈$14.3K after 12 months (+43%).",
          "$10K at ~8% monthly compounds toward ≈$25K in a year (+150%).",
          "Always factor strategy-specific drawdowns before extrapolating forward performance.",
        ],
      },
    ],
    resource: {
      label: "Download setup guide (PDF)",
      href: "/docs/trading_bots_setup%20copy.pdf",
    },
  },
  {
    slug: "safe-copy-trading",
    title: "Safe Copy-Trading",
    eyebrow: "Risk & Compliance",
    description:
      "Build a compliant copy-trading desk that protects capital, leverages affiliate upside, and keeps tax authorities satisfied on both sides of the border.",
    excerpt:
      "Structure a copy desk that balances community trust, provider diligence, and the tax advantages available to lean operators.",
    highlights: [
      { label: "Workspace", value: "Run from laptop or phone" },
      { label: "Deductions", value: "Home office · connectivity · equipment" },
      { label: "Revenue", value: "No ceiling with layered commissions" },
    ],
    sections: [
      {
        heading: "Design the Operating Shell",
        body:
          "Treat the copy desk like a lean digital business. Location independence and a flexible schedule are assets, but only when paired with disciplined process.",
        bullets: [
          "Document responsibilities for monitoring, escalation, and client updates so nothing hinges on a single operator.",
          "Use lightweight tooling—secure cloud storage, logging dashboards, and messaging channels—to stay audit ready while remote.",
          "Keep marketing language aligned with actual risk parameters outlined in every strategy brief.",
        ],
      },
      {
        heading: "Provider Vetting & Ongoing Review",
        body:
          "Borrow diligence habits from our bot setup playbooks before mirroring any trader.",
        bullets: [
          "Score profit %, drawdown history, and capital efficiency for each leader in marketplaces like Mizar before clicking Follow.",
          "Run trial periods in paper trading or with capped capital to observe live execution and slippage.",
          "Schedule weekly reviews of drawdown triggers so you can pause, rotate, or hedge when volatility spikes.",
        ],
      },
      {
        heading: "Capital Structure & Tax Planning",
        body:
          "Operating as a self-employed entity in Canada or the U.S. unlocks meaningful deductions and cash-flow flexibility.",
        bullets: [
          "Write off proportional home-office, internet, and phone expenses tied to the copy desk.",
          "Track mileage, travel, and equipment purchases (laptops, software, data feeds) for year-end reconciliation.",
          "Layer affiliate marketing revenue on top of trading profits to smooth income during slower market months.",
        ],
      },
      {
        heading: "Communication Framework",
        body:
          "Copy trading is trust-first. Keep community members informed without overwhelming them.",
        bullets: [
          "Publish concise weekly updates covering performance, active safeguards, and upcoming experiments.",
          "Automate alerts inside your CRM or chat communities for position changes above predefined thresholds.",
          "Archive every broadcast and investor communication to stay compliant with local guidance.",
        ],
      },
    ],
    resource: {
      label: "Download business advantages brief (PDF)",
      href: "/docs/Benefits_of_Affiliate_Marketing_and_Day_Trading%20copy.pdf",
    },
  },
  {
    slug: "ai-in-finance",
    title: "AI in Finance",
    eyebrow: "Automation Systems",
    description:
      "Explore how BUXI DIGITAL weaves AI assistants, automation hubs, and affiliate systems into a cohesive trading-education stack.",
    excerpt:
      "See how BuXiAi chat, voice, affiliate, and email loops snap together around a conversion-focused web stack.",
    highlights: [
      { label: "Core Stack", value: "Website · CRM · Automation" },
      { label: "Assistants", value: "Chat · Voice · Receptionist" },
      { label: "Reporting", value: "Affiliate & email analytics" },
    ],
    sections: [
      {
        heading: "Web Foundation for Automation",
        body:
          "Every deployment starts with a responsive Hostinger build tuned for speed, clarity, and conversions—all while staying on-brand in gold/black.",
        bullets: [
          "Embed AI assistants directly into hero CTAs and lead forms for always-on capture.",
          "Link Stripe or PayPal for frictionless onboarding, membership access, and affiliate payouts.",
          "Use analytics tagging to surface which pages or funnels feed automation demand.",
        ],
      },
      {
        heading: "AI Bots & Operational Automations",
        body:
          "BuXiAi modules behave like digital staff, handling intake, quoting, and follow-up without sacrificing the brand voice.",
        bullets: [
          "Deploy receptionist bots to route calls, answer FAQs, and trigger SMS/email follow-ups through integrated CRMs.",
          "Stand up conversational chat assistants for Q&A, lead qualification, and nurture sequences.",
          "Sync calendars so prospects can book directly after an AI touchpoint—no human scheduling lag.",
        ],
      },
      {
        heading: "Affiliate & Revenue Automation",
        body:
          "Automation doesn’t stop at execution. We wire dashboards, payouts, and recruitment flows so partners can self-manage.",
        bullets: [
          "Create gated affiliate hubs where promoters grab links, track volume, and download brand assets.",
          "Trigger payouts automatically through Stripe Connect or PayPal based on performance thresholds.",
          "Feed weekly ROI reports to leadership with AI summaries of growth, churn, and campaign highlights.",
        ],
      },
      {
        heading: "Lifecycle Email & Follow-Up",
        body:
          "With AI-powered segmentation, every contact sees the right nurture flow without manual sorting.",
        bullets: [
          "Automate onboarding, upsell, and re-engagement sequences tied to behavior and status.",
          "Monitor engagement metrics and allow AI to recommend subject-line or send-time tweaks.",
          "Loop reactivation prompts after inactivity windows so prospects never fall through the cracks.",
        ],
      },
      {
        heading: "Voice Reception & Integrations",
        body:
          "Voice agents tie the entire system together, bridging web, chat, and telephony experiences.",
        bullets: [
          "Use Twilio or OpenAI Voice to greet callers, qualify needs, and log transcripts into your CRM.",
          "Push every interaction into the automation hub so follow-up emails, SMS, and tasks happen instantly.",
          "Map data pipes between website, CRM, chat, and payments to keep analytics synchronized across the stack.",
        ],
      },
    ],
    resource: {
      label: "Download AI systems breakdown (PDF)",
      href: "/docs/BuXi_Digital_AI_Automation_Breakdown%20copy.pdf",
    },
  },
];

export const articleMap = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return articleMap.get(slug);
}

export const learnFeaturedSlugs = [
  "intro-to-bots",
  "safe-copy-trading",
  "ai-in-finance",
];
