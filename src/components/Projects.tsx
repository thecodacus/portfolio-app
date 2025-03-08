import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'automation'>('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 opacity-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, AI/ML, and automation solutions.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'web' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'ai' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('ai')}
            >
              AI/ML
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'automation' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setFilter('automation')}
            >
              Automation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-2">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          aria-label="View source code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
