import React, { useState } from 'react';
import { Reveal, RevealGroup, RevealItem } from '../motion';

const departments = [
  {
    icon: 'fa-briefcase',
    title: 'Sales',
    description: 'New projects, proposals, and engagement scoping.',
    email: 'sales@gotech.example',
    accent: 'text-brand-700 bg-brand-50 ring-brand-100',
  },
  {
    icon: 'fa-life-ring',
    title: 'Support',
    description: 'Help with an existing project or platform we deployed.',
    email: 'support@gotech.example',
    accent: 'text-emerald-700 bg-emerald-50 ring-emerald-100',
  },
  {
    icon: 'fa-circle-info',
    title: 'General',
    description: 'Partnerships, press, careers, and anything else.',
    email: 'hello@gotech.example',
    accent: 'text-amber-700 bg-amber-50 ring-amber-100',
  },
];

const offices = [
  {
    city: 'Nairobi · HQ',
    address: '123 Innovation Way, Westlands, Nairobi, Kenya',
    phone: '+254 700 000 000',
    hours: 'Mon – Fri · 9:00 – 18:00 EAT',
  },
  {
    city: 'Remote · Global',
    address: 'A distributed team operating across 18 countries.',
    phone: '+1 (555) 000-0000',
    hours: 'Coverage across all major time zones',
  },
];

const faqs = [
  {
    q: 'How quickly will you respond?',
    a: 'We reply to every inquiry within one business day — usually much faster.',
  },
  {
    q: 'Do you sign NDAs before discovery?',
    a: 'Yes. Send us yours, or we can share our standard mutual NDA on request.',
  },
  {
    q: 'What does a typical engagement cost?',
    a: 'Fixed-scope projects start around $15k. Retainers start at $8k/month. We scope each engagement transparently.',
  },
  {
    q: 'Do you work with non-profits or early-stage startups?',
    a: 'Yes — we offer reduced rates and equity-friendly arrangements case by case.',
  },
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  subject: 'General inquiry',
  message: '',
};

const subjects = [
  'General inquiry',
  'New project',
  'Open-source customization',
  'Support / maintenance',
  'Partnership',
  'Careers',
];

