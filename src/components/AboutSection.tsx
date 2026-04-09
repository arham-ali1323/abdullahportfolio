import React from 'react';
import portfolioData from '../data/portfolio.json';

const AboutIntroSection = () => {
  const { title, description, detailedDescription, stats, profileImage, alt } = portfolioData.about;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fadeInLeft">
            <p className="text-purple-600 text-sm font-semibold mb-4 tracking-wider uppercase">
              About
            </p>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-8 animate-slideInFromTop" dangerouslySetInnerHTML={{ __html: title }} />

            <div className="space-y-6 text-gray-700 leading-relaxed mb-8 animate-fadeInUp" dangerouslySetInnerHTML={{ __html: description }} />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeInScale animate-stagger-1">
                  <p className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fadeInRight">
            <div className="bg-gradient-to-br from-purple-100 to-gray-100 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img
                src={profileImage}
                alt={alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroSection;
