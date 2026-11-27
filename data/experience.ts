export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'research' | 'education' | 'leadership';
}

export const experiences: Experience[] = [
  {
    id: "appian-senior-engineer",
    title: "Senior Full Stack & AI Engineer",
    company: "Appian Corporation",
    location: "United States | Remote",
    startDate: "January 2023",
    endDate: "August 2026",
    description: "Led full-stack development for a SaaS compliance platform serving more than 18,000 daily users.",
    achievements: [
      "Built production features with Python, PHP, React, Next.js, REST APIs, GraphQL, Kafka, Redis, and Kubernetes",
      "Improved system throughput by 30% while maintaining 99.9% uptime",
      "Reduced dashboard load times by 50% through rendering, caching, API, and database optimization",
      "Automated compliance reporting and data workflows, saving teams more than 20 hours weekly",
      "Integrated Stripe and PayPal for more than 10,000 monthly transactions and reduced payment errors by 15%",
      "Contributed to infrastructure improvements associated with a 40% reduction in downtime"
    ],
    type: 'work'
  },
  {
    id: "ifca-full-stack-ai",
    title: "Full Stack & AI Engineer",
    company: "IFCA MSC Berhad",
    location: "Malaysia",
    startDate: "December 2018",
    endDate: "December 2022",
    description: "Developed a global travel booking platform supporting more than 8,000 daily bookings.",
    achievements: [
      "Built services with Python, Laravel, Vue.js, TypeScript, GraphQL, and RabbitMQ",
      "Supported more than 100,000 monthly API requests with 99.8% uptime",
      "Created ETL pipelines for travel and pricing data",
      "Improved booking completion by 22% through reusable and optimized Vue.js interfaces",
      "Reduced server response times by 35% and post-release bugs by 25%"
    ],
    type: 'work'
  },
  {
    id: "censof-software-developer",
    title: "Software Developer",
    company: "Censof Holdings Berhad",
    location: "Malaysia",
    startDate: "November 2015",
    endDate: "November 2018",
    description: "Contributed to healthcare scheduling and application modernization work.",
    achievements: [
      "Built Node.js, Python, React, and Angular features for a platform serving more than 5,000 monthly users",
      "Developed secure REST APIs with JWT authentication, validation, and rate limiting",
      "Improved booking efficiency by 20%",
      "Supported migration to Google Cloud Platform, improving uptime by 25%",
      "Reduced booking-processing errors by 15% through automated testing and validation"
    ],
    type: 'work'
  }
];