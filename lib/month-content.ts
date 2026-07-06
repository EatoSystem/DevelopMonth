export type MonthMapProduct = "pregmonth" | "developmonth";

export type ContentSafetyLevel = "general" | "signposting" | "review-required";

export type ContentReviewStatus =
  | "draft"
  | "requires-professional-review"
  | "approved";

export type ContentSourceStatus =
  | "source-register-required"
  | "sources-in-review"
  | "approved";

export type SupportPackColour = "aqua" | "sage" | "lime" | "teal";

export type MonthlyContentItem = {
  id: string;
  product: MonthMapProduct;
  monthNumber: number;
  stage: string;
  category: string;
  title: string;
  summary: string;
  body: string;
  companionShortAnswer: string;
  relatedQuestions: string[];
  safetyLevel: ContentSafetyLevel;
  sourceStatus: ContentSourceStatus;
  reviewStatus: ContentReviewStatus;
  jurisdiction: string;
  lastReviewedAt: string | null;
};

export type DevelopmentMonth = {
  id: string;
  monthNumber: number;
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  whatIsGrowing: string[];
  movement: string;
  feeding: string;
  sleep: string;
  communication: string;
  bonding: string;
  play: string;
  sensory: string;
  parentConfidence: string;
  familyRhythm: string;
  thingsToNotice: string[];
  questionsToSave: string[];
  askForGuidance: string;
  journalPrompts: string[];
  calendarIdeas: string[];
  companionPrompts: string[];
  safetyNotes: string;
  sourceStatus: ContentSourceStatus;
  professionalReviewStatus: ContentReviewStatus;
  lastReviewedAt: string | null;
  jurisdiction: string;
};

export type MonthlySupportPack = {
  month: number;
  title: string;
  introduction: string;
  themes: Array<{
    title: string;
    colour: SupportPackColour;
    summary: string;
    ideas: string[];
  }>;
  safetyNote: string;
};

type MonthSeed = {
  monthNumber: number;
  title: string;
  subtitle: string;
  overview: string;
  themes: string[];
};

const draftStatus = {
  sourceStatus: "source-register-required" as const,
  professionalReviewStatus: "requires-professional-review" as const,
  lastReviewedAt: null,
  jurisdiction: "Unconfirmed",
};

const monthSeeds: MonthSeed[] = [
  {
    monthNumber: 0,
    title: "Welcome and recovery",
    subtitle: "A gentle beginning",
    overview:
      "Early support for feeding, sleep, bonding, parent recovery, and the family support network.",
    themes: ["Feeding", "Sleep", "Bonding", "Parent recovery"],
  },
  {
    monthNumber: 1,
    title: "Settling into rhythm",
    subtitle: "Connection, soothing, and early signals",
    overview:
      "Calm ideas for connection, feeding, sleep, soothing, and noticing early communication.",
    themes: ["Connection", "Feeding", "Sleep", "Soothing"],
  },
  {
    monthNumber: 2,
    title: "Smiles and signals",
    subtitle: "Faces, sounds, and parent confidence",
    overview:
      "Support for facial connection, early sounds, comfortable floor time, and growing parent confidence.",
    themes: ["Smiles", "Sounds", "Floor play", "Confidence"],
  },
  {
    monthNumber: 3,
    title: "Finding patterns",
    subtitle: "Movement, interaction, and family rhythm",
    overview:
      "A month for playful movement, interaction, changing sleep rhythms, and everyday routines.",
    themes: ["Movement", "Interaction", "Sleep rhythm", "Play"],
  },
  {
    monthNumber: 4,
    title: "Reaching and responding",
    subtitle: "Hands, sounds, and curiosity",
    overview:
      "Positive support for reaching, rolling preparation, new sounds, and growing curiosity.",
    themes: ["Hands", "Rolling", "Sounds", "Curiosity"],
  },
  {
    monthNumber: 5,
    title: "Exploring more",
    subtitle: "Movement, senses, and feeding readiness",
    overview:
      "Ideas for movement, sensory play, feeding readiness, connection, and family routines.",
    themes: ["Movement", "Sensory play", "Feeding readiness", "Routine"],
  },
  {
    monthNumber: 6,
    title: "Starting solids and movement",
    subtitle: "New tastes, stronger movement, and connection",
    overview:
      "Month 6 may bring new tastes, stronger movement, growing curiosity, and more back-and-forth connection.",
    themes: ["Feeding", "Movement", "Play", "Connection"],
  },
  {
    monthNumber: 7,
    title: "Reaching further",
    subtitle: "Hand skills, movement, and food exploration",
    overview:
      "Support for reaching, hand skills, sounds, food exploration, and shared play.",
    themes: ["Reaching", "Hand skills", "Sounds", "Food exploration"],
  },
  {
    monthNumber: 8,
    title: "Curiosity and connection",
    subtitle: "Movement, communication, and play",
    overview:
      "A warm guide to crawling preparation, communication, play, and the family’s changing rhythm.",
    themes: ["Movement", "Communication", "Play", "Family rhythm"],
  },
  {
    monthNumber: 9,
    title: "Interaction and confidence",
    subtitle: "Sounds, gestures, and exploration",
    overview:
      "Positive ideas for sounds, gestures, movement, exploration, and parent confidence.",
    themes: ["Sounds", "Gestures", "Movement", "Exploration"],
  },
  {
    monthNumber: 10,
    title: "Moving through the world",
    subtitle: "Standing preparation, communication, and routine",
    overview:
      "Support for standing preparation, purposeful play, communication, and everyday routines.",
    themes: ["Standing preparation", "Play", "Communication", "Routine"],
  },
  {
    monthNumber: 11,
    title: "Confidence and connection",
    subtitle: "Movement, independence, and family support",
    overview:
      "A month for growing movement, words and sounds, early independence, and parent support.",
    themes: ["Movement", "Words and sounds", "Independence", "Support"],
  },
  {
    monthNumber: 12,
    title: "One year of growth",
    subtitle: "Reflection and the next stage",
    overview:
      "Celebrate one year of growth, reflect on family rhythms, and prepare gently for the next stage.",
    themes: ["Reflection", "Connection", "Family rhythm", "Next stage"],
  },
];

