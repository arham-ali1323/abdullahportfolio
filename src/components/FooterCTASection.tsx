import { Mail, Camera, Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const FooterCTASection = () => {
  const { brand, description, navigation, services, contact, copyright } = portfolioData.footer;

  return (
    <div className="bg-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-semibold mb-4 tracking-wider uppercase">
            Get Started
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Let's <span className="text-purple-600">Work Together</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your brand? Reach out and let's discuss how I can bring your vision
            to life.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fadeInUp">
            <span className="text-gray-600 text-sm">DM on:</span>
            <div className="flex gap-3">
              {contact.socialLinks.map((social, index) => {
                const IconComponent = social.name === 'instagram' ? Camera : 
                                       social.name === 'linkedin' ? Briefcase : Mail;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-purple-100 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-colors group hover-lift animate-fadeInScale animate-stagger-1"
                  >
                    <IconComponent className="w-5 h-5 text-purple-600 group-hover:text-white animate-pulse" />
                  </a>
                );
              })}
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            I typically respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: brand }} />
              <p className="text-gray-600 leading-relaxed text-sm mb-4" dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Follow</h4>
              <div className="flex gap-3 mb-6">
                {contact.socialLinks.map((social, index) => {
                  const IconComponent = social.name === 'instagram' ? Camera : 
                                       social.name === 'linkedin' ? Briefcase : Mail;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-purple-100 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors group"
                    >
                      <IconComponent className="w-5 h-5 text-purple-600 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Contact Me</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-purple-600 hover:underline block mb-2"
                >
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm text-purple-600 hover:underline block"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: copyright }} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterCTASection;
