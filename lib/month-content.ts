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
  claimIds: string[];
  sourceIds: string[];
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
    claimIds: string[];
    sourceIds: string[];
  }>;
  safetyNote: string;
};

export type MonthEvidenceSource = {
  id: string;
  publisher: "Health Service Executive";
  title: string;
  url: string;
  supports: string[];
  lastReviewed: string;
  nextReviewDue: string;
  accessedAt: string;
  status: "current-source-review-pending" | "verification-required";
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
  jurisdiction: "Ireland",
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

export const monthSixIrelandSources: MonthEvidenceSource[] = [
  {
    id: "HSE-WEAN-START-2025",
    publisher: "Health Service Executive",
    title: "When to start weaning",
    url: "https://www2.hse.ie/babies-children/weaning-eating/weaning/when-to-start/",
    supports: ["M6-01", "M6-02", "M6-03"],
    lastReviewed: "2025-11-11",
    nextReviewDue: "2028-11-11",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-WEAN-HOW-2025",
    publisher: "Health Service Executive",
    title: "How to start weaning",
    url: "https://www2.hse.ie/babies-children/weaning-eating/weaning/how-to-start/",
    supports: ["M6-04", "M6-07"],
    lastReviewed: "2025-05-12",
    nextReviewDue: "2028-05-12",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-WEAN-NUTRIENTS-2025",
    publisher: "Health Service Executive",
    title: "Nutrients your baby needs during weaning",
    url: "https://www2.hse.ie/babies-children/weaning-eating/weaning/vitamins-minerals/",
    supports: ["M6-03"],
    lastReviewed: "2025-08-28",
    nextReviewDue: "2028-08-28",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-FOOD-ALLERGY-2023",
    publisher: "Health Service Executive",
    title: "Food allergies and children",
    url: "https://www2.hse.ie/babies-children/weaning-eating/allergies-fussy-eating/food-allergies/",
    supports: ["M6-05"],
    lastReviewed: "2023-11-29",
    nextReviewDue: "2026-11-29",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-CHOKING-2022",
    publisher: "Health Service Executive",
    title: "Food choking risks for babies and children",
    url: "https://www2.hse.ie/babies-children/child-safety/choking-strangulation-suffocation/food-choking-risks/",
    supports: ["M6-06", "M6-07"],
    lastReviewed: "2022-10-14",
    nextReviewDue: "2025-10-14",
    accessedAt: "2026-07-23",
    status: "verification-required",
  },
  {
    id: "HSE-TUMMY-TIME-2026",
    publisher: "Health Service Executive",
    title: "Tummy time for babies",
    url: "https://www2.hse.ie/babies-children/parenting-advice/caring-for-a-new-baby/tummy-time/",
    supports: ["M6-08"],
    lastReviewed: "2026-05-17",
    nextReviewDue: "2029-06-17",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-MILESTONES-0-6-2025",
    publisher: "Health Service Executive",
    title: "Your child's developmental milestones from 0 to 6 months",
    url: "https://www2.hse.ie/babies-children/checks-milestones/developmental-milestones/0-6-months/",
    supports: ["M6-09", "M6-14"],
    lastReviewed: "2025-05-08",
    nextReviewDue: "2028-05-08",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-COMMUNICATION-0-12-2023",
    publisher: "Health Service Executive",
    title: "Helping your child's communication development: 0 to 12 months",
    url: "https://www2.hse.ie/babies-children/checks-milestones/communication-development/0-12-months/",
    supports: ["M6-10"],
    lastReviewed: "2023-03-29",
    nextReviewDue: "2026-03-29",
    accessedAt: "2026-07-23",
    status: "verification-required",
  },
  {
    id: "HSE-BABY-CUES-2026",
    publisher: "Health Service Executive",
    title: "Responding to your baby's cues",
    url: "https://www2.hse.ie/babies-children/parenting-advice/baby-and-child-mental-wellbeing/responding-to-baby-cues/",
    supports: ["M6-04", "M6-11"],
    lastReviewed: "2026-04-10",
    nextReviewDue: "2029-04-10",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-SLEEP-6M-2Y-2026",
    publisher: "Health Service Executive",
    title: "Child's sleep needs at 6 months to 2 years",
    url: "https://www2.hse.ie/babies-children/sleep/childs-sleep-needs-6-months-2-years/",
    supports: ["M6-12"],
    lastReviewed: "2026-03-27",
    nextReviewDue: "2029-03-27",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-CHILD-SAFETY-MANUAL-2026",
    publisher: "Health Service Executive",
    title: "Child Safety Programme Manual for health professionals",
    url: "https://www.hse.ie/eng/about/who/healthwellbeing/our-priority-programmes/child-health-and-wellbeing/csp-manual.pdf",
    supports: ["M6-06", "M6-12"],
    lastReviewed: "2026",
    nextReviewDue: "Not stated",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
  {
    id: "HSE-URGENT-CHILD-2023",
    publisher: "Health Service Executive",
    title: "Get urgent medical help if your child is very unwell",
    url: "https://www2.hse.ie/babies-children/parenting-advice/caring-for-a-child/baby-child-seriously-unwell/",
    supports: ["M6-14"],
    lastReviewed: "2023-07-14",
    nextReviewDue: "2026-07-14",
    accessedAt: "2026-07-23",
    status: "verification-required",
  },
  {
    id: "HSE-BRAIN-DEVELOPMENT-2025",
    publisher: "Health Service Executive",
    title: "Supporting your child's brain development",
    url: "https://www2.hse.ie/babies-children/checks-milestones/physical-development/supporting-brain-development/",
    supports: ["M6-10", "M6-11", "M6-13"],
    lastReviewed: "2025-07-16",
    nextReviewDue: "2028-07-16",
    accessedAt: "2026-07-23",
    status: "current-source-review-pending",
  },
];

export const monthSixSupportPack: MonthlySupportPack = {
  month: 6,
  title: "Starting solids and movement",
  introduction:
    "Around Month 6, many families begin exploring solid foods while movement, sounds, curiosity, and connection keep growing. Every child develops differently, so use these Ireland-first ideas as calm educational support rather than a timetable or test.",
  themes: [
    {
      title: "Starting solids, calmly",
      colour: "sage",
      summary:
        "Look for readiness around 6 months and begin at your child's pace. Breast milk or first infant formula continues while suitable foods and textures are introduced.",
      ideas: [
        "Choose a calm time when your child is alert, supported upright, and supervised.",
        "Let touching, smelling, and tasting be part of learning; never force a mouthful.",
        "Include suitable iron-rich foods and ask your GP or public health nurse if you are unsure about readiness.",
      ],
      claimIds: ["M6-01", "M6-02", "M6-03", "M6-04", "M6-07"],
      sourceIds: [
        "HSE-WEAN-START-2025",
        "HSE-WEAN-HOW-2025",
        "HSE-WEAN-NUTRIENTS-2025",
        "HSE-BABY-CUES-2026",
      ],
    },
    {
      title: "Allergens and safer eating",
      colour: "teal",
      summary:
        "Food preparation, seating, supervision, and current Irish allergen guidance all matter when new foods are introduced.",
      ideas: [
        "Follow current HSE guidance when introducing common allergens, especially if your child has eczema or a known allergy.",
        "Prepare food in an age-appropriate texture and shape, and stay with your child while they eat.",
        "Use the linked HSE sources as a starting point; this section still requires dietetic and child-safety review.",
      ],
      claimIds: ["M6-05", "M6-06", "M6-07"],
      sourceIds: [
        "HSE-FOOD-ALLERGY-2023",
        "HSE-CHOKING-2022",
        "HSE-CHILD-SAFETY-MANUAL-2026",
      ],
    },
    {
      title: "Movement through play",
      colour: "lime",
      summary:
        "Supervised floor and tummy play can make reaching, rolling, turning, and supported sitting enjoyable without turning movement into a scorecard.",
      ideas: [
        "Offer awake, supervised play on a firm, clear floor surface.",
        "Place objects on both sides to invite turning and reaching.",
        "Pause when your child has had enough and return later; comfort and connection matter more than duration.",
      ],
      claimIds: ["M6-08", "M6-09"],
      sourceIds: ["HSE-TUMMY-TIME-2026", "HSE-MILESTONES-0-6-2025"],
    },
    {
      title: "Sounds, faces, and connection",
      colour: "aqua",
      summary:
        "Face-to-face talk, copying sounds, shared attention, and responsive play support communication and bonding in ordinary family moments.",
      ideas: [
        "Follow what your child is looking at and put simple words around it.",
        "Copy a sound or expression, then pause to leave room for a response.",
        "Use the language that feels most natural in your family.",
      ],
      claimIds: ["M6-10", "M6-11"],
      sourceIds: [
        "HSE-COMMUNICATION-0-12-2023",
        "HSE-BABY-CUES-2026",
        "HSE-BRAIN-DEVELOPMENT-2025",
      ],
    },
    {
      title: "Sleep and family rhythm",
      colour: "teal",
      summary:
        "Sleep patterns vary. A familiar wind-down and current Irish safer-sleep guidance can support a calm rhythm without promising a perfect routine.",
      ideas: [
        "Use a short, familiar sequence before sleep where that works for your family.",
        "Notice patterns without expecting every day or night to look the same.",
        "Ask your GP or public health nurse if sleep is affecting your child's wellbeing or your ability to cope.",
      ],
      claimIds: ["M6-12", "M6-13"],
      sourceIds: [
        "HSE-SLEEP-6M-2Y-2026",
        "HSE-CHILD-SAFETY-MANUAL-2026",
        "HSE-BRAIN-DEVELOPMENT-2025",
      ],
    },
    {
      title: "Questions and support",
      colour: "sage",
      summary:
        "You do not need to interpret every change alone. Save practical questions for your GP, public health nurse, paediatrician, dietitian, therapist, or care team.",
      ideas: [
        "What readiness signs, textures, allergens, or iron-rich foods should we discuss?",
        "How can we support movement, communication, sleep, and play comfortably?",
        "If your child loses a skill, you are worried about development, or your child is unwell, contact an appropriate professional; call 112 or 999 for a life-threatening emergency.",
      ],
      claimIds: ["M6-13", "M6-14"],
      sourceIds: [
        "HSE-MILESTONES-0-6-2025",
        "HSE-URGENT-CHILD-2023",
        "HSE-BRAIN-DEVELOPMENT-2025",
      ],
    },
  ],
  safetyNote:
    "Ireland-first draft for research and scoped professional review. This educational support pack is not approved for parent reliance and does not replace advice from your GP, public health nurse, paediatrician, dietitian, therapist, or care team.",
};

const monthSixIndex = developMonthYearOne.findIndex(
  (month) => month.monthNumber === 6,
);

developMonthYearOne[monthSixIndex] = {
  ...developMonthYearOne[monthSixIndex],
  overview:
    "Around Month 6, many families begin exploring solid foods while movement, sounds, play, and connection keep growing. This Ireland-first draft offers calm ideas, not a timetable or milestone test.",
  movement:
    "Awake, supervised floor and tummy play can make reaching, rolling, turning, and supported sitting enjoyable without turning movement into a scorecard.",
  feeding:
    "Around 6 months, suitable foods and textures can be introduced gradually alongside breast milk or first infant formula, following current HSE guidance and your child's readiness.",
  sleep:
    "Sleep patterns vary; a familiar wind-down and current Irish safer-sleep guidance can support family rhythm without promising a perfect routine.",
  communication:
    "Face-to-face talk, copied sounds, shared attention, and pauses for response can make everyday communication lively and connected.",
  bonding:
    "Following your child's cues, sharing delight, and responding warmly can support connection and parent confidence.",
  play:
    "Reaching games, songs, floor play, and face-to-face moments can support curiosity without pressure.",
  sensory:
    "Safe exploration of textures, sounds, faces, and familiar objects can make daily routines rich with learning.",
  parentConfidence:
    "Short, achievable ideas and saved questions can help parents feel informed without needing to track every moment.",
  familyRhythm:
    "Bring feeding, play, rest, reminders, and questions together in a rhythm that works for the whole family.",
  thingsToNotice: [
    "Notice the tastes, sounds, movements, expressions, and shared moments your child enjoys.",
    "Development varies. Save questions without turning observations into scores, deadlines, or pass/fail milestones.",
  ],
  questionsToSave: [
    "How can I make starting solids feel calm?",
    "Which allergens, textures, and iron-rich foods should we discuss?",
    "How can we make supervised floor play comfortable?",
    "What should I mention to my GP or public health nurse?",
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
  askForGuidance:
    "Contact your GP or public health nurse if you are unsure about feeding readiness, allergens, movement, communication, sleep, or any change that worries you. If your child loses a skill, seek professional guidance. Call 112 or 999 for a life-threatening emergency.",
  safetyNotes:
    "Ireland-first educational draft for research only. It is not approved for parent reliance and does not replace guidance from your GP, public health nurse, paediatrician, dietitian, therapist, or care team.",
  sourceStatus: "sources-in-review",
  professionalReviewStatus: "requires-professional-review",
  lastReviewedAt: null,
  jurisdiction: "Ireland",
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
    claimIds: ["M6-08", "M6-09"],
    sourceIds: ["HSE-TUMMY-TIME-2026", "HSE-MILESTONES-0-6-2025"],
    safetyLevel: "general",
    sourceStatus: "sources-in-review",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Ireland",
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
      "Which HSE guidance should we follow?",
    ],
    claimIds: ["M6-01", "M6-02", "M6-03", "M6-04", "M6-05", "M6-06", "M6-07"],
    sourceIds: [
      "HSE-WEAN-START-2025",
      "HSE-WEAN-HOW-2025",
      "HSE-WEAN-NUTRIENTS-2025",
      "HSE-FOOD-ALLERGY-2023",
      "HSE-CHOKING-2022",
      "HSE-BABY-CUES-2026",
    ],
    safetyLevel: "review-required",
    sourceStatus: "sources-in-review",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Ireland",
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
    claimIds: ["M6-10", "M6-11"],
    sourceIds: [
      "HSE-COMMUNICATION-0-12-2023",
      "HSE-BABY-CUES-2026",
      "HSE-BRAIN-DEVELOPMENT-2025",
    ],
    safetyLevel: "general",
    sourceStatus: "sources-in-review",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Ireland",
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
    claimIds: ["M6-12", "M6-13", "M6-14"],
    sourceIds: [
      "HSE-SLEEP-6M-2Y-2026",
      "HSE-CHILD-SAFETY-MANUAL-2026",
      "HSE-MILESTONES-0-6-2025",
      "HSE-URGENT-CHILD-2023",
    ],
    safetyLevel: "general",
    sourceStatus: "sources-in-review",
    reviewStatus: "requires-professional-review",
    jurisdiction: "Ireland",
    lastReviewedAt: null,
  },
];
