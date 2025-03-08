import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, Globe, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

const Hero: React.FC = () => {
  const profileRef = useRef<HTMLImageElement>(null);

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

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="pt-20 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0 md:pr-10">
            <div className="opacity-0 animate-fadeIn animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {personalInfo.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 opacity-0 animate-fadeIn animation-delay-200">
              <div className="flex items-center">
                <Mail size={20} className="text-blue-600 mr-2" />
                <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-blue-600 mr-2" />
                <a href={`tel:${personalInfo.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-blue-600 mr-2" />
                <span className="text-gray-700">{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <Globe size={20} className="text-blue-600 mr-2" />
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {personalInfo.website}
                </a>
              </div>
            </div>

            <div className="flex space-x-4 opacity-0 animate-fadeIn animation-delay-300">
              {socialLinks.map((link) => {
                const Icon = {
                  'Linkedin': Linkedin,
                  'Github': Github,
                  'Globe': Globe,
                  'Mail': Mail
                }[link.icon] || Mail;

                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={20} className="text-blue-600" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 opacity-0 animate-fadeIn animation-delay-400">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 inline-block"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="ml-4 border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 inline-block"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-xl transform scale-110"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl h-64 w-64 md:h-80 md:w-80 opacity-0 animate-fadeIn animation-delay-500">
                <img
                  ref={profileRef}
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
