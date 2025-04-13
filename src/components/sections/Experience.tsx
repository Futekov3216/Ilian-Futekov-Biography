import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../../types/cv.types';
import { enterAnimation } from '@configs/animationConfig';
import { MdWork } from 'react-icons/md';

const ExperienceSection =styled(motion.section)`
  grid-area: experience;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.accent}10;
  border-radius: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 300%;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  gap: 2%;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform ${({ theme }) => theme.transitions.standard};

  &:hover {
    transform: translateY(-5px);
  }
`;

const CompanyName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Position = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
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
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tech = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience = ({ experiences }: ExperienceProps) => {
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
      <ExperienceGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} variants={itemVariants}>
            <CompanyName>{exp.company}</CompanyName>
            <Position>{exp.position}</Position>
            <Period>{exp.period}</Period>
            <Description>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </Description>
            <TechStack>
              {exp.technologies.map((tech, i) => (
                <Tech key={i}>{tech}</Tech>
              ))}
            </TechStack>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceSection>
  );
};

export default Experience;