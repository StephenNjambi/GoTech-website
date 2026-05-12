import React from 'react';
import { Link } from 'react-router-dom';
import OpenSource from '../OpenSource';
import FinalCta from '../FinalCta';
import { Reveal, RevealGroup, RevealItem } from '../motion';

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'Web Design & Development',
    description:
      'Conversion-focused websites and web apps built on modern stacks with great UX, performance, and SEO baked in.',
    bullets: ['Custom React / Next.js apps', 'Headless CMS integrations', 'Accessibility & i18n', 'SEO & Core Web Vitals'],
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Mobile App Development',
    description:
      'Native-quality iOS and Android apps — built once with React Native or natively when it matters.',
    bullets: ['React Native & Flutter', 'Native Swift / Kotlin', 'Offline-first sync', 'App store launch support'],
  },
  {
    icon: 'fa-cart-shopping',
    title: 'E-Commerce Solutions',
    description:
      'Scalable storefronts and checkout experiences that drive revenue and reduce drop-off.',
    bullets: ['Shopify, WooCommerce, Saleor', 'Payment & tax integrations', 'Subscription & B2B flows', 'Performance audits'],
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud & DevOps',
    description:
      'Reliable, automated infrastructure on AWS, GCP, and Azure — built for scale, security, and cost control.',
    bullets: ['IaC with Terraform', 'CI/CD pipelines', 'Kubernetes & containers', 'Monitoring & SRE'],
  },
  {
    icon: 'fa-brain',
    title: 'AI & Data',
    description:
      'Practical AI integrations, analytics, and ML pipelines that surface insight your team will actually use.',
    bullets: ['LLM-powered features', 'Data warehousing & ETL', 'Dashboards & BI', 'Forecasting & ML ops'],
  },
  {
    icon: 'fa-shield-halved',
    title: 'Cybersecurity',
    description:
      'Audits, hardening, and ongoing monitoring to keep your applications, data, and customers safe.',
    bullets: ['Pen tests & code review', 'Zero-trust architecture', 'Compliance (SOC2, ISO, GDPR)', '24/7 incident response'],
  },
  {
    icon: 'fa-chart-line',
    title: 'Digital Marketing',
    description:
      'SEO, content, and paid campaigns that turn traffic into qualified pipeline you can measure.',
    bullets: ['Technical & on-page SEO', 'Content & email', 'Paid acquisition', 'Analytics & attribution'],
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Managed Support',
    description:
      'Keep your platforms healthy with proactive maintenance, monitoring, and on-call engineering.',
    bullets: ['SLA-backed support', 'Patching & upgrades', 'Backup & DR', 'Cost optimization'],
  },
];

const processSteps = [
  {
    n: '01',
    icon: 'fa-magnifying-glass',
    title: 'Discovery',
    text: 'We dig into goals, users, constraints, and success metrics — then write a clear, honest plan.',
  },
  {
    n: '02',
    icon: 'fa-pen-ruler',
    title: 'Design',
    text: 'UX flows, wireframes, and pixel-perfect UI in Figma — iterated with you, not at you.',
  },
  {
    n: '03',
    icon: 'fa-code',
    title: 'Build',
    text: 'Small, senior teams ship weekly. You see progress live and steer as we go.',
  },
  {
    n: '04',
    icon: 'fa-rocket',
    title: 'Launch',
    text: 'QA, performance, security, and a smooth go-live with full handover and documentation.',
  },
  {
    n: '05',
    icon: 'fa-life-ring',
    title: 'Support',
    text: 'Ongoing monitoring, improvements, and an SLA-backed team that stays close to your business.',
  },
];

