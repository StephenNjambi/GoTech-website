import React, { useEffect } from 'react';
import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
  animate as motionAnimate,
  useReducedMotion,
} from 'framer-motion';

const defaultEase = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: defaultEase } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: defaultEase } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: defaultEase } },
};

export const staggerParent = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/**
 * Reveal: fades + slides a single element into view on scroll.
 */
export function Reveal({
  as = 'div',
  variant = fadeUp,
  className,
  children,
  delay = 0,
  amount = 0.2,
  once = true,
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  const reduce = useReducedMotion();
  const resolved = reduce ? fadeIn : variant;
  const transition = resolved.visible?.transition
    ? { ...resolved.visible.transition, delay }
    : { delay };
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: resolved.hidden,
        visible: { ...resolved.visible, transition },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealGroup: parent that staggers RevealItem children when scrolled into view.
 */
export function RevealGroup({
  as = 'div',
  className,
  children,
  stagger = 0.08,
  delay = 0,
  amount = 0.15,
  once = true,
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerParent(stagger, delay)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealItem: a child inside a RevealGroup that animates per the variant.
 */
export function RevealItem({
  as = 'div',
  variant = fadeUp,
  className,
  children,
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  const reduce = useReducedMotion();
  const resolved = reduce ? fadeIn : variant;
  return (
    <Tag className={className} variants={resolved} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * Counter: animates from 0 to `value` when scrolled into view.
 * Renders an optional prefix and suffix (e.g. "+", "%", "$").
 */
export function Counter({ value, duration = 1.4, prefix = '', suffix = '', className }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.round(latest));
  const [display, setDisplay] = React.useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = motionAnimate(motionVal, value, {
      duration,
      ease: defaultEase,
    });
    return () => controls.stop();
  }, [inView, value, duration, motionVal, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/**
 * useReveal: imperative variant when you need to animate without wrapping markup.
 */
export function useReveal(amount = 0.2) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);
  return { ref, controls };
}
