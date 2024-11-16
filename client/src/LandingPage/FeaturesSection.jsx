// import React, { useState } from "react";
// import {
//   ChatBubbleBottomCenterTextIcon,
//   EyeIcon,
//   ShieldCheckIcon,
//   CpuChipIcon,
// } from "@heroicons/react/24/outline";
// import { useTheme } from "../Components/ThemeContext";
// import assets from "../assets/assets";

// const features = [
//   {
//     name: "Image-Based Conversations",
//     description:
//       "Engage in interactive conversations directly from uploaded images. Our platform identifies elements within pictures to facilitate meaningful discussions and insights.",
//     icon: ChatBubbleBottomCenterTextIcon,
//   },
//   {
//     name: "Advanced Image Recognition",
//     description:
//       "Our AI-powered image recognition technology identifies objects, scenes, and key attributes in images, enabling enhanced interaction and contextual understanding.",
//     icon: EyeIcon,
//   },
//   {
//     name: "Secure Image Handling",
//     description:
//       "All images are securely processed and stored with encrypted access, ensuring user privacy and data security at every step.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Real-Time Processing",
//     description:
//       "Experience smooth, real-time image analysis and conversation generation, backed by cutting-edge processing technology to ensure efficiency and accuracy.",
//     icon: CpuChipIcon,
//   },
//   {
//     name: "Customizable Workflows",
//     description:
//       "Tailor image analysis workflows to meet your unique requirements with flexible configurations and integrations.",
//     icon: CpuChipIcon,
//   },
//   {
//     name: "Scalable Infrastructure",
//     description:
//       "Our platform is built to scale with your needs, handling large volumes of images without compromising on speed or accuracy.",
//     icon: EyeIcon,
//   },
// ];

// const FeaturesSection = () => {
//   const { theme } = useTheme();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === features.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? features.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div
//       className={`${
//         theme === "dark" ? "bg-gray-900" : "bg-white"
//       } py-24 sm:py-32 transition-colors`}
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Heading: Key Features of QuantumLeap */}
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h3
//             className={`mt-2 text-4xl font-semibold tracking-tight ${
//               theme === "dark" ? "text-white" : "text-gray-900"
//             } sm:text-5xl`}
//           >
//             Key Features of QuantumLeap
//           </h3>
//           <p
//             className={`mt-6 text-xl ${
//               theme === "dark" ? "text-indigo-300" : "text-gray-600"
//             }`}
//           >
//             Discover the Power of Visual Conversations
//           </p>{" "}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
//           {/* SVG Section */}
//           <div className="hidden lg:block">
//             <img
//               src={assets.chatbot}
//               alt="Feature Image"
//               className="w-full h-auto rounded-lg mt-4"
//             />
//           </div>

//           {/* Carousel Section */}
//           <div className="relative">
//             <div
//               className={`p-6 bg-white rounded-lg shadow-lg ${
//                 theme === "dark" ? "text-gray-200" : "text-gray-900"
//               }`}
//             >
//               <div className="flex flex-col items-center text-center">
//                 {/* Icon */}
//                 <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-indigo-600">
//                   {React.createElement(features[currentIndex].icon, {
//                     className: "h-8 w-8 text-white",
//                   })}
//                 </div>
//                 {/* Title */}
//                 <h3
//                   className={`mt-6 text-2xl font-semibold ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {features[currentIndex].name}
//                 </h3>
//                 {/* Description */}
//                 <p
//                   className={`mt-4 text-base ${
//                     theme === "dark" ? "text-gray-400" : "text-gray-900"
//                   }`}
//                 >
//                   {features[currentIndex].description}
//                 </p>
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-6">
//               <button
//                 className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 ${
//                   theme === "dark" ? "text-white" : "text-black"
//                 }`}
//                 onClick={handlePrev}
//               >
//                 <span className="sr-only">Previous</span>
//                 &#8592;
//               </button>
//               <button
//                 className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 ${
//                   theme === "dark" ? "text-white" : "text-black"
//                 }`}
//                 onClick={handleNext}
//               >
//                 <span className="sr-only">Next</span>
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;
import React from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from "../Components/ThemeContext"; // Import useTheme to access theme state
import { fadeIn } from "../constants/Variants"; // Adjust path as necessary

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
  {
    name: "Global Accessibility",
    description:
      "Access our platform from anywhere in the world with reliable performance and consistent uptime, ensuring uninterrupted service for all users.",
    icon: GlobeAltIcon,
  },
  {
    name: "Scalable Infrastructure",
    description:
      "Built on scalable architecture to handle growing demands and ensure seamless integration with your workflow and tools.",
    icon: ServerIcon,
  },
];

function FeaturesSection() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } py-24 sm:py-32 transition-colors`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={fadeIn("up", 0.2)} // Animation: fade in from bottom
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <p
            className={`mt-2 text-4xl font-semibold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } sm:text-5xl`}
          >
            Key Features of QuantumLeap
          </p>
          <p
            className={`mt-6 text-xl ${
              theme === "dark" ? "text-indigo-300" : "text-gray-600"
            }`}
          >
            Discover the Power of Visual Conversations
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          variants={fadeIn("up", 0.4)} // Animation: staggered fade in
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl"
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.2)} // Delay each feature for a staggered animation
                className="relative pl-16"
              >
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
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturesSection;
