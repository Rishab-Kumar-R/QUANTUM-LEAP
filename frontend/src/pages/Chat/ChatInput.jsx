import { useRef, useState } from "react";
import { Send, Paperclip, X } from "lucide-react";

const ChatInput = ({ handleSendMessage, chatStarted }) => {
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const textInputRef = useRef(null);

  // Trigger file input click
  const triggerFileInput = () => fileInputRef.current?.click();

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Clear the selected image
  const handleClearImage = () => {
    setImagePreview(null);
    fileInputRef.current.value = ""; // Reset file input
  };

  // Handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() || imagePreview) {
      handleSendMessage({
        text: message.trim() || null,
        image: imagePreview || null,
      });

      // Clear the inputs after sending
      setMessage("");
      handleClearImage();
      textInputRef.current?.focus();
    }
  };

  const adjustTextareaHeight = () => {
    textInputRef.current.style.height = "auto";
    textInputRef.current.style.height = `${textInputRef.current.scrollHeight}px`;
  };

  return (
    <div
      className={`w-full max-w-4xl px-4 ${
        chatStarted ? "fixed bottom-6" : "relative"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-end bg-white border border-gray-300 rounded-xl p-3 shadow-sm space-x-2"
      >
        <div>
          {imagePreview && (
            <div className="relative w-40 h-28 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={handleClearImage}
                className="absolute top-1 right-1 p-1 text-white bg-gray-400 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerFileInput}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            <Paperclip className="w-5 h-5" />
          </button>
        </div>

        <textarea
          ref={textInputRef}
          placeholder="Type your message..."
          className="flex-grow px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            adjustTextareaHeight();
          }}
          maxLength={500}
          rows={1}
          style={{ height: "auto" }}
        />

        <button
          type="submit"
          disabled={!message.trim() && !imagePreview}
          className="p-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
