import eventEase from '../../assets/EventEase.png';
import ctvetWebsite from '../../assets/CTVET_Website.png';
import gsdfWebsite from '../../assets/GSDF_Website.png';
import ssbWebsite from '../../assets/SSB_Website.png';
import figma from '../../assets/figma.png';
import framer from '../../assets/framer.png';
import illustrator from '../../assets/illustrator.png';
import sketch from '../../assets/sketch.png';
import canva from '../../assets/canva.png';

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
        imageUrl:   [ctvetWebsite],                                                     
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        technologies: ['WordPress', 'PHP', 'MySQL'],
        demoUrl: 'https://ctvet.gov.gh/',
    },
    {
        id: 3,
        title: 'CTVET GSDF Website',
        imageUrl: [gsdfWebsite],
        // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
        technologies: ['WordPress', 'PHP',  'MySQL'],
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
]

export const tools = [
    {
        id: 1,
        title: 'Figma',
        imageUrl: figma,
        description: 'Collaborative Design'
    },
    {
        id: 2,
        title: 'Framer',
        imageUrl: framer,
        description: 'Web Design'
    },
    {
        id: 3,
        title: 'Adobe Illustrator',
        imageUrl: illustrator,
        description: 'Vector Graphics'
    },
    {
        id: 4,
        title: 'Sketch',
        imageUrl: sketch,
        description: 'Collaborative Design'
    },
    {
        id: 5,
        title: 'Canva',
        imageUrl: canva,
        description: 'Online Graphic Design'
    },
]