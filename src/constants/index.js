import {
  react_developer,
  front_end_developer,
  javascript_developer,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  dishoom,
  silatha,
  edx,
  goodman,
  makeupjunkie,
  cityguide,
  threejs,
  readme,
  teamprofile,
  quizgame,
  weatherdashboard,
  robofriends,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react_developer,
  },
  {
    title: "Front-End Developer",
    icon: front_end_developer,
  },
  {
    title: "JavaScript Developer",
    icon: javascript_developer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React Native Developer Intern",
    company_name: "Silatha",
    icon: silatha,
    iconBg: "#383E56",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Developed a crossword puzzle app using React Native, focusing on user-friendly interfaces and seamless functionality.",
      "Integrated Firebase for backend functions like database management and user authentication.",
      "Enhanced app performance and user engagement through innovative feature development and optimization.",
      "Worked in a small, agile team of two, focusing primarily on functionality design, app development, and troubleshooting, ensuring robust performance and user experience.",
    ],
  },
  {
    title: "Front-End Development Bootcamp",
    company_name: "edX",
    icon: edx,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Fundamentals of HTML, CSS, and JavaScript.",
      "Building and deploying web applications.",
      "Project-based learning with hands-on coding projects.",
      "Collaboration and teamwork skills.",
      "Industry-relevant tools and technologies used in front-end development.",
      "Front-end libraries and frameworks, such as React.",
      "Responsive web design principles and techniques.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "Goodman",
    icon: goodman,
    iconBg: "#383E56",
    date: "Oct 2019 - Sep 2022",
    points: [
      "Effectively delegated tasks and responsibilities to team members, optimizing their strengths and maximizing overall team performance.",
      "Demonstrated excellent verbal and written communication skills, effectively conveying complex ideas and information to team members, stakeholders, and clients.",
      "Identified and analyzed problems, developed innovative solutions, and implemented effective strategies to overcome challenges.",
      "Demonstrated strong emotional intelligence in managing team dynamics, addressing conflicts, and building positive relationships with team members.",
    ],
  },
  {
    title: "Server",
    company_name: "Dishoom",
    icon: dishoom,
    iconBg: "#E6DEDD",
    date: "Apr 2016 - Aug 2019",
    points: [
      "Informally recognized as a lead server with responsibilities of performing additional tasks to keep dining room running smoothly, opening / closing and coaching and mentoring new servers",
      "Providing friendly, welcoming, and personalized service to guests, ensuring their needs are met and exceeded..",
      "Using persuasive sales techniques to promote specials, upsell menu items, and increase revenue for the restaurant.",
      "Ability to multitask, prioritize tasks, and work efficiently in a fast-paced environment to ensure timely and smooth service.",
    ],
  },
];

const projects = [
  {
    name: "Make-up Junkie",
    description:
      "Make-up Junkie is a responsive e-commerce website of make-up products where the user can see and buy products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
      {
        name: "yarn",
        color: "green-text-gradient",
      },
      {
        name: "vite.js",
        color: "pink-text-gradient",
      },
    ],
    image: makeupjunkie,
    source_code_link: "https://github.com/OlgaFelczak/eComReactApp",
    deployment_url: "https://ecom-react-app-makeup-junkie.netlify.app/",
  },
  {
    name: "City Guide",
    description:
      "Web page that allows user to search for any city and as a result receive information useful for traveling.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cityguide,
    source_code_link: "https://github.com/Pav85/city-guide",
    deployment_url: "https://pav85.github.io/city-guide/",
  },
  {
    name: "Robofriends",
    description:
      "Simple application that displays a list of robots and allows user to to filter them using the search bar",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: robofriends,
    source_code_link: "https://github.com/Pav85/robofriends",
    deployment_url: "https://pav85.github.io/robofriends/",
  },
  {
    name: "README Generator",
    description:
      "Project designed to help create a professional README file for all repositories.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "markdown",
        color: "pink-text-gradient",
      },
    ],
    image: readme,
    source_code_link: "https://github.com/Pav85/my-README-generator",
    deployment_url: "https://pav85.github.io/my-README-generator/",
  },
  {
    name: "Team Profile Generator",
    description: "Project designed to create a team profile using Node.js.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: teamprofile,
    source_code_link: "https://github.com/Pav85/my-team-profile-generator",
    deployment_url: "https://pav85.github.io/my-team-profile-generator/",
  },
  {
    name: "Quiz Game",
    description:
      "Time coding quiz with multiple-choice questions about JavaScript.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quizgame,
    source_code_link: "https://github.com/Pav85/quiz-game",
    deployment_url: "https://pav85.github.io/quiz-game/",
  },
  {
    name: "Weather Dashboard",
    description:
      "Weather Dashboard that displays weather information of city searched by user.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: weatherdashboard,
    source_code_link: "https://github.com/Pav85/weather-dashboard",
    deployment_url: "https://pav85.github.io/weather-dashboard/",
  },
];

export { services, technologies, experiences, projects };
