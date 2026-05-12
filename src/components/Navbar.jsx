import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/About', label: 'About' },
  { to: '/ServicesPage', label: 'Services' },
  { to: '/Contact', label: 'Contact' },
];

function Navbar({ forceSolid = false }) {
  const [scrolledState, setScrolledState] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const scrolled = forceSolid || scrolledState;

  useEffect(() => {
    const onScroll = () => setScrolledState(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur border-b border-ink-700/5 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-soft">
            G
          </span>
          <span
            className={`font-display text-lg font-extrabold tracking-tight ${
              scrolled ? 'text-ink-900' : 'text-white'
            }`}
          >
            GoTech
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition ${
                    isActive
                      ? scrolled
                        ? 'bg-brand-50 text-brand-700'
                        : 'bg-white/15 text-white'
                      : scrolled
                      ? 'text-ink-700 hover:text-ink-900 hover:bg-ink-700/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div
            className={`flex items-center gap-3 text-sm ${
              scrolled ? 'text-ink-600' : 'text-white/80'
            }`}
          >
            <a aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <i className="fab fa-facebook-f" />
            </a>
            <a aria-label="Twitter" href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <i className="fab fa-twitter" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <Link to="/Contact" className="gt-btn-primary !py-2 !px-4">
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg transition ${
            scrolled ? 'text-ink-900 hover:bg-ink-700/5' : 'text-white hover:bg-white/10'
          }`}
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-lg`} />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-white' : 'bg-ink-900/95 backdrop-blur'}`}
      >
        <ul className="container-page py-4 space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive
                      ? scrolled
                        ? 'bg-brand-50 text-brand-700'
                        : 'bg-white/10 text-white'
                      : scrolled
                      ? 'text-ink-700 hover:bg-ink-700/5'
                      : 'text-white/85 hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/Contact" className="gt-btn-primary w-full justify-center">
              Get a quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
