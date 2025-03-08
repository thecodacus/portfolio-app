import React, { useState, useEffect, useRef } from 'react';
import { experiences, employmentHistory } from '../data';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
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
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 opacity-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex flex-wrap justify-center">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`px-4 py-2 m-2 rounded-md transition-all duration-300 ${
                  activeTab === exp.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(exp.id)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-all duration-500">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`transition-opacity duration-300 ${
                  activeTab === exp.id ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{exp.position}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                  <p className="text-gray-600 italic">{exp.companyType}</p>
                </div>

                <div className="flex flex-wrap mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">{exp.duration}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPin size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">{exp.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Achievements/Tasks:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Employment History</h3>
            <div className="space-y-6">
              {employmentHistory.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{job.company}</h4>
                      <p className="text-blue-600">{job.position}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
