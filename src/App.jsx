import useSectionNav from './hooks/useSectionNav';
import { NAV_LINKS } from './data/content';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Pitch from './components/Pitch';
import Industries from './components/Industries';
import Impact from './components/Impact';
import Differentiator from './components/Differentiator';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import HerAmbition from './components/HerAmbition';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';

const SECTION_IDS = NAV_LINKS.map((link) => link.href);

export default function App() {
  const { activeId, menuOpen, setMenuOpen } = useSectionNav(SECTION_IDS);

  return (
    <>
      <Navbar activeId={activeId} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <TrustedBy />
      <Solutions />
      <Process />
      <Pitch />
      <Industries />
      <Impact />
      <Differentiator />
      <WhyChoose />
      <Testimonials />
      <HerAmbition />
      <ContactCta />
      <Footer />
    </>
  );
}
