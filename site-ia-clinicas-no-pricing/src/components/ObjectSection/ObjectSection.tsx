import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/components/ObjectionSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export const ObjectionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      // Animação do conteúdo
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.objectionSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 ref={headlineRef} className={styles.headline}>
            Mas e se meus pacientes não gostarem de falar com uma{" "}
            <span className={styles.highlight}>IA</span> ?
          </h2>

          <p ref={subheadRef} className={styles.subhead}>
            Seus pacientes não sentirão que o atendimento ficou "robotizado".
            Eles sentirão que sua clínica se tornou incrivelmente ágil e
            atenciosa, capaz de responder às 10 da noite de um domingo com a
            mesma clareza de uma segunda de manhã.
          </p>

          <div ref={contentRef} className={styles.content}>
            <p className={styles.contentText}>
              O resultado é um atendimento que permanece{" "}
              <strong>humano no cuidado</strong> e{" "}
              <strong>sobre-humano na eficiência</strong>. E ao primeiro sinal
              de que uma conversa exige acolhimento real, a IA transfere para
              sua equipe, que já tem todo o contexto para continuar o
              atendimento sem nenhuma fricção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};