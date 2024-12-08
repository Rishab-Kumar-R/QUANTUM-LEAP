import { useRef } from "react";
import { Send, Paperclip } from "lucide-react";

const ChatInput = ({
  message,
  setMessage,
  handleSendMessage,
  handleImageUpload,
  chatStarted
}) => {
  const fileInputRef = useRef(null);
  const textInputRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      handleSendMessage();
      textInputRef.current?.focus();
    }
  };

  return (
    <div
      className={`
        w-full 
        max-w-4xl 
        px-4 
        transition-all 
        duration-500 
        ${chatStarted ? 'fixed bottom-6' : 'relative'}
      `}
    >
      <form
        onSubmit={handleSubmit}
        className="
          flex 
          items-center 
          bg-white 
          border 
          border-gray-300 
          rounded-xl 
          p-3 
          shadow-sm 
          space-x-2
          transition-all
          duration-500
        "
      >
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerFileInput}
            className="
              p-2 
              text-gray-500 
              hover:bg-gray-100 
              rounded-lg 
              transition-colors
              focus:outline-none
            "
          >
            <Paperclip className="w-5 h-5" />
          </button>
        </div>

        <input
          ref={textInputRef}
          type="text"
          placeholder="Type your message..."
          className="
            flex-grow 
            px-4
            py-3 
            bg-gray-100 
            rounded-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-indigo-500
            text-sm
          "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
        />

        <button
          type="submit"
          disabled={!message.trim()}
          className="
            p-2 
            bg-indigo-600 
            text-white 
            rounded-lg 
            shadow 
            hover:bg-indigo-500 
            transition
            disabled:bg-gray-300
            disabled:cursor-not-allowed
          "
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
