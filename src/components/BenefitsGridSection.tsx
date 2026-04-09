import React from "react";
import {
  Clock,
  RefreshCw,
  MessageSquare,
  Award,
  Sparkles,
  Heart,
} from "lucide-react";
import portfolioData from "../data/portfolio.json";

const BenefitsGridSection = () => {
  const benefits = portfolioData.benefits;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-semibold mb-4 tracking-wider uppercase">
            Why Choose Me
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Benefits of{" "}
            <span className="text-purple-600">Working Together</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you work with me, you get more than just a designer. You get a
            creative partner dedicated to your brand's success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent =
              benefit.icon === "Clock"
                ? Clock
                : benefit.icon === "RefreshCw"
                  ? RefreshCw
                  : benefit.icon === "MessageSquare"
                    ? MessageSquare
                    : benefit.icon === "Award"
                      ? Award
                      : benefit.icon === "Sparkles"
                        ? Sparkles
                        : benefit.icon === "Heart"
                          ? Heart
                          : Clock;

            return (
              <div
                key={index}
                className="flex gap-4 items-start group hover-lift animate-fadeInUp animate-stagger-1 p-4"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors animate-pulse">
                  <IconComponent className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </div>

                <div className="animate-fadeInRight animate-stagger-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGridSection;
