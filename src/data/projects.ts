import type { Project } from '../types';

// Media contract: drop a file into public/media/ and set `media: '/media/<file>'`.
// .mp4 renders as autoplaying muted video, image formats as lazy <img>,
// missing media renders a styled placeholder tile.

// Order is the recruiter ranking, not chronology and not sentiment. The first
// five are the differentiated ones: a measured AMR, functional-safety fault
// injection, virtual commissioning on a real PLC runtime, a MoveIt cell, and an
// ADAS evaluation. The B.Sc. Arduino projects are real and stay on the page,
// but they go last because a reader who stops after three cards should have
// seen the three that argue hardest.
export const projects: Project[] = [
  {
    id: 'p5',
    title: 'Intralogistics AMR',
    category: 'featured',
    media: '/media/p5.mp4',
    poster: '/media/p5-poster.jpg',
    repo: 'https://github.com/MKamel7/intralogistics-amr',
    shots: [
      { src: '/media/p5-shot-survey.webp', caption: {
        en: 'The vehicle driving its own frontier goals to build the map it later navigates on. Nothing about the building is given to it in advance.',
        de: 'Das Fahrzeug fährt eigene Frontier-Ziele an und baut die Karte, auf der es später navigiert. Nichts über das Gebäude ist ihm vorher bekannt.' } },
      { src: '/media/p5-shot-planning.webp', caption: {
        en: 'The robot’s own view: the global costmap and the Nav2 plan across the finished map, resampled onto the same clock as the camera so the two agree on when.',
        de: 'Die Sicht des Roboters: globale Costmap und Nav2-Plan auf der fertigen Karte, auf dieselbe Uhr wie die Kamera resampelt, damit beide über den Zeitpunkt einig sind.' } },
      { src: '/media/p5-shot-person.webp', caption: {
        en: 'Passing a worker at 0.64 m without stopping, recorded in the safety evaluation.',
        de: 'Vorbeifahrt an einem Mitarbeiter mit 0,64 m Abstand ohne Halt, aufgezeichnet in der Sicherheitsauswertung.' } },
    ],
    metrics: [
      { value: { en: '12 of 12', de: '12 von 12' }, label: { en: 'transport cycles with zero pedestrian contact', de: 'Transportzyklen ohne jeden Personenkontakt' } },
      { value: { en: '7%', de: '7 %' }, label: { en: 'of cycle time given up to protective stops, the measured cost of the safety layer', de: 'der Zykluszeit für Schutzhalte, die gemessenen Kosten der Sicherheitsschicht' } },
      { value: { en: '124 ms', de: '124 ms' }, label: { en: 'p95 sensor-to-command latency', de: 'p95-Latenz von Sensor bis Kommando' } },
    ],
    desc: {
      en: 'Autonomous mobile robot for transporting load carriers through a warehouse shared with pedestrians. I integrated ROS 2 Jazzy, Nav2 and C++ perception with ISO 3691-4 protective fields generated from vehicle data and an independent safety layer that can override navigation. The system completed all 12 transport cycles across five recorded runs with zero pedestrian contact, at a measured cost of 103 protective stops per cycle, or 7% of cycle time. Safety is not free and I would rather measure what it costs than assume it.',
      de: 'Autonomer mobiler Roboter für den Transport von Ladungsträgern in einem gemeinsam mit Personen genutzten Lager. Ich integrierte ROS 2 Jazzy, Nav2 und C++-Wahrnehmung mit aus Fahrzeugdaten abgeleiteten Schutzfeldern nach ISO 3691-4 sowie einer unabhängigen Sicherheitsschicht, die die Navigation übersteuern kann. Das System absolvierte alle 12 Transportzyklen in fünf aufgezeichneten Läufen ohne jeden Personenkontakt, zu gemessenen Kosten von 103 Schutzhalten pro Zyklus, also 7 % der Zykluszeit. Sicherheit ist nicht umsonst, und ich messe ihre Kosten lieber, als sie zu vermuten.',
    },
    tags: ['ROS 2 Jazzy', 'Nav2', 'Gazebo Harmonic', 'C++', 'ISO 3691-4', 'VDA 5050'],
  },
  {
    id: 'p2',
    title: 'Fault-Injection Harness',
    category: 'featured',
    poster: '/media/p2-architecture.svg',
    repo: 'https://github.com/MKamel7/fault-injection-harness',
    shots: [
      { src: '/media/p2-architecture.svg', caption: {
        en: 'Architecture of the verification flow from hazard analysis and fault cataloguing through timed detection evaluation and the requirements-traceability gate.',
        de: 'Architektur des Verifikationsablaufs von Gefährdungsanalyse und Fehlerkatalog über die zeitliche Detektionsauswertung bis zum Gate für die Rückverfolgbarkeit von Anforderungen.' } },
    ],
    metrics: [
      { value: { en: '29', de: '29' }, label: { en: 'hazard-derived faults, 24 detected in time', de: 'aus Gefährdungsanalyse abgeleitete Fehler, 24 rechtzeitig erkannt' } },
      { value: { en: '323', de: '323' }, label: { en: 'tests with 100% branch coverage', de: 'Tests mit 100 % Branch Coverage' } },
      { value: { en: '7', de: '7' }, label: { en: 'independent-review findings closed', de: 'Befunde aus unabhängigem Review geschlossen' } },
    ],
    desc: {
      en: 'Functional-safety fault-injection framework for an embedded motor controller. I derived 29 faults from the hazard analysis, assigned FTTI budgets and implemented bidirectional requirements-to-test traceability. CRC, counters and timeout monitoring are mapped to AUTOSAR E2E and PROFIsafe communication profiles, with 323 tests and 100% branch coverage. I added an educational FMEDA over a synthetic bill of materials, which computes the ISO 26262-5 metrics while keeping injected-fault detection coverage strictly separate from assumed diagnostic coverage, and a fault tree whose minimal cut sets found a common-cause single point of failure the traceability chain could not see.',
      de: 'Framework zur Fehlerinjektion für funktionale Sicherheit an einer eingebetteten Motorsteuerung. Ich leitete 29 Fehler aus der Gefährdungsanalyse ab, definierte FTTI-Budgets und implementierte eine bidirektionale Rückverfolgbarkeit von Anforderungen zu Tests. CRC, Zähler und Timeout-Überwachung sind auf AUTOSAR-E2E- und PROFIsafe-Kommunikationsprofile abgebildet; 323 Tests erreichen 100 % Branch Coverage. Ergänzt habe ich eine bewusst didaktische FMEDA über eine synthetische Stückliste, die die Kennzahlen nach ISO 26262-5 berechnet und dabei die gemessene Erkennungsrate injizierter Fehler streng von der angenommenen Diagnosedeckung trennt, sowie einen Fehlerbaum, dessen minimale Schnittmengen einen Single Point of Failure durch gemeinsame Ursache aufdeckten, den die Rückverfolgbarkeitskette nicht zeigen kann.',
    },
    tags: ['Python', 'Functional safety', 'ISO 26262-inspired', 'Fault injection', 'Requirements traceability'],
  },
  {
    id: 'p4',
    title: 'Virtual Production Cell',
    category: 'featured',
    media: '/media/p4.mp4',
    poster: '/media/p4-poster.jpg',
    repo: 'https://github.com/MKamel7/virtual-production-cell',
    shots: [
      { src: '/media/p4-shot-execute.webp', caption: {
        en: 'The control program running on a CODESYS SoftPLC. PackML state 6, Execute, with the plant driven live over Modbus TCP.',
        de: 'Das Steuerungsprogramm läuft auf einer CODESYS-SoftPLC. PackML-Zustand 6, Execute, die Anlage wird live über Modbus TCP angesteuert.' } },
      { src: '/media/p4-shot-watchdog.webp', caption: {
        en: 'The same cell moments after the plant process was killed. The heartbeat stopped, the link watchdog fired, and PackML went to state 9, Aborted, with every actuator dropped.',
        de: 'Dieselbe Zelle kurz nach dem Abschalten des Anlagenprozesses. Der Heartbeat blieb stehen, der Link-Watchdog löste aus, PackML ging in Zustand 9, Aborted, und alle Aktoren fielen ab.' } },
      { src: '/media/p4-shot-channels.webp', caption: {
        en: 'The Modbus client configuration: read discrete inputs, read input registers, write multiple coils, each cyclic at 20 ms against the plant’s 50 ms scan.',
        de: 'Die Modbus-Client-Konfiguration: Diskrete Eingänge lesen, Eingangsregister lesen, mehrere Spulen schreiben, jeweils zyklisch mit 20 ms gegen den 50-ms-Zyklus der Anlage.' } },
      { src: '/media/p4-shot-mapping.webp', caption: {
        en: 'The process image mapped bit by bit onto the PLC’s variables. The address map is generated from one enum, so the two halves cannot disagree.',
        de: 'Das Prozessabbild wird Bit für Bit auf die SPS-Variablen abgebildet. Die Adressliste wird aus einem einzigen Enum erzeugt, sodass beide Hälften nicht auseinanderlaufen können.' } },
    ],
    metrics: [
      { value: { en: '299', de: '299' }, label: { en: 'tests with 100% branch coverage', de: 'Tests mit 100 % Branch Coverage' } },
      { value: { en: '14', de: '14' }, label: { en: 'safety requirements traced to tests', de: 'Sicherheitsanforderungen bis zu Tests rückverfolgt' } },
      { value: { en: '62.5%', de: '62,5 %' }, label: { en: 'baseline OEE across three scenarios', de: 'Basis-OEE über drei Szenarien' } },
    ],
    desc: {
      en: 'Virtual commissioning of a packaging cell with IEC 61131-3 Structured Text on a CODESYS SoftPLC controlling a simulated plant over Modbus TCP. I implemented PackML and ISA-TR88.00.02 PackTags, watchdog-based safe shutdown, encrypted OPC UA supervision and bidirectional traceability for 14 safety requirements. On top of the tag layer I built an IEC 62264 (ISA-95) equipment hierarchy exposed over OPC UA, so a work unit is addressed by where it sits rather than by a flat tag list, carrying ISO 22400 KPIs, a measured cycle time and derived alarms. The control software is covered by 299 tests with 100% branch coverage.',
      de: 'Virtuelle Inbetriebnahme einer Verpackungszelle mit IEC-61131-3-Structured-Text auf einer CODESYS-SoftPLC, die eine simulierte Anlage über Modbus TCP steuert. Ich implementierte PackML und PackTags nach ISA-TR88.00.02, eine watchdog-basierte sichere Abschaltung, verschlüsselte OPC-UA-Kommunikation sowie bidirektionale Rückverfolgbarkeit für 14 Sicherheitsanforderungen. Auf der Tag-Ebene aufbauend entwickelte ich eine Anlagenhierarchie nach IEC 62264 (ISA-95), die über OPC UA bereitgestellt wird: Eine Arbeitseinheit wird über ihre Position in der Hierarchie adressiert statt über eine flache Tag-Liste und liefert Kennzahlen nach ISO 22400, eine gemessene Taktzeit und abgeleitete Alarme. 299 Tests decken 100 % der Verzweigungen der Steuerungssoftware ab.',
    },
    tags: ['IEC 61131-3', 'CODESYS', 'PackML', 'Modbus TCP', 'OPC UA', 'Functional safety'],
  },
  {
    id: 'pick-place',
    title: 'Vision-Guided Pick & Place',
    category: 'featured',
    media: '/media/pick-place.mp4',
    poster: '/media/pick-place-poster.jpg',
    shots: [
      { src: '/media/pick-place-shot-detect.webp', caption: {
        en: 'The overhead RGB-D camera segmenting the three coloured parts. The operator-selected colour is boxed thicker and becomes the pick target.',
        de: 'Die RGB-D-Kamera über der Zelle segmentiert die drei farbigen Teile. Die vom Bediener gewählte Farbe wird dicker umrandet und zum Greifziel.' } },
      { src: '/media/pick-place-shot-segment.webp', caption: {
        en: 'Largest-blob HSV segmentation on the depth-aligned frame, the step that turns a pixel into a 3D pose in the robot base frame.',
        de: 'HSV-Segmentierung des größten Blobs im tiefenausgerichteten Bild, der Schritt, der aus einem Pixel eine 3D-Pose im Roboterbasis-System macht.' } },
      { src: '/media/pick-place-shot-gazebo.webp', caption: {
        en: 'The UR5e with a Robotiq 2F-85 gripper in Gazebo, driven by the same URDF that feeds ros2_control and MoveIt.',
        de: 'Der UR5e mit Robotiq-2F-85-Greifer in Gazebo, angetrieben von derselben URDF, die auch ros2_control und MoveIt speist.' } },
    ],
    repo: 'https://github.com/MKamel7/moveit-ur5-pick-place',
    metrics: [
      { value: { en: '3', de: '3' }, label: { en: 'colours segmented from RGB-D, operator picks one', de: 'Farben aus RGB-D segmentiert, Bediener wählt eine' } },
      { value: { en: '40', de: '40' }, label: { en: 'unit tests on ROS-independent logic, CI', de: 'Unit-Tests der ROS-unabhängigen Logik, CI' } },
      { value: { en: 'URSim', de: 'URSim' }, label: { en: 'validated against the real UR driver', de: 'gegen den realen UR-Treiber validiert' } },
    ],
    desc: {
      en: 'Vision-guided colour-sorting cell for a UR5e using ROS 2 Jazzy and MoveIt 2. I developed an RGB-D pipeline that segments the selected part, transforms its observation into a 3D target pose in the robot base frame and supplies OMPL with collision-aware grasp targets for a moving conveyor. The system was validated with the production UR driver on URSim and integrated with OPC UA and a live dashboard.',
      de: 'Kamerageführte Farbsortierzelle für einen UR5e mit ROS 2 Jazzy und MoveIt 2. Ich entwickelte eine RGB-D-Pipeline, die das ausgewählte Teil segmentiert, die Beobachtung in eine 3D-Zielpose im Roboterbasis-Koordinatensystem transformiert und OMPL kollisionsgeprüfte Greifziele für ein laufendes Förderband bereitstellt. Das System wurde mit dem produktiven UR-Treiber auf URSim validiert und über OPC UA sowie ein Live-Dashboard integriert.',
    },
    tags: ['ROS 2 Jazzy', 'MoveIt 2', 'OMPL', 'Gazebo', 'RGB-D perception', 'OPC UA'],
  },
  {
    id: 'p3',
    title: 'ADAS Perception Evaluation',
    category: 'featured',
    media: '/media/p3.mp4',
    poster: '/media/p3-poster.jpg',
    repo: 'https://github.com/MKamel7/adas-perception-eval',
    shots: [
      { src: '/media/p3-shot-distance.webp', caption: {
        en: 'Pedestrians beyond 30 metres. Green was found, red was annotated and nothing matched it, blue is a detection. The measured AP in this band is 0.009.',
        de: 'Fußgänger jenseits von 30 Metern. Grün wurde gefunden, Rot ist annotiert und wurde von nichts getroffen, Blau ist eine Detektion. Die gemessene AP in diesem Band beträgt 0,009.' } },
      { src: '/media/p3-shot-occlusion.webp', caption: {
        en: 'Partial occlusion, the archetypal urban case. Pedestrian AP falls from 0.650 fully visible to 0.178 partly occluded, before an annotator would call the object mostly hidden.',
        de: 'Teilverdeckung, der typische Stadtfall. Die Fußgänger-AP fällt von 0,650 bei voller Sichtbarkeit auf 0,178 bei Teilverdeckung, noch bevor ein Annotator das Objekt als überwiegend verdeckt einstufen würde.' } },
      { src: '/media/p3-shot-cars.webp', caption: {
        en: 'Cars beyond 50 metres, each red box labelled with the overlap it achieved where 0.50 was needed. 73% of car misses are boxes that landed badly rather than objects never seen.',
        de: 'Fahrzeuge jenseits von 50 Metern, jede rote Box beschriftet mit der erreichten Überlappung, wobei 0,50 nötig gewesen wäre. 73% der verpassten Fahrzeuge sind schlecht platzierte Boxen und keine nie erkannten Objekte.' } },
    ],
    metrics: [
      { value: { en: '68.7%', de: '68,7 %' }, label: { en: 'pedestrian recall ceiling at any threshold', de: 'maximaler Fußgänger-Recall über alle Schwellenwerte' } },
      { value: { en: '0.000', de: '0,000' }, label: { en: 'AP agreement gap against pycocotools', de: 'AP-Abweichung gegenüber pycocotools' } },
      { value: { en: '40,570', de: '40.570' }, label: { en: 'annotated objects across the full KITTI split', de: 'annotierte Objekte im vollständigen KITTI-Split' } },
    ],
    desc: {
      en: 'Evidence-based evaluation of an ONNX pedestrian detector on the complete KITTI split. I implemented COCO-compatible metrics, distance and occlusion slices, bootstrap confidence intervals and pycocotools cross-validation across 40,570 annotated objects. The analysis evaluates nine ISO 21448 SOTIF triggering conditions and quantifies performance degradation beyond 30 metres and under partial occlusion. I then added calibration and out-of-distribution scoring: reliability diagrams per slice with an overconfidence measure, because expected calibration error is symmetric and cannot separate a timid detector from a confidently wrong one, and a Mahalanobis novelty score over image statistics that is validated against whether high-scoring frames actually did worse.',
      de: 'Evidenzbasierte Bewertung eines ONNX-Fußgängerdetektors auf dem vollständigen KITTI-Split. Ich implementierte COCO-kompatible Metriken, Distanz- und Verdeckungsslices, Bootstrap-Konfidenzintervalle sowie eine Kreuzvalidierung mit pycocotools für 40.570 annotierte Objekte. Die Analyse bewertet neun auslösende Bedingungen nach ISO 21448 SOTIF und quantifiziert die Leistungsabnahme ab 30 Metern sowie bei Teilverdeckung. Ergänzt habe ich Kalibrierung und Novelty-Erkennung: Reliability-Diagramme je Slice mit einem Maß für Überkonfidenz, da der Expected Calibration Error symmetrisch ist und einen zurückhaltenden Detektor nicht von einem selbstsicher falschen unterscheiden kann, sowie einen Mahalanobis-Score über Bildstatistiken, der daran geprüft wird, ob hoch bewertete Bilder tatsächlich schlechter abschnitten.',
    },
    tags: ['ONNX Runtime', 'KITTI', 'ISO 21448 SOTIF', 'Evaluation engineering', 'pycocotools', 'Python'],
  },
  {
    id: 'p1',
    title: 'Embedded Test & Measurement Framework',
    category: 'featured',
    media: '/media/p1.mp4',
    poster: '/media/p1-poster.jpg',
    repo: 'https://github.com/MKamel7/embedded-test-automation',
    metrics: [
      { value: { en: '80', de: '80' }, label: { en: 'automated tests with 100% branch coverage', de: 'automatisierte Tests mit 100 % Branch Coverage' } },
      { value: { en: 'v3.1', de: 'v3.1' }, label: { en: 'release matured through defect-driven iteration', de: 'durch fehlergetriebene Iteration gereifter Release' } },
      { value: { en: '3', de: '3' }, label: { en: 'seeded defects reliably rejected by the suite', de: 'eingebaute Fehler durch die Testsuite zuverlässig erkannt' } },
    ],
    desc: {
      en: 'HIL-ready test-automation framework for an embedded motor controller. I built a deterministic device simulator, a transport-independent driver architecture and property-based fuzzing with Python, pytest and Hypothesis, allowing the same test logic to connect to physical hardware through a transport adapter. Eighty automated tests achieve 100% branch coverage and reliably detect three seeded controller defects.',
      de: 'HIL-fähiges Testautomatisierungs-Framework für eine eingebettete Motorsteuerung. Ich entwickelte einen deterministischen Gerätesimulator, eine transportunabhängige Treiberarchitektur und Property-based Fuzzing mit Python, pytest und Hypothesis, sodass dieselbe Testlogik über einen Transportadapter an reale Hardware angebunden werden kann. 80 automatisierte Tests erreichen 100 % Branch Coverage und erkennen drei gezielt eingebaute Steuerungsfehler zuverlässig.',
    },
    tags: ['Python', 'pytest', 'Hypothesis', 'HIL-ready', 'CI'],
  },
  {
    id: 'palletizing',
    title: 'UR5e Palletizing Cell',
    category: 'featured',
    media: '/media/palletizing.mp4',
    poster: '/media/palletizing-poster.jpg',
    repo: 'https://github.com/MKamel7/robot-arm-ik',
    metrics: [
      { value: { en: '≤0.1 mm', de: '≤0,1 mm' }, label: { en: 'maximum numerical IK position residual', de: 'maximales numerisches IK-Positionsresiduum' } },
      { value: { en: '6 and 7-DOF', de: '6 und 7-DOF' }, label: { en: 'UR5e and Franka Panda kinematics from scratch', de: 'UR5e- und Franka-Panda-Kinematik von Grund auf' } },
      { value: { en: '95', de: '95' }, label: { en: 'automated tests in CI', de: 'automatisierte Tests in CI' } },
    ],
    desc: {
      en: 'Industrial palletizing cell for a UR5e with Robotiq gripper in MuJoCo. I developed the complete 6-DOF kinematics library in NumPy, including forward kinematics, Jacobian, damped least-squares and closed-form inverse kinematics, and cross-validated it against the MuJoCo model. Collision-aware planning stacks multilayer pallets, reroutes around fixtures and achieves a maximum numerical IK position residual of 0.1 mm. I extended the library to the redundant 7-DOF Franka Panda, where null-space control spends the spare joint on joint-limit avoidance or manipulability without disturbing the tool pose. A gain sweep shows both objectives are worse than doing nothing past their optimum, which is the result worth having.',
      de: 'Industrielle Palettierzelle für einen UR5e mit Robotiq-Greifer in MuJoCo. Ich entwickelte die vollständige 6-DOF-Kinematikbibliothek in NumPy mit Vorwärtskinematik, Jacobi-Matrix, Damped Least Squares und analytischer Inverskinematik und validierte sie gegen das MuJoCo-Modell. Die kollisionsgeprüfte Bahnplanung stapelt mehrlagige Paletten, umfährt Vorrichtungen und erreicht ein maximales numerisches IK-Positionsresiduum von 0,1 mm. Die Bibliothek erweiterte ich auf den redundanten 7-DOF-Franka-Panda: Eine Nullraumregelung nutzt das überzählige Gelenk für Gelenkgrenzen-Vermeidung oder Manipulierbarkeit, ohne die Werkzeugpose zu stören. Ein Verstärkungs-Sweep zeigt, dass beide Ziele jenseits ihres Optimums schlechter sind als gar keine Regelung, und genau das ist das Ergebnis, auf das es ankommt.',
    },
    tags: ['MuJoCo', 'NumPy', 'Inverse kinematics', 'Collision avoidance', 'Python'],
  },
  {
    id: 'dms',
    title: 'Driver Monitoring System',
    category: 'featured',
    media: '/media/dms.mp4',
    poster: '/media/dms-poster.jpg',
    repo: 'https://github.com/MKamel7/driver-monitoring-system',
    metrics: [
      { value: { en: '97.8%', de: '97,8 %' }, label: { en: 'mAP@0.5 for phone detection', de: 'mAP@0.5 bei der Handyerkennung' } },
      { value: { en: '18–20 FPS', de: '18–20 FPS' }, label: { en: 'drowsiness detection on Jetson Nano', de: 'Müdigkeitserkennung auf Jetson Nano' } },
      { value: { en: 'A+', de: 'A+' }, label: { en: 'bachelor thesis grade', de: 'Note der Bachelorarbeit' } },
    ],
    desc: {
      en: 'Embedded driver-monitoring prototype deployed across Jetson Nano and Raspberry Pi. I implemented MediaPipe-based drowsiness detection at 18–20 FPS and YOLOv8 phone detection at 10 FPS with 97.8% mAP@0.5. The bachelor thesis received an A+ and placed first nationally among 15 teams at the GPAct Talent Expo.',
      de: 'Embedded-Prototyp zur Fahrerüberwachung, umgesetzt auf Jetson Nano und Raspberry Pi. Ich implementierte MediaPipe-basierte Müdigkeitserkennung mit 18–20 FPS sowie YOLOv8-Handyerkennung mit 10 FPS und 97,8 % mAP@0.5. Die Bachelorarbeit wurde mit A+ bewertet und erreichte bei der GPAct Talent Expo national Platz 1 unter 15 Teams.',
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
      { value: { en: '2nd', de: '2.' }, label: { en: 'worldwide at MATE ROV 2021', de: 'weltweit bei MATE ROV 2021' } },
      { value: { en: '101.5/100', de: '101,5/100' }, label: { en: 'technical documentation score', de: 'Bewertung der technischen Dokumentation' } },
      { value: { en: '8', de: '8' }, label: { en: 'thrusters in a custom propulsion layout', de: 'Thruster in eigener Antriebskonfiguration' } },
    ],
    desc: {
      en: 'Competition ROV developed with team Invictus UMVs. I contributed to the frame design, eight-thruster propulsion layout and a CNN/OpenCV pipeline that detects Crown-of-Thorns starfish and bleached coral and maps observations onto a 9×3 grid using IMU data. The project ranked second worldwide among 20 teams at MATE ROV 2021 and first regionally.',
      de: 'Wettbewerbs-ROV, entwickelt mit dem Team Invictus UMVs. Ich arbeitete an der Rahmenkonstruktion, der Antriebskonfiguration mit acht Thrustern und einer CNN-/OpenCV-Pipeline, die Dornenkronen-Seesterne sowie gebleichte Korallen erkennt und Beobachtungen mithilfe von IMU-Daten auf einem 9×3-Raster kartiert. Das Projekt erreichte bei MATE ROV 2021 weltweit Platz 2 unter 20 Teams und regional Platz 1.',
    },
    tags: ['SolidWorks', 'CNN', 'OpenCV', 'Embedded C', 'Control systems'],
  },
  {
    id: 'digital-twin',
    title: 'Robotic Arm Digital Twin',
    category: 'featured',
    media: '/media/digital-twin.mp4',
    poster: '/media/digital-twin-poster.jpg',
    repo: 'https://github.com/MKamel7/Digital-twin-Predictive-maintenance',
    metrics: [
      { value: { en: '94.4 ± 1.6%', de: '94,4 ± 1,6 %' }, label: { en: 'reported case-study fault-diagnosis accuracy', de: 'berichtete Genauigkeit der Fehlerdiagnose in der Fallstudie' } },
    ],
    desc: {
      en: 'Simscape digital twin of a robotic arm for predictive-maintenance research. I modelled bearing, gear-wear and imbalance faults, extracted residual-torque features and developed a hierarchical classifier for fault type, affected joint and severity. The case study reported 94.4 ± 1.6% diagnostic accuracy and included sensitivity analysis for inertial mismatch between the twin and the plant.',
      de: 'Simscape-Digital-Twin eines Roboterarms für Predictive-Maintenance-Untersuchungen. Ich modellierte Lager-, Zahnradverschleiß- und Unwuchtfehler, extrahierte Merkmale aus Restmomenten und entwickelte einen hierarchischen Klassifikator für Fehlertyp, betroffenes Gelenk und Schweregrad. Die Fallstudie berichtete eine Diagnosegenauigkeit von 94,4 ± 1,6 % und umfasste eine Sensitivitätsanalyse für Trägheitsabweichungen zwischen Digital Twin und Anlage.',
    },
    tags: ['MATLAB', 'Simulink', 'Simscape', 'Machine Learning'],
  },
  {
    id: 'warehouse',
    title: 'Multi-Agent Warehouse Logistics',
    category: 'featured',
    media: '/media/warehouse.mp4',
    poster: '/media/warehouse-poster.jpg',
    repo: 'https://github.com/MKamel7/warehouse-fleet',
    metrics: [
      { value: { en: '3', de: '3' }, label: { en: 'robots coordinated as a fleet', de: 'Roboter als Flotte koordiniert' } },
      { value: { en: 'ROS 2', de: 'ROS 2' }, label: { en: 'Humble with Nav2', de: 'Humble mit Nav2' } },
    ],
    desc: {
      en: 'Multi-agent warehouse-logistics simulation with three robots on ROS 2 Humble, Nav2 and Gazebo. I implemented two coordination modes: a convoy following a Nav2-planned leader and three independent namespaced navigation stacks managed by a fleet coordinator. The architecture demonstrates multi-robot namespace isolation, coordinated task execution and reusable navigation components.',
      de: 'Multi-Agenten-Simulation für die Lagerlogistik mit drei Robotern auf Basis von ROS 2 Humble, Nav2 und Gazebo. Ich implementierte zwei Koordinationsmodi: einen Konvoi hinter einem durch Nav2 geplanten Führungsroboter sowie drei unabhängige, über Namespaces getrennte Navigations-Stacks unter einer Flottensteuerung. Die Architektur demonstriert Namespace-Isolation, koordinierte Aufgabenausführung und wiederverwendbare Navigationskomponenten.',
    },
    tags: ['ROS 2 Humble', 'Nav2', 'Gazebo', 'Python'],
  },
  {
    id: 'fire-robot',
    title: 'Autonomous Fire-Fighting Robot',
    category: 'featured',
    media: '/media/fire-robot.mp4',
    poster: '/media/fire-robot-poster.jpg',
    metrics: [
      { value: { en: '3', de: '3' }, label: { en: 'sensor types: smoke, flame and proximity', de: 'Sensortypen: Rauch, Flamme und Abstand' } },
      { value: { en: 'FEA', de: 'FEM' }, label: { en: 'stress-verified chassis', de: 'spannungsanalysiertes Chassis' } },
    ],
    desc: {
      en: 'Autonomous fire-fighting robot developed as a B.Sc. mechatronics project. I integrated smoke, flame and proximity sensors for fire detection, approach control and obstacle avoidance, with an onboard tank, pump and hose for suppression. Finite-element stress analysis guided reinforcement of the chassis before implementation.',
      de: 'Autonomer Feuerlöschroboter, entwickelt als Mechatronikprojekt im Bachelorstudium. Ich integrierte Rauch-, Flammen- und Abstandssensoren für Branderkennung, Annäherungsregelung und Hindernisvermeidung sowie Tank, Pumpe und Schlauch für die Brandbekämpfung. Eine Finite-Elemente-Spannungsanalyse diente als Grundlage für die konstruktive Verstärkung des Chassis.',
    },
    tags: ['Arduino', 'FEA', 'Obstacle avoidance', 'Mechatronics'],
  },
  {
    id: 'smart-home',
    title: 'Autonomous Smart Home',
    category: 'featured',
    media: '/media/smart-home.mp4',
    poster: '/media/smart-home-poster.jpg',
    metrics: [
      { value: { en: '4', de: '4' }, label: { en: 'automated subsystems', de: 'automatisierte Subsysteme' } },
      { value: { en: 'BT', de: 'BT' }, label: { en: 'control through an Android app', de: 'Steuerung über eine Android-App' } },
    ],
    desc: {
      en: 'Arduino Mega home-automation system developed as a B.Sc. mechatronics project and controlled through an Android app over Bluetooth. I integrated four automated subsystems: temperature-based heating and cooling, ambient-light dimming, proximity-triggered garage access and a keypad-secured entrance with an alarm.',
      de: 'Hausautomationssystem auf Basis eines Arduino Mega, entwickelt als Mechatronikprojekt im Bachelorstudium und über eine Android-App per Bluetooth gesteuert. Ich integrierte vier automatisierte Subsysteme: temperaturgeführtes Heizen und Kühlen, Umgebungslicht-Dimmung, näherungsabhängige Garagenzufahrt sowie einen per Zahlencode gesicherten Eingang mit Alarmanlage.',
    },
    tags: ['Arduino Mega', 'Bluetooth', 'Home automation', 'Sensors'],
  },
];
