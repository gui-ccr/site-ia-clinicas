import { forwardRef } from 'react';
import styles from '../styles/components/Hero.module.css';

export const Subtitle = forwardRef<HTMLParagraphElement>((_, ref) => (
  <p ref={ref} className={styles.subtitle}>
    Sem contratar mais gente. Sem complicação técnica. Sem pacientes insatisfeitos. Apenas uma agenda sempre cheia, equipe mais produtiva e você finalmente saindo no horário. Tudo funcionando automaticamente a partir de amanhã.
  </p>
));