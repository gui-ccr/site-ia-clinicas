import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Success.module.css";

export const Success = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleContactSupport = () => {
    const number = "5561996563486";
    const message = "Olá! Acabei de adquirir o ClinicaFlow e preciso de ajuda.";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className={styles.successPage}>
      <div className={styles.container}>
        {/* Ícone de sucesso animado */}
        <div className={styles.successIconWrapper}>
          <div className={styles.successIcon}>
            <svg viewBox="0 0 52 52" className={styles.checkmark}>
              <circle
                className={styles.checkmarkCircle}
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className={styles.checkmarkCheck}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>

        {/* Mensagem de sucesso */}
        <h1 className={styles.title}>🎉 Pagamento Confirmado!</h1>

        <p className={styles.subtitle}>
          Obrigado por escolher a <strong>ClinicaFlow</strong>
        </p>

        <div className={styles.messageBox}>
          <p className={styles.message}>
            Seu pagamento foi processado com sucesso! Em instantes você
            receberá:
          </p>

          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>E-mail de confirmação com os detalhes da compra</span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Credenciais de acesso à plataforma</span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Link para agendar sua sessão de onboarding</span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Acesso ao guia de implementação rápida</span>
            </li>
          </ul>
        </div>

        {/* Próximos passos */}
        <div className={styles.nextSteps}>
          <h2 className={styles.stepsTitle}>📋 Próximos Passos</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Verifique seu e-mail</h3>
              <p className={styles.stepDescription}>
                Enviamos todas as informações necessárias para começar
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Agende o onboarding</h3>
              <p className={styles.stepDescription}>
                Nossa equipe te guiará na configuração inicial
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Comece a automatizar</h3>
              <p className={styles.stepDescription}>
                Em poucos dias sua clínica estará totalmente automatizada
              </p>
            </div>
          </div>
        </div>

        {/* Suporte */}
        <div className={styles.support}>
          <p className={styles.supportText}>
            Precisa de ajuda? Entre em contato conosco pelo WhatsApp
          </p>
          <div>

          <button
            className={styles.supportButton}
            onClick={handleContactSupport}
          >
            <span className={styles.whatsappIcon}>💬</span>
            Falar com Suporte
          </button>
          </div>
        </div>

        {/* Botão de retorno */}
        <div className={styles.actions}>
          <button onClick={handleGoHome} className={styles.homeButton}>
            Voltar para o Site
          </button>
        </div>
      </div>
    </div>
  );
};