const engagements = [
  {
    name: 'Fixed-scope project',
    icon: 'fa-clipboard-check',
    description:
      'Clear deliverables and a fixed price. Best for well-defined launches, redesigns, and integrations.',
    points: ['Defined scope & budget', 'Milestone-based delivery', 'Production-ready handover'],
    cta: 'Best for: launches',
  },
  {
    name: 'Monthly retainer',
    icon: 'fa-calendar-check',
    description:
      'A senior team allocated to your roadmap each month — ideal for evolving products and platforms.',
    points: ['Predictable monthly cost', 'Flexible priorities', 'Roadmap & reporting cadence'],
    cta: 'Most popular',
    featured: true,
  },
  {
    name: 'Dedicated team',
    icon: 'fa-people-group',
    description:
      'A long-term squad embedded with your team — engineers, designers, and a delivery lead.',
    points: ['Cross-functional pod', 'Embedded in your stack', '6-month minimum'],
    cta: 'Best for: scale-ups',
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-hero-gradient text-white py-20 sm:py-28">
        <div
          className="absolute inset-0 -z-10 opacity-[0.08] bg-grid-pattern"
          style={{ backgroundSize: '40px 40px' }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-3xl"
          aria-hidden="true"
        />
        <Reveal className="container-page max-w-4xl">
          <span className="eyebrow text-brand-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
            Our services
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-brand-300 via-white to-brand-200 bg-clip-text text-transparent">
              design, build, and scale
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            One accountable team that covers strategy, design, engineering, cloud, security, and
            ongoing support — so you don't have to coordinate five different vendors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/Contact" className="gt-btn-primary">
              Start a project <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
            <a href="#process" className="gt-btn-ghost-light">
              See how we work
            </a>
          </div>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="section-y bg-white">
        <div className="container-page">
          <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                End-to-end services for modern teams
              </h2>
            </div>
            <p className="lg:col-span-5 text-ink-600 text-lg">
              Pick a single service or an integrated team — we'll match the engagement to your
              stage, budget, and timeline.
            </p>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <RevealItem
                as="article"
                key={s.title}
                className="group gt-card p-6 flex flex-col hover:-translate-y-1 hover:shadow-ring transition duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 group-hover:bg-brand-600 group-hover:text-white transition">
                  <i className={`fa-solid ${s.icon} text-lg`} />
                </div>
                <h3 className="mt-5 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-ink-700/5 pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-ink-600">
                      <i className="fa-solid fa-check text-brand-600 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-y bg-brand-50/40">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              A clear process from kickoff to launch
            </h2>
            <p className="mt-4 text-ink-600 text-lg">
              No mystery, no surprises. You always know what's happening and what's next.
            </p>
          </Reveal>

          <RevealGroup
            as="ol"
            stagger={0.1}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {processSteps.map((step, i) => (
              <RevealItem
                as="li"
                key={step.n}
                className="relative gt-card p-6 hover:-translate-y-1 hover:shadow-ring transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <i className={`fa-solid ${step.icon}`} />
                  </div>
                  <span className="font-display text-2xl font-extrabold text-brand-100">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{step.text}</p>
                {i < processSteps.length - 1 && (
                  <i className="hidden lg:block fa-solid fa-arrow-right absolute -right-4 top-1/2 -translate-y-1/2 text-brand-300" />
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-y bg-white">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Engagement models</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Work with us the way that fits
            </h2>
            <p className="mt-4 text-ink-600 text-lg">
              Three flexible ways to engage — pick one or evolve between them as your needs change.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <RevealItem
                as="article"
                key={e.name}
                className={`relative gt-card p-8 flex flex-col hover:-translate-y-1 transition duration-300 ${
                  e.featured ? 'ring-2 ring-brand-500 shadow-ring' : 'hover:shadow-ring'
                }`}
              >
                {e.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-600 text-white text-xs font-semibold px-3 py-1 shadow-soft">
                    <i className="fa-solid fa-star text-[10px]" /> {e.cta}
                  </span>
                )}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <i className={`fa-solid ${e.icon} text-lg`} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{e.name}</h3>
                <p className="mt-2 text-ink-600">{e.description}</p>
                <ul className="mt-5 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                      <i className="fa-solid fa-check text-brand-600 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {!e.featured && (
                  <p className="mt-6 text-xs uppercase tracking-widest text-ink-600">{e.cta}</p>
                )}
                <Link
                  to="/Contact"
                  className={`mt-6 ${e.featured ? 'gt-btn-primary' : 'gt-btn-secondary'} w-full justify-center`}
                >
                  Get started
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Open-source solutions */}
      <OpenSource />

      <FinalCta />
    </>
  );
};

export default ServicesPage;
