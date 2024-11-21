import { Command } from "lucide-react";

const Footer = () => (
  <footer className="bg-black border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <a href="#">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-800 flex items-center">
              <Command className="h-6 w-6 mr-2 text-indigo-600" /> 
              QUANTUM-LEAP
            </h3>
          </a>
          <p className="text-gray-400">Making image recognition conversational.</p>
        </div>
        {[{
          title: "Product",
          links: ["Features", "Pricing", "API"]
        }, {
          title: "Company",
          links: ["About", "Blog", "Careers"]
        }, {
          title: "Legal",
          links: ["Privacy", "Terms"]
        }].map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 QUANTUM-LEAP. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
