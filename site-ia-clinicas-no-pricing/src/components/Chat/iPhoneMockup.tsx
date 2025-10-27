import styles from '../styles/components/iPhoneMockup.module.css';

interface IPhoneMockupProps {
  children: React.ReactNode;
}

export const IPhoneMockup = ({ children }: IPhoneMockupProps) => {
  return (
    <div className={styles.iphoneContainer}>
      <div className={styles.iphoneFrame}>
        {/* Notch */}
        <div className={styles.notch}>
          <div className={styles.camera}></div>
          <div className={styles.speaker}></div>
        </div>
        
        {/* Screen Content Container */}
        <div className={styles.screenContent}>
          {/* Status Bar */}
          <div className={styles.statusBar}>
            <div className={styles.statusLeft}>
              <span className={styles.time}>9:41</span>
            </div>
            <div className={styles.statusRight}>
              {/* Signal Icon */}
              <svg className={styles.statusIcon} viewBox="0 0 24 24" fill="currentColor">
                <rect x="1" y="14" width="3" height="10" rx="1"/>
                <rect x="6" y="10" width="3" height="14" rx="1"/>
                <rect x="11" y="6" width="3" height="18" rx="1"/>
                <rect x="16" y="2" width="3" height="22" rx="1"/>
              </svg>
              {/* WiFi Icon */}
              <svg className={styles.statusIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-4c-2.2 0-4 1.8-4 4 0 .3.03.6.09.88C9.26 17.93 10.56 17 12 17s2.74.93 3.91 1.88c.06-.28.09-.58.09-.88 0-2.2-1.8-4-4-4zm0-4c-3.3 0-6 2.7-6 6 0 .7.13 1.37.35 2C7.97 16.64 9.88 15 12 15s4.03 1.64 5.65 3c.22-.63.35-1.3.35-2 0-3.3-2.7-6-6-6z"/>
              </svg>
              {/* Battery Icon */}
              <svg className={styles.batteryIcon} viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.35"/>
                <rect x="3.5" y="8.5" width="15" height="7" rx="1" fill="currentColor"/>
                <rect x="21" y="10" width="2" height="4" rx="1" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* WhatsApp Header */}
          <div className={styles.whatsappHeader}>
            <div className={styles.headerLeft}>
              <button className={styles.backButton}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className={styles.contactAvatar}>
                <span>🏥</span>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>Clínica Saúde+</div>
                <div className={styles.contactStatus}>online</div>
              </div>
            </div>
          <div className={styles.headerRight}>
            <button className={styles.headerButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
            </button>
            <button className={styles.headerButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </button>
            <button className={styles.headerButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            </button>
          </div>
          </div>

          {/* Chat Content */}
          <div className={styles.chatContent}>
            {children}
          </div>

          {/* WhatsApp Input */}
          <div className={styles.whatsappInput}>
            <button className={styles.inputButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </button>
            <div className={styles.inputField}>
              <span className={styles.inputPlaceholder}>Mensagem</span>
            </div>
            <button className={styles.inputButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
            </button>
            <button className={styles.sendButton}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>

          {/* Home Indicator */}
          <div className={styles.homeIndicator}></div>
        </div>
      </div>
    </div>
  );
};
