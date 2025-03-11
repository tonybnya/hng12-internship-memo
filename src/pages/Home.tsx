import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        name="Tony B. NYA"
        duration="February 2025 - March 2025"
        summary="Full Stack Engineer with a passion for building scalable web applications. During my HNG internship, I developed skills in modern web technologies and collaborated on real-world projects."
        githubUrl="https://github.com/tonybnya"
        linkedinUrl="https://linkedin.com/in/tonybnya"
      />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Timeline Section */}
      <Timeline />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
