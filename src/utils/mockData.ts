
// Mock data for the dashboard

// Communication
export const communicationData = {
  sessions: {
    data: [65, 82, 70, 93, 80, 88, 72],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    score: 79
  },
  intranet: {
    data: [
      { name: "Daily Users", value: 320 },
      { name: "Weekly Users", value: 580 },
      { name: "Monthly Users", value: 820 }
    ],
    score: 85
  },
  certifications: {
    data: [
      { name: "Completed", value: 45 },
      { name: "In Progress", value: 30 },
      { name: "Not Started", value: 25 }
    ],
    score: 72
  },
  overallScore: 78.7
};

// Process
export const processData = {
  applicantJourney: {
    data: [
      { name: "Application", value: 100 },
      { name: "Screening", value: 92 },
      { name: "Interview", value: 78 },
      { name: "Decision", value: 68 },
      { name: "Onboarding", value: 60 }
    ],
    score: 75
  },
  onboarding: {
    data: [
      { name: "Materials Ready", value: 88 },
      { name: "Mentor Assigned", value: 92 },
      { name: "Tech Setup", value: 76 },
      { name: "First Week", value: 85 }
    ],
    score: 85
  },
  funding: {
    data: [
      { month: "Jan", amount: 32500 },
      { month: "Feb", amount: 28000 },
      { month: "Mar", amount: 38000 },
      { month: "Apr", amount: 42000 },
      { month: "May", amount: 36000 },
      { month: "Jun", amount: 45000 }
    ],
    score: 82
  },
  overallScore: 80.7
};

// Strategy
export const strategyData = {
  motivation: {
    data: [
      { category: "Very High", value: 28 },
      { category: "High", value: 42 },
      { category: "Medium", value: 22 },
      { category: "Low", value: 8 }
    ],
    score: 78
  },
  yearlyGoals: {
    data: [
      { name: "Diversity Hiring", target: 100, current: 75 },
      { name: "Inclusive Events", target: 100, current: 85 },
      { name: "Training", target: 100, current: 62 },
      { name: "Accessibility", target: 100, current: 70 }
    ],
    score: 73
  },
  personalGoals: {
    data: [
      { name: "Aligned", value: 68 },
      { name: "Partially Aligned", value: 24 },
      { name: "Not Aligned", value: 8 }
    ],
    score: 82
  },
  overallScore: 77.7
};

// Leadership & Culture
export const leadershipData = {
  training: {
    data: [
      { month: "Jan", hours: 124 },
      { month: "Feb", hours: 145 },
      { month: "Mar", hours: 132 },
      { month: "Apr", hours: 168 },
      { month: "May", hours: 159 },
      { month: "Jun", hours: 187 }
    ],
    score: 81
  },
  mentoring: {
    data: [
      { name: "Active Mentors", value: 38 },
      { name: "Active Mentees", value: 65 },
      { name: "Completed Programs", value: 27 }
    ],
    score: 76
  },
  network: {
    data: [
      { year: "2020", size: 450 },
      { year: "2021", size: 580 },
      { year: "2022", size: 720 },
      { year: "2023", size: 925 }
    ],
    score: 88
  },
  overallScore: 81.7
};

// Accessibility
export const accessibilityData = {
  workplaceInclusive: {
    data: [
      { category: "Highly Inclusive", value: 60 },
      { category: "Mostly Inclusive", value: 25 },
      { category: "Partially Inclusive", value: 12 },
      { category: "Needs Improvement", value: 3 }
    ],
    score: 85
  },
  aids: {
    data: [
      { type: "Physical", count: 85 },
      { type: "Digital", count: 120 },
      { type: "Communication", count: 65 },
      { type: "Other", count: 45 }
    ],
    score: 78
  },
  reha: {
    data: [
      { status: "Completed", value: 18 },
      { status: "In Progress", value: 12 },
      { status: "Scheduled", value: 8 },
      { status: "Requested", value: 5 }
    ],
    score: 72
  },
  overallScore: 78.3
};

