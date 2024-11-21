import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Image, FileText, ArrowRight, Users, Zap, Lock, Star, ChevronRight, ArrowUpRight } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const ServiceCard = ({ service }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    handleMouseMove(e);
  };

  return (
    <Link to={service.link} className="group block">
      <div
        className="relative border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out h-full flex flex-col rounded-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.1), transparent)`
            : 'white',
          transition: 'background 0.3s ease-out'  // Animate the background
        }}
      >
        <div className="relative p-6 flex-grow">
          <div className="mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg">
              {React.cloneElement(service.icon, {
                className: 'w-6 h-6 text-indigo-600',
                strokeWidth: 1.5
              })}
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-900 mb-2">
            {service.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {service.description}
          </p>
        </div>

        <div className="p-6 flex-grow">
          <div className="space-y-4">
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-600">
                  <div className="w-1 h-1 bg-indigo-600 rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>

            <button className="flex items-center space-x-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};


const TestimonialCard = ({ content, author, role, company }) => (
  <div className="bg-white p-6 rounded-lg space-y-4 hover:shadow-lg transition-all duration-200">
    <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    <div>
      <p className="text-sm font-medium text-indigo-700">{author}</p>
      <p className="text-sm text-gray-500">{role}, {company}</p>
    </div>
  </div>
);

const UseCaseCard = ({ title, description, link }) => (
  <a href={link} className="group block bg-white p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </a>
);

const Services = () => {
  const services = [
    {
      title: "Text Conversation",
      description: "Natural language processing engine for seamless communication and contextual understanding.",
      icon: <MessageSquare />,
      features: [
        "Real-time responses",
        "Context awareness",
      ],
      link: "/services/text-conversation"
    },
    {
      title: "Visual Analysis",
      description: "Extract meaningful insights and detailed descriptions from any image input.",
      icon: <FileText />,
      features: [
        "Object recognition",
        "Scene analysis",
        "Text extraction"
      ],
      link: "/services/visual-analysis"
    },
    {
      title: "Image Generation",
      description: "Convert textual descriptions into precise visual representations with advanced AI.",
      icon: <Image />,
      features: [
        "Custom art styles",
        "High resolution output",
        "Flexible parameters"
      ],
      link: "/services/image-generation"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600 mb-4">
              <Zap className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Powered by QUANTUM-LEAP
            </div>
            <h1 className="text-4xl mb-4 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 sm:text-6xl text-center">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the next generation of AI-powered conversation and image processing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 opacity-50 my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24" />

      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-2 underline">Popular Use Cases</h2>
            <p className="text-gray-600">Discover how others are leveraging our AI services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <UseCaseCard
              title="Customer Support Automation"
              description="Learn how companies automate 75% of customer inquiries using our conversation AI."
              link="#"
            />
            <UseCaseCard
              title="Content Creation"
              description="See how creators generate unique visuals for their campaigns in minutes."
              link="#"
            />
            <UseCaseCard
              title="Data Analysis"
              description="Explore how researchers extract insights from image databases automatically."
              link="#"
            />
          </div>

          <a href="#" className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700">
            View all use cases
            <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg mb-4">
                <Lock className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-sm text-gray-600">Bank-grade encryption and compliance with major security standards.</p>
            </div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg mb-4">
                <Users className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-sm text-gray-600">24/7 technical support and dedicated account management.</p>
            </div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-lg mb-4">
                <Star className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Industry Leading API</h3>
              <p className="text-sm text-gray-600">Flexible, scalable, and thoroughly documented API endpoints.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 mb-2 underline">What Our Clients Say</h2>
            <p className="text-gray-600">Hear from the leaders in the industry who trust QUANTUM-LEAP</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              content="The API integration was seamless, and the results exceeded our expectations. The response time is incredible."
              author="Sarah Chen"
              role="CTO"
              company="TechFlow"
            />
            <TestimonialCard
              content="We've reduced our content creation time by 60% using their image generation service. Game-changer for our team."
              author="Michael Rodriguez"
              role="Creative Director"
              company="DesignHub"
            />
            <TestimonialCard
              content="The accuracy of their visual analysis API is unmatched. It's become an essential part of our workflow."
              author="David Kim"
              role="Lead Developer"
              company="DataCraft"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
