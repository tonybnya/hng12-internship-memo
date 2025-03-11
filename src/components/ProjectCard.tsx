import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, CodeXml } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  stack?: string[];
  outcomes?: string[];
  imageUrl?: string;
  projectUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project, highlighting the key features and technologies used during development.",
  stack = ["React", "TypeScript", "Tailwind CSS"],
  outcomes = [
    "Successfully implemented responsive design",
    "Improved load time by 40%",
  ],
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  projectUrl = "https://github.com/tonybnya",
  liveUrl = "https://github.com/tonybnya",
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-[350px] h-full min-h-[320px] overflow-hidden flex flex-col bg-white">
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <CardDescription className="mt-2 line-clamp-2">
          {description}
        </CardDescription>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <CodeXml size={18} />
        </a>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Key Outcomes</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t">
        <div className="text-xs text-muted-foreground">
          HNG Internship Project
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
