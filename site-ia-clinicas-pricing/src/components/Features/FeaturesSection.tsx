import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles/components/Features.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: '📅',
    title: 'Agendamento Inteligente',
    description: 'O agente IA verifica disponibilidade em tempo real, agenda consultas automaticamente e envia confirmações por WhatsApp.',
  },
  {
    id: 2,
    icon: '🔔',
    title: 'Lembretes Automáticos',
    description: 'Envio automático de lembretes de consultas, exames e retornos, reduzindo faltas e otimizando a agenda médica.',
  },
  {
    id: 3,
    icon: '💊',
    title: 'Orientações Pré-Consulta',
    description: 'Fornece informações sobre preparo para exames, documentos necessários e instruções específicas automaticamente.',
  },
  {
    id: 4,
    icon: '📋',
    title: 'Triagem Inicial',
    description: 'Coleta sintomas e informações preliminares, agilizando o atendimento médico e priorizando casos urgentes.',
  },
  {
    id: 5,
    icon: '🔄',
    title: 'Integração com Sistemas',
    description: 'Conecta com seu sistema de gestão através do n8n, sincronizando dados e automatizando fluxos de trabalho.',
  },
  {
    id: 6,
    icon: '🎙️',
    title: 'Processamento Multimodal',
    description: 'Agente capaz de analisar imagens enviadas pelos pacientes e transcrever mensagens de áudio, oferecendo atendimento completo.',
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

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

      // Animação da linha de progresso
      if (progressLineRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progressLineRef.current) {
              progressLineRef.current.style.height = `${progress * 100}%`;
            }
            
            // Atualizar feature ativa baseado no progresso
            const featureIndex = Math.min(
              Math.floor(progress * features.length),
              features.length - 1
            );
            setActiveFeature(featureIndex);
          },
        });
      }

      // Animação dos cards de features
      features.forEach((_, index) => {
        const card = document.querySelector(`[data-feature-id="${index}"]`);
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="funcionalidades" ref={sectionRef} className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Funcionalidades que{' '}
          <span className={styles.highlight}>transformam</span> sua clínica
        </h2>

        <div className={styles.featuresWrapper}>
          {/* Linha de progresso */}
          <div className={styles.timeline}>
            <div ref={lineRef} className={styles.timelineLine}></div>
            <div ref={progressLineRef} className={styles.timelineProgress}></div>
            
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`${styles.timelineDot} ${
                  index <= activeFeature ? styles.timelineDotActive : ''
                }`}
                style={{ top: `${(index / (features.length - 1)) * 100}%` }}
              >
                <span className={styles.dotIcon}>{feature.icon}</span>
              </div>
            ))}
          </div>

          {/* Lista de features */}
          <div className={styles.featuresList}>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                data-feature-id={index}
                className={`${styles.featureCard} ${
                  index === activeFeature ? styles.featureCardActive : ''
                }`}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
