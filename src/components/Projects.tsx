import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  imageUrl: string;
  projectUrl?: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "Projects & Challenges",
  subtitle = "Key projects completed during my HNG internship that demonstrate my technical skills and problem-solving abilities.",
  projects = [
    {
      id: "1",
      title: "E-commerce Dashboard",
      description:
        "A responsive admin dashboard for managing products, orders, and customer data with real-time analytics.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      outcomes: [
        "Implemented responsive design for all device sizes",
        "Created interactive data visualization components",
        "Reduced page load time by 35%",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      projectUrl: "https://github.com/username/ecommerce-dashboard",
    },
    {
      id: "2",
      title: "Task Management API",
      description:
        "RESTful API for a task management application with authentication, task CRUD operations, and team collaboration features.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      outcomes: [
        "Built secure authentication system with JWT",
        "Implemented comprehensive API documentation",
        "Achieved 95% test coverage with Jest",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
      projectUrl: "https://github.com/username/task-api",
    },
    {
      id: "3",
      title: "Social Media Frontend",
      description:
        "Modern social media application frontend with real-time messaging, post creation, and user interaction features.",
      technologies: ["React", "Redux", "Socket.io", "SCSS"],
      outcomes: [
        "Created responsive UI with smooth animations",
        "Implemented real-time notifications system",
        "Optimized image loading for better performance",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
      projectUrl: "https://github.com/username/social-app",
    },
    {
      id: "4",
      title: "Weather Forecast App",
      description:
        "Weather application that provides current conditions and 5-day forecasts with location-based services and interactive maps.",
      technologies: ["React Native", "Expo", "Weather API", "Geolocation"],
      outcomes: [
        "Integrated with OpenWeatherMap API",
        "Implemented location-based weather forecasts",
        "Created intuitive UI with animated transitions",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&q=80",
      projectUrl: "https://github.com/username/weather-app",
    },
  ],
}: ProjectsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                outcomes={project.outcomes}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
