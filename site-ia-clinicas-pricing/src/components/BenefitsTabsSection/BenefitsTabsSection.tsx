import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/components/BenefitsTabs.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Benefit {
  id: string;
  icon: string;
  text: string;
}

interface TabContent {
  id: string;
  label: string;
  title: string;
  benefits: Benefit[];
}

const tabsData: TabContent[] = [
  {
    id: "financeiro",
    label: "FINANCEIRAMENTE",
    title: "Financeiramente",
    benefits: [
      {
        id: "1",
        icon: "✅",
        text: "Aumento de Faturamento: Até R$ 15.000 a mais no caixa já no primeiro mês, recuperados de consultas que antes eram perdidas por \"no-show\".",
      },
      {
        id: "2",
        icon: "✅",
        text: "ROI Imediato: O sistema se paga múltiplas vezes antes mesmo da primeira fatura chegar. Cada real investido retorna em média R$ 12.",
      },
      {
        id: "3",
        icon: "✅",
        text: "Crescimento Escalável: Sua capacidade de atendimento aumenta sem que seus custos com pessoal precisem acompanhar.",
      },
    ],
  },
  {
    id: "operacoes",
    label: "EM SUAS OPERAÇÕES",
    title: "Em Suas Operações",
    benefits: [
      {
        id: "1",
        icon: "✅",
        text: "Fim da Sobrecarga Administrativa: Sua equipe economiza até 15 horas semanais, deixando de fazer tarefas repetitivas para focar no que realmente importa: o acolhimento do paciente.",
      },
      {
        id: "2",
        icon: "✅",
        text: "Agenda Inteligente e Previsível: A taxa de comparecimento sobe para mais de 95%. Você finalmente tem clareza sobre o fluxo de caixa e a ocupação da clínica.",
      },
      {
        id: "3",
        icon: "✅",
        text: "Atendimento Padrão Ouro 24/7: Cada paciente é respondido em segundos, a qualquer hora do dia, com um fluxo de comunicação que encanta pela agilidade.",
      },
    ],
  },
  {
    id: "pessoal",
    label: "NA SUA VIDA PESSOAL",
    title: "Na Sua Vida Pessoal",
    benefits: [
      {
        id: "1",
        icon: "✅",
        text: "O Fim da \"Hora Extra Administrativa\": Você finalmente sai no horário todos os dias, com a certeza de que a clínica continua funcionando perfeitamente sem você.",
      },
      {
        id: "2",
        icon: "✅",
        text: "Paz Mental Restaurada: Você dorme a noite inteira, sem a ansiedade de checar mensagens ou o medo de ter perdido um paciente importante.",
      },
      {
        id: "3",
        icon: "✅",
        text: "Fins de Semana 100% Livres: O celular da clínica fica no silencioso. Você volta a estar presente nos momentos em família, recuperando o equilíbrio que a medicina tanto prega.",
      },
    ],
  },
];

export const BenefitsTabsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("financeiro");

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animação ao trocar de tab
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeTab]);

  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section ref={sectionRef} className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          O que acontece nos primeiros 30 dias com o {" "}
          <span className={styles.highlight}>ClinicaFlow</span>
        </h2>

        <p className={styles.subtitle}>
          Sua clínica não apenas adota uma nova ferramenta. Ela passa por uma transformação completa, visível em seus números, na sua equipe e, principalmente, no seu dia a dia.

        </p>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.tabButtonActive : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} className={styles.contentWrapper}>
          <div className={styles.contentCard}>
            <h3 className={styles.contentTitle}>{activeContent?.title}</h3>
            <div className={styles.benefitsList}>
              {activeContent?.benefits.map((benefit) => (
                <div key={benefit.id} className={styles.benefitItem}>
                  <span className={styles.benefitIcon}>{benefit.icon}</span>
                  <p className={styles.benefitText}>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};