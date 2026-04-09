import React from 'react';
import { Paintbrush, Image, Layers, Printer, Briefcase, Share2 } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const ServicesGridSection = () => {
  const services = portfolioData.services;

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What I Can <span className="text-purple-600">Create For You</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to final design, I provide comprehensive graphic design services to elevate
            your brand and captivate your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon === 'Paintbrush' ? Paintbrush :
                                 service.icon === 'Image' ? Image :
                                 service.icon === 'Layers' ? Layers :
                                 service.icon === 'Printer' ? Printer :
                                 service.icon === 'Briefcase' ? Briefcase :
                                 service.icon === 'Share2' ? Share2 : Paintbrush;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 group hover-lift animate-fadeInUp animate-stagger-1"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors animate-pulse">
                  <IconComponent className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesGridSection;
