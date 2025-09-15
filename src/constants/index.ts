import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  sneaker,
  movie,
  foodmart,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Fullstack Developer',
    companyName: 'Xherozone',
    icon: 'https://png.pngtree.com/png-clipart/20230417/original/pngtree-company-line-icon-png-image_9062947.png',
    iconBg: '#E6DEDD',
    date: 'July, 2024 - May 2025',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fullstack Developer',
    companyName: 'TMTech Technology',
    icon: 'https://png.pngtree.com/png-clipart/20230417/original/pngtree-company-line-icon-png-image_9062947.png',
    iconBg: '#E6DEDD',
    date: 'June, 2023 - June 2024',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Sneaker',
    description:
      'This project is a fully responsive store app, beautifully styled with Tailwind CSS. It provides a user-friendly interface for browsing Nike products and includes basic sign-up and sign-in functionality using local storage.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: sneaker,
    sourceCodeLink: 'https://github.com/letantai3001180588/SNEAKER_WEB',
  },
  {
    name: 'Movie',
    description:
      'This project is a fully responsive movie website, beautifully styled with Tailwind CSS. It offers a clean and user-friendly interface for browsing and watching the latest movies. Users can explore films by genre, rating, or release year, and enjoy high-quality streaming with subtitles.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    sourceCodeLink: 'https://github.com/letantai3001180588/Movie',
  },
  {
    name: 'Food Mart',
    description:
      'This project is a fully responsive food mart web app, elegantly styled with Tailwind CSS. It provides a smooth and intuitive interface for browsing fresh groceries and delicious meals. Users can filter products by category, price, and popularity.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'js',
        color: 'yellow-text-gradient',
      },
    ],
    image: foodmart,
    sourceCodeLink: 'https://github.com/letantai3001180588/FoodMart',
  },
];

export { services, technologies, experiences, testimonials, projects };
