import type { Project } from '../types';

// Media contract: drop a file into public/media/ and set `media: '/media/<file>'`.
// .mp4 renders as autoplaying muted video, image formats as lazy <img>,
// missing media renders a styled placeholder tile.
export const projects: Project[] = [
  {
    id: 'dms',
    title: 'Driver Monitoring System',
    category: 'featured',
    metrics: [
      { value: '97.8%', label: { en: 'mAP@0.5 phone detection', de: 'mAP@0.5 Telefonerkennung' } },
      { value: '18-20 FPS', label: { en: 'drowsiness on Jetson Nano', de: 'Müdigkeitserkennung auf Jetson Nano' } },
      { value: 'A+', label: { en: 'bachelor thesis grade', de: 'Note der Bachelorarbeit' } },
    ],
    desc: {
      en: 'Embedded driver monitoring for phone use and drowsiness. YOLOv8 and MediaPipe running at 18-20 FPS on Jetson Nano and 10 FPS on Raspberry Pi. 1st place nationally at the GPAct Talent Expo among 15 teams.',
      de: 'Eingebettete Fahrerüberwachung für Handynutzung und Müdigkeit. YOLOv8 und MediaPipe mit 18-20 FPS auf dem Jetson Nano und 10 FPS auf dem Raspberry Pi. National 1. Platz bei der GPAct Talent Expo unter 15 Teams.',
    },
    tags: ['YOLOv8', 'MediaPipe', 'Jetson Nano', 'Raspberry Pi', 'OpenCV', 'Python'],
  },
  {
    id: 'rov',
    title: 'Brotta II Underwater ROV',
    category: 'featured',
    metrics: [
      { value: '2nd', label: { en: 'worldwide, MATE ROV 2021', de: 'weltweit, MATE ROV 2021' } },
      { value: '101.5/100', label: { en: 'technical documentation', de: 'technische Dokumentation' } },
      { value: '8', label: { en: 'thrusters, custom propulsion', de: 'Thruster, eigener Antrieb' } },
    ],
    desc: {
      en: 'Competition ROV built with team Invictus UMVs: frame design, 8-thruster propulsion, and a CNN vision pipeline detecting Crown-of-Thorns starfish and bleached coral, mapped onto a 9x3 grid via IMU. 2nd worldwide of 20 teams, 1st regionally.',
      de: 'Wettbewerbs-ROV mit dem Team Invictus UMVs: Rahmenkonstruktion, Antrieb mit 8 Thrustern und eine CNN-Vision-Pipeline zur Erkennung von Dornenkronen-Seesternen und gebleichten Korallen, per IMU auf einem 9x3-Raster kartiert. Weltweit Platz 2 von 20 Teams, regional Platz 1.',
    },
    tags: ['SolidWorks', 'CNN', 'OpenCV', 'Embedded C', 'Control systems'],
  },
  {
    id: 'warehouse',
    title: 'Multi-Agent Warehouse Logistics',
    category: 'featured',
    metrics: [
      { value: '3', label: { en: 'robot fleet, coordinated', de: 'Roboter-Flotte, koordiniert' } },
      { value: 'ROS 2', label: { en: 'Humble with Nav2', de: 'Humble mit Nav2' } },
    ],
    desc: {
      en: 'M.Eng. coursework case study: a 3-robot fleet coordinating warehouse logistics in simulation with ROS 2 Humble, Nav2 navigation, and Gazebo.',
      de: 'Fallstudie im Masterstudium: eine Flotte aus 3 Robotern koordiniert Lagerlogistik in der Simulation mit ROS 2 Humble, Nav2-Navigation und Gazebo.',
    },
    tags: ['ROS 2 Humble', 'Nav2', 'Gazebo', 'Python'],
  },
  {
    id: 'digital-twin',
    title: 'Robotic Arm Digital Twin',
    category: 'featured',
    metrics: [
      { value: '94.4%', label: { en: 'SVM fault-diagnosis accuracy', de: 'Genauigkeit SVM-Fehlerdiagnose' } },
    ],
    desc: {
      en: 'M.Eng. coursework case study: digital twin of a robotic arm for predictive maintenance. SVM fault diagnosis at 94.4% accuracy, including a noise-robustness study, built in MATLAB and Simulink.',
      de: 'Fallstudie im Masterstudium: digitaler Zwilling eines Roboterarms für Predictive Maintenance. SVM-Fehlerdiagnose mit 94,4% Genauigkeit inklusive Untersuchung der Rauschrobustheit, umgesetzt in MATLAB und Simulink.',
    },
    tags: ['MATLAB', 'Simulink', 'SVM'],
  },
  {
    id: 'p1',
    title: 'Embedded Test & Measurement Framework',
    category: 'pipeline',
    metrics: [],
    desc: {
      en: 'Python test automation for embedded systems: protocol simulation, CI, property-based fuzzing.',
      de: 'Python-Testautomatisierung für eingebettete Systeme: Protokollsimulation, CI, Property-based Fuzzing.',
    },
    tags: ['Python', 'pytest', 'CI'],
    status: { en: 'In progress', de: 'In Arbeit' },
  },
  {
    id: 'p2',
    title: 'Fault-Injection Harness',
    category: 'pipeline',
    metrics: [],
    desc: {
      en: 'Deterministic fault injection with an ISO 26262-inspired traceability matrix and coverage reporting.',
      de: 'Deterministische Fehlerinjektion mit ISO-26262-inspirierter Traceability-Matrix und Coverage-Reports.',
    },
    tags: ['Python', 'Functional safety'],
    status: { en: 'Planned, Aug 2026', de: 'Geplant, Aug 2026' },
  },
  {
    id: 'pick-place',
    title: 'Vision-Guided Pick & Place',
    category: 'pipeline',
    metrics: [],
    desc: {
      en: 'UR5 with MoveIt 2: camera-detected object pose feeding collision-free pick-and-place in ROS 2 Jazzy.',
      de: 'UR5 mit MoveIt 2: kamerabasierte Posenschätzung als Ziel für kollisionsfreies Pick-and-Place unter ROS 2 Jazzy.',
    },
    tags: ['ROS 2 Jazzy', 'MoveIt 2', 'Perception'],
    status: { en: 'Planned', de: 'Geplant' },
  },
];
