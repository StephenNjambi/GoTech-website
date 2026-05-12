import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Counter } from './motion';

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      };

  const image = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }
    : {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease } },
      };

  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient text-white pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pb-28">
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] bg-grid-pattern"
        style={{ backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -top-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { x: [0, 20, 0], y: [0, -10, 0] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-700/30 blur-3xl"
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { x: [0, -20, 0], y: [0, 10, 0] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container-page grid lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div variants={item}>
          <motion.span variants={item} className="eyebrow text-brand-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
            Engineering digital growth
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-[1.05] text-white"
          >
            Build a smarter business with{' '}
            <span className="bg-gradient-to-r from-brand-300 via-white to-brand-200 bg-clip-text text-transparent">
              modern technology
            </span>
          </motion.h1>
          <motion.p variants={item} className="mt-5 text-base sm:text-lg text-white/75 max-w-xl">
            GoTech partners with ambitious teams to design, build, and scale software,
            websites, and cloud platforms that move metrics — not just ship features.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/ServicesPage" className="gt-btn-primary">
              Explore services
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
            <Link to="/Contact" className="gt-btn-ghost-light">
              Book a consultation
            </Link>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md"
          >
            <div>
              <dt className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">Projects</dt>
              <dd className="mt-1 text-xl sm:text-2xl font-bold text-white">
                <Counter value={120} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">Countries</dt>
              <dd className="mt-1 text-xl sm:text-2xl font-bold text-white">
                <Counter value={18} />
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60">Retention</dt>
              <dd className="mt-1 text-xl sm:text-2xl font-bold text-white">
                <Counter value={97} suffix="%" />
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div variants={image} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/30 to-brand-800/40 blur-2xl" />
          <motion.div
            className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
              alt="A team collaborating around laptops on a modern product"
              className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur px-4 py-3 ring-1 ring-white/20">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700">
                  <i className="fa-solid fa-bolt" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold leading-tight">Ship 3x faster</p>
                  <p className="text-white/70 text-xs">Senior engineers, product-led delivery</p>
                </div>
              </div>
              <Link to="/About" className="text-white/90 text-sm hover:text-white">
                Learn more <i className="fa-solid fa-arrow-right text-[10px] ml-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
