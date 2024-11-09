import React from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  ShieldCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme to access theme state

const features = [
  {
    name: "Image-Based Conversations",
    description:
      "Engage in interactive conversations directly from uploaded images. Our platform identifies elements within pictures to facilitate meaningful discussions and insights.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Advanced Image Recognition",
    description:
      "Our AI-powered image recognition technology identifies objects, scenes, and key attributes in images, enabling enhanced interaction and contextual understanding.",
    icon: EyeIcon,
  },
  {
    name: "Secure Image Handling",
    description:
      "All images are securely processed and stored with encrypted access, ensuring user privacy and data security at every step.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Real-Time Processing",
    description:
      "Experience smooth, real-time image analysis and conversation generation, backed by cutting-edge processing technology to ensure efficiency and accuracy.",
    icon: CpuChipIcon,
  },
];

function FeaturesSection() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } py-24 sm:py-32 transition-colors`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <p
            className={`mt-2 text-4xl font-semibold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } sm:text-5xl`}
          >
            Key Features of QuantumLeap
          </p>
          <p
            className={`mt-6  text-xl  ${
              theme === "dark" ? "text-indigo-300" : "text-gray-600"
            }`}
          >
            Discover the Power of Visual Conversations
          </p>
        </div>

        {/* Features List */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt
                  className={`text-base font-semibold ${
                    theme === "dark" ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd
                  className={`mt-2 text-base ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
