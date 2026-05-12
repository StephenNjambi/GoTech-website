import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, RevealGroup, RevealItem } from './motion';

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'Web Design & Development',
    description: 'High-performing websites and web apps built with modern stacks and great UX.',
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Mobile Applications',
    description: 'Native-quality iOS and Android apps that delight users and scale gracefully.',
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud & DevOps',
    description: 'Secure, scalable infrastructure on AWS, GCP, and Azure — automated end-to-end.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Digital Marketing',
    description: 'SEO, content, and paid campaigns that turn traffic into qualified pipeline.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Cybersecurity',
    description: 'Audits, hardening, and monitoring to keep your data and customers safe.',
  },
  {
    icon: 'fa-brain',
    title: 'AI & Data',
    description: 'Practical AI integrations and analytics that surface real business insight.',
  },
];

function Cta() {
  return (
    <section id="services" className="section-y bg-white">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              End-to-end services for modern, growing teams
            </h2>
            <p className="mt-4 text-ink-600 text-lg">
              From the first wireframe to production at scale — one partner, one accountable team.
            </p>
          </div>
          <Link to="/ServicesPage" className="gt-btn-secondary self-start md:self-auto">
            View all services <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <RevealItem
              as="article"
              key={s.title}
              className="group gt-card p-6 hover:-translate-y-1 hover:shadow-ring transition duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 group-hover:bg-brand-600 group-hover:text-white transition">
                <i className={`fa-solid ${s.icon} text-lg`} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-ink-600 text-sm leading-relaxed">{s.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                Learn more <i className="fa-solid fa-arrow-right text-[10px]" />
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default Cta;
