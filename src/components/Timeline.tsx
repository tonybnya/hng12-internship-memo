import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, Star, Trophy } from "lucide-react";

interface TimelineEvent {
  stage: string;
  title: string;
  date: string;
  description: string;
  achievements: string[];
  icon?: React.ReactNode;
  isCompleted?: boolean;
}

interface TimelineSectionProps {
  title?: string;
  description?: string;
  events?: TimelineEvent[];
}

const Timeline = ({
  title = "Internship Journey",
  description = "My progression through the HNG Internship program, highlighting key milestones and achievements along the way.",
  events = [
    {
      stage: "Stage 1",
      title: "Onboarding & Fundamentals",
      date: "June 1-14, 2023",
      description:
        "Introduction to the internship structure, team formation, and basic skill assessment.",
      achievements: [
        "Completed initial assessment",
        "Joined development team",
        "Set up development environment",
      ],
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      isCompleted: true,
    },
    {
      stage: "Stage 2",
      title: "Frontend Development",
      date: "June 15-30, 2023",
      description:
        "Focused on building responsive UI components and implementing client-side functionality.",
      achievements: [
        "Mastered React hooks",
        "Implemented responsive designs",
        "Collaborated on UI component library",
      ],
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      isCompleted: true,
    },
    {
      stage: "Stage 3",
      title: "Backend Integration",
      date: "July 1-14, 2023",
      description:
        "Connected frontend to backend services, implemented API integrations and data management.",
      achievements: [
        "Built RESTful API endpoints",
        "Implemented authentication flow",
        "Created database schemas",
      ],
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      isCompleted: true,
    },
    {
      stage: "Final Stage",
      title: "Project Completion",
      date: "July 15-30, 2023",
      description:
        "Finalized project deliverables, performed testing, and prepared for final presentation.",
      achievements: [
        "Completed full-stack application",
        "Conducted user testing",
        "Delivered final presentation",
      ],
      icon: <Trophy className="h-6 w-6 text-purple-500" />,
      isCompleted: true,
    },
  ],
}: TimelineSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          {events.map((event, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-primary">
                    {event.icon || (
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    )}
                  </div>
                </div>

                {/* Content card - alternating sides */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <Card className="overflow-hidden border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary font-medium"
                        >
                          {event.stage}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {event.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>

                      <Separator className="my-4" />

                      <div>
                        <h4 className="text-sm font-semibold mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
