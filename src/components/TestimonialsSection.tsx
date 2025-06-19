import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Project Manager",
      company: "Tech Mahindra",
      location: "Bangalore, India",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      testimonial: "Stellar has revolutionized how our team manages projects. The Hindi language support and local payment options made adoption seamless across our Indian offices.",
      metrics: "40% faster delivery",
      verified: true
    },
    {
      name: "Rajesh Kumar",
      role: "CEO",
      company: "StartupIndia Ventures",
      location: "Mumbai, India", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      testimonial: "The AI-powered insights helped us identify bottlenecks we never knew existed. Our productivity increased by 45% in just 3 months. Worth every rupee!",
      metrics: "45% productivity boost",
      verified: true
    },
    {
      name: "Anita Desai",
      role: "Operations Director",
      company: "Wipro",
      location: "Hyderabad, India",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      testimonial: "The enterprise security features give us peace of mind. SOC 2 compliance was crucial for our client requirements. Stellar delivered beyond expectations.",
      metrics: "100% compliance achieved",
      verified: true
    },
    {
      name: "Vikram Singh",
      role: "Tech Lead",
      company: "Infosys",
      location: "Pune, India",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Real-time collaboration across our distributed teams in India has never been smoother. The mobile app works perfectly even with unstable internet connections.",
      metrics: "60% better collaboration",
      verified: true
    },
    {
      name: "Sneha Patel",
      role: "Product Manager",
      company: "Zomato",
      location: "Delhi, India",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: "The custom workflows and integrations helped us streamline our product development process. The ROI was visible within the first month itself.",
      metrics: "3x faster releases",
      verified: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-4 py-2 bg-blue-100 text-blue-800 mb-6">
            <span className="text-2xl mr-2">💼</span>
            Trusted by 5,000+ Indian Teams
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What our customers
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful teams across India who trust Stellar for their project management needs.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Customer Image and Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative">
                    <img
                      src={currentData.image}
                      alt={currentData.name}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg"
                    />
                    {currentData.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900">{currentData.name}</h3>
                    <p className="text-gray-600 font-medium">{currentData.role}</p>
                    <p className="text-gray-500">{currentData.company}</p>
                    <div className="flex items-center justify-center lg:justify-start mt-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {currentData.location}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 font-medium">
                    "{currentData.testimonial}"
                  </blockquote>
                  
                  {/* Rating and Metrics */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0">
                      {[...Array(currentData.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-600 font-medium">5.0</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {currentData.metrics}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full shadow-lg bg-white hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full shadow-lg bg-white hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-gray-600 mb-8 font-medium">Trusted by leading companies across India</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold text-blue-600">TCS</div>
            <div className="text-2xl font-bold text-red-600">Wipro</div>
            <div className="text-2xl font-bold text-purple-600">Infosys</div>
            <div className="text-2xl font-bold text-green-600">HCL</div>
            <div className="text-2xl font-bold text-orange-600">Tech Mahindra</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