const ContactsPage = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-hero-gradient text-white py-16 sm:py-24">
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
            Contact us
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-[1.05] text-white">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-brand-300 via-white to-brand-200 bg-clip-text text-transparent">
              great together
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            Tell us about your project, your team, or just say hi. We reply within one business
            day with a clear next step.
          </p>
        </Reveal>
      </section>

      {/* Form + sidebar */}
      <section className="section-y bg-white">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <div className="gt-card p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold">Send us a message</h2>
              <p className="mt-2 text-ink-600">
                Share a few details and we'll come back with a recommended next step — a call, a
                proposal, or an honest "not us."
              </p>

              {submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-emerald-50 ring-1 ring-emerald-200 p-4 text-emerald-800">
                  <i className="fa-solid fa-circle-check mt-0.5" />
                  <div>
                    <p className="font-semibold">Thanks — message sent.</p>
                    <p className="text-sm">We'll get back to you within one business day.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-700">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white px-3.5 py-2.5 text-sm placeholder:text-ink-600/50 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-700">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white px-3.5 py-2.5 text-sm placeholder:text-ink-600/50 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-ink-700">
                    Company <span className="text-ink-600/60">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white px-3.5 py-2.5 text-sm placeholder:text-ink-600/50 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-700">
                    What's this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and what success looks like..."
                    className="mt-1.5 w-full rounded-xl border border-ink-700/10 bg-white px-3.5 py-2.5 text-sm placeholder:text-ink-600/50 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition resize-y"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-ink-600 order-2 sm:order-1">
                    By submitting, you agree to our privacy practices. We never share your data.
                  </p>
                  <button
                    type="submit"
                    className="gt-btn-primary w-full sm:w-auto order-1 sm:order-2"
                  >
                    Send message <i className="fa-solid fa-paper-plane text-xs" />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Sidebar */}
          <RevealGroup as="aside" className="lg:col-span-2 space-y-5">
            <RevealItem className="gt-card p-6">
              <span className="eyebrow">Direct lines</span>
              <h3 className="mt-2 text-lg font-bold">Reach us instantly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 shrink-0">
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <div>
                    <p className="text-ink-600">Email</p>
                    <a href="mailto:hello@gotech.example" className="font-semibold text-ink-900 hover:text-brand-700 break-all">
                      hello@gotech.example
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 shrink-0">
                    <i className="fa-solid fa-phone" />
                  </span>
                  <div>
                    <p className="text-ink-600">Phone</p>
                    <a href="tel:+254700000000" className="font-semibold text-ink-900 hover:text-brand-700">
                      +254 700 000 000
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 shrink-0">
                    <i className="fa-brands fa-whatsapp" />
                  </span>
                  <div>
                    <p className="text-ink-600">WhatsApp</p>
                    <a
                      href="https://wa.me/254700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink-900 hover:text-brand-700"
                    >
                      Chat with us
                    </a>
                  </div>
                </li>
              </ul>
            </RevealItem>

            <RevealItem className="gt-card p-6 bg-gradient-to-br from-brand-600 to-brand-800 text-white ring-0 shadow-ring">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                <i className="fa-regular fa-clock" /> Response time
              </span>
              <p className="mt-3 text-3xl font-extrabold text-white">{'< 24 hours'}</p>
              <p className="mt-2 text-sm text-white/80">
                Every inquiry gets a real reply from a human on our team — usually within hours.
              </p>
            </RevealItem>

            <RevealItem className="gt-card p-6">
              <span className="eyebrow">Follow us</span>
              <h3 className="mt-2 text-lg font-bold">Stay in the loop</h3>
              <div className="mt-4 flex items-center gap-2">
                {[
                  { icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/', label: 'LinkedIn' },
                  { icon: 'fa-twitter', href: 'https://twitter.com/', label: 'Twitter' },
                  { icon: 'fa-facebook-f', href: 'https://www.facebook.com/', label: 'Facebook' },
                  { icon: 'fa-instagram', href: 'https://www.instagram.com/', label: 'Instagram' },
                  { icon: 'fa-github', href: 'https://github.com/', label: 'GitHub' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink-700/5 text-ink-700 hover:bg-brand-600 hover:text-white ring-1 ring-ink-700/5 transition"
                  >
                    <i className={`fab ${s.icon}`} />
                  </a>
                ))}
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Departments */}
      <section className="section-y bg-brand-50/40">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Departments</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Reach the right team directly
            </h2>
            <p className="mt-4 text-ink-600 text-lg">
              Skip the routing. Email the team that owns your topic and get a faster answer.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6">
            {departments.map((d) => (
              <RevealItem
                as="article"
                key={d.title}
                className="gt-card p-6 hover:-translate-y-1 hover:shadow-ring transition duration-300"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${d.accent}`}
                >
                  <i className={`fa-solid ${d.icon} text-lg`} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{d.title}</h3>
                <p className="mt-2 text-ink-600 text-sm leading-relaxed">{d.description}</p>
                <a
                  href={`mailto:${d.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 break-all"
                >
                  {d.email} <i className="fa-solid fa-arrow-right text-[10px]" />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Offices + Map */}
      <section className="section-y bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <Reveal className="lg:col-span-2">
              <span className="eyebrow">Our offices</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Find us on the map</h2>
              <p className="mt-4 text-ink-600 text-lg">
                Headquartered in Nairobi, with a distributed team that covers every major time
                zone.
              </p>
              <div className="mt-8 space-y-4">
                {offices.map((o) => (
                  <div key={o.city} className="gt-card p-5">
                    <h3 className="text-base font-bold flex items-center gap-2">
                      <i className="fa-solid fa-location-dot text-brand-600" />
                      {o.city}
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-ink-600">
                      <li className="flex items-start gap-2">
                        <i className="fa-regular fa-building mt-1 text-ink-600/70" />
                        <span>{o.address}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-solid fa-phone mt-1 text-ink-600/70" />
                        <span>{o.phone}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="fa-regular fa-clock mt-1 text-ink-600/70" />
                        <span>{o.hours}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden ring-1 ring-ink-700/10 shadow-soft h-[320px] sm:h-[400px] lg:h-[460px]">
                <iframe
                  title="GoTech office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.798%2C-1.276%2C36.830%2C-1.255&layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-brand-50/40">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Common questions</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Before you reach out</h2>
            <p className="mt-4 text-ink-600 text-lg">
              Quick answers to the things people usually ask first.
            </p>
          </Reveal>

          <RevealGroup
            stagger={0.06}
            className="mt-12 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {faqs.map((f) => (
              <RevealItem
                as="details"
                key={f.q}
                className="group gt-card p-5 open:shadow-ring transition"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-base font-semibold text-ink-900">{f.q}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 group-open:rotate-45 transition">
                    <i className="fa-solid fa-plus text-xs" />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{f.a}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
