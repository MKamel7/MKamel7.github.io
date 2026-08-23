import type { Lang } from './i18n';
import type { SkillGroup } from './types';

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
    coreHeading: string;
    additionalHeading: string;
    groups: SkillGroup[];
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
    headline: 'Mo Kamel',
    subline: 'Mechatronics engineer. I make machines think, move, and fail safely.',
    cta: 'View projects',
  },
  about: {
    heading: 'About',
    paragraph:
      'I am a mechatronics engineer focused on robotics, industrial automation, embedded systems, and functional safety. I turn requirements into testable systems, from ROS 2 navigation and PLC-controlled production cells to safety-focused fault injection and computer vision. My engineering approach is grounded in measurement, traceability, and continuous improvement. Beyond technical work, I have led international operations for more than 1,000 participants and coordinated 216 organizers, strengthening my ability to take ownership, communicate clearly, and deliver with diverse teams.',
    languagesLabel: 'Languages',
    languages: 'English (C1), German (B1, improving), French (B1), Arabic (native)',
  },
  projects: {
    heading: 'Projects',
    pipelineHeading: 'In the pipeline',
    demoSoon: 'Demo coming soon',
    repoLabel: 'View repository',
  },
  skills: {
    heading: 'Skills',
    coreHeading: 'Core Engineering',
    additionalHeading: 'Additional Expertise',
    groups: [
      // This is the verified public skills inventory. Project cards provide
      // direct evidence for many entries; career records support the remainder.
      // ISO references stay in project context rather than appearing as chips.
      { label: 'Robotics', tier: 'core', items: ['ROS 2 (Jazzy, Humble)', 'Nav2', 'MoveIt 2', 'OMPL', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrial Automation', tier: 'core', items: ['Structured Text (ST), IEC 61131-3', 'CODESYS', 'PackML', 'OPC UA', 'Modbus TCP', 'MQTT', 'RTDE'] },
      { label: 'Safety & Verification', tier: 'core', items: ['Functional safety', 'Hazard analysis', 'FTTI budgeting', 'Fault injection', 'Requirements traceability', 'Test automation'] },
      { label: 'Software & Testing', tier: 'core', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'CMake', 'Git & GitHub Actions', 'Docker', 'Linux (Ubuntu)'] },
      { label: 'Computer Vision & ML', tier: 'additional', items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'ONNX Runtime', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
      { label: 'Simulation & CAD', tier: 'additional', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks', 'Fusion 360', 'AutoCAD'] },
      { label: 'Embedded & Electronics', tier: 'additional', items: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
      { label: 'Engineering Methods', tier: 'additional', items: ['Root cause analysis', 'Technical specifications & company standards', 'Technical documentation', 'Supplier qualification', 'Team leadership', 'Cross-cultural collaboration', 'Agile development (Scrum)', 'Jira'] },
    ],
  },
  experience: {
    heading: 'Experience',
    entries: [
      {
        title: 'Club Advisor',
        org: 'Rotaract Alexandria New Era (remote)',
        period: 'Jul 2026 - Present',
        note: 'Advising the board of the club I co-founded in 2019, remotely from Regensburg.',
      },
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
        note: 'Investigated a pipeline explosion, identified the root cause within two weeks, and wrote the company standard that closed the gap: a two-part hose specification covering procurement through replacement, still in force. Supervised 6-8 inspectors per round.',
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
        note: 'Co-founded the club in 2019 and led it through the 2021-22 term, running leadership workshops and the Matbakh Alexandria charity kitchen.',
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
    awardsHeading: 'Awards',
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
        focus: 'Advanced Robotics · Autonomous Systems · Cyber-Physical Systems · Functional Safety, Principles and Design · Advanced Modelling and Simulation · Cooperative and Autonomous Systems',
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
    headline: 'Mo Kamel',
    subline: 'Mechatronikingenieur. Ich entwickle Maschinen, die denken, sich bewegen und im Fehlerfall sicher reagieren.',
    cta: 'Projekte ansehen',
  },
  about: {
    heading: 'Über mich',
    paragraph:
      'Ich bin Mechatronikingenieur mit Schwerpunkt Robotik, industrielle Automatisierung, Embedded-Systeme und funktionale Sicherheit. Ich überführe Anforderungen in überprüfbare Systeme – von ROS-2-Navigation und SPS-gesteuerten Produktionszellen bis zu sicherheitsorientierter Fehlerinjektion und Computer Vision. Meine Arbeitsweise basiert auf Messbarkeit, Rückverfolgbarkeit und kontinuierlicher Verbesserung. Neben meiner technischen Arbeit habe ich internationale Abläufe für mehr als 1.000 Teilnehmende geleitet und 216 Organisatoren koordiniert. Dadurch kann ich Verantwortung übernehmen, klar kommunizieren und in vielfältigen Teams zuverlässig Ergebnisse erzielen.',
    languagesLabel: 'Sprachen',
    languages: 'Englisch (C1), Deutsch (B1, im Ausbau), Französisch (B1), Arabisch (Muttersprache)',
  },
  projects: {
    heading: 'Projekte',
    pipelineHeading: 'In Arbeit',
    demoSoon: 'Demo folgt in Kürze',
    repoLabel: 'Repository ansehen',
  },
  skills: {
    heading: 'Kompetenzen',
    coreHeading: 'Kernkompetenzen',
    additionalHeading: 'Weitere Kompetenzen',
    groups: [
      // Dies ist das verifizierte öffentliche Kompetenzprofil. Projektkarten
      // belegen viele Einträge direkt; die übrigen stützen sich auf berufliche
      // Nachweise. ISO-Verweise bleiben im jeweiligen Projektkontext.
      { label: 'Robotik', tier: 'core', items: ['ROS 2 (Jazzy, Humble)', 'Nav2', 'MoveIt 2', 'OMPL', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrielle Automatisierung', tier: 'core', items: ['Structured Text (ST) nach IEC 61131-3', 'CODESYS', 'PackML', 'OPC UA', 'Modbus TCP', 'MQTT', 'RTDE'] },
      { label: 'Funktionale Sicherheit & Verifikation', tier: 'core', items: ['Funktionale Sicherheit', 'Gefährdungsanalyse', 'FTTI-Budgetierung', 'Fehlerinjektion', 'Rückverfolgbarkeit von Anforderungen', 'Testautomatisierung'] },
      { label: 'Softwareentwicklung & Test', tier: 'core', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'CMake', 'Git & GitHub Actions', 'Docker', 'Linux (Ubuntu)'] },
      { label: 'Computer Vision & Machine Learning', tier: 'additional', items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'ONNX Runtime', 'PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
      { label: 'Simulation & CAD', tier: 'additional', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks', 'Fusion 360', 'AutoCAD'] },
      { label: 'Embedded-Systeme & Elektronik', tier: 'additional', items: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
      { label: 'Technische Methoden', tier: 'additional', items: ['Ursachenanalyse', 'Technische Spezifikationen & Werksnormen', 'Technische Dokumentation', 'Lieferantenqualifizierung', 'Teamführung', 'Interkulturelle Zusammenarbeit', 'Agile Entwicklung (Scrum)', 'Jira'] },
    ],
  },
  experience: {
    heading: 'Werdegang',
    entries: [
      {
        title: 'Club Advisor',
        org: 'Rotaract Alexandria New Era (remote)',
        period: 'Jul 2026 - heute',
        note: 'Beratung des Vorstands des Clubs, den ich 2019 mitgegründet habe, remote aus Regensburg.',
      },
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
        note: 'Untersuchte eine Rohrleitungsexplosion, identifizierte die Ursache innerhalb von zwei Wochen und erstellte anschließend die Werksnorm, die die Lücke geschlossen hat: eine zweiteilige Schlauchspezifikation von der Beschaffung bis zum Austausch, weiterhin gültig. 6-8 Inspektoren pro Runde angeleitet.',
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
        note: 'Mitgründer des Clubs 2019 und Präsident im Amtsjahr 2021/22, mit Führungsworkshops und der Wohltätigkeitsküche Matbakh Alexandria.',
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
    awardsHeading: 'Auszeichnungen',
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
        focus: 'Advanced Robotics · Autonomous Systems · Cyber-Physical Systems · Functional Safety, Principles and Design · Advanced Modelling and Simulation · Cooperative and Autonomous Systems',
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
