import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  outcomes: string[];
  imageUrl: string;
  projectUrl?: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const Projects = ({
  title = "Projects & Challenges",
  subtitle = "Key projects completed during my HNG internship that demonstrate my technical skills and problem-solving abilities.",
  projects = [
    {
      id: "1",
      title: "Profile Card Component",
      description:
        "A customizable and responsive profile card component designed to display user information such as name, role, current location, current datetime and social links. The component features a clean UI with hover effects and smooth animations.",
      stack: ["HTML", "CSS", "JavaScript"],
      outcomes: [
        "Designed a sleek UI",
        "Implemented responsive design for all device sizes",
      ],
      imageUrl: "https://i.postimg.cc/BQcDGP14/front-01.png",
      projectUrl: "https://github.com/tonybnya/hng12-frontend-stage00",
      liveUrl: "https://tonybnya-hng12-profile-card.onrender.com",
    },
    {
      id: "2",
      title: "Color Game",
      description:
        "A fun and interactive color-matching game that challenges users to guess the correct color based on given RGB values. Built with a focus on UI/UX, accessibility, and game logic.",
      stack: ["React", "Tailwind"],
      outcomes: [
        "Enhanced user engagement through interactive gameplay",
        "Implemented dynamic UI updates for a smooth experience",
      ],
      imageUrl: "https://i.postimg.cc/gjvnH1P3/front-02.png",
      projectUrl: "https://github.com/tonybnya/hng12-frontend-stage01",
      liveUrl: "https://tonybnya-hng12-color-game.onrender.com",
    },
    {
      id: "3",
      title: "Public API for Basic Information",
      description:
        "A simple REST API that provides an email address, the current date and time in ISO 8601 format, and a GitHub repository URL. Designed for fast responses under 500ms.",
      stack: ["Python", "Flask", "Flask-CORS"],
      outcomes: [
        "Built a lightweight and efficient API with Flask",
        "Optimized response time to be under 500ms",
        "Implemented JSON response formatting and CORS support",
        "Hosted and documented the API for public use",
      ],
      imageUrl: "https://i.postimg.cc/Jn6dr7Yz/back-01.png",
      projectUrl: "https://github.com/tonybnya/hng12-backend-stage00",
      liveUrl: "https://tonybnya-hng12-backend-stage00.onrender.com",
    },
    {
      id: "4",
      title: "Number Classification API",
      description:
        "Weather application that provides current conditions and 5-day forecasts with location-based services and interactive maps. Designed for fast responses under 500ms.",
      stack: ["Python", "Flask", "Flask-CORS"],
      outcomes: [
        "Built a lightweight and efficient API with Flask",
        "Optimized response time to be under 500ms",
        "Implemented JSON response formatting and CORS support",
        "Deployed and documented for public access",
      ],
      imageUrl: "https://i.postimg.cc/h46j3L4f/back-02.png",
      projectUrl: "https://github.com/tonybnya/hng12-backend-stage01",
      liveUrl:
        "https://tonybnya-hng12-backend-stage01.onrender.com/api/classify-number?number=2025",
    },
    {
      id: "5",
      title: "FastAPI Book API",
      description:
        "A FastAPI-based Book API that allows users to fetch book details, set up automated CI/CD pipelines, containerize the API with Docker, configure a reverse proxy with Nginx, and deploy on a Linode VPS.",
      stack: [
        "Python",
        "FastAPI",
        "Docker",
        "Nginx",
        "GitHub Actions",
        "Linode",
      ],
      outcomes: [
        "Implemented the missing GET /api/v1/books/{book_id} endpoint",
        "Set up CI/CD pipelines with GitHub Actions for automated testing and deployment",
        "Dockerized the API for containerized deployment",
        "Configured Nginx as a reverse proxy for secure API access",
        "Deployed the API on a Linode VPS with optimized performance",
      ],
      imageUrl: "https://i.postimg.cc/02htFtrM/back-04.png",
      projectUrl: "https://github.com/tonybnya/fastapi-book-project",
      liveUrl: "http://172.232.44.199:8000/api/v1/books/1",
    },
    {
      id: "6",
      title: "Codex - Interval Integration for Telex",
      description:
        "Weather application that provides current conditions and 5-day forecasts with location-based services and interactive maps. Designed for fast responses under 500ms.",
      stack: ["Python", "Flask", "Flask-CORS"],
      outcomes: [
        "Built a lightweight and efficient API with Express",
        "Optimized response time to be under 500ms",
        "Implemented JSON response formatting and CORS support",
        "Deployed and documented for public access",
      ],
      imageUrl: "https://i.postimg.cc/Sxp51yZY/back-03.png",
      projectUrl: "https://github.com/tonybnya/codex",
      liveUrl: "https://github.com/tonybnya/codex",
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
                stack={project.stack}
                outcomes={project.outcomes}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                liveUrl={project.liveUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
