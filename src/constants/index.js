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
  question_mark,
  edx,
  goodman,
  makeupjunkie,
  jobit,
  tripguide,
  threejs,
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
    title: "Junior Developer",
    company_name: "Place for your company's name",
    icon: question_mark,
    iconBg: "#383E56",
    date: "near future",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    source_code_link: "https://github.com/",
    deployment_url: "https://ecom-react-app-makeup-junkie.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
