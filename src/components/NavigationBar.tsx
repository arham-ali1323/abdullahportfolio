"use client"

import React, { useState, useEffect } from 'react';
import { Mail, Camera, Briefcase, Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const CompleteNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('About');
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { logo, navLinks } = portfolioData.navigation;

  return (
    <div className="relative">
      {/* Main Navigation */}
      <nav className={`fixed top-5 left-1/2 -translate-x-1/2 w-[95%] xl:w-full max-w-7xl z-50 bg-white rounded-2xl shadow-lg transition-all duration-300 ${
        scrollPosition > 50 ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrollPosition > 50 ? 'h-14' : 'h-16'
          }`}>
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-bold text-gray-900"
            >
              {logo}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.name);
                    scrollToSection(link.href.replace('#', ''));
                  }}
                  className={`relative text-sm font-medium pb-3 transition-colors ${
                    activeLink === link.name
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Get Started Button */}
            <button className="hidden lg:block bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-full font-medium transition-colors shadow-lg shadow-purple-200">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                  scrollToSection(link.href.replace('#', ''));
                }}
                className={`block py-2 text-base font-medium transition-colors ${
                  activeLink === link.name
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompleteNavigation;