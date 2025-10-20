import styles from '../../styles/components/Chat.module.css';

interface ChatMessageProps {
  type: 'agent' | 'client' | 'chatbot';
  time: string;
  children: React.ReactNode;
}

export const ChatMessage = ({ type, time, children }: ChatMessageProps) => {
  const isClient = type === 'client';
  const isChatbot = type === 'chatbot';
  
  const bubbleClass = isChatbot ? styles.chatbot : 
                      isClient ? styles.client : 
                      styles.agent;
  
  const alignment = isClient || isChatbot ? styles.right : '';

  return (
    <div className={`${styles.chatMessage} ${alignment}`}>
      <div className={`${styles.messageBubble} ${bubbleClass}`}>
        <p className={styles.messageText}>{children}</p>
      </div>
      <span className={styles.messageTime}>
        {time}
      </span>
    </div>
  );
};
