'use client';
 
import { useChat } from 'ai/react';
import styles from './chat.module.sass'
 
export const Chat = (props: {agent: string}) => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
          {
            id: '1',
            role: 'system',
            content: props.agent
          }
        ],
      });
 
  return (
    <main className={styles.Chat}>
      <section className={styles.Chat__section}>
        {messages
        .filter(m => m.role !== 'system')
        .map(m => (
          <div>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className={styles.Chat__form} onSubmit={handleSubmit}>
        <input
          className={styles.Chat__input}
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className={styles.Chat__button}
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}