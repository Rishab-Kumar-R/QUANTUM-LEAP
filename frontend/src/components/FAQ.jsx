import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.height = `${ref.scrollHeight}px`;
        } else {
          ref.style.height = "0px";
        }
      }
    });
  }, [openIndex]);

  const faqs = [
    {
      question: "What is QUANTUM-LEAP?",
      answer:
        "QUANTUM-LEAP is an advanced Conversational Image Recognition Chatbot that processes images and provides AI-driven insights using custom-built CNN and NLP models.",
    },
    {
      question: "How does image recognition work?",
      answer:
        "Our model leverages a convolutional neural network (CNN) to analyze and extract features from images, followed by natural language processing (NLP) to generate relevant responses based on the visual data.",
    },
    {
      question: "Can I use QUANTUM-LEAP for any image?",
      answer:
        "QUANTUM-LEAP is optimized for a wide range of images. However, for the best results, it performs exceptionally well with high-quality images that contain distinct and identifiable objects.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. Upload an image through our platform and watch how QUANTUM-LEAP interprets the content in real-time, providing you with insightful and meaningful information.",
    },
  ];

  return (
    <div id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to some of the most common questions about QUANTUM-LEAP.
          </p>
        </div>

        <div className="bg-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 border-b transition duration-300`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left text-gray-900 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180 text-indigo-600" : "rotate-0 text-indigo-400"
                  }`}
                >
                  {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: "0px" }}
              >
                <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
