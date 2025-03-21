import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { cn } from "../lib/utils";
import { Smartphone, Layers, Cpu, Webhook } from "lucide-react";

interface SkillProps {
  name: string;
  icon: React.ReactNode | string;
  level?: "beginner" | "intermediate" | "advanced";
}

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  frontendSkills?: SkillProps[];
  backendSkills?: SkillProps[];
  otherSkills?: SkillProps[];
}

const SkillIcon = ({ skill }: { skill: SkillProps }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-[110px]">
      <div className="p-2 rounded-full bg-primary/5 text-primary">
        {typeof skill.icon === "string" ? (
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-6 h-6"
          />
        ) : (
          skill.icon
        )}
      </div>
      <span className="text-sm font-medium text-center">{skill.name}</span>
      {skill.level && (
        <Badge
          variant="outline"
          className={cn(
            "text-xs",
            skill.level === "beginner" && "border-blue-200 text-blue-600",
            skill.level === "intermediate" && "border-green-200 text-green-600",
            skill.level === "advanced" && "border-purple-200 text-purple-600",
          )}
        >
          {skill.level}
        </Badge>
      )}
    </div>
  );
};

const SkillsSection = ({
  title = "Technical Skills",
  subtitle = "Technologies and tools I worked with during my HNG internship",
  frontendSkills = [
    {
      name: "HTML",
      icon: "/icons/html.svg",
      level: "intermediate",
    },
    {
      name: "CSS",
      icon: "/icons/css.svg",
      level: "intermediate",
    },
    {
      name: "JavaScript",
      icon: "/icons/js.svg",
      level: "intermediate",
    },
    {
      name: "React",
      icon: "/icons/react.svg",
      level: "intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: "icons/tailwind.svg",
      level: "intermediate",
    },
    {
      name: "Responsive Design",
      icon: <Smartphone size={24} />,
      level: "advanced",
    },
  ],
  backendSkills = [
    {
      name: "Python",
      icon: "/icons/python.svg",
      level: "intermediate",
    },
    {
      name: "Flask",
      icon: "/icons/flask.svg",
      level: "intermediate",
    },
    {
      name: "FastAPI",
      icon: "/icons/fastapi.svg",
      level: "intermediate",
    },
    {
      name: "SQLite",
      icon: "/icons/sqlite.svg",
      level: "intermediate",
    },
    {
      name: "RESTful APIs",
      icon: <Layers size={24} />,
      level: "intermediate",
    },
    {
      name: "Webhook",
      icon: <Webhook size={24} />,
      level: "beginner",
    },
  ],
  otherSkills = [
    {
      name: "Git",
      icon: "/icons/git.svg",
      level: "intermediate",
    },
    {
      name: "GitHub",
      icon: "/icons/github.svg",
      level: "intermediate",
    },
    {
      name: "Telex",
      icon: "/icons/telex.svg",
      level: "intermediate",
    },
    { name: "CI/CD", icon: <Cpu size={24} />, level: "beginner" },
    {
      name: "Nginx",
      icon: "/icons/nginx.svg",
      level: "intermediate",
    },
    {
      name: "Linode",
      icon: "/icons/linode.svg",
      level: "beginner",
    },
  ],
}: SkillsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-10">
          {/* Frontend Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <Separator className="flex-grow" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
              {frontendSkills.map((skill, index) => (
                <SkillIcon key={`frontend-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <Separator className="flex-grow" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
              {backendSkills.map((skill, index) => (
                <SkillIcon key={`backend-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Other Skills */}
          {otherSkills.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold">Other Skills</h3>
                <Separator className="flex-grow" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                {otherSkills.map((skill, index) => (
                  <SkillIcon key={`other-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
