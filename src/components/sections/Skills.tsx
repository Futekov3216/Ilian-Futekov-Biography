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
  FaChalkboardTeacher,
  FaNodeJs,
  FaLinux,
  FaPython,
  FaShieldAlt,
  FaJenkins,
  FaJira,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript,
  SiRedux,
  SiVite,
  SiWebpack,
  SiGnubash,
  SiPostman,
  SiCypress,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJquery,
  SiAdobexd
} from 'react-icons/si';

const SkillsSection = styled(motion.section)`
  padding: 2%;
  background: ${({ theme }) => theme.colors.accent}10;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px 4%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 3%;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 250%;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  gap: 2%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 200%;
    margin-bottom: 4%;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const SkillCategoryContainer = styled(motion.div)`
  margin-bottom: 1.5%;
  flex: 1;
  min-width: 200px;
  padding-right: 1.5%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding-right: 0;
  }
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 130%;
  margin-bottom: 0.8%;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1.5%;
  }
`;

const SkillItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.6rem;
  border-radius: 6px;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.standard};
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  flex: 1 0 120px;
  margin-bottom: 2%;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem;
    min-height: 36px;
    flex: 1 0 100px;
  }
`;

const SkillIcon = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  margin-right: 8px;
`;

const SkillText = styled.span`
  flex: 1;
  font-size: 0.9rem;
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
        case 'ReactJS':
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
        case 'jQuery':
          return <SiJquery />;
        case 'MooTools':
          return <SiJavascript />;
        default:
          return null;
      }
    } else if (category === "Backend") {
      switch (skill) {
        case 'Node.js':
          return <FaNodeJs />;
        case 'Express':
          return <SiExpress />;
        case 'MongoDB':
          return <SiMongodb />;
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
        case 'Bash scripting':
          return <SiGnubash />;
        case 'Postman':
          return <SiPostman />;
        case 'Figma':
          return <FaFigma />;
        case 'Cypress':
          return <SiCypress />;
        case 'Jenkins':
          return <FaJenkins />;
        case 'Jira':
          return <FaJira />;
        case 'Adobe XD':
          return <SiAdobexd />;
        case 'Linux':
          return <FaLinux />;
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
    } else if (category === "Interests") {
      switch (skill) {
        case 'Linux':
          return <FaLinux />;
        case 'Python':
          return <FaPython />;
        case 'Firebase':
          return <SiFirebase />;
        case 'CTFs':
          return <FaShieldAlt />;
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