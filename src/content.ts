import type { Lang } from './i18n';

export interface Content {
  nav: { about: string; projects: string; experience: string; contact: string };
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
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
  };
  footer: string;
}

const en: Content = {
  nav: { about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
  hero: {
    chip: 'Open to Werkstudent roles · Regensburg',
    headline: 'MO KAMEL',
    subline: 'Robotics engineer. I make machines think, move, and fail safely.',
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
      { label: 'Robot software', items: ['ROS 1 & 2 (Humble)', 'Linux (Ubuntu)', 'OpenCV', 'YOLOv8', 'MediaPipe'] },
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
        title: 'M.Eng. Mechatronic & Cyber-Physical Systems',
        org: 'TH Deggendorf',
        period: '2026 - 2027 (in progress)',
        note: 'Focus: advanced robotics, autonomous systems, modelling and simulation, functional safety.',
      },
      {
        title: 'B.Sc. Mechanical Engineering - Mechatronics',
        org: 'AASTMT Alexandria',
        period: '2018 - 2023',
        note: 'A+ graduation thesis: embedded driver monitoring system on Jetson Nano and Raspberry Pi.',
      },
      {
        title: 'Inspection Engineer',
        org: 'AMOC, Alexandria',
        period: '2023 - 2024',
        note: 'Root-caused an industrial explosion in two weeks. Authored an ISO 7751 hose specification adopted company-wide. Supervised 6-8 inspectors per round.',
      },
      {
        title: 'Mechatronics Engineer',
        org: 'Invictus UMVs',
        period: '2021 - 2022',
        note: 'Frame design, 8-thruster propulsion, control architecture, and the autonomous vision pipeline for the Brotta II ROV.',
      },
      {
        title: 'Student Research Assistant',
        org: 'PPMI (Verian Group)',
        period: '2025',
        note: 'EU study on the safety of minors on social media platforms.',
      },
    ],
    awardsHeading: 'Awards & leadership',
    awards: [
      { title: 'GPAct Talent Expo', detail: '1st place nationally among 15 teams for the driver monitoring thesis.' },
      { title: 'MATE ROV 2021', detail: '2nd worldwide of 20 teams, 1st regionally. Technical documentation scored 101.5/100.' },
      { title: 'IOI 2024', detail: 'Chief of Organizers: 1,000+ participants, 216 organizers selected from 860+ candidates.' },
    ],
  },
  contact: {
    heading: 'Get in touch',
    body: 'Open to Werkstudent and internship roles in robotics, AI/ML, and automation.',
    emailLabel: 'Email me',
  },
  footer: '© 2026 Mo Kamel',
};

const de: Content = {
  nav: { about: 'Über mich', projects: 'Projekte', experience: 'Werdegang', contact: 'Kontakt' },
  hero: {
    chip: 'Offen für Werkstudentenstellen · Regensburg',
    headline: 'MO KAMEL',
    subline: 'Robotikingenieur. Ich entwickle Maschinen, die denken, sich bewegen und im Fehlerfall sicher reagieren.',
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
      { label: 'Robotik-Software', items: ['ROS 1 & 2 (Humble)', 'Linux (Ubuntu)', 'OpenCV', 'YOLOv8', 'MediaPipe'] },
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
        title: 'M.Eng. Mechatronic & Cyber-Physical Systems',
        org: 'TH Deggendorf',
        period: '2026 - 2027 (laufend)',
        note: 'Schwerpunkte: Robotik, autonome Systeme, Modellierung und Simulation, funktionale Sicherheit.',
      },
      {
        title: 'B.Sc. Mechanical Engineering - Mechatronics',
        org: 'AASTMT Alexandria',
        period: '2018 - 2023',
        note: 'Abschlussarbeit mit Bestnote (A+): eingebettetes Fahrerüberwachungssystem auf Jetson Nano und Raspberry Pi.',
      },
      {
        title: 'Inspection Engineer',
        org: 'AMOC, Alexandria',
        period: '2023 - 2024',
        note: 'Ursachenanalyse einer Industrieexplosion in zwei Wochen. ISO-7751-Schlauchspezifikation verfasst und unternehmensweit übernommen. 6-8 Inspektoren pro Runde angeleitet.',
      },
      {
        title: 'Mechatronics Engineer',
        org: 'Invictus UMVs',
        period: '2021 - 2022',
        note: 'Rahmenkonstruktion, Antrieb mit 8 Thrustern, Regelungsarchitektur und autonome Vision-Pipeline für das ROV Brotta II.',
      },
      {
        title: 'Student Research Assistant',
        org: 'PPMI (Verian Group)',
        period: '2025',
        note: 'EU-Studie zur Sicherheit Minderjähriger auf Social-Media-Plattformen.',
      },
    ],
    awardsHeading: 'Auszeichnungen & Leitung',
    awards: [
      { title: 'GPAct Talent Expo', detail: '1. Platz national unter 15 Teams für die Abschlussarbeit zur Fahrerüberwachung.' },
      { title: 'MATE ROV 2021', detail: 'Platz 2 weltweit von 20 Teams, regional Platz 1. Technische Dokumentation mit 101,5/100 bewertet.' },
      { title: 'IOI 2024', detail: 'Chef-Organisator: über 1.000 Teilnehmende, 216 Organisatoren aus über 860 Bewerbern ausgewählt.' },
    ],
  },
  contact: {
    heading: 'Kontakt aufnehmen',
    body: 'Offen für Werkstudenten- und Praktikumsstellen in Robotik, KI/ML und Automatisierung.',
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
