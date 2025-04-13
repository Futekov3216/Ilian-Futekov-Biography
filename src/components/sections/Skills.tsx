import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Skill } from '../../types/cv.types';
import { enterAnimation } from '@configs/animationConfig';
import { GiSkills } from 'react-icons/gi';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaVuejs,
  FaDocker,
  FaGit,
  FaFigma,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaChalkboardTeacher
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript,
  SiRedux,
  SiVite,
  SiWebpack,
  SiGnubash,
  SiPostman,
  SiCypress
} from 'react-icons/si';

const SkillsSection = styled(motion.section)`
  grid-area: skills;
  padding: 2%;
  background: ${({ theme }) => theme.colors.accent}10;
  border-radius: 1%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 5%;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2%;
  width: 100%;
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

const SkillCategoryContainer = styled(motion.div)`
  margin-bottom: 2%;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 150%;
  margin-bottom: 1%;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 5%;
`;

const SkillItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 50px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SkillIcon = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
`;

const SkillText = styled.span`
  flex: 1;
`;

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  // Function to get the appropriate icon for each skill
  const getSkillIcon = (skill: string, category: string) => {
    if (category === "Frontend") {
      switch (skill) {
        case 'React':
          return <FaReact />;
        case 'TypeScript':
          return <SiTypescript />;
        case 'JavaScript':
          return <SiJavascript />;
        case 'HTML':
          return <FaHtml5 />;
        case 'CSS':
          return <FaCss3Alt />;
        case 'SASS':
          return <FaSass />;
        case 'Vue.js':
          return <FaVuejs />;
        case 'Redux':
          return <SiRedux />;
        default:
          return null;
      }
    } else if (category === "Tools & Technologies") {
      switch (skill) {
        case 'Docker':
          return <FaDocker />;
        case 'Git':
          return <FaGit />;
        case 'Vite':
          return <SiVite />;
        case 'Webpack':
          return <SiWebpack />;
        case 'Bash':
          return <SiGnubash />;
        case 'Postman':
          return <SiPostman />;
        case 'Figma':
          return <FaFigma />;
        case 'Cypress':
          return <SiCypress />;
        default:
          return null;
      }
    } else if (category === "Soft Skills") {
      switch (skill) {
        case 'Team Leadership':
          return <FaUsers />;
        case 'Problem Solving':
          return <FaLightbulb />;
        case 'Communication':
          return <FaComments />;
        case 'Mentoring':
          return <FaChalkboardTeacher />;
        default:
          return null;
      }
    }
    
    return null;
  };

  return (
    <SkillsSection
      initial={enterAnimation.Skills.initial}
      animate={enterAnimation.Skills.animate}
      transition={enterAnimation.Skills.transition}
    >
      <SectionTitle>
        <IconWrapper>
          <GiSkills size="0.8em" />
        </IconWrapper>
        Skills
      </SectionTitle>
      <SkillsContainer>
        {skills.map((category, index) => (
          <SkillCategoryContainer key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsGrid>
              {category.items.map((skill, i) => (
                <SkillItem key={i}>
                  <SkillIcon>
                    {getSkillIcon(skill, category.category)}
                  </SkillIcon>
                  <SkillText>{skill}</SkillText>
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