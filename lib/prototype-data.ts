import { monthSixSupportPack } from "@/lib/month-content";

export const prototypeViews = [
  { slug: "this-month", label: "This Month", number: "01" },
  { slug: "journal", label: "Journal", number: "02" },
  { slug: "calendar", label: "Calendar", number: "03" },
  { slug: "check-in", label: "Check-in", number: "04" },
  { slug: "support-pack", label: "Support Pack", number: "05" },
  { slug: "companion", label: "Aion", number: "06" },
  { slug: "summary", label: "Summary", number: "07" },
] as const;

export type PrototypeView = (typeof prototypeViews)[number]["slug"];

export const monthSixPack = monthSixSupportPack;

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
