"use client";

import React, { useMemo, useState } from "react";

const featureCards = [
  {
    title: "Segregated Wallets",
    description:
      "Generate unique deposit wallets for each user, merchant, invoice, or transaction. Improve tracking, reduce reconciliation errors, and support scalable crypto payment operations.",
    icon: "wallet",
  },
  {
    title: "Automated Fund Consolidation",
    description:
      "Automatically consolidate funds from distributed wallets into your treasury wallet with flexible rules, thresholds, and scheduling.",
    icon: "consolidate",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Track deposits, confirmations, and payment statuses in real time across supported blockchain networks and stablecoin payment flows.",
    icon: "monitor",
  },
  {
    title: "Multi-chain & Stablecoin Support",
    description:
      "Support major blockchains and digital assets including USDT, USDC, BTC, and ETH for global crypto payment processing.",
    icon: "chain",
  },
  {
    title: "Crypto Payment API",
    description:
      "Integrate wallet creation, payment tracking, treasury workflows, and fund consolidation through developer-friendly APIs and webhooks.",
    icon: "api",
  },
  {
    title: "Enterprise-grade Security",
    description:
      "Built for secure crypto payment infrastructure with operational controls and wallet architecture designed for trust and scale.",
    icon: "security",
  },
];

const solutions = [
  {
    title: "Payment Processors",
    description:
      "Launch a scalable crypto payment gateway with structured wallet flows, cleaner reconciliation, and treasury visibility.",
    icon: "processor",
  },
  {
    title: "OTC Desks",
    description:
      "Manage client deposits, monitor incoming transfers, and consolidate funds efficiently into treasury wallets.",
    icon: "otc",
  },
  {
    title: "Trading Platforms",
    description:
      "Offer users a seamless deposit experience with wallet-per-user crypto payment infrastructure.",
    icon: "trading",
  },
  {
    title: "Marketplaces",
    description:
      "Accept crypto payments and simplify reconciliation with segregated wallets and automated treasury consolidation.",
    icon: "marketplace",
  },
  {
    title: "Gaming Platforms",
    description:
      "Handle high-volume crypto payment processing with clearer tracking, faster monitoring, and reliable fund movement.",
    icon: "gaming",
  },
  {
    title: "Fintech & Global Businesses",
    description:
      "Use modern crypto payment infrastructure for stablecoin settlement, treasury management, and multi-chain operations.",
    icon: "fintech",
  },
];

const steps = [
  {
    number: "01",
    title: "Generate Wallets",
    description:
      "Create unique deposit wallet addresses for each user, merchant, invoice, or transaction flow.",
    icon: "wallet",
  },
  {
    number: "02",
    title: "Receive Crypto Payments",
    description:
      "Accept payments in USDT, BTC, ETH, and other supported digital assets across multiple blockchain networks.",
    icon: "receive",
  },
  {
    number: "03",
    title: "Monitor & Verify",
    description:
      "Track blockchain activity and confirm incoming payments in real time with full operational visibility.",
    icon: "monitor",
  },
  {
    number: "04",
    title: "Consolidate Funds",
    description:
      "Automatically consolidate funds into a secure treasury wallet for simpler reconciliation and treasury management.",
    icon: "consolidate",
  },
];

const trustedLogos = [
  "Woven",
  "Coinflow",
  "Payverse",
  "Tradaant",
  "BlockPay",
  "Zentana",
  "Orbital",
];

const stats = [
  { value: "$2.8B+", label: "Total Volume Processed" },
  { value: "1M+", label: "Transactions Processed" },
  { value: "50+", label: "Supported Chains" },
  { value: "99.99%", label: "System Uptime" },
];

