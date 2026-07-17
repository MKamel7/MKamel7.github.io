import type { Project } from '../types';

// Media contract: drop a file into public/media/ and set `media: '/media/<file>'`.
// .mp4 renders as autoplaying muted video, image formats as lazy <img>,
// missing media renders a styled placeholder tile.
export const projects: Project[] = [
  {
    id: 'dms',
    title: 'Driver Monitoring System',
    category: 'featured',
    media: '/media/dms.mp4',
    poster: '/media/dms-poster.jpg',
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
    media: '/media/rov.mp4',
    poster: '/media/rov-poster.jpg',
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
    media: '/media/digital-twin.mp4',
    poster: '/media/digital-twin-poster.jpg',
    metrics: [
      { value: '94.4%', label: { en: 'hierarchical fault-diagnosis accuracy', de: 'Genauigkeit hierarchische Fehlerdiagnose' } },
    ],
    desc: {
      en: 'M.Eng. coursework case study: a Simscape digital twin of a robotic arm for predictive maintenance. A hierarchical classifier reaches 94.4% fault-diagnosis accuracy across fault type, joint, and severity, with a noise-robustness study, built in MATLAB and Simulink.',
      de: 'Fallstudie im Masterstudium: ein Simscape-Digital-Twin eines Roboterarms für Predictive Maintenance. Ein hierarchischer Klassifikator erreicht 94,4% Genauigkeit bei der Fehlerdiagnose (Fehlertyp, Gelenk und Schweregrad), inklusive Untersuchung der Rauschrobustheit, umgesetzt in MATLAB und Simulink.',
    },
    tags: ['MATLAB', 'Simulink', 'Simscape', 'Machine Learning'],
  },
  {
    id: 'fire-robot',
    title: 'Autonomous Fire-Fighting Robot',
    category: 'featured',
    media: '/media/fire-robot.mp4',
    poster: '/media/fire-robot-poster.jpg',
    metrics: [
      { value: '3', label: { en: 'sensor types: smoke, flame, proximity', de: 'Sensortypen: Rauch, Flamme, Abstand' } },
      { value: 'FEA', label: { en: 'stress-verified chassis', de: 'FEM-geprüftes Chassis' } },
    ],
    desc: {
      en: 'B.Sc. Mechatronics course project: an autonomous robot that detects and extinguishes fires. Smoke, flame and proximity sensing with obstacle-avoidance navigation in dynamic environments, an onboard water tank, pump and hose for suppression, and full structural stress-analysis simulations to reinforce weak points.',
      de: 'Mechatronik-Projekt (B.Sc.): ein autonomer Roboter, der Brände erkennt und löscht. Rauch-, Flammen- und Abstandssensorik mit Hindernisvermeidung in dynamischen Umgebungen, ein Wassertank mit Pumpe und Schlauch zur Löschung und vollständige Struktur-/Spannungsanalyse-Simulationen zur Verstärkung von Schwachstellen.',
    },
    tags: ['Arduino', 'Sensor fusion', 'Obstacle avoidance', 'Mechatronics'],
  },
  {
    id: 'smart-home',
    title: 'Autonomous Smart Home',
    category: 'featured',
    media: '/media/smart-home.mp4',
    poster: '/media/smart-home-poster.jpg',
    metrics: [
      { value: '4', label: { en: 'automated subsystems', de: 'automatisierte Subsysteme' } },
      { value: 'BT', label: { en: 'Android app control', de: 'Android-App-Steuerung' } },
    ],
    desc: {
      en: 'B.Sc. Mechatronics course project: an Arduino Mega home-automation system with an Android app over Bluetooth. Temperature-driven HVAC, light-sensing auto-dimming at night, proximity-based garage (auto-open on key-chip approach, auto-close inside), and a keypad-secured main door with a security system.',
      de: 'Mechatronik-Projekt (B.Sc.): ein Arduino-Mega-Hausautomationssystem mit Android-App über Bluetooth. Temperaturgesteuerte HLK, lichtabhängiges Dimmen bei Nacht, näherungsbasierte Garage (Auto-Öffnen bei Annäherung des Schlüssel-Chips, Auto-Schließen im Inneren) und eine tastaturgesicherte Haustür mit Sicherheitssystem.',
    },
    tags: ['Arduino Mega', 'Bluetooth', 'Home automation', 'Sensors'],
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
