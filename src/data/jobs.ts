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
  external?: string;
  intro?: string[];
  sections?: JobSection[];
}

export const jobs: Job[] = [
  {
    slug: 'head-of-space-ai',
    title: 'Head of Space AI',
    team: 'AI · P1S Buddy',
    location: 'Vancouver, BC · Onsite or remote',
    type: 'Full-time · Salary + equity',
    summary: 'Own the onboard autonomy stack end to end: sensing, perception, decision and the edge runtime that flies on the satellite.',
    external: 'https://wellfound.com/jobs/4701944-head-of-space-ai',
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
