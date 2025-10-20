import styles from '../../styles/components/Button.module.css';

interface CTAButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
}

export const CTAButton = ({ children, fullWidth, large, onClick }: CTAButtonProps) => {
  const classNames = [
    styles.ctaButton,
    large && styles.large,
    fullWidth && styles.fullWidth
  ].filter(Boolean).join(' ');

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};