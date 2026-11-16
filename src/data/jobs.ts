// Open roles. Roles with `external` link out (Wellfound). Roles with `sections` get their own page at /careers/<slug>.

export interface JobSection { title: string; items: string[] }
export interface Job {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  /** Date the role was posted (YYYY-MM-DD). Used by Google job search. */
  posted?: string;
  /** Base pay range in CAD per year. Shown on the page and sent to Google. */
  pay?: { min: number; max: number; equity?: string };
  /** Overrides the default work-eligibility line. */
  eligibility?: string;
  /** Overrides the default note under "How to apply". */
  applyNote?: string;
  external?: string;
  intro?: string[];
  sections?: JobSection[];
}

export const jobs: Job[] = [
  {
    slug: 'head-of-space-ai',
    posted: '2026-11-16',
    title: 'Head of Space AI',
    team: 'AI · P1S Buddy',
    location: 'Vancouver, BC · On-site or remote in Canada',
    type: 'Full-time · Salary + equity',
    pay: { min: 160000, max: 200000, equity: '0.5%–1.5%' },
    eligibility: 'Must be eligible to work in Canada. Pacific Time preferred. We cannot sponsor a visa or pay relocation for this role.',
    applyNote: 'with your CV or LinkedIn and a short note about an AI system you took from prototype to production. Links to code, papers or demos help. We read every application.',
    summary: 'Own the onboard autonomy stack end to end: sensing, perception, decision and the edge runtime that flies on the satellite.',
    intro: [
      'P1S Buddy is the onboard AI unit that lets a satellite see what is around it and act on its own, with no person in the loop. It runs on edge compute inside the spacecraft and works with P1S PELTAST-X, our water thruster, to move the satellite out of danger.',
      'You will own the AI that makes this work, from camera to decision. This is a hands-on role. You write code, lead the AI team, and take the system from simulation to hardware that flies.',
    ],
    sections: [
      {
        title: 'What you will do',
        items: [
          'Design the full pipeline from sensing to action: cameras, perception, decision and the interface to the thruster controller.',
          'Lead perception work: detection, segmentation, tracking, visual odometry and anomaly detection.',
          'Run edge AI: model compression, hardware-aware inference, ONNX and TensorRT deployment, real-time processing on embedded hardware.',
          'Build the MLOps base: data pipelines, training and evaluation, model versions, deployment and monitoring.',
          'Turn research (computer vision, deep learning, reinforcement learning, autonomy) into flight software.',
          'Mentor engineers. Set how we build and review code. Lead the root-cause work when something fails.',
        ],
      },
      {
        title: 'In your first year',
        items: [
          'A written autonomy architecture the whole team builds to.',
          'A strong AI team with clear ways of working.',
          'Data and model pipelines that anyone on the team can re-run and get the same result.',
          'AI that works on spacecraft hardware or in high-fidelity simulation.',
          'A clear path from prototype to onboard flight software.',
        ],
      },
      {
        title: 'What you bring',
        items: [
          '10+ years in engineering, with deep hands-on work in at least one area of machine perception.',
          'Strong software and systems skills: Python, C/C++, Linux, GPU computing, containers.',
          'Practical knowledge of hardware: cameras, optics, sensors and embedded compute.',
          'ML systems you took from prototype to production.',
          'Proven technical leadership.',
        ],
      },
      {
        title: 'Nice to have',
        items: [
          'Reinforcement learning and learning-based control.',
          'Robotics, simulation and hardware-in-the-loop testing.',
          'Visual odometry, SLAM and state estimation.',
          'Planning, control and robotics middleware.',
          'Real-time systems and flight software.',
          'Satellites, spacecraft systems or orbital dynamics.',
          'Cloud platforms (AWS, GCP or similar) for ground-side pipelines.',
        ],
      },
    ],
  },
  {
    slug: 'space-optical-engineer',
    posted: '2026-11-15',
    title: 'Space Optical Engineer',
    team: 'Hardware · P1S Buddy',
    location: 'Vancouver, BC · On-site or hybrid',
    type: 'Full-time · Salary + equity',
    summary: 'Own the eyes of P1S Buddy: visible, event-based and thermal camera heads that find small objects in sunlight and in eclipse.',
    intro: [
      'P1S Buddy is the onboard AI unit that lets a satellite see what is around it and act on its own. It carries visible, event-based and thermal cameras. It finds a 10 cm object in sunlight at 83 km and a 1 m object in eclipse at 24 km.',
      'You will own the optics that make those numbers real. You take the camera heads from design to tested flight hardware, and you work every day with the AI team that uses your images.',
    ],
    sections: [
      {
        title: 'What you will do',
        items: [
          'Choose lenses and sensors for the visible, event-based and thermal heads. Run the trade studies and write down why.',
          'Model detection range: signal-to-noise, point spread, background, for small objects at long range.',
          'Design baffles and stray-light control, so the Sun, the Moon and the bright Earth limb do not blind the cameras.',
          'Build the calibration: intrinsics, distortion, flat field, dark frames, and non-uniformity correction for the thermal head.',
          'Design the optomechanics so focus and alignment hold through launch vibration and thermal cycles in vacuum.',
          'Set up the optics lab: collimator, moving-target and background scenes, and repeatable test procedures.',
          'Give the AI team accurate sensor models, so our synthetic training images match what the real cameras see.',
          'Take part in environmental tests (vibration, thermal vacuum) and write the test reports.',
        ],
      },
      {
        title: 'What you bring',
        items: [
          '3+ years of hands-on optical engineering, from design to built and tested hardware.',
          'Optical design tools (Zemax OpticStudio, CODE V or similar).',
          'Strong radiometry: you can size a camera for a target and show the SNR on one page.',
          'Camera calibration and lab measurement experience.',
          'A degree in optics, physics, or electrical or mechanical engineering, or equal experience.',
        ],
      },
      {
        title: 'Nice to have',
        items: [
          'Optics that flew in space, or passed space qualification.',
          'Event-based cameras or LWIR microbolometers.',
          'Stray-light analysis tools (FRED, LightTools or similar).',
          'Python for data analysis and calibration pipelines.',
          'Startup or small-team experience.',
        ],
      },
    ],
  },
  {
    slug: 'thruster-engineer',
    posted: '2026-11-15',
    title: 'Thruster Engineer',
    team: 'Propulsion · P1S PELTAST-X',
    location: 'Vancouver, BC · On-site',
    type: 'Full-time · Salary + equity',
    summary: 'Build and test P1S PELTAST-X: a water thruster with cold-gas modes for fine control and a pulsed combustion mode for fast moves.',
    intro: [
      'P1S PELTAST-X is a 2U thruster that runs on water. In orbit it splits water into hydrogen and oxygen. Three cold-gas modes give fine control. A pulsed combustion mode gives 1–5 N in short bursts when the satellite must move fast. It launches unpressurized, with 250 mL of plain water.',
      'You will work directly with our CTO, who invented the thruster. You build the prototypes, run the tests, and turn the results into flight hardware.',
    ],
    sections: [
      {
        title: 'What you will do',
        items: [
          'Design, build and improve thruster prototypes: electrolyser, gas storage, valves, feed lines and nozzle.',
          'Run test campaigns on the bench and in our vacuum chamber. Measure thrust, impulse bit, total impulse and valve timing.',
          'Build and calibrate the thrust stand and the test data system.',
          'Write the safety plan and test procedures for hydrogen and oxygen work, and run tests to them.',
          'Work with our embedded team on the propulsion controller and its limits.',
          'Analyse test data and feed it back into the design. Keep the engineering record clean.',
          'Prepare the unit for qualification: vibration, thermal vacuum, and the documents a customer and a launch provider need.',
        ],
      },
      {
        title: 'What you bring',
        items: [
          '3+ years of hands-on propulsion hardware: chemical, cold gas, electric or combustion.',
          'Fluid system design: valves, regulators, tanks, lines, leak testing.',
          'Test campaigns that you planned, ran and reported yourself.',
          'Safe handling of hydrogen, oxygen or other energetic gases.',
          'CAD and basic data analysis (Python or MATLAB).',
          'A degree in mechanical, aerospace or chemical engineering, or equal experience.',
        ],
      },
      {
        title: 'Nice to have',
        items: [
          'Small-satellite propulsion that flew.',
          'Water electrolysis or PEM cells.',
          'Pulsed combustion or fast-valve research.',
          'Micro-newton or milli-newton thrust stands.',
          'Startup or small-team experience.',
        ],
      },
    ],
  },
];

export const applyEmail = 'dima@playeronespace.com';
