import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  duration?: string;
  role?: string;
  summary?: string;
  backgroundImage?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const Hero = ({
  name = "Tony B. NYA",
  duration = "February 2025 - March 2025",
  role = "Software Engineer",
  summary = "Full Stack Engineer with a passion for building scalable web applications. During my HNG internship, I developed skills in modern web technologies and collaborated on real-world projects.",
  backgroundImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  githubUrl = "https://github.com/tonybnya",
  linkedinUrl = "https://linkedin.com/in/tonybnya",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-950 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90"></div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-medium text-primary-foreground/80 mb-2">
              HNG 12 INTERNSHIP MEMO
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {name}
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-md lg:text-lg font-bold text-primary-foreground/50 mb-4"
          >
            {role}
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/40 text-primary-foreground rounded-full text-sm font-medium">
              {duration}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            {summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="group">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
