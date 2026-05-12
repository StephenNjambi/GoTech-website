import React from 'react';
import { Reveal, RevealGroup, RevealItem, scaleIn } from './motion';

const stack = [
  { name: 'React', icon: 'fa-react', color: 'text-sky-500', blurb: 'Modern, component-driven UIs' },
  { name: 'Node.js', icon: 'fa-node-js', color: 'text-green-600', blurb: 'High-throughput backend services' },
  { name: 'Python', icon: 'fa-python', color: 'text-yellow-600', blurb: 'Data, ML, and automation' },
  { name: 'AWS', icon: 'fa-aws', color: 'text-orange-500', blurb: 'Reliable cloud infrastructure' },
  { name: 'Docker', icon: 'fa-docker', color: 'text-sky-600', blurb: 'Containerized deployments' },
  { name: 'GitHub', icon: 'fa-github', color: 'text-ink-900', blurb: 'Source control & CI/CD' },
  { name: 'Figma', icon: 'fa-figma', color: 'text-pink-500', blurb: 'Design systems & prototyping' },
  { name: 'Android', icon: 'fa-android', color: 'text-green-500', blurb: 'Native mobile experiences' },
];

const Techstack = () => {
  return (
    <section className="section-y bg-gradient-to-b from-white to-brand-50/50">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our stack</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            Tools and platforms we build with
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            We use battle-tested, industry-standard technologies — chosen for performance,
            security, and long-term maintainability.
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stack.map((t) => (
            <RevealItem
              variant={scaleIn}
              key={t.name}
              className="group gt-card p-6 text-center hover:-translate-y-1 hover:shadow-ring transition duration-300"
            >
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-700/5 group-hover:bg-white ring-1 ring-ink-700/5 transition">
                <i className={`fab ${t.icon} text-3xl ${t.color}`} />
              </div>
              <h3 className="mt-4 text-base font-bold">{t.name}</h3>
              <p className="mt-1 text-xs text-ink-600">{t.blurb}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default Techstack;
