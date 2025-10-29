import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/components/About.module.css";

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
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Animação dos cards
      const cards = cardsRef.current?.querySelectorAll(".about-card");
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
              start: "top 80%",
              end: "top 50%",
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
          Tudo Que Você Precisa Para Sua Clínica Funcionar no
          <span className={styles.highlight}> Automático</span>
        </h2>

        <p className={styles.description}>
          Sistema completo, pronto para usar. Configure uma vez, funciona para
          sempre
        </p>

        <div ref={cardsRef} className={styles.cardsGrid}>
          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🤖</span>
            </div>
            <h3 className={styles.cardTitle}>
              Assistente Virtual com IA Treinada Para Saúde
            </h3>
            <p className={styles.cardText}>
              Não é chatbot genérico — é treinada especificamente para saúde.
              Sabe diferenciar urgência de rotina, faz triagem inicial sem
              diagnóstico e transfere para humano quando necessário.
            </p>
          </div>

          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📅</span>
            </div>
            <h3 className={styles.cardTitle}>
              Agendamento Inteligente Integrado
            </h3>
            <p className={styles.cardText}>
              Integra com sua agenda atual sem bagunçar nada. Detecta conflitos
              automaticamente, sugere melhor horário para cada paciente e
              preenche dados cadastrais sozinha. Funciona até quando seu sistema
              de gestão cai..
            </p>
          </div>


          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>👥</span>
            </div>
            <h3 className={styles.cardTitle}>
              Treinamento Completo da Sua Equipe
            </h3>
            <p className={styles.cardText}>
              Onboarding guiado em vídeo + suporte via WhatsApp. Sua equipe aprende a usar em 15 minutos. Sem complicação técnica.
            </p>
          </div>

          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🔄 </span>
            </div>
            <h3 className={styles.cardTitle}>
              Atualizações Automáticas e Suporte Prioritário
            </h3>
            <p className={styles.cardText}>
              Novas funcionalidades chegam automaticamente sem você pagar nada a mais. Suporte em português, por pessoas reais, sempre que você precisar
            </p>
          </div>

          <div className={`${styles.card} about-card`}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🔔</span>
            </div>
            <h3 className={styles.cardTitle}>
              Sistema Anti-Falta (Confirmações + Lembretes)
            </h3>
            <p className={styles.cardText}>
              Envia confirmações 48h antes e lembretes no dia da consulta
              automaticamente. Se o paciente precisa remarcar, a IA já oferece
              novos horários na hora. Reduz no-show em até 60%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
