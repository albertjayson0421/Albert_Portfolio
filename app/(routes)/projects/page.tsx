"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) =>
        project.technologies.includes(activeFilter)
      )
    : projects;

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my work across various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="flex max-w-5xl flex-wrap justify-center gap-2 mb-8 mx-auto">
            <Badge
              variant={activeFilter === null ? "default" : "outline"}
              className="cursor-pointer text-sm py-2 px-3"
              onClick={() => setActiveFilter(null)}
            >
              All
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={activeFilter === tech ? "default" : "outline"}
                className="cursor-pointer text-sm py-2 px-3"
                onClick={() => setActiveFilter(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {activeFilter === null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * filteredProjects.length }}
            >
              <Card className="group h-full min-h-[320px] flex flex-col overflow-hidden rounded-lg border border-border/70 bg-card/70 py-0 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex h-20 items-center justify-between border-b border-border/60 px-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-background/70">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">85 repositories</span>
                </div>
                <CardHeader className="px-5 pt-5 pb-3">
                  <CardTitle className="text-base font-semibold tracking-normal">More Projects on GitHub</CardTitle>
                  <CardDescription className="mt-1 line-clamp-3 text-sm leading-6">
                    Explore my repositories, experiments, and open-source work.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 px-5 pb-5 text-sm text-muted-foreground">
                  Browse Ruby, TypeScript, Go, PHP, React, and Node.js projects directly on GitHub.
                </CardContent>
                <CardFooter className="mt-auto border-t px-5 py-3">
                  <Button asChild variant="outline" size="sm" className="h-8 rounded-md">
                    <a
                      href="https://github.com/touridev?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found with the selected technology. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}