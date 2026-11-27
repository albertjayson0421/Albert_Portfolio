import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full flex flex-col gap-0 overflow-hidden rounded-lg border border-border/70 bg-card/70 py-0 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      {project.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.featured}
          />
        </div>
      ) : (
        <div className="flex h-20 items-center justify-between border-b border-border/60 px-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-background/70">
            <Github className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">GitHub Project</span>
        </div>
      )}

      <CardHeader className="px-5 pt-5 pb-3">
        <CardTitle className="text-base font-semibold tracking-normal">{project.title}</CardTitle>
        <CardDescription className="mt-1 line-clamp-2 text-sm leading-6">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 px-5 pb-4">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-md px-2 py-0.5 text-[11px] font-medium">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="rounded-md px-2 py-0.5 text-[11px]">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start leading-5">
              <ArrowRight className="mr-2 mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="line-clamp-2">{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto border-t px-5 py-3">
        <Button asChild variant="outline" size="sm" className="h-8 rounded-md">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </Button>
        <div className="flex-1" />
        {project.github && (
          <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-md">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-md">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}