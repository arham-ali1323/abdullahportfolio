import React from 'react';
import { ArrowRight } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const PortfolioSection = () => {
  const projects = portfolioData.portfolio;

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 text-sm font-semibold mb-4 tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-purple-600">Recent Work</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my latest design projects and creative solutions that I've helped brands excel
            and...
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fadeInUp animate-stagger-1"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4 aspect-[4/3] hover-lift">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-purple-400 text-sm font-semibold mb-1">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2 group">
            View More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
