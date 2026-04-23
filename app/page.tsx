"use client";

import React, { useMemo, useState } from "react";

const navGroups = [
  {
    label: "Product",
    items: [
      {
        title: "Segregated Wallets",
        description: "Generate unique deposit wallets for every user or transaction.",
      },
      {
        title: "Fund Consolidation",
        description: "Automatically consolidate balances into your treasury wallet.",
      },
      {
        title: "Real-time Monitoring",
        description: "Track deposits, confirmations, and payment statuses in real time.",
      },
      {
        title: "Treasury Control",
        description: "Improve reporting, reconciliation, and operational visibility.",
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        title: "Payment Processors",
        description: "Launch scalable crypto payment flows with structured wallet architecture.",
      },
      {
        title: "OTC Desks",
        description: "Manage client deposits and treasury flows with more control.",
      },
      {
        title: "Marketplaces",
        description: "Accept crypto payments and simplify reconciliation workflows.",
      },
      {
        title: "Fintech Platforms",
        description: "Support stablecoin settlement and multi-chain treasury operations.",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        title: "API Reference",
        description: "Wallet creation, payment tracking, consolidation, and balances.",
      },
      {
        title: "Webhooks",
        description: "Receive deposit and treasury events in real time.",
      },
      {
        title: "Documentation",
        description: "Implementation guides for faster integration.",
      },
      {
        title: "Sandbox",
        description: "Test safely before going live.",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        title: "FAQ",
        description: "Answers about crypto payment gateways and wallet infrastructure.",
      },
      {
        title: "Security",
        description: "Operational controls and infrastructure best practices.",
      },
      {
        title: "Status",
        description: "Platform reliability and uptime information.",
      },
      {
        title: "Blog",
        description: "SEO content, product updates, and crypto payment insights.",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        title: "About",
        description: "Learn more about CryptoRails and our mission.",
      },
      {
        title: "Contact",
        description: "Talk to sales, partnerships, or support.",
      },
      {
        title: "Careers",
        description: "Join the team building modern crypto payment infrastructure.",
      },
      {
        title: "Legal",
        description: "Privacy, terms, AML policy, and disclosures.",
      },
    ],
  },
];

const featureCards = [
  {
    title: "Segregated Wallets",
    description:
      "Generate unique deposit wallets for each user, merchant, invoice, or transaction. Improve tracking, reduce reconciliation errors, and support scalable crypto payment operations.",
  },
  {
    title: "Automated Fund Consolidation",
    description:
      "Automatically consolidate funds from distributed wallets into your treasury wallet with flexible rules, thresholds, and scheduling.",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Track deposits, confirmations, and payment statuses in real time across supported blockchain networks and stablecoin payment flows.",
  },
  {
    title: "Multi-chain & Stablecoin Support",
    description:
      "Support major blockchains and digital assets including USDT, USDC, BTC, and ETH for global crypto payment processing.",
  },
  {
    title: "Crypto Payment API",
    description:
      "Integrate wallet creation, payment tracking, treasury workflows, and fund consolidation through developer-friendly APIs and webhooks.",
  },
  {
    title: "Enterprise-grade Security",
    description:
      "Built for secure crypto payment infrastructure with operational controls and wallet architecture designed for trust and scale.",
  },
];

const solutions = [
  {
    title: "Payment Processors",
    description:
      "Launch a scalable crypto payment gateway with structured wallet flows, cleaner reconciliation, and treasury visibility.",
  },
  {
    title: "OTC Desks",
    description:
      "Manage client deposits, monitor incoming transfers, and consolidate funds efficiently into treasury wallets.",
  },
  {
    title: "Trading Platforms",
    description:
      "Offer users a seamless deposit experience with wallet-per-user crypto payment infrastructure.",
  },
  {
    title: "Marketplaces",
    description:
      "Accept crypto payments and simplify reconciliation with segregated wallets and automated treasury consolidation.",
  },
  {
    title: "Gaming Platforms",
    description:
      "Handle high-volume crypto payment processing with clearer tracking, faster monitoring, and reliable fund movement.",
  },
  {
    title: "Fintech & Global Businesses",
    description:
      "Use modern crypto payment infrastructure for stablecoin settlement, treasury management, and multi-chain operations.",
  },
];

