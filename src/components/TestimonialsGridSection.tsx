"use client"

import React from 'react';
import { Star } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const TestimonialsGridSection = () => {
  const testimonials = portfolioData.testimonials;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 text-sm font-semibold uppercase">
            Testimonials
          </p>
          <h2 className="text-5xl font-bold text-gray-900">
            What Clients <span className="text-purple-600">Say</span>
          </h2>
        </div>

        {/* Scrolling Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-[600px] overflow-hidden fade-mask">
          
          {[0, 1, 2].map((col) => {
            const items = testimonials.filter((_, i) => i % 3 === col);

            return (
              <div key={col} className="overflow-hidden">
                <div
                  className={`flex flex-col gap-6 animate-scroll ${
                    col === 1
                      ? "duration-[25s]"
                      : col === 2
                      ? "duration-[18s]"
                      : "duration-[20s]"
                  }`}
                >
                  {[...items, ...items].map((t, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border border-gray-100 hover-lift animate-fadeInScale animate-stagger-1"
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-purple-600 text-purple-600 animate-pulse"
                          />
                        ))}
                      </div>

                      {/* User */}
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover hover-lift animate-fadeInScale animate-stagger-2"
                        />
                        <div className="animate-fadeInRight animate-stagger-3">
                          <h4 className="text-sm font-bold text-gray-900">
                            {t.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {t.role}
                          </p>
                        </div>
                      </div>

                      {/* Text */}
                      <p className="text-gray-700 text-sm line-clamp-6">
                        "{t.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default TestimonialsGridSection;