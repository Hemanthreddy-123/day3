
import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: { monthly: "Free", annual: "Free" },
      priceInr: { monthly: "₹0", annual: "₹0" },
      originalPrice: null,
      period: isAnnual ? "forever" : "forever",
      description: "Perfect for small teams getting started",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      features: [
        "Up to 5 team members",
        "3 projects",
        "Basic task management",
        "Email support",
        "Mobile apps",
        "5GB cloud storage"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: { monthly: "$15", annual: "$12" },
      priceInr: { monthly: "₹1,249", annual: "₹999" },
      originalPrice: { monthly: "₹2,099", annual: "₹1,666" },
      period: isAnnual ? "per user/month" : "per user/month",
      description: "Everything you need for growing teams",
      icon: <Star className="w-6 h-6 text-purple-600" />,
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced analytics & reporting",
        "Priority support (24/7)",
        "Custom integrations",
        "Time tracking & productivity insights",
        "Advanced permissions & security",
        "100GB cloud storage",
        "API access",
        "Custom workflows"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", annual: "Custom" },
      priceInr: { monthly: "Contact Us", annual: "Contact Us" },
      originalPrice: null,
      period: "tailored pricing",
      description: "Advanced features for large organizations",
      icon: <Crown className="w-6 h-6 text-gold-600" />,
      features: [
        "Everything in Professional",
        "Advanced security & compliance",
        "Custom workflows & automation",
        "Dedicated success manager",
        "99.9% SLA guarantee",
        "On-premise deployment option",
        "Advanced compliance (SOC 2, HIPAA)",
        "Unlimited cloud storage",
        "White-label solutions",
        "Custom training & onboarding",
        "Advanced audit logs"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "gold"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-purple-100 text-purple-800 mb-6">
            <span className="text-2xl mr-2">🇮🇳</span>
            Special India Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              pricing for India
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All prices in Indian Rupees with special launch discounts.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                  !isAnnual 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all relative ${
                  isAnnual 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2">
                  Save 40%
                </Badge>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-2xl transition-all duration-500 ${
                plan.popular 
                  ? 'border-2 border-purple-300 shadow-xl scale-105 bg-gradient-to-br from-white to-purple-50' 
                  : 'border border-gray-200 shadow-lg hover:shadow-xl bg-white hover:scale-102'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className="flex items-center justify-center mb-4">
                  {plan.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {isAnnual ? plan.priceInr.annual : plan.priceInr.monthly}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">
                        {isAnnual ? plan.originalPrice.annual : plan.originalPrice.monthly}
                      </span>
                    )}
                  </div>
                  {plan.period && (
                    <div className="text-gray-600">
                      <span>/{plan.period}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        USD: {isAnnual ? plan.price.annual : plan.price.monthly}
                        {plan.period !== "forever" && `/${plan.period}`}
                      </div>
                    </div>
                  )}
                  {plan.originalPrice && (
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      Save 40% - Limited Time
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                  {plan.popular && <Zap className="w-4 h-4 ml-2" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional India-specific Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">India-First Features</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-language support (Hindi, English)</li>
              <li>• Local data centers for faster performance</li>
              <li>• GST-compliant invoicing</li>
              <li>• UPI & local payment methods</li>
              <li>• Indian business hours support</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">Trusted by Indian Teams</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• 5,000+ teams across India</li>
              <li>• 99.9% uptime SLA</li>
              <li>• GDPR & data privacy compliant</li>
              <li>• 24/7 customer support in English & Hindi</li>
              <li>• Free migration from other tools</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution or have questions about pricing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
