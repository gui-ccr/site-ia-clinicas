import styles from '../styles/components/Hero.module.css';

export const Badge = () => (
  <div className={styles.badge}>
    <span className={styles.badgeText}>IA para Clínicas</span>
    <div className={styles.badgeLabel}>
      <span className={styles.badgeLabelText}>Automação Inteligente</span>
    </div>
  </div>
);