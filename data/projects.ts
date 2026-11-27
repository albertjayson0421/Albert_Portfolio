export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "appian",
    title: "Appian",
    description: "Enterprise platform for process automation, low-code application development, and workflow orchestration.",
    longDescription: "Appian combines process management, enterprise automation, AI, and low-code development into a unified platform for building and operating business applications.",
    technologies: ["Enterprise Software", "Low-Code", "Workflow", "Automation", "AI"],
    achievements: [
      "Process automation and workflow orchestration",
      "Low-code enterprise application development",
      "AI-enabled operational workflows"
    ],
    image: "/images/projects/appian.png",
    liveUrl: "https://appian.com/",
    featured: true
  },
  {
    id: "relevance-ai",
    title: "Relevance AI",
    description: "AI agent platform for building, deploying, and managing intelligent workflows and automations.",
    longDescription: "Relevance AI provides tools for creating AI agents and automating business tasks across data, operations, customer service, and knowledge workflows.",
    technologies: ["AI Agents", "LLMs", "Automation", "RAG", "Workflow"],
    achievements: [
      "Build and deploy AI agents",
      "Automate data and operational workflows",
      "Integrate AI into business processes"
    ],
    image: "/images/projects/relevance-ai.png",
    liveUrl: "https://relevanceai.com/",
    featured: true
  },
  {
    id: "jane-app",
    title: "Jane App",
    description: "Practice management platform for appointments, patient records, payments, and clinic operations.",
    longDescription: "Jane App is a healthcare practice management platform designed to simplify scheduling, patient interactions, billing, documentation, and daily clinic operations.",
    technologies: ["Healthcare", "Scheduling", "Practice Management", "Billing", "Patient Systems"],
    achievements: [
      "Appointment and calendar management",
      "Patient and practice workflows",
      "Payments and clinic administration"
    ],
    image: "/images/projects/jane-app.png",
    liveUrl: "https://jane.app/",
    featured: true
  },
  {
    id: "factory-bot",
    title: "Factory Bot",
    description: "A Ruby project for building and managing structured test or application data.",
    technologies: ["Ruby"],
    achievements: ["Public repository from the touridev GitHub profile", "15 GitHub stars"],
    image: "",
    github: "https://github.com/touridev/factory_bot",
    featured: true
  },
  {
    id: "slots-game",
    title: "Slots Game",
    description: "A TypeScript implementation of a slots-style game experience.",
    technologies: ["TypeScript"],
    achievements: ["Public repository from the touridev GitHub profile", "14 GitHub stars"],
    image: "",
    github: "https://github.com/touridev/slots-game",
    featured: true
  },
  {
    id: "go-kubernetes",
    title: "Go Kubernetes",
    description: "A Go project demonstrating Kubernetes application and infrastructure concepts.",
    technologies: ["Go", "Kubernetes"],
    achievements: ["Public repository from the touridev GitHub profile", "Cloud-native Go implementation"],
    image: "",
    github: "https://github.com/touridev/go-kubernetes",
    featured: true
  },
  {
    id: "row-php",
    title: "Row PHP Forum",
    description: "Simple PHP forum software for building online communities.",
    technologies: ["PHP"],
    achievements: ["Forum-focused community application", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/row-php",
    featured: false
  },
  {
    id: "shopify-dawn-customize",
    title: "Shopify Dawn Customization",
    description: "A customized Shopify Dawn storefront theme.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS"],
    achievements: ["Custom storefront implementation", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/shopify-dawn-customize",
    liveUrl: "https://touridev.myshopify.com",
    featured: false
  },
  {
    id: "forex-trade",
    title: "Forex Trade Toolbar",
    description: "A desktop trading utility that brings key trading tools into a lightweight toolbar.",
    technologies: ["JavaScript", "Desktop App"],
    achievements: ["Supports pre-trade workflow tools", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/forex-trade",
    featured: false
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description: "A Ruby-based clone exploring music platform interfaces and playback experiences.",
    technologies: ["Ruby", "HTML", "CSS"],
    achievements: ["Music application exploration", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/spotify-clone",
    featured: false
  },
  {
    id: "tinder-app",
    title: "Tinder App",
    description: "A Vue application exploring social matching and interactive user experiences.",
    technologies: ["Vue.js", "JavaScript"],
    achievements: ["Social application interface", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/tinder-app",
    featured: false
  },
  {
    id: "react-online-library",
    title: "React Online Library",
    description: "A React application for browsing and managing an online library.",
    technologies: ["React", "JavaScript"],
    achievements: ["Component-based frontend", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/react-online-library",
    featured: false
  },
  {
    id: "to-do-list-nodejs",
    title: "Node.js To-Do List",
    description: "A server-rendered Node.js application for creating and managing tasks.",
    technologies: ["Node.js", "EJS", "JavaScript"],
    achievements: ["Task-management application", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/to-do-list-nodejs",
    featured: false
  },
  {
    id: "ecolleta-api",
    title: "Ecoleta API",
    description: "A TypeScript API project for waste collection and environmental service workflows.",
    technologies: ["TypeScript", "Node.js", "API"],
    achievements: ["Environmental service API", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/ecolleta-api",
    featured: false
  },
  {
    id: "insta-clone",
    title: "Instagram Clone",
    description: "A TypeScript project exploring social photo-sharing application features.",
    technologies: ["TypeScript", "React", "Social App"],
    achievements: ["Social media application concept", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/insta-clone",
    featured: false
  },
  {
    id: "find-my-coffee-mobile",
    title: "Find My Coffee Mobile",
    description: "A JavaScript mobile application for finding and exploring coffee locations.",
    technologies: ["JavaScript", "Mobile", "Maps"],
    achievements: ["Location-focused mobile application", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/find_my_coffee_mobile",
    featured: false
  },
  {
    id: "ruby-currency-exchange",
    title: "Ruby Currency Exchange",
    description: "A Ruby application for currency exchange calculations and conversion workflows.",
    technologies: ["Ruby", "Currency API"],
    achievements: ["Currency conversion project", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/ruby-currency-exchange",
    featured: false
  },
  {
    id: "pet-admin",
    title: "Pet Admin",
    description: "A Ruby administration project for pet or animal record management.",
    technologies: ["Ruby", "Rails", "Administration"],
    achievements: ["Administrative CRUD application", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/pet-admin",
    featured: false
  },
  {
    id: "hr-patient",
    title: "HR Patient",
    description: "A Ruby project for human resources or patient information management workflows.",
    technologies: ["Ruby", "Rails", "Data Management"],
    achievements: ["Information management application", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/hr-patient",
    featured: false
  },
  {
    id: "ruby-web-crawler",
    title: "Ruby Web Crawler",
    description: "A Ruby project for crawling and extracting structured information from web pages.",
    technologies: ["Ruby", "Web Crawling", "Data Extraction"],
    achievements: ["Automated web data retrieval", "Public GitHub repository"],
    image: "",
    github: "https://github.com/touridev/ruby-web-crawler",
    featured: false
  }
];