import {
  ImageIcon,
  Search,
  ScanLine,
  Target
} from "lucide-react";

const SUGGESTIONS = [
  {
    id: 'object-detection',
    icon: Search,
    title: "Object Detection",
    description: "Identify and locate objects in images",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-50"
  },
  {
    id: 'facial-analysis',
    icon: Target,
    title: "Facial Analysis",
    description: "Detect faces, emotions, and attributes",
    iconColor: "text-emerald-600",
    hoverColor: "hover:bg-emerald-50"
  },
  {
    id: 'text-extraction',
    icon: ScanLine,
    title: "Text Extraction",
    description: "OCR and text recognition in images",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-50"
  },
  {
    id: 'image-classification',
    icon: ImageIcon,
    title: "Image Classification",
    description: "Categorize images with AI precision",
    iconColor: "text-indigo-600",
    hoverColor: "hover:bg-indigo-50"
  }
];

const ChatSuggestions = ({ onSuggestionClick, chatStarted }) => {
  if (chatStarted) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {SUGGESTIONS.map((suggestion) => {
        const Icon = suggestion.icon;
        return (
          <div
            key={suggestion.id}
            className={`
                border 
                border-gray-200 
                rounded-xl 
                p-4 
                flex 
                items-start 
                space-x-4 
                transition-all 
                duration-300 
                ${suggestion.hoverColor}
                hover:shadow-md
                cursor-pointer
                transform
              `}
            onClick={() => onSuggestionClick(suggestion.id)}
          >
            <Icon
              className={`
                  ${suggestion.iconColor} 
                  w-8 
                  h-8 
                  flex-shrink-0
                `}
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {suggestion.title}
              </h3>
              <p className="text-xs text-gray-600">
                {suggestion.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatSuggestions;
