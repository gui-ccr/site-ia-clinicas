import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/Hero/HeroSection';
import { AboutSection } from './components/About/AboutSection';
import { FeaturesSection } from './components/Features/FeaturesSection';
import { PricingSection } from './components/Pricing/PricingSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { DecorativeElements } from './components/layout/DecorativeElements';
import { Success } from './pages/Success';
import styles from './styles/App.module.css';

function LandingPage() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <DecorativeElements />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sucesso" element={<Success />} />
    </Routes>
  );
}