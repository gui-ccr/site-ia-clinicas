import { Menu, X } from 'lucide-react';
import styles from '../styles/components/Header.module.css';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => (
  <button className={styles.mobileMenuButton} onClick={onClick}>
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);