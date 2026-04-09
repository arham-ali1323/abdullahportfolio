import React from "react";
import { MessageCircle, Lightbulb, Link2, Send } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const ProcessWorkflowSection = () => {
  const steps = portfolioData.process;

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-semibold mb-4 tracking-wider uppercase">
            Process
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How We <span className="text-purple-600">Work Together</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A simple, collaborative process designed to bring your vision to
            life with minimal stress.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent =
              step.icon === "MessageCircle"
                ? MessageCircle
                : step.icon === "Lightbulb"
                  ? Lightbulb
                  : step.icon === "Link2"
                    ? Link2
                    : step.icon === "Send"
                      ? Send
                      : MessageCircle;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative group hover-lift animate-fadeInUp animate-stagger-1"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg md:-left-4 md:translate-x-0 animate-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors animate-pulse">
                  <IconComponent className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 animate-fadeInRight animate-stagger-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm animate-fadeInUp animate-stagger-3">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessWorkflowSection;
