export interface AssessmentData {
  id: string;
  name: string;
  url: string;
  remoteTestingSupport: boolean;
  adaptiveSupport: boolean;
  duration: string;
  testType: string;
  keywords: string[];
  description: string;
}

export const assessments: AssessmentData[] = [
  {
    id: "1",
    name: "Java Developer Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/java-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "40 minutes",
    testType: "Technical",
    keywords: ["java", "programming", "development", "coding", "software engineer", "backend", "developer"],
    description: "Comprehensive assessment for Java developers measuring core Java skills, problem-solving, and code quality."
  },
  {
    id: "2",
    name: "Python & SQL Developer Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/python-sql-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "60 minutes",
    testType: "Technical",
    keywords: ["python", "sql", "database", "programming", "development", "coding", "data", "backend"],
    description: "Evaluates proficiency in Python programming and SQL database operations."
  },
  {
    id: "3",
    name: "Cognitive Ability Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/cognitive-ability",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "30 minutes",
    testType: "Cognitive",
    keywords: ["problem solving", "reasoning", "cognitive", "logic", "analytical", "thinking"],
    description: "Measures candidates' general mental ability, problem-solving skills, and learning potential."
  },
  {
    id: "4",
    name: "Personality and Behavior Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/personality-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "45 minutes",
    testType: "Personality",
    keywords: ["personality", "behavior", "traits", "working style", "preferences", "character", "temperament"],
    description: "Evaluates workplace behaviors, interpersonal skills, and personality traits relevant to job performance."
  },
  {
    id: "5",
    name: "Frontend Developer Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/frontend-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "50 minutes",
    testType: "Technical",
    keywords: ["javascript", "react", "angular", "vue", "html", "css", "frontend", "ui", "development"],
    description: "Assesses skills in JavaScript frameworks, HTML/CSS, and UI development principles."
  },
  {
    id: "6",
    name: "Leadership Potential Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/leadership-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "35 minutes",
    testType: "Behavioral",
    keywords: ["leadership", "management", "team lead", "executive", "director", "decision making"],
    description: "Evaluates leadership capabilities, decision-making skills, and potential for success in management roles."
  },
  {
    id: "7",
    name: "DevOps Engineer Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/devops-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "55 minutes",
    testType: "Technical",
    keywords: ["devops", "ci/cd", "cloud", "aws", "azure", "docker", "kubernetes", "infrastructure"],
    description: "Tests knowledge of CI/CD pipelines, cloud platforms, containerization, and infrastructure automation."
  },
  {
    id: "8",
    name: "Customer Service Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/customer-service-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "25 minutes",
    testType: "Situational",
    keywords: ["customer service", "support", "communication", "interpersonal", "service desk"],
    description: "Measures customer service aptitude, communication skills, and problem-solving in service scenarios."
  },
  {
    id: "9",
    name: "Data Science Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/data-science-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "70 minutes",
    testType: "Technical",
    keywords: ["data science", "machine learning", "statistics", "analytics", "python", "r", "modeling"],
    description: "Comprehensive evaluation of data science skills including statistical analysis, machine learning algorithms, and data modeling."
  },
  {
    id: "10",
    name: "Project Management Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/project-management-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "45 minutes",
    testType: "Situational",
    keywords: ["project management", "agile", "scrum", "planning", "scheduling", "coordination"],
    description: "Assesses project planning abilities, resource management skills, and methodologies like Agile and Scrum."
  },
  {
    id: "11",
    name: "Sales Aptitude Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/sales-aptitude-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "30 minutes",
    testType: "Situational",
    keywords: ["sales", "negotiation", "persuasion", "closing", "account management", "business development"],
    description: "Evaluates sales abilities, negotiation tactics, client relationship management, and closing skills."
  },
  {
    id: "12",
    name: "General Workplace Skills",
    url: "https://www.shl.com/solutions/products/product-catalog/workplace-skills-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "20 minutes",
    testType: "General",
    keywords: ["workplace", "professional", "communication", "collaboration", "time management"],
    description: "Basic assessment of workplace readiness, professionalism, and core soft skills."
  },
  {
    id: "13",
    name: "Mobile Developer Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/mobile-dev-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "45 minutes",
    testType: "Technical",
    keywords: ["android", "ios", "swift", "kotlin", "react native", "mobile", "app development"],
    description: "Tests skills in mobile application development across platforms including iOS and Android."
  },
  {
    id: "14",
    name: "Executive Problem-Solving Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/executive-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: true,
    duration: "50 minutes",
    testType: "Cognitive",
    keywords: ["executive", "strategic thinking", "decision making", "leadership", "business acumen"],
    description: "Advanced assessment measuring strategic thinking, business decision-making, and executive reasoning."
  },
  {
    id: "15",
    name: "IT Support Assessment",
    url: "https://www.shl.com/solutions/products/product-catalog/it-support-assessment",
    remoteTestingSupport: true,
    adaptiveSupport: false,
    duration: "35 minutes",
    testType: "Technical",
    keywords: ["it support", "helpdesk", "troubleshooting", "technical support", "service desk"],
    description: "Evaluates technical troubleshooting capabilities, IT knowledge, and customer support skills."
  }
];
