import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/components/Features.module.css";

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
    icon: "💰",
    title: "Faturar 30-50% a Mais Sem Duplicar Seu Estresse",
    description:
      "Crescer sua receita de R$ 80 mil para R$ 120-150 mil/mês sem contratar exército de funcionários ou trabalhar 80h/semana. Transformar horários vazios em agenda lotada, reduzir faltas que sugam R$ 10-20 mil todo mês e escalar de verdade — quanto mais cresce, mais lucrativa fica.",
  },
  {
    id: 2,
    icon: "🏖️",
    title: "Ter Fins de Semana Realmente Livres (E Viajar Sem Levar A Clínica Na Mala)",
    description:
      "Não ver mais aquele número infinito de mensagens não lidas na segunda-feira. Tirar 15 dias de férias de verdade sem checar WhatsApp da praia. Voltar e encontrar tudo funcionando perfeitamente — porque a IA trabalhou enquanto você descansou.",
  },
  {
    id: 3,
    icon: "😌",
    title: "Dormir Tranquila E Acordar Sem Aquela Ansiedade",
    description:
      "Fornece informações sobre preparo para exames, documentos necessários e instruções específicas automaticamente.",
  },
  {
    id: 4,
    icon: "📊",
    title: "Ter Previsibilidade Financeira E Margem Para Investir No Que Importa",
    description:
      "Olhar a agenda de amanhã e saber exatamente quantos pacientes virão. Com faturamento 40% maior e custos controlados, poder finalmente investir naquele equipamento novo, fazer aquela especialização cara ou simplesmente ter reserva robusta. Planejar com confiança, não no \"vai que...\".",
  },
  {
    id: 5,
    icon: "👥",
    title: "Liberar Sua Equipe Para Atividades de Valor (E Ter Ambiente de Trabalho Mais Leve)",
    description:
      "Sua recepcionista focando em acolher quem chega, não confirmando consultas o dia inteiro. Time trabalhando no que humanos fazem melhor — cuidar, resolver casos complexos — não tarefas que um sistema faz melhor. Produtividade triplicada sem aumentar folha de pagamento.",
  },
  {
    id: 6,
    icon: "🎯",
    title: "Construir Patrimônio (Não Só Trocar Horas Por Dinheiro)",
    description:
      "Transformar sua clínica de \"autônoma com consultório\" para \"empresa que gera valor independente de você\". Ter ativo que cresce e funciona como negócio sustentável, não segundo emprego que te escraviza. Pensar em aposentadoria tranquila, planejar o futuro com segurança.",
  },
  {
    id: 7,
    icon: "🌟",
    title: "Estar Presente Nos Momentos Que Você Não Pode Recuperar",
    description:
      "Ver seu filho crescer de verdade, não por fotos. Jantar em família sem celular na mesa. Sábado no parque sem culpa de \"deveria estar trabalhando\". Praticar a Medicina do Estilo de Vida que você prega — ser o exemplo vivo de que é possível ter sucesso profissional sem destruir a saúde mental.",
  }
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
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Animação da linha de progresso
      if (progressLineRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
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
                start: "top 85%",
                end: "top 60%",
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
    <section
      id="funcionalidades"
      ref={sectionRef}
      className={styles.featuresSection}
    >
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          O ClinicaFlow é para <span className={styles.highlight}>você</span> que
          quer
        </h2>
      
        <p className={styles.subhead}>
          Sair da Clínica no Horário E Começar o Dia Sem Correria Acabar com
          aquela rotina de ficar até 19h, 20h respondendo mensagens. 
          <br />
          Acordar e ver que a IA já agendou 5 pacientes novos enquanto você dormia.
          Desligar o computador às 18h sem culpa e começar suas manhãs no
          controle, não no caos — já com tudo organizado.
        </p>

        <div className={styles.featuresWrapper}>
          {/* Linha de progresso */}
          <div className={styles.timeline}>
            <div ref={lineRef} className={styles.timelineLine}></div>
            <div
              ref={progressLineRef}
              className={styles.timelineProgress}
            ></div>

            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`${styles.timelineDot} ${
                  index <= activeFeature ? styles.timelineDotActive : ""
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
                  index === activeFeature ? styles.featureCardActive : ""
                }`}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
