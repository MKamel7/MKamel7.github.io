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
      'I build machines that share a room with people, then spend most of my time trying to break them. The results I like best are the ones that went wrong: a detector blind past 30 metres, a safety claim I had to retract, three of eleven requirements my own tests refused to pass. They are on this site, next to the ones that worked. Before this I was handed a pipeline explosion and two weeks to find the cause, and somewhere in there I ran an olympiad for a thousand people. Same job, really. Find what nobody checked.',
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
      // Admission test for this grid: a chip earns its place only if a project
      // card on this same page backs it. Sub-components of something already
      // listed (tf2, RViz, colcon under ROS 2) are padding, not extra skills.
      { label: 'Robotics', items: ['ROS 2 (Jazzy, Humble)', 'Nav2', 'MoveIt 2', 'OMPL', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrial automation', items: ['IEC 61131-3 Structured Text', 'CODESYS', 'PackML', 'OPC UA', 'Modbus TCP'] },
      // AUTOSAR E2E and PROFIsafe are deliberately NOT chips here. A chip reads
      // as toolchain familiarity, and what exists is an implementation of their
      // protection semantics, not Classic/Adaptive Platform or a certified
      // PROFIsafe stack. Both are named on the fault-injection card instead,
      // where the sentence says exactly what was built and links the repository.
      // Standard numbers are deliberately NOT chips here, same reasoning as the
      // AUTOSAR E2E note above: a chip claims familiarity with a document. The
      // standards Mo actually worked to (ISO 3691-4, ISO 21448 SOTIF) are named
      // in the project cards, inside a sentence that says what was built.
      { label: 'Safety & verification', items: ['Functional safety', 'Hazard analysis', 'FTTI budgeting', 'Fault injection', 'Requirements traceability', 'Test automation'] },
      { label: 'Programming', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'Git & GitHub Actions', 'Docker', 'Linux (Ubuntu)'] },
      { label: 'Perception & ML', items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'ONNX Runtime', 'PyTorch', 'NumPy'] },
      { label: 'Simulation & CAD', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks'] },
      { label: 'Hardware', items: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
      // The old "Methods & collaboration" row is gone. Root cause analysis,
      // standards authoring, technical documentation, supplier qualification,
      // team leadership: all real, all already proven by the experience entries
      // (the explosion, the hose standard, 101.5/100, 216 organizers). Restating
      // them as chips made them look like claims instead of results.
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
        note: 'Root-caused a pipeline explosion in two weeks, then wrote the company standard that closed it: a two-part hose specification covering procurement through replacement, still in force. Supervised 6-8 inspectors per round.',
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
    headline: 'MO KAMEL',
    subline: 'Mechatronikingenieur. Ich entwickle Maschinen, die denken, sich bewegen und im Fehlerfall sicher reagieren.',
    cta: 'Projekte ansehen',
  },
  about: {
    heading: 'Über mich',
    paragraph:
      'Ich baue Maschinen, die sich einen Raum mit Menschen teilen, und verbringe die meiste Zeit damit, sie kaputtzumachen. Am liebsten sind mir die Ergebnisse, die schiefgegangen sind: ein Detektor, der ab 30 Metern blind ist, eine Sicherheitsaussage, die ich zurückziehen musste, drei von elf Anforderungen, die meine eigenen Tests nicht durchgelassen haben. Die stehen hier, direkt neben denen, die funktioniert haben. Davor bekam ich eine Rohrleitungsexplosion und zwei Wochen, um die Ursache zu finden, und irgendwo dazwischen habe ich eine Olympiade für tausend Menschen organisiert. Im Grunde derselbe Job. Finden, was niemand geprüft hat.',
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
      // Siehe die englische Fassung: ein Chip bleibt nur, wenn ihn eine
      // Projektkarte auf dieser Seite belegt.
      { label: 'Robotik', items: ['ROS 2 (Jazzy, Humble)', 'Nav2', 'MoveIt 2', 'OMPL', 'Gazebo', 'MuJoCo'] },
      { label: 'Industrielle Automatisierung', items: ['IEC 61131-3 Strukturierter Text', 'CODESYS', 'PackML', 'OPC UA', 'Modbus TCP'] },
      // Siehe die englische Fassung: Normnummern sind bewusst keine Chips.
      { label: 'Sicherheit & Verifikation', items: ['Funktionale Sicherheit', 'Gefährdungsanalyse', 'FTTI-Budgetierung', 'Fehlerinjektion', 'Anforderungsverfolgung', 'Testautomatisierung'] },
      { label: 'Programmierung', items: ['Python', 'C++', 'Embedded C', 'pytest', 'Hypothesis', 'Git & GitHub Actions', 'Docker', 'Linux (Ubuntu)'] },
      { label: 'Wahrnehmung & ML', items: ['OpenCV', 'YOLOv8', 'MediaPipe', 'ONNX Runtime', 'PyTorch', 'NumPy'] },
      { label: 'Simulation & CAD', items: ['MATLAB', 'Simulink', 'Simscape', 'SolidWorks'] },
      { label: 'Hardware', items: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'Altium'] },
      // Zeile "Methodik & Zusammenarbeit" entfernt: alles darin ist bereits
      // durch die Werdegang-Eintraege belegt.
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
        note: 'Ursachenanalyse einer Rohrleitungsexplosion in zwei Wochen, anschließend Erstellung der Werksnorm, die die Lücke geschlossen hat: eine zweiteilige Schlauchspezifikation von der Beschaffung bis zum Austausch, weiterhin gültig. 6-8 Inspektoren pro Runde angeleitet.',
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
