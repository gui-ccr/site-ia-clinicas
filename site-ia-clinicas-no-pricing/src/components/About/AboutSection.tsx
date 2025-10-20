import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles/components/About.module.css';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // Animação dos cards
      const cards = cardsRef.current?.querySelectorAll('.about-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Transforme o atendimento da sua{' '}
          <span className={styles.highlight}>clínica médica</span>
        </h2>

        <p className={styles.description}>
          O ClinicAI é uma solução de inteligência artificial desenvolvida especialmente para 
          automatizar e otimizar o atendimento em clínicas médicas, usando n8n e tecnologia 
          de ponta para proporcionar experiências excepcionais aos seus pacientes.
        </p>

        <div ref={cardsRef} className={styles.cardsGrid}>
          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🤖</span>
            </div>
            <h3 className={styles.cardTitle}>Atendimento Inteligente</h3>
            <p className={styles.cardText}>
              Agentes de IA treinados especificamente para o contexto médico, 
              respondendo dúvidas e agendando consultas com precisão.
            </p>
          </div>

          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>⚡</span>
            </div>
            <h3 className={styles.cardTitle}>Automação com n8n</h3>
            <p className={styles.cardText}>
              Workflows automatizados que integram com seu sistema atual, 
              agilizando processos e reduzindo tempo de resposta.
            </p>
          </div>

          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>💬</span>
            </div>
            <h3 className={styles.cardTitle}>WhatsApp 24/7</h3>
            <p className={styles.cardText}>
              Atendimento ininterrupto pelo WhatsApp, o canal preferido dos 
              pacientes, disponível a qualquer hora do dia ou da noite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
