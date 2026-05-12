import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, scaleIn } from './motion';

const FinalCta = () => {
  return (
    <section id="contact" className="section-y bg-white">
      <div className="container-page">
        <Reveal
          variant={scaleIn}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-brand-900 to-brand-700 text-white px-6 sm:px-12 py-14 sm:py-20 shadow-ring"
        >
          <div
            className="absolute inset-0 -z-0 opacity-[0.08] bg-grid-pattern"
            style={{ backgroundSize: '40px 40px' }}
            aria-hidden="true"
          />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
              Ready to build something great?
            </h2>
            <p className="mt-4 text-white/75 text-lg">
              Tell us about your project — we'll come back within one business day with a clear
              next step, whether that's a roadmap, a proposal, or an honest "not us."
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/Contact" className="gt-btn-primary">
                Start a project <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
              <Link to="/ServicesPage" className="gt-btn-ghost-light">
                See how we work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;
