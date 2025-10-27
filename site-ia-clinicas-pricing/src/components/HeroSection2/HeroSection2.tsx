import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/components/HeroSection2.module.css";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do headline
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Animação do subhead
      gsap.fromTo(
        subheadRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: subheadRef.current,
            start: "top 80%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection2}>
      <div className={styles.container}>
        <h2 ref={headlineRef} className={styles.headline}>
          Quantos atendimentos você já perdeu por que o paciente não foi{" "}
          <span className={styles.highlight}>respondido a tempo</span>?
        </h2>

        <p ref={subheadRef} className={styles.subhead}>
          Nossa IA responde em segundos, agenda automaticamente e garante que
          nenhum paciente fique sem resposta. Funciona 24/7, atende com o mesmo
          tom da sua equipe e transforma cada mensagem em consulta confirmada.
        </p>
      </div>
    </section>
    
  );
};
