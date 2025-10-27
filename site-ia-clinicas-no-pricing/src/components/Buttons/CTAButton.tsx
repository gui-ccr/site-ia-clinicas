import styles from '../styles/components/Button.module.css';

interface CTAButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

export const CTAButton = ({ children, fullWidth, large, onClick, href, disabled }: CTAButtonProps) => {
  const classNames = [
    styles.ctaButton,
    large && styles.large,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={classNames}>
      {children}
    </button>
  );
};