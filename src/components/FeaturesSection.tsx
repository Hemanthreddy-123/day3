
import React from 'react';
import { Zap, Users, BarChart3, Shield, Clock, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Lightning Fast",
      description: "Built for speed with real-time updates and instant sync across all devices."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that keep your team aligned and productive."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your projects with powerful analytics and reporting."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Time Tracking",
      description: "Built-in time tracking and productivity monitoring for better project management."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Mobile Ready",
      description: "Native mobile apps for iOS and Android with full feature parity."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your workflow and boost your team's productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 bg-white">
              <CardContent className="p-8">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-medium">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
            And much more coming soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
