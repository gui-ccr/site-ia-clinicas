import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles/components/Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '556196301711';
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre o ClinicaFlow para automatizar o atendimento da minha clínica.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contato" ref={sectionRef} className={styles.contactSection}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          Sua agenda lotada e seus fins de semana livres estão a uma conversa de{' '}
          <span className={styles.highlight}>distância</span>
        </h2>

        <p className={styles.subtitle}>
          Chega de perder dinheiro, tempo e paz de espírito.

        </p>

        <div ref={cardRef} className={styles.contactCard}>
          <div className={styles.whatsappIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.iconSvg}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          <h3 className={styles.cardTitle}>Fale conosco pelo WhatsApp</h3>
          
          <p className={styles.cardDescription}>
            sem compromisso, e veja em 5 minutos como o ClinicaFlow pode começar a transformar sua clínica a partir de amanhã.
          </p>

          <button onClick={handleWhatsAppClick} className={styles.whatsappButton}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.buttonIcon}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Conversar no WhatsApp
          </button>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>⏰</span>
              <div className={styles.infoText}>
                <strong>Horário de atendimento</strong>
                <p>Segunda a Sexta: 9h às 18h</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>⚡</span>
              <div className={styles.infoText}>
                <strong>Resposta rápida</strong>
                <p>Retornamos em até 30 minutos</p>
              </div>
            </div>
          </div>

          <div className={styles.benefits}>
            <p className={styles.benefitsTitle}>Ao entrar em contato, você recebe:</p>
            <ul className={styles.benefitsList}>
              <li>✓ Análise gratuita das necessidades da sua clínica</li>
              <li>✓ Suporte para implementação</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
