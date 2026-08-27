export const courseStats = {
  topics: 36,
  videos: 71,
  exercises: 20,
  lessonMinutes: "10–15",
};

const basicCheckoutHref =
  process.env.NEXT_PUBLIC_BASIC_CHECKOUT_URL?.trim() ||
  "https://reshootonline.org/login?plan=basic";
const premiumCheckoutHref =
  process.env.NEXT_PUBLIC_PREMIUM_CHECKOUT_URL?.trim() ||
  "https://reshootonline.org/login?plan=premium";

export const proofPoints = [
  { value: "348K", label: "YouTube subscribers" },
  { value: "146M+", label: "YouTube views" },
  { value: "8,500+", label: "People trained in Dmitrii’s clubs" },
  { value: "2005", label: "European Champion" },
];

export const valueCards = [
  {
    eyebrow: "First",
    title: "Start with the basics",
    text: "Learn safety, key terms, and how a pistol works.",
    icon: "/brand/value-target.svg",
  },
  {
    eyebrow: "Then",
    title: "See every step",
    text: "Watch 71 short videos with clear demos and simple graphics.",
    icon: "/brand/value-proof.svg",
  },
  {
    eyebrow: "At your pace",
    title: "Practice without pressure",
    text: "Use 20 guided exercises. Start at home with simple training tools.",
    icon: "/brand/value-affordable.svg",
  },
];

export const firstWins = [
  "Learn the safety rules that always come first",
  "Know the main parts of a pistol and what they do",
  "Spot common beginner mistakes before they become habits",
];

export const curriculumGroups = [
  {
    number: "01",
    title: "Start with safety",
    text: "The rules and habits that keep you and others safe.",
  },
  {
    number: "02",
    title: "Understand the tool",
    text: "The main parts, controls, and ammunition basics.",
  },
  {
    number: "03",
    title: "Build the fundamentals",
    text: "Grip, stance, aim, trigger work, and recoil control.",
  },
  {
    number: "04",
    title: "Practice with purpose",
    text: "Twenty exercises, quick checks, and clear next steps.",
  },
];

export const socialClips = [
  {
    title: "Fast & accurate pistol shooting",
    metric: "904K plays",
    image: "/social/fast-accurate.webp",
    href: "https://www.instagram.com/p/DaFBeROK7Qz/",
  },
  {
    title: "Who’s right when both have guns?",
    metric: "721K plays",
    image: "/social/both-have-guns.webp",
    href: "https://www.instagram.com/p/DaPQsjlK2vU/",
  },
  {
    title: "Firearm safety basics",
    metric: "267K plays",
    image: "/social/safety-basics.webp",
    href: "https://www.instagram.com/p/DZjjwRfK2C3/",
  },
];

export const testimonials = [
  {
    name: "Ana",
    image: "/brand/testimonial-ana.webp",
    quote:
      "As a shooting-club instructor, the course gave me a better understanding of how to coach beginners and give them the right advice.",
    context: "Shooting-club instructor",
    videoSrc: "/brand/testimonial-ana.mp4",
    vimeoId: "1110520763?h=5f76eef9d3b",
  },
  {
    name: "Vasiliy",
    image: "/brand/testimonial-vasiliy.jpg",
    quote: "Everything is organized, explained in plain language, and has really cool visuals.",
    context: "ReShoot.Start learner",
    videoSrc: "/brand/testimonial-vasiliy.mp4",
    vimeoId: "1110520800?h=3418abfa3b",
  },
  {
    name: "Alyona",
    image: "/brand/testimonial-alyona.jpg",
    quote: "It was easily explained, and it has a great sense of humor.",
    context: "ReShoot.Start learner",
    videoSrc: "/brand/testimonial-alyona.mp4",
    vimeoId: "1110520539?h=09a21f3344",
  },
  {
    name: "Stan",
    image: "/brand/testimonial-stan.webp",
    quote: "Straightforward, motivating, and results show quickly.",
    context: "ReShoot.Start learner",
    videoSrc: "/brand/testimonial-stan.mp4",
    vimeoId: "1116378010?h=264f63e77c",
  },
];

export const offers = [
  {
    id: "basic",
    name: "Basic",
    kicker: "Build the complete foundation",
    price: 49.99,
    accessMonths: 6,
    checkoutHref: basicCheckoutHref,
    features: [
      "All 36 course topics",
      "71 visual videos with graphics",
      "20 guided exercises",
      "Bonus materials and quick tests",
      "Six months of online access",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    kicker: "Add feedback and community",
    price: 99.99,
    accessMonths: 12,
    checkoutHref: premiumCheckoutHref,
    features: [
      "Everything in Basic",
      "Twelve months of online access",
      "Private ReShoot community",
      "Direct feedback and access to Dmitrii",
      "Share questions and progress with peers",
    ],
  },
];

export const faqItems = [
  {
    question: "I’m completely new. Will I understand it?",
    answer:
      "Yes. The course starts from zero. Each lesson uses plain language and shows one clear next step.",
  },
  {
    question: "How much time does the course take?",
    answer:
      "Most topics take 10–15 minutes. Exercises take 15–30 minutes. There is no daily schedule.",
  },
  {
    question: "How quickly do I get access?",
    answer:
      "You get instant access right after payment. Your full package is ready at once.",
  },
  {
    question: "Do I need a firearm or special equipment at home?",
    answer:
      "No. Start with the theory and many exercises at home. Later practice may need a safe, legal facility and supervision.",
  },
  {
    question: "Do I have to visit a shooting club?",
    answer:
      "Not for the theory or most beginner exercises. Live-fire practice must be legal and properly supervised.",
  },
  {
    question: "What is the difference between Basic and Premium?",
    answer:
      "Basic gives you the full course for six months. Premium gives you 12 months, the private community, and direct access to Dmitrii.",
  },
  {
    question: "Can I learn on my phone?",
    answer:
      "Yes. It works on phones, tablets, and computers.",
  },
  {
    question: "What if the course is not a good fit?",
    answer:
      "Refund rules depend on your location and course progress. See the Terms for the full policy.",
  },
];
