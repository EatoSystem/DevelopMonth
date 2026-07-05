export const prototypeViews = [
  { slug: "this-month", label: "This Month", number: "01" },
  { slug: "journal", label: "Journal", number: "02" },
  { slug: "calendar", label: "Calendar", number: "03" },
  { slug: "check-in", label: "Check-in", number: "04" },
  { slug: "support-pack", label: "Support Pack", number: "05" },
  { slug: "companion", label: "Companion", number: "06" },
  { slug: "summary", label: "Summary", number: "07" },
] as const;

export type PrototypeView = (typeof prototypeViews)[number]["slug"];

export const monthSixPack = {
  month: 6,
  title: "Starting solids and movement",
  introduction:
    "Month 6 can bring new tastes, stronger movement, growing curiosity, and more back-and-forth connection. This pack offers calm ideas to support the everyday moments already happening in your family.",
  themes: [
    {
      title: "Growing through play",
      colour: "aqua",
      summary:
        "Use floor time, reaching games, songs, and face-to-face play to support curiosity and shared attention.",
      ideas: [
        "Place a favourite toy just within comfortable reach.",
        "Copy sounds and expressions, then pause for a response.",
        "Offer supervised floor play in short, enjoyable bursts.",
      ],
    },
    {
      title: "Feeding and new textures",
      colour: "sage",
      summary:
        "Introduce suitable foods and textures at your child’s pace while keeping milk feeds central to their nutrition.",
      ideas: [
        "Choose a calm time when your child is alert and supported upright.",
        "Let touching, smelling, and exploring food be part of learning.",
        "Follow current local guidance on allergens, choking prevention, and safe preparation.",
      ],
    },
    {
      title: "Movement and strength",
      colour: "lime",
      summary:
        "Everyday reaching, rolling, supported sitting, and floor play can help build strength and coordination.",
      ideas: [
        "Give your child space to move freely on a safe floor surface.",
        "Place objects on both sides to invite turning and reaching.",
        "Keep movement playful rather than treating it as a test.",
      ],
    },
    {
      title: "Sleep and rhythm",
      colour: "teal",
      summary:
        "Sleep can continue to change as feeding, movement, and daily routines evolve.",
      ideas: [
        "Use a short, familiar wind-down routine.",
        "Notice patterns without expecting every day to look the same.",
        "Follow current safer-sleep guidance for every sleep.",
      ],
    },
    {
      title: "Bonding and confidence",
      colour: "aqua",
      summary:
        "Warm responses, shared delight, and familiar routines help your child feel secure while strengthening parent confidence.",
      ideas: [
        "Name what your child is looking at or reaching towards.",
        "Celebrate effort and connection rather than outcomes.",
        "Share care in ways that work for your family and support network.",
      ],
    },
    {
      title: "Questions to ask",
      colour: "sage",
      summary:
        "Keep a calm list for your GP, public health nurse, paediatrician, therapist, or care team.",
      ideas: [
        "What textures and foods are suitable to try next?",
        "How can we support movement comfortably during everyday play?",
        "Is there anything in feeding, sleep, movement, or communication we should discuss?",
      ],
    },
  ],
  safetyNote:
    "This support pack is educational and does not replace professional medical advice, diagnosis, developmental assessment, or treatment.",
};

export const checkInAreas = [
  {
    title: "Connection and play",
    prompt: "What has your child enjoyed doing with you this month?",
  },
  {
    title: "Movement",
    prompt: "What new ways of reaching, rolling, sitting, or moving have you noticed?",
  },
  {
    title: "Communication",
    prompt: "Which sounds, expressions, gestures, or shared moments stand out?",
  },
  {
    title: "Feeding and sleep",
    prompt: "What rhythms feel settled, and what would you like more support with?",
  },
  {
    title: "Family support",
    prompt: "What would help you feel more confident or supported this month?",
  },
];

export const journalEntries = [
  {
    date: "5 July",
    title: "A very serious conversation with the spoon",
    body: "Rory spent most of lunch studying the spoon, then laughed every time it reached the bowl. Pear was interesting; the bib was apparently better.",
    tags: ["Small win", "Feeding", "Connection"],
  },
  {
    date: "2 July",
    title: "Reaching further during floor play",
    body: "Put the soft block slightly to the side. Rory turned, reached with both hands, and looked delighted when it toppled.",
    tags: ["Movement", "Play"],
  },
];

export const calendarEvents = [
  { day: "08", month: "JUL", title: "Month 6 family check-in", type: "Check-in" },
  { day: "12", month: "JUL", title: "Try a new texture at lunch", type: "Family reminder" },
  { day: "17", month: "JUL", title: "Public health nurse appointment", type: "Appointment" },
  { day: "26", month: "JUL", title: "Save Month 6 summary", type: "Monthly moment" },
];

export function isPrototypeView(value: string): value is PrototypeView {
  return prototypeViews.some((view) => view.slug === value);
}
