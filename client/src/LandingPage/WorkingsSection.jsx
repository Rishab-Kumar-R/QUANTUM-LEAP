import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Upload,
  Brain,
  MessageSquare,
  Sparkles,
  Info,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

const Card = ({ children, className }) => (
  <div className={`rounded-xl border transition-all duration-500 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const WorkingsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const steps = [
    {
      title: "Upload Your Image",
      icon: <Upload className="w-12 h-12" />,
      description:
        "Start by uploading any image you'd like to discuss. Our system supports JPG, PNG, and WebP formats.",
      tip: "For best results, ensure your image is clear and well-lit.",
      features: [
        "Drag & Drop support",
        "Multi-format support",
        "Instant preview",
      ],
    },
    {
      title: "AI Processing",
      icon: <Brain className="w-12 h-12" />,
      description:
        "Our advanced CNN analyzes your image in real-time to identify objects, scenes, and key features.",
      tip: "The AI processing usually takes 2-3 seconds.",
      features: ["Object detection", "Scene recognition", "Feature extraction"],
    },
    {
      title: "Interactive Chat",
      icon: <MessageSquare className="w-12 h-12" />,
      description:
        "Ask any questions about the image. Our NLP system generates detailed, context-aware responses.",
      tip: "Try asking specific questions about objects, colors, or actions in the image.",
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-turn conversation",
      ],
    },
    {
      title: "Explore & Learn",
      icon: <Sparkles className="w-12 h-12" />,
      description:
        "Continue the conversation! Ask follow-up questions or upload new images to discuss.",
      tip: "You can reference specific parts of the image in your questions.",
      features: [
        "Detail exploration",
        "Visual explanations",
        "Knowledge discovery",
      ],
    },
  ];

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* <NavBar /> */}
      <div
        className={`min-h-screen flex justify-center items-center bg-white  dark:bg-gray-900`}
      >
        {/* Fullscreen Card containing everything */}
        <Card className="w-full max-w-5xl border-4 border-gray-100 dark:border-gray-800 dark:bg-gray-800">
          <CardContent>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                Welcome to Smart Image Chat
              </h1>
              <p className="text-indigo-700 text-lg max-w-2xl mx-auto dark:text-indigo-300">
                Experience the future of image understanding with our AI-powered
                conversation system.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-3 bg-indigo-700 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-4">
                {steps.map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <button
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 transform
                    ${
                      activeStep >= index
                        ? "bg-indigo-700 text-white shadow-lg hover:bg-indigo-600"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
                    }
                    ${hoveredStep === index ? "scale-110" : "scale-100"}
                  `}
                    >
                      {activeStep > index ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        index + 1
                      )}
                    </button>
                    <span
                      className={`mt-2 text-sm font-medium transition-colors duration-300
                  ${
                    activeStep >= index
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                    >
                      {steps[index].title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 gap-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className={`transform transition-all duration-500 hover:shadow-xl
                ${
                  index === activeStep
                    ? "scale-100 opacity-100 border border-indigo-200 bg-white dark:bg-gray-700 dark:border-gray-500" // Slightly dimmer border for dark mode
                    : "scale-95 opacity-40 hover:opacity-70"
                }
              `}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div
                        className={`flex-shrink-0 p-4 rounded-full transition-colors duration-300
                    ${
                      index === activeStep
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-400"
                        : "bg-gray-100 text-gray-400 dark:bg-gray-600 dark:text-gray-300"
                    }`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-grow space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                          {step.title}
                          {index === activeStep && (
                            <span className="inline-flex items-center px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full dark:bg-indigo-700 dark:text-indigo-300">
                              Active Step
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-700 text-lg dark:text-gray-300">
                          {step.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          {step.features.map((feature, fIndex) => (
                            <div
                              key={fIndex}
                              className="flex items-center gap-2 text-gray-900 dark:text-gray-200"
                            >
                              <ArrowRight className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tip Section */}
                        <div className="flex items-center gap-2 mt-4 p-4 bg-indigo-50 rounded-lg shadow-md dark:bg-indigo-800 dark:text-indigo-200">
                          <Info className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
                          <p className="text-gray-700 dark:text-gray-300">
                            {step.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2
              ${
                activeStep === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-700 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl dark:bg-indigo-600 dark:text-white"
              }`}
                disabled={activeStep === 0}
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Previous
              </button>
              <button
                onClick={() =>
                  setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
                }
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2
              ${
                activeStep === steps.length - 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-indigo-700 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl dark:bg-indigo-600 dark:text-white"
              }`}
                disabled={activeStep === steps.length - 1}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Start Button */}
            {activeStep === steps.length - 1 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-indigo-600 dark:text-white">
                  Start Using the App
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* <FooterSection /> */}
    </>
  );
};

export default WorkingsSection;
