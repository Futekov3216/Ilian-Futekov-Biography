import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Experience as ExperienceType } from '../../types/cv.types';
import { enterAnimation } from '@configs/animationConfig';
import { MdWork, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ExperienceSection = styled(motion.section)`
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.accent}10;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 300%;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  gap: 2%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 200%;
    margin-bottom: 5%;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const ExperienceLayout = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  position: relative;
  align-items: stretch;
  
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 15px;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding-right: 10px;
  
  @media (max-width: 1400px) {
    flex-direction: row;
    overflow-x: auto;
    min-width: unset;
    margin-bottom: 20px;
    padding-right: 0;
    padding-bottom: 10px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 15px;
  }
`;

const TimelineItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  position: relative;
  padding-left: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    /* border-left-color: ${({ theme }) => theme.colors.primary}; */
    
    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
      transform: scale(1.5);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 14px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.accent};
    transition: all 0.3s ease;
  }
  
  @media (max-width: 1400px) {
    min-width: 150px;
    margin-right: 15px;
    margin-bottom: 0;
    border-left: none;
    border-bottom: 3px solid ${({ theme, active }) => active ? theme.colors.primary : theme.colors.accent};
    padding-left: 10px;
    padding-bottom: 20px;
    
    &::before {
      left: 10px;
      top: unset;
      bottom: -8px;
    }
    
    &:hover {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TimelineYear = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const TimelineCompany = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CarouselWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 450px; /* Reduced from 500px */
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.accent};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 500px;
  }
`;

const CarouselTrack = styled(motion.div)<{ $totalSlides: number }>`
  display: flex;
  width: ${props => props.$totalSlides * 100}%;
  transition: transform 0.4s ease;
  height: 100%;
`;

const ExperienceCard = styled(motion.div)<{ $isActive: boolean; $totalSlides: number }>`
  padding: 2rem;
  width: ${props => 100 / props.$totalSlides}%;
  flex-shrink: 0;
  opacity: ${props => props.$isActive ? 1 : 0.6};
  transition: opacity 0.4s ease;
  height: 100%;
  overflow-y: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const CompanyName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Position = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Period = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  font-size: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding-left: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const TechStackSection = styled.div`
  margin-top: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 1rem;
  }
`;

const TechStackTitle = styled.h5`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

const NavigationButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s;
  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: auto;
  height: auto;
  padding: 6px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  font-size: 0.9rem;
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ExperienceProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  margin: 0 10px;
`;

const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 5px;
`;

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Function to categorize technologies
  const categorizeTech = (technologies: string[]) => {
    const frontendTech = ['React', 'ReactJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Vue.js', 'Redux', 'Styled Components', 'jQuery', 'MooTools'];
    const result = {
      frontend: [] as string[],
      other: [] as string[]
    };

    technologies.forEach(tech => {
      if (frontendTech.some(ft => tech.includes(ft))) {
        result.frontend.push(tech);
      } else {
        result.other.push(tech);
      }
    });

    return result;
  };

  const goNext = () => {
    if (currentIndex < experiences.length - 1) {
      setDirection('next');
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  return (
    <ExperienceSection
      initial={enterAnimation.Experience.initial}
      animate={enterAnimation.Experience.animate}
      transition={enterAnimation.Experience.transition}
    >
      <SectionTitle>
        <IconWrapper>
          <MdWork size="0.8em" />
        </IconWrapper>
        Work Experience
      </SectionTitle>
      
      <ExperienceLayout>
        <TimelineContainer>
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index} 
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            >
              <TimelineYear>{exp.period}</TimelineYear>
              <TimelineCompany>{exp.company}</TimelineCompany>
            </TimelineItem>
          ))}
        </TimelineContainer>
        
        <CarouselWrapper>
          <CarouselContainer>
            <CarouselTrack 
              $totalSlides={experiences.length}
              style={{ transform: `translateX(-${currentIndex * (100 / experiences.length)}%)` }}
            >
              {experiences.map((exp, index) => {
                const categorizedTech = categorizeTech(exp.technologies);
                
                return (
                  <ExperienceCard 
                    key={index} 
                    $isActive={index === currentIndex}
                    $totalSlides={experiences.length}
                  >
                    <CompanyName>{exp.company}</CompanyName>
                    <Position>{exp.position}</Position>
                    <Period>{exp.period}</Period>
                    <Description>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Description>
                    
                    {categorizedTech.frontend.length > 0 && (
                      <TechStackSection>
                        <TechStackTitle>Frontend Technologies</TechStackTitle>
                        <TechStack>
                          {categorizedTech.frontend.map((tech, i) => (
                            <Tech key={i}>{tech}</Tech>
                          ))}
                        </TechStack>
                      </TechStackSection>
                    )}
                    
                    {categorizedTech.other.length > 0 && (
                      <TechStackSection>
                        <TechStackTitle>Other Technologies</TechStackTitle>
                        <TechStack>
                          {categorizedTech.other.map((tech, i) => (
                            <Tech key={i}>{tech}</Tech>
                          ))}
                        </TechStack>
                      </TechStackSection>
                    )}
                  </ExperienceCard>
                );
              })}
            </CarouselTrack>
          </CarouselContainer>
        </CarouselWrapper>
      </ExperienceLayout>
      
      <NavigationControls>
        <NavigationButton 
          onClick={goPrev} 
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdKeyboardArrowLeft size={32} />
        </NavigationButton>
        
        <ExperienceProgress>
          {currentIndex + 1} of {experiences.length}
        </ExperienceProgress>
        
        <NavigationButton 
          onClick={goNext} 
          disabled={currentIndex === experiences.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdKeyboardArrowRight size={32} />
        </NavigationButton>
      </NavigationControls>
      
      <IndicatorsContainer>
        {experiences.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </Indicator>
        ))}
      </IndicatorsContainer>
    </ExperienceSection>
  );
};

export default Experience;