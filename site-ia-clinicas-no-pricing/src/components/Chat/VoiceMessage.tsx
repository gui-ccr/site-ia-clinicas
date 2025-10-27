import styles from '../styles/components/Chat.module.css';

export const VoiceMessage = () => (
  <div className={styles.voiceMessage}>
    <div className={styles.voiceBar}>
      <div className={styles.playButton}>
        <div className={styles.playIcon}></div>
      </div>
      <div className={styles.waveform}></div>
    </div>
    <img 
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23A78BFA'/%3E%3C/svg%3E" 
      alt="avatar" 
      className={styles.avatar}
    />
  </div>
);