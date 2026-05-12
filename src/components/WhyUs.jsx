import React from 'react';
import { Reveal, RevealGroup, RevealItem } from './motion';

const features = [
  {
    icon: 'fa-rocket',
    title: 'Faster time-to-market',
    description:
      'Lean, senior teams that ship working software in weeks — not months. Iterate live with your users.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Enterprise-grade security',
    description:
      'Best-practice authentication, encryption, and compliance baked in from day one.',
  },
  {
    icon: 'fa-people-group',
    title: 'A real partner, not a vendor',
    description:
      'Transparent communication, shared dashboards, and one accountable lead from kickoff to launch.',
  },
  {
    icon: 'fa-chart-pie',
    title: 'Outcomes over output',
    description:
      'We measure success by your business KPIs — conversions, revenue, retention — not lines of code.',
  },
];

const WhyUs = () => {
  return (
    <section className="section-y bg-ink-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] bg-grid-pattern"
        style={{ backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-80 w-[40rem] rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <Reveal>
            <span className="eyebrow text-brand-300">Why GoTech</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              The advantage of working with a team that has done it before
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              We've helped startups, scale-ups, and global enterprises modernize how they build
              software. Here's what changes when you work with us.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="gt-btn-primary">Explore services</a>
              <a href="#contact" className="gt-btn-ghost-light">Talk to an expert</a>
            </div>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <RevealItem
                key={f.title}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-400/30">
                  <i className={`fa-solid ${f.icon}`} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
