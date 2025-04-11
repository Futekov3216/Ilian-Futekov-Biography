import { Experience, Skill, Education } from '../types/cv.types';

export const experiences: Experience[] = [
  {
    company: "Tech Company A",
    position: "Senior Frontend Developer",
    period: "2023 - Present",
    description: [
      "Led development of modern React applications using TypeScript and Vite",
      "Implemented CI/CD pipelines using Docker and GitHub Actions",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "TypeScript", "Docker", "Vite", "Styled Components"]
  },
  {
    company: "Tech Company B",
    position: "Frontend Developer",
    period: "2021 - 2023",
    description: [
      "Developed responsive web applications using React and TypeScript",
      "Optimized application performance and implemented best practices",
      "Collaborated with UI/UX team for better user experience"
    ],
    technologies: ["React", "TypeScript", "Redux", "SASS", "Jest"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SASS", "Vue.js", "Redux"]
  },
  {
    category: "Tools & Technologies",
    items: ["Docker", "Git", "Vite", "Webpack", "Bash", "Postman", "Figma", "Cypress"]
  },
  {
    category: "Soft Skills",
    items: ["Team Leadership", "Problem Solving", "Communication", "Mentoring"]
  }
];

export const education: Education[] = [
  {
    institution: "University of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    period: "2019 - 2021",
    description: [
      "Specialized in Software Engineering and Distributed Systems",
      "Research focus on Cloud Computing and Microservices Architecture"
    ],
    achievements: [
      "Graduated with Distinction",
      "Published 2 research papers in international conferences"
    ]
  },
  {
    institution: "Tech Institute",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    period: "2015 - 2019",
    description: [
      "Major in Full Stack Development",
      "Minor in Artificial Intelligence"
    ],
    achievements: [
      "Dean's List for all semesters",
      "Led the university's programming team"
    ]
  }
];