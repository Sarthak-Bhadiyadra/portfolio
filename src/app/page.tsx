import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import data from "@/data/data.json";

import "./globals.css";

export default function Home() {
  const { skills, experience, projects } = data;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="overflow-hidden">
        <Hero />

        {/* Skills Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 dark:text-white">
                Skills & Expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are the technologies and tools I specialize in
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <SkillCard key={category} category={category} skills={skillList} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-6 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
          
          <div className="container mx-auto max-w-4xl relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 dark:text-white">Professional Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My career path and professional growth
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
              
              <div className="space-y-16">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
                    
                    {/* Content card */}
                    <div className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8' : 'pl-8'
                    }`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm mb-4">
                          {exp.duration}
                        </span>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                          {exp.title}
                        </h3>
                        <h4 className="text-blue-600 dark:text-blue-400 mb-4">
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 dark:text-white">
                Featured Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Take a look at some of my recent work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
