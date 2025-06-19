
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Productivity', 'Collaboration', 'Innovation', 'Success'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setTypedText(currentWord.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '50,000+', label: 'Active Users' },
    { icon: <Award className="w-5 h-5" />, value: '99.9%', label: 'Uptime' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '40%', label: 'Productivity Boost' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center mb-8 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all duration-300">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              🎉 Now Available in India - Special Launch Pricing
            </Badge>
          </div>

          {/* Main Heading with Typing Effect */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform Your Team's
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
            Experience the future of project management with AI-powered insights, 
            real-time collaboration, and enterprise-grade security. 
            <span className="font-semibold text-purple-700">Proudly serving teams across India</span> 
            with localized features and pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold group transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center text-purple-600 mb-2">
                  {stat.icon}
                  <span className="ml-2 text-2xl font-bold">{stat.value}</span>
                </div>
                <span className="text-gray-600 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Special India Offer */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 max-w-2xl mx-auto animate-fade-in-delayed">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">🇮🇳</span>
              <h3 className="text-lg font-semibold text-gray-800">Special India Launch Offer</h3>
            </div>
            <p className="text-gray-600 mb-3">
              Get 3 months free + 40% off your first year. Starting from just ₹999/month
            </p>
            <div className="flex items-center justify-center text-sm text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Limited time offer - Valid until December 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
