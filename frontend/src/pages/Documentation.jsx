import React, { useState } from "react";
import {
  Book,
  Code2,
  Terminal,
  Cloud,
  Layers,
  ArrowRight,
  Check,
  Lock,
  GitBranch,
  ShieldCheck,
  Target,
  BarChart2,
  Cpu,
  Activity,
  Database,
  BookOpen,
  Globe,
  Github,
} from "lucide-react";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    {
      key: "overview",
      icon: Book,
      title: "Overview",
      description: "Project introduction",
    },
    {
      key: "setup",
      icon: Terminal,
      title: "Getting Started",
      description: "Installation guide",
    },
    {
      key: "features",
      icon: Layers,
      title: "Features",
      description: "Detailed capabilities",
    },
    {
      key: "advanced",
      icon: Code2,
      title: "Advanced Usage",
      description: "Technical details",
    },
    {
      key: "api",
      icon: Cloud,
      title: "API Reference",
      description: "Endpoint documentation",
    },
    {
      key: "security",
      icon: Lock,
      title: "Security",
      description: "Best practices",
    },
    {
      key: "contribute",
      icon: GitBranch,
      title: "Contributing",
      description: "How to help",
    },
  ];

  const sections = {
    overview: (
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">
            Image Recognition AI Chatbot
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Revolutionizing visual understanding through advanced machine
            learning and natural language processing technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Precision AI",
              description:
                "Industry-leading 95% accuracy in image recognition and analysis",
            },
            {
              icon: Target,
              title: "Multilingual Support",
              description:
                "Comprehensive language support across 20+ global languages",
            },
            {
              icon: BarChart2,
              title: "Scalable Architecture",
              description:
                "Microservices-based design for high performance and reliability",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="mb-4 p-3 bg-indigo-50 rounded-full inline-block">
                <feature.icon className="text-indigo-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    setup: (
      <div className="space-y-8">
        {/* Card-Style Header */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Quick Setup Guide
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-center">
            Get started with your AI chatbot quickly and efficiently using this
            step-by-step guide.
          </p>
        </div>

        {/* Installation and Requirements */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Terminal className="mr-4 text-indigo-600" />
            Quick Start Installation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <pre className="bg-white border rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>
                  {`# Clone repository
    git clone https://github.com/your-project/ai-chatbot
    
    # Install dependencies
    npm install
    
    # Configure environment
    cp .env.example .env
    
    # Run development server
    npm run dev`}
                </code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="space-y-3">
                {[
                  "Node.js 18.0+",
                  "npm 8.0+",
                  "Python 3.9+",
                  "CUDA-compatible GPU (recommended)",
                ].map((req, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="mr-2 text-green-500" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Environment Configuration and Dependencies */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Environment Configuration
            </h3>
            <p className="text-gray-600 mb-4">
              Set up your .env file with the following key configurations:
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm">
              {`API_KEY=your_openai_api_key
    MODEL_PATH=/path/to/ml/model
    DEBUG_MODE=false
    LOG_LEVEL=info
    MAX_CONCURRENT_REQUESTS=10`}
            </pre>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Dependency Management
            </h3>
            <p className="text-gray-600 mb-4">
              We use a combination of npm for frontend and pip for machine
              learning dependencies.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm">
              {`# Python dependencies
    pip install -r requirements.txt
    
    # Node.js dependencies
    npm install
    
    # Verify installation
    npm run test
    python -m unittest discover`}
            </pre>
          </div>
        </div>
      </div>
    ),
    features: (
      <div className="space-y-8">
        {/* Card-Style Header with New Gradient */}
        <div className="bg-gradient-to-br from-blue-800 to-teal-600 text-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-center">Core Features</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-center">
            Explore the cutting-edge capabilities that power your AI chatbot.
          </p>
        </div>

        {/* Feature List */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Image Recognition</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Multi-object detection</li>
                <li>✓ Semantic segmentation</li>
                <li>✓ Real-time processing</li>
                <li>✓ Custom model training support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">AI Capabilities</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Natural language understanding</li>
                <li>✓ Contextual image description</li>
                <li>✓ Adaptive learning models</li>
                <li>✓ Multilingual interpretation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    security: (
      <div className="space-y-8">
        {/* Card-Style Header with Icon and Gradient */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-10 rounded-2xl shadow-xl">
          <div className="flex items-center mb-4">
            <ShieldCheck className="w-10 h-10 mr-4 text-red-200" />
            <h1 className="text-4xl font-bold">Security Best Practices</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ensure your application remains secure by following these best
            practices.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* API Key Management */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-red-600 mr-4" />
              <h3 className="text-xl font-semibold">API Key Management</h3>
            </div>
            <p className="text-gray-600">
              Always secure your API keys and do not expose them publicly. Use
              environment variables to store sensitive keys.
            </p>
          </div>

          {/* Data Encryption */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-8 h-8 text-orange-600 mr-4" />
              <h3 className="text-xl font-semibold">Data Encryption</h3>
            </div>
            <p className="text-gray-600">
              Make sure all sensitive data is encrypted both in transit and at
              rest, ensuring privacy and security.
            </p>
          </div>

          {/* Two-Factor Authentication */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-xl font-semibold">
                Two-Factor Authentication
              </h3>
            </div>
            <p className="text-gray-600">
              Enable two-factor authentication (2FA) for users to add an extra
              layer of security to your application.
            </p>
          </div>

          {/* Regular Audits */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-semibold">Regular Audits</h3>
            </div>
            <p className="text-gray-600">
              Conduct regular security audits to identify potential
              vulnerabilities in your code and infrastructure.
            </p>
          </div>

          {/* Secure Dependencies */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-teal-600 mr-4" />
              <h3 className="text-xl font-semibold">Secure Dependencies</h3>
            </div>
            <p className="text-gray-600">
              Keep your dependencies up to date and use trusted sources to
              minimize vulnerabilities in third-party libraries.
            </p>
          </div>

          {/* User Permissions */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-indigo-600 mr-4" />
              <h3 className="text-xl font-semibold">User Permissions</h3>
            </div>
            <p className="text-gray-600">
              Implement role-based access control (RBAC) to ensure users only
              have access to the resources they need.
            </p>
          </div>
        </div>
      </div>
    ),
    api: (
      <div className="space-y-8">
        {/* Card-Style Header with Icon and Dark Gradient */}
        <div className="bg-gradient-to-br from-purple-500 to-gray-600 text-white p-10 rounded-2xl shadow-xl">
          <div className="flex items-center mb-4">
            <Cloud className="w-10 h-10 mr-4 text-blue-200" />
            <h1 className="text-4xl font-bold">API Reference</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            All you need to know about integrating with the AI Chatbot via our
            RESTful API.
          </p>
        </div>

        {/* API Endpoints */}
        <div className="space-y-6">
          {/* Get Image Description Endpoint */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
              <h4 className="text-xl font-semibold">Get Image Description</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Endpoint to analyze and describe an image.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
              {`GET /api/v1/describe
    
        Response:
        {
          "description": "A photo of a dog playing in the park.",
          "confidence": 0.98
        }`}
            </pre>
          </div>

          {/* Translate Description Endpoint */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-green-600 mr-4" />
              <h4 className="text-xl font-semibold">Translate Description</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Translate the generated description into a different language.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm overflow-x-auto">
              {`POST /api/v1/translate
    
        Payload:
        {
          "text": "A photo of a dog playing in the park.",
          "target_language": "es"
        }
    
        Response:
        {
          "translated_text": "Una foto de un perro jugando en el parque."
        }`}
            </pre>
          </div>
        </div>
      </div>
    ),
    advanced: (
      <div className="space-y-8">
        {/* Card-Style Header */}
        <div className="bg-gradient-to-br from-indigo-800 via-blue-700 to-indigo-600 text-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Advanced Technical Usage
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-center">
            Dive deeper into technical configurations and optimization
            techniques for high-performance applications.
          </p>
        </div>

        {/* Advanced Usage Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Custom Model Integration */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">
              Custom Model Integration
            </h3>
            <p className="text-gray-600">
              Learn how to integrate your own machine learning models into the
              system for specific use cases.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm mt-4 overflow-x-auto">
              {`# Load custom model
      model = load_model("/path/to/custom_model")`}
            </pre>
          </div>

          {/* Performance Tuning */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">Performance Tuning</h3>
            <p className="text-gray-600">
              Explore ways to optimize the performance of your AI models with
              batch processing and parallelization.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm mt-4 overflow-x-auto">
              {`# Increase batch size for better throughput
      batch_size = 64`}
            </pre>
          </div>

          {/* Model Evaluation */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">Model Evaluation</h3>
            <p className="text-gray-600">
              Learn techniques for evaluating your model's accuracy, precision,
              and recall.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm mt-4 overflow-x-auto">
              {`# Evaluate model performance
      accuracy = model.evaluate(test_data)`}
            </pre>
          </div>

          {/* Hyperparameter Tuning */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">
              Hyperparameter Tuning
            </h3>
            <p className="text-gray-600">
              Optimize your model's hyperparameters to achieve the best results.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-3 text-sm mt-4 overflow-x-auto">
              {`# Tune hyperparameters
      param_grid = {'batch_size': [32, 64], 'learning_rate': [0.01, 0.001]}
      grid_search = GridSearchCV(model, param_grid, cv=3)`}
            </pre>
          </div>
        </div>
      </div>
    ),

    contribute: (
      <div className="space-y-8">
        {/* Section Header with Gradient */}
        <div className="bg-gradient-to-br from-yellow-600 to-amber-600 text-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Contributing</h2>
          <p className="text-xl opacity-90 max-w-2xl">
            Help us improve the project! Here's how you can contribute.
          </p>
        </div>
        {/* Reporting Bugs */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center mb-6">
            <GitBranch className="w-8 h-8 text-yellow-600 mr-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Reporting Bugs
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            Found a bug? Please open a GitHub issue! Include a clear description
            of the problem, steps to reproduce, and any relevant information
            (logs, screenshots, etc.).
          </p>
          <div className="flex items-center space-x-2 text-gray-500">
            {/* If using react-icons for GitHub, replace <Github> with <FaGithub> */}
            <Github className="w-5 h-5" />
            <a
              href="https://github.com/your-project/ai-chatbot/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Report a Bug on GitHub
            </a>
          </div>
        </div>
        {/* Pull Requests */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center mb-6">
            {/* If using react-icons for GitHub, replace <Github> with <FaGithub> */}
            <Github className="w-8 h-8 text-yellow-600 mr-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Submitting Pull Requests
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            Want to contribute code? Follow these steps:
          </p>
          <pre className="bg-gray-50 border rounded-lg p-4 text-sm text-gray-600">
            {`# Fork the repository
      git clone https://github.com/your-project/ai-chatbot
      
      # Create a new branch for your feature
      git checkout -b feature/my-feature
      
      # Make your changes and commit them
      git commit -m "Add new feature"
      
      # Push your branch to your fork
      git push origin feature/my-feature
      
      # Open a Pull Request on GitHub`}
          </pre>
          <div className="flex items-center space-x-2 text-gray-500 mt-4">
            {/* If using react-icons for GitHub, replace <Github> with <FaGithub> */}
            <Github className="w-5 h-5" />
            <a
              href="https://github.com/your-project/ai-chatbot/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Submit a Pull Request on GitHub
            </a>
          </div>
        </div>
        {/* Code of Conduct */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center mb-6">
            <ShieldCheck className="w-8 h-8 text-yellow-600 mr-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Code of Conduct
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            We follow a code of conduct to ensure a positive, productive, and
            respectful environment for all contributors. Please make sure to
            read our code of conduct before participating.
          </p>
          <div className="flex items-center space-x-2 text-gray-500">
            <Globe className="w-5 h-5" />
            <a
              href="https://github.com/your-project/ai-chatbot/blob/main/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View the Code of Conduct
            </a>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header Section */}
      <section aria-labelledby="documentation-heading" className="py-16">
        <h1
          id="documentation-heading"
          className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 sm:text-6xl text-center"
        >
          Documentation
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto text-center">
          Explore the technical details, setup guide, and API references to get
          the most out of our AI-powered chatbot system.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-72 flex-shrink-0 border-r border-gray-200 bg-white p-6 space-y-3 overflow-y-auto max-h-screen sticky top-0 rounded-3xl mb-10">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                activeSection === item.key
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <div className="flex items-center">
                <item.icon className="mr-4 w-6 h-6" />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500">
                    {item.description}
                  </div>
                </div>
                {activeSection === item.key && (
                  <ArrowRight className="ml-auto text-indigo-600 w-5 h-5" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow p-6">{sections[activeSection]}</div>
      </div>
    </div>
  );
};

export default Documentation;
