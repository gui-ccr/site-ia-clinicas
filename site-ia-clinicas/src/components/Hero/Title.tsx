import { forwardRef } from 'react';
import styles from '../../styles/components/Hero.module.css';

export const Title = forwardRef<HTMLHeadingElement>((_, ref) => (
  <h1 ref={ref} className={styles.title}>
    Automatize o{' '}
    <span className={styles.titleGradient}>
      atendimento
    </span>{' '}
    da sua clínica com IA
  </h1>
));