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
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 
    "hero content";
  gap: 1rem;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "hero"
      "content";
  }
`

const ContentSection = styled.div`
  grid-area: content;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;

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
          <Hero />
          <ContentSection>
            <Experience experiences={experiences} />
            <Education education={education} />
            <Skills skills={skills} />
          </ContentSection>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
