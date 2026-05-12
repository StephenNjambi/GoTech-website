import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/About' },
      { label: 'Services', to: '/ServicesPage' },
      { label: 'Contact', to: '/Contact' },
      { label: 'Careers', to: '/Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web development', to: '/ServicesPage' },
      { label: 'Mobile apps', to: '/ServicesPage' },
      { label: 'Cloud & DevOps', to: '/ServicesPage' },
      { label: 'AI & Data', to: '/ServicesPage' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case studies', to: '/About' },
      { label: 'Blog', to: '/' },
      { label: 'Privacy policy', to: '/' },
      { label: 'Terms of service', to: '/' },
    ],
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-soft">
                G
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">GoTech</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              GoTech helps ambitious teams design, build, and scale software, websites, and cloud
              platforms — engineered for growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fab fa-facebook-f text-sm" />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fab fa-twitter text-sm" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fab fa-linkedin-in text-sm" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className="fab fa-instagram text-sm" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>&copy; {year} GoTech. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <i className="fa-regular fa-envelope" />
            <a href="mailto:hello@gotech.example" className="hover:text-white">
              hello@gotech.example
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
