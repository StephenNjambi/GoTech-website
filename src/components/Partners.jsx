import React from 'react';
import { Reveal, RevealGroup, RevealItem, fadeIn } from './motion';

const partners = [
  { name: 'Vercel', icon: 'fa-vercel' },
  { name: 'AWS', icon: 'fa-aws' },
  { name: 'Google', icon: 'fa-google' },
  { name: 'Microsoft', icon: 'fa-microsoft' },
  { name: 'GitHub', icon: 'fa-github' },
  { name: 'Stripe', icon: 'fa-stripe' },
];

const Partners = () => {
  return (
    <section className="py-14 bg-white border-y border-ink-700/5">
      <div className="container-page">
        <Reveal as="p" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">
          Trusted by teams using
        </Reveal>
        <RevealGroup
          stagger={0.06}
          className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center"
        >
          {partners.map((p) => (
            <RevealItem
              variant={fadeIn}
              key={p.name}
              className="flex items-center gap-2 text-ink-600 hover:text-ink-900 transition opacity-80 hover:opacity-100"
              title={p.name}
            >
              <i className={`fab ${p.icon} text-3xl`} />
              <span className="hidden sm:inline font-display font-semibold tracking-tight">
                {p.name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default Partners;
