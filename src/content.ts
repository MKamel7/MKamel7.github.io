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
      'I am a mechatronics engineer working in robotics, industrial automation and functional safety. What I build gets measured: protective fields derived from vehicle data, control software traced to the requirements it satisfies, a success rate counted over a hundred trials rather than estimated. Before engineering full time I ran operations for an international olympiad of more than 1,000 participants and selected its 216 organizers.',
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
      { label: 'Robotics', tier: 'core', items: ['ROS 2 (Jazzy, Humble)', 'Nav2', 'MoveIt 2', 'MoveIt Task Constructor', 'OMPL', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrial Automation', tier: 'core', items: ['Structured Text (ST), IEC 61131-3', 'CODESYS', 'PackML', 'OPC UA', 'Modbus TCP', 'MQTT', 'RTDE'] },
      { label: 'Safety & Verification', tier: 'core', items: ['Functional safety', 'Hazard analysis', 'Fault-tolerant time interval budgeting', 'Fault injection', 'Requirements traceability', 'Test automation'] },
      { label: 'Software & Testing', tier: 'core', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'Mutation testing', 'CMake', 'Git & GitHub Actions', 'Docker', 'Linux (Ubuntu)'] },
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
        title: 'Student Research Assistant',
        org: 'PPMI (Verian Group)',
        period: 'May - Jul 2025',
        note: 'EU study on the safety of minors on social media platforms.',
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
        title: 'Mechatronics Engineer',
        org: 'Invictus UMVs',
        period: 'Jan 2021 - Mar 2022',
        note: 'Frame design, 8-thruster propulsion, control architecture, and the autonomous vision pipeline for the Brotta II ROV.',
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
      'Ich bin Mechatronikingenieur in den Bereichen Robotik, industrielle Automatisierung und funktionale Sicherheit. Was ich baue, wird gemessen: Schutzfelder aus Fahrzeugdaten abgeleitet, Steuerungssoftware bis zu den Anforderungen rückverfolgt, die sie erfüllt, eine Erfolgsquote über hundert Versuche gezählt statt geschätzt. Vor der Technik habe ich den Ablauf einer internationalen Olympiade mit über 1.000 Teilnehmenden geleitet und ihre 216 Organisatoren ausgewählt.',
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
      { label: 'Robotik', tier: 'core', items: ['ROS 2 (Jazzy, Humble)', 'Nav2', 'MoveIt 2', 'MoveIt Task Constructor', 'OMPL', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrielle Automatisierung', tier: 'core', items: ['Structured Text (ST) nach IEC 61131-3', 'CODESYS', 'PackML', 'OPC UA', 'Modbus TCP', 'MQTT', 'RTDE'] },
      { label: 'Funktionale Sicherheit & Verifikation', tier: 'core', items: ['Funktionale Sicherheit', 'Gefährdungsanalyse', 'Budgetierung von Fehlertoleranzzeiten', 'Fehlerinjektion', 'Rückverfolgbarkeit von Anforderungen', 'Testautomatisierung'] },
      { label: 'Softwareentwicklung & Test', tier: 'core', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'Mutation testing', 'CMake', 'Git & GitHub Actions', 'Docker', 'Linux (Ubuntu)'] },
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
        title: 'Student Research Assistant',
        org: 'PPMI (Verian Group)',
        period: 'Mai - Jul 2025',
        note: 'EU-Studie zur Sicherheit Minderjähriger auf Social-Media-Plattformen.',
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
        title: 'Mechatronics Engineer',
        org: 'Invictus UMVs',
        period: 'Jan 2021 - Mär 2022',
        note: 'Rahmenkonstruktion, Antrieb mit 8 Thrustern, Regelungsarchitektur und autonome Vision-Pipeline für das ROV Brotta II.',
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
