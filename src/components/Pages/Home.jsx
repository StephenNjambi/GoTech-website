import React from 'react';
import Hero from '../Hero';
import Partners from '../Partners';
import Cta from '../Cta';
import OpenSource from '../OpenSource';
import WhyUs from '../WhyUs';
import Stats from '../Stats';
import Techstack from '../Techstack';
import Testimonials from '../Testimonials';
import FinalCta from '../FinalCta';

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Cta />
      <OpenSource />
      <WhyUs />
      <Stats />
      <Techstack />
      <Testimonials />
      <FinalCta />
    </>
  );
}

export default Home;
