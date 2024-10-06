import eventEase from '../../assets/EventEase.png';
import ctvetWebsite from '../../assets/CTVET_Website.png';
import gsdfWebsite from '../../assets/GSDF_Website.png';
import ssbWebsite from '../../assets/SSB_Website.png';
import figma from '../../assets/figma.png';
import framer from '../../assets/framer.png';
import illustrator from '../../assets/illustrator.png';
import sketch from '../../assets/sketch.png';
import canva from '../../assets/canva.png';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { TiLocationOutline } from 'react-icons/ti';
import { IoDiamondOutline } from 'react-icons/io5';
import { IoPulseOutline } from 'react-icons/io5';
import { LuGraduationCap } from 'react-icons/lu';
import { IoTimeOutline } from 'react-icons/io5';
export const projects = [
  {
    id: 1,
    title: 'Event Ease Management System',
    imageUrl: eventEase,
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    demoUrl: ['https://eventease-lry3.onrender.com/'],
  },
  {
    id: 2,
    title: 'CTVET Ghana Website',
    imageUrl: [ctvetWebsite],
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    demoUrl: 'https://ctvet.gov.gh/',
  },
  {
    id: 3,
    title: 'CTVET GSDF Website',
    imageUrl: [gsdfWebsite],
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    demoUrl: 'https://gsdf.ctvet.gov.gh/',
  },
  {
    id: 4,
    title: 'CTVET SSB Website',
    imageUrl: [ssbWebsite],
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    demoUrl: 'https://ssb.ctvet.gov.gh/',
  },
  {
    id: 3,
    title: 'CTVET GSDF Website',
    imageUrl: [gsdfWebsite],
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    demoUrl: 'https://gsdf.ctvet.gov.gh/',
  },
  {
    id: 4,
    title: 'CTVET SSB Website',
    imageUrl: [ssbWebsite],
    // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    demoUrl: 'https://ssb.ctvet.gov.gh/',
  },
];

export const tools = [
  {
    id: 1,
    title: 'Figma',
    imageUrl: figma,
    description: 'Collaborative Design',
  },
  {
    id: 2,
    title: 'Framer',
    imageUrl: framer,
    description: 'Web Design',
  },
  {
    id: 3,
    title: 'Adobe Illustrator',
    imageUrl: illustrator,
    description: 'Vector Graphics',
  },
  {
    id: 4,
    title: 'Sketch',
    imageUrl: sketch,
    description: 'Collaborative Design',
  },
  {
    id: 5,
    title: 'Canva',
    imageUrl: canva,
    description: 'Online Graphic Design',
  },
];

export const contactDetails = [
  {
    id: 1,
    icon: <FiPhone />,
    property: '+233 205 858 348',
    description: 'Call me',
  },
  {
    id: 2,
    icon: <MdOutlineMail />,
    property: 'amaningopoku@gmail.com',
    description: 'Email me',
  },
  {
    id: 3,
    icon: <TiLocationOutline />,
    property: 'Accra, Ghana',
    description: 'Location',
  },
];



export const hireMeReasons = [
    {
        id: 1,
        icon: <IoDiamondOutline />,
        title: 'Client-Centric Approach',
        description: "I ensure every project reflects your brand's unique identity.",
    },
    {
        id: 2,
        icon: <IoPulseOutline />,
        title: 'Commitment to Quality',
        description: 'I ensure your website is responsive, secure, and optimized.',
    },
    {
        id: 3,
        icon: <LuGraduationCap />,
        title: 'Proven Skills',
        description: 'I create visually appealing, user-friendly, high-performance websites.',
    },
    {
        id: 4,
        icon: <IoTimeOutline />,
        title: 'Timely Delivery',
        description: 'I respect deadlines and ensure timely delivery of projects.',
    },
];
