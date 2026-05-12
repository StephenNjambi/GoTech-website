import React from 'react';
import { Reveal, RevealGroup, RevealItem, Counter } from './motion';

const stats = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 60, suffix: '+', label: 'Active clients' },
  { value: 18, suffix: '', label: 'Countries served' },
  { value: 97, suffix: '%', label: 'Client retention' },
];

const Stats = () => {
  return (
    <section className="bg-white">
      <div className="container-page py-12">
        <Reveal className="gt-card px-6 sm:px-10 py-10 bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-ring">
          <RevealGroup
            stagger={0.1}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm uppercase tracking-widest text-white/75">
                  {s.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
};

export default Stats;
