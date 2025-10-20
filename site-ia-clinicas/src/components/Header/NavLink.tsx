import styles from '../../styles/components/Header.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <a href={href} className={styles.navLink}>
    {children}
  </a>
);