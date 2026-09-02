import type { Project } from '../types';

// Media contract: drop a file into public/media/ and set `media: '/media/<file>'`.
// .mp4 renders as autoplaying muted video, image formats as lazy <img>,
// missing media renders a styled placeholder tile.

// Order is the recruiter ranking, not chronology and not sentiment, and it is
// Mo's own (2026-09-03). The first seven are the engineering repositories: the
// MoveIt cell, the measured AMR, virtual commissioning on a real PLC runtime,
// functional-safety fault injection, an ADAS evaluation, the kinematics library
// and the embedded test framework. The thesis, the ROV, the coursework studies
// and the B.Sc. Arduino projects are all real and stay on the page, but they go
// after, because a reader who stops after three cards should have seen the three
// that argue hardest.

// COPY RULES, from how this page is actually read (2026-09-02):
//   1. `desc` is two sentences at most. It says what the thing is and what
//      makes it worth reading. Everything else goes in `highlights`.
//   2. `highlights` are single lines, two or three per project, each a result
//      or a decision a reviewer can go and check. They exist because a
//      recruiter skims, and a six-sentence paragraph is skipped whole.
//   3. Abbreviations a non-specialist cannot expand are written out in the
//      prose (95th percentile, not p95; mean average precision, not mAP;
//      seven-joint arm, not 7-DOF). Tool names stay abbreviated in `tags`,
//      because that is where a keyword search looks.
export const projects: Project[] = [
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
      { value: { en: '92 of 100', de: '92 von 100' }, label: { en: 'randomised placements picked and placed', de: 'zufällige Platzierungen gegriffen und abgelegt' } },
      { value: { en: '4.0 mm', de: '4,0 mm' }, label: { en: 'typical error locating the part, 7.3 mm at the 95th percentile', de: 'typischer Fehler bei der Lokalisierung, 7,3 mm im 95. Perzentil' } },
      { value: { en: 'URSim', de: 'URSim' }, label: { en: 'validated against the real Universal Robots software', de: 'gegen die echte Universal-Robots-Software validiert' } },
    ],
    desc: {
      en: 'An industrial colour-sorting cell for a UR5e robot arm on ROS 2 Jazzy and MoveIt 2. An overhead depth camera locates the selected part, and the planner carries it to the matching outfeed lane without hitting anything on the way.',
      de: 'Eine industrielle Farbsortierzelle für einen UR5e-Roboterarm auf Basis von ROS 2 Jazzy und MoveIt 2. Eine Tiefenkamera über der Zelle lokalisiert das gewählte Teil, und der Planer bringt es kollisionsfrei zur passenden Auslaufbahn.',
    },
    highlights: [
      { en: 'The success rate is measured rather than asserted: 100 randomised placements, reproducible from a committed results file.',
        de: 'Die Erfolgsquote ist gemessen statt behauptet: 100 zufällige Platzierungen, reproduzierbar aus einer versionierten Ergebnisdatei.' },
      { en: 'Every stage reports why it stopped, so an unreachable target and a blocked path are told apart instead of both reading as one failure.',
        de: 'Jede Stufe meldet, warum sie stehen blieb, sodass ein unerreichbares Ziel und ein blockierter Pfad unterschieden werden statt beide als ein Fehler zu erscheinen.' },
      { en: 'A Gazebo digital shadow mirrors the running cell, and the cell exposes itself to a controller over OPC UA.',
        de: 'Ein digitaler Schatten in Gazebo spiegelt die laufende Zelle, und die Zelle stellt sich einer Steuerung über OPC UA zur Verfügung.' },
    ],
    tags: ['ROS 2 Jazzy', 'MoveIt 2', 'MoveIt Task Constructor', 'OMPL', 'RGB-D perception', 'OPC UA'],
  },
  {
    id: 'p5',
    title: 'Autonomous Mobile Robot for Intralogistics',
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
      { value: { en: '12 of 12', de: '12 von 12' }, label: { en: 'transport cycles with no pedestrian contact', de: 'Transportzyklen ohne Personenkontakt' } },
      { value: { en: '7%', de: '7 %' }, label: { en: 'of cycle time spent on protective stops', de: 'der Zykluszeit für Schutzhalte' } },
      { value: { en: '124 ms', de: '124 ms' }, label: { en: 'sensor to command latency, 95th percentile', de: 'Latenz von Sensor bis Kommando, 95. Perzentil' } },
    ],
    desc: {
      en: 'A 250 kg class transport robot that moves load carriers through a warehouse shared with people on foot, built on ROS 2 Jazzy, Nav2 and C++ perception. Its protective fields come from the vehicle’s own braking data rather than from hand tuning, and an independent safety layer sits after the planner and can override it.',
      de: 'Ein Transportroboter der 250-kg-Klasse, der Ladungsträger durch ein gemeinsam mit Personen genutztes Lager bewegt, auf Basis von ROS 2 Jazzy, Nav2 und C++-Wahrnehmung. Die Schutzfelder stammen aus den Bremsdaten des Fahrzeugs statt aus manueller Einstellung, und eine unabhängige Sicherheitsschicht sitzt hinter dem Planer und kann ihn übersteuern.',
    },
    highlights: [
      { en: 'Protective fields generated from the vehicle specification, following ISO 3691-4 for driverless industrial trucks.',
        de: 'Schutzfelder aus der Fahrzeugspezifikation erzeugt, orientiert an ISO 3691-4 für fahrerlose Flurförderzeuge.' },
      { en: 'Every physical constant traces to an archived data sheet, and the build fails when one loses its source.',
        de: 'Jede physikalische Konstante lässt sich auf ein archiviertes Datenblatt zurückführen, und der Build schlägt fehl, sobald eine ihre Quelle verliert.' },
      { en: 'Validated end to end on one vehicle, with 67 numbered measurements published beside the claims they support.',
        de: 'Durchgängig an einem Fahrzeug validiert, mit 67 nummerierten Messungen, die neben den zugehörigen Aussagen veröffentlicht sind.' },
    ],
    tags: ['ROS 2 Jazzy', 'Nav2', 'Gazebo Harmonic', 'C++', 'ISO 3691-4', 'VDA 5050'],
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
      { value: { en: '299', de: '299' }, label: { en: 'automated tests, 100% branch coverage', de: 'automatisierte Tests, 100 % Branch Coverage' } },
      { value: { en: '14', de: '14' }, label: { en: 'safety requirements traced to their tests', de: 'Sicherheitsanforderungen zu ihren Tests rückverfolgt' } },
      { value: { en: '62.5%', de: '62,5 %' }, label: { en: 'baseline overall equipment effectiveness', de: 'Basis-Gesamtanlageneffektivität' } },
    ],
    desc: {
      en: 'Virtual commissioning of a packaging cell: real control software in IEC 61131-3 Structured Text, running on a CODESYS soft PLC, driving a simulated plant over Modbus TCP. The plant is a stand-in, the controller is not.',
      de: 'Virtuelle Inbetriebnahme einer Verpackungszelle: echte Steuerungssoftware in IEC-61131-3-Structured-Text auf einer CODESYS-SoftPLC, die eine simulierte Anlage über Modbus TCP ansteuert. Die Anlage ist ein Platzhalter, die Steuerung nicht.',
    },
    highlights: [
      { en: 'Built on PackML and the standard packaging tag set, so the cell speaks what a line integrator already expects.',
        de: 'Aufgebaut auf PackML und dem standardisierten PackTags-Satz, sodass die Zelle spricht, was ein Linienintegrator ohnehin erwartet.' },
      { en: 'A watchdog drops every actuator when the link to the plant stops, verified by killing the plant process mid cycle.',
        de: 'Ein Watchdog lässt alle Aktoren abfallen, sobald die Verbindung zur Anlage abreißt, verifiziert durch Abschalten des Anlagenprozesses im laufenden Takt.' },
      { en: 'Modelled as an ISA-95 equipment hierarchy over encrypted OPC UA, so a machine is addressed by where it sits rather than by a flat tag list.',
        de: 'Als ISA-95-Anlagenhierarchie über verschlüsseltes OPC UA modelliert, sodass eine Maschine über ihre Position adressiert wird und nicht über eine flache Tag-Liste.' },
    ],
    tags: ['IEC 61131-3', 'CODESYS', 'PackML', 'Modbus TCP', 'OPC UA', 'ISA-95'],
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
      { value: { en: '29', de: '29' }, label: { en: 'faults from hazard analysis, 24 caught in time', de: 'Fehler aus der Gefährdungsanalyse, 24 rechtzeitig erkannt' } },
      { value: { en: '323', de: '323' }, label: { en: 'automated tests, 100% branch coverage', de: 'automatisierte Tests, 100 % Branch Coverage' } },
      { value: { en: '7', de: '7' }, label: { en: 'independent-review findings closed', de: 'Befunde aus unabhängigem Review geschlossen' } },
    ],
    desc: {
      en: 'A functional-safety verification framework for an embedded motor controller, built the way a safety case is built. Faults come from the hazard analysis rather than from imagination, each one carries a detection deadline, and every requirement is traced in both directions to the tests that cover it.',
      de: 'Ein Verifikationsframework für funktionale Sicherheit an einer eingebetteten Motorsteuerung, aufgebaut wie ein Sicherheitsnachweis. Die Fehler stammen aus der Gefährdungsanalyse statt aus der Vorstellung, jeder trägt eine Erkennungsfrist, und jede Anforderung ist beidseitig zu den Tests rückverfolgbar, die sie abdecken.',
    },
    highlights: [
      { en: 'Failure modes and diagnostic coverage analysed to ISO 26262-5, keeping measured detection separate from assumed.',
        de: 'Fehlerarten und Diagnosedeckung nach ISO 26262-5 analysiert, wobei gemessene Erkennung und angenommene Deckung getrennt bleiben.' },
      { en: 'A fault tree exposed a common-cause single point of failure that the traceability chain alone could not reveal.',
        de: 'Ein Fehlerbaum deckte einen Single Point of Failure durch gemeinsame Ursache auf, den die Rückverfolgbarkeitskette allein nicht zeigen konnte.' },
      { en: 'Data integrity built on checksums, sequence counters and timeout monitoring, the mechanisms industrial safety buses rely on.',
        de: 'Datenintegrität über Prüfsummen, Sequenzzähler und Timeout-Überwachung, also die Mechanismen, auf die industrielle Sicherheitsbusse setzen.' },
    ],
    tags: ['Python', 'Functional safety', 'ISO 26262-inspired', 'Fault injection', 'Requirements traceability'],
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
        en: 'Pedestrians beyond 30 metres. Green was found, red was annotated and nothing matched it, blue is a detection. The measured average precision in this band is 0.009.',
        de: 'Fußgänger jenseits von 30 Metern. Grün wurde gefunden, Rot ist annotiert und wurde von nichts getroffen, Blau ist eine Detektion. Die gemessene Average Precision in diesem Band beträgt 0,009.' } },
      { src: '/media/p3-shot-occlusion.webp', caption: {
        en: 'Partial occlusion, the archetypal urban case. Pedestrian average precision falls from 0.650 fully visible to 0.178 partly occluded, before an annotator would call the object mostly hidden.',
        de: 'Teilverdeckung, der typische Stadtfall. Die Average Precision für Fußgänger fällt von 0,650 bei voller Sichtbarkeit auf 0,178 bei Teilverdeckung, noch bevor ein Annotator das Objekt als überwiegend verdeckt einstufen würde.' } },
      { src: '/media/p3-shot-cars.webp', caption: {
        en: 'Cars beyond 50 metres, each red box labelled with the overlap it achieved where 0.50 was needed. 73% of car misses are boxes that landed badly rather than objects never seen.',
        de: 'Fahrzeuge jenseits von 50 Metern, jede rote Box beschriftet mit der erreichten Überlappung, wobei 0,50 nötig gewesen wäre. 73% der verpassten Fahrzeuge sind schlecht platzierte Boxen und keine nie erkannten Objekte.' } },
    ],
    metrics: [
      { value: { en: '68.7%', de: '68,7 %' }, label: { en: 'highest pedestrian recall at any threshold', de: 'höchster Fußgänger-Recall bei jedem Schwellenwert' } },
      { value: { en: '40,570', de: '40.570' }, label: { en: 'annotated objects across the full KITTI split', de: 'annotierte Objekte im vollständigen KITTI-Split' } },
      { value: { en: '0.000', de: '0,000' }, label: { en: 'average precision gap against the reference', de: 'Abweichung der Average Precision zur Referenz' } },
    ],
    desc: {
      en: 'An evidence-based evaluation of a pedestrian detector for driver assistance, run over the complete KITTI dataset. The question it answers is not how good the model looks on average, but where it stops working.',
      de: 'Eine evidenzbasierte Bewertung eines Fußgängerdetektors für Fahrerassistenzsysteme über den vollständigen KITTI-Datensatz. Die Frage ist nicht, wie gut das Modell im Mittel aussieht, sondern wo es aufhört zu funktionieren.',
    },
    highlights: [
      { en: 'Performance sliced by distance and by occlusion, so the drop beyond 30 metres is quantified rather than suspected.',
        de: 'Leistung nach Distanz und Verdeckung aufgeschlüsselt, sodass der Einbruch jenseits von 30 Metern quantifiziert und nicht vermutet ist.' },
      { en: 'Nine triggering conditions assessed against ISO 21448, the standard for safety of the intended functionality.',
        de: 'Neun auslösende Bedingungen nach ISO 21448 bewertet, dem Standard für die Sicherheit der Sollfunktion.' },
      { en: 'Confidence scores checked for calibration, because a detector that is confidently wrong is the one that matters.',
        de: 'Konfidenzwerte auf Kalibrierung geprüft, denn ein Detektor, der selbstsicher falsch liegt, ist der entscheidende Fall.' },
    ],
    tags: ['ONNX Runtime', 'KITTI', 'ISO 21448 SOTIF', 'Evaluation engineering', 'pycocotools', 'Python'],
  },
  {
    id: 'palletizing',
    title: 'UR5e Palletizing Cell',
    category: 'featured',
    media: '/media/palletizing.mp4',
    poster: '/media/palletizing-poster.jpg',
    repo: 'https://github.com/MKamel7/robot-arm-ik',
    metrics: [
      { value: { en: '≤0.1 mm', de: '≤0,1 mm' }, label: { en: 'maximum numerical inverse-kinematics position residual', de: 'maximales numerisches Inverskinematik-Positionsresiduum' } },
      { value: { en: '4', de: '4' }, label: { en: 'planner families compared on the same problems', de: 'Planerfamilien an denselben Aufgaben verglichen' } },
      { value: { en: '111', de: '111' }, label: { en: 'automated tests, the count enforced by the build', de: 'automatisierte Tests, Anzahl vom Build erzwungen' } },
    ],
    desc: {
      en: 'A palletizing cell for a UR5e with the kinematics written from scratch in NumPy rather than taken from a library. Given a target pose the solver finds the joint angles, the planner routes around the fixture in the way, and parts stack into a multilayer pallet.',
      de: 'Eine Palettierzelle für einen UR5e, deren Kinematik von Grund auf in NumPy geschrieben ist statt aus einer Bibliothek übernommen. Zu einer Zielpose findet der Löser die Gelenkwinkel, der Planer umfährt die im Weg stehende Vorrichtung, und die Teile stapeln sich zu einer mehrlagigen Palette.',
    },
    highlights: [
      { en: 'The hand-written planners were benchmarked against the ones MoveIt ships, over twenty problems on the same arm.',
        de: 'Die selbst geschriebenen Planer wurden gegen die von MoveIt ausgelieferten verglichen, über zwanzig Aufgaben am selben Arm.' },
      { en: 'That comparison found paths passing through a thin obstacle between their own waypoints, which checking the waypoints alone can never reveal.',
        de: 'Dieser Vergleich fand Pfade, die zwischen ihren eigenen Stützpunkten durch ein dünnes Hindernis laufen, was eine Prüfung allein an den Stützpunkten nie zeigen kann.' },
      { en: 'Extended to a seven-joint arm, where the spare joint is spent on staying clear of joint limits without moving the tool.',
        de: 'Erweitert auf einen Arm mit sieben Gelenken, bei dem das überzählige Gelenk genutzt wird, um Gelenkgrenzen zu meiden, ohne das Werkzeug zu bewegen.' },
    ],
    tags: ['MuJoCo', 'NumPy', 'Inverse kinematics', 'Motion planning', 'Collision avoidance', 'Python'],
  },
  {
    id: 'p1',
    title: 'Embedded Test & Measurement Framework',
    category: 'featured',
    media: '/media/p1.mp4',
    poster: '/media/p1-poster.jpg',
    repo: 'https://github.com/MKamel7/embedded-test-automation',
    metrics: [
      { value: { en: '129', de: '129' }, label: { en: 'automated tests, 100% branch coverage', de: 'automatisierte Tests, 100 % Branch Coverage' } },
      { value: { en: '5 of 5', de: '5 von 5' }, label: { en: 'seeded broken controllers rejected by the suite', de: 'eingebaute fehlerhafte Steuerungen zurückgewiesen' } },
      { value: { en: '6,000 rpm', de: '6.000 min⁻¹' }, label: { en: 'envelope from a Siemens servomotor data sheet', de: 'Grenzen aus einem Siemens-Servomotor-Datenblatt' } },
    ],
    desc: {
      en: 'A hardware-in-the-loop test framework for an embedded motor controller. The same tests run against a deterministic simulator today and against a physical board later, because they talk to a transport interface rather than to a device.',
      de: 'Ein Hardware-in-the-Loop-fähiges Testframework für eine eingebettete Motorsteuerung. Dieselben Tests laufen heute gegen einen deterministischen Simulator und später gegen eine reale Platine, weil sie mit einer Transportschnittstelle sprechen und nicht mit einem Gerät.',
    },
    highlights: [
      { en: 'Five deliberately broken controllers keep the suite honest: all five have to be rejected, so the tests are shown to fail and not only to pass.',
        de: 'Fünf absichtlich fehlerhafte Steuerungen halten die Testsuite ehrlich: Alle fünf müssen zurückgewiesen werden, sodass die Tests nachweislich auch fehlschlagen können.' },
      { en: 'The serial path runs over a real character device, so the transport is shown to talk to a device rather than to an echo of itself.',
        de: 'Der serielle Pfad läuft über ein echtes Zeichengerät, sodass der Transport nachweislich mit einem Gerät spricht und nicht mit einem Echo seiner selbst.' },
      { en: 'Property-based fuzzing with Hypothesis searches for the inputs a hand-written test would never think to try.',
        de: 'Property-based Fuzzing mit Hypothesis sucht nach Eingaben, auf die ein handgeschriebener Test nie käme.' },
    ],
    tags: ['Python', 'pytest', 'Hypothesis', 'HIL-ready', 'CI'],
  },
  {
    id: 'dms',
    title: 'Driver Monitoring System',
    category: 'featured',
    media: '/media/dms.mp4',
    poster: '/media/dms-poster.jpg',
    repo: 'https://github.com/MKamel7/driver-monitoring-system',
    metrics: [
      { value: { en: '97.8%', de: '97,8 %' }, label: { en: 'mean average precision for phone detection', de: 'mittlere Average Precision bei der Handyerkennung' } },
      { value: { en: '18-20 FPS', de: '18-20 FPS' }, label: { en: 'drowsiness detection on a Jetson Nano', de: 'Müdigkeitserkennung auf einem Jetson Nano' } },
      { value: { en: 'A+', de: 'A+' }, label: { en: 'bachelor thesis grade', de: 'Note der Bachelorarbeit' } },
    ],
    desc: {
      en: 'An embedded driver-monitoring prototype running on Jetson Nano and Raspberry Pi, developed as an industry-partnered bachelor thesis. It watches for drowsiness and for phone use at the wheel.',
      de: 'Ein eingebetteter Prototyp zur Fahrerüberwachung auf Jetson Nano und Raspberry Pi, entwickelt als Bachelorarbeit in Industriekooperation. Er erkennt Müdigkeit und Handynutzung am Steuer.',
    },
    highlights: [
      { en: 'Drowsiness detection at 18 to 20 frames per second on a Jetson Nano, fast enough to warn while the warning still helps.',
        de: 'Müdigkeitserkennung mit 18 bis 20 Bildern pro Sekunde auf einem Jetson Nano, schnell genug, damit die Warnung noch hilft.' },
      { en: 'Phone detection trained with YOLOv8 on a purpose-built dataset, reaching 97.8% mean average precision.',
        de: 'Handyerkennung mit YOLOv8 auf einem eigens erstellten Datensatz trainiert, mit 97,8 % mittlerer Average Precision.' },
      { en: 'Graded A+ and placed first nationally among 15 teams at the GPAct Talent Expo.',
        de: 'Mit A+ bewertet und national auf Platz 1 unter 15 Teams bei der GPAct Talent Expo.' },
    ],
    tags: ['YOLOv8', 'MediaPipe', 'Jetson Nano', 'Raspberry Pi', 'OpenCV', 'Python'],
  },
  {
    id: 'rov',
    title: 'Brotta II Underwater ROV',
    category: 'featured',
    media: '/media/rov.mp4',
    poster: '/media/rov-poster.jpg',
    metrics: [
      { value: { en: '2nd', de: '2.' }, label: { en: 'worldwide of 20 teams at MATE ROV 2021', de: 'weltweit von 20 Teams bei MATE ROV 2021' } },
      { value: { en: '101.5/100', de: '101,5/100' }, label: { en: 'score for the technical documentation', de: 'Bewertung der technischen Dokumentation' } },
      { value: { en: '8', de: '8' }, label: { en: 'thrusters in a propulsion layout of our own', de: 'Thruster in einer selbst entworfenen Konfiguration' } },
    ],
    desc: {
      en: 'A competition remotely operated underwater vehicle built with team Invictus UMVs. I worked on the frame, the eight-thruster propulsion layout and the vision pipeline that surveys the seabed.',
      de: 'Ein ferngesteuertes Unterwasserfahrzeug für den Wettbewerb, gebaut mit dem Team Invictus UMVs. Ich arbeitete am Rahmen, an der Antriebskonfiguration mit acht Thrustern und an der Vision-Pipeline für die Seebodenerkundung.',
    },
    highlights: [
      { en: 'A neural-network vision pipeline finds Crown-of-Thorns starfish and bleached coral and maps them onto a survey grid.',
        de: 'Eine Vision-Pipeline mit neuronalem Netz erkennt Dornenkronen-Seesterne und gebleichte Korallen und kartiert sie auf einem Vermessungsraster.' },
      { en: 'A seal failed an hour before the regional competition; I made the replacement on site, and it held through two days of operation.',
        de: 'Eine Dichtung versagte eine Stunde vor dem Regionalwettbewerb; ich fertigte den Ersatz vor Ort, und er hielt zwei Betriebstage lang.' },
    ],
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
      { value: { en: '94.4 ± 1.6%', de: '94,4 ± 1,6 %' }, label: { en: 'reported case-study fault-diagnosis accuracy', de: 'berichtete Genauigkeit der Fehlerdiagnose' } },
    ],
    desc: {
      en: 'A Simscape digital twin of a robotic arm, used to study predictive maintenance. Bearing wear, gear wear and imbalance are modelled in the twin, and the classifier has to say which fault, which joint and how severe.',
      de: 'Ein Simscape-Digital-Twin eines Roboterarms für die Untersuchung vorausschauender Instandhaltung. Lagerverschleiß, Zahnradverschleiß und Unwucht sind im Twin modelliert, und der Klassifikator muss Fehlerart, betroffenes Gelenk und Schweregrad benennen.',
    },
    highlights: [
      { en: 'Faults are diagnosed from residual torque, the difference between what the twin expects and what the plant does.',
        de: 'Fehler werden aus dem Restmoment diagnostiziert, also aus der Differenz zwischen der Erwartung des Twins und dem Verhalten der Anlage.' },
      { en: 'Sensitivity to inertial mismatch between twin and plant was measured, since a twin is never exact.',
        de: 'Die Empfindlichkeit gegenüber Trägheitsabweichungen zwischen Twin und Anlage wurde gemessen, denn ein Twin ist nie exakt.' },
    ],
    tags: ['MATLAB', 'Simulink', 'Simscape', 'Machine Learning'],
  },
  {
    id: 'warehouse',
    title: 'Multi-Robot Warehouse Logistics',
    category: 'featured',
    media: '/media/warehouse.mp4',
    poster: '/media/warehouse-poster.jpg',
    repo: 'https://github.com/MKamel7/warehouse-fleet',
    metrics: [
      { value: { en: '3', de: '3' }, label: { en: 'robots navigating under one coordinator', de: 'Roboter, die unter einer Koordination navigieren' } },
      { value: { en: '2', de: '2' }, label: { en: 'coordination modes: convoy and independent', de: 'Koordinationsmodi: Konvoi und unabhängig' } },
    ],
    desc: {
      en: 'A multi-robot warehouse simulation on ROS 2 Humble, Nav2 and Gazebo, built as coursework. Three robots share one map and one coordinator.',
      de: 'Eine Multi-Roboter-Lagersimulation auf ROS 2 Humble, Nav2 und Gazebo, entstanden als Studienleistung. Drei Roboter teilen sich eine Karte und eine Koordination.',
    },
    highlights: [
      { en: 'Two coordination modes: a convoy following a planned leader, and three independent navigation stacks under a coordinator.',
        de: 'Zwei Koordinationsmodi: ein Konvoi hinter einem geplanten Führungsroboter und drei unabhängige Navigations-Stacks unter einer Koordination.' },
      { en: 'Each robot runs in its own namespace, which is how a multi-robot ROS 2 system keeps its topics apart.',
        de: 'Jeder Roboter läuft in einem eigenen Namespace, so hält ein Multi-Roboter-System in ROS 2 seine Topics auseinander.' },
    ],
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
      en: 'An autonomous fire-fighting robot built as a bachelor mechatronics project. It finds a fire, drives to a safe distance and puts it out with an onboard tank, pump and hose.',
      de: 'Ein autonomer Feuerlöschroboter als Mechatronikprojekt im Bachelorstudium. Er findet einen Brand, fährt auf sicheren Abstand heran und löscht ihn mit Tank, Pumpe und Schlauch an Bord.',
    },
    highlights: [
      { en: 'Smoke, flame and proximity sensors drive detection, approach control and obstacle avoidance.',
        de: 'Rauch-, Flammen- und Abstandssensoren steuern Erkennung, Annäherung und Hindernisvermeidung.' },
      { en: 'Finite-element stress analysis found the weak points in the chassis before it was built rather than after.',
        de: 'Eine Finite-Elemente-Spannungsanalyse fand die Schwachstellen des Chassis vor dem Bau statt danach.' },
    ],
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
      en: 'An Arduino Mega home-automation system built as a bachelor mechatronics project, controlled from an Android app over Bluetooth.',
      de: 'Ein Hausautomationssystem auf Arduino Mega als Mechatronikprojekt im Bachelorstudium, gesteuert über eine Android-App per Bluetooth.',
    },
    highlights: [
      { en: 'Four subsystems automated: heating and cooling, light dimming, garage access, and a keypad-secured entrance with an alarm.',
        de: 'Vier automatisierte Subsysteme: Heizen und Kühlen, Lichtdimmung, Garagenzufahrt und ein per Zahlencode gesicherter Eingang mit Alarm.' },
      { en: 'Each subsystem runs on its own sensors, with the app as an override rather than as the only way in.',
        de: 'Jedes Subsystem läuft über eigene Sensoren, die App dient als Übersteuerung und nicht als einziger Zugang.' },
    ],
    tags: ['Arduino Mega', 'Bluetooth', 'Home automation', 'Sensors'],
  },
];
