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
    id: 'palletizing',
    title: 'UR5e Palletizing Cell',
    category: 'featured',
    media: '/media/palletizing.mp4',
    poster: '/media/palletizing-poster.jpg',
    repo: 'https://github.com/MKamel7/robot-arm-ik',
    metrics: [
      { value: '≤0.1 mm', label: { en: 'placement accuracy (IK residual)', de: 'Platziergenauigkeit (IK-Residuum)' } },
      { value: '6-DOF', label: { en: 'UR5/UR5e kinematics + IK from scratch', de: 'UR5/UR5e-Kinematik + IK von Grund auf' } },
      { value: '24', label: { en: 'automated tests, CI', de: 'automatisierte Tests, CI' } },
    ],
    desc: {
      en: 'An industrial palletizing cell in the MuJoCo physics engine, driven by a 6-DOF inverse-kinematics library I wrote from scratch in NumPy (forward kinematics, Jacobian, damped-least-squares and closed-form IK, cross-validated against the MuJoCo UR5e model to about 1 mm). A UR5e with a Robotiq gripper stacks parts bin-to-pallet across multiple layers, checks each path for collisions and re-routes around a machine fixture, and rejects out-of-reach targets, with a live production-metrics readout.',
      de: 'Eine industrielle Palettierzelle in der MuJoCo-Physik-Engine, angetrieben von einer 6-DOF-Inverskinematik-Bibliothek, die ich von Grund auf in NumPy geschrieben habe (Vorwärtskinematik, Jacobi-Matrix, Damped-Least-Squares und geschlossene IK, gegen das MuJoCo-UR5e-Modell auf etwa 1 mm validiert). Ein UR5e mit Robotiq-Greifer stapelt Teile mehrlagig von der Kiste auf die Palette, prüft jede Bahn auf Kollisionen und weicht einer Maschinenvorrichtung aus, und weist unerreichbare Zielpunkte zurück, mit einer Live-Anzeige der Produktionskennzahlen.',
    },
    tags: ['MuJoCo', 'NumPy', 'Inverse kinematics', 'Collision avoidance', 'Python'],
  },
  {
    id: 'warehouse',
    title: 'Multi-Agent Warehouse Logistics',
    category: 'featured',
    media: '/media/warehouse.mp4',
    poster: '/media/warehouse-poster.jpg',
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
      de: 'Mechatronik-Projekt (B.Sc.): ein autonomer Roboter, der Brände erkennt und löscht. Rauch-, Flammen- und Abstandssensorik für Erkennung und sichere Annäherung, Hindernisvermeidung in dynamischen Umgebungen, ein Wassertank mit Pumpe und Schlauch zum Löschen sowie vollständige strukturelle Spannungsanalysen (FEM) zur Verstärkung von Schwachstellen.',
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
      de: 'Mechatronik-Projekt (B.Sc.): ein Arduino-Mega-Hausautomationssystem mit Android-App über Bluetooth. Temperaturgesteuerte Heizung und Kühlung, lichtabhängiges Dimmen bei Nacht, näherungsbasierte Garage (automatisches Öffnen bei Annäherung des Schlüssel-Chips, automatisches Schließen von innen) und eine per Zahlencode gesicherte Haustür mit Alarmanlage.',
    },
    tags: ['Arduino Mega', 'Bluetooth', 'Home automation', 'Sensors'],
  },
  {
    id: 'p1',
    title: 'Embedded Test & Measurement Framework',
    category: 'featured',
    media: '/media/p1.mp4',
    poster: '/media/p1-poster.jpg',
    repo: 'https://github.com/MKamel7/embedded-test-automation',
    metrics: [
      { value: '80', label: { en: 'automated tests, 100% branch coverage', de: 'automatisierte Tests, 100% Branch Coverage' } },
      { value: 'v3.1', label: { en: 'releases, each closing a real defect', de: 'Releases, jedes schließt einen echten Fehler' } },
      { value: '3', label: { en: 'seeded defects the suite must reject', de: 'eingebaute Fehler, die die Suite erkennen muss' } },
    ],
    desc: {
      en: 'HIL-style test automation for an embedded motor controller: a deterministic simulated device, a transport-abstracted driver so the same suite can later run against real hardware, and property-based fuzzing with Hypothesis. Fault seeding keeps the suite honest, three deliberately broken controllers that it has to reject. Six releases came out of this becoming the device under test for the fault-injection harness, each one closing a defect found from outside the project.',
      de: 'HIL-artige Testautomatisierung für eine eingebettete Motorsteuerung: ein deterministisch simuliertes Gerät, ein transportabstrahierter Treiber, damit dieselbe Suite später gegen echte Hardware laufen kann, und Property-based Fuzzing mit Hypothesis. Fault Seeding hält die Suite ehrlich, drei absichtlich fehlerhafte Steuerungen, die sie zurückweisen muss. Sechs Releases entstanden daraus, dass dieses Projekt zum Prüfling der Fault-Injection-Harness wurde, und jedes schließt einen Fehler, der von außen gefunden wurde.',
    },
    tags: ['Python', 'pytest', 'Hypothesis', 'HIL', 'CI'],
  },
  {
    id: 'p2',
    title: 'Fault-Injection Harness',
    category: 'featured',
    media: '/media/p2.mp4',
    poster: '/media/p2-poster.jpg',
    repo: 'https://github.com/MKamel7/fault-injection-harness',
    metrics: [
      { value: '27', label: { en: 'hazard-derived faults, 23 detected in time', de: 'aus Gefährdungsanalyse abgeleitete Fehler, 23 rechtzeitig erkannt' } },
      { value: '3 of 11', label: { en: 'safety requirements reported unmet', de: 'Sicherheitsanforderungen als nicht erfüllt ausgewiesen' } },
      { value: '7', label: { en: 'findings from an independent review, all closed', de: 'Befunde aus einem unabhängigen Review, alle geschlossen' } },
    ],
    desc: {
      en: 'Functional-safety fault injection against an embedded motor controller: a hazard-derived fault catalogue with fault-tolerant-time-interval budgets, bidirectional requirement-to-test traceability that fails the build on a gap in either direction, and one CRC-and-counter protection layer configured as both AUTOSAR E2E and PROFIsafe. The result worth having is that detection is not protection. A second temperature sensor bounded the damage and did not prevent it, and only a channel of a different kind closed the gap. Three of eleven requirements are reported unmet, each naming its own counterexamples, because a coverage report with no gaps in it is not credible.',
      de: 'Fehlerinjektion für funktionale Sicherheit an einer eingebetteten Motorsteuerung: ein aus einer Gefährdungsanalyse abgeleiteter Fehlerkatalog mit FTTI-Budgets, bidirektionale Nachverfolgbarkeit von Anforderung zu Test, die den Build bei einer Lücke in beide Richtungen scheitern lässt, und eine CRC-und-Zähler-Schutzschicht, konfiguriert sowohl als AUTOSAR E2E als auch als PROFIsafe. Das eigentliche Ergebnis: Erkennung ist kein Schutz. Ein zweiter Temperatursensor begrenzte den Schaden, verhinderte ihn aber nicht, und erst ein Kanal anderer Art schloss die Lücke. Drei von elf Anforderungen werden als nicht erfüllt ausgewiesen, jeweils mit ihren Gegenbeispielen, denn ein Coverage-Report ohne Lücken ist nicht glaubwürdig.',
    },
    tags: ['Python', 'Functional safety', 'ISO 26262-inspired', 'AUTOSAR E2E', 'PROFIsafe'],
  },
  {
    id: 'pick-place',
    title: 'Vision-Guided Pick & Place',
    category: 'featured',
    media: '/media/pick-place.mp4',
    poster: '/media/pick-place-poster.jpg',
    repo: 'https://github.com/MKamel7/moveit-ur5-pick-place',
    metrics: [
      { value: '3', label: { en: 'colours segmented from RGB-D, operator picks one', de: 'Farben aus RGB-D segmentiert, Bediener wählt eine' } },
      { value: '40', label: { en: 'unit tests on ROS-independent logic, CI', de: 'Unit-Tests der ROS-unabhängigen Logik, CI' } },
      { value: 'URSim', label: { en: 'validated against the real UR driver', de: 'gegen den echten UR-Treiber validiert' } },
    ],
    desc: {
      en: 'Vision-guided, collision-aware pick-and-place for a simulated UR5e with MoveIt 2 on ROS 2 Jazzy, framed as an industrial colour-sorting cell. An overhead RGB-D camera segments three coloured parts by HSV, the selected one is lifted to a 3D pose in the robot base frame from the depth image, and OMPL plans a collision-aware top-down grasp onto a moving conveyor. This is the sequel to writing forward kinematics, inverse kinematics and trajectories by hand: here the framework industry actually deploys does the planning, and the grasp target comes from a camera rather than a hardcoded pose. Validated against the real UR driver with URSim, with an OPC UA server and a live cell dashboard. The demo shows four views at once: what the camera sees, the Gazebo digital twin, the UR teach pendant and the live cell telemetry.',
      de: 'Kamerageführtes, kollisionsbewusstes Pick-and-Place für einen simulierten UR5e mit MoveIt 2 unter ROS 2 Jazzy, aufgebaut als industrielle Farbsortierzelle. Eine RGB-D-Kamera über der Zelle segmentiert drei farbige Teile per HSV, das ausgewählte Teil wird über das Tiefenbild in eine 3D-Pose im Roboterbasis-Koordinatensystem überführt, und OMPL plant einen kollisionsbewussten Top-Down-Griff auf ein laufendes Förderband. Die Fortsetzung der von Hand geschriebenen Kinematik: hier plant das Framework, das die Industrie tatsächlich einsetzt, und das Greifziel kommt aus einer Kamera statt aus einer fest codierten Pose. Gegen den echten UR-Treiber mit URSim validiert, mit OPC-UA-Server und Live-Dashboard der Zelle. Das Demo zeigt vier Ansichten gleichzeitig: das Kamerabild, den digitalen Zwilling in Gazebo, das UR-Bedienpanel und die Live-Telemetrie der Zelle.',
    },
    tags: ['ROS 2 Jazzy', 'MoveIt 2', 'OMPL', 'Gazebo', 'RGB-D perception', 'OPC UA'],
  },
];
