import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypewriter } from '@hooks/useTypewriter';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { renderToStaticMarkup } from 'react-dom/server';
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { theme } from '@styles/theme';
import { Engine } from 'tsparticles-engine';

const HeroSection = styled(motion.section)`
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
  width: 100%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    top: 0;
    min-height: auto;
    padding: 3rem 2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: inherit;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    top: 0;
    min-height: 300px;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  min-height: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

const SubtitleContainer = styled.div`
  min-height: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 1.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

const DescriptionContainer = styled.div`
  min-height: 8rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 10rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 1366px) {
    font-size: 4.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 1366px) {
    font-size: 2.5rem;
  }

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

  @media (max-width: 1366px) {
    font-size: 1.2rem;
  }

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

const ContactsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: 1366px) {
    font-size: 1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ContactIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactText = styled.span`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const Hero = () => {
  const nameAnimation = useTypewriter({
    text: "Ilian Futekov",
    startDelay: 300,
    delay: 20
  });

  const titleAnimation = useTypewriter({
    text: "Javscript Developer",
    startDelay: nameAnimation.isComplete ? 100 : 2000,
    delay: 20
  });

  const descAnimation = useTypewriter({
    text: "Specialized in building modern web applications with React, TypeScript, and Docker. Passionate about clean code and innovative solutions.",
    startDelay: titleAnimation.isComplete ? 100 : 4000,
    delay: 10
  });

  // Animation variants
  const contactsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: descAnimation.isComplete ? 0.2 : 2.5,
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);



  // Convert React Icons to SVG strings for particles with custom color
  const iconColor = "#64ffda10";
  const reactSvg = encodeURIComponent(renderToStaticMarkup(<FaReact color={iconColor} />));
  const typescriptSvg = encodeURIComponent(renderToStaticMarkup(<SiTypescript color={iconColor} />));
  const javascriptSvg = encodeURIComponent(renderToStaticMarkup(<FaJs color={iconColor} />));
  const htmlSvg = encodeURIComponent(renderToStaticMarkup(<FaHtml5 color={iconColor} />));
  const cssSvg = encodeURIComponent(renderToStaticMarkup(<FaCss3Alt color={iconColor} />));
  const nodeSvg = encodeURIComponent(renderToStaticMarkup(<FaNodeJs color={iconColor} />));

  return (
    <HeroSection id="hero">
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push"
                },
                onHover: {
                  enable: false,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: theme.colors.primary
              },
              links: {
                color: theme.colors.accent,
                distance: 150,
                enable: false,
                opacity: 0.3,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: "top",
                enable: true,
                outModes: {
                  default: "out"
                },
                random: false,
                speed: 0.6,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 30
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: "image",
                options: {
                  image: [
                    {
                      src: `data:image/svg+xml,${reactSvg}`,
                      width: 16,
                      height: 16
                    },
                    {
                      src: `data:image/svg+xml,${typescriptSvg}`,
                      width: 16,
                      height: 16
                    },
                    {
                      src: `data:image/svg+xml,${javascriptSvg}`,
                      width: 16,
                      height: 16
                    },
                    {
                      src: `data:image/svg+xml,${htmlSvg}`,
                      width: 16,
                      height: 16
                    },
                    {
                      src: `data:image/svg+xml,${cssSvg}`,
                      width: 16,
                      height: 16
                    },
                    {
                      src: `data:image/svg+xml,${nodeSvg}`,
                      width: 16,
                      height: 16
                    }
                  ]
                }
              },
              size: {
                value: { min: 16, max: 20 }
              }
            },
            detectRetina: true,
            style: {
              position: "absolute"
            }
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
          }}
        />
      </ParticlesContainer>

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

        <ContactsContainer
          variants={contactsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactItem variants={contactItemVariants}>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactLink href="mailto:ilianfutekov3216@gmail.com">
              <ContactText>ilianfutekov3216@gmail.com</ContactText>
            </ContactLink>
          </ContactItem>

          <ContactItem variants={contactItemVariants}>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>Bulgaria/Sofia</ContactText>
          </ContactItem>

          <ContactItem variants={contactItemVariants}>
            <ContactIcon>
              <FaLinkedin />
            </ContactIcon>
            <ContactLink href="https://www.linkedin.com/in/ilian-futekov-12375912b/" target="_blank" rel="noopener noreferrer">
              <ContactText>/ilian-futekov</ContactText>
            </ContactLink>
          </ContactItem>

          <ContactItem variants={contactItemVariants}>
            <ContactIcon>
              <FaGithub />
            </ContactIcon>
            <ContactLink href="https://github.com/Futekov3216" target="_blank" rel="noopener noreferrer">
              <ContactText>/Futekov3216</ContactText>
            </ContactLink>
          </ContactItem>
        </ContactsContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;