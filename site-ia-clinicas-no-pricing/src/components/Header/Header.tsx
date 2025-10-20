import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenu } from './MobileMenu';
import styles from '../../styles/components/Header.module.css';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Logo />
          <DesktopMenu />
          <MobileMenuButton 
            isOpen={mobileMenuOpen} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          />
        </div>
        {mobileMenuOpen && <MobileMenu />}
      </nav>
    </header>
  );
};