// Feature Cards Data
export const featureCardsData = [
  // First Row
  {
    title: "Job Postings via Inklu-Connect",
    description: "Create inclusive job postings and reach diverse talent pools with our specialized platform.",
    metric: "28",
    metricLabel: "Active Postings"
  },
  {
    title: "Digital Assistant (Inklu-Chatbot)",
    description: "AI-powered assistance for answering inclusion and accessibility questions instantly.",
    metric: "245",
    metricLabel: "Daily Interactions"
  },
  {
    title: "Learning & Content Modules",
    description: "Specialized learning resources covering various aspects of inclusion and accessibility.",
    metric: "84",
    metricLabel: "Available Modules"
  },
  // Second Row
  {
    title: "Local & Online Events",
    description: "Connect with the community through inclusive events both locally and online.",
    metric: "12",
    metricLabel: "Upcoming Events"
  },
  {
    title: "Accessibility & Inclusion Tools",
    description: "Discover and implement tools that enhance workplace accessibility for all.",
    metric: "35",
    metricLabel: "Tools Available"
  },
  {
    title: "External Training Modules / Courses",
    description: "Access specialized external training resources for advanced learning opportunities.",
    metric: "68",
    metricLabel: "Courses Available"
  }
];

// Translation data
export const translations = {
  en: {
    dashboardTitle: "Inclusion Analytics Dashboard",
    communication: "Communication",
    process: "Process",
    strategy: "Strategy",
    leadership: "Leadership & Culture",
    accessibility: "Accessibility",
    sessions: "Sessions & Events",
    intranet: "Intranet Presence",
    certifications: "Certifications",
    applicantJourney: "Applicant Journey",
    onboarding: "Onboarding",
    funding: "Funding (in €)",
    motivation: "Motivation",
    yearlyGoals: "Yearly Goals",
    personalGoals: "Embeddedness in personal goals",
    training: "Training",
    mentoring: "Peer-Mentoring / Coaching",
    network: "Size of Network",
    workplaceInclusive: "Amount Workplace Inclusive",
    aids: "Aids",
    reha: "BEM / Reha Create",
    overallScore: "Overall Score",
    inkluScore: "Score",
    inkluScoreTitle: "Inklu-Score™",
    inkluScoreDescription: "Combined score based on all five category metrics, representing overall inclusion performance.",
    inkluConnectTools: "Inklu-Connect Tools",
    toggleLanguage: "Toggle language",
    toggleTheme: "Toggle theme",
    featureCards: {
      jobPostings: "Job Postings via Inklu-Connect",
      digitalAssistant: "Digital Assistant (Inklu-Chatbot)",
      learningContent: "Learning & Content Modules",
      events: "Local & Online Events",
      accessibilityTools: "Accessibility & Inclusion Tools",
      externalTraining: "External Training Modules / Courses"
    }
  },
  de: {
    dashboardTitle: "Inklusions-Analyse-Dashboard",
    communication: "Kommunikation",
    process: "Prozess",
    strategy: "Strategie",
    leadership: "Führung & Kultur",
    accessibility: "Zugänglichkeit",
    sessions: "Sitzungen & Veranstaltungen",
    intranet: "Intranet-Präsenz",
    certifications: "Zertifizierungen",
    applicantJourney: "Bewerberreise",
    onboarding: "Einarbeitung",
    funding: "Finanzierung (in €)",
    motivation: "Motivation",
    yearlyGoals: "Jahresziele",
    personalGoals: "Einbettung in persönliche Ziele",
    training: "Schulung",
    mentoring: "Peer-Mentoring / Coaching",
    network: "Netzwerkgröße",
    workplaceInclusive: "Inklusiver Arbeitsplatz",
    aids: "Hilfsmittel",
    reha: "BEM / Reha Erstellen",
    overallScore: "Gesamtpunktzahl",
    inkluScore: "Punktzahl",
    inkluScoreTitle: "Inklu-Score™",
    inkluScoreDescription: "Kombinierte Punktzahl basierend auf allen fünf Kategoriemetriken, die die Gesamtinklusionsleistung darstellt.",
    inkluConnectTools: "Inklu-Connect Werkzeuge",
    toggleLanguage: "Sprache wechseln",
    toggleTheme: "Thema wechseln",
    featureCards: {
      jobPostings: "Stellenausschreibungen über Inklu-Connect",
      digitalAssistant: "Digitaler Assistent (Inklu-Chatbot)",
      learningContent: "Lern- & Inhaltsmodule",
      events: "Lokale & Online-Veranstaltungen",
      accessibilityTools: "Zugänglichkeits- & Inklusionswerkzeuge",
      externalTraining: "Externe Schulungsmodule / Kurse"
    }
  }
};
