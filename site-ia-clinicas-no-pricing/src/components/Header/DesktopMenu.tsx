import { NavLink } from './NavLink';
import styles from '../styles/components/Header.module.css';

export const DesktopMenu = () => (
  <div className={styles.desktopMenu}>
    <NavLink href="#sobre">Sobre</NavLink>
    <NavLink href="#funcionalidades">Funcionalidades</NavLink>
    <NavLink href="#contato">Contato</NavLink>
  </div>
);