const faqs = [
  {
    question: "What is a crypto payment gateway?",
    answer:
      "A crypto payment gateway is a system that allows businesses to accept cryptocurrency payments such as USDT, BTC, and ETH and manage those transactions securely.",
  },
  {
    question: "How does CryptoRails work?",
    answer:
      "CryptoRails allows businesses to generate unique wallet addresses for each user or transaction, monitor blockchain payments in real time, and automatically consolidate funds into a central treasury wallet.",
  },
  {
    question: "Does CryptoRails support USDT payments?",
    answer:
      "Yes. CryptoRails supports USDT and other major stablecoins across multiple blockchain networks for scalable global crypto payment processing.",
  },
  {
    question: "Can I automate fund consolidation?",
    answer:
      "Yes. CryptoRails includes automated fund consolidation workflows so you can move balances from multiple wallets into a central treasury wallet based on your own rules.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Icon({ name, className = "h-4 w-4", useGradient = true }: { name: string; className?: string; useGradient?: boolean }) {
  const gradientId = `gradient-${name}`;
  const strokeColor = useGradient ? `url(#${gradientId})` : "currentColor";
  
  const gradientDef = useGradient ? (
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
  ) : null;

  const icons: Record<string, React.ReactNode> = {
    // Feature icons
    wallet: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M22 10H18a2 2 0 0 0 0 4h4" />
        <path d="M18 12h.01" />
        <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    consolidate: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M8 6h13M8 12h13M8 18h13" />
        <path d="M3 6l3 3-3 3" />
        <path d="M3 15l3 3-3 3" />
      </svg>
    ),
    monitor: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    chain: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M6 6.5L9.5 10M14.5 10L18 6.5M6 17.5L9.5 14M14.5 14L18 17.5" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    // Solution icons
    processor: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
    otc: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    trading: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    marketplace: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    gaming: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M6 12h4M8 10v4" />
        <circle cx="17" cy="10" r="1" />
        <circle cx="15" cy="14" r="1" />
        <rect x="2" y="6" width="20" height="12" rx="3" />
      </svg>
    ),
    fintech: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    // Step icons
    receive: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M12 2v14M5 10l7 7 7-7" />
        <path d="M5 22h14" />
      </svg>
    ),
    // Developer icons
    sandbox: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    docs: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke={strokeColor} strokeWidth="1.8">
        {gradientDef}
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  };
  
  return <>{icons[name] || icons.wallet}</>;
}

function ThemeToggle({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition-all duration-300",
        isDark 
          ? "border-slate-700 bg-white/[0.02] hover:border-slate-600" 
          : "border-slate-400 bg-slate-700 hover:bg-slate-600"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <defs>
            <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="4" stroke="url(#sunGradient)" strokeWidth="2" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="url(#sunGradient)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function CryptoRailsLogo({ isDark = true }: { isDark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
        <div className="absolute h-3.5 w-3.5 rounded-sm border border-blue-400/50" />
        <div className="absolute h-1.5 w-5 rounded-full border border-cyan-300/40" />
      </div>
      <span className={cn("text-base font-semibold tracking-tight", isDark ? "text-slate-50" : "text-slate-900")}>
        CryptoRails
      </span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  isDark = true,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  isDark?: boolean;
}) {
  return variant === "primary" ? (
    <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition hover:bg-blue-500">
      {children}
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 10h10M11 6l4 4-4 4" />
      </svg>
    </button>
  ) : (
    <button className={cn(
      "inline-flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition",
      isDark 
        ? "border-slate-700 bg-white/[0.02] text-slate-100 hover:border-slate-600 hover:bg-white/[0.04]"
        : "border-slate-300/40 bg-white/80 text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:bg-white"
    )}>
      {children}
    </button>
  );
}

const mobileMenuLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "FAQ", href: "#faq" },
];

