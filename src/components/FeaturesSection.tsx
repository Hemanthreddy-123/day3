
import React, { useState } from 'react';
import { Zap, Users, BarChart3, Shield, Clock, Smartphone, Bot, Globe, Workflow, Database, MessageSquare, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const coreFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Automation",
      description: "Smart task prioritization and automated workflows powered by advanced AI algorithms.",
      details: "Our AI learns from your team's patterns and automatically suggests optimizations."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Real-time Collaboration",
      description: "Seamless collaboration with live editing, instant messaging, and video calls.",
      details: "Work together in real-time with advanced conflict resolution and sync technology."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Advanced Analytics",
      description: "Deep insights with predictive analytics and customizable dashboards.",
      details: "Get actionable insights with machine learning-powered trend analysis."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with zero-trust architecture and compliance standards.",
      details: "SOC 2 Type II, GDPR compliant with end-to-end encryption."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Smart Time Tracking",
      description: "Automatic time tracking with productivity insights and billing integration.",
      details: "AI-powered time detection with detailed productivity analytics."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Mobile-First Design",
      description: "Native mobile apps with offline sync and full feature parity.",
      details: "Work seamlessly across all devices with intelligent sync and offline capabilities."
    }
  ];

  const advancedFeatures = [
    {
      icon: <Bot className="w-6 h-6 text-purple-600" />,
      title: "AI Assistant",
      description: "Smart project insights and automated task generation"
    },
    {
      icon: <Workflow className="w-6 h-6 text-blue-600" />,
      title: "Custom Workflows",
      description: "Visual workflow builder with conditional logic"
    },
    {
      icon: <Database className="w-6 h-6 text-green-600" />,
      title: "Advanced Integrations",
      description: "Connect with 100+ tools and custom APIs"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
      title: "Smart Notifications",
      description: "AI-filtered notifications to reduce noise"
    },
    {
      icon: <FileText className="w-6 h-6 text-pink-600" />,
      title: "Document Management",
      description: "Version control and collaborative editing"
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "Multi-language Support",
      description: "Available in 25+ languages including Hindi"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-purple-100 text-purple-800 mb-6">
            ✨ Advanced Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              succeed & scale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your workflow, boost productivity, and scale with your business.
          </p>
        </div>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="core" className="text-lg">Core Features</TabsTrigger>
            <TabsTrigger value="advanced" className="text-lg">Advanced Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="core">
            {/* Interactive Core Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Feature Cards */}
              <div className="space-y-4">
                {coreFeatures.map((feature, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeFeature === index 
                        ? 'border-2 border-purple-300 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50' 
                        : 'border border-gray-200 hover:border-purple-200 hover:shadow-md'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          activeFeature === index ? 'bg-white shadow-md scale-110' : 'bg-gray-50'
                        }`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Feature Detail Display */}
              <div className="lg:sticky lg:top-8">
                <Card className="h-96 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
                  <CardContent className="p-8 h-full flex flex-col justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                    <div className="relative z-10">
                      <div className="mb-6 transform scale-150">
                        {coreFeatures[activeFeature].icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {coreFeatures[activeFeature].title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {coreFeatures[activeFeature].details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            {/* Advanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-flex p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
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
          </TabsContent>
        </Tabs>

        {/* India-Specific Features Highlight */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-green-50 border-2 border-orange-200 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🇮🇳</span>
              <h3 className="text-2xl font-bold text-gray-900">Built for Indian Teams</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Special features designed specifically for Indian businesses and work culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-2xl mb-3">🏪</div>
              <h4 className="font-semibold text-gray-900 mb-2">GST Integration</h4>
              <p className="text-gray-600 text-sm">Automatic GST calculations and compliant invoicing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-2xl mb-3">🏦</div>
              <h4 className="font-semibold text-gray-900 mb-2">UPI Payments</h4>
              <p className="text-gray-600 text-sm">Quick payments with UPI, net banking, and cards</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-2xl mb-3">🌏</div>
              <h4 className="font-semibold text-gray-900 mb-2">Regional Language</h4>
              <p className="text-gray-600 text-sm">Full Hindi support with local date/time formats</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 font-medium shadow-lg">
            <span className="w-3 h-3 bg-purple-500 rounded-full mr-4 animate-pulse"></span>
            🚀 New features added every month - Stay ahead of the curve
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
