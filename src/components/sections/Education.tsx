import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Education as EducationType } from '@/types/cv.types';
import { enterAnimation } from '@configs/animationConfig';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = styled(motion.section)`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.accent}10;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 2%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const EducationGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform ${({ theme }) => theme.transitions.standard};
  flex: 1 0 300px;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    flex: 1 0 100%;
  }
`;

const Institution = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const Degree = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const Field = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
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
    transition: { duration: 0.5 }
  }
};

interface EducationProps {
  education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <EducationSection 
      initial={enterAnimation.Education.initial}
      animate={enterAnimation.Education.animate}
      transition={enterAnimation.Education.transition}>
      <SectionTitle>
        <IconWrapper>
          <FaGraduationCap size="0.8em" />
        </IconWrapper>
        Education
      </SectionTitle>
      <EducationGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {education.map((edu, index) => (
          <EducationCard key={index} variants={itemVariants}>
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            <Field>{edu.field}</Field>
            <Period>{edu.period}</Period>
            {edu.description && (
              <List>
                {edu.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </List>
            )}
            {edu.achievements && (
              <>
                <h5 style={{ color: '#64ffda', marginBottom: '0.5rem' }}>Achievements</h5>
                <List>
                  {edu.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              </>
            )}
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationSection>
  );
};

export default Education;