function MobileMenuButton({ isDark = true }: { isDark?: boolean }) {
  return (
    <button
      className={cn(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition lg:hidden",
        isDark 
          ? "border-slate-700 bg-white/[0.02] text-slate-300 hover:border-slate-600 hover:text-white"
          : "border-slate-300/40 bg-white/80 text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:text-slate-700"
      )}
      onClick={() => {
        const menu = document.getElementById("mobile-menu");
        if (menu) {
          menu.classList.toggle("hidden");
        }
      }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}

function MobileMenu({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-[100] hidden backdrop-blur-xl lg:hidden",
        isDark ? "bg-[#050816]/98" : "bg-[#eef0f4]/98"
      )}
    >
      <div className="flex h-full flex-col">
        <div className={cn("flex items-center justify-between border-b px-6 py-3", isDark ? "border-white/5" : "border-slate-300/30")}>
          <CryptoRailsLogo isDark={isDark} />
          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <button
              className={cn(
                "flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition",
                isDark 
                  ? "border-slate-700 bg-white/[0.02] text-slate-300 hover:border-slate-600 hover:text-white"
                  : "border-slate-300/40 bg-white/80 text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:text-slate-700"
              )}
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.add("hidden");
                }
              }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
        </div>
        
        <nav className="flex flex-1 flex-col gap-1 p-6">
          {mobileMenuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition",
                isDark ? "text-slate-200 hover:bg-white/5 hover:text-white" : "text-slate-600 hover:bg-white/60 hover:text-slate-700"
              )}
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.add("hidden");
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className={cn("border-t p-6", isDark ? "border-white/5" : "border-slate-300/30")}>
          <div className="flex flex-col gap-3">
            <button className={cn(
              "w-full cursor-pointer rounded-md border px-4 py-3 text-sm font-medium transition",
              isDark 
                ? "border-slate-700 bg-white/[0.02] text-slate-100 hover:border-slate-600 hover:bg-white/[0.04]"
                : "border-slate-300/40 bg-white/80 text-slate-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:bg-white"
            )}>
              Log in
            </button>
            <button className="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition hover:bg-blue-500">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  isDark = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  isDark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <div className={cn("mb-3 text-sm font-medium uppercase tracking-[0.2em]", isDark ? "text-slate-500" : "text-slate-500")}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={cn("text-2xl font-semibold tracking-tight sm:text-3xl", isDark ? "text-slate-50" : "text-slate-800")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-3 text-sm leading-6", isDark ? "text-slate-400" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

const apiTabs = [
  {
    name: "Wallets",
    endpoint: "POST /wallets/create",
    code: `{
  "label": "Customer #12345",
  "callback_url": "https://yourdomain.com/webhook",
  "chain": "TRC20",
  "asset": "USDT"
}`,
    features: ["Wallet-per-user architecture", "Multi-chain support", "Custom labels"],
  },
  {
    name: "Payments",
    endpoint: "GET /payments/{payment_id}",
    code: `{
  "id": "pay_8xK2mN3pQ7",
  "wallet_id": "wal_A91K",
  "amount": "120.00",
  "asset": "USDT",
  "chain": "TRC20",
  "status": "confirmed",
  "confirmations": 21,
  "tx_hash": "0x7a3e...f291"
}`,
    features: ["Real-time status tracking", "Multi-confirmation support", "Transaction details"],
  },
  {
    name: "Consolidation",
    endpoint: "POST /consolidation/trigger",
    code: `{
  "source_wallets": ["wal_A91K", "wal_B34L"],
  "destination": "treasury_main",
  "asset": "USDT",
  "min_amount": "100.00",
  "schedule": "immediate"
}`,
    features: ["Flexible thresholds", "Scheduled transfers", "Multi-wallet batching"],
  },
  {
    name: "Webhooks",
    endpoint: "POST /webhooks/configure",
    code: `{
  "url": "https://yourdomain.com/webhook",
  "events": [
    "payment.received",
    "payment.confirmed",
    "consolidation.completed"
  ],
  "secret": "whsec_..."
}`,
    features: ["Event filtering", "Signature verification", "Retry logic"],
  },
  {
    name: "Balances",
    endpoint: "GET /balances/summary",
    code: `{
  "total_balance_usd": "3294120.00",
  "assets": [
    { "asset": "USDT", "chain": "TRC20", "balance": "1488920.00" },
    { "asset": "USDC", "chain": "ERC20", "balance": "662340.00" },
    { "asset": "BTC", "balance": "12.45" }
  ],
  "wallets_count": 8421
}`,
    features: ["Multi-asset overview", "Chain breakdown", "Real-time sync"],
  },
];

function ApiCodeTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = apiTabs[activeTab];

  return (
    <div className="rounded-lg border border-slate-800 bg-[#0A1222] p-3">
      <div className="flex flex-wrap gap-1 border-b border-slate-800 pb-2">
        {apiTabs.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "cursor-pointer rounded px-2 py-1 text-xs transition",
              idx === activeTab
                ? "border border-blue-500/20 bg-blue-500/10 text-blue-300"
                : "text-slate-400 hover:text-slate-300"
            )}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-slate-800 bg-[#06101F] p-3">
        <div className="mb-2 text-xs text-slate-400">{tab.endpoint}</div>
        <pre className="overflow-x-auto text-xs leading-5 text-slate-300">
          {tab.code}
        </pre>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {tab.features.map((note) => (
          <div
            key={note}
            className="rounded border border-slate-800 bg-white/[0.02] p-2.5 text-xs leading-5 text-slate-400"
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  isDark = true,
}: {
  title: string;
  description: string;
  icon: string;
  isDark?: boolean;
}) {
  return (
    <div className={cn(
      "rounded-xl border p-5 transition-colors",
      isDark ? "border-slate-800 bg-white/[0.02]" : "border-slate-300/30 bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    )}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className={cn("text-sm font-semibold", isDark ? "text-slate-100" : "text-slate-700")}>{title}</h3>
      <p className={cn("mt-2 text-sm leading-5", isDark ? "text-slate-400" : "text-slate-500")}>{description}</p>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  isDark = true,
}: {
  question: string;
  answer: string;
  isDark?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(
      "rounded-xl border transition-colors",
      isDark ? "border-slate-800 bg-white/[0.02]" : "border-slate-300/30 bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
    )}>
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={cn("text-base font-medium", isDark ? "text-slate-100" : "text-slate-700")}>{question}</span>
        <span 
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-transform duration-200",
            isDark ? "border-slate-700 text-slate-400" : "border-slate-300/60 text-slate-500",
            open && "rotate-45"
          )}
        >
          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2v8M2 6h8" />
          </svg>
        </span>
      </button>
      <div 
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className={cn("px-6 pb-5 text-sm leading-6", isDark ? "text-slate-400" : "text-slate-500")}>{answer}</div>
        </div>
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  items,
  isDark = true,
}: {
  title: string;
  items: { label: string; href: string }[];
  isDark?: boolean;
}) {
  return (
    <div>
      <h3 className={cn("text-sm font-semibold", isDark ? "text-slate-100" : "text-slate-800")}>{title}</h3>
      <ul className={cn("mt-3 space-y-2.5 text-sm", isDark ? "text-slate-400" : "text-slate-500")}>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={cn("cursor-pointer transition", isDark ? "hover:text-slate-200" : "hover:text-slate-700")}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CryptoRailsLandingPage() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "CryptoRails",
          url: "https://cryptorails.tech",
          logo: "https://cryptorails.tech/logo.png",
          description:
            "CryptoRails is a crypto payment gateway and wallet infrastructure platform for businesses.",
        },
        {
          "@type": "WebSite",
          name: "CryptoRails",
          url: "https://cryptorails.tech",
          description:
            "Crypto payment gateway infrastructure for global businesses.",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    }),
    []
  );

  const [isDark, setIsDark] = useState(true);

  return (
    <main className={cn(
      "min-h-screen overflow-x-hidden transition-colors duration-300",
      isDark ? "bg-[#050816] text-white" : "bg-[#eef0f4] text-slate-700"
    )}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {isDark && (
        <>
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%),linear-gradient(180deg,#050816_0%,#07111F_50%,#050816_100%)]" />
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />
        </>
      )}
      {!isDark && (
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,#e8ebf0_0%,#eef0f4_50%,#e8ebf0_100%)] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.04),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.03),transparent_30%)]" />
      )}

      <MobileMenu isDark={isDark} setIsDark={setIsDark} />
      
      <header className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        isDark ? "border-white/5 bg-[#050816]/80" : "border-slate-300/40 bg-[#eef0f4]/90"
      )}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <CryptoRailsLogo isDark={isDark} />

          <nav className="hidden items-center gap-6 lg:flex">
            <a href="#product" className={cn("cursor-pointer text-sm font-medium transition", isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-800")}>Product</a>
            <a href="#how-it-works" className={cn("cursor-pointer text-sm font-medium transition", isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-800")}>How it works</a>
            <a href="#solutions" className={cn("cursor-pointer text-sm font-medium transition", isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-800")}>Solutions</a>
            <a href="#developers" className={cn("cursor-pointer text-sm font-medium transition", isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-800")}>Developers</a>
            <a href="#faq" className={cn("cursor-pointer text-sm font-medium transition", isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-800")}>FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <button className={cn("hidden cursor-pointer text-sm font-medium transition sm:inline-flex", isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-800")}>
              Log in
            </button>
            <div className="hidden sm:block">
              <Button isDark={isDark}>Book a Demo</Button>
            </div>
            <MobileMenuButton isDark={isDark} />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className={cn(
              "mb-5 inline-flex w-fit rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]",
              isDark ? "border-blue-500/20 bg-blue-500/10 text-blue-300" : "border-blue-500/30 bg-blue-500/10 text-blue-600"
            )}>
              Crypto Payment Infrastructure
            </div>

            <h1 className={cn("max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl", isDark ? "text-slate-50" : "text-slate-800")}>
              Crypto Payment Gateway Infrastructure for <span className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">global businesses</span>
            </h1>

            <p className={cn("mt-6 max-w-lg text-base leading-7", isDark ? "text-slate-400" : "text-slate-600")}>
              CryptoRails is a modern crypto payment gateway and wallet infrastructure platform that enables businesses to accept crypto payments, generate segregated deposit wallets, and automatically consolidate funds into a secure treasury wallet. Built for scalable USDT and multi-chain payment processing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button isDark={isDark}>Book a Demo</Button>
              <Button variant="secondary" isDark={isDark}>Explore the Docs</Button>
            </div>

            <div className={cn("mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L6 12 2.5 8.5" />
                </svg>
                Enterprise-grade security
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L6 12 2.5 8.5" />
                </svg>
                99.99% system uptime
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L6 12 2.5 8.5" />
                </svg>
                Global coverage
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:pl-4">
            <div className={cn(
              "relative w-full max-w-3xl overflow-hidden rounded-xl border shadow-2xl",
              isDark ? "border-slate-800 bg-[#0A1222] shadow-blue-900/30" : "border-slate-300/30 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[400px] lg:h-[460px]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tof8I6e63T99sEmSZ7Rr578b0zdDnt.png"
                  alt="CryptoRails Admin Dashboard showing fund consolidation flow, wallet management, and real-time activity monitoring"
                  className="absolute left-0 top-0 w-[150%] max-w-none origin-top-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("border-y py-10", isDark ? "border-white/5" : "border-slate-300/30")}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Trusted by innovative companies worldwide
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo, idx) => (
              <div
                key={logo}
                className={cn("flex items-center gap-2 text-sm", isDark ? "text-slate-400" : "text-slate-500")}
              >
                {idx === 0 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l2 2 4-4" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 19h20L12 2z" />
                    <path d="M12 9v4M12 16h.01" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                )}
                {idx === 4 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                )}
                {idx === 5 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 4l16 16M20 4L4 20" />
                  </svg>
                )}
                {idx === 6 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )}
                <span className="font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why CryptoRails"
              title="A scalable crypto payment gateway for modern businesses"
              description="CryptoRails provides a full-stack crypto payment gateway designed for businesses that need reliable, scalable, and structured payment infrastructure."
              isDark={isDark}
            />
            <div className={cn("mt-5 space-y-3 text-sm leading-6", isDark ? "text-slate-400" : "text-slate-600")}>
              <p>
                Unlike traditional crypto payment solutions, CryptoRails uses a segregated wallet architecture, allowing each user, transaction, or merchant to receive payments through a unique wallet address.
              </p>
              <p>
                This approach improves payment tracking, reconciliation, and operational efficiency, making it ideal for high-volume crypto payment processing across industries such as fintech, trading platforms, marketplaces, and gaming platforms.
              </p>
              <p>
                CryptoRails also enables automatic fund consolidation, allowing businesses to move assets from multiple wallets into a central treasury wallet efficiently.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="text-center text-base font-medium uppercase tracking-[0.2em] text-slate-500">
          How our crypto payment gateway works
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative text-center">
              {idx < steps.length - 1 && (
                <div className="absolute left-[calc(50%+32px)] top-8 hidden h-[2px] w-[calc(100%-64px)] lg:block">
                  <div className={cn("h-full w-full border-t-2 border-dashed", isDark ? "border-slate-700" : "border-slate-300")} />
                  <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400/60" />
                </div>
              )}
              <div className={cn("mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl border", isDark ? "border-slate-700 bg-[#0A1222]" : "border-slate-300/30 bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]")}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10">
                  <Icon name={step.icon} className="h-6 w-6" />
                </div>
              </div>
              <div className="mb-2 text-sm font-medium text-slate-500">{step.number}</div>
              <h3 className={cn("text-base font-semibold", isDark ? "text-slate-100" : "text-slate-700")}>{step.title}</h3>
              <p className={cn("mx-auto mt-3 max-w-[220px] text-sm leading-6", isDark ? "text-slate-400" : "text-slate-500")}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
          <div>
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Built for businesses
            </div>
            <h2 className={cn("text-lg font-semibold tracking-tight sm:text-xl", isDark ? "text-slate-50" : "text-slate-800")}>
              Moving crypto at scale
            </h2>
            <p className={cn("mt-3 text-sm leading-6", isDark ? "text-slate-400" : "text-slate-600")}>
              From payment processors to marketplaces, CryptoRails supports teams that need structured crypto payment infrastructure, wallet control, and treasury consolidation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className={cn("rounded-lg border p-4 transition-colors", isDark ? "border-slate-800 bg-white/[0.02]" : "border-slate-300/30 bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]")}
              >
                <div className={cn("mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border", isDark ? "border-slate-700 bg-slate-900/80" : "border-slate-300/30 bg-slate-100/80")}>
                  <Icon name={solution.icon} className="h-4 w-4" />
                </div>
                <h3 className={cn("text-sm font-semibold", isDark ? "text-slate-100" : "text-slate-700")}>{solution.title}</h3>
                <p className={cn("mt-1.5 text-sm leading-5", isDark ? "text-slate-400" : "text-slate-500")}>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={cn("text-3xl font-bold lg:text-4xl", isDark ? "text-cyan-300" : "text-blue-600")}>{stat.value}</div>
              <div className={cn("mt-2 text-sm", isDark ? "text-slate-400" : "text-slate-600")}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="developers" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Developers"
              title="API-first. Developer ready."
              description="Integrate wallet creation, payment tracking, fund consolidation, and webhooks in minutes."
              isDark={isDark}
            />
            <div className="mt-6">
              <Button isDark={isDark}>Explore API Docs</Button>
            </div>

            <div className="mt-6 space-y-2">
              {[
                { title: "Sandbox Environment", desc: "Test your integration safely before going live.", icon: "sandbox" },
                { title: "Detailed Documentation", desc: "Everything your team needs to integrate quickly.", icon: "docs" },
                { title: "24/7 Developer Support", desc: "Technical help for integration and monitoring.", icon: "support" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={cn("flex items-start gap-3 rounded-md border p-3", isDark ? "border-slate-800 bg-white/[0.02]" : "border-slate-300/30 bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]")}
                >
                  <div className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded border", isDark ? "border-slate-700 bg-slate-900/80" : "border-slate-300/30 bg-slate-100/80")}>
                    <Icon name={item.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <div className={cn("text-sm font-medium", isDark ? "text-slate-100" : "text-slate-700")}>{item.title}</div>
                    <div className={cn("text-sm leading-5", isDark ? "text-slate-400" : "text-slate-500")}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ApiCodeTabs />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 text-center text-base font-medium uppercase tracking-[0.2em] text-slate-500">
          Frequently asked questions
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} isDark={isDark} />
          ))}
        </div>
      </section>

      <section id="company" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className={cn(
          "overflow-hidden rounded-xl border px-6 py-8 sm:px-8 sm:py-10",
          isDark 
            ? "border-blue-500/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(10,18,34,0.98)_42%,rgba(34,211,238,0.08))] shadow-[0_12px_30px_rgba(37,99,235,0.1)]"
            : "border-slate-300/30 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        )}>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_auto] lg:items-center">
            <div>
              <h2 className={cn("text-xl font-semibold tracking-tight sm:text-2xl", isDark ? "text-slate-50" : "text-slate-700")}>
                Upgrade your crypto payment infrastructure
              </h2>
              <p className={cn("mt-3 max-w-lg text-sm leading-6", isDark ? "text-slate-300" : "text-slate-500")}>
                Launch segregated wallet flows, automatically consolidate funds into your treasury, and operate global crypto payments with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button isDark={isDark}>Book a Demo</Button>
              <Button variant="secondary" isDark={isDark}>Talk to Sales</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className={cn("border-t", isDark ? "border-white/5" : "border-slate-300/30")}>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_2.5fr]">
            <div>
              <CryptoRailsLogo isDark={isDark} />
              <p className={cn("mt-3 max-w-xs text-sm leading-5", isDark ? "text-slate-400" : "text-slate-500")}>
                Modern crypto payment gateway infrastructure for businesses that need segregated wallets, secure treasury flows, and scalable fund consolidation.
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className={cn("flex h-7 w-7 cursor-pointer items-center justify-center rounded border transition", isDark ? "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300" : "border-slate-300/40 bg-white/60 text-slate-500 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:text-slate-700")}>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className={cn("flex h-7 w-7 cursor-pointer items-center justify-center rounded border transition", isDark ? "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300" : "border-slate-300/40 bg-white/60 text-slate-500 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:text-slate-700")}>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className={cn("flex h-7 w-7 cursor-pointer items-center justify-center rounded border transition", isDark ? "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300" : "border-slate-300/40 bg-white/60 text-slate-500 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-400 hover:text-slate-700")}>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <FooterColumn
                title="Product"
                isDark={isDark}
                items={[
                  { label: "Segregated Wallets", href: "#product" },
                  { label: "Fund Consolidation", href: "#product" },
                  { label: "Treasury Management", href: "#product" },
                  { label: "Real-time Monitoring", href: "#product" },
                ]}
              />
              <FooterColumn
                title="Developers"
                isDark={isDark}
                items={[
                  { label: "Documentation", href: "#developers" },
                  { label: "API Reference", href: "#developers" },
                  { label: "Webhooks Guide", href: "#developers" },
                  { label: "SDK Libraries", href: "#developers" },
                ]}
              />
              <FooterColumn
                title="Solutions"
                isDark={isDark}
                items={[
                  { label: "Payment Processors", href: "#solutions" },
                  { label: "OTC Desks", href: "#solutions" },
                  { label: "Crypto Exchanges", href: "#solutions" },
                  { label: "Gaming Platforms", href: "#solutions" },
                ]}
              />
              <FooterColumn
                title="Resources"
                isDark={isDark}
                items={[
                  { label: "How it Works", href: "#how-it-works" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Blog", href: "#" },
                  { label: "System Status", href: "#" },
                ]}
              />
              <FooterColumn
                title="Legal"
                isDark={isDark}
                items={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                  { label: "AML Policy", href: "#" },
                  { label: "Cookie Policy", href: "#" },
                ]}
              />
            </div>
          </div>

          <div className={cn("mt-8 flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between", isDark ? "border-slate-800 text-slate-500" : "border-slate-300/30 text-slate-500")}>
            <div>© 2026 CryptoRails. All rights reserved.</div>
            <div>Built for scale. Secured for trust.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
