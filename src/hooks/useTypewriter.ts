import { useState, useEffect, useRef } from 'react';

interface UseTypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
}

export const useTypewriter = ({ text, delay = 50, startDelay = 0 }: UseTypewriterProps) => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const currentIndexRef = useRef(0);
  const textRef = useRef(text);

  useEffect(() => {
    // Reset animation when text changes
    setVisibleCharacters(0);
    setIsComplete(false);
    textRef.current = text;
    currentIndexRef.current = 0;
    
    let timeout: ReturnType<typeof setTimeout>;
    
    const revealNextCharacter = () => {
      if (currentIndexRef.current < text.length) {
        currentIndexRef.current += 1;
        setVisibleCharacters(currentIndexRef.current);
        timeout = setTimeout(revealNextCharacter, delay);
      } else {
        setIsComplete(true);
      }
    };

    const initialTimeout = setTimeout(revealNextCharacter, startDelay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialTimeout);
    };
  }, [text, delay, startDelay]);

  // Create display text by showing only the specified number of characters
  const displayText = text.slice(0, visibleCharacters);

  return { displayText, isComplete };
};