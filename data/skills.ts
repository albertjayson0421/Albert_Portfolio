// data/skills.ts
export type SkillCategory =
  | 'Languages'
  | 'Frameworks & Libraries'
  | 'AI & Data'
  | 'Cloud & DevOps'
  | 'Automation & Integration'
  | 'Databases & Messaging';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'PHP', category: 'Languages', logoKey: 'php' },
    { name: 'C#', category: 'Languages', logoKey: 'csharp' },
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
    { name: 'Go', category: 'Languages', logoKey: 'go' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
  ],
  'Frameworks & Libraries': [
    { name: 'React', category: 'Frameworks & Libraries', logoKey: 'react' },
    { name: 'Next.js', category: 'Frameworks & Libraries', logoKey: 'nextjs' },
    { name: 'Vue.js', category: 'Frameworks & Libraries', logoKey: 'vuejs' },
    { name: 'Angular', category: 'Frameworks & Libraries', logoKey: 'angularjs' },
    { name: 'React Native', category: 'Frameworks & Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks & Libraries', logoKey: 'nodejs' },
    { name: 'NestJS', category: 'Frameworks & Libraries', logoKey: 'nestjs' },
    { name: 'Django', category: 'Frameworks & Libraries', logoKey: 'django' },
    { name: 'FastAPI', category: 'Frameworks & Libraries', logoKey: 'fastapi' },
    { name: 'Laravel', category: 'Frameworks & Libraries', logoKey: 'laravel' },
    { name: 'Symfony', category: 'Frameworks & Libraries', logoKey: 'symfony' },
  ],
  'AI & Data': [
    { name: 'OpenAI', category: 'AI & Data', logoKey: 'openai' },
    { name: 'Claude', category: 'AI & Data', logoKey: 'anthropic' },
    { name: 'Gemini', category: 'AI & Data', logoKey: 'google' },
    { name: 'LangChain', category: 'AI & Data', logoKey: 'python' },
    { name: 'RAG', category: 'AI & Data', logoKey: 'python' },
    { name: 'PyTorch', category: 'AI & Data', logoKey: 'pytorch' },
    { name: 'YOLO', category: 'AI & Data', logoKey: 'python' },
    { name: 'OpenCV', category: 'AI & Data', logoKey: 'opencv' },
  ],
  'Automation & Integration': [
    { name: 'n8n', category: 'Automation & Integration', logoKey: 'n8n' },
    { name: 'Make.com', category: 'Automation & Integration', logoKey: 'make' },
    { name: 'Zapier', category: 'Automation & Integration', logoKey: 'zapier' },
    { name: 'GoHighLevel', category: 'Automation & Integration', logoKey: 'hubspot' },
    { name: 'Webhooks', category: 'Automation & Integration', logoKey: 'api' },
    { name: 'REST APIs', category: 'Automation & Integration', logoKey: 'swagger' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', category: 'Cloud & DevOps', logoKey: 'amazonwebservices' },
    { name: 'GCP', category: 'Cloud & DevOps', logoKey: 'googlecloud' },
    { name: 'Azure', category: 'Cloud & DevOps', logoKey: 'azure' },
    { name: 'Docker', category: 'Cloud & DevOps', logoKey: 'docker' },
    { name: 'Kubernetes', category: 'Cloud & DevOps', logoKey: 'kubernetes' },
    { name: 'Terraform', category: 'Cloud & DevOps', logoKey: 'terraform' },
    { name: 'Jenkins', category: 'Cloud & DevOps', logoKey: 'jenkins' },
    { name: 'GitHub Actions', category: 'Cloud & DevOps', logoKey: 'githubactions' },
  ],
  'Databases & Messaging': [
    { name: 'PostgreSQL', category: 'Databases & Messaging', logoKey: 'postgresql' },
    { name: 'MySQL', category: 'Databases & Messaging', logoKey: 'mysql' },
    { name: 'MongoDB', category: 'Databases & Messaging', logoKey: 'mongodb' },
    { name: 'Redis', category: 'Databases & Messaging', logoKey: 'redis' },
    { name: 'Apache Kafka', category: 'Databases & Messaging', logoKey: 'apachekafka' },
    { name: 'RabbitMQ', category: 'Databases & Messaging', logoKey: 'rabbitmq' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};