import { Badge } from './Badge';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { CTAButton } from '../Buttons/CTAButton';
import styles from '../../styles/components/Hero.module.css';

interface HeroContentProps {
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLParagraphElement | null>;
  buttonRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroContent = ({ titleRef, subtitleRef, buttonRef }: HeroContentProps) => (
  <div className={styles.heroContent}>
    <Badge />
    <Title ref={titleRef} />
    <Subtitle ref={subtitleRef} />
    <div ref={buttonRef}>
      <CTAButton large href="#contato">Automatizar minha clinica →</CTAButton>
    </div>
  </div>
);
