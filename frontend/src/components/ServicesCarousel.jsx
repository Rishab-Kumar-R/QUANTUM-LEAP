import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Image,
  FileText,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCarousel = () => {
  const services = [
    {
      title: "Text Conversation",
      description:
        "Natural language processing engine for seamless communication and contextual understanding.",
      icon: <MessageSquare />,
      features: ["Real-time responses", "Context awareness"],
      link: "/services/text-conversation",
      color: "bg-indigo-50",
    },
    {
      title: "Visual Analysis",
      description:
        "Extract meaningful insights and detailed descriptions from any image input.",
      icon: <FileText />,
      features: ["Object recognition", "Scene analysis", "Text extraction"],
      link: "/services/visual-analysis",
      color: "bg-indigo-50",
    },
    {
      title: "Image Generation",
      description:
        "Convert textual descriptions into precise visual representations with advanced AI.",
      icon: <Image />,
      features: [
        "Custom art styles",
        "High resolution output",
        "Flexible parameters",
      ],
      link: "/services/image-generation",
      color: "bg-indigo-50",
    },
  ];

  // Custom Arrow Components
  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-indigo-400 rounded-full shadow-lg hover:bg-indigo-600 transition-colors"
    >
      <ChevronRight className="text-white h-6 w-6" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-indigo-400 rounded-full shadow-lg hover:bg-indigo-600 transition-colors"
    >
      <ChevronLeft className="text-white h-6 w-6" />
    </div>
  );

  // Slider settings for react-slick
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Discover Our AI Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Cutting-edge AI capabilities designed to transform your workflow
        </p>
      </div>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-2 sm:px-4">
            <div
              className={`border rounded-lg p-6 sm:p-14 shadow-md max-w-3xl mx-auto transition-all duration-700 ease-in-out`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Icon and Title Section */}
                <div className="flex flex-col items-start space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-indigo-200">
                    {React.cloneElement(service.icon, {
                      className:
                        "w-8 h-8 sm:w-10 sm:h-10 text-indigo-700 stroke-[1.5]",
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-indigo-700 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features and CTA Section */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={service.link}>
                    <button
                      type="button"
                      className="w-full sm:w-72 px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center justify-center mt-4 hover:bg-indigo-700 transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
