import styles from '../styles/components/Header.module.css';

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={styles.logo} 
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      ClinicaFlow
    </button>
  );
};