const steps = [
  {
    number: "01",
    title: "Generate Wallets",
    description:
      "Create unique deposit wallet addresses for each user, merchant, invoice, or transaction flow.",
  },
  {
    number: "02",
    title: "Receive Crypto Payments",
    description:
      "Accept payments in USDT, BTC, ETH, and other supported digital assets across multiple blockchain networks.",
  },
  {
    number: "03",
    title: "Monitor & Verify",
    description:
      "Track blockchain activity and confirm incoming payments in real time with full operational visibility.",
  },
  {
    number: "04",
    title: "Consolidate Funds",
    description:
      "Automatically consolidate funds into a secure treasury wallet for simpler reconciliation and treasury management.",
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

function CryptoRailsLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
        <div className="absolute h-5 w-5 rounded-md border border-blue-400/50" />
        <div className="absolute h-2.5 w-8 rounded-full border border-cyan-300/40" />
      </div>
      <span className="text-xl font-semibold tracking-tight text-slate-50">
        CryptoRails
      </span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return variant === "primary" ? (
    <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500">
      {children}
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 10h10M11 6l4 4-4 4" />
      </svg>
    </button>
  ) : (
    <button className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-600 hover:bg-white/[0.04]">
      {children}
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { title: string; description: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-white">
        {label}
        <svg
          viewBox="0 0 20 20"
          className={cn("h-4 w-4 transition", open && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 7.5 10 12.5 15 7.5" />
        </svg>
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 mt-4 w-[560px] -translate-x-1/2 rounded-3xl border border-slate-800 bg-[#0A1222]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl transition",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <a
              key={item.title}
              href="#"
              className="rounded-2xl border border-slate-800 bg-white/[0.02] p-4 transition hover:border-slate-700 hover:bg-white/[0.04]"
            >
              <div className="text-sm font-semibold text-slate-100">{item.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-white/[0.02] p-5">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_35%)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-[#0A1222]/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <CryptoRailsLogo />
          <div className="hidden gap-2 sm:flex">
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400">
              Live
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400">
              Overview
            </div>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
          <div className="border-b border-slate-800 p-4 lg:border-b-0 lg:border-r">
            <div className="space-y-2">
              {[
                "Dashboard",
                "Wallets",
                "Deposits",
                "Consolidation",
                "Transactions",
                "Treasury",
                "API & Webhooks",
                "Reports",
                "Settings",
              ].map((item, idx) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    idx === 0
                      ? "border border-blue-500/20 bg-blue-500/10 text-blue-300"
                      : "text-slate-400"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Total Volume (30d)", value: "$12,483,920", change: "+12.4%" },
                { label: "Active Wallets", value: "8,421", change: "+8.7%" },
                { label: "Pending Deposits", value: "312", change: "-3.3%" },
                { label: "Treasury Balance", value: "$3,294,120", change: "+11.1%" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <div className="text-xs text-slate-500">{card.label}</div>
                  <div className="mt-3 text-2xl font-semibold text-slate-50">{card.value}</div>
                  <div className="mt-1 text-xs text-emerald-400">{card.change}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[1.25fr_0.85fr]">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-200">Fund Consolidation Flow</div>
                    <div className="text-xs text-slate-500">
                      Segregated wallets routing into treasury
                    </div>
                  </div>
                  <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[180px_1fr_160px]">
                  <div className="space-y-3">
                    {["Wallet #A91K", "Wallet #B34L", "Wallet #C7TM", "Wallet #D92P", "Wallet #ET1Q"].map(
                      (wallet) => (
                        <div
                          key={wallet}
                          className="rounded-xl border border-slate-800 bg-[#0B1426] px-3 py-3 text-sm text-slate-300"
                        >
                          {wallet}
                        </div>
                      )
                    )}
                  </div>

                  <div className="relative hidden min-h-[220px] md:block">
                    <svg className="h-full w-full" viewBox="0 0 320 220" fill="none">
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                      {[
                        [20, 28, 248, 110],
                        [20, 70, 248, 110],
                        [20, 110, 248, 110],
                        [20, 150, 248, 110],
                        [20, 192, 248, 110],
                      ].map(([x1, y1, x2, y2], i) => (
                        <path
                          key={i}
                          d={`M${x1} ${y1} C120 ${y1}, 180 ${y1}, ${x2} ${y2}`}
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                        />
                      ))}
                      <circle cx="252" cy="110" r="12" fill="#2563EB" fillOpacity="0.2" />
                      <circle cx="252" cy="110" r="5" fill="#22D3EE" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-full rounded-2xl border border-blue-500/20 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),rgba(13,27,42,0.95))] p-5 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <rect x="4" y="6" width="16" height="12" rx="3" />
                          <path d="M14 12h.01" />
                        </svg>
                      </div>
                      <div className="text-sm text-slate-300">Treasury Wallet</div>
                      <div className="mt-2 text-xs text-slate-500">0xf...7a3e</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-200">Recent Activity</div>
                    <div className="text-xs text-slate-500">Latest payment events</div>
                  </div>
                  <span className="text-xs text-blue-300">View all</span>
                </div>

                <div className="space-y-3">
                  {[
                    { color: "bg-emerald-400", title: "+ 120 USDT", meta: "Received in Wallet #A91K", time: "2m ago" },
                    { color: "bg-amber-400", title: "+ 0.5 BTC", meta: "Received in Wallet #F302", time: "4m ago" },
                    { color: "bg-sky-400", title: "+ 2,000 USDC", meta: "Received in Wallet #C7TM", time: "6m ago" },
                    { color: "bg-violet-400", title: "Consolidation completed", meta: "14 wallets moved to treasury", time: "8m ago" },
                    { color: "bg-cyan-400", title: "+ 10 ETH", meta: "Received in Wallet #D92P", time: "10m ago" },
                  ].map((item) => (
                    <div
                      key={item.title + item.time}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0B1426] px-3 py-3"
                    >
                      <div className={`mt-1 h-2.5 w-2.5 rounded-full ${item.color}`} />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-slate-200">{item.title}</div>
                        <div className="truncate text-xs text-slate-500">{item.meta}</div>
                      </div>
                      <div className="text-xs text-slate-500">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-800 bg-white/[0.02]">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-medium text-slate-100">{question}</span>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-700 text-slate-400">
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <div className="px-5 pb-5 text-sm leading-6 text-slate-400">{answer}</div>
      ) : null}
    </div>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-slate-400">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="transition hover:text-slate-200">
              {item}
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

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%),linear-gradient(180deg,#050816_0%,#07111F_50%,#050816_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <CryptoRailsLogo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navGroups.map((group) => (
              <NavDropdown key={group.label} label={group.label} items={group.items} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden text-sm text-slate-300 transition hover:text-white sm:inline-flex">
              Log in
            </button>
            <Button>Book a Demo</Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.02fr_1fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Crypto Payment Infrastructure
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
              Crypto Payment Gateway Infrastructure for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                global businesses
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-400">
              CryptoRails is a modern crypto payment gateway and wallet
              infrastructure platform that enables businesses to accept crypto
              payments, generate segregated deposit wallets, and automatically
              consolidate funds into a secure treasury wallet. Built for scalable
              USDT and multi-chain payment processing.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <Button>Book a Demo</Button>
              <Button variant="secondary">Explore the Docs</Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Enterprise-grade security
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                99.99% system uptime
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Global coverage, local support
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:pl-4">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
            Trusted by innovative companies worldwide
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {trustedLogos.map((logo, idx) => (
              <div
                key={logo}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                {idx % 3 === 0 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
                {idx % 3 === 1 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )}
                {idx % 3 === 2 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                )}
                <span className="font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why CryptoRails"
              title="A scalable crypto payment gateway for modern businesses"
              description="CryptoRails provides a full-stack crypto payment gateway designed for businesses that need reliable, scalable, and structured payment infrastructure."
            />
            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-400">
              <p>
                Unlike traditional crypto payment solutions, CryptoRails uses a
                segregated wallet architecture, allowing each user, transaction, or
                merchant to receive payments through a unique wallet address.
              </p>
              <p>
                This approach improves payment tracking, reconciliation, and operational
                efficiency, making it ideal for high-volume crypto payment processing
                across industries such as fintech, trading platforms, marketplaces,
                and gaming platforms.
              </p>
              <p>
                CryptoRails also enables automatic fund consolidation, allowing
                businesses to move assets from multiple wallets into a central
                treasury wallet efficiently.
              </p>
              <p>
                Whether you are processing USDT payments, stablecoin settlements, or
                multi-chain crypto transactions, CryptoRails delivers the infrastructure
                needed to manage funds securely and efficiently.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="text-center text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
          How our crypto payment gateway works
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-[calc(50%+32px)] top-8 hidden h-[2px] w-[calc(100%-64px)] lg:block">
                  <div className="h-full w-full border-t-2 border-dashed border-slate-700" />
                  <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400/60" />
                </div>
              )}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700 bg-[#0A1222]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-300">
                  {step.number}
                </div>
              </div>
              <h3 className="text-base font-semibold text-slate-100">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Built for businesses
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Moving crypto at scale
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              From payment processors to marketplaces, CryptoRails supports teams that need structured crypto payment infrastructure, wallet control, and treasury consolidation.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl border border-slate-800 bg-white/[0.02] p-5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 text-blue-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="4" y="5" width="16" height="14" rx="3" />
                    <path d="M8 10h8" />
                    <path d="M8 14h5" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">{solution.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-blue-500/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(6,16,31,0.95))] p-5"
            >
              <div className="text-2xl font-semibold text-cyan-300">{stat.value}</div>
              <div className="mt-2 text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
          <div className="rounded-2xl border border-slate-800 bg-white/[0.02] p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-slate-100">Built for global businesses</div>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Trusted for scalable crypto payment processing, treasury visibility, and secure wallet infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Developers"
              title="API-first. Developer ready."
              description="Integrate wallet creation, payment tracking, fund consolidation, and webhooks in minutes with a programmable crypto payment infrastructure layer."
            />
            <div className="mt-8">
              <Button>Explore API Docs</Button>
            </div>

            <div className="mt-8 space-y-3">
              {[
                {
                  title: "Sandbox Environment",
                  desc: "Test your crypto payment gateway integration safely before going live.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  ),
                },
                {
                  title: "Detailed Documentation",
                  desc: "Everything your team needs to integrate wallet flows and treasury workflows quickly.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  ),
                },
                {
                  title: "24/7 Developer Support",
                  desc: "Technical help for integration, monitoring, and payment infrastructure operations.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-white/[0.02] p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-blue-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-100">{item.title}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-[#0A1222] p-5 sm:p-6">
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              {["Wallets", "Payments", "Consolidation", "Webhooks", "Balances"].map(
                (tab, idx) => (
                  <div
                    key={tab}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm",
                      idx === 0
                        ? "border border-blue-500/20 bg-blue-500/10 text-blue-300"
                        : "text-slate-400"
                    )}
                  >
                    {tab}
                  </div>
                )
              )}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#06101F] p-5">
              <div className="mb-4 text-sm text-slate-400">POST /wallets/create</div>
              <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`{
  "label": "Customer #12345",
  "callback_url": "https://yourdomain.com/webhook",
  "chain": "TRC20",
  "asset": "USDT"
}`}
              </pre>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                "Wallet-per-user architecture",
                "Webhook event delivery",
                "Programmable consolidation rules",
              ].map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-slate-800 bg-white/[0.02] p-4 text-sm leading-7 text-slate-400"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 text-center text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
          Frequently asked questions
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="overflow-hidden rounded-[32px] border border-blue-500/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(10,18,34,0.98)_42%,rgba(34,211,238,0.08))] px-8 py-12 shadow-[0_20px_60px_rgba(37,99,235,0.12)] sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Upgrade your crypto payment infrastructure
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Launch segregated wallet flows, automatically consolidate funds
                into your treasury, and operate global crypto payments with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button>Book a Demo</Button>
              <Button variant="secondary">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_2.5fr]">
            <div>
              <CryptoRailsLogo />
              <p className="mt-4 max-w-xs text-xs leading-6 text-slate-400">
                Modern crypto payment gateway infrastructure for businesses that need segregated wallets, secure treasury flows, and scalable fund consolidation.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-slate-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-slate-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-slate-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <FooterColumn
                title="Product"
                items={["Wallets", "Consolidation", "Monitoring", "API & Webhooks"]}
              />
              <FooterColumn
                title="Developers"
                items={["Documentation", "API Reference", "Webhooks", "Status"]}
              />
              <FooterColumn
                title="Solutions"
                items={["Payment Processors", "OTC Desks", "Marketplaces", "Fintech"]}
              />
              <FooterColumn
                title="Company"
                items={["About Us", "Careers", "Contact", "Blog"]}
              />
              <FooterColumn
                title="Legal"
                items={["Privacy Policy", "Terms of Service", "AML Policy", "Risk Disclosure"]}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 CryptoRails. All rights reserved.</div>
            <div>Built for scale. Secured for trust.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
