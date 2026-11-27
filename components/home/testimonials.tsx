"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  url:string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "saas-compliance",
    name: "SaaS Compliance Platform",
    position: "Full-stack and event-driven architecture",
    relation: "18,000+ daily users",
    date: "2023 - 2026",
    url: "/images/projects/zenith/zenith.jpg",
    quote: "Built React and Next.js interfaces, Django and PHP services, Kafka pipelines, Redis caching, and cloud infrastructure for a high-availability compliance platform."
  },
  {
    id: "travel-booking",
    name: "Global Travel Platform",
    position: "API, messaging, and booking optimization",
    relation: "8,000+ daily bookings",
    date: "2018 - 2022",
    url: "/images/projects/infinitus/infinitus.jpg",
    quote: "Delivered Vue.js booking experiences, Laravel and Python services, RabbitMQ workflows, and ETL pipelines while improving completion and response times."
  },
  {
    id: "healthcare-scheduling",
    name: "Healthcare Scheduling Platform",
    position: "Secure application and cloud modernization",
    relation: "5,000+ monthly users",
    date: "2015 - 2018",
    url: "/images/projects/billrewards/billrewards.jpg",
    quote: "Developed REST APIs, React and Angular interfaces, automated tests, JWT security, and GCP migration support for reliable healthcare workflows."
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Engineering Impact
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Selected outcomes across SaaS, travel, and healthcare platforms
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.url} alt={testimonial.name.charAt(0)} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.relation} • {testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}