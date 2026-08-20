import type { Project } from '../types';

// Media contract: drop a file into public/media/ and set `media: '/media/<file>'`.
// .mp4 renders as autoplaying muted video, image formats as lazy <img>,
// missing media renders a styled placeholder tile.
export const projects: Project[] = [
  {
    id: 'p5',
    title: 'Intralogistics AMR',
    category: 'featured',
    media: '/media/p5.mp4',
    poster: '/media/p5-poster.jpg',
    repo: 'https://github.com/MKamel7/intralogistics-amr',
    shots: [
      { src: '/media/p5-shot-survey.png', caption: {
        en: 'The vehicle driving its own frontier goals to build the map it later navigates on. Nothing about the building is given to it in advance.',
        de: 'Das Fahrzeug fährt eigene Frontier-Ziele an und baut die Karte, auf der es später navigiert. Nichts über das Gebäude ist ihm vorher bekannt.' } },
      { src: '/media/p5-shot-planning.png', caption: {
        en: 'The robot’s own view: the global costmap and the Nav2 plan across the finished map, resampled onto the same clock as the camera so the two agree on when.',
        de: 'Die Sicht des Roboters: globale Costmap und Nav2-Plan auf der fertigen Karte, auf dieselbe Uhr wie die Kamera resampelt, damit beide über den Zeitpunkt einig sind.' } },
      { src: '/media/p5-shot-person.png', caption: {
        en: 'Passing a worker at 0.64 m without stopping. Across 248,000 samples the deepest anyone reached inside the footprint was 0.100 m, against 0.466 m before that fault was closed.',
        de: 'Vorbeifahrt an einem Mitarbeiter mit 0,64 m Abstand ohne Halt. Über 248.000 Messpunkte drang niemand tiefer als 0,100 m in die Fahrzeugkontur ein, vorher waren es 0,466 m.' } },
    ],
    metrics: [
      { value: '12 of 12', label: { en: 'transport cycles across five runs', de: 'Transportzyklen über fünf Läufe' } },
      { value: '0', label: { en: 'contacts in 248,000 samples with people in the aisle', de: 'Kontakte in 248.000 Messpunkten mit Personen im Gang' } },
      { value: '66', label: { en: 'recorded findings, two of them claims later retracted', de: 'dokumentierte Befunde, zwei davon später zurückgezogene Aussagen' } },
    ],
    desc: {
      en: 'An autonomous mobile robot moving load carriers through a warehouse shared with people on foot. ROS 2 Jazzy, Nav2, C++ perception, and ISO 3691-4 protective fields generated from the vehicle data sheet rather than hand-tuned, behind a safety layer that can override the planner. Every figure traces to a recorded measurement, including the two this project retracted.',
      de: 'Ein autonomer mobiler Roboter, der Ladungsträger durch ein Lager bewegt, in dem auch Menschen zu Fuß unterwegs sind. ROS 2 Jazzy, Nav2, Wahrnehmung in C++ und ISO-3691-4-Schutzfelder, die aus dem Fahrzeugdatenblatt erzeugt statt von Hand eingestellt werden, hinter einer Sicherheitsschicht, die den Planer überstimmen kann. Jede Zahl ist auf eine aufgezeichnete Messung zurückführbar, auch die zwei, die dieses Projekt zurückgezogen hat.',
    },
    tags: ['ROS 2 Jazzy', 'Nav2', 'Gazebo Harmonic', 'C++', 'ISO 3691-4', 'VDA 5050'],
  },
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
      en: 'Driver monitoring that runs on the hardware it would ship on, not on a workstation. YOLOv8 for phone use and MediaPipe for drowsiness, at 18 to 20 FPS on a Jetson Nano and 10 FPS on a Raspberry Pi. Bachelor thesis graded A+, and first nationally out of 15 teams at the GPAct Talent Expo.',
      de: 'Fahrerüberwachung, die auf der Hardware läuft, mit der sie ausgeliefert würde, nicht auf einer Workstation. YOLOv8 für Handynutzung und MediaPipe für Müdigkeit, mit 18 bis 20 FPS auf dem Jetson Nano und 10 FPS auf dem Raspberry Pi. Bachelorarbeit mit A+ bewertet und national 1. Platz von 15 Teams bei der GPAct Talent Expo.',
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
      en: 'Competition ROV built with team Invictus UMVs: frame design, an 8-thruster propulsion layout, and a CNN vision pipeline that finds Crown-of-Thorns starfish and bleached coral and maps them onto a 9x3 grid using the IMU. Second worldwide out of 20 teams at MATE ROV 2021, first regionally.',
      de: 'Wettbewerbs-ROV mit dem Team Invictus UMVs: Rahmenkonstruktion, Antriebslayout mit 8 Thrustern und eine CNN-Vision-Pipeline, die Dornenkronen-Seesterne und gebleichte Korallen erkennt und per IMU auf einem 9x3-Raster kartiert. Weltweit Platz 2 von 20 Teams bei der MATE ROV 2021, regional Platz 1.',
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
      en: 'An industrial palletizing cell in MuJoCo, driven by a 6-DOF inverse-kinematics library I wrote from scratch in NumPy: forward kinematics, Jacobian, damped least squares and closed-form IK, cross-validated against MuJoCo\'s own UR5e model. A UR5e with a Robotiq gripper stacks parts bin to pallet across layers, checks every path for collisions, re-routes around a machine fixture, and rejects targets it cannot reach.',
      de: 'Eine industrielle Palettierzelle in MuJoCo, angetrieben von einer 6-DOF-Inverskinematik-Bibliothek, die ich von Grund auf in NumPy geschrieben habe: Vorwärtskinematik, Jacobi-Matrix, Damped Least Squares und geschlossene IK, gegen das UR5e-Modell von MuJoCo validiert. Ein UR5e mit Robotiq-Greifer stapelt Teile mehrlagig von der Kiste auf die Palette, prüft jede Bahn auf Kollisionen, weicht einer Maschinenvorrichtung aus und weist unerreichbare Zielpunkte zurück.',
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
      en: 'Three robots coordinating warehouse logistics on ROS 2 Humble, Nav2 and Gazebo: as a convoy trailing a Nav2-planned leader, and as three independent namespaced stacks under a fleet coordinator. M.Eng. coursework, kept public and honest about its limit. Localisation is simulator ground truth, which is exactly why the intralogistics AMR above was built from scratch.',
      de: 'Drei Roboter koordinieren Lagerlogistik auf ROS 2 Humble, Nav2 und Gazebo: als Konvoi hinter einem Nav2-geplanten Führungsroboter und als drei eigenständige Nav2-Stacks unter einem Flottenkoordinator. Fallstudie im Masterstudium, öffentlich und ehrlich zu ihrer Grenze. Die Lokalisierung ist Ground Truth aus dem Simulator, und genau deshalb wurde der Intralogistik-AMR oben von Grund auf neu gebaut.',
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
      en: 'A Simscape digital twin of a robotic arm used as a fault factory: it seeds bearing, gear-wear and imbalance faults that would be expensive and unsafe to seed on real hardware. A hierarchical classifier reads fault type, joint and severity out of the residual torque. The number that matters is not the accuracy but how fast it dies: at 10% inertial mismatch between twin and plant it drops to 59%.',
      de: 'Ein Simscape-Digital-Twin eines Roboterarms als Fehlerfabrik: er erzeugt Lager-, Zahnrad- und Unwuchtfehler, die auf echter Hardware teuer und gefährlich zu setzen wären. Ein hierarchischer Klassifikator liest Fehlertyp, Gelenk und Schweregrad aus dem Restmoment. Entscheidend ist nicht die Genauigkeit, sondern wie schnell sie einbricht: bei 10% Trägheitsabweichung zwischen Twin und Anlage fällt sie auf 59%.',
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
      en: 'B.Sc. mechatronics project: an autonomous robot that finds fires and puts them out. Smoke, flame and proximity sensing drive detection and a safe approach, with obstacle avoidance in a changing environment and an onboard tank, pump and hose. The chassis was stress-analysed by FEA and reinforced where the simulation said it would fail.',
      de: 'Mechatronik-Projekt (B.Sc.): ein autonomer Roboter, der Brände findet und löscht. Rauch-, Flammen- und Abstandssensorik steuern Erkennung und sichere Annäherung, dazu Hindernisvermeidung in einer veränderlichen Umgebung und ein Wassertank mit Pumpe und Schlauch. Das Chassis wurde per FEM analysiert und dort verstärkt, wo die Simulation ein Versagen vorhersagte.',
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
      en: 'B.Sc. mechatronics project: an Arduino Mega home-automation system driven from an Android app over Bluetooth. Temperature-driven heating and cooling, light-sensing auto-dimming at night, a garage that opens as the key chip approaches and closes from inside, and a keypad-secured front door with an alarm.',
      de: 'Mechatronik-Projekt (B.Sc.): ein Arduino-Mega-Hausautomationssystem, gesteuert über eine Android-App per Bluetooth. Temperaturgeführte Heizung und Kühlung, lichtabhängiges Dimmen bei Nacht, eine Garage, die bei Annäherung des Schlüssel-Chips öffnet und von innen schließt, und eine per Zahlencode gesicherte Haustür mit Alarmanlage.',
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
      en: 'HIL-style test automation for an embedded motor controller: a deterministic simulated device, a transport-abstracted driver so the same suite runs unchanged against real hardware later, and property-based fuzzing with Hypothesis. Three deliberately broken controllers keep it honest, because a suite that has never rejected anything has not been tested itself.',
      de: 'HIL-artige Testautomatisierung für eine eingebettete Motorsteuerung: ein deterministisch simuliertes Gerät, ein transportabstrahierter Treiber, damit dieselbe Suite später unverändert gegen echte Hardware läuft, und Property-based Fuzzing mit Hypothesis. Drei absichtlich fehlerhafte Steuerungen halten sie ehrlich, denn eine Suite, die noch nie etwas zurückgewiesen hat, ist selbst ungeprüft.',
    },
    tags: ['Python', 'pytest', 'Hypothesis', 'HIL', 'CI'],
  },
  {
    id: 'p4',
    title: 'Virtual Production Cell',
    category: 'featured',
    media: '/media/p4.mp4',
    poster: '/media/p4-poster.jpg',
    repo: 'https://github.com/MKamel7/virtual-production-cell',
    shots: [
      { src: '/media/p4-shot-execute.png', caption: {
        en: 'The control program running on a CODESYS SoftPLC. PackML state 6, Execute, with the plant driven live over Modbus TCP.',
        de: 'Das Steuerungsprogramm läuft auf einer CODESYS-SoftPLC. PackML-Zustand 6, Execute, die Anlage wird live über Modbus TCP angesteuert.' } },
      { src: '/media/p4-shot-watchdog.png', caption: {
        en: 'The same cell moments after the plant process was killed. The heartbeat stopped, the link watchdog fired, and PackML went to state 9, Aborted, with every actuator dropped.',
        de: 'Dieselbe Zelle kurz nach dem Abschalten des Anlagenprozesses. Der Heartbeat blieb stehen, der Link-Watchdog löste aus, PackML ging in Zustand 9, Aborted, und alle Aktoren fielen ab.' } },
      { src: '/media/p4-shot-channels.png', caption: {
        en: 'The Modbus client configuration: read discrete inputs, read input registers, write multiple coils, each cyclic at 20 ms against the plant’s 50 ms scan.',
        de: 'Die Modbus-Client-Konfiguration: Diskrete Eingänge lesen, Eingangsregister lesen, mehrere Spulen schreiben, jeweils zyklisch mit 20 ms gegen den 50-ms-Zyklus der Anlage.' } },
      { src: '/media/p4-shot-mapping.png', caption: {
        en: 'The process image mapped bit by bit onto the PLC’s variables. The address map is generated from one enum, so the two halves cannot disagree.',
        de: 'Das Prozessabbild wird Bit für Bit auf die SPS-Variablen abgebildet. Die Adressliste wird aus einem einzigen Enum erzeugt, sodass beide Hälften nicht auseinanderlaufen können.' } },
    ],
    metrics: [
      { value: '223', label: { en: 'tests, 100% branch coverage', de: 'Tests, 100% Branch Coverage' } },
      { value: '14', label: { en: 'safety requirements traced to tests', de: 'Sicherheitsanforderungen auf Tests zurückgeführt' } },
      { value: '62.5%', label: { en: 'baseline OEE across three scenarios', de: 'Basis-OEE über drei Szenarien' } },
    ],
    desc: {
      en: 'Virtual commissioning of a packaging cell: real IEC 61131-3 Structured Text on a CODESYS runtime driving a simulated plant over Modbus TCP, with a PackML state model and PackTags per ISA-TR88.00.02. Five hazards trace through fourteen requirements down to the tests that verify them, and the build fails on a gap in either direction. Supervisory access is OPC UA, signed and encrypted, anonymous refused.',
      de: 'Virtuelle Inbetriebnahme einer Verpackungszelle: echtes IEC-61131-3-Strukturtextprogramm auf einer CODESYS-Laufzeit, das eine simulierte Anlage über Modbus TCP steuert, mit PackML-Zustandsmodell und PackTags nach ISA-TR88.00.02. Fünf Gefährdungen werden über vierzehn Anforderungen bis zu den verifizierenden Tests nachverfolgt, und der Build scheitert bei einer Lücke in beide Richtungen. Die Leitebene ist OPC UA, signiert und verschlüsselt, anonymer Zugriff wird abgelehnt.',
    },
    tags: ['IEC 61131-3', 'CODESYS', 'PackML', 'Modbus TCP', 'OPC UA', 'Functional safety'],
  },
  {
    id: 'p3',
    title: 'ADAS Perception Evaluation',
    category: 'featured',
    media: '/media/p3.mp4',
    poster: '/media/p3-poster.jpg',
    repo: 'https://github.com/MKamel7/adas-perception-eval',
    shots: [
      { src: '/media/p3-shot-distance.png', caption: {
        en: 'Pedestrians beyond 30 metres. Green was found, red was annotated and nothing matched it, blue is a detection. The measured AP in this band is 0.009.',
        de: 'Fußgänger jenseits von 30 Metern. Grün wurde gefunden, Rot ist annotiert und wurde von nichts getroffen, Blau ist eine Detektion. Die gemessene AP in diesem Band beträgt 0,009.' } },
      { src: '/media/p3-shot-occlusion.png', caption: {
        en: 'Partial occlusion, the archetypal urban case. Pedestrian AP falls from 0.650 fully visible to 0.178 partly occluded, before an annotator would call the object mostly hidden.',
        de: 'Teilverdeckung, der typische Stadtfall. Die Fußgänger-AP fällt von 0,650 bei voller Sichtbarkeit auf 0,178 bei Teilverdeckung, noch bevor ein Annotator das Objekt als überwiegend verdeckt einstufen würde.' } },
      { src: '/media/p3-shot-cars.png', caption: {
        en: 'Cars beyond 50 metres, each red box labelled with the overlap it achieved where 0.50 was needed. 73% of car misses are boxes that landed badly rather than objects never seen.',
        de: 'Fahrzeuge jenseits von 50 Metern, jede rote Box beschriftet mit der erreichten Überlappung, wobei 0,50 nötig gewesen wäre. 73% der verpassten Fahrzeuge sind schlecht platzierte Boxen und keine nie erkannten Objekte.' } },
    ],
    metrics: [
      { value: '68.7%', label: { en: 'pedestrian recall ceiling at any threshold', de: 'Fußgänger-Recall-Obergrenze bei jedem Schwellenwert' } },
      { value: '0.000', label: { en: 'AP agreement gap against pycocotools', de: 'AP-Abweichung gegenüber pycocotools' } },
      { value: '40,570', label: { en: 'annotated objects across the full KITTI split', de: 'annotierte Objekte über den vollständigen KITTI-Split' } },
    ],
    desc: {
      en: 'Slice-based detection metrics on the full KITTI split, built to show what an aggregate number hides. A pedestrian detector reported at 0.506 mAP scores 0.009 beyond 30 metres and finds nothing at all beyond 50. Every figure carries a bootstrap interval, and nine ISO 21448 SOTIF triggering conditions are gated against their evidence.',
      de: 'Slice-basierte Detektionsmetriken auf dem vollständigen KITTI-Split, gebaut um zu zeigen, was eine aggregierte Zahl verbirgt. Ein Fußgängerdetektor mit ausgewiesenen 0,506 mAP erreicht jenseits von 30 Metern 0,009 und jenseits von 50 Metern gar nichts. Jede Kennzahl trägt ein Bootstrap-Intervall, und neun auslösende Bedingungen nach ISO 21448 SOTIF werden gegen ihre Evidenz abgesichert.',
    },
    tags: ['ONNX Runtime', 'KITTI', 'ISO 21448 SOTIF', 'Evaluation engineering', 'pycocotools', 'Python'],
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
      en: 'Functional-safety fault injection against an embedded motor controller: a hazard-derived fault catalogue with FTTI budgets, bidirectional traceability that fails the build on a gap either way, and a CRC-and-counter layer running as both AUTOSAR E2E and PROFIsafe. Detection is not protection. A second temperature sensor bounded the damage without preventing it; only a channel of a different kind closed the gap.',
      de: 'Fehlerinjektion für funktionale Sicherheit an einer eingebetteten Motorsteuerung: ein aus der Gefährdungsanalyse abgeleiteter Fehlerkatalog mit FTTI-Budgets, bidirektionale Nachverfolgbarkeit, die den Build bei einer Lücke in beide Richtungen scheitern lässt, und eine CRC-und-Zähler-Schicht, die zugleich als AUTOSAR E2E und als PROFIsafe läuft. Erkennung ist kein Schutz. Ein zweiter Temperatursensor begrenzte den Schaden, ohne ihn zu verhindern; erst ein Kanal anderer Art schloss die Lücke.',
    },
    tags: ['Python', 'Functional safety', 'ISO 26262-inspired', 'AUTOSAR E2E', 'PROFIsafe'],
  },
  {
    id: 'pick-place',
    title: 'Vision-Guided Pick & Place',
    category: 'featured',
    media: '/media/pick-place.mp4',
    poster: '/media/pick-place-poster.jpg',
    shots: [
      { src: '/media/pick-place-shot-detect.png', caption: {
        en: 'The overhead RGB-D camera segmenting the three coloured parts. The operator-selected colour is boxed thicker and becomes the pick target.',
        de: 'Die RGB-D-Kamera über der Zelle segmentiert die drei farbigen Teile. Die vom Bediener gewählte Farbe wird dicker umrandet und zum Greifziel.' } },
      { src: '/media/pick-place-shot-segment.png', caption: {
        en: 'Largest-blob HSV segmentation on the depth-aligned frame, the step that turns a pixel into a 3D pose in the robot base frame.',
        de: 'HSV-Segmentierung des größten Blobs im tiefenausgerichteten Bild, der Schritt, der aus einem Pixel eine 3D-Pose im Roboterbasis-System macht.' } },
      { src: '/media/pick-place-shot-gazebo.png', caption: {
        en: 'The UR5e with a Robotiq 2F-85 gripper in Gazebo, driven by the same URDF that feeds ros2_control and MoveIt.',
        de: 'Der UR5e mit Robotiq-2F-85-Greifer in Gazebo, angetrieben von derselben URDF, die auch ros2_control und MoveIt speist.' } },
    ],
    repo: 'https://github.com/MKamel7/moveit-ur5-pick-place',
    metrics: [
      { value: '3', label: { en: 'colours segmented from RGB-D, operator picks one', de: 'Farben aus RGB-D segmentiert, Bediener wählt eine' } },
      { value: '40', label: { en: 'unit tests on ROS-independent logic, CI', de: 'Unit-Tests der ROS-unabhängigen Logik, CI' } },
      { value: 'URSim', label: { en: 'validated against the real UR driver', de: 'gegen den echten UR-Treiber validiert' } },
    ],
    desc: {
      en: 'Vision-guided pick and place for a UR5e with MoveIt 2 on ROS 2 Jazzy, built as an industrial colour-sorting cell. An overhead RGB-D camera segments three coloured parts, lifts the chosen one to a 3D pose in the robot base frame, and OMPL plans a collision-aware grasp onto a moving conveyor. Validated against the real UR driver on URSim, with an OPC UA server and a live cell dashboard.',
      de: 'Kamerageführtes Pick-and-Place für einen UR5e mit MoveIt 2 unter ROS 2 Jazzy, aufgebaut als industrielle Farbsortierzelle. Eine RGB-D-Kamera über der Zelle segmentiert drei farbige Teile, überführt das gewählte in eine 3D-Pose im Roboterbasis-Koordinatensystem, und OMPL plant einen kollisionsbewussten Griff auf ein laufendes Förderband. Gegen den echten UR-Treiber auf URSim validiert, mit OPC-UA-Server und Live-Dashboard der Zelle.',
    },
    tags: ['ROS 2 Jazzy', 'MoveIt 2', 'OMPL', 'Gazebo', 'RGB-D perception', 'OPC UA'],
  },
];
