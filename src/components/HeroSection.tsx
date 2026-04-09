"use client"

import React from 'react';
import { Mail, Camera, Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const HeroSection = () => {
  const { headline, subheadline, testimonialAvatars, trustBadge, socialLinks } = portfolioData.hero;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full animate-pulse animate-stagger-2"></div>
      <div className="absolute bottom-40 left-40 w-2 h-2 bg-purple-200 rounded-full animate-pulse animate-stagger-3"></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-purple-100 rounded-full animate-pulse animate-stagger-4"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-purple-300 rounded-full animate-pulse animate-stagger-5"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-200 rounded-full animate-pulse animate-stagger-6"></div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 mt-48 text-center">
        {/* Trust Badge */}
        <div className="flex flex-col md:flex-row font-bold items-center justify-center gap-4 mb-12 animate-fadeInUp">
          <div className="flex -space-x-3 mb-4 md:mb-0">
            {testimonialAvatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Client ${index + 1}`}
                className="w-12 h-12 rounded-full border-3 border-white object-cover hover-lift animate-fadeInScale animate-stagger-1"
              />
            ))}
          </div>
          <div className="text-center md:text-left animate-fadeInRight animate-stagger-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-sm text-gray-600">Trusted by</span>
              <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded font-semibold animate-pulse">20+</span>
            </div>
            <p className="text-sm text-gray-600">{trustBadge.description}</p>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight px-4 animate-slideInFromTop" dangerouslySetInnerHTML={{ __html: headline }} />

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 px-4 animate-fadeInUp animate-stagger-3" dangerouslySetInnerHTML={{ __html: subheadline }} />

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fadeInScale animate-stagger-4">
          <span className="text-gray-600 text-sm">DM on:</span>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon === 'Mail' ? Mail : 
                                     social.icon === 'Camera' ? Camera : 
                                     social.icon === 'Briefcase' ? Briefcase : Mail;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors hover-lift animate-fadeInScale animate-stagger-5"
                >
                  <IconComponent className="w-4 h-4 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
