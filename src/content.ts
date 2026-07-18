import type { Lang } from './i18n';

export interface Content {
  nav: { about: string; projects: string; experience: string; education: string; contact: string };
  hero: {
    chip: string;
    headline: string;
    subline: string;
    cta: string;
  };
  about: {
    heading: string;
    paragraph: string;
    languagesLabel: string;
    languages: string;
  };
  projects: {
    heading: string;
    pipelineHeading: string;
    demoSoon: string;
    repoLabel: string;
  };
  skills: {
    heading: string;
    groups: { label: string; items: string[] }[];
  };
  experience: {
    heading: string;
    entries: { title: string; org: string; period: string; note: string }[];
    awardsHeading: string;
    awards: { title: string; detail: string }[];
  };
  education: {
    heading: string;
    entries: { degree: string; institution: string; period: string; focus: string; status?: string }[];
  };
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
  };
  footer: string;
}

const en: Content = {
  nav: { about: 'About', projects: 'Projects', experience: 'Experience', education: 'Education', contact: 'Contact' },
  hero: {
    chip: 'Open to Werkstudent roles and internships · Regensburg',
    headline: 'MO KAMEL',
    subline: 'Mechatronics engineer. I make machines think, move, and fail safely.',
    cta: 'View projects',
  },
  about: {
    heading: 'About',
    paragraph:
      'I build at the seam where hardware meets software. Underwater robots, driver monitoring on embedded GPUs, multi-robot fleets in simulation. Currently an M.Eng. student in Mechatronic and Cyber-Physical Systems at TH Deggendorf. What I am known for: calm, sharp execution when systems are under pressure.',
    languagesLabel: 'Languages',
    languages: 'Arabic (native), English (C2), German (B1, improving), French (B1)',
  },
  projects: {
    heading: 'Projects',
    pipelineHeading: 'In the pipeline',
    demoSoon: 'Demo coming soon',
    repoLabel: 'View repository',
  },
  skills: {
    heading: 'Skills',
    groups: [
      { label: 'Robot software', items: ['ROS 1 & 2', 'Linux (Ubuntu)', 'OpenCV', 'YOLOv8', 'MediaPipe'] },
      { label: 'Programming', items: ['Python', 'Embedded C/C++', 'Git & GitHub Actions', 'CMake', 'Docker'] },
      { label: 'ML & data', items: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas'] },
      { label: 'Simulation & CAD', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks', 'Fusion 360', 'AutoCAD'] },
      { label: 'Hardware & control', items: ['PLCs', 'Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
    ],
  },
  experience: {
    heading: 'Experience',
    entries: [
      {
        title: 'Lagerhelfer',
        org: 'DHL',
        period: 'Apr 2026 - Present',
        note: 'Warehouse and parcel handling alongside full-time studies.',
      },
      {
        title: 'Career break & travelling',
        org: '',
        period: 'Aug 2025 - Mar 2026',
        note: 'A planned break to travel, recharge, and plan the next step.',
      },
      {
        title: 'Student Research Assistant',
        org: 'PPMI (Verian Group)',
        period: 'May - Jul 2025',
        note: 'EU study on the safety of minors on social media platforms.',
      },
      {
        title: 'Chef',
        org: 'Burger King',
        period: 'Dec 2024 - Mar 2025',
        note: 'Preparing meals in the kitchen alongside studies.',
      },
      {
        title: 'Inspection Engineer',
        org: 'AMOC, Alexandria',
        period: 'Oct 2023 - Sep 2024',
        note: 'Root-caused an industrial explosion in two weeks. Authored an ISO 7751 hose specification adopted company-wide. Supervised 6-8 inspectors per round.',
      },
      {
        title: 'Real Estate Agent',
        org: 'REI Lead Pros (US, remote)',
        period: 'Apr - Oct 2022',
        note: 'Remote US real estate sales. Ranked 7th company-wide.',
      },
      {
        title: 'Mechatronics Engineer',
        org: 'Invictus UMVs',
        period: 'Jan 2021 - Mar 2022',
        note: 'Frame design, 8-thruster propulsion, control architecture, and the autonomous vision pipeline for the Brotta II ROV.',
      },
      {
        title: 'Mechatronics Engineering Intern',
        org: 'Invictus UMVs',
        period: 'Jul - Dec 2020',
        note: 'Hands-on prototyping and testing that led into the Brotta II engineering role.',
      },
      {
        title: 'Mechanical Engineering Intern',
        org: 'AMOC, Alexandria',
        period: 'Jul 2019',
        note: 'Equipment maintenance, safety audits, and ISO compliance observation.',
      },
    ],
    awardsHeading: 'Awards & leadership',
    awards: [
      { title: 'GPAct Talent Expo', detail: '1st place nationally among 15 teams for the driver monitoring thesis.' },
      { title: 'MATE ROV 2021', detail: '2nd worldwide of 20 teams, 1st regionally. Technical documentation scored 101.5/100.' },
      { title: 'IOI 2024', detail: 'Chief of Organizers: 1,000+ participants, 216 organizers selected from 860+ candidates.' },
    ],
  },
  education: {
    heading: 'Education',
    entries: [
      {
        degree: 'M.Eng. Mechatronic & Cyber-Physical Systems',
        institution: 'TH Deggendorf, Cham',
        period: 'Mar 2026 - Sep 2027',
        focus: 'Advanced robotics, autonomous systems, modelling and simulation, functional safety.',
        status: 'In progress',
      },
      {
        degree: 'International Business',
        institution: 'Jade Hochschule, Wilhelmshaven',
        period: 'Sep 2024 - Feb 2026',
        focus: 'International management and project management.',
        status: 'Coursework',
      },
      {
        degree: 'B.Sc. Mechanical Engineering - Mechatronics',
        institution: 'AASTMT, Alexandria',
        period: 'Sep 2018 - Jul 2023',
        focus: 'Robotics, embedded systems, and computer vision. A+ graduation thesis on an embedded driver-monitoring system.',
      },
    ],
  },
  contact: {
    heading: 'Contact',
    body: 'Open to Werkstudent and internship roles in robotics, AI/ML, automation, and mechatronics.',
    emailLabel: 'Email me',
  },
  footer: '© 2026 Mo Kamel',
};

const de: Content = {
  nav: { about: 'Über mich', projects: 'Projekte', experience: 'Werdegang', education: 'Ausbildung', contact: 'Kontakt' },
  hero: {
    chip: 'Offen für Werkstudentenstellen und Praktika · Regensburg',
    headline: 'MO KAMEL',
    subline: 'Mechatronikingenieur. Ich entwickle Maschinen, die denken, sich bewegen und im Fehlerfall sicher reagieren.',
    cta: 'Projekte ansehen',
  },
  about: {
    heading: 'Über mich',
    paragraph:
      'Ich arbeite an der Nahtstelle zwischen Hardware und Software. Unterwasserroboter, Fahrerüberwachung auf Embedded-GPUs, Multi-Roboter-Flotten in der Simulation. Derzeit Masterstudent in Mechatronic and Cyber-Physical Systems an der TH Deggendorf. Was mich auszeichnet: ruhige, präzise Arbeit, wenn Systeme unter Druck stehen.',
    languagesLabel: 'Sprachen',
    languages: 'Arabisch (Muttersprache), Englisch (C2), Deutsch (B1, in Entwicklung), Französisch (B1)',
  },
  projects: {
    heading: 'Projekte',
    pipelineHeading: 'In Arbeit',
    demoSoon: 'Demo folgt in Kürze',
    repoLabel: 'Repository ansehen',
  },
  skills: {
    heading: 'Kompetenzen',
    groups: [
      { label: 'Robotik-Software', items: ['ROS 1 & 2', 'Linux (Ubuntu)', 'OpenCV', 'YOLOv8', 'MediaPipe'] },
      { label: 'Programmierung', items: ['Python', 'Embedded C/C++', 'Git & GitHub Actions', 'CMake', 'Docker'] },
      { label: 'ML & Daten', items: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas'] },
      { label: 'Simulation & CAD', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks', 'Fusion 360', 'AutoCAD'] },
      { label: 'Hardware & Regelung', items: ['SPS', 'Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
    ],
  },
  experience: {
    heading: 'Werdegang',
    entries: [
      {
        title: 'Lagerhelfer',
        org: 'DHL',
        period: 'Apr 2026 - heute',
        note: 'Lager- und Paketabwicklung neben dem Vollzeitstudium.',
      },
      {
        title: 'Berufliche Auszeit & Reisen',
        org: '',
        period: 'Aug 2025 - Mär 2026',
        note: 'Eine geplante Auszeit zum Reisen, Auftanken und Planen des nächsten Schritts.',
      },
      {
        title: 'Student Research Assistant',
        org: 'PPMI (Verian Group)',
        period: 'Mai - Jul 2025',
        note: 'EU-Studie zur Sicherheit Minderjähriger auf Social-Media-Plattformen.',
      },
      {
        title: 'Koch',
        org: 'Burger King',
        period: 'Dez 2024 - Mär 2025',
        note: 'Essenszubereitung in der Küche neben dem Studium.',
      },
      {
        title: 'Inspection Engineer',
        org: 'AMOC, Alexandria',
        period: 'Okt 2023 - Sep 2024',
        note: 'Ursachenanalyse einer Industrieexplosion in zwei Wochen. ISO-7751-Schlauchspezifikation verfasst und unternehmensweit übernommen. 6-8 Inspektoren pro Runde angeleitet.',
      },
      {
        title: 'Real Estate Agent',
        org: 'REI Lead Pros (USA, remote)',
        period: 'Apr - Okt 2022',
        note: 'Immobilienvertrieb (USA, remote). Unternehmensweit auf Platz 7.',
      },
      {
        title: 'Mechatronics Engineer',
        org: 'Invictus UMVs',
        period: 'Jan 2021 - Mär 2022',
        note: 'Rahmenkonstruktion, Antrieb mit 8 Thrustern, Regelungsarchitektur und autonome Vision-Pipeline für das ROV Brotta II.',
      },
      {
        title: 'Mechatronics Engineering Intern',
        org: 'Invictus UMVs',
        period: 'Jul - Dez 2020',
        note: 'Prototyping und Tests, die in die Brotta-II-Ingenieursrolle mündeten.',
      },
      {
        title: 'Mechanical Engineering Intern',
        org: 'AMOC, Alexandria',
        period: 'Jul 2019',
        note: 'Anlagenwartung, Sicherheitsaudits und Beobachtung der ISO-Konformität.',
      },
    ],
    awardsHeading: 'Auszeichnungen & Leitung',
    awards: [
      { title: 'GPAct Talent Expo', detail: '1. Platz national unter 15 Teams für die Abschlussarbeit zur Fahrerüberwachung.' },
      { title: 'MATE ROV 2021', detail: 'Platz 2 weltweit von 20 Teams, regional Platz 1. Technische Dokumentation mit 101,5/100 bewertet.' },
      { title: 'IOI 2024', detail: 'Chef-Organisator: über 1.000 Teilnehmende, 216 Organisatoren aus über 860 Bewerbern ausgewählt.' },
    ],
  },
  education: {
    heading: 'Ausbildung',
    entries: [
      {
        degree: 'M.Eng. Mechatronic & Cyber-Physical Systems',
        institution: 'TH Deggendorf, Cham',
        period: 'Mär 2026 - Sep 2027',
        focus: 'Robotik, autonome Systeme, Modellierung und Simulation, funktionale Sicherheit.',
        status: 'Laufend',
      },
      {
        degree: 'International Business',
        institution: 'Jade Hochschule, Wilhelmshaven',
        period: 'Sep 2024 - Feb 2026',
        focus: 'Internationales Management und Projektmanagement.',
        status: 'Studienleistungen',
      },
      {
        degree: 'B.Sc. Mechanical Engineering - Mechatronics',
        institution: 'AASTMT, Alexandria',
        period: 'Sep 2018 - Jul 2023',
        focus: 'Robotik, eingebettete Systeme und Computer Vision. Abschlussarbeit mit Bestnote (A+) zu einem eingebetteten Fahrerüberwachungssystem.',
      },
    ],
  },
  contact: {
    heading: 'Kontakt aufnehmen',
    body: 'Offen für Werkstudenten- und Praktikumsstellen in Robotik, KI/ML, Automatisierung und Mechatronik.',
    emailLabel: 'E-Mail schreiben',
  },
  footer: '© 2026 Mo Kamel',
};

export const content: Record<Lang, Content> = { en, de };

export const links = {
  email: 'mkamel860@gmail.com',
  github: 'https://github.com/MKamel7',
  linkedin: 'https://www.linkedin.com/in/mo-kamel7',
};
