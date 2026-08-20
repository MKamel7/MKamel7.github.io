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
      'M.Eng. student in Mechatronic and Cyber-Physical Systems at TH Deggendorf, based in Regensburg. I work where the control software meets the machine it drives: ROS 2 on the robot side, IEC 61131-3 and OPC UA on the plant side, and a traceability gate between them that fails the build when a safety requirement loses its test. Every project is documented with the measurement that supports it, and with what it does not do. Previously inspection engineer at a mineral-oil refinery: root-caused a plant explosion in two weeks and wrote the company standard that closed it.',
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
      { label: 'Robotics', items: ['ROS 2 (Jazzy, Humble)', 'ROS 1', 'Nav2', 'MoveIt 2', 'OMPL', 'ros2_control', 'URDF & xacro', 'tf2', 'RViz', 'colcon', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrial automation', items: ['IEC 61131-3 Structured Text', 'CODESYS', 'PackML', 'ISA-TR88.00.02', 'Modbus TCP', 'OPC UA', 'MQTT', 'VDA 5050', 'RTDE', 'OEE'] },
      // AUTOSAR E2E and PROFIsafe are deliberately NOT chips here. A chip reads
      // as toolchain familiarity, and what exists is an implementation of their
      // protection semantics, not Classic/Adaptive Platform or a certified
      // PROFIsafe stack. Both are named on the fault-injection card instead,
      // where the sentence says exactly what was built and links the repository.
      { label: 'Safety & verification', items: ['Functional safety', 'Hazard analysis', 'FTTI budgeting', 'ISO 3691-4', 'ISO 21448 SOTIF', 'Fault injection', 'Requirements traceability', 'Test automation'] },
      { label: 'Programming', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'ruff & mypy', 'Git & GitHub Actions', 'CMake', 'Docker', 'Linux (Ubuntu)'] },
      { label: 'Perception & ML', items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'ONNX Runtime', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
      { label: 'Simulation & CAD', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks', 'Fusion 360', 'AutoCAD'] },
      { label: 'Hardware', items: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
      // Not a generic soft-skill list. Every chip maps to something documented
      // elsewhere on this page: the explosion root cause, the hose standard, the
      // 101.5/100 competition report, 216 organizers at IOI, the certifications.
      { label: 'Methods & collaboration', items: ['Root cause analysis', 'Standards authoring', 'Technical documentation', 'Supplier qualification', 'Team leadership', 'Cross-cultural teams', 'Agile & Scrum', 'Jira'] },
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
        title: 'Guide',
        org: 'European Girls’ Olympiad in Informatics',
        period: 'Jul 2025, May 2026',
        note: 'Guided international delegations and managed the contest hall at the Deutsche Telekom Campus in Bonn.',
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
        title: 'Chief of Organizers',
        org: 'IOI 2024, International Olympiad in Informatics',
        period: 'Jul - Sep 2024',
        note: 'Directed operations for 1,000+ international participants: arrivals and departures, competition hall, accommodation, food logistics, sponsor coordination and live crisis management. Selected 216 organizers from 860+ candidates.',
      },
      {
        title: 'Inspection Engineer',
        org: 'AMOC, Alexandria',
        period: 'Oct 2023 - Sep 2024',
        note: 'Root-caused an industrial explosion in two weeks, then wrote the company standard that closed it: a two-part hose specification covering procurement through replacement, still in force. Supervised 6-8 inspectors per round.',
      },
      {
        title: 'Real Estate Agent',
        org: 'REI Lead Pros (US, remote)',
        period: 'Apr - Oct 2022',
        note: 'Remote US real estate sales. Ranked 7th company-wide.',
      },
      {
        title: 'President',
        org: 'Rotaract Alexandria New Era',
        period: 'Jul 2021 - Jun 2022',
        note: 'Co-founded the club in 2019 and led it through the 2021-22 term, running leadership workshops and the Matbakh Alexandria charity kitchen. Still involved as Club Advisor, remotely from Regensburg.',
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
        title: 'Chief of Organizers',
        org: 'Egyptian Olympiad in Informatics',
        period: 'Aug - Oct 2019',
        note: 'Led the organising team for the national informatics olympiad.',
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
      { title: 'Rotaract District 2451', detail: '1st place, Professional Development Committee, 2022, among 76 teams.' },
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
      'Masterstudent Mechatronic and Cyber-Physical Systems an der TH Deggendorf, wohnhaft in Regensburg. Ich arbeite dort, wo die Steuerungssoftware auf die Maschine trifft: ROS 2 auf der Roboterseite, IEC 61131-3 und OPC UA auf der Anlagenseite, dazwischen ein Traceability-Gate, das den Build scheitern lässt, sobald eine Sicherheitsanforderung ihren Test verliert. Jedes Projekt ist mit der Messung dokumentiert, die es belegt, und mit dem, was es nicht leistet. Zuvor Inspection Engineer in einer Mineralölraffinerie: Ursachenanalyse einer Betriebsexplosion in zwei Wochen und Erstellung der Werksnorm, die die Lücke geschlossen hat.',
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
      { label: 'Robotik', items: ['ROS 2 (Jazzy, Humble)', 'ROS 1', 'Nav2', 'MoveIt 2', 'OMPL', 'ros2_control', 'URDF & xacro', 'tf2', 'RViz', 'colcon', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrielle Automatisierung', items: ['IEC 61131-3 Strukturierter Text', 'CODESYS', 'PackML', 'ISA-TR88.00.02', 'Modbus TCP', 'OPC UA', 'MQTT', 'VDA 5050', 'RTDE', 'OEE'] },
      { label: 'Sicherheit & Verifikation', items: ['Funktionale Sicherheit', 'Gefährdungsanalyse', 'FTTI-Budgetierung', 'ISO 3691-4', 'ISO 21448 SOTIF', 'Fehlerinjektion', 'Anforderungsverfolgung', 'Testautomatisierung'] },
      { label: 'Programmierung', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'ruff & mypy', 'Git & GitHub Actions', 'CMake', 'Docker', 'Linux (Ubuntu)'] },
      { label: 'Wahrnehmung & ML', items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'ONNX Runtime', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
      { label: 'Simulation & CAD', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks', 'Fusion 360', 'AutoCAD'] },
      { label: 'Hardware', items: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
      // Not a generic soft-skill list. Every chip maps to something documented
      // elsewhere on this page: the explosion root cause, the hose standard, the
      // 101.5/100 competition report, 216 organizers at IOI, the certifications.
      { label: 'Methods & collaboration', items: ['Root cause analysis', 'Standards authoring', 'Technical documentation', 'Supplier qualification', 'Team leadership', 'Cross-cultural teams', 'Agile & Scrum', 'Jira'] },
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
        title: 'Guide',
        org: 'European Girls’ Olympiad in Informatics',
        period: 'Jul 2025, Mai 2026',
        note: 'Betreuung internationaler Delegationen und Leitung der Wettbewerbshalle auf dem Deutsche-Telekom-Campus in Bonn.',
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
        title: 'Chef-Organisator',
        org: 'IOI 2024, Internationale Informatik-Olympiade',
        period: 'Jul - Sep 2024',
        note: 'Gesamtverantwortung für den Ablauf mit über 1.000 internationalen Teilnehmenden: An- und Abreise, Wettbewerbshalle, Unterbringung, Verpflegung, Sponsorenbetreuung und Krisenmanagement im laufenden Betrieb. 216 Organisatoren aus über 860 Bewerbern ausgewählt.',
      },
      {
        title: 'Inspection Engineer',
        org: 'AMOC, Alexandria',
        period: 'Okt 2023 - Sep 2024',
        note: 'Ursachenanalyse einer Betriebsexplosion in zwei Wochen, anschließend Erstellung der Werksnorm, die die Lücke geschlossen hat: eine zweiteilige Schlauchspezifikation von der Beschaffung bis zum Austausch, weiterhin gültig. 6-8 Inspektoren pro Runde angeleitet.',
      },
      {
        title: 'Real Estate Agent',
        org: 'REI Lead Pros (USA, remote)',
        period: 'Apr - Okt 2022',
        note: 'Immobilienvertrieb (USA, remote). Unternehmensweit auf Platz 7.',
      },
      {
        title: 'Präsident',
        org: 'Rotaract Alexandria New Era',
        period: 'Jul 2021 - Jun 2022',
        note: 'Mitgründer des Clubs 2019 und Präsident im Amtsjahr 2021/22, mit Führungsworkshops und der Wohltätigkeitsküche Matbakh Alexandria. Weiterhin als Club Advisor aktiv, remote aus Regensburg.',
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
        title: 'Chef-Organisator',
        org: 'Egyptian Olympiad in Informatics',
        period: 'Aug - Okt 2019',
        note: 'Leitung des Organisationsteams der nationalen Informatik-Olympiade.',
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
      { title: 'Rotaract District 2451', detail: '1. Platz, Professional Development Committee, 2022, unter 76 Teams.' },
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
