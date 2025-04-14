import { Experience, Skill, Education } from '@/types/cv.types';

export const experiences: Experience[] = [
  {
    company: "EGT Digital",
    position: "ReactJS Developer",
    period: `Nov 2021 - Present (as of ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })})`,
    description: [
      "Creating various Gambling games using ReactJS with TypeScript",
      "Working with Adobe XD, Figma, Jira for design implementation",
      "Using Git (Bitbucket) for version control",
      "Working with CI/CD tools like Docker and Jenkins",
      "Automating various tasks using Bash scripting",
    ],
    technologies: ["ReactJS","Redux","Styled-components", "TypeScript", "Docker", "Jenkins", "Bash", "Figma", "Jira"]
  },
  {
    company: "Hostopia",
    position: "Front-end developer",
    period: "May 2019 - Nov 2021",
    description: [
      "Maintained and developed a site builder (drag and drop type)",
      "Worked with MooTools, ReactJS, and JavaScript",
      "Used MacOS, Gitlab, and Docker for development"
    ],
    technologies: ["ReactJS", "JavaScript", "MooTools", "Docker", "Gitlab", "MacOS"]
  },
  {
    company: "EGT Interactive",
    position: "JavaScript Developer",
    period: "May 2018 - May 2019",
    description: [
      "FULL STACK DEV WORK: Developed virtual Casino with Node.js(express), MongoDB, React.js",
      "FRONT-END-DEV WORK: Created various Gambling games using Vue.js, ES6, Web Sockets and SASS"
    ],
    technologies: ["Node.js", "MongoDB", "React.js", "Vue.js", "Web Sockets", "SASS"]
  },
  {
    company: "Economedia",
    position: "Front End Developer",
    period: "January 2016 - November 2017",
    description: [
      "Converted pages from PSD to HTML using HTML/CSS/JavaScript/jQuery",
      "Worked closely with back-end developers for debugging and implementing new HTML pages",
      "Maintained and improved the client-side of sites including dnevnik.bg, capital.bg, bacchus.bg",
      "Finished projects including capital.bg/k100-2017",
      "Developed rich media ad formats using HTML/CSS/Javascript/jQuery and implementing them to work through DFP"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Linux/ubuntu", "SVN", "Redmine"]
  },
  {
    company: "Website.bg",
    position: "Support",
    period: "January 2015 - October 2015",
    description: [
      "Communicated with customers through phone or e-mail for website issues",
      "Worked with HTML/CSS for website modifications",
      "Managed and created Google AdWords campaigns"
    ],
    technologies: ["HTML", "CSS", "Google AdWords"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["JavaScript", "ReactJS", "TypeScript", "Vue.js", "HTML", "CSS", "SASS", "jQuery"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "Jenkins", "Jira", "Figma", "Adobe XD", "Bash scripting", "Linux"]
  },
  {
    category: "Interests",
    items: ["Linux", "Python", "Firebase", "CTFs"]
  }
];

export const education: Education[] = [
  {
    institution: "UNIVERSITY of LIBRARY STUDIES and INFORMATION TECHNOLOGIES",
    degree: "Bachelor's degree",
    field: "Information Technology",
    period: "September 2009 - May 2013",
    description: [
      "Courses included: Computer Architectures, C++, C#, Operating Systems, Computer Networks and Communications",
      "Database design, MySQL, Artificial intelligence and expert systems",
      "Application software, Information Management"
    ]
  }
];