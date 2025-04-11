import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem 2rem;
  z-index: 100;
  background: ${({ theme }) => theme.colors.background}CC;
  backdrop-filter: blur(8px);
  border-radius: 0 0 0 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavItem = styled(motion.li)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.standard};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <NavList>
        <NavItem
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('hero')}
        >
          Home
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('experience')}
        >
          Experience
        </NavItem>
        <NavItem
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;