function createDraftMonth(seed: MonthSeed): DevelopmentMonth {
  const monthLabel =
    seed.monthNumber === 0 ? "the newborn stage" : `Month ${seed.monthNumber}`;

  return {
    id: `developmonth-${seed.monthNumber}`,
    monthNumber: seed.monthNumber,
    slug: seed.monthNumber === 0 ? "newborn" : `month-${seed.monthNumber}`,
    title: seed.title,
    subtitle: seed.subtitle,
    overview: seed.overview,
    whatIsGrowing: seed.themes,
    movement: `Draft movement guidance for ${monthLabel}.`,
    feeding: `Draft feeding guidance for ${monthLabel}.`,
    sleep: `Draft sleep-rhythm guidance for ${monthLabel}.`,
    communication: `Draft communication guidance for ${monthLabel}.`,
    bonding: `Draft bonding and connection guidance for ${monthLabel}.`,
    play: `Draft play ideas for ${monthLabel}.`,
    sensory: `Draft sensory-development guidance for ${monthLabel}.`,
    parentConfidence: `Draft parent-confidence support for ${monthLabel}.`,
    familyRhythm: `Draft family-rhythm support for ${monthLabel}.`,
    thingsToNotice: [
      "Notice what your child enjoys without turning the month into a test.",
      "Save any question that would help at a future professional conversation.",
    ],
    questionsToSave: [
      `What matters most for our family in ${monthLabel}?`,
      "What could we ask a relevant professional at our next appointment?",
    ],
    askForGuidance:
      "If something concerns you, or if you need medical or developmental advice, speak with your GP, public health nurse, paediatrician, or relevant professional.",
    journalPrompts: [
      "What small moment would you like to remember?",
      "What has felt easier, different, or more enjoyable this month?",
    ],
    calendarIdeas: [
      "Add one gentle family reminder.",
      "Keep appointments and questions together.",
    ],
    companionPrompts: [
      `What is growing in ${monthLabel}?`,
      "What small wins could I notice this week?",
    ],
    safetyNotes:
      "Educational support only. This draft does not diagnose, assess, or replace professional care.",
    ...draftStatus,
  };
}

export const developMonthYearOne = monthSeeds.map(createDraftMonth);

