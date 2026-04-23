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

function Icon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    // Feature icons
    wallet: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M22 10H18a2 2 0 0 0 0 4h4" />
        <path d="M18 12h.01" />
        <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    consolidate: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 6h13M8 12h13M8 18h13" />
        <path d="M3 6l3 3-3 3" />
        <path d="M3 15l3 3-3 3" />
      </svg>
    ),
    monitor: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    chain: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
        <path d="M6 6.5L9.5 10M14.5 10L18 6.5M6 17.5L9.5 14M14.5 14L18 17.5" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    // Solution icons
    processor: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
    otc: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    trading: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    marketplace: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    gaming: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 12h4M8 10v4" />
        <circle cx="17" cy="10" r="1" />
        <circle cx="15" cy="14" r="1" />
        <rect x="2" y="6" width="20" height="12" rx="3" />
      </svg>
    ),
    fintech: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    // Step icons
    receive: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v14M5 10l7 7 7-7" />
        <path d="M5 22h14" />
      </svg>
    ),
  };
  
  return <>{icons[name] || icons.wallet}</>;
}

function CryptoRailsLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
        <div className="absolute h-3.5 w-3.5 rounded-sm border border-blue-400/50" />
        <div className="absolute h-1.5 w-5 rounded-full border border-cyan-300/40" />
      </div>
      <span className="text-base font-semibold tracking-tight text-slate-50">
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
    <button className="inline-flex items-center justify-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition hover:bg-blue-500">
      {children}
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 10h10M11 6l4 4-4 4" />
      </svg>
    </button>
  ) : (
    <button className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-slate-600 hover:bg-white/[0.04]">
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
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm">
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
      <button className="inline-flex items-center gap-1 text-xs text-slate-300 transition hover:text-white">
        {label}
        <svg
          viewBox="0 0 20 20"
          className={cn("h-3 w-3 transition", open && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 7.5 10 12.5 15 7.5" />
        </svg>
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 mt-3 w-[440px] -translate-x-1/2 rounded-xl border border-slate-800 bg-[#0A1222]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <a
              key={item.title}
              href="#"
              className="rounded-lg border border-slate-800 bg-white/[0.02] p-3 transition hover:border-slate-700 hover:bg-white/[0.04]"
            >
              <div className="text-xs font-semibold text-slate-100">{item.title}</div>
              <div className="mt-1 text-[11px] leading-5 text-slate-400">
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
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-white/[0.02] p-3">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-300">
        <Icon name={icon} className="h-4 w-4" />
      </div>
      <h3 className="text-xs font-semibold text-slate-100">{title}</h3>
      <p className="mt-1.5 text-[10px] leading-4 text-slate-400">{description}</p>
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
    <div className="rounded-lg border border-slate-800 bg-white/[0.02]">
      <button
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-xs font-medium text-slate-100">{question}</span>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-xs border border-slate-700 text-slate-400">
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <div className="px-4 pb-4 text-xs leading-5 text-slate-400">{answer}</div>
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
      <h3 className="text-xs font-semibold text-slate-100">{title}</h3>
      <ul className="mt-3 space-y-2 text-[11px] text-slate-400">
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <CryptoRailsLogo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navGroups.map((group) => (
              <NavDropdown key={group.label} label={group.label} items={group.items} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden text-xs text-slate-300 transition hover:text-white sm:inline-flex">
              Log in
            </button>
            <Button>Book a Demo</Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              Crypto Payment Infrastructure
            </div>

            <h1 className="max-w-xl text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
              Crypto Payment Gateway Infrastructure for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                global businesses
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-xs leading-6 text-slate-400 sm:text-sm">
              CryptoRails is a modern crypto payment gateway and wallet infrastructure platform that enables businesses to accept crypto payments, generate segregated deposit wallets, and automatically consolidate funds into a secure treasury wallet. Built for scalable USDT and multi-chain payment processing.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Book a Demo</Button>
              <Button variant="secondary">Explore the Docs</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Enterprise-grade security
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                99.99% system uptime
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Global coverage, local support
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:pl-4">
            <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-slate-800 bg-[#0A1222] shadow-xl shadow-blue-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tof8I6e63T99sEmSZ7Rr578b0zdDnt.png"
                alt="CryptoRails Admin Dashboard showing fund consolidation flow, wallet management, and real-time activity monitoring"
                className="relative w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
            Trusted by innovative companies worldwide
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustedLogos.map((logo, idx) => (
              <div
                key={logo}
                className="flex items-center gap-1.5 text-xs text-slate-400"
              >
                {idx % 3 === 0 && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
                {idx % 3 === 1 && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )}
                {idx % 3 === 2 && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
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

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why CryptoRails"
              title="A scalable crypto payment gateway for modern businesses"
              description="CryptoRails provides a full-stack crypto payment gateway designed for businesses that need reliable, scalable, and structured payment infrastructure."
            />
            <div className="mt-5 space-y-3 text-xs leading-5 text-slate-400">
              <p>
                Unlike traditional crypto payment solutions, CryptoRails uses a segregated wallet architecture, allowing each user, transaction, or merchant to receive payments through a unique wallet address.
              </p>
              <p>
                This approach improves payment tracking, reconciliation, and operational efficiency, making it ideal for high-volume crypto payment processing across industries such as fintech, trading platforms, marketplaces, and gaming platforms.
              </p>
              <p>
                CryptoRails also enables automatic fund consolidation, allowing businesses to move assets from multiple wallets into a central treasury wallet efficiently.
              </p>
              <p>
                Whether you are processing USDT payments, stablecoin settlements, or multi-chain crypto transactions, CryptoRails delivers the infrastructure needed to manage funds securely and efficiently.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="text-center text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
          How our crypto payment gateway works
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-[calc(50%+24px)] top-6 hidden h-[2px] w-[calc(100%-48px)] lg:block">
                  <div className="h-full w-full border-t-2 border-dashed border-slate-700" />
                  <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400/60" />
                </div>
              )}
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-[#0A1222]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-300">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xs font-semibold text-slate-100">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[180px] text-[10px] leading-4 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Built for businesses
            </div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Moving crypto at scale
            </h2>
            <p className="mt-3 text-xs leading-5 text-slate-400">
              From payment processors to marketplaces, CryptoRails supports teams that need structured crypto payment infrastructure, wallet control, and treasury consolidation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-xl border border-slate-800 bg-white/[0.02] p-3"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-blue-300">
                  <Icon name={solution.icon} className="h-4 w-4" />
                </div>
                <h3 className="text-xs font-semibold text-slate-100">{solution.title}</h3>
                <p className="mt-1.5 text-[10px] leading-4 text-slate-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-blue-500/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(6,16,31,0.95))] p-3"
            >
              <div className="text-lg font-semibold text-cyan-300">{stat.value}</div>
              <div className="mt-1 text-[10px] text-slate-400">{stat.label}</div>
            </div>
          ))}
          <div className="rounded-xl border border-slate-800 bg-white/[0.02] p-3">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-300">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="text-xs font-medium text-slate-100">Built for global businesses</div>
            <p className="mt-1 text-[10px] leading-4 text-slate-400">
              Trusted for scalable crypto payment processing, treasury visibility, and secure wallet infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Developers"
              title="API-first. Developer ready."
              description="Integrate wallet creation, payment tracking, fund consolidation, and webhooks in minutes with a programmable crypto payment infrastructure layer."
            />
            <div className="mt-5">
              <Button>Explore API Docs</Button>
            </div>

            <div className="mt-5 space-y-2">
              {[
                {
                  title: "Sandbox Environment",
                  desc: "Test your crypto payment gateway integration safely before going live.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  ),
                },
                {
                  title: "Detailed Documentation",
                  desc: "Everything your team needs to integrate wallet flows and treasury workflows quickly.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
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
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-lg border border-slate-800 bg-white/[0.02] p-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-blue-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-100">{item.title}</div>
                    <div className="mt-0.5 text-[10px] leading-4 text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0A1222] p-4">
            <div className="flex flex-wrap gap-1.5 border-b border-slate-800 pb-3">
              {["Wallets", "Payments", "Consolidation", "Webhooks", "Balances"].map(
                (tab, idx) => (
                  <div
                    key={tab}
                    className={cn(
                      "rounded-md px-2 py-1 text-[10px]",
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

            <div className="mt-4 overflow-hidden rounded-lg border border-slate-800 bg-[#06101F] p-3">
              <div className="mb-2 text-[10px] text-slate-400">POST /wallets/create</div>
              <pre className="overflow-x-auto text-[10px] leading-5 text-slate-300">
{`{
  "label": "Customer #12345",
  "callback_url": "https://yourdomain.com/webhook",
  "chain": "TRC20",
  "asset": "USDT"
}`}
              </pre>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                "Wallet-per-user architecture",
                "Webhook event delivery",
                "Programmable consolidation rules",
              ].map((note) => (
                <div
                  key={note}
                  className="rounded-lg border border-slate-800 bg-white/[0.02] p-2.5 text-[10px] leading-5 text-slate-400"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        <div className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
          Frequently asked questions
        </div>
        <div className="grid gap-2.5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8 lg:pb-16">
        <div className="overflow-hidden rounded-xl border border-blue-500/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(10,18,34,0.98)_42%,rgba(34,211,238,0.08))] px-6 py-8 shadow-[0_15px_40px_rgba(37,99,235,0.1)] sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_auto] lg:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Upgrade your crypto payment infrastructure
              </h2>
              <p className="mt-3 max-w-xl text-xs leading-5 text-slate-300 sm:text-sm">
                Launch segregated wallet flows, automatically consolidate funds into your treasury, and operate global crypto payments with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Book a Demo</Button>
              <Button variant="secondary">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_2.5fr]">
            <div>
              <CryptoRailsLogo />
              <p className="mt-3 max-w-xs text-[10px] leading-5 text-slate-400">
                Modern crypto payment gateway infrastructure for businesses that need segregated wallets, secure treasury flows, and scalable fund consolidation.
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-slate-300">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-slate-300">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-800 text-slate-400 transition hover:border-slate-700 hover:text-slate-300">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-800 pt-5 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 CryptoRails. All rights reserved.</div>
            <div>Built for scale. Secured for trust.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
