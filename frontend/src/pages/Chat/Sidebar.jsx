import { useState, useCallback } from "react";
import { 
  PanelLeftOpen, 
  PanelLeftClose, 
  Plus, 
  Layers,
  Zap,
  Settings,
  Search,
  Trash2,
  MoreHorizontal
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);

  const sidebarSections = [
    { 
      id: 'recent', 
      icon: <Layers className="w-5 h-5" />, 
      title: 'Conversations',
      items: [
        { id: 1, name: "Quantum Computing", timestamp: "2d ago" },
        { id: 2, name: "AI Recognition", timestamp: "Today" },
        { id: 3, name: "Machine Learning", timestamp: "Yesterday" }
      ]
    },
    { 
      id: 'projects', 
      icon: <Zap className="w-5 h-5" />, 
      title: 'Active Projects',
      items: [
        { id: 1, name: "Neural Networks", timestamp: "In Progress" },
        { id: 2, name: "Image Analysis", timestamp: "Drafting" }
      ]
    }
  ];

  const filteredSections = sidebarSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  const handleNewChat = useCallback(() => {
    console.log("New chat initiated");
  }, []);

  const handleClearHistory = useCallback(() => {
    console.log("Chat history cleared");
  }, []);

  return (
    <div
      className={`
        ${sidebarOpen ? "w-72" : "w-20"} 
        bg-white 
        border-r border-indigo-100 
        h-screen 
        flex flex-col 
        transition-all 
        duration-300 
        ease-in-out 
        shadow-sm 
        relative
        overflow-hidden
      `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-indigo-100">
        {sidebarOpen && (
          <div className="flex items-center space-x-3">
            <h2 className="text-indigo-800 font-semibold text-lg">Quantum Leap</h2>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="
            p-2 
            text-indigo-500 
            hover:bg-indigo-50 
            rounded-full 
            transition-colors
            ml-auto
          "
        >
          {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
      </div>

      {/* Search and New Chat */}
      <div className="p-4 border-b border-indigo-100">
        <div className={`flex ${sidebarOpen ? 'space-x-2' : 'justify-center'}`}>
          {sidebarOpen ? (
            <>
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search chats..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                    w-full 
                    px-3 
                    py-2 
                    border 
                    border-indigo-100 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-indigo-500
                  "
                />
                <Search className="absolute right-3 top-3 text-indigo-400" size={16} />
              </div>
              <button
                onClick={handleNewChat}
                className="
                  p-2 
                  bg-indigo-500 
                  text-white 
                  rounded-lg 
                  hover:bg-indigo-600 
                  transition
                "
              >
                <Plus size={20} />
              </button>
            </>
          ) : (
            <button
              onClick={handleNewChat}
              className="
                p-2 
                text-indigo-500 
                hover:bg-indigo-50 
                rounded-full 
                transition
              "
            >
              <Plus size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="flex-grow overflow-y-auto pt-4 custom-scrollbar">
        {filteredSections.map((section) => (
          section.items.length > 0 && (
            <div key={section.id} className="mb-4">
              {sidebarOpen && (
                <div className="px-4 mb-2 flex items-center justify-between text-indigo-400 text-xs font-medium uppercase tracking-wider">
                  <span>{section.title}</span>
                </div>
              )}
              
              {section.items.map((item) => (
                <div 
                  key={item.id}
                  className={`
                    flex items-center 
                    ${sidebarOpen ? 'px-4 py-2' : 'justify-center py-3'}
                    hover:bg-indigo-50 
                    cursor-pointer 
                    group
                    ${activeSection === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-indigo-500'}
                    transition-colors
                    relative
                  `}
                  onClick={() => setActiveSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    {sidebarOpen && (
                      <div className="flex justify-between items-center w-full">
                        <span className="text-sm font-medium truncate max-w-[160px]">
                          {item.name}
                        </span>
                        <span className="text-xs text-indigo-400 ml-2">
                          {item.timestamp}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* More Options */}
                  {sidebarOpen && hoveredItem === item.id && (
                    <button 
                      className="
                        absolute 
                        right-4 
                        text-indigo-400 
                        hover:text-indigo-600 
                        hover:bg-indigo-100 
                        rounded-full 
                        p-1 
                        transition
                      "
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  )}
                  {!sidebarOpen && (
                    <div className="
                      absolute 
                      left-full 
                      ml-2 
                      bg-indigo-600 
                      text-white 
                      text-xs 
                      px-2 py-1 
                      rounded 
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity
                      pointer-events-none
                      z-10
                    ">
                      {item.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="border-t border-indigo-100 p-4 space-y-2">
        <button
          onClick={handleClearHistory}
          className={`
            w-full 
            flex 
            ${sidebarOpen ? 'justify-between' : 'justify-center'}
            items-center 
            p-2 
            hover:bg-indigo-50 
            rounded-lg 
            text-red-500 
            hover:text-red-700 
            transition-colors
            group
          `}
        >
          <Trash2 className="w-5 h-5 group-hover:animate-pulse" />
          {sidebarOpen && <span className="text-sm">Clear History</span>}
        </button>
        <button
          className={`
            w-full 
            flex 
            ${sidebarOpen ? 'justify-between' : 'justify-center'}
            items-center 
            p-2 
            hover:bg-indigo-50 
            rounded-lg 
            text-indigo-500 
            hover:text-indigo-700 
            transition-colors
            group
          `}
        >
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          {sidebarOpen && <span className="text-sm">Settings</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
