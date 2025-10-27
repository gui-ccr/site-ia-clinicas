import { NavLink } from './NavLink';
import styles from '../styles/components/Header.module.css';

export const MobileMenu = () => (
  <div className={styles.mobileMenu}>
    <NavLink href="#sobre">Sobre</NavLink>
    <NavLink href="#funcionalidades">Funcionalidades</NavLink>
    <NavLink href="#contato">Contato</NavLink>
  </div>
);