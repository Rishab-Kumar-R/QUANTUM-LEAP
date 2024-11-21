import { Camera, Command, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Features = () => {
  const features = [
    {
      name: 'Image Recognition AI',
      description: 'Uses CNN models to analyze and understand images with high precision.',
      icon: Camera
    },
    {
      name: 'Conversational AI',
      description: 'Engage in insightful conversations about your images with NLP models.',
      icon: MessageSquare
    },
    {
      name: 'Quantum-Inspired Performance',
      description: 'Delivers fast processing using quantum-inspired algorithms.',
      icon: Command
    }
  ];

  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose QUANTUM-LEAP?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Revolutionizing image recognition with cutting-edge AI and quantum-inspired technology.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.name} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
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
    <div className="group relative">
      <div
        className="relative overflow-hidden rounded-xl border border-indigo-900/10 bg-white/50 p-8 shadow-2xl shadow-indigo-600/10 transition-all duration-300 group-hover:shadow-indigo-600/20"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.1), transparent)`
            : 'white'
        }}
      >
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className="absolute inset-0 transition-transform duration-500"
            style={{
              background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 100%)`,
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
            {feature.name}
          </h3>
          <p className="mt-4 text-base leading-7 text-gray-600">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;