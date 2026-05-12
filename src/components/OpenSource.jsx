import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, RevealGroup, RevealItem } from './motion';

const solutions = [
  {
    icon: 'fa-users',
    title: 'HR Management',
    description:
      'Employee records, leave, attendance, performance reviews, and payroll — tailored to your policies.',
    tools: ['OrangeHRM', 'Sentrifugo', 'ERPNext HR'],
  },
  {
    icon: 'fa-headset',
    title: 'Support & Helpdesk',
    description:
      'Ticketing, SLAs, knowledge base, and omnichannel customer support deployed and themed for your brand.',
    tools: ['osTicket', 'Chatwoot', 'Zammad', 'FreeScout'],
  },
  {
    icon: 'fa-boxes-stacked',
    title: 'IT Asset Management',
    description:
      'Track hardware, software licenses, consumables, and check-outs across teams and locations.',
    tools: ['Snipe-IT', 'GLPI', 'Ralph'],
  },
  {
    icon: 'fa-wrench',
    title: 'Change & Incident Management',
    description:
      'ITIL-aligned ITSM — incident, problem, change, and CMDB — configured to fit your workflows.',
    tools: ['iTop', 'GLPI', 'Znuny', 'OTOBO'],
  },
  {
    icon: 'fa-handshake',
    title: 'CRM',
    description:
      'Unified pipeline, contacts, deals, and customer history — extended with your sales process.',
    tools: ['EspoCRM', 'SuiteCRM', 'Vtiger'],
  },
  {
    icon: 'fa-industry',
    title: 'ERP',
    description:
      'Finance, inventory, procurement, manufacturing, and projects on a single platform — your way.',
    tools: ['Odoo Community', 'ERPNext'],
  },
  {
    icon: 'fa-list-check',
    title: 'Project Management',
    description:
      'Plan, track, and ship work with kanban, Gantt, time tracking, and integrated reporting.',
    tools: ['OpenProject', 'Redmine', 'Taiga', 'Plane'],
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Learning Management',
    description:
      'Courses, assessments, certifications, and SCORM-ready content for staff or customers.',
    tools: ['Moodle', 'Open edX', 'Chamilo'],
  },
];

const OpenSource = () => {
  return (
    <section id="open-source" className="section-y bg-white">
      <div className="container-page">
        <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
              Open-source, customized for you
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Battle-tested platforms — branded, extended, and deployed for your business
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink-600 text-lg">
            We deploy and customize proven open-source software so you own your data, skip the
            license fees, and still get a polished product that fits how your team works.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
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
              <div className="mt-5 pt-4 border-t border-ink-700/5 flex flex-wrap gap-1.5">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-ink-700/5 text-ink-700 text-[11px] font-medium px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-brand-50/70 ring-1 ring-brand-100 p-6 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-ink-900">
              Don't see what you need? We've deployed dozens of others.
            </h3>
            <p className="mt-1 text-sm text-ink-600">
              Nextcloud, Mautic, Metabase, WordPress, WooCommerce, Keycloak, BookStack, and more —
              if it's open-source and proven, we'll make it work for you.
            </p>
          </div>
          <Link to="/Contact" className="gt-btn-primary shrink-0">
            Discuss your stack
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default OpenSource;
