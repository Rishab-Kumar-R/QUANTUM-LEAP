import { Link } from 'react-router-dom';
import { Command, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Command className="h-12 w-12 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-indigo-600">QUANTUM-LEAP</span>
        </div>

        <h1 className="text-8xl font-bold text-indigo-600">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Page not found</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Oops! It seems like you&apos;ve ventured into unknown territory. 
            The page you&apos;re looking for has quantum leaped to another dimension.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
            className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 w-full sm:w-auto group transition-all duration-300"
            asChild
          >
            <Link to="/" className="flex items-center justify-center">
              <Command className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              Return Home
            </Link>
          </Button>

          <Button
            variant="outline"
            className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 w-full sm:w-auto group"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
