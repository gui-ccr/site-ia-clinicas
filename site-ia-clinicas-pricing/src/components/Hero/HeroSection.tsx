import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroContent } from './HeroContent';
import { ChatPreview } from '../Chat/ChatPreview';
import styles from '../../styles/components/Hero.module.css';

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
      );

      gsap.fromTo(
        chatRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      const messages = chatRef.current?.querySelectorAll('.chat-message');
      if (messages) {
        gsap.fromTo(
          messages,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            delay: 0.8,
            ease: 'power2.out',
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <HeroContent 
          titleRef={titleRef} 
          subtitleRef={subtitleRef} 
          buttonRef={buttonRef} 
        />
        <ChatPreview chatRef={chatRef} />
      </div>
    </main>
  );
};
