import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@styles/GlobalStyles'
import { theme } from '@styles/theme'
import Hero from '@components/sections/Hero'
import Experience from '@components/sections/Experience'
import Skills from '@components/sections/Skills'
import Education from '@components/sections/Education'
import { experiences, skills, education } from '@data/cvData'

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: hidden;
`

const MainContent = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const HeroSection = styled.div`
  flex: 1;
  margin-right: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

const ContentSection = styled.div`
  flex: 2;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
  overflow-x: hidden;

  /* Styling the scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.accent}10;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: none;
    overflow-y: visible;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <MainContent>
          <HeroSection>
            <Hero />
          </HeroSection>
          <ContentSection>
            <Experience experiences={experiences} />
            <Skills skills={skills} />
            <Education education={education} />
          </ContentSection>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
