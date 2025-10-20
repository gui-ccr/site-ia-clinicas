import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTAButton } from '../Buttons/CTAButton';
import styles from '../../styles/components/Pricing.module.css';

gsap.registerPlugin(ScrollTrigger);

export const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

      // Animação do card
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    'Agente IA treinado para sua clínica',
    'Atendimento 24/7 via WhatsApp',
    'Agendamento automático de consultas',
    'Lembretes e notificações',
    'Triagem inteligente de pacientes',
    'Integração com n8n',
    'Dashboard com relatórios',
    'Suporte técnico prioritário',
    'Atualizações contínuas',
    'Treinamento personalizado',
  ];

  return (
    <section id="precos" ref={sectionRef} className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Plano exclusivo para{' '}
          <span className={styles.highlight}>clínicas médicas</span>
        </h2>

        <p className={styles.subtitle}>
          Invista na transformação digital do seu atendimento
        </p>

        <div ref={cardRef} className={styles.pricingCard}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>🔥 OFERTA ESPECIAL</span>
          </div>

          <h3 className={styles.planName}>Plano Completo</h3>
          <p className={styles.planDescription}>
            Solução completa de IA para automatizar e otimizar o atendimento da sua clínica
          </p>

          <div className={styles.priceWrapper}>
            <div className={styles.oldPrice}>
              <span className={styles.oldPriceLabel}>De</span>
              <span className={styles.oldPriceValue}>R$ 1.497</span>
            </div>
            
            <div className={styles.currentPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.price}>748</span>
              <span className={styles.period}>,50/mês</span>
            </div>

            <div className={styles.discount}>
              <span className={styles.discountBadge}>50% OFF</span>
            </div>
          </div>

          <div className={styles.features}>
            <p className={styles.featuresTitle}>O que está incluído:</p>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaWrapper}>
            <CTAButton large fullWidth>
              Começar agora →
            </CTAButton>
          </div>

          <div className={styles.guarantee}>
            <span className={styles.guaranteeIcon}>🛡️</span>
            <p className={styles.guaranteeText}>
              <strong>Garantia de 7 dias</strong> - Se não ficar satisfeito, devolvemos seu dinheiro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
