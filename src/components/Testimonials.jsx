import React from 'react';
import { Reveal, RevealGroup, RevealItem } from './motion';

const testimonials = [
  {
    quote:
      'GoTech rebuilt our checkout in six weeks. Conversions jumped 27% in the first month and our team finally has a platform we can iterate on with confidence.',
    name: 'Amelia Hart',
    role: 'VP Product, NorthRoute',
    avatar: 'https://i.pravatar.cc/96?img=47',
  },
  {
    quote:
      'A genuinely senior team. They asked the questions we hadn\'t thought of, shipped fast, and left us with code we are proud to own.',
    name: 'Daniel Okafor',
    role: 'CTO, Helio Energy',
    avatar: 'https://i.pravatar.cc/96?img=12',
  },
  {
    quote:
      'From discovery to launch, communication was the best we have ever had with an external partner. They feel like an extension of our team.',
    name: 'Priya Raman',
    role: 'Head of Engineering, BrightLedger',
    avatar: 'https://i.pravatar.cc/96?img=32',
  },
];

const Testimonials = () => {
  return (
    <section className="section-y bg-brand-50/40">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Client success</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            Teams around the world trust GoTech
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Real outcomes from real partnerships — here's what our clients say after we ship.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <RevealItem
              as="figure"
              key={t.name}
              className="gt-card p-6 flex flex-col justify-between hover:shadow-ring transition"
            >
              <blockquote className="text-ink-700 text-[15px] leading-relaxed">
                <i className="fa-solid fa-quote-left text-brand-200 text-2xl mb-3 block" />
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full ring-2 ring-white shadow-soft object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-ink-900 text-sm">{t.name}</div>
                  <div className="text-xs text-ink-600">{t.role}</div>
                </div>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default Testimonials;
