import styled from 'styled-components';
import { motion } from 'framer-motion';
import {useTypewriter} from '@hooks/useTypewriter';

const HeroSection = styled(motion.section)`
  grid-area: hero;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.accent}10;
  border-radius: 1rem;
  position: sticky;
  top: 2rem;
  align-self: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    top: 0;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
    max-width: 800px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    top: 0;
    min-height: 380px;
  }
`;

const TextContainer = styled.div`
  min-height: 2rem; // Increased from 5.5rem to ensure no pushing
  margin-bottom: 1rem;
`;

const SubtitleContainer = styled.div`
  min-height: 1rem; // Increased from 3.5rem to ensure no pushing
  margin-bottom: 2rem;
`;

const DescriptionContainer = styled.div`
  min-height: 8rem; // Increased from 6rem to ensure no pushing
  margin-bottom: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Cursor = styled(motion.span)`
  display: inline-block;
  width: 3px;
  height: 1em;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 2px;
  vertical-align: middle;
`;

const Hero = () => {
  const nameAnimation = useTypewriter({
    text: "Ilian Futekov",
    startDelay: 300,
    delay: 20
  });

  const titleAnimation = useTypewriter({
    text: "Frontend Developer",
    startDelay: nameAnimation.isComplete ? 100 : 2000,
    delay: 20
  });

  const descAnimation = useTypewriter({
    text: "Specialized in building modern web applications with React, TypeScript, and Docker. Passionate about clean code and innovative solutions.",
    startDelay: titleAnimation.isComplete ? 100 : 4000,
    delay: 10
  });

  return (
    <HeroSection id="hero">
      <HeroContent>
        <TextContainer>
          <Title>
            {nameAnimation.displayText}
            {!nameAnimation.isComplete && <Cursor animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />}
          </Title>
        </TextContainer>
        
        <SubtitleContainer>
          <Subtitle>
            {titleAnimation.displayText}
            {nameAnimation.isComplete && !titleAnimation.isComplete && (
              <Cursor animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
            )}
          </Subtitle>
        </SubtitleContainer>
        
        <DescriptionContainer>
          <Description>
            {descAnimation.displayText}
            {titleAnimation.isComplete && !descAnimation.isComplete && (
              <Cursor animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
            )}
          </Description>
        </DescriptionContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;