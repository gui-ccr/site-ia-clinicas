import styles from '../../styles/components/Button.module.css';

interface CTAButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const CTAButton = ({ children, fullWidth, large, onClick, disabled }: CTAButtonProps) => {
  const classNames = [
    styles.ctaButton,
    large && styles.large,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled
  ].filter(Boolean).join(' ');

  return (
    <button onClick={onClick} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
};