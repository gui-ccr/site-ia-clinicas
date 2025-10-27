import { forwardRef } from 'react';
import styles from '../../styles/components/Hero.module.css';

export const Title = forwardRef<HTMLHeadingElement>((_, ref) => (
  <h1 ref={ref} className={styles.title}>
    Sua Clínica {' '}
    <span className={styles.titleGradient}>
      crescendo
    </span>{' '}
    enquanto você descansa
  </h1>
));