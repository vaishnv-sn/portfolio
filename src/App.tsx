import { Github, Linkedin, Mail, User, Briefcase, Rocket } from "lucide-react";
import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import SkillCard from "./components/SkillCard";
import StarField from "./components/StarField";
import MeteorShower from "./components/MeteorShower";

function App() {
  const skills = [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "text-[#3776AB]",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "text-[#092E20]",
    },
    {
      name: "mongodb",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "text-[#336791]",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "text-[#4479A1]",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "text-[#E34F26]",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "text-[#1572B6]",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "text-[#F7DF1E]",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "text-[#2496ED]",
    },
  ];

  return (
    <div className="min-h-screen bg-deepSpace text-white relative overflow-hidden">
      <StarField />
      <MeteorShower />

      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-nebulaPink via-cosmicBlue to-violet-500 animate-glow">
              Vaishnav S N
            </h1>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 animate-float">
                MERN Stack Developer
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-nebulaPink via-cosmicBlue to-violet-500 animate-pulse"></div>
            </div>
            <p className="text-xl md:text-2xl text-starWhite/90 mb-8 animate-fade-in opacity-0 [animation-delay:1000ms] max-w-2xl mx-auto leading-relaxed">
              Delivering powerful systems driven by a passion for solving
              real-world challenges.
            </p>
            <div className="flex gap-6 justify-center animate-fade-in opacity-0 [animation-delay:1200ms]">
              <a
                href="https://github.com/vaishnv-sn"
                className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
              >
                <Github className="w-6 h-6 group-hover:text-nebulaPink transition-colors" />
                <div className="absolute inset-0 rounded-full bg-nebulaPink/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnav-sn/"
                className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
              >
                <Linkedin className="w-6 h-6 group-hover:text-cosmicBlue transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cosmicBlue/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
              <a
                href="mailto:vaishnav.sn4@gmail.com"
                className="group relative p-3 bg-deepSpace/50 rounded-full hover:bg-deepSpace/80 transition-all duration-300 border border-starWhite/10"
              >
                <Mail className="w-6 h-6 group-hover:text-emerald-500 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
            </div>
            <div className="mt-12 animate-bounce-slow">
              <Rocket className="w-8 h-8 mx-auto text-nebulaPink" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 group">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-nebulaPink/20 to-cosmicBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-starWhite/80 leading-relaxed">
                Full-Stack Developer deeply passionate about MERN stack
                development — building applications that are scalable,
                maintainable, and elegant. I thrive on solving complex problems,
                improving workflows, and turning challenging ideas into
                practical, high-quality solutions. I enjoy learning
                continuously, experimenting with new approaches, and
                collaborating across teams to deliver software that works
                reliably and efficiently. I’m fascinated by the intersection of
                technology and real-world impact, and I aim to grow as a
                developer who doesn’t just write code, but shapes systems that
                matter.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-deepSpace/50 border border-nebulaPink/20 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <User className="w-6 h-6 mb-2 text-nebulaPink group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-starWhite group-hover:text-nebulaPink transition-colors">
                    Experience
                  </h3>
                  <p className="text-starWhite/70">2+ Years</p>
                </div>
                <div className="group bg-deepSpace/50 border border-cosmicBlue/20 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Briefcase className="w-6 h-6 mb-2 text-cosmicBlue group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-starWhite group-hover:text-cosmicBlue transition-colors">
                    Projects
                  </h3>
                  <p className="text-starWhite/70">3+ Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project Management Application"
              description="Collaborative project management tool with real-time project updates"
              image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
              tags={["Django", "MySQL", "Docker"]}
              liveLink="https://kanishv.pythonanywhere.com/"
              codeLink="https://github.com/kanish-v15/project-management-app"
            />
            <ProjectCard
              title="E-Commerce Application"
              description="Full-featured e-commerce store with multi role user authentication functionality"
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
              tags={["Django REST", "Python", "PostgreSQL"]}
              codeLink="https://github.com/kanish-v15/ecommerce-app"
            />
            <ProjectCard
              title="Expense Tracker Application"
              description="Real time personal finance management tool with responsive reporting features"
              image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
              tags={["Django", "Chart.js", "MySQL"]}
              codeLink="https://github.com/kanish-v15/expense-tracker-app"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="bg-deepSpace/30 backdrop-blur-lg rounded-2xl border border-starWhite/10 p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-starWhite/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text mb-4">
                Vaishnav S N
              </h3>
              <p className="text-starWhite/70 mb-4">
                Full Stack Developer with experience in React, Node.js, and
                MongoDB — specializing in backend development and building
                scalable, business-centric applications.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vaishnv-sn"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnav-sn/"
                  className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:vaishnav.sn4@gmail.com"
                  className="text-starWhite/70 hover:text-emerald-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <p className="text-starWhite/70 mb-2">
                Email:{" "}
                <a
                  href="mailto:vaishnav.sn4@gmail.com"
                  className="hover:text-starWhite transition-colors"
                >
                  vaishnav.sn4@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-starWhite/10 pt-8 text-center">
            <p className="text-starWhite/50">
              &copy; {new Date().getFullYear()} Vaishnav S N . All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
