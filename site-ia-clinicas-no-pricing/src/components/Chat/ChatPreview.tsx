import { useState, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { VoiceMessage } from './VoiceMessage';
import { IPhoneMockup } from './iPhoneMockup';
import styles from '../../styles/components/Chat.module.css';

interface ChatPreviewProps {
  chatRef: React.RefObject<HTMLDivElement | null>;
}

interface Message {
  id: number;
  type: 'agent' | 'client' | 'chatbot' | 'voice';
  time: string;
  content: string;
}

const messages: Message[] = [
  { id: 1, type: 'agent', time: '09:15', content: 'Bom dia! Clínica Saúde+. Como posso ajudá-lo?' },
  { id: 2, type: 'client', time: '09:16', content: 'Gostaria de agendar uma consulta' },
  { id: 3, type: 'agent', time: '09:16', content: 'Claro! Para qual especialidade você precisa?' },
  { id: 4, type: 'voice', time: '09:17', content: '' },
  { id: 5, type: 'agent', time: '09:18', content: 'Perfeito! Temos horários disponíveis com o Dr. Silva:' },
  { id: 6, type: 'chatbot', time: '09:18', content: '📅 Amanhã às 14h ou Quinta às 10h?' },
];

export const ChatPreview = ({ chatRef }: ChatPreviewProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        // Mostrar indicador de digitação para mensagens do agente/chatbot
        const currentMessage = messages[currentIndex];
        if (currentMessage.type === 'agent' || currentMessage.type === 'chatbot') {
          setIsTyping(true);
          
          // Tempo de "digitação" variável baseado no tamanho da mensagem
          const typingDelay = Math.min(1000 + currentMessage.content.length * 20, 2500);
          
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, currentIndex]);
            currentIndex++;
            
            // Próxima mensagem após um delay
            setTimeout(showNextMessage, 800);
          }, typingDelay);
        } else {
          // Mensagens do cliente ou de voz aparecem mais rápido
          setVisibleMessages(prev => [...prev, currentIndex]);
          currentIndex++;
          setTimeout(showNextMessage, 600);
        }
      } else {
        // Reiniciar a animação após um delay
        setTimeout(() => {
          setVisibleMessages([]);
          currentIndex = 0;
          setTimeout(showNextMessage, 1500);
        }, 5000);
      }
    };

    // Iniciar a animação após um pequeno delay
    const timeout = setTimeout(showNextMessage, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={chatRef} className={styles.chatPreview}>
      <IPhoneMockup>
        <div className={styles.whatsappMessages}>
          {messages.map((message, index) => {
            if (!visibleMessages.includes(index)) return null;
            
            if (message.type === 'voice') {
              return <VoiceMessage key={message.id} />;
            }
            
            return (
              <ChatMessage key={message.id} type={message.type} time={message.time}>
                {message.content}
              </ChatMessage>
            );
          })}
          
          {isTyping && (
            <div className={styles.typingIndicator}>
              <div className={styles.typingDot}></div>
              <div className={styles.typingDot}></div>
              <div className={styles.typingDot}></div>
            </div>
          )}
        </div>
      </IPhoneMockup>
    </div>
  );
};
