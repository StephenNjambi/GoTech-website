import React from 'react';
import { Link } from 'react-router-dom';
import Stats from '../Stats';
import FinalCta from '../FinalCta';
import { Reveal, RevealGroup, RevealItem, scaleIn } from '../motion';

const ceoImage =
  'https://cdn.pixabay.com/photo/2019/12/05/13/09/business-4675105_640.png';
const managerImage =
  'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=800&auto=format&fit=crop';
const productChampionImage =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop';

const pillars = [
  {
    title: 'Our Vision',
    icon: 'fa-eye',
    accent: 'text-brand-600 bg-brand-50 ring-brand-100',
    body:
      'To be the leading provider of innovative and effective business solutions — empowering teams to thrive in the digital era.',
  },
  {
    title: 'Our Mission',
    icon: 'fa-bullseye',
    accent: 'text-amber-600 bg-amber-50 ring-amber-100',
    body:
      'We deliver tailored, cutting-edge software and platforms that drive growth, elevate user experiences, and exceed client expectations.',
  },
  {
    title: 'Our Values',
    icon: 'fa-heart',
    accent: 'text-emerald-600 bg-emerald-50 ring-emerald-100',
    body:
      'Integrity, innovation, collaboration, customer-centricity, and excellence guide every decision — and every line of code we ship.',
  },
];

const principles = [
  {
    icon: 'fa-compass',
    title: 'Customer-first thinking',
    text: 'We start with your customer\'s problem and work backward to the simplest solution.',
  },
  {
    icon: 'fa-recycle',
    title: 'Open-source by default',
    text: 'Where it makes sense, we customize battle-tested OSS so you own your stack — no lock-in.',
  },
  {
    icon: 'fa-bolt',
    title: 'Outcomes over output',
    text: 'Real KPIs, not ticket counts. We optimize for business impact, not busywork.',
  },
  {
    icon: 'fa-handshake-angle',
    title: 'Long-term partnership',
    text: 'We build relationships, not invoices. Teams stay engaged long after launch.',
  },
];

const team = [
  {
    name: 'Dr. Julie Morgan',
    role: 'Chief Executive Officer',
    image: ceoImage,
    bio: 'PhD in Business Administration with 10+ years leading executive teams across strategy and growth.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: managerImage,
    bio: '8 years of managerial leadership focused on delivery, team performance, and client success.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Alex Johnson',
    role: 'Product Champion',
    image: productChampionImage,
    bio: "Master's in Product Management; 7 years shaping product strategy, UX, and innovation roadmaps.",
    socials: { linkedin: '#', twitter: '#' },
  },
];

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-hero-gradient text-white py-20 sm:py-28">
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
            About GoTech
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
            We build software that{' '}
            <span className="bg-gradient-to-r from-brand-300 via-white to-brand-200 bg-clip-text text-transparent">
              moves your business forward
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl">
            GoTech is a team of senior engineers, designers, and product thinkers helping
            ambitious organizations design, build, customize, and scale modern technology — from
            web and mobile to cloud and open-source platforms.
          </p>
        </Reveal>
      </section>

      {/* Our Story */}
      <section className="section-y bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              From a small studio to a global delivery team
            </h2>
            <div className="mt-6 space-y-4 text-ink-600 text-lg leading-relaxed">
              <p>
                GoTech was founded with a single idea: that technology should make running a
                business easier — not more complicated. We started by helping local teams build
                better websites, then grew into product engineering, cloud, and ITSM.
              </p>
              <p>
                Today we partner with startups, scale-ups, and enterprises across 18 countries —
                shipping software that drives real outcomes and customizing open-source platforms
                that put our clients firmly in control of their data and operations.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ServicesPage" className="gt-btn-primary">
                See our services <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
              <Link to="/Contact" className="gt-btn-secondary">
                Talk to the team
              </Link>
            </div>
          </Reveal>
          <Reveal variant={scaleIn} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/20 to-brand-800/20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-ink-700/10 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="GoTech team working together at a whiteboard"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="section-y bg-brand-50/40">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What drives us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Vision, mission, and values
            </h2>
            <p className="mt-4 text-ink-600 text-lg">
              The principles that shape how we make decisions, treat clients, and build software.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <RevealItem
                key={p.title}
                className="gt-card p-8 hover:-translate-y-1 hover:shadow-ring transition duration-300"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${p.accent}`}
                >
                  <i className={`fa-solid ${p.icon} text-lg`} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-ink-600 leading-relaxed">{p.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* How we work */}
      <section className="section-y bg-white">
        <div className="container-page">
          <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">How we work</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                Principles we live by on every engagement
              </h2>
            </div>
            <p className="lg:col-span-5 text-ink-600 text-lg">
              No two projects are alike, but the way we approach them rarely changes — these are
              the constants.
            </p>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p) => (
              <RevealItem
                key={p.title}
                className="gt-card p-6 hover:-translate-y-1 hover:shadow-ring transition duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <i className={`fa-solid ${p.icon}`} />
                </div>
                <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Stats />

      {/* Team */}
      <section id="team" className="section-y bg-white">
        <div className="container-page">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our people</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Meet the team</h2>
            <p className="mt-4 text-ink-600 text-lg">
              Senior, accountable, and genuinely curious — these are the people who'll own your
              engagement end-to-end.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6">
            {team.map((m) => (
              <RevealItem
                as="article"
                key={m.name}
                className="group gt-card overflow-hidden hover:-translate-y-1 hover:shadow-ring transition duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-700/5">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm font-semibold">{m.name}</p>
                      <p className="text-xs text-white/75">{m.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={m.socials.linkedin}
                        aria-label={`${m.name} on LinkedIn`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 backdrop-blur"
                      >
                        <i className="fab fa-linkedin-in text-xs" />
                      </a>
                      <a
                        href={m.socials.twitter}
                        aria-label={`${m.name} on Twitter`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 backdrop-blur"
                      >
                        <i className="fab fa-twitter text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ink-600 leading-relaxed">{m.bio}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FinalCta />
    </>
  );
};

export default AboutPage;