export const monthSixSupportPack: MonthlySupportPack = {
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

const monthSixIndex = developMonthYearOne.findIndex(
  (month) => month.monthNumber === 6,
);

developMonthYearOne[monthSixIndex] = {
  ...developMonthYearOne[monthSixIndex],
  movement:
    "Reaching, rolling, supported sitting, and comfortable floor play can offer enjoyable ways to build strength.",
  feeding:
    "New tastes and textures can be explored gradually, following current local feeding and safety guidance.",
  sleep:
    "Sleep rhythms may continue to change as feeding, movement, and daily routines evolve.",
  communication:
    "Sounds, expressions, shared attention, and back-and-forth play can make everyday interaction feel increasingly lively.",
  bonding:
    "Warm responses, shared delight, and familiar routines can support connection and parent confidence.",
  play:
    "Reaching games, songs, floor play, and face-to-face moments can support curiosity without pressure.",
  sensory:
    "Safe exploration of textures, sounds, faces, and familiar objects can make daily routines rich with learning.",
  parentConfidence:
    "Short, achievable ideas and saved questions can help parents feel informed without needing to track every moment.",
  familyRhythm:
    "Bring feeding, play, rest, reminders, and questions together in a rhythm that works for the whole family.",
  thingsToNotice: [
    "Notice the sounds, movements, expressions, and shared moments your child enjoys.",
    "Save questions without turning observations into scores or pass/fail milestones.",
  ],
  questionsToSave: [
    "How can I make starting solids feel calm?",
    "What should I ask if feeding feels stressful?",
    "How much floor play is useful at this stage?",
    "What should I mention at the next health check?",
  ],
  journalPrompts: [
    "What small win made you smile this week?",
    "What new taste, sound, movement, or shared moment stood out?",
    "What would you like a little more support with this month?",
  ],
  calendarIdeas: [
    "Add the next family health appointment.",
    "Save one low-pressure play idea for the week.",
    "Keep the monthly check-in and saved questions together.",
  ],
  companionPrompts: [
    "What is growing in Month 6?",
    "What play ideas support movement this month?",
    "What questions could I save for my public health nurse?",
    "How can I support feeding and sleep rhythms this month?",
    "What small wins could I notice this week?",
  ],
};

export const monthSixDevelopmentMonth =
  developMonthYearOne[monthSixIndex];

export const monthSixKnowledgeItems: MonthlyContentItem[] = [
  {
    id: "developmonth-06-movement",
    product: "developmonth",
    monthNumber: 6,
    stage: "Year One",
    category: "movement",
    title: "Movement through everyday play",
    summary: monthSixDevelopmentMonth.movement,
    body:
      "Use comfortable floor time, reaching games, rolling opportunities, and supported sitting as playful shared moments rather than targets.",
    companionShortAnswer:
      "Keep movement playful, comfortable, and part of ordinary time together.",
    relatedQuestions: [
      "How much floor play is useful at this stage?",
      "How can we support movement comfortably?",
    ],
    safetyLevel: "general",
    sourceStatus: "source-register-required",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Unconfirmed",
    lastReviewedAt: null,
  },
  {
    id: "developmonth-06-feeding",
    product: "developmonth",
    monthNumber: 6,
    stage: "Year One",
    category: "feeding",
    title: "New tastes and family confidence",
    summary: monthSixDevelopmentMonth.feeding,
    body:
      "Treat touching, smelling, tasting, and family interaction as part of learning while following current local guidance on preparation and safety.",
    companionShortAnswer:
      "Offer calm opportunities to explore suitable foods and ask for guidance when you need it.",
    relatedQuestions: [
      "How can starting solids feel calm?",
      "Which local guidance should we follow?",
    ],
    safetyLevel: "review-required",
    sourceStatus: "source-register-required",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Unconfirmed",
    lastReviewedAt: null,
  },
  {
    id: "developmonth-06-connection",
    product: "developmonth",
    monthNumber: 6,
    stage: "Year One",
    category: "bonding",
    title: "Back-and-forth connection",
    summary: monthSixDevelopmentMonth.bonding,
    body:
      "Shared laughter, copying sounds, naming what your child notices, and pausing for a response can make connection part of the everyday.",
    companionShortAnswer:
      "Follow your child’s attention and enjoy the back-and-forth moments already happening.",
    relatedQuestions: [
      "What shared moments could I notice?",
      "How can play support connection?",
    ],
    safetyLevel: "general",
    sourceStatus: "source-register-required",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Unconfirmed",
    lastReviewedAt: null,
  },
  {
    id: "developmonth-06-family-rhythm",
    product: "developmonth",
    monthNumber: 6,
    stage: "Year One",
    category: "family-support",
    title: "A rhythm that works for your family",
    summary: monthSixDevelopmentMonth.familyRhythm,
    body:
      "Use reminders, journal notes, questions, and monthly ideas only where they make family life feel calmer or clearer.",
    companionShortAnswer:
      "Choose the support that feels useful and leave out the rest.",
    relatedQuestions: [
      "What would make this month feel more manageable?",
      "Which reminder would genuinely help?",
    ],
    safetyLevel: "general",
    sourceStatus: "source-register-required",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Unconfirmed",
    lastReviewedAt: null,
  },
];

