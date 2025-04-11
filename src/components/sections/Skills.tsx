import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Skill } from '../../types/cv.types';
import { enterAnimation } from '@configs/animationConfig';

const SkillsSection = styled(motion.section)`
  grid-area: skills;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.accent}10;
  border-radius: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 5%;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 3rem;
`;

const SkillCategoryContainer = styled(motion.div)`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.standard};

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <SkillsSection
          initial={enterAnimation.Skills.initial}
          animate={enterAnimation.Skills.animate}
          transition={enterAnimation.Skills.transition}
    >
      <SectionTitle>
        Skills
      </SectionTitle>
      <SkillsContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((category, index) => (
          <SkillCategoryContainer key={index} variants={itemVariants}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsGrid>
              {category.items.map((skill, i) => (
                <SkillItem key={i} variants={itemVariants}>
                  {skill}
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillCategoryContainer>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;