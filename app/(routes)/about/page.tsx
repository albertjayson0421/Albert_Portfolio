// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m Albert Jayson Arguelles, a Senior Full Stack and AI Automation Engineer based in Porac, Pampanga, Philippines. I have 10+ years of experience delivering SaaS, travel, and healthcare applications across frontend, backend, automation, and cloud engineering.
              </p>
              <p>
                My work spans React, Next.js, Vue.js, Angular, Python, Node.js, PHP, REST and GraphQL APIs, event-driven systems, relational and NoSQL databases, and cloud-native delivery. I focus on application performance, operational efficiency, resilience, and measurable business outcomes.
              </p>
              <p>
                I also integrate AI and automation technologies including OpenAI, Claude, Gemini, LangChain, RAG, n8n, Make.com, Zapier, and GoHighLevel. I&apos;m interested in building practical systems that improve throughput, reduce manual work, and remain reliable in production.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-muted-foreground">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <Badge variant="outline" className="mt-2">
                        CGPA: {edu.gpa}
                      </Badge>
                    )}
                    {edu.description && (
                      <p className="mt-2 text-sm">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            
            {Object.keys(skills).map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category as SkillCategory].map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Supported 18,000+ daily SaaS users and 10,000+ monthly payment transactions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Improved system throughput by 30% while maintaining 99.9% uptime.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Reduced dashboard load times by 50% through full-stack optimization.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Automated workflows that save operational teams more than 20 hours each week.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Supported travel platforms handling more than 8,000 daily bookings.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}