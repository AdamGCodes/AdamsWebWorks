// Brand Icons
import {
    faPython,
    faJs,
    faReact,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faSass,
    faGithub,
    faFigma,
    faSlack,
    faTrello,
    faMicrosoft,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

// Solid Icons
import {
    faCode,
    faCogs,
    faDatabase,
    faServer,
    faMugHot,
    faVideo,
    faChartLine,
    faProjectDiagram,
    faSyncAlt,
    faChessBoard,
    faUsers,
    faUniversalAccess,
    faUserCheck,
    faWaveSquare
} from '@fortawesome/free-solid-svg-icons';

// Stack Skills
export const stackSkills = [
    { icon: faPython, label: 'Python' },
    { icon: faJs, label: 'JavaScript' },
    { icon: faReact, label: 'React' },
    { icon: faCode, label: 'Django' },
    { icon: faCode, label: 'Flask' },
    { icon: faNodeJs, label: 'Node.js' },
    { icon: faCss3Alt, label: 'CSS' },
    { icon: faHtml5, label: 'HTML' },
    { icon: faCogs, label: 'Express.js' },
    { icon: faSass, label: 'Sass' },
    { icon: faDatabase, label: 'PostgreSQL' },
    { icon: faDatabase, label: 'SQL' },
    { icon: faDatabase, label: 'MongoDB' },
    { icon: faDatabase, label: 'SQL Server' },
    { icon: faGithub, label: 'GitHub' },
    { icon: faMugHot, label: 'Snacks', optional: true },
    { icon: faCode, label: 'Cursor' },
    { icon: faWaveSquare, label: 'Framer Motion' }
];

// Workflow & Methods
export const workflowAndMethods = [
    { icon: faFigma, label: 'Figma' },
    { icon: faSlack, label: 'Slack' },
    { icon: faTrello, label: 'Trello' },
    { icon: faMicrosoft, label: 'Microsoft 365' },
    { icon: faVideo, label: 'Microsoft Teams' },
    { icon: faGoogle, label: 'Google Workspace' },
    { icon: faChartLine, label: 'HubSpot' },
    { icon: faVideo, label: 'Zoom' },
    { icon: faProjectDiagram, label: 'Project Management' },
    { icon: faSyncAlt, label: 'Agile' },
    { icon: faChessBoard, label: 'Scrum' },
    { icon: faUsers, label: 'Stakeholder Coms' },
    { icon: faUniversalAccess, label: 'Accessibility-First' },
    { icon: faUserCheck, label: 'User-Centred Design' },
    { icon: faMugHot, label: 'More Snacks', optional: true }
];

// One map to rule them all
export const iconMap = [...stackSkills, ...workflowAndMethods].reduce((acc, { label, icon }) => {
    acc[label.toLowerCase()] = icon;
    return acc;
}, {});
  