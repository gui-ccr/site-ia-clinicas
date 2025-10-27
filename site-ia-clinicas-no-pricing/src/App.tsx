import { Header } from './components/Header/Header';
import { HeroSection } from './components/Hero/HeroSection';
import { AboutSection } from './components/About/AboutSection';
import { FeaturesSection } from './components/Features/FeaturesSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { DecorativeElements } from './components/layout/DecorativeElements';
import { ObjectionSection } from './components/ObjectSection/ObjectSection';
import { BenefitsTabsSection } from './components/BenefitsTabsSection/BenefitsTabsSection';
import { HeroSection2 } from './components/HeroSection2/HeroSection2';
import styles from './components/styles/App.module.css';

export default function LandingPage() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <HeroSection />
      <AboutSection />
      <HeroSection2 />
      <FeaturesSection />
      <ObjectionSection />
      <BenefitsTabsSection />
      <ContactSection />
      <Footer />
      <DecorativeElements />
    </div>
  );
}