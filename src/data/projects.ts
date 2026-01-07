// Project data for portfolio - focusing on UX Design work
// These are real projects with UX research, journey mapping, and service design focus

import golfSaudiCover from '../assets/golf-saudi-cover.png';
import ksreliefCover from '../assets/ksrelief-cover.png';
import mosCover from '../assets/mos-cover.png';
import filmCover from '../assets/film-cover.jpg';

export interface ProjectOutcome {
    metric: string;
    label: string;
}

export interface Project {
    id: number;
    title: string;
    titleAr?: string;
    description: string;
    tags: string[];
    cover: string;
    timeline: string;
    role: string;
    client: string;
    overview: string;
    challenge: string;
    solution: string;
    outcomes: ProjectOutcome[];
    responsibilities: string[];
    methods: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Golf Saudi',
        titleAr: 'جولف السعودية',
        description: 'Designed user experience for Golf Saudi\'s digital booking platform, optimizing user journeys for golfers of all skill levels.',
        tags: ['UX Research', 'User Testing', 'Journey Mapping'],
        cover: golfSaudiCover,
        timeline: '6 months',
        role: 'UX Designer',
        client: 'Golf Saudi / Saudi Golf Federation',
        overview: 'Golf Saudi required a digital platform to serve both novice and experienced golfers, enabling easy booking of tee times, lessons, and membership management.',
        challenge: 'The existing booking process was complex and intimidating for new golfers. User research revealed that 65% of potential users abandoned the booking process due to confusion about golf terminology and unclear information architecture.',
        solution: 'Through user research and iterative testing, I redesigned the information architecture to guide users based on their experience level. I created onboarding flows that educated newcomers while providing shortcuts for experienced golfers.',
        outcomes: [
            { metric: '40%', label: 'Increase in Engagement' },
            { metric: '65%', label: 'Faster Booking' },
            { metric: '4.8/5', label: 'User Satisfaction' },
        ],
        responsibilities: [
            'Conducted user research and competitive analysis',
            'Created user personas segmented by golf experience level',
            'Designed information architecture and user flows',
        ],
        methods: ['User Research', 'Personas', 'Card Sorting', 'Prototyping', 'A/B Testing'],
    },
    {
        id: 2,
        title: 'King Salman Foundation',
        titleAr: 'مؤسسة الملك سلمان',
        description: 'Led service design for the humanitarian aid portal, streamlining user interactions for beneficiaries and partners.',
        tags: ['Service Design', 'Accessibility', 'CX Strategy'],
        cover: ksreliefCover,
        timeline: '10 months',
        role: 'UX/CX Designer',
        client: 'King Salman Humanitarian Aid & Relief Centre (KSRelief)',
        overview: 'KSRelief provides humanitarian aid to millions globally. The digital portal needed to serve diverse stakeholders across varying connectivity and device conditions.',
        challenge: 'Users in humanitarian contexts face unique challenges: limited connectivity, shared devices, language barriers, and stress. The existing systems were fragmented.',
        solution: 'I developed comprehensive service blueprints mapping all touchpoints and user contexts. Working closely with field teams, I designed for offline-first, low-bandwidth scenarios.',
        outcomes: [
            { metric: '35%', label: 'Faster Task Completion' },
            { metric: '50%', label: 'Fewer Support Requests' },
            { metric: '82%', label: 'User Success Rate' },
        ],
        responsibilities: [
            'Developed service blueprints across all touchpoints',
            'Conducted contextual research with field teams',
            'Created inclusive design guidelines',
        ],
        methods: ['Service Blueprints', 'Contextual Inquiry', 'Inclusive Design', 'Stakeholder Workshops'],
    },
    {
        id: 3,
        title: 'Ministry of Sport App',
        titleAr: 'تطبيق وزارة الرياضة',
        description: 'Contributed to UX design for the Ministry of Sport super app, enabling citizens to access sports services and events.',
        tags: ['Mobile UX', 'User Research', 'Accessibility'],
        cover: mosCover,
        timeline: '8 months',
        role: 'UX Designer',
        client: 'Saudi Ministry of Sport',
        overview: 'The Ministry of Sport needed a comprehensive mobile app to connect citizens with sports facilities, events, and programs across Saudi Arabia.',
        challenge: 'Citizens struggled to discover and access sports services across multiple disconnected platforms. The diverse user base had varying digital literacy levels.',
        solution: 'I conducted extensive user research with 80+ participants across different demographics. Through journey mapping, I identified pain points and opportunities for a unified experience.',
        outcomes: [
            { metric: '45%', label: 'Service Discoverability' },
            { metric: '60%', label: 'Task Completion' },
            { metric: 'WCAG 2.1', label: 'Accessibility' },
        ],
        responsibilities: [
            'Conducted user interviews and contextual inquiries',
            'Created personas and journey maps',
            'Developed accessibility guidelines',
        ],
        methods: ['User Interviews', 'Journey Mapping', 'Accessibility Audits', 'Usability Testing'],
    },
    {
        id: 4,
        title: 'Saudi Film Platform',
        titleAr: 'منصة الفيلم السعودي',
        description: 'Designed the user experience for Saudi Arabia\'s film industry platform, connecting filmmakers with opportunities and resources.',
        tags: ['UX Design', 'Information Architecture', 'Bilingual'],
        cover: filmCover,
        timeline: '6 months',
        role: 'UX Designer',
        client: 'Saudi Film Commission',
        overview: 'The Saudi Film Platform serves as a hub for the growing film industry, connecting producers, directors, actors, and crew with projects, funding, and training.',
        challenge: 'The film industry ecosystem needed a digital home that serves diverse stakeholders with different goals—from established producers to aspiring filmmakers.',
        solution: 'I mapped the complete user journey for each stakeholder type and designed flexible navigation that adapts to user needs. The bilingual experience ensures accessibility for Arabic and English users.',
        outcomes: [
            { metric: '3x', label: 'User Registration' },
            { metric: '55%', label: 'Engagement Increase' },
            { metric: '4.6/5', label: 'User Rating' },
        ],
        responsibilities: [
            'Conducted stakeholder research and interviews',
            'Designed information architecture for complex content',
            'Created bilingual user experience',
        ],
        methods: ['Stakeholder Research', 'IA Design', 'Prototyping', 'Usability Testing'],
    },
];

export default projects;
