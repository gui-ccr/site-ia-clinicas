import { forwardRef } from 'react';
import styles from '../../styles/components/Hero.module.css';

export const Subtitle = forwardRef<HTMLParagraphElement>((_, ref) => (
  <p ref={ref} className={styles.subtitle}>
    Agentes IA especializados em clínicas médicas, agendando consultas, respondendo dúvidas e atendendo pacientes 24/7 pelo WhatsApp.
  </p>
));