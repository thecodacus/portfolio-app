import React, { useEffect, useRef } from 'react';
import { education } from '../data';
import { Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white opacity-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Education items */}
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-600 font-semibold mb-3">{edu.institution}</h4>
                    
                    <div className="flex flex-col md:flex-row md:justify-end gap-3 text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-blue-600 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="text-blue-600 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for timeline alignment */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
