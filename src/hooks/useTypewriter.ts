import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
}

export const useTypewriter = ({ text, delay = 50, startDelay = 0 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setIsComplete(false);
    
    let timeout: ReturnType<typeof setTimeout>;
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeNextCharacter, delay);
      } else {
        setIsComplete(true);
      }
    };

    const initialTimeout = setTimeout(typeNextCharacter, startDelay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialTimeout);
    };
  }, [text, delay, startDelay]);

  return { displayText, isComplete };
};