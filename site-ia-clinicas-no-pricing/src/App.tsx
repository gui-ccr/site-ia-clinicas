import { Header } from './components/Header/Header';
import { HeroSection } from './components/Hero/HeroSection';
import { AboutSection } from './components/About/AboutSection';
import { FeaturesSection } from './components/Features/FeaturesSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { DecorativeElements } from './components/layout/DecorativeElements';
import styles from './styles/App.module.css';

export default function LandingPage() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      <DecorativeElements />
    </div>
  );
}