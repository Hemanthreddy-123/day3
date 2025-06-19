
import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Mobile Apps', href: '#mobile' },
      { name: 'API Docs', href: '#api' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Blog', href: '#blog' },
      { name: 'Partners', href: '#partners' },
      { name: 'Investors', href: '#investors' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Status Page', href: '#status' },
      { name: 'Training', href: '#training' },
      { name: 'Webinars', href: '#webinars' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' },
      { name: 'Security', href: '#security' },
      { name: 'Data Processing', href: '#data' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#twitter', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#linkedin', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#github', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, href: '#email', label: 'Email' }
  ];

  const indianOffices = [
    { city: 'Mumbai', address: 'BKC, Mumbai 400051', phone: '+91 22 6789 0123' },
    { city: 'Bangalore', address: 'Koramangala, Bangalore 560034', phone: '+91 80 4567 8901' },
    { city: 'Delhi', address: 'Connaught Place, New Delhi 110001', phone: '+91 11 2345 6789' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* India-specific section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🇮🇳</span>
              <h3 className="text-2xl font-bold">Proudly Serving India</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built for Indian businesses with local support, compliance, and features that matter to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {indianOffices.map((office, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="text-xl font-semibold mb-2">{office.city}</div>
                <div className="flex items-center justify-center mb-2 text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  {office.address}
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  {office.phone}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-600 hover:bg-green-700">
              <Globe className="w-4 h-4 mr-2" />
              Available in Hindi
            </Badge>
            <Badge className="bg-blue-600 hover:bg-blue-700">
              💳 UPI & Local Payments
            </Badge>
            <Badge className="bg-purple-600 hover:bg-purple-700">
              🏛️ GST Compliant
            </Badge>
            <Badge className="bg-orange-600 hover:bg-orange-700">
              📞 24/7 Indian Support
            </Badge>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">Stellar</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your team's productivity with the modern project management platform 
              designed for today's ambitious teams across India and beyond.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <Button className="rounded-l-none bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-6 text-purple-400">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-blue-400">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-green-400">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-orange-400">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Stellar. All rights reserved. | Made with ❤️ in India
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🔒 SOC 2 Compliant</span>
              <span>🛡️ GDPR Ready</span>
              <span>🇮🇳 Data stored in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
