import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data';

const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white opacity-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I'm a passionate Software Developer with expertise in AWS Serverless architecture, AI & ML, Python, and Node.js. 
            With a strong background in both frontend and backend development, I specialize in creating efficient, 
            scalable solutions that solve complex problems.
          </p>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            My journey in software development began at KIIT University where I earned my BTech in Electronics & Telecommunications. 
            I later enhanced my skills with an MSc in Machine Learning & AI from Liverpool John Moores University, 
            allowing me to bridge the gap between traditional software development and cutting-edge AI technologies.
          </p>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Throughout my career at companies like Electronic Arts, Deloitte, and Accenture, I've developed a diverse skill set 
            that includes automation, machine learning, and full-stack development. I'm particularly passionate about creating 
            no-code automation tools and implementing AI solutions that make complex processes more efficient.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my 
            knowledge with the developer community. I'm always open to new challenges and opportunities to grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
